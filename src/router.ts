import { Router } from "express";
import { calculatePriozirationController } from "./usecases/Priorization";

const router = Router();

router.get("/api/v1/calculate/priorization", (request, response) => {
  return calculatePriozirationController.handle(request, response);
});

export { router };
