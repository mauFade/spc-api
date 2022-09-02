export interface FinantialLossDTO {
  // Coeficiente de perda
  lossCoefficient: number;

  // Valor medido (valor meta mais o desvio)
  fetchedValue: number;

  // Valor meta
  metaValue: number;
}
