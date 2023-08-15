import { Router } from "express";

import { HealthController } from "../../controllers/HealthController";

const healthController = new HealthController();

const router = Router();

router.post("/health", [healthController.healthCheck]);

export default router;
