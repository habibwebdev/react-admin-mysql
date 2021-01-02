import express from 'express'
import dotenv from 'dotenv'

// Initiate dotenv config
dotenv.config()

// Initiate app with express
const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('API is running...')
})

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${port}`
  )
)
