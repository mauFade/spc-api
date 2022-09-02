export interface IFinantialLossDTO {
  // Custo de reparo
  repairCost: number;

  // Desvio da meta
  metaDetour: number;

  // Valor medido (valor meta mais o desvio)
  fetchedValue: number;

  // Valor meta
  metaValue: number;
}
