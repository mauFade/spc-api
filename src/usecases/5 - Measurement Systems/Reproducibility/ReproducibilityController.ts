import { Request, Response } from "express";
import { IReproducibilityDTO } from "./ReproducibilityDTO";
import { ReproducibilityUseCase } from "./ReproducibilityUseCase";

export class ReproducibilityController {
  constructor(private reproducibilityService: ReproducibilityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { D2Const, maxAverage, minAverage }: IReproducibilityDTO = Object(
      request["query"]
    );

    try {
      const data = await this.reproducibilityService.calculateReproducibility({
        minAverage: Number(minAverage),
        maxAverage: Number(maxAverage),
        D2Const: Number(D2Const),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
