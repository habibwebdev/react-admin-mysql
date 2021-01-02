import express from 'express'
import dotenv from 'dotenv'

// Initiate dotenv config
dotenv.config()

// Initiate app with express
const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('API is running')
})

app.listen(5000, console.log('Server is running on port 5000'))
