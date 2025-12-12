export default function Home() {
  return (
    <main style={{
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      backgroundColor: '#0f1117',
      color: '#e0e0e0',
      fontSize: '1.5rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Anomaly Monitoring System</h1>
        <p>
          <a href="/monitoring" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            → Перейти в мониторинг
          </a>
        </p>
      </div>
    </main>
  );
}