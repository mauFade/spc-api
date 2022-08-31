import { calculateDefaultDetour } from "./calculateDefaultDetour";

/**
 * Função para calcular desvio padrão
 * @param data Array de dados
 * @param quantity Quantidade de itens
 * @returns Média de desvio padrão de médias amostrais
 */
export const calculateDefaultSampleDetour = (
  data: number[],
  quantity: number
) => {
  const detour = calculateDefaultDetour(data, quantity);

  /**
   * Média amostral dividido
   * pela raiz quadrada da quantidade
   */
  const result = detour / Math.sqrt(quantity);

  return result;
};
