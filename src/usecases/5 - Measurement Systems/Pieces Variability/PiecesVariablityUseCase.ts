import { calculatePiecesVariablity } from "../../../utils/5 - Measurement Sistems/calculatePiecesVariability";
import { IPiecesVariabilityDTO } from "./PiecesVariabilityDTO";

export class PiecesVariabilityUseCase {
  async calculatePiecesVariablity({ d2, max, min }: IPiecesVariabilityDTO) {
    if (!d2 || !max || !min) {
      throw new Error("All data must be sent");
    }

    const result = calculatePiecesVariablity(d2, max, min);

    return result;
  }
}
