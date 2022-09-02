import { calculateFinantialLoss } from "../../../utils/4 - Quadratic Loss/calculateFinantialLoss";
import { IFinantialLossDTO } from "./FinantialLossDTO";

export class FinantialLossUseCase {
  async calculateFinantialLoss({
    fetchedValue,
    metaDetour,
    repairCost,
    metaValue,
  }: IFinantialLossDTO) {
    if (!fetchedValue || !metaValue || !metaDetour || !repairCost) {
      throw new Error("All data must be sent for calculation");
    }

    const result = calculateFinantialLoss(
      metaValue,
      fetchedValue,
      repairCost,
      metaDetour
    );

    return result;
  }
}
