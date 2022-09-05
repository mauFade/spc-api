import { Request, Response } from "express";
import { ITotalSystemVariabilityDTO } from "./TotalSystemVariabilityDTO";
import { TotalSystemVariabilityUseCase } from "./TotalSystemVariabilityUseCase";

export class TotalSystemVariabilityController {
  constructor(private systemService: TotalSystemVariabilityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { d2, max, min, opereators, system }: ITotalSystemVariabilityDTO =
      Object(request["query"]);

    try {
      const data = await this.systemService.calculateTotalSystemVariability({
        d2: Number(d2),
        max: Number(max),
        min: Number(min),
        opereators: Number(opereators),
        system: Number(system),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
