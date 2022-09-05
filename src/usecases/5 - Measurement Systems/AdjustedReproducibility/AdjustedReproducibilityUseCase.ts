import { calculateAdjustedReproducibility } from "../../../utils/5 - Measurement Sistems/calculateAdjustedReproducibility";
import { IAdjustedReproducibilityDTO } from "./AdjustedReproducibilityDTO";

export class AdjustedReproducibilityUseCase {
  async calculateAdjustedReproducibility({
    D2Const,
    cicles,
    maxAverage,
    minAverage,
    pieces,
  }: IAdjustedReproducibilityDTO) {
    if (!D2Const || !cicles || !maxAverage || !minAverage || !pieces) {
      throw new Error("All data is required.");
    }

    const result = calculateAdjustedReproducibility(
      minAverage,
      maxAverage,
      D2Const,
      pieces,
      cicles
    );

    return result;
  }
}
