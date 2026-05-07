import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', color: '#333' }}>MARXAMAT</h1>
      <p style={{ fontSize: '20px', color: '#666' }}>Скоро здесь будет лучший магазин хозтоваров!</p>
      <div style={{ marginTop: '40px' }}>
        <Link href="/checkout">
          <button style={{ padding: '15px 40px', fontSize: '18px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Перейти к заказу
          </button>
        </Link>
      </div>
    </main>
  );
}
