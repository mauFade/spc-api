/**
 * Interface para cálculo do desvio padrão
 * da fração MÉDIA entre produtos não funcionais e produtos verificados
 */
export interface IDefaultDetourDTO {
  /**
   * Produtos não-conformes
   */
  deffectualProductsArray: string;

  /**
   * Produtos verificados
   */
  verifiedProductsArray: string;
}
