import { Request, Response } from "express";
import { validationResult } from "express-validator";

const validate = (req: Request, res: Response, next: Function) => {
  var err = validationResult(req);
  if (!err.isEmpty()) {
    console.log(err.mapped());
    res.sendStatus(400);
  } else {
    next();
  }
};

export default { validate };
