import { CapacityController } from "./CapacityController";
import { CapacityUseCase } from "./CapacityUseCase";

const capacityService = new CapacityUseCase();

const calculateCapacityController = new CapacityController(capacityService);

export { calculateCapacityController };
