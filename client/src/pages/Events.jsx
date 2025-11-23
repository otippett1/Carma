import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample events data - replace with your actual data source
const sampleEvents = [
  {
    id: 1,
    title: 'Annual Car Meet & Show',
    date: '2023-12-15T10:00:00',
    location: 'Downtown Convention Center, Los Angeles, CA',
    description: 'Join us for the biggest car meet of the year! All makes and models welcome. Food trucks, music, and awards.',
    category: 'Car Meet',
    price: 15,
    capacity: 500,
    imageUrl: 'https://example.com/car-meet.jpg',
    organizer: 'LA Car Enthusiasts Club'
  },
  {
    id: 2,
    title: 'Drift Competition 2023',
    date: '2023-12-20T09:00:00',
    location: 'Speedway Race Track, Las Vegas, NV',
    description: 'Watch professional drifters compete for the championship title. Food and drinks available on site.',
    category: 'Competition',
    price: 25,
    capacity: 2000,
    imageUrl: 'https://example.com/drift-comp.jpg',
    organizer: 'West Coast Drift Association'
  },
  {
    id: 3,
    title: 'Classic Car Auction',
    date: '2024-01-05T11:00:00',
    location: 'Vintage Auto Gallery, Scottsdale, AZ',
    description: 'Exclusive auction featuring rare and classic cars from private collections worldwide.',
    category: 'Auction',
    price: 50,
    capacity: 300,
    imageUrl: 'https://example.com/classic-auction.jpg',
    organizer: 'Elite Auto Auctions'
  },
  {
    id: 4,
    title: 'Track Day Experience',
    date: '2024-01-15T08:00:00',
    location: 'Willow Springs Raceway, Rosamond, CA',
    description: 'Bring your car to the track! Open lapping sessions for all skill levels. Instructors available.',
    category: 'Track Day',
    price: 150,
    capacity: 50,
    imageUrl: 'https://example.com/track-day.jpg',
    organizer: 'Track Masters Club'
  },
  {
    id: 5,
    title: 'JDM Night Market',
    date: '2024-01-20T17:00:00',
    location: 'Tokyo Parking Lot, Little Tokyo, Los Angeles, CA',
    description: 'Night market featuring JDM cars, parts vendors, and Japanese street food. Free entry!',
    category: 'Car Meet',
    price: 0,
    capacity: 1000,
    imageUrl: 'https://example.com/jdm-night.jpg',
    organizer: 'JDM Society'
  },
  {
    id: 6,
    title: 'Off-Road Adventure Weekend',
    date: '2024-02-10T07:00:00',
    location: 'Mojave Desert, CA',
    description: 'Guided off-road trails for all experience levels. Camping available. Must have 4WD/AWD vehicle.',
    category: 'Off-Road',
    price: 75,
    capacity: 100,
    imageUrl: 'https://example.com/offroad.jpg',
    organizer: 'Desert Runners Club'
  }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  const categories = ['All', 'Car Meet', 'Competition', 'Auction', 'Track Day', 'Off-Road', 'Charity'];

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredEvents = sampleEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const eventDate = new Date(event.date);
    const startDate = dateRange.start ? new Date(dateRange.start) : null;
    const endDate = dateRange.end ? new Date(dateRange.end) : null;
    
    const matchesDate = (!startDate || eventDate >= startDate) && 
                       (!endDate || eventDate <= new Date(endDate.getTime() + 24 * 60 * 60 * 1000 - 1));
    
    return matchesSearch && matchesCategory && matchesDate;
  });

  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#001f3f' }}>Upcoming Events</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Find and join car events, meets, and competitions near you
        </p>
        
        {/* Search Bar */}
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Search events or locations..."
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
            <span>Date: </span>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
            <span>to</span>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {filteredEvents.map((event) => {
          const eventDate = new Date(event.date);
          const isUpcoming = new Date() < eventDate;
          
          return (
            <div key={event.id} style={{
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
              {/* Event Image */}
              <div style={{
                height: '200px',
                backgroundColor: '#f5f5f5',
                backgroundImage: `url(${event.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: isUpcoming ? '#4CAF50' : '#f44336',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  {isUpcoming ? 'Upcoming' : 'Past Event'}
                </div>
                {event.price === 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    Free Entry
                  </div>
                )}
              </div>
              
              {/* Event Details */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem'
                  }}>
                    <h3 style={{
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.4rem',
                      color: '#001f3f'
                    }}>
                      {event.title}
                    </h3>
                    {event.price > 0 && (
                      <span style={{
                        backgroundColor: '#f5f5f5',
                        color: '#001f3f',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        marginLeft: '1rem'
                      }}>
                        ${event.price}
                      </span>
                    )}
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    color: '#666',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>📅</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginBottom: '1rem',
                    color: '#666',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>📍</span>
                    <span>{event.location}</span>
                  </div>
                  
                  <p style={{ 
                    margin: '0.5rem 0', 
                    color: '#555', 
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {event.description}
                  </p>
                </div>
                
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #eee'
                }}>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>
                    <div>👥 {event.capacity} spots available</div>
                    <div>🎯 {event.organizer}</div>
                  </div>
                  <Link 
                    to={`/events/${event.id}`}
                    style={{
                      backgroundColor: isUpcoming ? '#001f3f' : '#888',
                      color: 'white',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      transition: 'background-color 0.2s',
                      ':hover': {
                        backgroundColor: isUpcoming ? '#003366' : '#666'
                      }
                    }}
                  >
                    {isUpcoming ? 'Register Now' : 'View Details'}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}