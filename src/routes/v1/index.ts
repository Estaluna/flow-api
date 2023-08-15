import { Router } from "express";

import HealthRouter from "./health-router";

const router: Router = Router();

router.use([HealthRouter]);

export default router;
