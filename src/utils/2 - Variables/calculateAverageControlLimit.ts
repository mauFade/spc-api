import { IDNConstants } from "../../interfaces/dnconstants";

/**
 * Função para calcular o limite superior e inferior de um determinado array
 * @param DNConstants Constantes DN do array
 * @param range Amplitude do array
 * @returns Limite superior e inferior
 */
export const calculateAverageControlLimit = (
  DNConstants: IDNConstants,
  range: number
) => {
  /**
   * Limite de controle superior (3 casas pra direita)
   */
  const superiorLimitControl = DNConstants.D4 * range;

  /**
   * Limite de controle superior (3 casas pra esquerda)
   */
  const inferiorLimitControl = DNConstants.D3 * range;

  return {
    superiorLimitControl: Number(superiorLimitControl.toFixed(2)),
    inferiorLimitControl: Number(inferiorLimitControl.toFixed(2)),
  };
};
