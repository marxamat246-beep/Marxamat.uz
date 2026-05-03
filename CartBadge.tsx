"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const totalCount = Array.isArray(cart)
        ? cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)
        : 0;

      setCount(totalCount);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cart-updated", updateCartCount as EventListener);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cart-updated", updateCartCount as EventListener);
    };
  }, []);

  return (
    <Link href="/cart" style={cartBtn}>
      <span style={{ fontSize: "16px" }}>🛒</span>
      <span>Корзина</span>

      {count > 0 && (
        <span style={badgeStyle}>
          {count}
        </span>
      )}
    </Link>
  );
}

const cartBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 18px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #8d0c49 0%, #d9487d 100%)",
  border: "1px solid rgba(141,12,73,0.2)",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 900,
  fontSize: "14px",
  boxShadow: "0 12px 28px rgba(141, 12, 73, 0.22)",
  position: "relative",
};

const badgeStyle: React.CSSProperties = {
  minWidth: "22px",
  height: "22px",
  borderRadius: "999px",
  background: "#ffffff",
  color: "#8d0c49",
  fontSize: "12px",
  fontWeight: 900,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 6px",
};