import { DefaultDetourController } from "./DefaultDetourController";
import { DefaultDetourUseCase } from "./DefaultDetourUseCase";

const detourService = new DefaultDetourUseCase();

const calculateDefaultDetourController = new DefaultDetourController(
  detourService
);

export { calculateDefaultDetourController };
