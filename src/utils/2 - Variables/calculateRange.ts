import { calculateAverage } from "./calculateAverage";

/**
 * Função para calcular amplitude
 * @param data Array de array de dados
 * @returns Amplitudo daqueles dados
 */
export const calculateRange = (data: number[][]) => {
  const auxArr: number[] = [];
  const sorted: number[][] = [];

  for (const index in data) {
    auxArr[index] = calculateAverage(data[index]);
    sorted[index] = data[index].slice().sort((a, b) => {
      return a - b;
    });
  }

  const auxArrNum2: number[][] = [];
  const auxArrNum3: number[] = [];

  for (const index in sorted) {
    auxArrNum2[index] = [
      sorted[index][0],
      sorted[index][sorted[index].length - 1],
    ];
  }

  for (const key in auxArrNum2) {
    auxArrNum3[key] =
      auxArrNum2[key][auxArrNum2[key].length - 1] - auxArrNum2[key][0];
  }

  // Soma de todos os dados do array
  const sum = auxArrNum3.reduce((acc, index) => acc + index, 0);

  const result = sum / data.length;

  return result;
};
