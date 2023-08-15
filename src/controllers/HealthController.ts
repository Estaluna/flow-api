import { Request, Response } from "express";

class HealthController {
  public async healthCheck(req: Request, res: Response) {
    res.status(200).json({ message: "OK" });
  }
}

export { HealthController };
