import { calculateProductsLoss } from "../../../utils/4 - Quadratic Loss/calculateProductsLoss";
import { IProductLossDTO } from "./ProductLossDTO";

export class ProductLossUseCase {
  async calculateProductLoss({
    dataArray,
    cost,
    detour,
    meta,
  }: IProductLossDTO) {
    if (!dataArray || !cost || !detour || !meta) {
      throw new Error("Data missing for calculation.");
    }

    const result = calculateProductsLoss(
      JSON.parse(dataArray),
      cost,
      detour,
      meta
    );

    return result;
  }
}
