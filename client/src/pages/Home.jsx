import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FeatureCard = ({ to, title, description, emoji }) => (
  <Link 
    to={to}
    style={{
      display: 'block',
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      color: '#001f3f',
      transition: 'transform 0.2s, box-shadow 0.2s',
      border: '1px solid #eaeaea'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)';
    }}
  >
    <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{emoji}</div>
    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>{description}</p>
  </Link>
);

export default function Home() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHealth() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/v1/health`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        setHealth(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      }
    }

    loadHealth();
  }, []);

  const features = [
    {
      to: '/marketplace',
      title: 'Marketplace',
      description: 'Find and sell car parts',
      emoji: '🔧'
    },
    {
      to: '/events',
      title: 'Events',
      description: 'Discover car meets and shows',
      emoji: '📅'
    },
    {
      to: '/profile',
      title: 'Community',
      description: 'Connect with enthusiasts',
      emoji: '👥'
    }
  ];

  return (
    <section>
      <div style={{
        marginBottom: '3rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.75rem', 
          margin: '0 0 1rem 0',
          color: '#001f3f',
          fontWeight: '700',
          lineHeight: '1.2'
        }}>
          Welcome to Carma
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#555', 
          maxWidth: '700px',
          lineHeight: '1.6',
          margin: '0 auto'
        }}>
          Your ultimate destination for car enthusiasts. Find parts, join events, and connect with the community.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        margin: '0 auto',
        maxWidth: '1000px',
        padding: '0 1rem'
      }}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {error && (
        <div style={{
          backgroundColor: '#ffebee',
          padding: '1rem',
          borderRadius: '8px',
          margin: '1rem 0',
          color: '#c62828'
        }}>
          Failed to load health: {error}
        </div>
      )}
      
      {health && (
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#555'
        }}>
          <h3 style={{ marginTop: 0 }}>System Status</h3>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{JSON.stringify(health, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}