import { Request, Response } from "express";
import { ILossCoefficientDTO } from "./LossCoefficentDTO";
import { LossCoefficientUseCase } from "./LossCoefficientUseCase";

export class LossCoefficientController {
  constructor(private lossCoefficientService: LossCoefficientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { metaValueDetour, repairCost }: ILossCoefficientDTO = Object(
      request["query"]
    );

    try {
      const data = await this.lossCoefficientService.calculateLossCoefficient({
        metaValueDetour: Number(metaValueDetour),
        repairCost: Number(repairCost),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
