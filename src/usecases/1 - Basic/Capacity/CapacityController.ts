import { Request, Response } from "express";
import { ICapacityDTO } from "./CapacityDTO";
import { CapacityUseCase } from "./CapacityUseCase";

export class CapacityController {
  constructor(private capacityUseCase: CapacityUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { knowledge, priority, quality }: ICapacityDTO = Object(
      request["query"]
    );

    try {
      const data = await this.capacityUseCase.calculate({
        knowledge: Number(knowledge),
        priority: Number(priority),
        quality: Number(quality),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
