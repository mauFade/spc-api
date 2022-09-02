import { ISystemVariabilityResponse } from "../../interfaces/systemVariablity";

/**
 * Função pra calcular variablidade do sistema e desvio padrão
 * @param system Repetitividade do equipamento
 * @param opereators Reprodutibilidade dos operadores
 * @returns Variablidade do sistema e desvio padrão
 */
export const calculateSystemVariability = (
  system: number,
  opereators: number
): ISystemVariabilityResponse => {
  const variability = Math.pow(system, 2) + Math.pow(opereators, 2);

  return {
    systemVariability: Number(Math.sqrt(variability).toFixed(4)),
    defaultDetour: 0,
  };
};
