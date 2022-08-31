import { calculateDefaultDetour } from "../../utils/calculateDefaultDetour";
import { IDefaultDetourDTO } from "./DefaultDetourDTO";

export class DefaultDetourUseCase {
  async calculate({ dataArr }: IDefaultDetourDTO) {
    if (!dataArr) {
      throw new Error("No data provided");
    }

    const result = calculateDefaultDetour(JSON.parse(dataArr));

    return result;
  }
}
