import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "../types";

const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    const { status, message } = err;
    console.log("CustomError: ", status + " " + message);
    res.status(status).json({
      type: "error",
      status,
      message,
    });
  } else {
    console.log("DefaultError: ", err);
    res.status(500).send("Sth went wrong!");
  }
};

export default errorHandler;
