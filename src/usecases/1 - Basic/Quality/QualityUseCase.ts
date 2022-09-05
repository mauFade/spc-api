import { calculateQuality } from "../../../utils/1 - Basic/calculateQuality";
import { IQualityDTO } from "./QualityDTO";

export class QualityUseCase {
  async calculate({ importance, intencity }: IQualityDTO) {
    if (!importance || !intencity) {
      throw new Error("All data must be provided for calculation.");
    }

    const data = calculateQuality(importance, JSON.parse(intencity));

    return data;
  }
}
