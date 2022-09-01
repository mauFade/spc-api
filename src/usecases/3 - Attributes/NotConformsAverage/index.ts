import { NotConformsAverageController } from "./NotConformsAverageController";
import { NotConformsAverageUseCase } from "./NotConformsAverageUseCase";

const notAverageUseCase = new NotConformsAverageUseCase();

const calculateNotConformsAverageController = new NotConformsAverageController(
  notAverageUseCase
);

export { calculateNotConformsAverageController };
