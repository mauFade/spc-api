/**
 * Função para calcular a reprodutibilidade estimada
 * @param max Média maior
 * @param min Média menos
 * @param d2 Constante d2
 * @returns Reprodutibilidade estimada
 */
export const calculateEstimatedReproducibility = (
  max: number,
  min: number,
  d2: number
): number => {
  const REPRODUCIBILITY_CONSTANT = 5.15;

  const defaultDetour = (max - min) / d2;

  const result = Number(defaultDetour.toFixed(3)) * REPRODUCIBILITY_CONSTANT;

  return Number(result.toFixed(4));
};
