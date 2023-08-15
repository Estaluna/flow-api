import { ValidationError as JoiValidationError } from "joi";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof JoiValidationError) {
    res.status(400).json({ error: err.message });
  } else {
    next(err);
  }
}
