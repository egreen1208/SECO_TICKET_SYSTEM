# Dynamic Queue Configuration System

## Overview
The SECO Ticket System now features a fully dynamic queue configuration system that allows administrators to create, edit, and manage ticket queues without modifying code.

## Features

### Queue Manager
Access the Queue Manager from the Admin panel to:
- Create new ticket queues
- Edit existing queue properties (name, description, color, icon)
- Configure categories and subcategories for each queue
- Set parent-child relationships (main queues and sub-queues)
- Enable/disable queues
- Delete queues (with safety checks)

### Queue Properties
Each queue can be configured with:
- **ID**: Unique identifier (lowercase, hyphens only)
- **Name**: Display name shown to users
- **Description**: Brief explanation of the queue's purpose
- **Icon**: Emoji or symbol (e.g., 💻, 🏢, ⚡)
- **Color**: Hex color code for visual distinction
- **Parent Queue**: Optional parent for creating sub-queues
- **Display Order**: Numeric order for sorting
- **Categories**: Custom categories with subcategories
- **Active Status**: Enable or disable the queue

### Categories & Subcategories
For each queue, you can define:
- Multiple categories (e.g., "Hardware", "Software", "Network")
- Subcategories under each category (e.g., "Desktop/Laptop", "Printer", "Mobile Device")
- These appear in ticket creation forms and help organize tickets

## How It Works

### Data Storage
Queue configurations are stored in `localStorage` under the key `queueConfiguration`. The system initializes with default queues on first load:
- Buildings & Grounds
- Electrical Services
- Move Requests
- RMA / Warehouse
- Information Technology (with 5 sub-queues)

### Dynamic Generation
The system dynamically generates:
1. **Queue buttons** on the main ticket page
2. **Queue dropdowns** in ticket creation/edit forms
3. **Queue access checkboxes** in the admin user management panel
4. **Category dropdowns** based on selected queue

### Permission Integration
The queue system integrates with user permissions:
- Users only see queues they have access to
- Queue family isolation prevents mixing different major queues
- Sub-queues inherit permissions from their parent queue

## Usage

### Creating a New Queue
1. Go to **Admin** → **Manage Queues & Categories**
2. Click **+ Add Queue**
3. Fill in the required fields:
   - Queue ID (cannot be changed later)
   - Queue Name
4. Optional: Configure description, icon, color, parent queue
5. Add categories and subcategories
6. Click **Save Queue**

### Editing an Existing Queue
1. In the Queue Manager, find the queue card
2. Click **Edit**
3. Modify properties (ID cannot be changed)
4. Update categories as needed
5. Click **Save Queue**

### Creating Sub-Queues
1. Create or edit a queue
2. In the **Parent Queue** dropdown, select the main queue
3. Save the queue
4. Sub-queues appear indented under their parent

### Disabling/Enabling Queues
- Click **Disable** on a queue card to hide it from users
- Disabled queues remain in the system but don't appear in menus
- Click **Enable** to make the queue active again

### Deleting Queues
1. Click **Delete** on a queue card
2. Confirm the deletion
3. **Warning**: Cannot delete queues with sub-queues
4. **Warning**: Deleting queues with tickets will make those tickets inaccessible

## Safety Features

### Deletion Protection
- Cannot delete queues that have sub-queues (must delete children first)
- Warning shown if queue has tickets
- Confirmation required before deletion

### ID Validation
- Queue IDs must be lowercase letters, numbers, and hyphens only
- IDs cannot be changed after creation (prevents breaking ticket associations)

### Duplicate Prevention
- System checks for duplicate queue IDs before creating

## Migration from Hardcoded Queues

The system automatically migrates from hardcoded queues to dynamic configuration:
1. On first load, default queue configurations are saved to localStorage
2. Legacy code compatibility is maintained through `refreshCategoryOptions()`
3. Existing tickets continue to work with their assigned queues

## API Functions

### Get Queue Configuration
```javascript
getQueueConfig()          // Returns all queues
getActiveQueues()         // Returns only active queues
getQueueById(id)          // Returns specific queue by ID
```

### Save Queue Configuration
```javascript
saveQueueConfig(config)   // Saves queue array to localStorage
```

### Render Functions
```javascript
renderQueueButtons()           // Generates queue buttons on main page
renderAdminQueueCheckboxes()   // Generates checkboxes in admin panel
refreshCategoryOptions()       // Updates legacy compatibility object
```

## Future Enhancements

Planned improvements:
- Drag-and-drop queue ordering
- Queue templates for quick setup
- Import/export queue configurations
- Queue usage analytics
- Custom field definitions per queue (coming soon)
- Dynamic report builder based on queue structure

## Troubleshooting

### Queue buttons not appearing
- Check if queue is marked as **active**
- Verify user has permissions for that queue
- Clear browser cache and refresh

### Categories not showing in dropdown
- Ensure categories were saved properly in Queue Manager
- Check browser console for errors
- Verify queue configuration in localStorage

### Tickets not showing after queue deletion
- Deleted queues make their tickets inaccessible
- Restore queue with same ID to regain access
- Use queue disable instead of delete to preserve tickets

## Technical Details

### Data Structure
```javascript
{
  id: "it-support",
  name: "IT Support",
  description: "End-user support",
  color: "#17a2b8",
  icon: "🎧",
  active: true,
  parentQueue: "it",
  order: 1,
  categories: {
    "Account Access": ["Password Reset", "New Account", "Permissions Change"],
    "Hardware": ["Desktop/Laptop", "Printer/Scanner", "Mobile Device"]
  }
}
```

### Files Modified
- `app.js`: Queue configuration functions, dynamic rendering
- `home.html`: Dynamic queue button container
- `admin.html`: Queue Manager link, dynamic checkboxes
- `queue-manager.html`: Queue management UI
- `queue-manager.js`: Queue CRUD operations
