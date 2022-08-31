import { Request, Response } from "express";
import { IKnowledgeDTO } from "./KnowledgeDTO";
import { KnowledgeUseCase } from "./KnowledgeUseCase";

export class KnowledgeController {
  constructor(private knowledgeUseCase: KnowledgeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { CPK, IPP, IQP }: IKnowledgeDTO = Object(request["query"]);

    try {
      const data = await this.knowledgeUseCase.calculate({
        CPK: Number(CPK),
        IPP: Number(IPP),
        IQP: Number(IQP),
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: true, message: error["message"] });
    }
  }
}
