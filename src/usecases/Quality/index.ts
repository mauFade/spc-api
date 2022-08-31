import { QualityController } from "./QualityController";
import { QualityUseCase } from "./QualityUseCase";

const qualityUseCase = new QualityUseCase();

const calculateQualityController = new QualityController(qualityUseCase);

export { qualityUseCase, calculateQualityController };
