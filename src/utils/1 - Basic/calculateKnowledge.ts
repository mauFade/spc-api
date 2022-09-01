/**
 * Função para calcular o índice de conhecimento técnico
 * @param IQP Índice de qualidade
 * @param IPP Índice de priorização
 * @param CPK Valor da capacidade
 * @returns C Conhecimento técnico
 */
export const calculateKnowledge = (IQP: number, IPP: number, CPK: number) => {
  const result = IQP / (CPK * IPP);

  return result;
};
