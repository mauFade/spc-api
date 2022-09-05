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

  const detour =
    Math.pow(Number((system / 5.15).toFixed(2)), 2) +
    Math.pow(Number((opereators / 5.15).toFixed(2)), 2);

  const defaultDetour = Number(Math.sqrt(detour).toFixed(2));

  return {
    systemVariability: Number(Math.sqrt(variability).toFixed(4)),
    defaultDetour,
  };
};
