import { Request, Response } from "express";
import { ISystemVariabilityDTO } from "./SystemVariabilityDTO";
import { SystemVariabilityUseCase } from "./SystemVariabilityUseCase";

export class SystemVariabilityController {
  constructor(private systemService: SystemVariabilityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      equipmentRepeatability,
      operatorsReprodutibility,
    }: ISystemVariabilityDTO = Object(request["query"]);

    try {
      const data = await this.systemService.calculateSystemVariability({
        equipmentRepeatability: Number(equipmentRepeatability),
        operatorsReprodutibility: Number(operatorsReprodutibility),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
