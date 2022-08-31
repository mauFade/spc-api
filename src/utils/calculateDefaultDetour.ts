import { calculateAverage } from "./calculateAverage";

/**
 * Função para calcular desvio padrão
 * @param data Array de dados
 * @returns Desvio padrão dos dados
 */
export const calculateDefaultDetour = (data: number[]): number => {
  const average = calculateAverage(data);

  const auxArr: number[] = [];

  for (const index in data) {
    /**
     * Dado na posicão INDEX do array
     * menos a média do array
     * elevado ao quadrado
     */
    auxArr[index] = (data[index] - average) * (data[index] - average);
  }

  /**
   * Raiz quadrada da soma
   * de todos os itens do array dividido
   * pela quantidade
   */
  const result = Math.sqrt(
    auxArr.reduce((sum, index) => sum + index, 0) / data.length
  );

  return result;
};
