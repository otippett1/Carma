import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample user data - replace with actual user data from your auth system
const userData = {
  id: 1,
  name: 'Alex Johnson',
  username: '@alexjohnson',
  email: 'alex.johnson@example.com',
  joinDate: '2023-01-15',
  location: 'Los Angeles, CA',
  bio: 'Car enthusiast and weekend racer. Love working on my project cars and attending local car meets.',
  avatar: 'https://example.com/avatar.jpg',
  coverPhoto: 'https://example.com/cover.jpg',
  stats: {
    listings: 12,
    events: 8,
    followers: 245,
    following: 189
  },
  socialLinks: {
    instagram: 'alexjohnson',
    twitter: 'alexjohnson',
    facebook: 'alexjohnson'
  },
  recentActivity: [
    {
      id: 1,
      type: 'listing',
      title: 'HKS Hi-Power Exhaust',
      date: '2023-11-20T14:30:00',
      action: 'added a new listing'
    },
    {
      id: 2,
      type: 'event',
      title: 'Winter Car Meet 2023',
      date: '2023-11-18T10:15:00',
      action: 'registered for'
    },
    {
      id: 3,
      type: 'review',
      title: '5-star seller',
      date: '2023-11-15T16:45:00',
      action: 'received a new'
    }
  ]
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState('listings');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically make an API call to update the profile
    console.log('Profile updated:', profileData);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      {/* Cover Photo */}
      <div style={{
        height: '300px',
        backgroundColor: '#f0f2f5',
        borderRadius: '10px',
        marginBottom: '1.5rem',
        position: 'relative',
        backgroundImage: `url(${profileData.coverPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {isEditing && (
          <button
            onClick={() => document.getElementById('cover-upload').click()}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            📷 Change Cover
            <input
              type="file"
              id="cover-upload"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                // Handle cover photo upload
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setProfileData(prev => ({
                      ...prev,
                      coverPhoto: event.target.result
                    }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </button>
        )}
      </div>

      {/* Profile Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
        position: 'relative',
        padding: '0 20px'
      }}>
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '4px solid white',
          marginTop: '-75px',
          backgroundColor: '#f0f2f5',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <img
            src={profileData.avatar}
            alt={profileData.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {isEditing && (
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                textAlign: 'center',
                padding: '8px 0',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
              onClick={() => document.getElementById('avatar-upload').click()}
            >
              ✏️ Edit
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setProfileData(prev => ({
                        ...prev,
                        avatar: event.target.result
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '4px 8px',
                marginBottom: '0.5rem',
                width: '100%',
                maxWidth: '300px'
              }}
            />
          ) : (
            <h1 style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#001f3f' }}>{profileData.name}</h1>
          )}
          
          <p style={{ color: '#666', margin: '0.25rem 0' }}>{profileData.username}</p>
          <p style={{ color: '#666', margin: '0.25rem 0' }}>📍 {profileData.location}</p>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>Member since {new Date(profileData.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        {isEditing ? (
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <button
              onClick={handleSaveProfile}
              style={{
                backgroundColor: '#001f3f',
                color: 'white',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={{
                backgroundColor: '#f0f2f5',
                color: '#001f3f',
                border: '1px solid #ddd',
                padding: '8px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: 'white',
              color: '#001f3f',
              border: '1px solid #ddd',
              padding: '8px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '500',
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            ✏️ Edit Profile
          </button>
        )}
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {Object.entries(profileData.stats).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              color: '#001f3f'
            }}>
              {value}
            </div>
            <div style={{ 
              color: '#666',
              textTransform: 'capitalize'
            }}>
              {key}
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto 2rem',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h3 style={{ color: '#001f3f', marginBottom: '0.5rem' }}>About</h3>
        {isEditing ? (
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              fontFamily: 'inherit',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Tell others about yourself..."
          />
        ) : (
          <p style={{ color: '#555', lineHeight: '1.6' }}>{profileData.bio}</p>
        )}
      </div>

      {/* Tabs */}
      <div style={{ 
        borderBottom: '1px solid #eee',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {['listings', 'events', 'reviews'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid #001f3f' : '2px solid transparent',
              color: activeTab === tab ? '#001f3f' : '#666',
              fontWeight: '500',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontSize: '1rem'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: '0 20px' }}>
        {activeTab === 'listings' && (
          <div>
            <h3 style={{ color: '#001f3f', marginBottom: '1rem' }}>My Listings</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[1, 2, 3].map(item => (
                <div key={item} style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    height: '180px',
                    backgroundColor: '#f5f5f5',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem', color: '#001f3f' }}>Performance Exhaust System</h4>
                    <p style={{ margin: '0 0 0.5rem', color: '#4CAF50', fontWeight: '500' }}>$899.99</p>
                    <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>Listed 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <h3 style={{ color: '#001f3f', marginBottom: '1rem' }}>My Events</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[1, 2].map(item => (
                <div key={item} style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    height: '180px',
                    backgroundColor: '#f5f5f5',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem', color: '#001f3f' }}>Car Meet & Show</h4>
                    <p style={{ margin: '0 0 0.5rem', color: '#666', fontSize: '0.9rem' }}>Dec 15, 2023</p>
                    <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>Registered on Nov 10, 2023</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 style={{ color: '#001f3f', marginBottom: '1rem' }}>Recent Reviews</h3>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {[1, 2, 3].map(review => (
                <div key={review} style={{ 
                  padding: '1rem 0',
                  borderBottom: '1px solid #eee',
                  '&:last-child': { borderBottom: 'none' }
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#FFD700', marginRight: '0.5rem' }}>★★★★★</span>
                    <span style={{ fontWeight: '500', color: '#001f3f' }}>Excellent Seller!</span>
                  </div>
                  <p style={{ margin: '0 0 0.5rem', color: '#555' }}>"Great communication and fast shipping. Would buy from again!"</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '0.9rem' }}>
                    <span>From: John D.</span>
                    <span>Nov 12, 2023</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}