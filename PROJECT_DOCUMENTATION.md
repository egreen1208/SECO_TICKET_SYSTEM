# SECO Ticket System - Technical Documentation

## Project Overview

The SECO Ticket System is a full-stack web application built for managing IT service desk tickets. It's designed to handle multiple service queues (IT, Buildings & Grounds, Electrical Services, etc.) with role-based access control, time tracking, and comprehensive reporting features.

---

## Technology Stack

### Frontend Technologies

#### **HTML (HyperText Markup Language)**
HTML provides the structure and content of the web pages. It defines what elements appear on the page.

**HTML Files in This Project:**
- **`public/views/home.html`** - Main technician/admin dashboard with queue navigation and ticket management
- **`public/views/index.html`** - Customer portal login page
- **`public/views/tech-login.html`** - Staff/technician login page
- **`public/views/admin/admin-users.html`** - User management interface for creating/editing users
- **`public/views/admin/admin-system.html`** - System settings and queue configuration
- **`public/views/reports.html`** - Reporting and analytics dashboard
- **`public/views/customer/*.html`** - Customer-facing ticket submission forms for different service types

**What HTML Does:**
- Creates forms for user input (login, ticket creation, user management)
- Defines the page layout (headers, sidebars, content areas)
- Structures data display (tables, lists, cards)
- Creates interactive elements (buttons, dropdowns, modals)

#### **CSS (Cascading Style Sheets)**
CSS controls the visual appearance and layout of the HTML elements.

