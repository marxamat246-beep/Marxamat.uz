import React from 'react';

export default function Home() {
  const advantages = [
    "Большой ассортимент",
    "Бытовая химия и товары для дома",
    "Удобный заказ и связь",
    "Реальный магазин в Ташкенте"
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#334155', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* ВЕРХНЯЯ ШАПКА */}
      <header style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', height: '64px', display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
          
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
            
            {/* Кнопки */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
              <a href="tel:+998901234567" style={{ backgroundColor: 'white', color: '#4c0519', fontWeight: 'bold', padding: '14px 28px', borderRadius: '16px', textDecoration: 'none', fontSize: '14px', display: 'inline-block', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                Связаться с нами
              </a>
              <a href="https://t.me/marxamat246" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: 'bold', padding: '14px 28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '14px', display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                Telegram
              </a>
            </div>
          </div>

          {/* Правый блок "Почему выбирают нас" */}
          <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a', margin: '0 0 24px 0' }}>
              Почему выбирают нас
            </h3>
            
            {/* Плашки */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1, justifyContent: 'center' }}>
              {advantages.map((text, index) => (
                <div key={index} style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9', padding: '14px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, color: '#334155', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* СТРОКА ПОИСКА ТОВАРОВ */}
        <div style={{ marginTop: '32px', backgroundColor: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flexGrow: 1 }}>
              <input 
                type="text" 
                placeholder="🔍 Искать товары..." 
                style={{ width: '100%', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', padding: '14px 16px', borderRadius: '12px', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>
            <button style={{ backgroundColor: '#9d174d', color: 'white', fontWeight: 'bold', padding: '14px 28px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
              Поиск
            </button>
          </div>
        </div>

        {/* ЗАГЛУШКА КАТАЛОГА */}
        <section style={{ marginTop: '48px', textAlign: 'center', padding: '48px 16px', border: '2px dashed #e2e8f0', borderRadius: '24px', backgroundColor: 'white' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>📦</div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 8px 0' }}>Наш каталог товаров обновляется</h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 auto', maxWidth: '400px', lineHeight: '1.5' }}>
            Совсем скоро здесь появятся все наши товары бытовой химии, строительных инструментов и кабельной продукции.
          </p>
        </section>
      </main>

      {/* ПОДВАЛ */}
      <footer style={{ backgroundColor: '#0f172a', color: '#64748b', padding: '32px 16px', marginTop: '64px', textAlign: 'center', fontSize: '12px' }}>
        <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontWeight: 500 }}>MARXAMAT.UZ — Качественные хозтовары для вашего дома</p>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Все права защищены</p>
      </footer>

    </div>
  );
}
