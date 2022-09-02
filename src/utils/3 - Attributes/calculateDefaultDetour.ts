import { calculateNotConformsFraction } from "./calculateNotConformsAverageFraction";

/**
 * Método para cálculo do desvio padrão
 * da fração MÉDIA entre produtos não funcionais e produtos verificados
 * @param deffectualProductsArray Array de quantidades de produtos defeituosos
 * @param verifiedProductsArray Array de quantidades de produtos verificados
 * @returns Desvio padrão
 */
export const calculateDefaultDetour = (
  deffectualProductsArray: number[],
  verifiedProductsArray: number[]
): number => {
  const defaultFractionNotConform = calculateNotConformsFraction(
    deffectualProductsArray,
    verifiedProductsArray
  );

  const result =
    Math.sqrt(defaultFractionNotConform * (1 - defaultFractionNotConform)) /
    Math.sqrt(verifiedProductsArray[0]);

  return Number(result.toFixed(4));
};
