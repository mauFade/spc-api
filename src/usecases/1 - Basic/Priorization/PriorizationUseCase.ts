import { calculatePriozation } from "../../../utils/1 - Basic/calculatePriorization";
import { IPriorizationDTO } from "./PriorizationDTO";

export class PriorizationUseCase {
  async calculatePriozation({
    capacity,
    knowledge,
    quality,
  }: IPriorizationDTO) {
    if (!capacity || !knowledge || !quality) {
      throw new Error("All data is required for calculation.");
    }

    // Índice de priorização é igual ao índ. de qualidade dividido pelo valor de capacidade vezes o conhecimento técnico
    const data = calculatePriozation(capacity, knowledge, quality);

    return data;
  }
}
