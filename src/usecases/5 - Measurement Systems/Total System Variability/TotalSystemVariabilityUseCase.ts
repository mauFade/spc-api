import { calculateTotalSystemVariability } from "../../../utils/5 - Measurement Sistems/calculateTotalSystemVariability";
import { ITotalSystemVariabilityDTO } from "./TotalSystemVariabilityDTO";

export class TotalSystemVariabilityUseCase {
  async calculateTotalSystemVariability({
    d2,
    max,
    min,
    opereators,
    system,
  }: ITotalSystemVariabilityDTO) {
    if (!d2 || !max || !min || !opereators || !system) {
      throw new Error("All data id required");
    }

    const result = calculateTotalSystemVariability(
      d2,
      max,
      min,
      system,
      opereators
    );

    return result;
  }
}
