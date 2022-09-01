import { calculateNotConformsFraction } from "../../../utils/3 - Attributes/calculateNotConformsFraction";
import { INotConformsDTO } from "./NotConformsDTO";

export class NotConformsUseCase {
  async calculateNotConformsFraction({
    deffectualProdutcts,
    verifiedProducts,
  }: INotConformsDTO) {
    if (!deffectualProdutcts || !verifiedProducts) {
      throw new Error("All data are required.");
    }

    const result = calculateNotConformsFraction(
      Number(deffectualProdutcts),
      Number(verifiedProducts)
    );

    return Number(result.toFixed(3));
  }
}
