import { ICapacityDTO } from "./CapacityDTO";
import { calculateCapacity } from "../../../utils/1 - Basic/calculateCapacity";

export class CapacityUseCase {
  async calculate({ C, IPP, IQP }: ICapacityDTO) {
    const data = calculateCapacity(IQP, IPP, C);

    if (data <= 0.33) {
      return { level: "Muito incapaz", data };
    }

    if (data <= 0.67) {
      return { level: "Incapaz", data };
    }

    if (data <= 1) {
      return { level: "Capaz", data };
    }

    if (data <= 1.33) {
      return { level: "Muito capaz", data };
    }

    if (data >= 1) {
      return { level: "Extremamente capaz", data };
    }
  }
}
