/**
 * Função para calcular variablidade peça a peça
 * @param d2 Constante d2
 * @param max Média maior
 * @param min Média menor
 * @returns Variablidade peça a peça
 */
export const calculatePiecesVariablity = (
  d2: number,
  max: number,
  min: number
): {
  pieceVariability: number;
  defaultDetour: number;
} => {
  const CONSTANT_VARIABILITY = 5.15;
  // Peça com maior média menos peça com menor média
  const Rp = max - min;

  const defaultDetour = Number((Number(Rp.toFixed(2)) / d2).toFixed(2));

  const pieceVariablity = defaultDetour * CONSTANT_VARIABILITY;

  return {
    pieceVariability: Number(pieceVariablity.toFixed(2)),
    defaultDetour,
  };
};
