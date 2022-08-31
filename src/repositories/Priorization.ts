import { IPriorizationDTO } from "../usecases/Priorization/PriorizationDTO";

export interface IPriorizationRepository {
  calculateCapacity: (data: IPriorizationDTO) => Promise<any>;
}
