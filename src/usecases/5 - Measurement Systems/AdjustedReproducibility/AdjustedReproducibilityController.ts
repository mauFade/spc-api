import { Request, Response } from "express";
import { IAdjustedReproducibilityDTO } from "./AdjustedReproducibilityDTO";
import { AdjustedReproducibilityUseCase } from "./AdjustedReproducibilityUseCase";

export class AdjustedReproducibilityController {
  constructor(private adjustedService: AdjustedReproducibilityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      D2Const,
      cicles,
      maxAverage,
      minAverage,
      pieces,
    }: IAdjustedReproducibilityDTO = Object(request["query"]);

    try {
      const data = await this.adjustedService.calculateAdjustedReproducibility({
        D2Const: Number(D2Const),
        cicles: Number(cicles),
        maxAverage: Number(maxAverage),
        minAverage: Number(minAverage),
        pieces: Number(pieces),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
