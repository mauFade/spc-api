import { calculateAverage } from "../../utils/calculateAverage";
import { verifyConstantsDN } from "../../utils/verifyConstantsDN";
import { IAverageControlDTO } from "./AverageControlDTO";
import { IDNConstants } from "../../interfaces/dnconstants";
import { calculateAverageControlLimit } from "../../utils/calculateAverageControlLimit";

export class AverageControlUseCase {
  async calculate({ dataArr }: IAverageControlDTO) {
    if (!dataArr) {
      throw new Error("No data provided for calculation.");
    }

    const range = calculateAverage(JSON.parse(dataArr));

    const DNconstants: IDNConstants = verifyConstantsDN(JSON.parse(dataArr));

    const result = calculateAverageControlLimit(
      DNconstants,
      Number(range.toFixed(2))
    );

    return result;
  }
}
