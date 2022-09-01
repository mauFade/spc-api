import { Router } from "express";
import { calculateNotConformsController } from "./usecases/3 - Attributes/NotConforms";
import { calculateNotConformsAverageController } from "./usecases/3 - Attributes/NotConformsAverage";
import { calculateAverageController } from "./usecases/2 - Variables/Average";
import { calculateAverageControlController } from "./usecases/2 - Variables/AverageControl";
import { calculateAverageLimitControlController } from "./usecases/2 - Variables/AverageLimitControl";
import { calculateCapacityController } from "./usecases/1 - Basic/Capacity";
import { calculateDefaultDetourController } from "./usecases/2 - Variables/DefaultDetour";
import { calculateDefaultSampleDetourController } from "./usecases/2 - Variables/DefaultSampleDetour";
import { calculateKnowledgeController } from "./usecases/1 - Basic/Knowledge";
import { calculatePriozirationController } from "./usecases/1 - Basic/Priorization";
import { calculateQualityController } from "./usecases/1 - Basic/Quality";
import { calculateRangeController } from "./usecases/2 - Variables/Range";

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

router.get("/api/v1/3/calculate/notconforms", (request, response) => {
  return calculateNotConformsController.handle(request, response);
});

router.get("/api/v1/3/calculate/notconforms/average", (request, response) => {
  return calculateNotConformsAverageController.handle(request, response);
});

export { router };
