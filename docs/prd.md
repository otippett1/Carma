Product Requirements Document (PRD)
Project Title

Carma

Brief Description

Carma is a mobile-first web application that brings together car enthusiasts, vendors, and event organizers into one connected platform. The app allows users to buy and sell car parts, follow verified vendors, browse community posts, and find nearby car meets or events. Vendors can create verified profiles to promote their products, register for events, and connect directly with buyers. The community features include sharing builds, tutorials, and discussions within themed groups. Carma’s goal is to create a reliable, social, and informative hub for automotive enthusiasts.

Technical Architecture
Front-End

Framework: React with Vite for fast local development and mobile-first design.

Styling: Tailwind CSS for responsive layouts and consistent UI.

Routing: React Router DOM for page navigation.

State Management: React Context or React Query for data handling.

Hosting: Vercel or Netlify for simple deployment and scalability.

Back-End

Framework: Express (Node.js).

API Endpoints:

/auth – User registration and authentication.

/parts – Search and filter parts listings.

/vendors – Vendor information and verification.

/events – Event discovery and vendor registration.

/posts – Community feed and group posts.

Authentication: Supabase authentication system (email/password).

Hosting: Render or Supabase Edge Functions for API deployment.

Database

Platform: Supabase (PostgreSQL).

Tables:

users – Stores user credentials and profile info.

vendors – Vendor accounts with verification badges.

parts – Listings of new and used car parts.

reviews – Customer feedback and ratings for vendors.

events – Event details, registration, and geolocation data.

posts – Community posts, tutorials, and Q&A threads.

groups – Interest-based categories (e.g., JDM, Muscle, Euro).

Non-Functional Requirements

Prioritize mobile responsiveness and fast load times.

Maintain secure user authentication and vendor verification.

Allow real-time updates for listings, reviews, and events.

Use a clean, modern interface suitable for automotive enthusiasts.