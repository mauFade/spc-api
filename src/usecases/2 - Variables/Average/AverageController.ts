import { Request, Response } from "express";
import { IAverageDTO } from "./AverageDTO";
import { AverageUseCase } from "./AverageUseCase";

export class AverageController {
  constructor(private averageUseCase: AverageUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { data }: IAverageDTO = Object(request["query"]);

    try {
      const result = await this.averageUseCase.calculate({ data });

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
