import { IDNConstants } from "../interfaces/dnconstants";
import { calculateAverage } from "./calculateAverage";
import { calculateRange } from "./calculateRange";
import { verifyConstantsDN } from "./verifyConstantsDN";

/**
 * Função para calcular o limite de controle superios e inferior mediano
 * @param data Array de arrays de data
 * @return Limite de controle superioe e inferior mediano
 */
export const calculateAverageControlMedian = (data: number[][]) => {
  const auxArr: number[] = [];
  const range = calculateRange(data);

  const constants: IDNConstants[] = [];

  for (const index in data) {
    constants[index] = verifyConstantsDN(data[index]);
  }

  for (const index in data) {
    auxArr[index] = calculateAverage(data[index]);
  }

  // Média do array de arrays
  const AverageValueOfDataArr =
    auxArr.reduce((acc, index) => acc + index, 0) / data.length;

  const superiorLimitMediumValue = Number(
    (AverageValueOfDataArr + constants[0].A2 * range).toFixed(2)
  );
  const inferiorLimitMediumValue = Number(
    (AverageValueOfDataArr - constants[0].A2 * range).toFixed(2)
  );

  return { superiorLimitMediumValue, inferiorLimitMediumValue };
};
