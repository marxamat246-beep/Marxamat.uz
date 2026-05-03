"use client";

import { useEffect, useState } from "react";

export default function FavoritesBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
      setCount(fav.length);
    };

    update();
    window.addEventListener("favorites-updated", update);

    return () => window.removeEventListener("favorites-updated", update);
  }, []);

  if (count === 0) return null;

  return (
    <span
      style={{
        position: "absolute",
        top: "-6px",
        right: "-6px",
        background: "red",
        color: "white",
        borderRadius: "50%",
        padding: "4px 8px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {count}
    </span>
  );
}