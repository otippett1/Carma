# Carma

Carma is a mobile-first marketplace and community platform for car enthusiasts to browse and post parts, discover events, and interact with other users.  
This project uses a Supabase backend, a Node/Express API deployed on AWS Lambda, and a React frontend deployed on AWS Amplify.

---

## 🚀 Live URLs

### Frontend (Amplify Production)
https://main.drjyc1rwvl46i.amplifyapp.com/

### Backend API (AWS API Gateway → Lambda)
**Base URL:**  
https://c5e8jt5w0m.execute-api.us-east-1.amazonaws.com

**Health endpoint:**  
https://c5e8jt5w0m.execute-api.us-east-1.amazonaws.com/health

Use `/health` to verify the server is deployed and reachable.

### Supabase Project  
- **Project name:** Carma  
- **Project ID:** ywovrgkslofeuykpbhge  
- Dashboard: https://app.supabase.com/project/ywovrgkslofeuykpbhge

---

## 🧱 Tech Stack

- **Frontend:** React + Vite, deployed via AWS Amplify Hosting  
- **Backend:** Node.js + Express, deployed on AWS Lambda behind API Gateway  
- **Database & Auth:** Supabase (Postgres + RLS)  
- **Secrets:** Stored in AWS Secrets Manager & Amplify environment variables  
- **Other AWS Services:** CloudWatch Logs, IAM, API Gateway

---

## 📦 Features (MVP)

- Browse live marketplace listings  
- Create, update, and delete listings (CRUD) through the deployed API  
- View community content & events (if implemented)  
- Auth handled by Supabase  
- Frontend securely calling backend API (no direct DB access)  
- CORS configured to allow only Amplify domain  

---

## 🧪 Testing Instructions

### Health Check  
Open:  
https://c5e8jt5w0m.execute-api.us-east-1.amazonaws.com/health  
Expected response:  
```json
{ "status": "ok" }


