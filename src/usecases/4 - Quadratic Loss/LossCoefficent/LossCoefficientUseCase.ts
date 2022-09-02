import { calculateLossCoefficient } from "../../../utils/4 - Quadratic Loss/calculateLossCoefficient";
import { ILossCoefficientDTO } from "./LossCoefficentDTO";

export class LossCoefficientUseCase {
  async calculateLossCoefficient({
    metaValueDetour,
    repairCost,
  }: ILossCoefficientDTO) {
    if (!metaValueDetour || !repairCost) {
      throw new Error("All parameters are required for calculation.");
    }

    const result = calculateLossCoefficient(repairCost, metaValueDetour);

    return result;
  }
}
