const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all queues
router.get('/', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM queues WHERE is_active = true ORDER BY name'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Get queues error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get queue permissions for a user
router.get('/permissions/:userId', async (req, res) => {
    try {
        const result = await db.query(
            `SELECT qp.*, q.name as queue_name
             FROM queue_permissions qp
             JOIN queues q ON qp.queue_id = q.id
             WHERE qp.user_id = $1 AND q.is_active = true`,
            [req.params.userId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Get permissions error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create queue
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;

        const result = await db.query(
            'INSERT INTO queues (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create queue error:', error);
        if (error.code === '23505') {
            return res.status(400).json({ error: 'Queue name already exists' });
        }
        res.status(500).json({ error: 'Server error' });
    }
});

// Update queue permissions
router.post('/permissions', async (req, res) => {
    try {
        const { queueId, userId, canView, canCreate, canEdit, canDelete } = req.body;

        const result = await db.query(
            `INSERT INTO queue_permissions (queue_id, user_id, can_view, can_create, can_edit, can_delete)
             VALUES ($1, $2, $3, $4, $5, $6)
             ON CONFLICT (queue_id, user_id) 
             DO UPDATE SET can_view = $3, can_create = $4, can_edit = $5, can_delete = $6
             RETURNING *`,
            [queueId, userId, canView, canCreate, canEdit, canDelete]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update permissions error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
