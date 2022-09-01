import { calculateRange } from "../../../utils/2 - Variables/calculateRange";
import { IRangeDTO } from "./RangeDTO";

export class RangeUseCase {
  async calculate({ items }: IRangeDTO) {
    if (!items) {
      throw new Error("No data provided.");
    }

    const result = calculateRange(JSON.parse(items));

    return result;
  }
}
