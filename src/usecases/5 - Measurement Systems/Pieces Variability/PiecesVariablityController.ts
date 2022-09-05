import { Request, Response } from "express";
import { IPiecesVariabilityDTO } from "./PiecesVariabilityDTO";
import { PiecesVariabilityUseCase } from "./PiecesVariablityUseCase";

export class PiecesVariablityController {
  constructor(private variabilityService: PiecesVariabilityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { d2, max, min }: IPiecesVariabilityDTO = Object(request["query"]);

    try {
      const data = await this.variabilityService.calculatePiecesVariablity({
        d2: Number(d2),
        max: Number(max),
        min: Number(min),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
