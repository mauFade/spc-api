import { calculateQuality } from "../../../utils/1 - Basic/calculateQuality";
import { IQualityDTO } from "./QualityDTO";

export class QualityUseCase {
  async calculate({ ICQ, RKJ }: IQualityDTO) {
    if (!ICQ || !RKJ) {
      throw new Error("All data must be provided for calculation.");
    }

    const data = calculateQuality(ICQ, JSON.parse(RKJ));

    return data;
  }
}
