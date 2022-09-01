import { calculateNotConformsFraction } from "../../../utils/3 - Attributes/calculateNotConformsAverageFraction";
import { INotConformsAverageDTO } from "./NotConformsAverageDTO";

export class NotConformsAverageUseCase {
  async calculateNotConformsFraction({
    deffectualProdutctsArray,
    verifiedProductsArray,
  }: INotConformsAverageDTO) {
    if (!verifiedProductsArray || !deffectualProdutctsArray) {
      throw new Error("All data are required");
    }

    const result = calculateNotConformsFraction(
      JSON.parse(deffectualProdutctsArray),
      JSON.parse(verifiedProductsArray)
    );

    return result;
  }
}
