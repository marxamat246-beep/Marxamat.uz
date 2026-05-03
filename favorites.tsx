"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FavoritesBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateFavoritesCount = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      const totalCount = Array.isArray(favorites) ? favorites.length : 0;
      setCount(totalCount);
    };

    updateFavoritesCount();

    window.addEventListener("storage", updateFavoritesCount);
    window.addEventListener(
      "favorites-updated",
      updateFavoritesCount as EventListener
    );

    return () => {
      window.removeEventListener("storage", updateFavoritesCount);
      window.removeEventListener(
        "favorites-updated",
        updateFavoritesCount as EventListener
      );
    };
  }, []);

  return (
    <Link href="/favorites" style={favoriteBtn}>
      <span style={{ fontSize: "16px" }}>❤️</span>
      <span>Избранное</span>

      {count > 0 && <span style={badgeStyle}>{count}</span>}
    </Link>
  );
}

const favoriteBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 18px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  color: "#0f172a",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "14px",
  boxShadow: "0 6px 16px rgba(15, 23, 42, 0.04)",
  position: "relative",
};

const badgeStyle: React.CSSProperties = {
  minWidth: "22px",
  height: "22px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #8d0c49 0%, #d9487d 100%)",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: 900,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 6px",
};