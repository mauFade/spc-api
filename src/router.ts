import { Router } from "express";
import { calculateAverageController } from "./usecases/Average";
import { calculateAverageControlController } from "./usecases/AverageControl";
import { calculateAverageLimitControlController } from "./usecases/AverageLimitControl";
import { calculateCapacityController } from "./usecases/Capacity";
import { calculateDefaultDetourController } from "./usecases/DefaultDetour";
import { calculateDefaultSampleDetourController } from "./usecases/DefaultSampleDetour";
import { calculateKnowledgeController } from "./usecases/Knowledge";
import { calculatePriozirationController } from "./usecases/Priorization";
import { calculateQualityController } from "./usecases/Quality";
import { calculateRangeController } from "./usecases/Range";

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

router.get("/api/v1/calculate/detour", (request, response) => {
  return calculateDefaultDetourController.handle(request, response);
});

router.get("/api/v1/calculate/sample/detour", (request, response) => {
  return calculateDefaultSampleDetourController.handle(request, response);
});

router.get("/api/v1/calculate/range", (request, response) => {
  return calculateRangeController.handle(request, response);
});

router.get("/api/v1/calculate/average/control", (request, response) => {
  return calculateAverageControlController.handle(request, response);
});

router.get("/api/v1/calculate/average/control/medium", (request, response) => {
  return calculateAverageLimitControlController.handle(request, response);
});

export { router };
