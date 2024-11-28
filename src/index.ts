import express, { Request, Response } from "express";

const app: any = express();


app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "application api working" })
})

app.listen(3000, () => {
    console.log("server started at port 3000")
})





