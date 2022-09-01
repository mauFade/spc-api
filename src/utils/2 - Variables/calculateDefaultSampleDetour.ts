import { calculateDefaultDetour } from "./calculateDefaultDetour";

/**
 * Função para calcular desvio padrão
 * @param data Array de dados
 * @returns Média de desvio padrão de médias amostrais
 */
export const calculateDefaultSampleDetour = (data: number[]) => {
  const detour = calculateDefaultDetour(data);

  /**
   * Média amostral dividido
   * pela raiz quadrada da quantidade
   */
  const result = detour / Math.sqrt(data.length);

  return result;
};
