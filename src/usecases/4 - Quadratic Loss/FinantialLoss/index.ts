import { FinantialLossController } from "./FinaltialLossController";
import { FinantialLossUseCase } from "./FinantialLossUseCase";

const finantialService = new FinantialLossUseCase();

export const calculateFinantialLossController = new FinantialLossController(
  finantialService
);
