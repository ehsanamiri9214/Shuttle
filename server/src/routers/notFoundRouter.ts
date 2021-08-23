import express, { Request, Response } from "express";

const router = express.Router();

router.all("*", (req: Request, res: Response) => {
  res.sendStatus(404);
});

export default router;
