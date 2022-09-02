import { Request, Response } from "express";
import { IProductLossDTO } from "./ProductLossDTO";
import { ProductLossUseCase } from "./ProductLossUseCase";

export class ProductLossController {
  constructor(private productService: ProductLossUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cost, dataArray, detour, meta }: IProductLossDTO = Object(
      request["query"]
    );

    try {
      const data = await this.productService.calculateProductLoss({
        dataArray,
        cost: Number(cost),
        detour: Number(detour),
        meta: Number(meta),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
