import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Events from './pages/Events'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', 
      maxWidth: 960, 
      margin: '0 auto', 
      padding: 16,
      backgroundColor: '#fff',
      color: '#001f3f',
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <nav style={{ 
        display: 'flex', 
        gap: 12, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0,
        padding: '1rem 0',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        zIndex: 1000
      }}>
        <strong style={{ fontSize: '1.5rem', color: '#001f3f' }}>🚗 Carma</strong>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link to="/" style={{ color: '#001f3f', textDecoration: 'none' }}>Home</Link>
          <Link to="/marketplace" style={{ color: '#001f3f', textDecoration: 'none' }}>Marketplace</Link>
          <Link to="/events" style={{ color: '#001f3f', textDecoration: 'none' }}>Events</Link>
          <Link to="/profile" style={{ color: '#001f3f', textDecoration: 'none' }}>Profile</Link>
        </div>
      </nav>
      <main style={{ paddingTop: 24, minHeight: 'calc(100vh - 200px)', color: '#001f3f' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}
