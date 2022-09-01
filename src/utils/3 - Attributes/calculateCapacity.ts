import { calculateNotConformsFraction } from "./calculateNotConformsAverageFraction";

/**
 * Função para calcular a porcentagem de capacidade de um sistema de produzir produtos conformes
 * @param deffectualProdutcts Array de valores de produtos defeituosos
 * @param verifiedProducts Array de valores de produtos verificados
 * @returns Porcentagem de capacidade
 */
export const calculateCapacity = (
  deffectualProdutcts: number[],
  verifiedProducts: number[]
): number => {
  const fraction = calculateNotConformsFraction(
    deffectualProdutcts,
    verifiedProducts
  );

  const capacityResponse = (1 - fraction) * 100;

  return capacityResponse;
};
