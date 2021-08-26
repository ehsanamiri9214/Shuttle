import express, { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    error: {
      message: !!err.message ? err.message : "Something went wrong!",
    },
  });
};

export default errorHandler;
