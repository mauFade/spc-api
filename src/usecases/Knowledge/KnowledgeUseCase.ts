import { calculateKnowledge } from "../../utils/calculateKnowledge";
import { IKnowledgeDTO } from "./KnowledgeDTO";

export class KnowledgeUseCase {
  async calculate({ CPK, IPP, IQP }: IKnowledgeDTO) {
    if (!CPK || !IPP || !IQP) {
      throw new Error("All data is required.");
    }

    const data = calculateKnowledge(IQP, IPP, CPK);

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
