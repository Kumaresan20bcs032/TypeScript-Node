import express, { Request, Response } from 'express';

const app: any = express();

app.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Application is fine working" });
})

// Convert the environment variable to a number
const PORT: number = 3000

app.listen(PORT, () => {
    console.log(`Server started at http://127.0.0.1:${PORT}`);
});
