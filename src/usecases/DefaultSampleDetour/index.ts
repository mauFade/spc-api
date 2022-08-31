import { DefaultSampleDetourController } from "./DefaultSampleDetourController";
import { DefaultSampleDetourUseCase } from "./DefaultSampleDetourUseCase";

const detourUseCase = new DefaultSampleDetourUseCase();

const calculateDefaultSampleDetourController =
  new DefaultSampleDetourController(detourUseCase);

export { detourUseCase, calculateDefaultSampleDetourController };
