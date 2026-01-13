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
    const userRole = req.user && req.user.role ? req.user.role.toLowerCase() : '';
    if (userRole !== 'admin') {
        return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }
    next();
}

// Verify tech or admin role (technician portal access)
function requireTechOrAdmin(req, res, next) {
    const userRole = req.user && req.user.role ? req.user.role.toLowerCase() : '';
    if (userRole !== 'admin' && userRole !== 'tech') {
        return res.status(403).json({ error: 'Access denied. This portal is for technicians and administrators only.' });
    }
    next();
}

// Block customer role from accessing technician portal
function blockCustomer(req, res, next) {
    const userRole = req.user && req.user.role ? req.user.role.toLowerCase() : '';
    if (userRole === 'customer') {
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
