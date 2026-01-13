const jwt = require('jsonwebtoken');

// Verify JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token' });
    }
}

// Verify admin role
function requireAdmin(req, res, next) {
    if (req.user.role !== 'admin' && req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }
    next();
}

// Verify tech or admin role (technician portal access)
function requireTechOrAdmin(req, res, next) {
    const role = req.user.role.toLowerCase();
    if (role !== 'admin' && role !== 'tech') {
        return res.status(403).json({ error: 'Access denied. This portal is for technicians and administrators only.' });
    }
    next();
}

// Block customer role from accessing technician portal
function blockCustomer(req, res, next) {
    const role = req.user.role.toLowerCase();
    if (role === 'customer') {
        return res.status(403).json({ error: 'Access denied. Customers cannot access the technician portal.' });
    }
    next();
}

module.exports = {
    authenticateToken,
    requireAdmin,
    requireTechOrAdmin,
    blockCustomer
};
