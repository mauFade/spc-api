/**
 * Função para calcular média
 * @param data Array de dados
 * @returns Média
 */
export const calculateAverage = (data: number[]): number => {
  const sum = data.reduce((sum, value) => sum + value, 0);

  const result = sum / data.length;

  return result;
};
