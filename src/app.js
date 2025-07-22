const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const reviewRoutes = require('./routes/review.routes');

const app = express()

app.use(cors({
  origin: ['http://localhost:5173','https://coderev-frontend.vercel.app'], // Vite default port
  credentials: true
}));


app.use(express.json())

const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error:', err));

app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
}));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/review', reviewRoutes);

module.exports = app
