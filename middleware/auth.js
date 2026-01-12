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
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
    }
    next();
}

module.exports = {
    authenticateToken,
    requireAdmin
};
