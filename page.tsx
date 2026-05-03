"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./context/CartContext";
import { useWishlist } from "./context/WishlistContext";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("Все");
  
  const { addToCart, cartItems } = useCart();
  const { toggleWishlist, isFavorite, wishlistItems } = useWishlist();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = activeCategory === "Все" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* ШАПКА С ЛОГОТИПОМ СЛЕВА КАК НА СКРИНШОТЕ */}
      <header style={headerStyle}>
        <div style={logoSection}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={logoMainText}>MARXAMAT</span>
            <span style={logoSubText}>XOJALIK MOLLARI</span>
          </div>
        </div>

        <div style={rightHeaderGroup}>
          <nav style={navLinksStyle}>
            <Link href="/" style={navItem}>Главная</Link>
            <Link href="/about" style={navItem}>О нас</Link>
            <Link href="/contacts" style={navItem}>Контакты</Link>
          </nav>
          
          <Link href="/cart" style={cartBtnStyle}>
            <span style={{ fontSize: "18px" }}>🛒</span>
            <span style={{ fontWeight: "600", marginLeft: "8px" }}>Корзина</span>
          </Link>
        </div>
      </header>

      <main style={mainContainer}>
        {/* ГЛАВНЫЙ БЛОК */}
        <div style={heroSection}>
          <div style={mainBanner}>
            <h1 style={heroTitle}>Marxamat.uz</h1>
            <p style={heroSubtitle}>
              Большой магазин хозтоваров, бытовой химии и товаров для дома
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <button style={whiteBtn}>Связаться с нами</button>
              <button style={transBtn}>Telegram</button>
            </div>
          </div>

          <div style={featuresBlock}>
            <h3 style={featHeading}>Почему выбирают нас</h3>
            <div style={featureItem}>Большой ассортимент</div>
            <div style={featureItem}>Бытовая химия и товары для дома</div>
            <div style={featureItem}>Удобный заказ и связь</div>
            <div style={featureItem}>Реальный магазин в Ташкенте</div>
          </div>
        </div>

        {/* ПОИСК */}
        <div style={searchBar}>
          <input type="text" placeholder="Искать товары..." style={searchInput} />
          <button style={searchBtn}>Поиск</button>
        </div>

        {/* КАТЕГОРИИ */}
        <div style={categoryTabs}>
          <button 
            onClick={() => setActiveCategory("Все")}
            style={{ 
              ...tabBtn, 
              backgroundColor: activeCategory === "Все" ? "#8d0c49" : "#f0f2f5", 
              color: activeCategory === "Все" ? "#fff" : "#000" 
            }}
          >
            Все
          </button>
          <button 
            onClick={() => setActiveCategory("Инструмент")}
            style={{ 
              ...tabBtn, 
              backgroundColor: activeCategory === "Инструмент" ? "#8d0c49" : "#f0f2f5", 
              color: activeCategory === "Инструмент" ? "#fff" : "#000" 
            }}
          >
            Инструмент
          </button>
        </div>

        {/* СЕТКА ТОВАРОВ */}
        <div style={gridStyle}>
          {filteredProducts.map((p) => {
            const inCart = cartItems.find((item: any) => item.id === p.id);
            return (
              <div key={p.id} style={productCard}>
                <div style={imageContainer}>
                  <img src={p.image} alt={p.name} style={imgStyle} />
                  <button onClick={() => toggleWishlist(p)} style={wishBtnStyle}>
                    {isFavorite(p.id) ? "❤️" : "♡"}
                  </button>
                </div>
                <div style={infoSection}>
                  <h3 style={titleStyle}>{p.name}</h3>
                  <p style={priceStyle}>{Number(p.price).toLocaleString()} сум</p>
                  <button onClick={() => addToCart(p)} style={actionBtn}>
                    {inCart ? `В корзине (${inCart.quantity})` : "В корзину"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// --- СТИЛИ ---

const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 5%", maxWidth: "1400px", margin: "0 auto" };
const logoSection = { display: "flex", alignItems: "center", gap: "12px" };
const logoMainText = { fontSize: "20px", fontWeight: "900", color: "#1a2b4b", lineHeight: "1" };
const logoSubText = { fontSize: "10px", fontWeight: "700", color: "#8d0c49", letterSpacing: "0.5px" };
const rightHeaderGroup = { display: "flex", alignItems: "center", gap: "20px" };
const navLinksStyle = { display: "flex", gap: "8px" };
const navItem = { textDecoration: "none", color: "#333", fontWeight: "500", padding: "10px 18px", backgroundColor: "#f0f2f5", borderRadius: "10px", fontSize: "14px" };
const cartBtnStyle = { backgroundColor: "#8d0c49", color: "#fff", textDecoration: "none", padding: "10px 20px", borderRadius: "10px", display: "flex", alignItems: "center" };
const mainContainer = { padding: "20px 5% 50px 5%", maxWidth: "1400px", margin: "0 auto" };
const heroSection = { display: "grid", gridTemplateColumns: "2.2fr 1fr", gap: "20px" };
const mainBanner = { background: "linear-gradient(135deg, #bd084d 0%, #8d0c49 100%)", borderRadius: "25px", padding: "60px 40px", color: "#fff" };
const heroTitle = { fontSize: "56px", margin: "0 0 15px 0", fontWeight: "900" };
const heroSubtitle = { fontSize: "18px", marginBottom: "35px", opacity: 0.9, maxWidth: "500px" };
const featuresBlock = { backgroundColor: "#fff", border: "1px solid #f0f0f0", borderRadius: "25px", padding: "30px" };
const featHeading = { fontSize: "24px", fontWeight: "800", marginBottom: "20px" };
const featureItem = { backgroundColor: "#f8f9fa", padding: "16px", borderRadius: "12px", marginBottom: "10px", fontWeight: "600", fontSize: "14px" };
const whiteBtn = { backgroundColor: "#fff", border: "none", padding: "15px 30px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", color: "#000" };
const transBtn = { backgroundColor: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", padding: "15px 30px", borderRadius: "12px", color: "#fff", fontWeight: "bold", cursor: "pointer" };
const searchBar = { display: "flex", gap: "10px", marginTop: "30px" };
const searchInput = { flex: 1, padding: "18px 25px", borderRadius: "15px", border: "1px solid #eee", backgroundColor: "#fcfcfc" };
const searchBtn = { backgroundColor: "#8d0c49", color: "#fff", border: "none", padding: "0 35px", borderRadius: "15px", fontWeight: "bold", cursor: "pointer" };
const categoryTabs = { display: "flex", gap: "15px", marginTop: "25px", marginBottom: "30px" };
const tabBtn = { flex: 1, padding: "16px", borderRadius: "15px", border: "none", fontWeight: "bold", cursor: "pointer" };
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" };
const productCard = { backgroundColor: "#fff", borderRadius: "20px", border: "1px solid #f0f0f0", overflow: "hidden" };
const imageContainer = { position: "relative" as const, backgroundColor: "#f9f9f9", height: "260px", display: "flex", alignItems: "center", justifyContent: "center" };
const imgStyle = { maxWidth: "80%", maxHeight: "80%", objectFit: "contain" as const };
const wishBtnStyle = { position: "absolute" as const, top: "15px", right: "15px", background: "#fff", border: "none", borderRadius: "50%", width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" };
const infoSection = { padding: "20px" };
const titleStyle = { fontSize: "17px", fontWeight: "700", margin: "0 0 10px 0" };
const priceStyle = { fontSize: "19px", fontWeight: "800", color: "#000", marginBottom: "20px" };
const actionBtn = { width: "100%", padding: "14px", border: "none", borderRadius: "12px", color: "#fff", fontWeight: "700", backgroundColor: "#8d0c49", cursor: "pointer" };