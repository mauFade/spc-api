import { Request, Response } from "express";
import { IDefaultDetourDTO } from "./DefaultDetourDTO";
import { DefaultDetourUseCase } from "./DefaultDetourUseCase";

export class DefaultDetourController {
  constructor(private detourUseCase: DefaultDetourUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { dataArr }: IDefaultDetourDTO = Object(request["query"]);

    try {
      const data = await this.detourUseCase.calculate({ dataArr });

      return response
        .status(200)
        .send({ success: true, data: Number(data.toFixed(2)) });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
