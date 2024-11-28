const express = require("express");
const axios = require("axios")
const xml2js = require('xml2js');


const app = express()

app.get("/", async(req, res) => {

    const data=await loadData()
    return res.json({ message: data })
})

const url = "https://v22-services.hub.wine/xml/4CW-REALWORLD-4EB84B"
const loadData = async () => {
    try {

        const parser = new xml2js.Parser();

        const response = await axios.get(url)

        const jsonData=await parser.parseStringPromise(response.data)

        return jsonData;
    }
    catch (error) {
        console.error("Error in fetching data:", error);
    }
}

loadData()
app.listen(3000, () => {
    console.log("server started at port 3000")
})