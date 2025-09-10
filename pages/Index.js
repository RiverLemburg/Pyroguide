import React from 'react';

export default function Home() {
  async function handleBuy(kind) {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: kind })
      });
      const data = await res.json();
      if (data.url) window.location = data.url;
      else alert('Checkout error');
    } catch (e) {
      console.error(e);
      alert('Network error');
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>PyroGuide</h1>
        <nav>
          <a href="#templates" style={{ marginRight: 12 }}>Templates</a>
          <a href="#weddings">Weddings</a>
        </nav>
      </header>

      <main style={{ maxWidth: 980, marginTop: 24 }}>
        <section style={{ display: 'flex', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <h2>Wood burning made easy — beautiful results, every time.</h2>
            <p>Starter kits with stick-on templates and wedding-grade blanks.</p>
            <div style={{ marginTop: 12 }}>
              <button onClick={() => handleBuy('starter')} style={{ padding: '10px 16px', marginRight: 8 }}>Buy Starter Kit — $69</button>
              <button onClick={() => handleBuy('pro')} style={{ padding: '10px 16px' }}>Buy Pro Bundle — $129</button>
            </div>
          </div>
          <div style={{ width: 360, background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
            <h3>What's inside</h3>
            <ul>
              <li>Pyro pen + tips</li>
              <li>10 stick-on templates</li>
              <li>3 wedding-ready wood blanks</li>
              <li>Safety guide + glove</li>
            </ul>
          </div>
        </section>

        <section id="templates" style={{ marginTop: 40 }}>
          <h3>Free example SVG templates</h3>
          <p>Download and use for testing — or print on adhesive sheets.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            <a href="/templates/wreath.svg" download>Download Wreath SVG</a>
            <a href="/templates/monogram.svg" download>Download Monogram SVG</a>
            <a href="/templates/mrandmrs.svg" download>Download Mr & Mrs SVG</a>
          </div>
        </section>

        <section id="weddings" style={{ marginTop: 40 }}>
          <h3>Wedding blanks</h3>
          <p>Order pre-sanded blanks ready to custom-burn on-site or at home.</p>
          <div style={{ marginTop: 12 }}>
            <button onClick={() => handleBuy('welcome')} style={{ padding: '8px 12px' }}>Order Welcome Sign — From $120</button>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: 56, padding: 24, borderTop: '1px solid #eee' }}>
        <small>© {new Date().getFullYear()} PyroGuide — Crafted for makers • Contact: hello@pyroguide.example</small>
      </footer>
    </div>
  );
}
