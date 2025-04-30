"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import CardSummary from "@/components/CartSummary";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5055/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product: Product) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">SwiftCart</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((p) => {
          const cartItem = cart.find((item) => item.product.id === p.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <ProductCard
              key={p.id}
              product={p}
              quantity={quantity}
              isInCart={quantity > 0}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          );
        })}
      </div>
      <CardSummary cart={cart} />
    </main>
  );
}
