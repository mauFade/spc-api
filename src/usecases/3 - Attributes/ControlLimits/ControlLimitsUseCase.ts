import { calculateControlLimits } from "../../../utils/3 - Attributes/calculateControlLimits";
import { IControlLimitDTO } from "./ControlLimitsDTO";

export class ControlLimitsUseCase {
  async calculateLimits({
    deffectualProductsArray,
    verifiedProductsArray,
  }: IControlLimitDTO) {
    if (!verifiedProductsArray || !deffectualProductsArray) {
      throw new Error("All data are required");
    }

    if (
      JSON.parse(verifiedProductsArray).length !==
      JSON.parse(deffectualProductsArray).length
    ) {
      throw new Error("Please provide subgroups with the same length.");
    }

    const result = calculateControlLimits(
      JSON.parse(deffectualProductsArray),
      JSON.parse(verifiedProductsArray)
    );

    return result;
  }
}
