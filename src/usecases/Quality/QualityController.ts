import { Request, Response } from "express";
import { IQualityDTO } from "./QualityDTO";
import { QualityUseCase } from "./QualityUseCase";

export class QualityController {
  constructor(private qualityUseCase: QualityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ICQ, RKJ }: IQualityDTO = Object(request["query"]);

    try {
      console.log(JSON.parse(RKJ));

      const result = await this.qualityUseCase.calculate({
        ICQ: Number(ICQ),
        RKJ,
      });

      return response.status(200).send({ success: true, data: result });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
