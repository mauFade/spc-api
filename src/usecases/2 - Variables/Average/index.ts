import { AverageController } from "./AverageController";
import { AverageUseCase } from "./AverageUseCase";

const averageUseCase = new AverageUseCase();

const calculateAverageController = new AverageController(averageUseCase);

export { averageUseCase, calculateAverageController };
