# SECO Ticket System - Azure Deployment Guide

## Backend Files Created

Your Node.js backend is now ready! Here's what was created:

### Core Files
- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server with API routes
- `.env.example` - Environment configuration template
- `.gitignore` - Git ignore file

### Configuration
- `config/database.js` - PostgreSQL connection setup

### Database
- `database/schema.sql` - Complete database schema with tables for users, tickets, queues
- `scripts/init-database.js` - Database initialization script

### API Routes
- `routes/auth.js` - Login and registration endpoints
- `routes/tickets.js` - Ticket CRUD operations
- `routes/queues.js` - Queue management and permissions
- `routes/users.js` - User management

## Next Steps

### 1. Get Your Azure Database Connection Details

Once your Azure deployment completes, go to your PostgreSQL server in Azure portal and get:
- Server name (e.g., `seco-service-portal-server.postgres.database.azure.com`)
- Admin username
- Admin password
- Database name: `seco-service-portal-database`

### 2. Create .env File

Copy `.env.example` to `.env` and fill in your Azure database details:

```bash
cp .env.example .env
```

Edit `.env` with your actual database credentials.

### 3. Install Dependencies Locally (for testing)

```bash
npm install
```

### 4. Initialize Database

Run this to create all tables:

```bash
node scripts/init-database.js
```

This creates:
- Users table
- Queues table (IT Support, Help Desk, Network, Security)
- Tickets table
- Queue permissions table
- Ticket history table
- Default admin user (username: `admin`, password: `admin123`)

### 5. Test Locally

```bash
npm start
```

Visit: http://localhost:3000

### 6. Deploy to Azure

Azure will automatically run `npm start` when your app is deployed.

## Default Login Credentials

**Username:** admin  
**Password:** admin123  
**Email:** admin@seco.com

## API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/tickets` - Get all tickets
- `POST /api/tickets` - Create ticket
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Delete ticket
- `GET /api/queues` - Get all queues
- `GET /api/users` - Get all users

## Database Schema

### Tables Created:
1. **users** - User accounts and authentication
2. **queues** - Ticket queues/categories
3. **queue_permissions** - User permissions per queue
4. **tickets** - Support tickets
5. **ticket_history** - Audit trail for ticket changes

Ready to deploy! 🚀
