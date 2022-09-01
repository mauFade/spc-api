import { NotConformsController } from "./NotConformsController";
import { NotConformsUseCase } from "./NotConformsUseCase";

const notConformsUseCase = new NotConformsUseCase();

const calculateNotConformsController = new NotConformsController(
  notConformsUseCase
);

export { notConformsUseCase, calculateNotConformsController };
