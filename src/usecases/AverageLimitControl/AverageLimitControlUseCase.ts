import { calculateAverageControlMedian } from "../../utils/calculateAverageControlMedian";
import { IAverageControlLimitDTO } from "./AverageLimitControDTO";

export class AverageLimitControlUseCase {
  async calculateControl({ itemsDataArray }: IAverageControlLimitDTO) {
    if (!itemsDataArray) {
      throw new Error("No data to calculate control.");
    }

    const result = calculateAverageControlMedian(JSON.parse(itemsDataArray));

    return result;
  }
}
