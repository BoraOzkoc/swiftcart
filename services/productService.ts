export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:5055/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
