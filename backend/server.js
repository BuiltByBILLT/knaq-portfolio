import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan'
import "express-async-errors"
import { errorHandler, notFound } from './middleware.js/errorMiddleware.js'
import { manualWaitlist, stripeCreateSession } from './controllers/controllers.js'

dotenv.config()
const app = express()
app.use(express.json())
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev')) }
if (process.env.NODE_ENV === 'production') { app.use(morgan('dev')) }


app.use('/api/users', (req, res) => { res.send("Users") })
app.post('/create-checkout-session', stripeCreateSession)
app.post('/api/manualWaitlist', manualWaitlist)

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve()
    app.use('/images', express.static(path.join(__dirname, 'frontend', 'public', 'images')))
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => { res.send(`API is running in ${process.env.NODE_ENV} mode`) })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