**CSS File:**
- **`public/css/styles.css`** (3,567 lines) - Complete styling system including:
  - Color scheme (primary blue #0054a6, accents, backgrounds)
  - Typography (fonts, sizes, weights)
  - Layout (flexbox, grid, positioning)
  - Component styles (buttons, cards, modals, forms)
  - Dark mode styling
  - Responsive design for different screen sizes
  - Animations and transitions

**Key CSS Features:**
- **Dark Mode**: Toggle between light and dark color schemes
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Component Library**: Reusable button styles, form controls, card layouts
- **Custom Scrollbars**: Styled scrollbars for better UX
- **Hover Effects**: Interactive feedback on buttons and clickable elements

#### **JavaScript**
JavaScript adds interactivity and handles all the application logic on the client side.

**JavaScript File:**
- **`public/js/app.js`** (5,048 lines) - Complete application logic

**Major JavaScript Functions by Feature:**

##### **1. Authentication & User Management**
```javascript
// Lines 1-100: User authentication state
- currentUser: Stores logged-in username
- currentUserRole: Stores user role (admin, tech, customer)
- currentUserPermissions: Stores queue access and permissions
```

**Functions:**
- Login validation
- Session management (localStorage)
- Password change on first login
- Password reset functionality

##### **2. Queue Management (Lines 1802-1900)**
```javascript
getActiveQueues() // Returns list of enabled service queues
getAccessibleQueues() // Filters queues based on user permissions
hasQueueAccess(queueId) // Checks if user can access specific queue
renderQueueButtons() // Displays queue navigation buttons
```

**What This Does:** 
- Only shows queues the user has permission to access
- Handles parent-child queue relationships (IT → IT Support, IT Applications, etc.)
- Dynamically creates navigation buttons based on permissions

##### **3. Ticket Display & Filtering (Lines 4447-4650)**
```javascript
updateTickets() // Main function to filter and display tickets
renderBoard() // Kanban-style board view
renderListView() // Table/card list view
```

**Filtering Capabilities:**
- By queue (only accessible queues)
- By status (Open, In Progress, Pending, Resolved, Closed)
- By priority (Low, Medium, High, Critical)
- By technician assignment
- Search by title
- Sort by date, priority, alphabetical

##### **4. Ticket Creation & Editing (Lines 2800-3100)**
```javascript
openNewTicketWithQueue() // Opens new ticket form with pre-selected queue
populateAccessibleQueues() // Populates queue dropdown with user's queues
updateAssignedToOptions() // Shows only techs with queue access
```

**Smart Assignment Logic:**
- When a queue is selected, only technicians with access to that queue appear in "Assigned To" dropdown
- Prevents assigning tickets to users without queue access

##### **5. User Management (Lines 3267-3630)**
```javascript
renderAdmin() // Displays user list with scrollable interface
getUsersForQueue(queueId) // Returns users who can access a queue
initAdminUserForm() // Auto-generates usernames/emails from first/last name
```

**Auto-Generation Features:**
- Username: firstname.lastname
- Email: firstname.lastname@secoenergy.com
- Default password: "password123" (must change on first login)

##### **6. Time Tracking (Lines 1990-2200)**
```javascript
startTimeTracking(ticketId) // Auto-starts timer when ticket opened
getTotalMinutes(ticket) // Sums all time entries
formatMinutes(mins) // Converts to "2h 30m" format
```

**How It Works:**
- Automatically tracks time when viewing tickets
- Manual time entry option for backdated work
- Displays total time per ticket
- Exports time in reports

##### **7. Reports & Analytics (Lines 3407-3450)**
```javascript
renderReports() // Generates statistics
exportTicketsCSV() // Exports data to spreadsheet
```

**Report Features:**
- Tickets by status, queue, priority
- Total time logged
- CSV export with all ticket data
- Only shows data for accessible queues

##### **8. Permission System (Lines 1836-1900)**
```javascript
hasQueueAccess(queueId) // Core permission check
hasPermission(permission) // Checks user capabilities
```

**Permission Types:**
- **Queue Access**: Array of queue IDs user can view/modify
- **Wildcard Access**: `["*"]` for admins = all queues
- **Capability Permissions**: canCreateTickets, canEditTickets, canDeleteTickets, canManageUsers, etc.

---

### Backend Technologies

#### **Node.js**
Runtime environment that allows JavaScript to run on the server.

**Why Node.js:**
- Same language (JavaScript) for frontend and backend
- Non-blocking I/O = handles many connections efficiently
- Large ecosystem of packages (npm)

#### **Express.js Framework**
Web application framework for Node.js that simplifies building web servers.

**Main Server File:**
- **`server.js`** - Express server configuration

**What Express Does:**
```javascript
// Example from server.js
app.get('/admin-users.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/admin/admin-users.html'));
});
```

**Key Concepts:**
- **Routes**: Maps URLs to specific files or functions
- **Middleware**: Functions that process requests (authentication, logging)
- **Static Files**: Serves CSS, JavaScript, images automatically
- **API Endpoints**: RESTful routes for data operations

**API Routes in This Project:**
- **`routes/auth.js`** - Login, logout, password management
- **`routes/users.js`** - User CRUD operations, password reset
- **`routes/tickets.js`** - Ticket CRUD operations, comments, time entries
- **`routes/queues.js`** - Queue configuration

#### **Database: PostgreSQL**

**Database File:**
- **`database/schema.sql`** - Database structure definition

**What PostgreSQL Is:**
- **Relational Database**: Data stored in tables with relationships
- **SQL (Structured Query Language)**: Used to query and modify data
- **ACID Compliant**: Ensures data integrity (Atomic, Consistent, Isolated, Durable)

**Database Tables:**

##### **1. users Table**
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(200),
    email VARCHAR(200),
    role VARCHAR(50),
    department VARCHAR(100),
    phone VARCHAR(50),
    active BOOLEAN DEFAULT true,
    permissions JSONB,
    require_password_change BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Fields Explained:**
- `SERIAL PRIMARY KEY`: Auto-incrementing unique identifier
- `VARCHAR(100)`: Variable-length text up to 100 characters
- `UNIQUE NOT NULL`: Must be unique and cannot be empty
- `BOOLEAN`: True/false value
- `JSONB`: JSON data stored efficiently (for complex permissions)
- `TIMESTAMP`: Date and time

##### **2. tickets Table**
Stores all ticket information

##### **3. comments Table**
Stores ticket comments

##### **4. time_entries Table**
Stores time tracking records

##### **5. queues Table**
Stores queue configurations

**Database Connection:**
```javascript
// config/database.js
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});
```

**Connection Pooling:**
- Maintains multiple database connections
- Reuses connections instead of creating new ones
- Improves performance

---

## How It Works Together

### 1. User Visits Website

```
Browser → Azure Web App → Express Server → Serves HTML/CSS/JS
```

### 2. User Logs In

```
1. User enters credentials in HTML form
2. JavaScript captures form submission
3. Sends AJAX request to /api/auth/login
4. Express route receives request
5. Queries PostgreSQL database
6. Validates password (bcrypt hashing)
7. Returns JWT token + user data
8. JavaScript stores token in localStorage
9. Redirects to appropriate dashboard
```

### 3. User Views Tickets

```
1. JavaScript calls getAccessibleQueues()
2. Checks user permissions from localStorage
3. Renders only authorized queue buttons
4. User clicks queue button
5. updateTickets() filters tickets array
6. Only shows tickets from accessible queues
7. Renders tickets in DOM (HTML elements)
8. CSS styles the display
```

### 4. User Creates Ticket

```
1. Click "+ New Ticket" button
2. JavaScript shows modal with form
3. Populate queue dropdown with accessible queues
4. User fills form and clicks Submit
5. JavaScript validates form
6. Sends POST request to /api/tickets
7. Express route receives data
8. Inserts into PostgreSQL database
9. Returns success/error
10. JavaScript updates UI
```

---

## Azure Deployment Architecture

### **What Azure Provides:**

#### **1. Azure App Service (Web App)**
- **What It Is**: Managed hosting for web applications
- **What It Does**: 
  - Runs your Node.js server 24/7
  - Automatically scales based on traffic
  - Provides HTTPS certificate (secure connection)
  - Handles server restarts and updates

**How Your App Runs:**
```
Your Code → GitHub → Azure Deployment → App Service
                                       ↓
                                    Starts Node.js
                                       ↓
                                    Runs server.js
                                       ↓
                                    Listens on Port 443 (HTTPS)
```

#### **2. Azure Database for PostgreSQL**
- **What It Is**: Managed PostgreSQL database service
- **What It Does**:
  - Stores all your data
  - Automatic backups
  - High availability (redundancy)
  - Handles maintenance

**Connection Flow:**
```
App Service → PostgreSQL Connection String → Azure Database
```

#### **3. Environment Variables**
Stored in Azure App Service Configuration:
```
DATABASE_URL=postgresql://user:password@server.postgres.database.azure.com/database
JWT_SECRET=your-secret-key
NODE_ENV=production
```

**Why Environment Variables:**
- Keeps secrets out of code
- Different values for development/production
- Easy to change without redeploying

### **Deployment Process:**

#### **Method 1: GitHub Actions (CI/CD)**
```yaml
# .github/workflows/deploy.yml (if you set it up)
1. Push code to GitHub
2. GitHub Actions triggers
3. Runs tests
4. Builds application
5. Deploys to Azure
```

#### **Method 2: Git Deploy**
```bash
# Local deployment
git add .
git commit -m "Update"
git push azure main

# Azure receives push
# Runs npm install
# Starts application
```

### **How Users Access Your Site:**

```
User Browser
    ↓
https://your-app.azurewebsites.net (or custom domain)
    ↓
Azure Load Balancer
    ↓
Azure App Service (Your Node.js App)
    ↓
    ├→ Serves HTML/CSS/JavaScript files
    ├→ Handles API requests
    └→ Connects to PostgreSQL Database
```

---

## Key Programming Concepts Demonstrated

### 1. **Full-Stack Development**
- **Frontend**: HTML, CSS, JavaScript (client-side)
- **Backend**: Node.js, Express (server-side)
- **Database**: PostgreSQL (data persistence)

### 2. **MVC Pattern (Model-View-Controller)**
- **Model**: Database schemas, data structures
- **View**: HTML templates, CSS styling
- **Controller**: JavaScript functions, Express routes

### 3. **RESTful API Design**
```javascript
GET    /api/tickets          // Retrieve all tickets
POST   /api/tickets          // Create new ticket
PUT    /api/tickets/:id      // Update ticket
DELETE /api/tickets/:id      // Delete ticket
```

### 4. **Authentication & Authorization**
- **Authentication**: Verifying who the user is (login)
- **Authorization**: Determining what user can do (permissions)
- **JWT Tokens**: Secure session management
- **Password Hashing**: bcrypt for secure storage

### 5. **Asynchronous Programming**
```javascript
// Using async/await
async function fetchUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        renderUsers(users);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### 6. **DOM Manipulation**
```javascript
// Creating elements dynamically
const button = document.createElement('button');
button.textContent = 'Click Me';
button.addEventListener('click', handleClick);
document.body.appendChild(button);
```

### 7. **State Management**
```javascript
// Application state
let selectedQueue = null;
let tickets = [];
let currentUser = localStorage.getItem('currentUser');

// State updates trigger UI changes
function selectQueue(queueId) {
    selectedQueue = queueId;
    updateTickets(); // Re-renders UI
}
```

### 8. **Security Best Practices**
- SQL injection prevention (parameterized queries)
- XSS prevention (input sanitization)
- CSRF protection
- Password requirements
- Role-based access control
- Secure session management

### 9. **Database Relationships**
```
users (1) ←→ (many) tickets
tickets (1) ←→ (many) comments
tickets (1) ←→ (many) time_entries
queues (1) ←→ (many) tickets
```

### 10. **Responsive Design**
```css
/* Mobile-first approach */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { width: 970px; }
}
```

---

## Project File Structure

```
SECO_TICKET_SYSTEM/
├── server.js                    # Main Express server
├── app.js                       # Application configuration
├── package.json                 # Dependencies and scripts
│
├── config/
│   └── database.js              # PostgreSQL connection
│
├── database/
│   ├── schema.sql               # Database structure
│   └── migrations/              # Database updates
│
├── middleware/
│   └── auth.js                  # Authentication middleware
│
├── routes/
│   ├── auth.js                  # Login/logout routes
│   ├── users.js                 # User management routes
│   ├── tickets.js               # Ticket CRUD routes
│   └── queues.js                # Queue configuration routes
│
├── public/
│   ├── css/
│   │   └── styles.css           # All styling (3,567 lines)
│   │
│   ├── js/
│   │   └── app.js               # All frontend logic (5,048 lines)
│   │
│   └── views/
│       ├── home.html            # Main dashboard
│       ├── index.html           # Customer login
│       ├── tech-login.html      # Staff login
│       ├── reports.html         # Analytics
│       │
│       ├── admin/
│       │   ├── admin.html       # Admin dashboard
│       │   ├── admin-users.html # User management
│       │   └── admin-system.html # System settings
│       │
│       └── customer/
│           ├── customer-it.html
│           ├── customer-buildings.html
│           └── ... (other forms)
│
└── Documentation/
    ├── ARCHITECTURE_PLAN.md     # System design
    ├── DEPLOYMENT.md            # Azure setup guide
    ├── SECURITY.md              # Security measures
    └── PROJECT_DOCUMENTATION.md # This file
