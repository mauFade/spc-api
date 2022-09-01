import { DefaultDetourController } from "./DefaultDetourController";
import { DefaultDetourUseCase } from "./DefaultDetourUseCase";

const detourUseCase = new DefaultDetourUseCase();

const calculateDefaultDetourController = new DefaultDetourController(
  detourUseCase
);

export { detourUseCase, calculateDefaultDetourController };
