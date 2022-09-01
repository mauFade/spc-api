import { Request, Response } from "express";
import { IAverageControlDTO } from "./AverageControlDTO";
import { AverageControlUseCase } from "./AverageControlUseCase";

export class AverageControlController {
  constructor(private averageControlUseCase: AverageControlUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { dataArr }: IAverageControlDTO = Object(request["query"]);

    try {
      const result = await this.averageControlUseCase.calculate({ dataArr });

      return response.status(200).send({ success: true, data: result });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
