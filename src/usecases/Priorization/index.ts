import { PriorizationController } from "./PriorizationController";
import { PriorizationUseCase } from "./PriorizationUseCase";

const calculateUseCase = new PriorizationUseCase();

const calculatePriozirationController = new PriorizationController(
  calculateUseCase
);

export { calculateUseCase, calculatePriozirationController };
