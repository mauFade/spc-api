import { calculateSystemVariability } from "./calculateSystemVariablity";
import { calculatePiecesVariablity } from "./calculatePiecesVariability";

/**
 *  Função para calcular a variabilidade total do sistema e devio padrão total do sistema
 * @param d2 Constante d2
 * @param max Média maior
 * @param min Média menor
 * @param system Repetitividade do equipamento
 * @param opereators Reprodutibilidade dos operadores
 * @returns Variabilidade total do sistema e devio padrão total do sistema
 */
export const calculateTotalSystemVariability = (
  d2: number,
  max: number,
  min: number,
  system: number,
  opereators: number
): { totalSystemVariability: number; totalSystemDefaultDetour: number } => {
  const pieces = calculatePiecesVariablity(d2, max, min);

  const systemData = calculateSystemVariability(system, opereators);

  const totalSystemVariability = Number(
    Math.sqrt(
      Math.pow(systemData.systemVariability, 2) +
        Math.pow(pieces.pieceVariability, 2)
    ).toFixed(2)
  );

  const totalSystemDefaultDetour = Number(
    Math.sqrt(
      Math.pow(systemData.defaultDetour, 2) + Math.pow(pieces.defaultDetour, 2)
    ).toFixed(2)
  );

  return { totalSystemVariability, totalSystemDefaultDetour };
};
