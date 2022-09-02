import { IControlLimits } from "../../interfaces/controlLimits";
import { calculateDefaultDetour } from "./calculateDefaultDetour";
import { calculateNotConformsFraction } from "./calculateNotConformsAverageFraction";

/**
 * Método para cálculo dos limites de controle
 * @param deffectualProductsArray Array de quantidades de produtos defeituosos
 * @param verifiedProductsArray Array de quantidades de produtos verificados
 * @returns Limite de controle inferior e superior
 */
export const calculateControlLimits = (
  deffectualProductsArray: number[],
  verifiedProductsArray: number[]
): IControlLimits => {
  const defaultDetour = calculateDefaultDetour(
    deffectualProductsArray,
    verifiedProductsArray
  );
  const defaultFraction = calculateNotConformsFraction(
    deffectualProductsArray,
    verifiedProductsArray
  );

  const superiorControlLimit = defaultFraction + 3 * defaultDetour;

  const inferiorControlLimit = defaultFraction - 3 * defaultDetour;

  return {
    superiorControlLimit: Number(superiorControlLimit.toFixed(3)),
    inferiorControlLimit: Number(inferiorControlLimit.toFixed(3)),
  };
};
