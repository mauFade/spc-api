/**
 *
 * @param IQP Índice de qualidade
 * @param IPP Ínidice de priorização
 * @param C Conhecimento técnico
 * @returns CPK Capacidade
 */
export const calculateCapacity = (IQP: number, IPP: number, C: number) => {
  const result = IQP / (C * IPP);

  return result;
};
