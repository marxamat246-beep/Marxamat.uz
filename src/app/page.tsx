import React from 'react';

export default function Home() {
  const advantages = [
    "Большой ассортимент",
    "Бытовая химия и товары для дома",
    "Удобный заказ и связь",
    "Реальный магазин в Ташкенте"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* ВЕРХНЯЯ ШАПКА (НАВИГАЦИЯ) */}
      <header className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Логотип с иконкой домика */}
            <div className="flex items-center space-x-3">
              <div className="text-2xl text-rose-800">🏠</div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 tracking-tight">MARXAMAT</span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider">Xo'jalik Mollari</span>
              </div>
            </div>

            {/* Меню и Корзина */}
            <div className="flex items-center space-x-6">
              <nav className="hidden sm:flex space-x-6 text-sm font-medium text-slate-600">
                <a href="#" className="hover:text-rose-800 transition">Главная</a>
                <a href="#" className="hover:text-rose-800 transition">О нас</a>
                <a href="#" className="hover:text-rose-800 transition">Контакты</a>
              </nav>
              
              <button className="bg-rose-800 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-rose-900 transition flex items-center space-x-2 shadow-sm">
                <span>🛒</span>
                <span>Корзина</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ГЛАВНЫЙ БЛОК (БАННЕР И ПРЕИМУЩЕСТВА) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Левый большой малиновый баннер */}
          <div className="lg:col-span-2 bg-gradient-to-br from-rose-700 to-rose-900 text-white p-8 sm:p-12 rounded-3xl shadow-md flex flex-col justify-between min-h-[360px]">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                Marxamat.uz
              </h1>
              <p className="text-base sm:text-lg text-rose-100 max-w-xl font-medium leading-relaxed">
                Большой магазин хозтоваров, бытовой химии и товаров для дома
              </p>
            </div>
            
            {/* Две белые/прозрачные кнопки */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a 
                href="tel:+998901234567"
                className="bg-white text-rose-900 font-bold px-6 py-3 rounded-2xl shadow-sm hover:bg-slate-50 transition text-sm"
              >
                Связаться с нами
              </a>
              <a 
                href="https://t.me/marxamat246" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-2xl border border-white/20 transition text-sm"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Правый блок "Почему выбирают нас" */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
              Почему выбирают нас
            </h3>
            
            {/* Список преимуществ из плашек */}
            <div className="space-y-3 flex-grow justify-center flex flex-col">
              {advantages.map((text, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 shadow-sm hover:border-rose-200 transition"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* СТРОКА ПОИСКА ТОВАРОВ */}
        <div className="mt-8 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder="Искать товары..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-rose-500 transition font-medium"
              />
            </div>
            <button className="bg-rose-800 hover:bg-rose-900 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-sm">
              Поиск
            </button>
          </div>
        </div>

        {/* ЗАГЛУШКА ДЛЯ КАТАЛОГА */}
        <section className="mt-12 text-center py-12 border-2 border-dashed border-slate-200 rounded-3xl bg-white">
          <div className="text-4xl mb-3">📦</div>
          <h3 className="text-lg font-bold text-slate-800">Наш каталог товаров обновляется</h3>
          <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto px-4">
            Совсем скоро здесь появятся все наши товары бытовой химии, строительных инструментов и кабельной продукции.
          </p>
        </section>
      </main>

      {/* ПОДВАЛ */}
      <footer className="bg-slate-900 text-slate-500 text-xs py-8 text-center mt-16 border-t border-slate-800">
        <p className="mb-2 text-slate-400">MARXAMAT.UZ — Качественные хозтовары для вашего дома</p>
        <p>© {new Date().getFullYear()} Все права защищены</p>
      </footer>

    </div>
  );
}
