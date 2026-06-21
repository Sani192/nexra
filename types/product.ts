export type ProductStatus = "Live" | "In development" | "Research";

export interface Product {
  name: string;
  status: ProductStatus;
  description: string;
}
