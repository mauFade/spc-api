import { IDNConstants } from "../../interfaces/dnconstants";

/**
 * Função para verificar os valores das constantes D4, D3, d2 e A2 de um determinado tamanho de amostra
 * @param data Array de dados
 */
export const verifyConstantsDN = (data: number[]): IDNConstants => {
  let D4: number = 0;
  let D3: number = 0;
  let d2: number = 0;
  let A2: number = 0;

  if (data.length == 2) {
    D4 = 3.27;
    D3 = 0;
    d2 = 1.13;
    A2 = 1.88;
  }

  if (data.length == 3) {
    D4 = 2.57;
    D3 = 0;
    d2 = 1.69;
    A2 = 1.02;
  }

  if (data.length == 4) {
    D4 = 2.28;
    D3 = 0;
    d2 = 2.06;
    A2 = 0.73;
  }

  if (data.length == 5) {
    D4 = 2.11;
    D3 = 0;
    d2 = 2.33;
    A2 = 0.58;
  }

  if (data.length == 6) {
    D4 = 2.0;
    D3 = 0;
    d2 = 2.53;
    A2 = 0.48;
  }

  if (data.length == 7) {
    D4 = 1.92;
    D3 = 0.08;
    d2 = 2.7;
    A2 = 0.42;
  }

  if (data.length == 8) {
    D4 = 1.86;
    D3 = 0.14;
    d2 = 1.85;
    A2 = 0.37;
  }

  if (data.length == 9) {
    D4 = 1.82;
    D3 = 0.18;
    d2 = 2.97;
    A2 = 0.34;
  }

  if (data.length == 10) {
    D4 = 1.78;
    D3 = 0.22;
    d2 = 3.08;
    A2 = 0.31;
  }

  if (data.length > 10 && data.length <= 15) {
    D4 = 1.65;
    D3 = 0.35;
    d2 = 3.47;
    A2 = 0.22;
  }

  if (data.length >= 20) {
    D4 = 1.59;
    D3 = 0.42;
    d2 = 3.74;
    A2 = 0.18;
  }

  const response: IDNConstants = {
    D4,
    D3,
    d2,
    A2,
  };

  return response;
};
