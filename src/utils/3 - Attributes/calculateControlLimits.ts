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

  // Limite de controle superior
  const superiorControlLimit: number[] = [];

  for (const item in defaultDetour) {
    superiorControlLimit[item] = defaultFraction + 3 * defaultDetour[item];
  }

  // Limite de controle inferior
  const inferiorControlLimit: number[] = [];

  for (const item in defaultDetour) {
    inferiorControlLimit[item] = defaultFraction - 3 * defaultDetour[item];

    // Por regra, se o limite inferior for negativo, deve ser fixado em 0.
    if (inferiorControlLimit[item] < 0) {
      inferiorControlLimit[item] = 0;
    }
  }

  return {
    superiorControlLimit: superiorControlLimit[0],
    inferiorControlLimit: inferiorControlLimit[0],
  };
};
