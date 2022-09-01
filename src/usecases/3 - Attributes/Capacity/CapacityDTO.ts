/**
 * Interface para cálculo da capacidade de um sistema
 */
export interface ICapacityDTO {
  /**
   * Produtos não-conformes
   */
  deffectualProdutctsArray: string;

  /**
   * Produtos verificados
   */
  verifiedProductsArray: string;
}
