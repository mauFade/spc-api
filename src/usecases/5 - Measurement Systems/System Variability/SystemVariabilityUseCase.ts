import { calculateSystemVariability } from "../../../utils/5 - Measurement Sistems/calculateSystemVariablity";
import { ISystemVariabilityDTO } from "./SystemVariabilityDTO";

export class SystemVariabilityUseCase {
  async calculateSystemVariability({
    equipmentRepeatability,
    operatorsReprodutibility,
  }: ISystemVariabilityDTO) {
    if (!equipmentRepeatability || !operatorsReprodutibility) {
      throw new Error("Data required.");
    }

    const result = calculateSystemVariability(
      equipmentRepeatability,
      operatorsReprodutibility
    );

    return result;
  }
}
