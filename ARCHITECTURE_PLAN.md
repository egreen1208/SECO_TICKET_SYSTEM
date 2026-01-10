# SECO Energy Service Portal - Architecture Plan
## Dynamic Configuration & Permissions System

### Current Implementation ✅
**Queue Isolation**: Queue dropdowns now filter to show only the relevant queue family (IT queues stay separate from Buildings & Grounds, etc.)

---

## Planned Architecture for Full Customization

### 1. **Permissions & Access Control System**

#### User Roles & Permissions
```javascript
// Data structure stored in localStorage or backend
{
  users: [
    {
      id: 1,
      username: "tech1",
      name: "Peter Uhl",
      role: "technician",
      permissions: {
        queues: ["it-support", "it-applications"],  // Queue-level access
        canCreateTickets: true,
        canEditTickets: true,
        canDeleteTickets: false,
        canViewReports: true,
        canExportData: false,
        canManageUsers: false,
        canManageQueues: false,
        canCustomizeLayouts: false
      }
    },
    {
      id: 2,
      username: "admin1",
      name: "Kim Clemmer",
      role: "admin",
      permissions: {
        queues: ["*"],  // All queues
        canCreateTickets: true,
        canEditTickets: true,
        canDeleteTickets: true,
        canViewReports: true,
        canExportData: true,
        canManageUsers: true,
        canManageQueues: true,
        canCustomizeLayouts: true
      }
    }
  ]
}
```

#### Implementation Steps
1. Expand user object with granular permissions
2. Filter queue buttons based on user's assigned queues
3. Hide/show UI elements based on permissions
4. Add permission checks before all actions
5. Create Admin UI for assigning user permissions

---

### 2. **Dynamic Queue Configuration**

#### Queue Configuration Data Structure
```javascript
{
  queues: [
    {
      id: "buildings-grounds",
      name: "Buildings & Grounds",
      description: "Facilities and maintenance requests",
      color: "#28a745",
      icon: "🏢",
      active: true,
      parentQueue: null,
      categories: {
        "Facilities": ["Lighting", "HVAC", "Plumbing", "Carpentry"],
        "Grounds": ["Landscaping", "Parking", "Signage"],
        "Security": ["Access Control", "Cameras", "Locks"]
      },
      customFields: [
        { name: "buildingNumber", label: "Building #", type: "text", required: false },
        { name: "floorLevel", label: "Floor", type: "number", required: false }
      ],
      emailNotifications: ["facilities@seco.com"],
      slaHours: 48
    },
    {
      id: "it-support",
      name: "IT Support",
      description: "End-user IT support",
      color: "#007bff",
      icon: "💻",
      active: true,
      parentQueue: "it",
      categories: {
        "Hardware": ["Desktop", "Laptop", "Printer", "Phone"],
        "Software": ["Office Suite", "Email", "VPN", "Applications"],
        "User Management": ["Onboarding", "Offboarding", "Permissions", "Password Reset"]
      },
      customFields: [
        { name: "assetTag", label: "Asset Tag", type: "text", required: false },
        { name: "serialNumber", label: "Serial #", type: "text", required: false }
      ],
      emailNotifications: ["itsupport@seco.com"],
      slaHours: 24
    }
  ]
}
```

#### Admin UI Features
- **Queue Manager Page**
  - Add/Edit/Delete queues
  - Configure queue name, description, color, icon
  - Set parent/child relationships (main queue vs sub-queues)
  - Enable/disable queues without deleting
  - Reorder queue display priority
  
- **Category Manager**
  - Add/edit/delete categories per queue
  - Add/edit/delete subcategories
  - Drag-and-drop reordering
  
- **Custom Fields Builder**
  - Define additional fields per queue
  - Field types: text, number, date, dropdown, checkbox, textarea
  - Set required/optional
  - Default values

---

### 3. **Customizable Ticket Layouts**

#### Field Configuration
```javascript
{
  ticketLayouts: {
    "default": {
      sections: [
        {
          name: "Basic Information",
          fields: [
            { id: "title", label: "Title", type: "text", required: true, visible: true, order: 1 },
            { id: "description", label: "Description", type: "textarea", required: true, visible: true, order: 2 },
            { id: "priority", label: "Priority", type: "select", options: ["Low","Medium","High","Critical"], required: true, visible: true, order: 3 }
          ]
        },
        {
          name: "Assignment & Tracking",
          fields: [
            { id: "queue", label: "Queue", type: "select", required: true, visible: true, order: 1 },
            { id: "assignedTo", label: "Assigned To", type: "select", required: false, visible: true, order: 2 },
            { id: "status", label: "Status", type: "select", options: ["open","assigned","in-progress","resolved","closed"], required: true, visible: true, order: 3 }
          ]
        },
        {
          name: "Requester Details",
          fields: [
            { id: "requesterName", label: "Requester Name", type: "text", required: false, visible: true, order: 1 },
            { id: "requesterEmail", label: "Email", type: "email", required: false, visible: true, order: 2 },
            { id: "location", label: "Location", type: "text", required: false, visible: true, order: 3 }
          ]
        }
      ]
    },
    "it-support": {
      // Extends default with IT-specific fields
      additionalFields: [
        { id: "assetTag", label: "Asset Tag", type: "text", required: false, visible: true },
        { id: "operatingSystem", label: "OS", type: "select", options: ["Windows 10","Windows 11","macOS","Linux"], required: false, visible: true }
      ]
    }
  }
}
```

