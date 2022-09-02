import { AdjustedReproducibilityController } from "./AdjustedReproducibilityController";
import { AdjustedReproducibilityUseCase } from "./AdjustedReproducibilityUseCase";

const adjustedService = new AdjustedReproducibilityUseCase();

export const calculateAdjustedReproducibilityController =
  new AdjustedReproducibilityController(adjustedService);
