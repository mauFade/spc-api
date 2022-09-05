import { PiecesVariablityController } from "./PiecesVariablityController";
import { PiecesVariabilityUseCase } from "./PiecesVariablityUseCase";

const variabilityService = new PiecesVariabilityUseCase();

export const calculatePiecesVariabilityController =
  new PiecesVariablityController(variabilityService);
