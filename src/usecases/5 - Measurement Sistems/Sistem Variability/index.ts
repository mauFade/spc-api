import { SystemVariabilityController } from "./SystemVariabilityController";
import { SystemVariabilityUseCase } from "./SystemVariabilityUseCase";

const systemService = new SystemVariabilityUseCase();

export const calculateSystemVariabilityController =
  new SystemVariabilityController(systemService);
