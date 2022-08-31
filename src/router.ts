import { Router } from "express";
import { calculatePriozirationController } from "./usecases/Priorization";
import { calculateQualityController } from "./usecases/Quality";

const router = Router();

router.get("/api/v1/calculate/priorization", (request, response) => {
  return calculatePriozirationController.handle(request, response);
});

router.get("/api/v1/calculate/quality", (request, response) => {
  return calculateQualityController.handle(request, response);
});

export { router };
