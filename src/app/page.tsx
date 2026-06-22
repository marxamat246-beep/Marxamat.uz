import React from 'react';

export default function Home() {
  // Категории строительных и хозтоваров
  const categories = [
    { id: 1, title: "Строительные смеси", count: "Цемент, гипс, шпатлевка", icon: "🧱" },
    { id: 2, title: "Электрика и кабель", count: "Cat5e UTP, провода, розетки", icon: "🔌" },
    { id: 3, title: "Инструменты", count: "Ручной и электроинструмент", icon: "🛠️" },
    { id: 4, title: "Хозтовары и краски", count: "Все для дома и ремонта", icon: "🎨" },
  ];

  // Популярные товары на витрине
  const popularProducts = [
    { id: 1, name: "Кабель XTECH Cat5e UTP (Медь)", price: "950 сум / метр", badge: "Хит продаж", icon: "🔌" },
    { id: 2, name: "Цемент высококачественный М500 (Ахангаран)", price: "75 000 сум / мешок", badge: "Опт", icon: "🧱" },
    { id: 3, name: "Набор строительных инструментов профессиональный", price: "450 000 сум", badge: "В наличии", icon: "🛠️" },
    { id: 4, name: "Краска фасадная водно-дисперсионная (10 л)", price: "280 000 сум", badge: "Новинка", icon: "🎨" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* 1. НАВИГАЦИЯ И ШАПКА */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Логотип */}
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-600 tracking-tight">MARXAMAT.UZ</span>
              <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">Строительный маркет</span>
            </div>

            {/* Меню */}
            <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
              <a href="#categories" className="hover:text-blue-600 transition">Категории</a>
              <a href="#products" className="hover:text-blue-600 transition">Товары</a>
              <a href="#advantages" className="hover:text-blue-600 transition">Преимущества</a>
              <a href="#contacts" className="hover:text-blue-600 transition">Контакты</a>
            </nav>

            {/* Контакты и кнопка */}
            <div className="flex items-center space-x-4">
              <a href="tel:+998901234567" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 transition">
                📞 +998 (90) 123-45-67
              </a>
              <a 
                href="https://t.me/your_telegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-md shadow-blue-200"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. ГЛАВНЫЙ БАННЕР (HERO) */}
      <section className="relative bg-slate-900 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-slate-900/90 z-10" />
        <div className="relative max-w-5xl mx-auto px-4 text-center z-20">
          <span className="bg-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase px-3 py-1
