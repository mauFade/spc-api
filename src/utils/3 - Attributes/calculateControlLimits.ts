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
): any => {
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

  const responseArray: IControlLimits[] = [];

  for (let key = 0; key < inferiorControlLimit.length; key++) {
    responseArray.push({
      inferiorControlLimit: Number(inferiorControlLimit[key].toFixed(5)),
      superiorControlLimit: Number(superiorControlLimit[key].toFixed(5)),
    });
  }

  return responseArray;
};
