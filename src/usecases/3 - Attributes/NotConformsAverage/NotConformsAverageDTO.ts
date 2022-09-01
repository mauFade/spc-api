/**
 * Interface para cálculo da fração MÉDIA entre produtos não funcionais e produtos verificados
 */
export interface NotConformsAverageDTO {
  /**
   * Produtos não-conformes
   */
  deffectualProdutctsArray: string;

  /**
   * Produtos verificados
   */
  verifiedProductsArray: string;
}
