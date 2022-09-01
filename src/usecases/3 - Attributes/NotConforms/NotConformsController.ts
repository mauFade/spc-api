import { Request, Response } from "express";
import { INotConformsDTO } from "./NotConformsDTO";
import { NotConformsUseCase } from "./NotConformsUseCase";

export class NotConformsController {
  constructor(private notConformsUseCase: NotConformsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { deffectualProdutcts, verifiedProducts }: INotConformsDTO = Object(
      request["query"]
    );

    try {
      const data = await this.notConformsUseCase.calculateNotConformsFraction({
        deffectualProdutcts,
        verifiedProducts,
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
