const jwt = require('jsonwebtoken');

// Verify JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    // Validate JWT secret is configured
    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not configured');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token' });
    }
}

// Verify admin role
function requireAdmin(req, res, next) {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }
    next();
}

// Verify customer role - only allow Customer role access
function requireCustomer(req, res, next) {
    if (req.user.role !== 'Customer') {
        return res.status(403).json({ error: 'Access denied. Customer account required.' });
    }
    next();
}

// Verify staff role - allow Admin, Technician, but NOT Customer
function requireStaff(req, res, next) {
    if (req.user.role === 'Customer') {
        return res.status(403).json({ error: 'Access denied. Staff privileges required.' });
    }
    next();
}

module.exports = {
    authenticateToken,
    requireAdmin,
    requireCustomer,
    requireStaff
};
