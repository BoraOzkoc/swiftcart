"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import CardSummary from "@/components/CartSummary";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
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
    setCart((prev) => [...prev, product]);
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <main style={{ padding: 24 }}>
      <h1>SwiftCart</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <CardSummary cart={cart} />
    </main>
  );
}
