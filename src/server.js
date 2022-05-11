import path from 'path'
import express from 'express'

const app = express()

// app.use(express.json())
// if (process.env.NODE_ENV === 'development') { app.use(morgan('dev'))}
// if (process.env.NODE_ENV === 'production') {    app.use(morgan('dev'))}

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use('/images', express.static(path.join(__dirname, 'knaq', 'public', 'images')))
    app.use(express.static(path.join(__dirname, '/knaq/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'knaq', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => { res.send('API is running') })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
))

