import { AverageControlController } from "./AverageControlController";
import { AverageControlUseCase } from "./AverageControlUseCase";

const averageControlUseCase = new AverageControlUseCase();

const calculateAverageControlController = new AverageControlController(
  averageControlUseCase
);

export { averageControlUseCase, calculateAverageControlController };
