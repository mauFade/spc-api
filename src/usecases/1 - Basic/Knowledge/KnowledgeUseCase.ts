import { calculateKnowledge } from "../../../utils/1 - Basic/calculateKnowledge";
import { IKnowledgeDTO } from "./KnowledgeDTO";

export class KnowledgeUseCase {
  async calculate({ capacity, priority, quality }: IKnowledgeDTO) {
    if (!capacity || !priority || !quality) {
      throw new Error("All data is required.");
    }

    const data = calculateKnowledge(quality, priority, capacity);

    if (data <= 0.2) {
      return { level: "Muito pouco", data };
    }
    if (data <= 0.4) {
      return { level: "Pouco", data };
    }

    if (data <= 0.6) {
      return { level: "Moderado", data };
    }

    if (data <= 0.8) {
      return { level: "Grande", data };
    }

    if (data >= 1) {
      return { level: "Total", data };
    }
  }
}
