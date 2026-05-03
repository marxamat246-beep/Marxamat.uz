"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          background: "#229ED9",
          color: "#fff",
          fontSize: "28px",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 12px 30px rgba(0,0,0,0.22)",
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "100px",
            width: "300px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#229ED9",
              color: "#fff",
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            Marxamat Chat
          </div>

          <div style={{ padding: "10px" }}>
            Напишите нам 👇
          </div>

          <a
            href="https://t.me/marxamat_uz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              margin: "10px",
              padding: "10px",
              background: "#229ED9",
              color: "#fff",
              textAlign: "center",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Открыть Telegram
          </a>
        </div>
      )}
    </>
  );
}