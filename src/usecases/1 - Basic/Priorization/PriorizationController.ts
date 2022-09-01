import { Request, Response } from "express";
import { IPriorizationDTO } from "./PriorizationDTO";
import { PriorizationUseCase } from "./PriorizationUseCase";

export class PriorizationController {
  constructor(private priorizationUseCase: PriorizationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { C, Cpk, IQP }: IPriorizationDTO = Object(request["query"]);

    try {
      const responseData = await this.priorizationUseCase.calculatePriozation({
        C: Number(C),
        Cpk: Number(Cpk),
        IQP: Number(IQP),
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