#### Layout Customization UI
- Drag-and-drop field reordering
- Show/hide fields
- Change field labels
- Add custom validation rules
- Create queue-specific layouts that inherit from default
- Preview mode to see layout before saving

---

### 4. **Dynamic Reports Builder**

#### Report Configuration
```javascript
{
  reports: [
    {
      id: "tickets-by-queue",
      name: "Tickets by Queue",
      description: "Count of tickets per queue",
      type: "summary",
      permissions: ["admin", "manager"],
      filters: {
        dateRange: true,
        status: true,
        priority: true,
        queue: true
      },
      groupBy: "queue",
      metrics: ["count", "avgTimeToClose", "totalTime"],
      visualization: "bar-chart",
      exportFormats: ["csv", "pdf"]
    },
    {
      id: "technician-workload",
      name: "Technician Workload",
      description: "Active tickets per technician",
      type: "detailed",
      permissions: ["admin", "manager"],
      filters: {
        dateRange: true,
        queue: true,
        assignedTo: true
      },
      columns: ["id", "title", "queue", "assignedTo", "status", "priority", "createdDate", "totalTime"],
      sortBy: "assignedTo",
      visualization: "table",
      exportFormats: ["csv", "xlsx"]
    }
  ]
}
```

#### Report Builder Features
- **Visual Query Builder**
  - Select data source (tickets, users, time logs)
  - Choose filters (date range, queue, status, priority, etc.)
  - Group by fields
  - Aggregate functions (count, sum, avg, min, max)
  
- **Chart Options**
  - Bar charts, pie charts, line graphs
  - Tables with sorting/filtering
  - Pivot tables
  
- **Scheduled Reports**
  - Email delivery
  - Daily/weekly/monthly frequency
  - Custom recipient lists
  
- **Save & Share**
  - Save custom reports
  - Share with specific roles/users
  - Set as dashboard widgets

---

### 5. **Implementation Roadmap**

#### Phase 1: Data-Driven Configuration (Week 1-2)
- [ ] Create configuration schema for queues
- [ ] Move hardcoded queue data to config object
- [ ] Build queue configuration editor in Admin panel
- [ ] Implement category/subcategory CRUD operations
- [ ] Test queue creation and deletion

#### Phase 2: Permissions System (Week 3-4)
- [ ] Design permission structure
- [ ] Add permission fields to user objects
- [ ] Implement queue-level filtering based on user permissions
- [ ] Add UI controls for permission management
- [ ] Add permission checks to all actions
- [ ] Create role templates (Admin, Manager, Technician, Read-Only)

#### Phase 3: Custom Fields & Layouts (Week 5-6)
- [ ] Build custom field definition UI
- [ ] Implement dynamic form rendering based on layout config
- [ ] Add field validation engine
- [ ] Create layout preview mode
- [ ] Enable queue-specific layouts
- [ ] Update ticket storage to handle custom fields

#### Phase 4: Dynamic Reports (Week 7-8)
- [ ] Build report query builder UI
- [ ] Implement filter engine
- [ ] Add chart/visualization library
- [ ] Create report scheduling system
- [ ] Build report sharing and permissions
- [ ] Add export functionality (CSV, PDF, Excel)

#### Phase 5: Backend Integration (Week 9-10)
- [ ] Design REST API for configuration management
- [ ] Set up database schema
- [ ] Migrate from localStorage to backend
- [ ] Implement authentication & authorization middleware
- [ ] Add audit logging for all configuration changes
- [ ] Build backup and restore functionality

---

### 6. **Technical Considerations**

#### Storage Options
1. **Current**: localStorage (good for prototyping, limited to 5-10MB)
2. **Near-term**: IndexedDB (more storage, still client-side)
3. **Production**: Backend database (PostgreSQL/MongoDB)
   - User authentication via OAuth/SAML
   - RESTful API or GraphQL
   - Real-time updates via WebSockets

#### Security
- Role-based access control (RBAC)
- Field-level permissions
- Audit trail for all changes
- Data validation on client and server
- XSS/CSRF protection
- Encrypted sensitive data

#### Performance
- Lazy load queue configurations
- Cache user permissions
- Debounce configuration saves
- Optimize report queries with indexes
- Pagination for large datasets

---

### 7. **Migration Path**

#### Step 1: Extract Current Hardcoded Config
Move existing queue definitions to configuration object while maintaining backward compatibility.

#### Step 2: Build Admin Tools
Create UI for managing configurations without requiring code changes.

#### Step 3: User Testing
Deploy to small group of admins for feedback.

#### Step 4: Gradual Rollout
Enable features per queue/department incrementally.

#### Step 5: Full Migration
Move all queues to dynamic configuration.

---

### Next Steps

**Immediate** (This Sprint):
1. ✅ Queue dropdown now filters by family
2. Create basic queue configuration object
3. Build simple queue editor in Admin panel

**Short-term** (Next Sprint):
1. Implement user permission framework
2. Add queue-level access control
3. Create category management UI

**Would you like me to start implementing any specific part of this architecture?**
- User permissions system?
- Queue configuration editor?
- Custom fields builder?
- Report builder foundation?
