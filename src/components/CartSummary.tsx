import { Product } from "@/types/product";

interface CartSummaryProps {
  cart: Product[];
}

const CartSummary = ({ cart }: CartSummaryProps) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Cart Summary</h2>
      <p>Items: {cart.length}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
