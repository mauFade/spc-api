/**
 * Função para calcular o índice de priorização
 * @param IQP Índice de qualidade
 * @param C Conhecimento técnico
 * @param Cpk Valor de capacidade
 */
export const calculatePriozation = (IQP: number, C: number, Cpk: number) => {
  /**
   * Índice de priorização é igual ao índ. de qualidade
   * dividido pelo valor de capacidade vezes o conhecimento técnico
   */
  const IPP = IQP / (Cpk * C);

  return IPP;
};
