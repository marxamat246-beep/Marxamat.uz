"use client";
import { useState } from "react";

export default function Checkout() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Сюда мы позже привяжем Telegram
  };

  if (sent) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Спасибо за заказ!</h2>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        <button onClick={() => window.location.href = '/'} style={{ padding: '10px 20px', cursor: 'pointer' }}>Вернуться на главную</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Оформление заказа</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Имя и Фамилия" required style={inputStyle} />
        <input type="tel" placeholder="Номер телефона (+998...)" required style={inputStyle} />
        <textarea placeholder="Адрес доставки" required style={{ ...inputStyle, height: '100px' }} />
        
        <label>Способ оплаты:</label>
        <select style={inputStyle}>
          <option>Наличными при получении</option>
          <option>Картой (UzCard / Humo)</option>
        </select>

        <button type="submit" style={buttonStyle}>Подтвердить заказ</button>
      </form>
    </div>
  );
}

const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' };
const buttonStyle = { padding: '15px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer' };
