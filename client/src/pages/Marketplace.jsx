import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample car parts data - replace with your actual data source
const sampleParts = [
  {
    id: 1,
    name: 'Performance Exhaust System',
    vehicle: '2018 Honda Civic Type R',
    price: 899.99,
    condition: 'New',
    rating: 4.8,
    imageUrl: 'https://example.com/exhaust.jpg',
    seller: 'PerformanceParts Co.',
    location: 'Los Angeles, CA',
    description: 'High-performance exhaust system for increased horsepower and better sound. Easy bolt-on installation.'
  },
  {
    id: 2,
    name: 'Coilover Suspension Kit',
    vehicle: '2015-2020 Subaru WRX',
    price: 1299.99,
    condition: 'Used - Like New',
    rating: 4.6,
    imageUrl: 'https://example.com/coilovers.jpg',
    seller: 'Suspension Pros',
    location: 'Miami, FL',
    description: 'Adjustable coilover suspension kit with 32 levels of damping force adjustment.'
  },
  {
    id: 3,
    name: 'Cold Air Intake System',
    vehicle: '2017-2021 Toyota 86 / Subaru BRZ',
    price: 349.99,
    condition: 'New',
    rating: 4.9,
    imageUrl: 'https://example.com/intake.jpg',
    seller: 'AirFlow Performance',
    location: 'Dallas, TX',
    description: 'Increases horsepower and improves throttle response with high-flow air filter.'
  },
  {
    id: 4,
    name: 'Big Brake Kit',
    vehicle: '2010-2014 BMW M3',
    price: 2499.99,
    condition: 'New',
    rating: 4.7,
    imageUrl: 'https://example.com/brakes.jpg',
    seller: 'Brake Masters',
    location: 'Chicago, IL',
    description: '6-piston front brake kit with slotted rotors for maximum stopping power.'
  },
  {
    id: 5,
    name: 'Carbon Fiber Hood',
    vehicle: '2016-2021 Mazda MX-5 Miata',
    price: 799.99,
    condition: 'Used - Good',
    rating: 4.5,
    imageUrl: 'https://example.com/hood.jpg',
    seller: 'CarbonWerks',
    location: 'Denver, CO',
    description: 'Lightweight carbon fiber hood with hood pins. Minor cosmetic blemishes, fully functional.'
  },
  {
    id: 6,
    name: 'Turbocharger Kit',
    vehicle: '2013-2017 Scion FR-S / Subaru BRZ',
    price: 3499.99,
    condition: 'New',
    rating: 4.9,
    imageUrl: 'https://example.com/turbo.jpg',
    seller: 'Boosted Performance',
    location: 'Houston, TX',
    description: 'Complete turbo kit with all necessary components for installation. Adds 100+ HP.'
  }
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = ['All', 'Engine', 'Suspension', 'Exterior', 'Interior', 'Wheels & Tires', 'Lighting'];

  const filteredParts = sampleParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    const matchesPrice = part.price >= priceRange[0] && part.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#001f3f' }}>Car Parts Marketplace</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Find the perfect parts for your vehicle from trusted sellers
        </p>
        
        {/* Search Bar */}
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Search for parts or vehicles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              fontSize: '1rem',
              borderRadius: '50px',
              border: '1px solid #ddd',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              paddingLeft: '45px'
            }}
          />
          <span style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#666'
          }}>🔍</span>
        </div>

        {/* Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Price: </span>
            <input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              style={{
                width: '80px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              style={{
                width: '80px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
          </div>
        </div>
      </div>

      {/* Parts Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {filteredParts.map((part) => (
          <div key={part.id} style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
            },
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Part Image */}
            <div style={{
              height: '200px',
              backgroundColor: '#f5f5f5',
              backgroundImage: `url(${part.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: part.condition === 'New' ? '#4CAF50' : '#FF9800',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {part.condition}
              </div>
            </div>
            
            {/* Part Details */}
            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.25rem',
                  color: '#001f3f'
                }}>
                  {part.name}
                </h3>
                <p style={{
                  margin: '0 0 0.5rem 0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  {part.vehicle}
                </p>
                <p style={{
                  margin: '0 0 0.5rem 0',
                  color: '#001f3f',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  ${part.price.toLocaleString()}
                </p>
                <p style={{ margin: '0.5rem 0', color: '#666', fontSize: '0.9rem' }}>
                  <span>Seller: {part.seller}</span>
                  <br />
                  <span>Location: {part.location}</span>
                </p>
              </div>
              
              <div style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.75rem',
                borderTop: '1px solid #eee'
              }}>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span>★</span> {part.rating} ({Math.floor(Math.random() * 50) + 1} reviews)
                </span>
                <Link 
                  to={`/parts/${part.id}`}
                  style={{
                    backgroundColor: '#001f3f',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s',
                    ':hover': {
                      backgroundColor: '#003366'
                    }
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}