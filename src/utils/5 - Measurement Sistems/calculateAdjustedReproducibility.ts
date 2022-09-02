import { ISystemsResponse } from "../../interfaces/systems";

/**
 * Função para calcular a reprodutibilidade ajustada
 * @param min Média maior
 * @param max Média menor
 * @param d2 Constante d2
 * @param pieces Número de peças
 * @param cicles Número de ciclos
 * @returns Reprodutibilidade ajustada
 */
export const calculateAdjustedReproducibility = (
  min: number,
  max: number,
  d2: number,
  pieces: number,
  cicles: number
): ISystemsResponse => {
  const REPRODUCIBILITY_CONSTANT = 5.15;

  const defaultDetour = Number((max - min).toFixed(3)) / d2;

  const firstSquareValue =
    Number(defaultDetour.toFixed(3)) * REPRODUCIBILITY_CONSTANT;

  const secondSquareValue = Math.pow(firstSquareValue, 2);

  const operatorVariation = Math.sqrt(
    firstSquareValue - secondSquareValue / (pieces * cicles)
  );

  return {
    operatorVariation: Number(operatorVariation.toFixed(4)),
    defaultDetour: Number(
      (Number(operatorVariation.toFixed(4)) / REPRODUCIBILITY_CONSTANT).toFixed(
        4
      )
    ),
  };
};
