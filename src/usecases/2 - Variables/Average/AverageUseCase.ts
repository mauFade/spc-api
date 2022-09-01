import { calculateAverage } from "../../../utils/2 - Variables/calculateAverage";
import { IAverageDTO } from "./AverageDTO";

export class AverageUseCase {
  async calculate({ data }: IAverageDTO) {
    if (!data) {
      throw new Error("No data to calculate");
    }

    const result = calculateAverage(JSON.parse(data));

    return result;
  }
}
