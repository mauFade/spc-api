import { Request, Response } from "express";
import { ICapacityDTO } from "./CapacityDTO";
import { CapacityUseCase } from "./CapacityUseCase";

export class CapacityController {
  constructor(private capacityService: CapacityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { deffectualProductsArray, verifiedProductsArray }: ICapacityDTO =
      Object(request["query"]);

    try {
      const data = await this.capacityService.calculateCapacity({
        deffectualProductsArray,
        verifiedProductsArray,
      });

      return response.status(200).send({ success: true, data: `${data}%` });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
