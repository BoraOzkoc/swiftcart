"use client";

import { Product } from "@/types/product";

interface Props {
  cart: { product: Product; quantity: number }[];
}

export default function CardSummary({ cart }: Props) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="mt-10 p-4 border rounded-md shadow-sm max-w-md">
      <h2 className="text-xl font-semibold mb-3">
        🛒 Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
      </h2>
      <ul className="text-sm text-gray-700 space-y-1 mb-2">
        {cart.map((item, index) => (
          <li key={index}>
            {item.product.title} × {item.quantity} = $
            {(item.product.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}
