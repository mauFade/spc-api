import { Request, Response } from "express";
import { IDefaultSampleDetourDTO } from "./DefaultSampleDetour";
import { DefaultSampleDetourUseCase } from "./DefaultSampleDetourUseCase";

export class DefaultSampleDetourController {
  constructor(private defaultDetourUseCase: DefaultSampleDetourUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { dataArr }: IDefaultSampleDetourDTO = Object(request["query"]);

    try {
      const result = await this.defaultDetourUseCase.calculate({ dataArr });

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
