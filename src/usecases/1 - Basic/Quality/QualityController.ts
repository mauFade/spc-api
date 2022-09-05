import { Request, Response } from "express";
import { IQualityDTO } from "./QualityDTO";
import { QualityUseCase } from "./QualityUseCase";

export class QualityController {
  constructor(private qualityUseCase: QualityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { importance, intencity }: IQualityDTO = Object(request["query"]);

    try {
      const result = await this.qualityUseCase.calculate({
        importance: Number(importance),
        intencity,
      });

      return response.status(200).send({ success: true, data: result });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
