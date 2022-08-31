/**
 * Função para calcular média
 * @param data Array de dados
 * @param quantity Quantidade de itens
 * @returns Média
 */
export const calculateAverage = (data: number[], quantity: number): number => {
  const sum = data.reduce((sum, value) => sum + value, 0);

  const result = sum / quantity;

  return result;
};
