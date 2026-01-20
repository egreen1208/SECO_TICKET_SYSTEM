require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');
const queueRoutes = require('./routes/queues');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/queues', queueRoutes);
app.use('/api/users', userRoutes);

// Helper endpoint to create initial test accounts (remove in production after setup)
app.post('/api/setup/create-test-accounts', async (req, res) => {
    try {
        const bcrypt = require('bcrypt');
        const db = require('./config/database');
        
        // Create test customer account
        const customerPassword = await bcrypt.hash('customer123', 10);
        await db.query(
            `INSERT INTO users (username, email, password_hash, full_name, role) 
             VALUES ($1, $2, $3, $4, $5) 
             ON CONFLICT (username) DO NOTHING`,
            ['customer', 'customer@secoticket.com', customerPassword, 'Test Customer', 'Customer']
        );
        
        res.json({ message: 'Test accounts created successfully' });
    } catch (error) {
        console.error('Setup error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/tech-login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'tech-login.html'));
});

app.get('/landing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'landing.html'));
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'home.html'));
});

app.get('/customer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'customer.html'));
});

app.get('/reports.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'reports.html'));
});

app.get('/queue-manager.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'queue-manager.html'));
});

app.get('/setup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'setup.html'));
});

// Admin pages
app.get('/admin-users.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'admin', 'admin-users.html'));
});

app.get('/admin-system.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'admin', 'admin-system.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'admin', 'admin.html'));
});

// Customer pages
app.get('/customer-it.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'customer', 'customer-it.html'));
});

app.get('/customer-buildings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'customer', 'customer-buildings.html'));
});

app.get('/customer-electrical.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'customer', 'customer-electrical.html'));
});

app.get('/customer-moves.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'customer', 'customer-moves.html'));
});

app.get('/customer-rma.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'customer', 'customer-rma.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!', 
        message: err.message 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
