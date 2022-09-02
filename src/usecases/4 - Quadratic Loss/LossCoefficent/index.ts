import { LossCoefficientUseCase } from "./LossCoefficientUseCase";
import { LossCoefficientController } from "./LossCorfficientController";

const lossCoefficientService = new LossCoefficientUseCase();

const calculateLossCoefficientController = new LossCoefficientController(
  lossCoefficientService
);

export { calculateLossCoefficientController };
