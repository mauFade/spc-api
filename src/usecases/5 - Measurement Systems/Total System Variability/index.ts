import { TotalSystemVariabilityController } from "./TotalSystemVariabilityController";
import { TotalSystemVariabilityUseCase } from "./TotalSystemVariabilityUseCase";

const systemService = new TotalSystemVariabilityUseCase();

export const calculateTotalSystemVariabilityController =
  new TotalSystemVariabilityController(systemService);
