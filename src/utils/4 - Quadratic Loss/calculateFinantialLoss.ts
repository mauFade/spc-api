import { calculateLossCoefficient } from "./calculateLossCoefficient";

/**
 * Calcula a perda financeira de acordo os dados
 * @param meta Valor meta do processo
 * @param value Valor que o processo resultou
 * @param cost Custo de reparo
 * @param metaDetour Desvio da meta
 * @returns Perda financeira
 */
export const calculateFinantialLoss = (
  meta: number,
  value: number,
  cost: number,
  metaDetour: number
): number => {
  const coefficient = calculateLossCoefficient(cost, metaDetour);

  const result = coefficient * Math.pow(value - meta, 2);

  return result;
};
