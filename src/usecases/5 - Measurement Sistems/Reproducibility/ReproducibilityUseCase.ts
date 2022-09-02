import { calculateEstimatedReproducibility } from "../../../utils/5 - Measurement Sistems/calculateEstimatedReproducibility";
import { IReproducibilityDTO } from "./ReproducibilityDTO";

export class ReproducibilityUseCase {
  async calculateReproducibility({
    minAverage,
    maxAverage,
    D2Const,
  }: IReproducibilityDTO) {
    if (!minAverage || !maxAverage || !D2Const) {
      throw new Error("All data is required.");
    }

    const result = calculateEstimatedReproducibility(
      maxAverage,
      minAverage,
      D2Const
    );

    return result;
  }
}
