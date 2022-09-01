import { calculateDefaultDetour } from "../../../utils/3 - Attributes/calculateDefaultDetour";
import { IDefaultDetourDTO } from "./DefaultDetourDTO";

export class DefaultDetourUseCase {
  async calculateDefaultDetour({
    deffectualProductsArray,
    verifiedProductsArray,
  }: IDefaultDetourDTO) {
    if (!verifiedProductsArray || !deffectualProductsArray) {
      throw new Error("All data are required");
    }

    // Subgrupos devem ser maiores que 25, seguindo regra
    if (
      JSON.parse(verifiedProductsArray).length < 25 ||
      JSON.parse(deffectualProductsArray).length < 25
    ) {
      throw new Error("Subgroups length must be greater than 25 items.");
    }

    if (
      JSON.parse(verifiedProductsArray).length !==
      JSON.parse(deffectualProductsArray).length
    ) {
      throw new Error("Please provide subgroups with the same length.");
    }

    const result = calculateDefaultDetour(
      JSON.parse(deffectualProductsArray),
      JSON.parse(verifiedProductsArray)
    );

    return result;
  }
}
