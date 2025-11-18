import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Events from './pages/Events'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', maxWidth: 960, margin: '0 auto', padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12, justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0 }}>
        <strong>Carma</strong>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/events">Events</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
      <main style={{ paddingTop: 16 }}>
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
