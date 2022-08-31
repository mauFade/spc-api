import { calculateAverage } from "../../utils/calculateAverage";
import { IRangeDTO } from "./RangeDTO";

export class RangeUseCase {
  async calculate({ items }: IRangeDTO) {
    if (!items) {
      throw new Error("No data provided.");
    }

    const result = calculateAverage(JSON.parse(items));

    return result;
  }
}
