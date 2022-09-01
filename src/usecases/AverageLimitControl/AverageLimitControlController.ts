import { Request, Response } from "express";
import { IAverageControlLimitDTO } from "./AverageLimitControDTO";
import { AverageLimitControlUseCase } from "./AverageLimitControlUseCase";

export class AverageLimitControlController {
  constructor(private averageUseCase: AverageLimitControlUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { itemsDataArray }: IAverageControlLimitDTO = Object(
      request["query"]
    );

    try {
      const result = await this.averageUseCase.calculateControl({
        itemsDataArray,
      });

      return response.status(200).send({ success: true, data: result });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
