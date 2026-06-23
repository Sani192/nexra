export type ProductStatus = "Current" | "Coming Soon";

export interface Product {
  name: string;
  status: ProductStatus;
  description: string;
}
