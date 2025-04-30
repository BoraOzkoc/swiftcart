"use client";
import { Product } from "../services/productService";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, width: 200 }}>
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{ width: "100%" }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>${product.price.toFixed(2)}</strong>
      <br />
      <button onClick={() => onAddToCart(product)} style={{ marginTop: 10 }}>
        🛒 Add to Cart
      </button>
    </div>
  );
}
