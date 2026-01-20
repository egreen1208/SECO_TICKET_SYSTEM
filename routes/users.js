const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const db = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Get all users (protected route)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const result = await db.query(
            'SELECT id, username, email, full_name, role, is_active, require_password_change, created_at FROM users WHERE is_active = true ORDER BY full_name'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single user (protected route)
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const result = await db.query(
            'SELECT id, username, email, full_name, role, is_active, require_password_change, created_at FROM users WHERE id = $1',
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create new user (ADMIN ONLY)
router.post('/create', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { username, email, password, fullName, role } = req.body;

        // Validate required fields
        if (!username || !email || !password || !fullName) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Insert user
        const result = await db.query(
            `INSERT INTO users (username, email, password_hash, full_name, role, require_password_change) 
             VALUES ($1, $2, $3, $4, $5, true) 
             RETURNING id, username, email, full_name, role, require_password_change, created_at`,
            [username, email, passwordHash, fullName, role || 'User']
        );

        res.status(201).json({
            message: 'User created successfully',
            user: result.rows[0]
        });
    } catch (error) {
        console.error('Create user error:', error);
        if (error.code === '23505') { // Unique violation
            return res.status(400).json({ error: 'Username or email already exists' });
        }
        res.status(500).json({ error: 'Server error' });
    }
});

// Update user (ADMIN ONLY)
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { fullName, email, role, isActive } = req.body;
        const userId = req.params.id;

        const result = await db.query(
            `UPDATE users 
             SET full_name = COALESCE($1, full_name),
                 email = COALESCE($2, email),
                 role = COALESCE($3, role),
                 is_active = COALESCE($4, is_active)
             WHERE id = $5
             RETURNING id, username, email, full_name, role, is_active`,
            [fullName, email, role, isActive, userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Reset password (ADMIN ONLY) - by username
router.post('/reset-password', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }

        // Generate a random temporary password (12 characters)
        const tempPassword = crypto.randomBytes(6).toString('hex'); // Generates 12 hex characters
        const passwordHash = await bcrypt.hash(tempPassword, 10);

        const result = await db.query(
            'UPDATE users SET password_hash = $1, require_password_change = true WHERE username = $2 RETURNING id',
            [passwordHash, username]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ 
            message: 'Password reset successfully', 
            temporaryPassword: tempPassword 
        });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Change password (authenticated user)
router.post('/change-password', authenticateToken, async (req, res) => {
    try {
        const { newPassword } = req.body;
        const userId = req.user.id; // From JWT token

        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }

        const passwordHash = await bcrypt.hash(newPassword, 10);

        await db.query(
            'UPDATE users SET password_hash = $1, require_password_change = false WHERE id = $2',
            [passwordHash, userId]
        );

        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
