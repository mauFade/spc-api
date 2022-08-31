import { calculateDefaultSampleDetour } from "../../utils/calculateDefaultSampleDetour";
import { IDefaultSampleDetourDTO } from "./DefaultSampleDetour";

export class DefaultSampleDetourUseCase {
  async calculate({ dataArr }: IDefaultSampleDetourDTO) {
    if (!dataArr) {
      throw new Error("No data provided");
    }

    const result = calculateDefaultSampleDetour(JSON.parse(dataArr));

    return result;
  }
}
