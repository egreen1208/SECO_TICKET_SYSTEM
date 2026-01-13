# Testing Customer User Role System

This document describes how to test the newly implemented customer user role system.

## Database Setup

1. Run the database schema to create tables and default users:
   ```bash
   psql -U your_username -d your_database -f database/schema.sql
   ```

## Test Accounts

The system now includes three default user accounts:

| Username | Password     | Role        | Access                       |
|----------|--------------|-------------|------------------------------|
| admin    | admin123     | admin       | Full access to tech portal   |
| tech     | tech123      | tech        | Limited access to tech portal|
| customer | customer123  | customer    | Access to customer portal only|

## Test Scenarios

### 1. Customer Login to Customer Portal (✓ Should Work)

1. Navigate to `index.html` (customer login page)
2. Login with: `customer` / `customer123`
3. **Expected Result**: Successfully redirected to `landing.html`
4. **Verify**: Customer can access landing page and submit tickets
5. **Verify**: Logout redirects to `index.html` (customer login)

### 2. Customer Attempts to Access Tech Portal (✗ Should Fail)

1. Navigate to `tech-login.html` (staff portal login page)
2. Login with: `customer` / `customer123`
3. **Expected Result**: Error message "Customer accounts cannot access the staff portal"
4. **Alternative Test**: If customer somehow gets to `home.html` directly, they should be redirected to `index.html` with an alert

### 3. Admin/Tech Login to Tech Portal (✓ Should Work)

1. Navigate to `tech-login.html`
2. Login with: `admin` / `admin123` OR `tech` / `tech123`
3. **Expected Result**: Successfully redirected to `home.html` (tech portal)
4. **Verify**: Admin/Tech can access all tech portal features

### 4. Admin/Tech Attempts to Login to Customer Portal (✗ Should Fail)

1. Navigate to `index.html` (customer login page)
2. Login with: `admin` / `admin123` OR `tech` / `tech123`
3. **Expected Result**: Error message "This portal is for customers only. Staff should use the staff portal."

### 5. Admin Creates Customer Account

1. Login as admin to tech portal
2. Navigate to Admin > User Management
3. Click "Add New User"
4. Fill in details and select **Role: Customer**
5. **Expected Result**: Customer account created successfully
6. **Verify**: New customer can login to customer portal
7. **Verify**: New customer cannot access tech portal

### 6. Role-Based Access Control

**Backend API Tests:**

1. **GET /api/users** - Should be blocked for customers
   - Login as customer and try to access
   - **Expected**: 403 Forbidden

2. **POST /api/users/create** - Should be admin only
   - Try as tech or customer
   - **Expected**: 403 Forbidden

3. **POST /api/auth/login** - Should return proper role
   - **Expected**: Response includes `role` field with correct value

## Implementation Details

### Database Changes
- `users` table already had `role` field
- Added default users for admin, tech, and customer roles
- Role values are case-insensitive (stored as lowercase: 'admin', 'tech', 'customer')

### Backend Changes
- `middleware/auth.js`: Added `requireTechOrAdmin()` and `blockCustomer()` middleware
- `routes/users.js`: Protected routes with `blockCustomer` middleware
- `routes/users.js`: Validates role on user creation (admin, tech, or customer only)

### Frontend Changes
- `admin-users.html`: Added "Customer" option to role dropdown
- `index.html`: Checks user role is "customer" before allowing access
- `tech-login.html`: Blocks customer role from logging in
- `app.js`: Checks user role and blocks customers from tech portal
- `landing.html`: Logout redirects to customer login (`index.html`)

## Troubleshooting

### Customer can access tech portal
- Check that `app.js` has the role check at the top
- Verify localStorage `currentUserRole` is set correctly
- Clear browser localStorage and try again

### Admin/Tech cannot create customer accounts
- Verify `admin-users.html` has the "customer" option in role dropdown
- Check backend validation in `routes/users.js`

### Login redirects not working
- Clear browser localStorage
- Check browser console for JavaScript errors
- Verify role values are lowercase in database

## Security Notes

1. Customer users are blocked from:
   - Accessing technician portal pages (`home.html`, `admin.html`, etc.)
   - Accessing tech portal APIs (`/api/users`, `/api/tickets`, etc.)

2. Customers can only:
   - Access landing page for ticket submission
   - View their own submitted tickets (future enhancement)

3. All role checks are case-insensitive to prevent bypass attempts
