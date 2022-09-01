import { Request, Response } from "express";
import { INotConformsAverageDTO } from "./NotConformsAverageDTO";
import { NotConformsAverageUseCase } from "./NotConformsAverageUseCase";

export class NotConformsAverageController {
  constructor(private notAverageUseCase: NotConformsAverageUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      deffectualProdutctsArray,
      verifiedProductsArray,
    }: INotConformsAverageDTO = Object(request["query"]);

    try {
      const data = await this.notAverageUseCase.calculateNotConformsFraction({
        deffectualProdutctsArray,
        verifiedProductsArray,
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: true, message: error["message"] });
    }
  }
}
