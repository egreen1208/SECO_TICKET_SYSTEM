const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get all tickets
router.get('/', async (req, res) => {
    try {
        const { queueId, status, priority, assignedTo } = req.query;
        
        let query = `
            SELECT t.*, 
                   u1.full_name as created_by_name,
                   u2.full_name as assigned_to_name,
                   q.name as queue_name
            FROM tickets t
            LEFT JOIN users u1 ON t.created_by = u1.id
            LEFT JOIN users u2 ON t.assigned_to = u2.id
            LEFT JOIN queues q ON t.queue_id = q.id
            WHERE 1=1
        `;
        const params = [];
        let paramCount = 1;

        if (queueId) {
            query += ` AND t.queue_id = $${paramCount}`;
            params.push(queueId);
            paramCount++;
        }
        if (status && status !== 'All') {
            query += ` AND t.status = $${paramCount}`;
            params.push(status);
            paramCount++;
        }
        if (priority && priority !== 'All') {
            query += ` AND t.priority = $${paramCount}`;
            params.push(priority);
            paramCount++;
        }
        if (assignedTo && assignedTo !== 'All') {
            query += ` AND t.assigned_to = $${paramCount}`;
            params.push(assignedTo);
            paramCount++;
        }

        query += ' ORDER BY t.created_at DESC';

        const result = await db.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error('Get tickets error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single ticket
router.get('/:id', async (req, res) => {
    try {
        const result = await db.query(
            `SELECT t.*, 
                    u1.full_name as created_by_name,
                    u2.full_name as assigned_to_name,
                    q.name as queue_name
             FROM tickets t
             LEFT JOIN users u1 ON t.created_by = u1.id
             LEFT JOIN users u2 ON t.assigned_to = u2.id
             LEFT JOIN queues q ON t.queue_id = q.id
             WHERE t.id = $1`,
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Ticket not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Get ticket error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create ticket
router.post('/', async (req, res) => {
    try {
        const { queueId, title, description, priority, assignedTo, createdBy } = req.body;

        // Generate ticket number
        const ticketNumber = `TKT-${Date.now()}`;

        const result = await db.query(
            `INSERT INTO tickets (ticket_number, queue_id, title, description, priority, assigned_to, created_by, status)
             VALUES ($1, $2, $3, $4, $5, $6, $7, 'Open')
             RETURNING *`,
            [ticketNumber, queueId, title, description, priority, assignedTo, createdBy]
        );

        // Add history entry
        await db.query(
            'INSERT INTO ticket_history (ticket_id, user_id, action, new_value) VALUES ($1, $2, $3, $4)',
            [result.rows[0].id, createdBy, 'Created', 'Ticket created']
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create ticket error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Update ticket
router.put('/:id', async (req, res) => {
    try {
        const { title, description, status, priority, assignedTo, userId } = req.body;
        const ticketId = req.params.id;

        // Get current ticket for history
        const current = await db.query('SELECT * FROM tickets WHERE id = $1', [ticketId]);
        if (current.rows.length === 0) {
            return res.status(404).json({ error: 'Ticket not found' });
        }

        const result = await db.query(
            `UPDATE tickets 
             SET title = COALESCE($1, title),
                 description = COALESCE($2, description),
                 status = COALESCE($3, status),
                 priority = COALESCE($4, priority),
                 assigned_to = COALESCE($5, assigned_to),
                 closed_at = CASE WHEN $3 = 'Closed' THEN CURRENT_TIMESTAMP ELSE closed_at END
             WHERE id = $6
             RETURNING *`,
            [title, description, status, priority, assignedTo, ticketId]
        );

        // Add history entry
        if (status && status !== current.rows[0].status) {
            await db.query(
                'INSERT INTO ticket_history (ticket_id, user_id, action, old_value, new_value) VALUES ($1, $2, $3, $4, $5)',
                [ticketId, userId, 'Status Changed', current.rows[0].status, status]
            );
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Update ticket error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete ticket
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM tickets WHERE id = $1', [req.params.id]);
        res.json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        console.error('Delete ticket error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
