"use client";
import { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface Props {
  cart: CartItem[];
}

export default function CartSummary({ cart }: Props) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mt-10 p-6 bg-emerald-50 rounded-lg border border-[var(--color-border-light)] shadow-sm">
      <h2 className="text-[var(--foreground)] text-xl font-semibold mb-4">
        🛍️ Cart ({totalItems} items)
      </h2>
      <ul className="space-y-2">
        {cart.map((item, index) => (
          <li
            key={index}
            className="text-[var(--color-text-muted)] flex justify-between hover:text-[var(--foreground)] transition-colors"
          >
            <span>
              {item.product.title} x {item.quantity}
            </span>
            <span className="text-[var(--color-primary)]">
              ${(item.product.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-[var(--color-border-light)]">
        <h3 className="text-[var(--foreground)] text-lg font-semibold flex justify-between">
          <span>Total:</span>
          <span className="text-[var(--color-primary)]">
            ${total.toFixed(2)}
          </span>
        </h3>
      </div>
    </div>
  );
}
