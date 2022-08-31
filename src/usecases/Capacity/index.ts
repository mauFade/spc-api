import { CapacityController } from "./CapacityController";
import { CapacityUseCase } from "./CapacityUseCase";

const capacityUseCase = new CapacityUseCase();

const calculateCapacityController = new CapacityController(capacityUseCase);

export { capacityUseCase, calculateCapacityController };
