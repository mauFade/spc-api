import { AverageLimitControlController } from "./AverageLimitControlController";
import { AverageLimitControlUseCase } from "./AverageLimitControlUseCase";

const averageUseCase = new AverageLimitControlUseCase();

const calculateAverageLimitControlController =
  new AverageLimitControlController(averageUseCase);

export { averageUseCase, calculateAverageLimitControlController };
