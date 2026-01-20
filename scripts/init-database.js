require('dotenv').config();
const db = require('../config/database');
const fs = require('fs');
const path = require('path');

async function initDatabase() {
    try {
        console.log('Initializing database...');
        
        // Read and execute schema file
        const schema = fs.readFileSync(
            path.join(__dirname, '../database/schema.sql'),
            'utf8'
        );

        await db.query(schema);
        
        console.log('✓ Database initialized successfully!');
        console.log('✓ Default admin user created');
        console.log('  Please check the schema.sql file for initial credentials');
        
        process.exit(0);
    } catch (error) {
        console.error('Database initialization failed:', error);
        process.exit(1);
    }
}

initDatabase();
