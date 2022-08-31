import { IPriorizationDTO } from "../usecases/Priorization/PriorizationDTO";

export interface IPriorizationRepository {
  calculatePriozationIndex: (data: IPriorizationDTO) => Promise<any>;
}
