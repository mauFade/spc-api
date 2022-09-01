/**
 * Interface para cálculo da fração entre produtos não funcionais e produtos verificados
 */
export interface INotConformsDTO {
  /**
   * Produtos não-conformes
   */
  deffectualProdutcts: number;

  /**
   * Produtos verificados
   */
  verifiedProducts: number;
}
