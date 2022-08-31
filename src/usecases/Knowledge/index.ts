import { KnowledgeUseCase } from "./KnowledgeUseCase";
import { KnowledgeController } from "./KnowledeController";

const knowledgeUseCase = new KnowledgeUseCase();

const calculateKnowledgeController = new KnowledgeController(knowledgeUseCase);

export { knowledgeUseCase, calculateKnowledgeController };
