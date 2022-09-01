import { IPriorizationDTO } from "../usecases/1 - Basic/Priorization/PriorizationDTO";

export interface IPriorizationRepository {
  calculatePriozationIndex: (data: IPriorizationDTO) => Promise<any>;
}
