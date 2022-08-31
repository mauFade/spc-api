import { IPriorizationRepository } from "../../repositories/Priorization";
import { calculatePriozation } from "../../utils/calculatePriorization";
import { IPriorizationDTO } from "./PriorizationDTO";

export class PriorizationUseCase {
  async calculatePriozation({ IQP, C, Cpk }: IPriorizationDTO) {
    if (!IQP || !C || !Cpk) {
      throw new Error("All data is required for calculation.");
    }

    // Índice de priorização é igual ao índ. de qualidade dividido pelo valor de capacidade vezes o conhecimento técnico
    const data = calculatePriozation(IQP, C, Cpk);

    return data;
  }
}
