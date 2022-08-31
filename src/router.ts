import { Router } from "express";
import { calculateAverageController } from "./usecases/Average";
import { calculateCapacityController } from "./usecases/Capacity";
import { calculateKnowledgeController } from "./usecases/Knowledge";
import { calculatePriozirationController } from "./usecases/Priorization";
import { calculateQualityController } from "./usecases/Quality";

const router = Router();

router.get("/api/v1/calculate/priorization", (request, response) => {
  return calculatePriozirationController.handle(request, response);
});

router.get("/api/v1/calculate/quality", (request, response) => {
  return calculateQualityController.handle(request, response);
});

router.get("/api/v1/calculate/knowledge", (request, response) => {
  return calculateKnowledgeController.handle(request, response);
});

router.get("/api/v1/calculate/capacity", (request, response) => {
  return calculateCapacityController.handle(request, response);
});

router.get("/api/v1/calculate/average", (request, response) => {
  return calculateAverageController.handle(request, response);
});

export { router };
