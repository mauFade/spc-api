/**
 * Interface para cálculo da capacidade de um sistema
 */
export interface ICapacityDTO {
  /**
   * Produtos não-conformes
   */
  deffectualProductsArray: string;

  /**
   * Produtos verificados
   */
  verifiedProductsArray: string;
}
