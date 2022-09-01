import { calculateAverage } from "../../../utils/2 - Variables/calculateAverage";
import { verifyConstantsDN } from "../../../utils/2 - Variables/verifyConstantsDN";
import { IAverageControlDTO } from "./AverageControlDTO";
import { IDNConstants } from "../../../interfaces/dnconstants";
import { calculateAverageControlLimit } from "../../../utils/2 - Variables/calculateAverageControlLimit";

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
