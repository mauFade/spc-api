/**
 * Função para verificar a fração de produtos não-conformes nos produtos verificados
 * @param deffectualProdutcts Array de valores de produtos defeituosos
 * @param verifiedProducts Array de valores de produtos verificados
 * @returns Fração de produtos não-conformes nos produtos verificados
 */
export const calculateNotConformsFraction = (
  deffectualProdutcts: number[],
  verifiedProducts: number[]
): number => {
  const deffectualProdutctsValue = deffectualProdutcts.reduce(
    (value, acc) => value + acc,
    0
  );
  const verifiedProductsValue = verifiedProducts.reduce(
    (value, acc) => value + acc,
    0
  );

  const result = deffectualProdutctsValue / verifiedProductsValue;

  return Number(result.toFixed(4));
};
