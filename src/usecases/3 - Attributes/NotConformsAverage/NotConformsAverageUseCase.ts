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

    // Subgrupos devem ser maiores que 25, seguindo regra
    if (
      JSON.parse(verifiedProductsArray).length < 25 ||
      JSON.parse(deffectualProdutctsArray).length < 25
    ) {
      throw new Error("Subgroups length must be greater than 25 items.");
    }

    if (
      JSON.parse(verifiedProductsArray).length !==
      JSON.parse(deffectualProdutctsArray).length
    ) {
      throw new Error("Please provide subgroups with the same length.");
    }

    const result = calculateNotConformsFraction(
      JSON.parse(deffectualProdutctsArray),
      JSON.parse(verifiedProductsArray)
    );

    return result;
  }
}
