/**
 * Método que calcular coeficinte de perda em um processo
 * @param cost Custo do reparo no processo
 * @param detour Desvio da meta
 * @returns Coeficiente de perda
 */
export const calculateLossCoefficient = (
  cost: number,
  detour: number
): number => {
  const powerDetour = Math.pow(detour, 2);

  const coefficientK = cost * powerDetour;

  return coefficientK;
};
