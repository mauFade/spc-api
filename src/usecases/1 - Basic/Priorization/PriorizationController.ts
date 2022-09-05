import { Request, Response } from "express";
import { IPriorizationDTO } from "./PriorizationDTO";
import { PriorizationUseCase } from "./PriorizationUseCase";

export class PriorizationController {
  constructor(private priorizationUseCase: PriorizationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { knowledge, capacity, quality }: IPriorizationDTO = Object(
      request["query"]
    );

    try {
      const responseData = await this.priorizationUseCase.calculatePriozation({
        knowledge: Number(knowledge),
        capacity: Number(capacity),
        quality: Number(quality),
      });

      return response
        .status(200)
        .send({ success: true, data: Number(responseData.toFixed(2)) });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
