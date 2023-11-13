import express, { Request, Response } from "express";

const app = express()

app.get('/', (_: Request, res: Response): void => {
  res.send('Hi there!')
})

app.listen(3000, (): void => {
  console.log("Listening on port 3000");
});
