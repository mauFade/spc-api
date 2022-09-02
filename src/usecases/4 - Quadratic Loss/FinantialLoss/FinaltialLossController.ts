import { Request, Response } from "express";
import { IFinantialLossDTO } from "./FinantialLossDTO";
import { FinantialLossUseCase } from "./FinantialLossUseCase";

export class FinantialLossController {
  constructor(private finantialService: FinantialLossUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      fetchedValue,
      metaDetour,
      metaValue,
      repairCost,
    }: IFinantialLossDTO = Object(request["query"]);

    try {
      const data = await this.finantialService.calculateFinantialLoss({
        fetchedValue: Number(fetchedValue),
        metaDetour: Number(metaDetour),
        metaValue: Number(metaValue),
        repairCost: Number(repairCost),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
