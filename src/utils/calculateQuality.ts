/**
 * Função para calcular o índice de qualidade de um processo
 * @param ICQ Índice de importância
 * @param RKJ Intensidade das relações atribuídas
 */
export const calculateQuality = (ICQ: number, RKJ: number[]) => {
  const result: number[] = [];

  for (const index in RKJ) {
    result[index] = ICQ * RKJ[index];
  }

  const sum = result.reduce((sum, value) => sum + value, 0);

  return sum;
};
