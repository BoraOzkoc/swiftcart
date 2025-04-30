"use client";
import { Product } from "../services/productService";

interface Props {
  cart: Product[];
}

export default function CartSummary({ cart }: Props) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ marginTop: 40 }}>
      <h2>🛍️ Cart ({cart.length} items)</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
