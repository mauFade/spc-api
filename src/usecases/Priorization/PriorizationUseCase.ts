import { IPriorizationRepository } from "../../repositories/Priorization";
import { IPriorizationDTO } from "./PriorizationDTO";

export class PriorizationUseCase {
  constructor(private priorizationRepository: IPriorizationRepository) {}

  async fetchResult({ IQP, IPP, C, Cpk }: IPriorizationDTO) {}
}
