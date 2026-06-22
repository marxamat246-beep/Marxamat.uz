import React from 'react';

export default function Home() {
  const products = [
    { id: 1, name: "Кабель XTECH Cat5e UTP", price: "950 сум/м", image: "🔌" },
    { id: 2, name: "Строительные инструменты (Набор)", price: "450 000 сум", image: "🛠️" },
    { id: 3, name: "Цемент высококачественный M500", price: "75 000 сум/мешок", image: "🧱" },
    { id: 4, name: "Краска фасадная (белая, 10л)", price: "280 000 сум", image: "🎨" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-2xl font-black text-blue-600 tracking-tight">MARXAMAT.UZ</div>
            <div className="text-xs text-slate-400">Строительный маркет</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+998901234567" className="text-sm font-bold text-slate-700">
              📞 +998 (90) 123-45-67
            </a>
            <a 
              href="https://t.me/marxamat246" 
              target="_blank" 
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Строительные материалы и хозтовары
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Качественная продукция для строительства и ремонта в Мархамате. Оптом и в розницу.
          </p>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-2">💰</div>
            <h4 className="font-bold mb-1">Выгодные цены</h4>
            <p className="text-slate-500 text-xs">Прямые поставки со складов.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-bold mb-1">Доставка</h4>
            <p className="text-slate-500 text-xs">Привезем материалы прямо на ваш объект.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-bold mb-1">Надежность</h4>
            <p className="text-slate-500 text-xs">Работаем честно и быстро.</p>
          </div>
        </div>
      </section>

      {/* Список товаров */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center sm:text-left">
          Популярные товары
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between">
              <div className="bg-slate-100 h-40 flex items-center justify-center text-5xl select-none">
                {product.image}
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{product.name}</h4>
                  <p className="text-lg font-black text-blue-600 mb-3">{product.price}</p>
                </div>
                <a 
                  href="https://t.me/marxamat246"
                  target="_blank"
                  className="w-full bg-slate-900 text-white py-2 rounded-xl font-bold text-center text-xs hover:bg-slate-800 transition block"
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 text-slate-500 text-xs py-8 text-center mt-12 border-t border-slate-800">
        <p className="mb-2 text-slate-400">MARXAMAT.UZ — Андижанская область, Мархамат</p>
        <p>© {new Date().getFullYear()} Все права защищены</p>
      </footer>

    </div>
  );
}
