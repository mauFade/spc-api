import { calculateFinantialLoss } from "./calculateFinantialLoss";

/**
 * Método pra calcular perda de um lote de produtos
 * @param dataArray Array de produtos
 * @param cost Custo de reparo
 * @param detour Desvio da meta
 * @param meta Meta de produto
 * @returns Perda
 */
export const calculateProductsLoss = (
  dataArray: number[],
  cost: number,
  detour: number,
  meta: number
): number => {
  const loss = calculateFinantialLoss(meta, meta + detour, cost, detour);

  const sumOfAllValuesDataArr = dataArray.reduce(
    (index, val) => index + val,
    0
  );

  const auxArr: number[] = [];

  for (const item in auxArr) {
    auxArr[item] = (1 / dataArray.length) * (sumOfAllValuesDataArr * loss);
  }

  const result = auxArr.reduce((index, val) => index + val, 0);

  return result;
};
