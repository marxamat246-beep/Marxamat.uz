import React from 'react';

export default function Home() {
  const advantages = [
    "Большой ассортимент",
    "Бытовая химия и товары для дома",
    "Удобный заказ и связь",
    "Реальный магазин в Мархамате"
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#334155', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* ВЕРХНЯЯ ШАПКА */}
      <header style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Логотип */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>🏠</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 900, fontSize: '20px', color: '#0f172a', letterSpacing: '-0.5px' }}>MARXAMAT</span>
              <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Xo'jalik Mollari</span>
            </div>
          </div>

          {/* Меню и Корзина */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <nav style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 500 }}>
              <a href="#" style={{ color: '#475569', textDecoration: 'none' }}>Главная</a>
              <a href="#" style={{ color: '#475569', textDecoration: 'none' }}>О нас</a>
              <a href="#" style={{ color: '#475569', textDecoration: 'none' }}>Контакты</a>
            </nav>
            
            <button style={{ backgroundColor: '#9d174d', borderRadius: '12px', fontWeight: 'bold', border: 'none', color: 'white', padding: '10px 20px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🛒</span> Корзина
            </button>
          </div>

        </div>
      </header>

      {/* ГЛАВНЫЙ БЛОК */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          
          {/* Левый большой малиновый баннер */}
          <div style={{ background: 'linear-gradient(135deg, #be185d, #4c0519)', padding: '48px', borderRadius: '24px', color: 'white', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridColumn: 'span 2' }}>
            <div>
              <h1 style={{ fontSize: '48px', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-1px' }}>
                Marxamat.uz
              </h1>
              <p style={{ fontSize: '18px', opacity: 0.9, margin: 0, fontWeight: 500, lineHeight: '1.5' }}>
                Большой магазин хозтоваров, бытовой химии и товаров для дома
              </p>
            </div>
            
            {/* К
