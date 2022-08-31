import { RangeController } from "./RangeController";
import { RangeUseCase } from "./RangeUseCase";

const rangeUseCase = new RangeUseCase();

const calculateRangeController = new RangeController(rangeUseCase);

export { rangeUseCase, calculateRangeController };
