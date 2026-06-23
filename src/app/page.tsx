import React from 'react';

export default function Home() {
  const advantages = [
    "Большой ассортимент",
    "Бытовая химия и товары для дома",
    "Удобный заказ и связь",
    "Реальный магазин в Мархамате"
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', color: '#1f2937', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* ЧИСТАЯ И СТИЛЬНАЯ ШАПКА */}
      <header style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.03)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Логотип с иконкой домика (солидный размер) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '28px', color: '#be185d' }}>🏠</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 900, fontSize: '22px', color: '#111827', letterSpacing: '-0.5px' }}>MARXAMAT</span>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Xo'jalik Mollari</span>
            </div>
          </div>

          {/* Меню и Корзина (красивое расположение) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <nav style={{ display: 'flex', gap: '28px', fontSize: '15px', fontWeight: 500 }}>
              <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Главная</a>
              <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>О нас</a>
              <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Контакты</a>
            </nav>
            
            <button style={{ backgroundColor: '#be185d', borderRadius: '14px', fontWeight: 'bold', border: 'none', color: 'white', padding: '12px 24px', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(190, 24, 93, 0.2)' }}>
              <span style={{ fontSize: '18px' }}>🛒</span> Корзина
            </button>
          </div>

        </div>
      </header>

      {/* ГЛАВНЫЙ БЛОК */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Левый большой малиновый баннер (солидный и яркий) */}
          <div style={{ background: 'linear-gradient(135deg, #be185d, #4c0519)', padding: '56px', borderRadius: '28px', color: 'white', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridColumn: 'span 2', boxShadow: '0 10px 15px -3px rgba(190, 24, 93, 0.1), 0 4px 6px -2px rgba(190, 24, 93, 0.05)' }}>
            <div>
              <h1 style={{ fontSize: '56px', fontWeight: 900, margin: '0 0 20px 0', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
                Marxamat.uz
              </h1>
              <p style={{ fontSize: '20px', opacity: 0.95, margin: 0, fontWeight: 500, lineHeight: '1.6', maxWidth: '600px' }}>
                Большой магазин хозтоваров, бытовой химии и товаров для дома. Всё для вашего уюта и ремонта.
              </p>
            </div>
            
            {/* Кнопки */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
              <a href="tel:+998903156300" style={{ backgroundColor: 'white', color: '#4c0519', fontWeight: 'bold', padding: '16px 32px', borderRadius: '18px', textDecoration: 'none', fontSize: '16px', display: 'inline-block', boxShadow: '0 4px 6px rgba(0,0,0,0.07)', transition: 'transform 0.2s' }}>
                📞 Позвонить +998 (90) 315-63-00
              </a>
              <a href="https://t.me/marxamat_uzz" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold', padding: '16px 32px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '16px', display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', transition: 'background 0.2s' }}>
                Telegram @marxamat_uzz
              </a>
            </div>
          </div>

          {/* Правый блок "Почему выбирают нас" (красивая карточка) */}
