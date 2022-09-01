import { Request, Response } from "express";
import { IDefaultDetourDTO } from "./DefaultDetourDTO";
import { DefaultDetourUseCase } from "./DefaultDetourUseCase";

export class DefaultDetourController {
  constructor(private detourService: DefaultDetourUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      deffectualProductsArray,
      verifiedProductsArray,
    }: IDefaultDetourDTO = Object(request["query"]);

    try {
      const data = await this.detourService.calculateDefaultDetour({
        deffectualProductsArray,
        verifiedProductsArray,
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(200)
        .send({ success: false, message: error["message"] });
    }
  }
}
