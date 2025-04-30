"use client";

import Image from "next/image";
import { Product } from "../types/product";
import { useState, useEffect } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
  quantity?: number;
  onRemoveFromCart?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  isInCart = false,
  quantity = 0,
  onRemoveFromCart,
}: ProductCardProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (added) {
      const timeout = setTimeout(() => setAdded(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [added]);

  const handleClick = () => {
    if (!isInCart) {
      onAddToCart(product);
      setAdded(true);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-52 shadow-sm">
      <div className="relative w-full h-36 mb-3">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="rounded object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">${product.price.toFixed(2)}</p>

      {!isInCart ? (
        <button
          onClick={handleClick}
          className="mt-3 w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          {added ? "Added!" : "🛒 Add to Cart"}
        </button>
      ) : (
        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            onClick={() => onRemoveFromCart?.(product)}
            className="rounded-full w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-lg font-bold"
          >
            −
          </button>

          <span className="text-sm font-semibold">{quantity}</span>

          <button
            onClick={() => onAddToCart(product)}
            className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
