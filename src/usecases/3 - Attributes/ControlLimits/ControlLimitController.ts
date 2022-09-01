import { Request, Response } from "express";
import { IControlLimitDTO } from "./ControlLimitsDTO";
import { ControlLimitsUseCase } from "./ControlLimitsUseCase";

export class ControlLimitController {
  constructor(private controlLimitService: ControlLimitsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { deffectualProductsArray, verifiedProductsArray }: IControlLimitDTO =
      Object(request["query"]);

    try {
      const data = await this.controlLimitService.calculateLimits({
        deffectualProductsArray,
        verifiedProductsArray,
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
