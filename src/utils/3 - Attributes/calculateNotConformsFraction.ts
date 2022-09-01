/**
 * Função para verificar a fração de produtos não-conformes nos produtos verificados
 * @param deffectualProdutcts Produtos defeituosos
 * @param verifiedProducts Produtos verificados
 * @returns Fração de produtos não-conformes nos produtos verificados
 */
export const calculateNotConformsFraction = (
  deffectualProdutcts: number,
  verifiedProducts: number
): number => {
  const result = deffectualProdutcts / verifiedProducts;

  return result;
};
