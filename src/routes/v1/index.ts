import { Router } from "express";

import testRouter from "./router";

const router: Router = Router();

router.use([testRouter]);

export default router;
