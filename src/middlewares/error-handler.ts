import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  //TODO check for errors
  next(err);
}
