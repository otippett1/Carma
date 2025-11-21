import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/v1/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'carma-api',
    time: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  })
})

// Placeholder routes
app.get('/parts', (_req, res) => {
  res.json({ items: [], message: 'Parts endpoint placeholder' })
})

app.get('/events', (_req, res) => {
  res.json({ items: [], message: 'Events endpoint placeholder' })
})

app.post('/auth/login', (_req, res) => {
  res.json({ token: null, message: 'Auth placeholder' })
})

app.listen(PORT, () => {
  console.log(`carma-api listening on http://localhost:${PORT}`)
})