```

---

## Data Flow Examples

### Example 1: Creating a New User

**1. Frontend (HTML Form):**
```html
<input id="first-name" type="text" />
<input id="last-name" type="text" />
<button onclick="createUser()">Create User</button>
```

**2. JavaScript (Auto-generation):**
```javascript
function createUser() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    
    const username = `${firstName}.${lastName}`.toLowerCase();
    const email = `${username}@secoenergy.com`;
    
    const userData = {
        username: username,
        fullName: `${firstName} ${lastName}`,
        email: email,
        password: 'password123',
        active: true,
        requirePasswordChange: true
    };
    
    fetch('/api/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
}
```

**3. Backend Route (Express):**
```javascript
router.post('/create', async (req, res) => {
    const { username, fullName, email, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert into database
    const result = await pool.query(
        'INSERT INTO users (username, password_hash, full_name, email) VALUES ($1, $2, $3, $4)',
        [username, hashedPassword, fullName, email]
    );
    
    res.json({ success: true });
});
```

**4. Database (PostgreSQL):**
```sql
-- New row inserted into users table
INSERT INTO users (username, password_hash, full_name, email)
VALUES ('john.smith', '$2b$10$...', 'John Smith', 'john.smith@secoenergy.com');
```

### Example 2: Queue-Based Filtering

**Scenario:** IT technician logs in and should only see IT queues

**1. Login Response:**
```javascript
{
    username: "john.smith",
    role: "tech",
    permissions: {
        queues: ["it", "it-support", "it-applications"],
        canCreateTickets: true,
        canEditTickets: true
    }
}
```

**2. Store in Browser:**
```javascript
localStorage.setItem('currentUser', 'john.smith');
localStorage.setItem('currentUserPermissions', JSON.stringify(permissions));
```

**3. Filter Queues:**
```javascript
function renderQueueButtons() {
    const allQueues = getActiveQueues(); // All system queues
    const userQueues = getAccessibleQueues(); // User's queues only
    
    // Only renders: IT, IT Support, IT Applications
    // Does NOT render: Buildings & Grounds, Electrical, etc.
}
```

**4. Filter Tickets:**
```javascript
function updateTickets() {
    const filtered = tickets.filter(ticket => {
        // Security check
        if (!hasQueueAccess(ticket.queue)) {
            return false; // Hide ticket
        }
        // ... other filters
    });
}
```

---

## Performance Optimizations

### 1. **Database Indexing**
```sql
CREATE INDEX idx_tickets_queue ON tickets(queue);
CREATE INDEX idx_tickets_status ON tickets(status);
```
Makes searches faster

### 2. **Connection Pooling**
Reuses database connections instead of creating new ones

### 3. **Client-Side Caching**
```javascript
localStorage.setItem('users', JSON.stringify(users));
// Reduces API calls
```

### 4. **Lazy Loading**
Only loads data when needed

### 5. **Minification**
Compresses CSS/JavaScript for faster downloads (production)

---

## Security Measures

### 1. **Password Security**
- bcrypt hashing (10 rounds)
- Password strength requirements
- Force password change on first login

### 2. **SQL Injection Prevention**
```javascript
// BAD (vulnerable):
pool.query(`SELECT * FROM users WHERE username = '${username}'`);

// GOOD (safe):
pool.query('SELECT * FROM users WHERE username = $1', [username]);
```

### 3. **Authentication**
- JWT tokens with expiration
- Middleware checks on protected routes
- Session management

### 4. **Authorization**
- Role-based access (admin, tech, customer)
- Queue-based permissions
- Function-level permissions

### 5. **HTTPS**
- All traffic encrypted
- Azure provides SSL certificate

---

## How to Explain Your Work

### **To Non-Technical People:**

"I built a web-based ticketing system that helps organizations manage service requests. Users can submit tickets for IT support, building maintenance, or other services. The system routes tickets to the right teams and tracks everything from submission to resolution. It's like a digital help desk that runs 24/7 in the cloud."

### **To Technical Interviewers:**

"This is a full-stack JavaScript application using Node.js and Express on the backend with PostgreSQL for data persistence. The frontend is vanilla JavaScript with a responsive CSS design. I implemented role-based access control with queue-specific permissions, automated time tracking, and comprehensive reporting. The application uses RESTful API architecture and is deployed on Azure App Service with continuous integration via Git."

### **Key Technical Talking Points:**

1. **"I implemented secure authentication using JWT tokens and bcrypt password hashing"**
   - Shows security awareness

2. **"I designed a flexible permission system using JSONB in PostgreSQL"**
   - Shows database knowledge and architecture decisions

3. **"I built a responsive UI without frameworks to understand core DOM manipulation"**
   - Shows fundamental JavaScript skills

4. **"I used async/await for database operations to handle asynchronous code"**
   - Shows modern JavaScript knowledge

5. **"I deployed to Azure using environment variables for configuration management"**
   - Shows DevOps awareness

6. **"I implemented queue-based access control where users only see data they're authorized to access"**
   - Shows security and business logic understanding

---

## What Each Technology Means

### **HTML (Structure)**
Think of it as the skeleton of a building - defines what rooms exist

### **CSS (Presentation)**
The paint, furniture, decoration - makes it look good

### **JavaScript (Behavior)**
The electrical system, plumbing - makes things work

### **Node.js (Runtime)**
The foundation that lets JavaScript run on servers

### **Express (Framework)**
Pre-built tools that make building servers faster

### **PostgreSQL (Database)**
Filing cabinet that stores all your data

### **Azure (Cloud Platform)**
The building where your application lives

---

## Next Steps for Learning

1. **Understand the request-response cycle**
2. **Learn how databases store and retrieve data**
3. **Study how authentication keeps systems secure**
4. **Practice explaining data flow between components**
5. **Explore how cloud hosting works**

This project demonstrates real-world application development using industry-standard tools and best practices.
