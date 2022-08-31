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
    auxArr[index] = Math.pow(data[index] - average, 2);
  }

  let lenght: number;

  if (data.length > 30) {
    lenght = data.length;
  } else {
    lenght = data.length - 1;
  }

  const sum = auxArr.reduce((sum, index) => sum + index, 0);

  /**
   * Raiz quadrada da soma
   * de todos os itens do array dividido
   * pela quantidade
   */
  const squareRoot = sum / lenght;
  const result = Math.sqrt(squareRoot);
  return result;
};
