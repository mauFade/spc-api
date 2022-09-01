import { ControlLimitController } from "./ControlLimitController";
import { ControlLimitsUseCase } from "./ControlLimitsUseCase";

const controlLimitService = new ControlLimitsUseCase();

const calculateControlLimitsController = new ControlLimitController(
  controlLimitService
);

export { calculateControlLimitsController };
