import { ProductLossController } from "./ProductLossController";
import { ProductLossUseCase } from "./ProductLossUseCase";

const productService = new ProductLossUseCase();

export const calculateProductLossController = new ProductLossController(
  productService
);
