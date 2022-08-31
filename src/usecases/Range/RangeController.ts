import { Request, Response } from "express";
import { IRangeDTO } from "./RangeDTO";
import { RangeUseCase } from "./RangeUseCase";

export class RangeController {
  constructor(private rangeUseCase: RangeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { items }: IRangeDTO = Object(request["query"]);

    try {
      const result = await this.rangeUseCase.calculate({ items });

      return response
        .status(200)
        .send({ success: true, data: Number(result.toFixed(2)) });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
