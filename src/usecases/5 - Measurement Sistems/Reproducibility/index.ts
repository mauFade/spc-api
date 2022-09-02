import { ReproducibilityController } from "./ReproducibilityController";
import { ReproducibilityUseCase } from "./ReproducibilityUseCase";

const reproducibilityService = new ReproducibilityUseCase();

export const calculateReproducibilityController = new ReproducibilityController(
  reproducibilityService
);
