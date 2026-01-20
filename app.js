// -------------------------------
// SAMPLE TICKET DATA
// -------------------------------

const tickets = [
  {
    id: 1,
    title: "Fix broken light in hallway",
    description: "Light is out in hallway near break room. LED fixture appears to be faulty. Need to order replacement and schedule installation.",
    queue: "buildings-grounds",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Low",
    tags: ["facilities", "lighting"],
    requesterName: "Jane Doe",
    requesterEmail: "jane.doe@example.com",
    location: "HQ - 1st Floor Corridor",
    createdDate: "2026-01-01",
    updatedDate: "2026-01-01",
    dueDate: "",
    category: "Facilities",
    subcategory: "Lighting",
    internalNotes: "",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-01T09:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 2,
    title: "Server reboot needed",
    description: "Production server showing high memory usage. Reboot during maintenance window recommended.",
    queue: "it-systems",
    status: "in-progress",
    assigned: true,
    assignedTo: "Peter Uhl",
    priority: "High",
    tags: ["server", "maintenance"],
    requesterName: "Operations Team",
    requesterEmail: "ops@example.com",
    location: "Data Center A",
    createdDate: "2026-01-03",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-09",
    category: "Infrastructure",
    subcategory: "Server",
    internalNotes: "Coordinate with NOC before reboot.",
    attachments: "",
    images: [],
    comments: [
      {
        author: "Operations Team",
        timestamp: "2026-01-03T10:00:00",
        text: "Please schedule during Sunday maintenance window.",
        images: []
      }
    ],
    activity: [
      { timestamp: "2026-01-03T09:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T10:30:00", user: "System", action: "Status changed to in-progress" }
    ]
  },
  {
    id: 3,
    title: "New user onboarding",
    description: "Create accounts and grant access for new hire. Includes email setup, VPN, and application access.",
    queue: "it-support",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["onboarding", "accounts"],
    requesterName: "HR Department",
    requesterEmail: "hr@example.com",
    location: "HQ",
    createdDate: "2026-01-04",
    updatedDate: "2026-01-04",
    dueDate: "2026-01-08",
    category: "User Management",
    subcategory: "Onboarding",
    internalNotes: "",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-04T09:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 4,
    title: "Firewall rule update",
    description: "Allow outbound traffic to new vendor IP range for data sync.",
    queue: "it-security",
    status: "resolved",
    assigned: true,
    assignedTo: "Kim Clemmer",
    priority: "Critical",
    tags: ["firewall", "security"],
    requesterName: "Security Team",
    requesterEmail: "security@example.com",
    location: "Data Center B",
    createdDate: "2026-01-02",
    updatedDate: "2026-01-06",
    dueDate: "",
    category: "Security",
    subcategory: "Firewall",
    internalNotes: "Change approved by CISO.",
    attachments: "change-request-4921.pdf",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-02T09:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-06T11:00:00", user: "System", action: "Status changed to resolved" }
    ]
  },
  {
    id: 5,
    title: "Air conditioner leak in lobby",
    description: "Water leaking from AC unit in main lobby. Maintenance team has been notified.",
    queue: "building-grounds",
    status: "in-progress",
    assigned: true,
    assignedTo: "Robert Chen",
    priority: "High",
    tags: ["hvac", "leak"],
    requesterName: "Front Desk",
    requesterEmail: "frontdesk@example.com",
    location: "HQ Lobby",
    createdDate: "2026-01-05",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-08",
    category: "Facilities",
    subcategory: "HVAC",
    internalNotes: "Technician scheduled for today.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-05T09:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T08:00:00", user: "System", action: "Status changed to in-progress" }
    ]
  },
  {
    id: 6,
    title: "VPN access request for remote employee",
    description: "Enable VPN access for remote employee working from home office.",
    queue: "it-networking",
    status: "resolved",
    assigned: true,
    assignedTo: "Andrew Ayala",
    priority: "Medium",
    tags: ["vpn", "remote"],
    requesterName: "John Smith",
    requesterEmail: "john.smith@example.com",
    location: "Remote",
    createdDate: "2026-01-06",
    updatedDate: "2026-01-07",
    dueDate: "",
    category: "Networking",
    subcategory: "VPN",
    internalNotes: "Confirm MFA enrollment before granting access.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-06T09:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T10:00:00", user: "System", action: "Status changed to resolved" }
    ]
  },
  {
    id: 7,
    title: "Install design software for marketing",
    description: "Install licensed design software for marketing team. Need Adobe Creative Cloud licenses.",
    queue: "it-applications",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Low",
    tags: ["software", "installation"],
    requesterName: "Marketing Team",
    requesterEmail: "marketing@example.com",
    location: "HQ - 2nd Floor",
    createdDate: "2026-01-06",
    updatedDate: "2026-01-06",
    dueDate: "2026-01-20",
    category: "Applications",
    subcategory: "Desktop Software",
    internalNotes: "Awaiting license keys from vendor.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-06T09:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 8,
    title: "Printer jam on 2nd floor",
    description: "MFP-224 constantly jamming with multiple sheets. Feed mechanism needs inspection.",
    queue: "it-support",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["printer", "hardware"],
    requesterName: "Finance Team",
    requesterEmail: "finance@example.com",
    location: "HQ - 2nd Floor",
    createdDate: "2026-01-06",
    updatedDate: "2026-01-06",
    dueDate: "2026-01-09",
    category: "Hardware",
    subcategory: "Printer",
    internalNotes: "Check feed rollers and paper quality.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-06T11:20:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 9,
    title: "Email deliverability issue",
    description: "External clients not receiving marketing emails. Investigation needed for SPF/DKIM/DMARC records.",
    queue: "it-systems",
    status: "in-progress",
    assigned: true,
    assignedTo: "Peter Uhl",
    priority: "High",
    tags: ["email", "dns", "deliverability"],
    requesterName: "Marketing Team",
    requesterEmail: "marketing@example.com",
    location: "HQ",
    createdDate: "2026-01-06",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-08",
    category: "Infrastructure",
    subcategory: "Email",
    internalNotes: "Review recent DNS changes; check SendGrid logs.",
    attachments: "",
    images: [],
    comments: [
      {
        author: "Marketing Team",
        timestamp: "2026-01-06T14:05:00",
        text: "Bounce rate increased since Jan 5.",
        images: []
      }
    ],
    activity: [
      { timestamp: "2026-01-06T13:50:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T08:10:00", user: "System", action: "Status changed to in-progress" }
    ]
  },
  {
    id: 10,
    title: "Wi-Fi coverage weak in training room",
    description: "Intermittent signal drops and low throughput during sessions affecting online meetings.",
    queue: "it-networking",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["wifi", "network", "coverage"],
    requesterName: "L&D Team",
    requesterEmail: "learning@example.com",
    location: "HQ - Training Room A",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-14",
    category: "Networking",
    subcategory: "Wireless",
    internalNotes: "Survey AP placement; check channel overlap.",
    attachments: "floorplan-training-room.pdf",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T08:45:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 11,
    title: "Badge reader malfunction",
    description: "Main entrance badge reader intermittently denies valid badges causing access issues.",
    queue: "building-grounds",
    status: "in-progress",
    assigned: true,
    assignedTo: "Kim Clemmer",
    priority: "High",
    tags: ["security", "access-control"],
    requesterName: "Facilities",
    requesterEmail: "facilities@example.com",
    location: "HQ Main Entrance",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-08",
    category: "Security",
    subcategory: "Access Control",
    internalNotes: "Check power, cabling, controller logs.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T09:10:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T09:30:00", user: "System", action: "Status changed to in-progress" }
    ]
  },
  {
    id: 12,
    title: "Shared drive permissions for Projects2026",
    description: "Team cannot access new 'Projects2026' folder. Needs read/write for Marketing.",
    queue: "it-support",
    status: "resolved",
    assigned: false,
    assignedTo: "",
    priority: "Low",
    tags: ["permissions", "fileshare"],
    requesterName: "Marketing Team",
    requesterEmail: "marketing@example.com",
    location: "HQ",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "",
    category: "User Management",
    subcategory: "Permissions",
    internalNotes: "Confirm group membership and NTFS share ACL.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T09:40:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T10:15:00", user: "System", action: "Status changed to resolved" }
    ]
  },
  {
    id: 13,
    title: "Accounting app license renewal",
    description: "Renew 15 licenses before expiration on Jan 15. Critical for month-end close process.",
    queue: "it-applications",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["license", "software"],
    requesterName: "Accounting",
    requesterEmail: "accounting@example.com",
    location: "HQ - 3rd Floor",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-15",
    category: "Applications",
    subcategory: "License",
    internalNotes: "Check vendor portal; PO is pending approval.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T10:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 14,
    title: "Laptop battery replacement needed",
    description: "Battery drains from 100% to 20% within 30 minutes even with minimal usage.",
    queue: "it-support",
    status: "in-progress",
    assigned: true,
    assignedTo: "Andrew Ayala",
    priority: "Medium",
    tags: ["hardware", "battery"],
    requesterName: "John Smith",
    requesterEmail: "john.smith@example.com",
    location: "Remote",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-10",
    category: "Hardware",
    subcategory: "Laptop",
    internalNotes: "Check battery health via OEM tool; order replacement.",
    attachments: "",
    images: [],
    comments: [
      {
        author: "John Smith",
        timestamp: "2026-01-07T10:15:00",
        text: "Happens even with minimal usage.",
        images: []
      }
    ],
    activity: [
      { timestamp: "2026-01-07T10:10:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T10:30:00", user: "System", action: "Status changed to in-progress" }
    ]
  },
  {
    id: 15,
    title: "Monthly patch compliance verification",
    description: "Monthly patch cycle verification—20 endpoints pending security updates.",
    queue: "it-systems",
    status: "in-progress",
    assigned: true,
    assignedTo: "Peter Uhl",
    priority: "High",
    tags: ["patching", "compliance"],
    requesterName: "IT Operations",
    requesterEmail: "ops@example.com",
    location: "HQ & Remote",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-10",
    category: "Infrastructure",
    subcategory: "Patch Management",
    internalNotes: "Review WSUS/SCCM reports; follow up with non-compliant users.",
    attachments: "patch-report-Jan.csv",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T10:45:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 16,
    title: "New conference room setup",
    description: "Add display, conference phone, and room scheduler panel to Conference Room C.",
    queue: "electrical-services",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["av", "room-setup"],
    requesterName: "Facilities Projects",
    requesterEmail: "projects@example.com",
    location: "HQ - Conference Room C",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-17",
    category: "Facilities",
    subcategory: "AV",
    internalNotes: "Coordinate with vendors; verify power and network drops.",
    attachments: "roomC-specs.pdf",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T11:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 17,
    title: "2FA enrollment issue with QR code",
    description: "User unable to enroll in MFA—QR code scan fails on authenticator app.",
    queue: "it-security",
    status: "resolved",
    assigned: true,
    assignedTo: "Kim Clemmer",
    priority: "Medium",
    tags: ["mfa", "security"],
    requesterName: "Jane Doe",
    requesterEmail: "jane.doe@example.com",
    location: "HQ",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "",
    category: "Security",
    subcategory: "Identity",
    internalNotes: "Check time sync on device; confirm enrollment policy.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T11:20:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T11:50:00", user: "System", action: "Status changed to resolved" }
    ]
  },
  {
    id: 18,
    title: "SharePoint site request for Q1 Initiatives",
    description: "Create new site for 'Q1 Initiatives' with Marketing and Sales access and proper permissions.",
    queue: "it-applications",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Low",
    tags: ["sharepoint", "collaboration"],
    requesterName: "PMO",
    requesterEmail: "pmo@example.com",
    location: "HQ",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-14",
    category: "Applications",
    subcategory: "SharePoint",
    internalNotes: "Apply standard template; set owners and members groups.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T11:40:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 19,
    title: "Power outage incident report",
    description: "Brief outage affected building; verify UPS logs and server uptime. All systems recovered.",
    queue: "building-grounds",
    status: "closed",
    assigned: true,
    assignedTo: "Peter Uhl",
    priority: "High",
    tags: ["power", "incident"],
    requesterName: "Facilities",
    requesterEmail: "facilities@example.com",
    location: "HQ - Electrical Room",
    createdDate: "2026-01-06",
    updatedDate: "2026-01-07",
    dueDate: "",
    category: "Facilities",
    subcategory: "Electrical",
    internalNotes: "Event lasted ~3 minutes; UPS performed nominally.",
    attachments: "ups-log-0106.txt",
    images: [],
    comments: [
      {
        author: "Facilities",
        timestamp: "2026-01-07T07:55:00",
        text: "No safety incidents reported.",
        images: []
      }
    ],
    activity: [
      { timestamp: "2026-01-06T17:15:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T08:20:00", user: "System", action: "Status changed to closed" }
    ]
  },
  {
    id: 20,
    title: "Database backup verification",
    description: "Verify that all database backups completed successfully. Last backup showed 95% completion.",
    queue: "it-systems",
    status: "resolved",
    assigned: true,
    assignedTo: "Peter Uhl",
    priority: "High",
    tags: ["backup", "database"],
    requesterName: "IT Operations",
    requesterEmail: "ops@example.com",
    location: "Data Center A",
    createdDate: "2026-01-05",
    updatedDate: "2026-01-07",
    dueDate: "",
    category: "Infrastructure",
    subcategory: "Backup",
    internalNotes: "All backups verified and stored to cold storage.",
    attachments: "backup-log-0107.txt",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-05T09:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T14:30:00", user: "System", action: "Status changed to resolved" }
    ]
  },
  {
    id: 21,
    title: "Mobile device management policy update",
    description: "Update MDM policies for iOS and Android devices. Add new security requirements for BYOD.",
    queue: "it-security",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["mdm", "security", "mobile"],
    requesterName: "CISO Office",
    requesterEmail: "ciso@example.com",
    location: "HQ",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-21",
    category: "Security",
    subcategory: "Mobile",
    internalNotes: "Coordinate with legal for compliance.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T13:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 22,
    title: "Backup generator maintenance",
    description: "Schedule quarterly maintenance for backup generator. Last serviced 3 months ago.",
    queue: "building-grounds",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Medium",
    tags: ["generator", "maintenance"],
    requesterName: "Facilities",
    requesterEmail: "facilities@example.com",
    location: "HQ - Mechanical Room",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-17",
    category: "Facilities",
    subcategory: "Electrical",
    internalNotes: "Contact vendor for scheduling.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T13:30:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 23,
    title: "CRM database optimization",
    description: "CRM system experiencing slow query performance. Database indexes need optimization.",
    queue: "it-applications",
    status: "in-progress",
    assigned: true,
    assignedTo: "Andrew Ayala",
    priority: "High",
    tags: ["database", "performance", "crm"],
    requesterName: "Sales Operations",
    requesterEmail: "salesops@example.com",
    location: "HQ",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-09",
    category: "Applications",
    subcategory: "CRM",
    internalNotes: "Run query analysis and rebuild indexes.",
    attachments: "query-report.sql",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T14:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T14:15:00", user: "System", action: "Status changed to in-progress" }
    ]
  },
  {
    id: 24,
    title: "Office temperature control issues",
    description: "Third floor reporting temperature fluctuations. Thermostat calibration needed.",
    queue: "building-grounds",
    status: "open",
    assigned: false,
    assignedTo: "",
    priority: "Low",
    tags: ["hvac", "climate-control"],
    requesterName: "Office Manager",
    requesterEmail: "admin@example.com",
    location: "HQ - 3rd Floor",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-12",
    category: "Facilities",
    subcategory: "HVAC",
    internalNotes: "Check HVAC control system settings.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T14:45:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 25,
    title: "Microsoft Teams call quality improvement",
    description: "Users reporting poor audio quality during Teams meetings. Network analysis needed.",
    queue: "it-networking",
    status: "in-progress",
    assigned: true,
    assignedTo: "Kim Clemmer",
    priority: "Medium",
    tags: ["teams", "voip", "network"],
    requesterName: "Communications",
    requesterEmail: "comms@example.com",
    location: "HQ",
    createdDate: "2026-01-07",
    updatedDate: "2026-01-07",
    dueDate: "2026-01-10",
    category: "Networking",
    subcategory: "VoIP",
    internalNotes: "Check QoS settings and bandwidth allocation.",
    attachments: "network-stats.csv",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-07T15:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-07T15:20:00", user: "System", action: "Status changed to in-progress" }
    ]
  }
];

// Priority ranking for sorting
const priorityRank = {
    "Low": 1,
    "Medium": 2,
    "High": 3,
    "Critical": 4
};

// -------------------------------
// DYNAMIC QUEUE CONFIGURATION
// -------------------------------
const DEFAULT_QUEUE_CONFIG = [
    {
        id: "buildings-grounds",
        name: "Buildings & Grounds",
        description: "Facilities and maintenance requests",
        color: "#28a745",
        icon: "🏢",
        active: true,
        parentQueue: null,
        order: 1,
        categories: {
            "HVAC": ["Heating", "Cooling", "Ventilation", "Air Quality"],
            "Plumbing": ["Leak", "Clog/Drain", "Fixture", "Restroom"],
            "Carpentry": ["Doors/Frames", "Furniture", "Drywall", "Ceiling"],
            "Grounds": ["Landscaping", "Debris/Trash", "Pest Control", "Irrigation"],
            "Custodial": ["Spill/Cleanup", "Restocking", "Floor Care", "Disinfection"],
            "Access/Keys": ["Locks/Keys", "Badges", "Door Hardware"]
        },
        customFields: [
            {
                id: "building",
                label: "Building Name",
                type: "dropdown",
                required: true,
                options: ["Main Building", "Warehouse", "Office A", "Office B"],
                placeholder: "Select building"
            },
            {
                id: "room_number",
                label: "Room Number",
                type: "text",
                required: false,
                placeholder: "e.g., 201"
            }
        ]
    },
    {
        id: "electrical",
        name: "Electrical Services",
        description: "Electrical systems and power",
        color: "#ffc107",
        icon: "⚡",
        active: true,
        parentQueue: null,
        order: 2,
        categories: {
            "Power": ["Outage", "Brownout", "Circuit/Breaker", "Panel"],
            "Lighting": ["Interior Lighting", "Exterior Lighting", "Emergency Lighting", "Bulb/Ballast"],
            "Equipment": ["Generator", "UPS", "Surge/Power Quality", "Equipment Hookup"],
            "Safety": ["Egress/Exit Signs", "GFCI/AFCI", "Arc Flash", "Inspection"],
            "Meters/Monitoring": ["Meter Issue", "Monitoring/SCADA", "Load Study"]
        },
        customFields: []
    },
    {
        id: "moves",
        name: "Move Requests",
        description: "Office and equipment moves",
        color: "#6f42c1",
        icon: "📦",
        active: true,
        parentQueue: null,
        order: 3,
        categories: {
            "Office Move": ["Furniture/Desk", "IT Equipment", "Full Office", "Cubicle/Workstation"],
            "IT Relocation": ["Desktop/Laptop", "Phone", "Network Equipment", "User Permissions"],
            "Facilities Move": ["Furniture Only", "Equipment Only", "Storage/Archive"],
            "User Setup": ["Role Change", "Department Transfer", "Permissions Update"]
        },
        customFields: [
            {
                id: "move_from",
                label: "Move From Location",
                type: "text",
                required: true,
                placeholder: "Current location"
            },
            {
                id: "move_to",
                label: "Move To Location",
                type: "text",
                required: true,
                placeholder: "Destination location"
            },
            {
                id: "move_date",
                label: "Preferred Move Date",
                type: "date",
                required: false
            }
        ]
    },
    {
        id: "rma",
        name: "RMA / Warehouse",
        description: "Returns and inventory",
        color: "#fd7e14",
        icon: "📋",
        active: true,
        parentQueue: null,
        order: 4,
        categories: {
            "Return/Exchange": ["Defective Item", "Wrong Item", "Warranty Return", "Credit Return"],
            "Parts Request": ["Replacement Part", "Spare Part", "Consumables", "Emergency Stock"],
            "Inventory": ["Stock Check", "Reorder Request", "Asset Tag", "Equipment Checkout"],
            "Shipping": ["Incoming Shipment", "Outgoing Shipment", "Tracking Issue"]
        },
        customFields: []
    },
    {
        id: "it",
        name: "Information Technology",
        description: "IT services and support",
        color: "#007bff",
        icon: "💻",
        active: true,
        parentQueue: null,
        order: 5,
        categories: {
            "Account Access": ["Password Reset", "New Account", "Permissions Change", "MFA/SSO"],
            "Hardware": ["Desktop/Laptop", "Printer/Scanner", "Mobile Device", "Peripherals"],
            "Software": ["Install/Update", "Application Issue", "License/Access", "Productivity Suite"],
            "Network": ["Connectivity", "VPN", "Wi-Fi", "Firewall/Proxy"],
            "Phone/Telecom": ["VoIP Phone", "Extension/Forwarding", "Voicemail", "Conference"],
            "Security": ["Phishing/Malware", "Antivirus", "Security Incident", "Encryption"]
        },
        customFields: [
            {
                id: "asset_tag",
                label: "Asset Tag",
                type: "text",
                required: false,
                placeholder: "e.g., IT-12345"
            },
            {
                id: "urgent",
                label: "Business Critical",
                type: "checkbox",
                required: false
            }
        ]
    },
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
            "Account Access": ["Password Reset", "New Account", "Permissions Change", "MFA/SSO"],
            "Hardware": ["Desktop/Laptop", "Printer/Scanner", "Mobile Device", "Peripherals"],
            "Software": ["Install/Update", "Application Issue", "License/Access", "Productivity Suite"]
        },
        customFields: []
    },
    {
        id: "it-applications",
        name: "IT Applications",
        description: "Application support",
        color: "#6610f2",
        icon: "📱",
        active: true,
        parentQueue: "it",
        order: 2,
        categories: {
            "Software": ["Install/Update", "Application Issue", "License/Access", "Productivity Suite"],
            "Database": ["Access", "Query", "Performance", "Backup"],
            "Business Apps": ["CRM", "ERP", "Finance", "HR Systems"]
        },
        customFields: []
    },
    {
        id: "it-networking",
        name: "IT Networking",
        description: "Network infrastructure",
        color: "#20c997",
        icon: "🌐",
        active: true,
        parentQueue: "it",
        order: 3,
        categories: {
            "Network": ["Connectivity", "VPN", "Wi-Fi", "Firewall/Proxy"],
            "Infrastructure": ["Switch", "Router", "Cabling", "Rack/Cabinet"],
            "Phone/Telecom": ["VoIP Phone", "Extension/Forwarding", "Voicemail", "Conference"]
        },
        customFields: []
    },
    {
        id: "it-systems",
        name: "IT Systems",
        description: "Server and infrastructure",
        color: "#e83e8c",
        icon: "🖥️",
        active: true,
        parentQueue: "it",
        order: 4,
        categories: {
            "Server": ["Windows Server", "Linux", "VMware", "Hyper-V"],
            "Storage": ["SAN/NAS", "Backup", "Archive", "Capacity"],
            "Cloud": ["Azure", "AWS", "O365", "Migration"]
        },
        customFields: []
    },
    {
        id: "it-security",
        name: "IT Security",
        description: "Security and compliance",
        color: "#dc3545",
        icon: "🔒",
        active: true,
        parentQueue: "it",
        order: 5,
        categories: {
            "Security": ["Phishing/Malware", "Antivirus", "Security Incident", "Encryption"],
            "Access Control": ["MFA", "SSO", "Certificates", "VPN"],
            "Compliance": ["Audit", "Policy", "Training", "Risk Assessment"]
        },
        customFields: []
    }
];

// Initialize queue configuration from localStorage or defaults
function getQueueConfig() {
    const stored = localStorage.getItem("queueConfiguration");
    if (stored) {
        return JSON.parse(stored);
    }
    // First time: save defaults
    localStorage.setItem("queueConfiguration", JSON.stringify(DEFAULT_QUEUE_CONFIG));
    return DEFAULT_QUEUE_CONFIG;
}

function saveQueueConfig(config) {
    localStorage.setItem("queueConfiguration", JSON.stringify(config));
}

// Get active queues only
function getActiveQueues() {
    return getQueueConfig().filter(q => q.active);
}

// Get queue by ID
function getQueueById(id) {
    return getQueueConfig().find(q => q.id === id);
}

// Legacy compatibility: build old-style category map from new config
const queueCategoryOptions = {};
function refreshCategoryOptions() {
    const config = getQueueConfig();
    config.forEach(q => {
        const key = normalizeQueueKey(q.id);
        queueCategoryOptions[key] = { categories: q.categories };
    });
}
refreshCategoryOptions();

// -------------------------------
// STATE VARIABLES & DOM HOOKS
// -------------------------------
let selectedQueue = null;
let selectedFilter = "open";
let selectedPriorityFilter = "all";
let viewMode = "cards";
let editingTicketId = null;
let currentUser = localStorage.getItem("currentUser") || "System";
let currentUserRole = localStorage.getItem("currentUserRole") || "tech";
let currentUserPermissions = JSON.parse(localStorage.getItem("currentUserPermissions") || "{}");

// Permission helper functions
function hasQueueAccess(queueId) {
    if (!currentUserPermissions.queues) return true; // No restrictions if not set
    if (currentUserPermissions.queues.includes("*")) return true; // Admin has all access
    
    // Normalize queue for comparison
    const normalized = normalizeQueueKey(queueId);
    
    // Check if user has access to this queue or its parent
    return currentUserPermissions.queues.some(q => {
        const normalizedQ = normalizeQueueKey(q);
        // Exact match or user has parent queue access
        return normalizedQ === normalized || 
               (normalized === "it" && q.startsWith("it")) ||
               (queueId.startsWith("it-") && normalizedQ === "it");
    });
}

function hasPermission(permission) {
    if (currentUserRole === "admin") return true; // Admins have all permissions
    return currentUserPermissions[permission] === true;
}

function getAccessibleQueues() {
    if (!currentUserPermissions.queues || currentUserPermissions.queues.includes("*")) {
        return ["buildings-grounds", "electrical", "it", "it-support", "it-applications", "it-networking", "it-systems", "it-security", "moves", "rma"];
    }
    
    // Return user's assigned queues plus any sub-queues
    const queues = [...currentUserPermissions.queues];
    if (queues.includes("it")) {
        queues.push("it-support", "it-applications", "it-networking", "it-systems", "it-security");
    }
    return queues;
}

const currentUserDisplay = document.getElementById("current-user-display");
if (currentUserDisplay) {
    currentUserDisplay.textContent = currentUser;
}

// DOM references
const ticketList = document.getElementById("ticket-list");
const ticketHeader = document.getElementById("ticket-header");
const searchInput = document.getElementById("ticket-search");
const sortSelect = document.getElementById("ticket-sort");

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const viewToggle = document.getElementById("view-toggle");
const currentUserSelect = document.getElementById("current-user-select");

const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });
}

// New/Edit ticket modal
const newTicketBtn = document.getElementById("new-ticket-btn");
const newTicketModal = document.getElementById("new-ticket-modal");
const newTicketClose = document.getElementById("new-ticket-close");
const newTicketCancel = document.getElementById("new-ticket-cancel");
const newTicketForm = document.getElementById("new-ticket-form");
const newTicketError = document.getElementById("new-ticket-error");
const newTicketTitle = document.getElementById("new-ticket-title");
const newTicketSubmit = document.getElementById("new-ticket-submit");

// Form fields
const newTitle = document.getElementById("new-title");
const newDescription = document.getElementById("new-description");
const newQueue = document.getElementById("new-queue");
const newPriority = document.getElementById("new-priority");
const newStatus = document.getElementById("new-status");
const newAssignedTo = document.getElementById("new-assigned-to");
const newRequesterName = document.getElementById("new-requester-name");
const newRequesterEmail = document.getElementById("new-requester-email");
const newLocation = document.getElementById("new-location");
const newDueDate = document.getElementById("new-due-date");
const newCategory = document.getElementById("new-category");
const newSubcategory = document.getElementById("new-subcategory");
const newAttachments = document.getElementById("new-attachments");
const newTimeHours = document.getElementById("new-time-hours");
const newTimeMinutes = document.getElementById("new-time-minutes");

// Toast
const toast = document.getElementById("toast");

// Ticket detail modal
const modal = document.getElementById("ticket-modal");
const modalClose = document.getElementById("modal-close");
const modalEditBtn = document.getElementById("modal-edit-btn");
const modalStatusSelect = document.getElementById("modal-status-select");
const modalStatusSave = document.getElementById("modal-status-save");
const modalAssignSelect = document.getElementById("modal-assign-select");
const modalAssignSave = document.getElementById("modal-assign-save");
const modalQueueSelect = document.getElementById("modal-queue-select");
const modalQueueSave = document.getElementById("modal-queue-save");
const modalDeleteBtn = document.getElementById("modal-delete-btn");
const modalTime = document.getElementById("modal-time");
const modalTimerStart = document.getElementById("modal-timer-start");
const modalTimerStop = document.getElementById("modal-timer-stop");

// Comments & Activity DOM
const modalCommentsList = document.getElementById("modal-comments-list");
const modalCommentText = document.getElementById("modal-comment-text");
const modalCommentAdd = document.getElementById("modal-comment-add");
const modalActivityList = document.getElementById("modal-activity-list");
const modalCommentHours = document.getElementById("modal-comment-hours");
const modalCommentMinutes = document.getElementById("modal-comment-minutes");

// -------------------------------
// CATEGORY HELPERS
// -------------------------------
function normalizeQueueKey(q) {
    if (!q) return "";
    if (q === "it" || q.startsWith("it-")) return "it";
    if (q === "building-grounds" || q === "buildings-grounds") return "buildings-grounds";
    if (q === "electrical-services" || q === "electrical") return "electrical";
    return q;
}

function getQueueFamilyOptions(currentQueue) {
    const allQueues = getActiveQueues();
    const accessibleQueues = getAccessibleQueues();
    
    // Determine the queue family
    let familyRoot = currentQueue;
    const currentQueueObj = getQueueById(currentQueue);
    
    if (currentQueueObj && currentQueueObj.parentQueue) {
        familyRoot = currentQueueObj.parentQueue;
    }
    
    // Get all queues in this family (parent + children)
    const familyQueues = allQueues.filter(q => {
        return (q.id === familyRoot || q.parentQueue === familyRoot) && 
               accessibleQueues.includes(q.id);
    }).sort((a, b) => {
        // Sort: main queue first, then sub-queues by order
        if (!a.parentQueue && b.parentQueue) return -1;
        if (a.parentQueue && !b.parentQueue) return 1;
        return a.order - b.order;
    });
    
    return familyQueues.map(q => ({
        value: q.id,
        label: q.name
    }));
}

function populateQueueDropdown(currentQueue) {
    if (!newQueue) return;
    const options = getQueueFamilyOptions(currentQueue);
    newQueue.innerHTML = '<option value="">Select queue...</option>';
    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        newQueue.appendChild(option);
    });
}

function getQueueCategories(queue) {
    const key = normalizeQueueKey(queue);
    return queueCategoryOptions[key] || null;
}

function populateCategorySelect(queue, categorySelect, subcategorySelect, presetCategory = "", presetSubcategory = "") {
    if (!categorySelect) return;
    const cfg = getQueueCategories(queue);
    categorySelect.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select category...";
    categorySelect.appendChild(placeholder);

    if (cfg && cfg.categories) {
        Object.keys(cfg.categories).forEach(cat => {
            const opt = document.createElement("option");
            opt.value = cat;
            opt.textContent = cat;
            categorySelect.appendChild(opt);
        });
    }

    categorySelect.value = presetCategory || "";
    populateSubcategorySelect(queue, categorySelect.value, subcategorySelect, presetSubcategory);
}

function populateSubcategorySelect(queue, categoryValue, subcategorySelect, presetSubcategory = "") {
    if (!subcategorySelect) return;
    const cfg = getQueueCategories(queue);
    subcategorySelect.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select subcategory...";
    subcategorySelect.appendChild(placeholder);

    if (cfg && cfg.categories && categoryValue && cfg.categories[categoryValue]) {
        cfg.categories[categoryValue].forEach(sub => {
            const opt = document.createElement("option");
            opt.value = sub;
            opt.textContent = sub;
            subcategorySelect.appendChild(opt);
        });
    }

    subcategorySelect.value = presetSubcategory || "";
}

// -------------------------------
// CUSTOM FIELDS RENDERING
// -------------------------------
function renderCustomFields(queueId, containerId, existingValues = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = "";
    
    const queue = getQueueById(queueId);
    if (!queue || !queue.customFields || queue.customFields.length === 0) {
        return; // No custom fields for this queue
    }
    
    queue.customFields.forEach(field => {
        const label = document.createElement("label");
        label.textContent = field.label + (field.required ? " *" : "");
        
        let input;
        const fieldValue = existingValues[field.id] || "";
        
        switch (field.type) {
            case "textarea":
                input = document.createElement("textarea");
                input.id = `custom-field-${field.id}`;
                input.className = "custom-field-input";
                input.dataset.fieldId = field.id;
                input.placeholder = field.placeholder || "";
                input.value = fieldValue;
                if (field.required) input.required = true;
                break;
                
            case "number":
                input = document.createElement("input");
                input.type = "number";
                input.id = `custom-field-${field.id}`;
                input.className = "custom-field-input";
                input.dataset.fieldId = field.id;
                input.placeholder = field.placeholder || "";
                input.value = fieldValue;
                if (field.required) input.required = true;
                break;
                
            case "date":
                input = document.createElement("input");
                input.type = "date";
                input.id = `custom-field-${field.id}`;
                input.className = "custom-field-input";
                input.dataset.fieldId = field.id;
                input.value = fieldValue;
                if (field.required) input.required = true;
                break;
                
            case "checkbox":
                const checkboxWrapper = document.createElement("div");
                checkboxWrapper.style.display = "flex";
                checkboxWrapper.style.alignItems = "center";
                checkboxWrapper.style.gap = "8px";
                
                input = document.createElement("input");
                input.type = "checkbox";
                input.id = `custom-field-${field.id}`;
                input.className = "custom-field-input";
                input.dataset.fieldId = field.id;
                input.checked = fieldValue === true || fieldValue === "true";
                if (field.required) input.required = true;
                
                checkboxWrapper.appendChild(input);
                checkboxWrapper.appendChild(document.createTextNode(field.placeholder || ""));
                label.appendChild(checkboxWrapper);
                container.appendChild(label);
                return; // Early return for checkbox
                
            case "dropdown":
                input = document.createElement("select");
                input.id = `custom-field-${field.id}`;
                input.className = "custom-field-input";
                input.dataset.fieldId = field.id;
                if (field.required) input.required = true;
                
                const defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.textContent = field.placeholder || "Select...";
                input.appendChild(defaultOption);
                
                if (field.options) {
                    field.options.forEach(opt => {
                        const option = document.createElement("option");
                        option.value = opt;
                        option.textContent = opt;
                        if (opt === fieldValue) option.selected = true;
                        input.appendChild(option);
                    });
                }
                break;
                
            case "radio":
                const radioWrapper = document.createElement("div");
                radioWrapper.style.display = "flex";
                radioWrapper.style.flexDirection = "column";
                radioWrapper.style.gap = "6px";
                
                if (field.options) {
                    field.options.forEach((opt, idx) => {
                        const radioLabel = document.createElement("label");
                        radioLabel.style.display = "flex";
                        radioLabel.style.alignItems = "center";
                        radioLabel.style.gap = "6px";
                        
                        const radioInput = document.createElement("input");
                        radioInput.type = "radio";
                        radioInput.name = `custom-field-${field.id}`;
                        radioInput.id = `custom-field-${field.id}-${idx}`;
                        radioInput.className = "custom-field-input";
                        radioInput.dataset.fieldId = field.id;
                        radioInput.value = opt;
                        if (opt === fieldValue) radioInput.checked = true;
                        if (field.required) radioInput.required = true;
                        
                        radioLabel.appendChild(radioInput);
                        radioLabel.appendChild(document.createTextNode(opt));
                        radioWrapper.appendChild(radioLabel);
                    });
                }
                
                label.appendChild(radioWrapper);
                container.appendChild(label);
                return; // Early return for radio
                
            default: // text
                input = document.createElement("input");
                input.type = "text";
                input.id = `custom-field-${field.id}`;
                input.className = "custom-field-input";
                input.dataset.fieldId = field.id;
                input.placeholder = field.placeholder || "";
                input.value = fieldValue;
                if (field.required) input.required = true;
                break;
        }
        
        label.appendChild(input);
        container.appendChild(label);
    });
}

function collectCustomFieldValues(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return {};
    
    const values = {};
    const inputs = container.querySelectorAll(".custom-field-input");
    
    inputs.forEach(input => {
        const fieldId = input.dataset.fieldId;
        
        if (input.type === "checkbox") {
            values[fieldId] = input.checked;
        } else if (input.type === "radio") {
            if (input.checked) {
                values[fieldId] = input.value;
            }
        } else {
            values[fieldId] = input.value;
        }
    });
    
    return values;
}

function displayCustomFields(ticket) {
    const container = document.getElementById("modal-custom-fields");
    if (!container) return;
    
    container.innerHTML = "";
    
    const queue = getQueueById(ticket.queue);
    if (!queue || !queue.customFields || queue.customFields.length === 0) {
        return; // No custom fields for this queue
    }
    
    const customFieldValues = ticket.customFieldValues || {};
    const hasValues = Object.keys(customFieldValues).length > 0;
    
    if (!hasValues) return;
    
    // Create a section for custom fields
    const header = document.createElement("h4");
    header.style.marginBottom = "10px";
    header.style.color = "#333";
    header.style.fontSize = "14px";
    header.textContent = "Additional Information";
    container.appendChild(header);
    
    queue.customFields.forEach(field => {
        const value = customFieldValues[field.id];
        
        if (value === undefined || value === null || value === "") {
            return; // Skip empty values
        }
        
        const fieldDiv = document.createElement("div");
        fieldDiv.style.marginBottom = "8px";
        fieldDiv.style.fontSize = "13px";
        
        const label = document.createElement("strong");
        label.textContent = field.label + ": ";
        label.style.color = "#555";
        
        const valueSpan = document.createElement("span");
        
        // Format value based on field type
        if (field.type === "checkbox") {
            valueSpan.textContent = value === true || value === "true" ? "Yes" : "No";
        } else if (field.type === "date") {
            valueSpan.textContent = value ? new Date(value).toLocaleDateString() : "";
        } else {
            valueSpan.textContent = value;
        }
        
        fieldDiv.appendChild(label);
        fieldDiv.appendChild(valueSpan);
        container.appendChild(fieldDiv);
    });
}

// -------------------------------
// CURRENT USER SELECT
// -------------------------------
if (currentUserSelect) {
    currentUser = currentUserSelect.value;
    currentUserSelect.addEventListener("change", () => {
        currentUser = currentUserSelect.value;
        showToast(`Current user: ${currentUser}`);
    });
}

// -------------------------------
// RENDER QUEUE BUTTONS FROM CONFIGURATION
// -------------------------------
function renderQueueButtons() {
    const container = document.getElementById("queue-buttons-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    const queues = getActiveQueues();
    const accessibleQueues = getAccessibleQueues();
    
    // Separate main queues and sub-queues
    const mainQueues = queues.filter(q => !q.parentQueue).sort((a, b) => a.order - b.order);
    
    mainQueues.forEach(queue => {
        // Check if user has access to this queue or any of its sub-queues
        const hasAccess = hasQueueAccess(queue.id);
        const subQueues = queues.filter(sq => sq.parentQueue === queue.id && hasQueueAccess(sq.id))
                                .sort((a, b) => a.order - b.order);
        
        if (!hasAccess && subQueues.length === 0) {
            return; // Skip this queue entirely
        }
        
        const queueGroup = document.createElement("div");
        queueGroup.className = "queue-group";
        
        // Create main queue button if user has access
        if (hasAccess) {
            const mainBtn = document.createElement("button");
            mainBtn.className = "queue-btn";
            mainBtn.dataset.queue = queue.id;
            mainBtn.textContent = `${queue.icon || '📋'} ${queue.name}`;
            mainBtn.style.borderLeftColor = queue.color;
            mainBtn.addEventListener("click", () => {
                selectedQueue = queue.id;
                updateTickets();
            });
            queueGroup.appendChild(mainBtn);
        }
        
        // Create sub-queue buttons if there are any
        if (subQueues.length > 0) {
            const subGroup = document.createElement("div");
            subGroup.className = "queue-subgroup";
            subGroup.style.marginTop = "8px";
            subGroup.style.display = "flex";
            subGroup.style.flexWrap = "wrap";
            subGroup.style.gap = "8px";
            
            subQueues.forEach(subQueue => {
                const subBtn = document.createElement("button");
                subBtn.className = "queue-btn";
                subBtn.dataset.queue = subQueue.id;
                subBtn.textContent = `${subQueue.icon || '📋'} ${subQueue.name}`;
                subBtn.style.borderLeftColor = subQueue.color;
                subBtn.addEventListener("click", () => {
                    selectedQueue = subQueue.id;
                    updateTickets();
                });
                subGroup.appendChild(subBtn);
            });
            
            queueGroup.appendChild(subGroup);
        }
        
        container.appendChild(queueGroup);
    });
}

function initSidebarDropdown(){
    const toggleBtns = document.querySelectorAll('.sidebar-toggle-btn');
    const currentPage = window.location.pathname.split('/').pop();

    // mark active links for the current page
    document.querySelectorAll('.sidebar a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href === currentPage) {
            a.closest('li')?.classList.add('active');
        }
    });

    toggleBtns.forEach(btn => {
        const parent = btn.closest('.has-children');
        if (!parent) return;

        const matchingChild = parent.querySelector(`a[href="${currentPage}"]`);
        if (matchingChild) {
            parent.classList.add('open');
            matchingChild.closest('li')?.classList.add('active');
        }

        btn.addEventListener('click', () => {
            parent.classList.toggle('open');
        });
    });
}

// Render queue buttons on load
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing queues...");
    const queueConfig = getQueueConfig();
    console.log("Queue config loaded:", queueConfig.length, "queues");
    renderQueueButtons();
    renderAdminQueueCheckboxes();
    renderAdmin(); // ensure existing users render on admin page load
    initSidebarDropdown();
    console.log("Queue buttons rendered");
});

// -------------------------------
// QUEUE SELECTION
// -------------------------------
const queueNewTicketBtn = document.getElementById("queue-new-ticket-btn");

// Queue-specific +New Ticket button in tickets panel header
if (queueNewTicketBtn) {
    queueNewTicketBtn.addEventListener("click", () => {
        if (selectedQueue) {
            openNewTicketWithQueue(selectedQueue);
        }
    });
}

// New ticket category/subcategory dynamic options
if (newQueue) {
    newQueue.addEventListener("change", () => {
        populateCategorySelect(newQueue.value, newCategory, newSubcategory);
        renderCustomFields(newQueue.value, "new-custom-fields-container");
    });
}

if (newCategory) {
    newCategory.addEventListener("change", () => {
        populateSubcategorySelect(newQueue.value, newCategory.value, newSubcategory);
    });
}

// Initialize category options on load for new ticket modal
if (newQueue) {
    populateCategorySelect(newQueue.value || "it", newCategory, newSubcategory);
    renderCustomFields(newQueue.value || "it", "new-custom-fields-container");
}

// -------------------------------
// STATUS FILTER BUTTONS
// -------------------------------
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b =>
            b.classList.remove("active")
        );
        btn.classList.add("active");

        selectedFilter = btn.dataset.filter;
        updateTickets();
    });
});

// -------------------------------
// PRIORITY FILTER BUTTONS
// -------------------------------
document.querySelectorAll(".priority-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".priority-filter-btn").forEach(b =>
            b.classList.remove("active")
        );
        btn.classList.add("active");

        selectedPriorityFilter = btn.dataset.priority;
        updateTickets();
    });
});

// -------------------------------
// SEARCH + SORT EVENTS
// -------------------------------
if (searchInput) {
    searchInput.addEventListener("input", updateTickets);
}

if (sortSelect) {
    sortSelect.addEventListener("change", updateTickets);
}

// -------------------------------
// SIDEBAR TOGGLE
// -------------------------------
if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
}

// -------------------------------
// DARK MODE TOGGLE
// -------------------------------
if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });
}

// -------------------------------
// VIEW MODE TOGGLE
// -------------------------------
if (viewToggle) {
    viewToggle.addEventListener("click", () => {
        viewMode = viewMode === "cards" ? "table" : "cards";
        viewToggle.textContent = `View: ${viewMode === "cards" ? "Cards" : "Table"}`;
        updateTickets();
    });
}

// -------------------------------
// NEW TICKET MODAL OPEN (supports preset queue)
// -------------------------------
function openNewTicketWithQueue(presetQueue) {
    editingTicketId = null;
    newTicketTitle.textContent = "Create New Ticket";
    newTicketSubmit.textContent = "Create Ticket";
    newTicketError.textContent = "";
    newTicketForm.reset();
    newPriority.value = "Medium";
    newStatus.value = "open";
    newAssignedTo.value = "";
    
    // Populate queue dropdown filtered by current queue family
    if (newQueue) {
        const q = presetQueue || "it";
        populateQueueDropdown(q);
        newQueue.value = q;
        populateCategorySelect(newQueue.value || "it", newCategory, newSubcategory);
        renderCustomFields(q, "new-custom-fields-container");
    }
    
    // clear any previous description images when creating a new ticket
    newDescriptionImages = [];
    const newDescGallery = document.getElementById('new-description-images');
    if (newDescGallery) newDescGallery.innerHTML = '';
    if (newTimeHours) newTimeHours.value = "";
    if (newTimeMinutes) newTimeMinutes.value = "";
    showModal(newTicketModal);
}

if (newTicketBtn) newTicketBtn.addEventListener("click", () => openNewTicketWithQueue("it"));

// -------------------------------
// CLOSE MODALS
// -------------------------------
if (newTicketClose) newTicketClose.addEventListener("click", () => hideModal(newTicketModal));
if (newTicketCancel) newTicketCancel.addEventListener("click", () => hideModal(newTicketModal));
if (modalClose) modalClose.addEventListener("click", () => hideModal(modal));

window.addEventListener("click", e => {
    if (newTicketModal && e.target === newTicketModal) hideModal(newTicketModal);
    if (modal && e.target === modal) hideModal(modal);
});

// -------------------------------
// SIDEBAR NAVIGATION (Tickets / Reports / Admin)
// -------------------------------
(function initSidebarNav(){
    const sidebarItems = document.querySelectorAll('.sidebar li');
    const queuePanel = document.querySelector('main .panel');
    const ticketPanel = document.querySelector('.ticket-panel');
    const reportsPanel = document.getElementById('reports-panel');
    const adminPanel = document.getElementById('admin-panel');

    function showTicketsView(){
        if(queuePanel) queuePanel.classList.remove('hidden');
        if(ticketPanel) ticketPanel.classList.remove('hidden');
        if(reportsPanel) reportsPanel.classList.add('hidden');
        if(adminPanel) adminPanel.classList.add('hidden');
        updateTickets();
    }

    function showReportsView(){
        if(queuePanel) queuePanel.classList.add('hidden');
        if(ticketPanel) ticketPanel.classList.add('hidden');
        if(reportsPanel) reportsPanel.classList.remove('hidden');
        if(adminPanel) adminPanel.classList.add('hidden');
        renderReports();
    }

    function showAdminView(){
        if(queuePanel) queuePanel.classList.add('hidden');
        if(ticketPanel) ticketPanel.classList.add('hidden');
        if(reportsPanel) reportsPanel.classList.add('hidden');
        if(adminPanel) adminPanel.classList.remove('hidden');
        renderAdmin();
    }

    sidebarItems.forEach(li => {
        li.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            li.classList.add('active');
            const text = li.textContent.trim().toLowerCase();
            if(text.includes('tickets')) showTicketsView();
            else if(text.includes('reports')) showReportsView();
            else if(text.includes('admin')) showAdminView();
        });
    });
})();

// -------------------------------
// REPORTS + ADMIN HELPERS
// -------------------------------
function renderReports(){
    const byStatus = {};
    const byQueue = {};
    const byPriority = {};
    let totalTime = 0;
    tickets.forEach(t => {
        byStatus[t.status] = (byStatus[t.status] || 0) + 1;
        byQueue[t.queue] = (byQueue[t.queue] || 0) + 1;
        byPriority[t.priority] = (byPriority[t.priority] || 0) + 1;
        totalTime += getTotalMinutes(t);
    });

    const statusEl = document.getElementById('report-by-status');
    const queueEl = document.getElementById('report-by-queue');
    const prioEl = document.getElementById('report-by-priority');

    if(statusEl){
        statusEl.innerHTML = Object.keys(byStatus).map(k => `<div>${k}: <strong>${byStatus[k]}</strong></div>`).join('');
    }
    if(queueEl){
        queueEl.innerHTML = Object.keys(byQueue).map(k => `<div>${k}: <strong>${byQueue[k]}</strong></div>`).join('');
    }
    if(prioEl){
        prioEl.innerHTML = Object.keys(byPriority).map(k => `<div>${k}: <strong>${byPriority[k]}</strong></div>`).join('') + `<div style="margin-top:16px; padding-top:16px; border-top:1px solid #ddd;">Total Time Logged: <strong>${formatMinutes(totalTime)}</strong></div>`;
    }
}

function exportTicketsCSV(){
    const headers = ['id','title','createdDate','queue','status','assignedTo','priority','requesterName','location','totalTime'];
    const rows = tickets.map(t => {
        const baseData = headers.slice(0, -1).map(h => `"${(t[h]||'').toString().replace(/"/g,'""')}"`).join(',');
        const timeVal = `"${formatMinutes(getTotalMinutes(t))}"`;
        return baseData + ',' + timeVal;
    });
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tickets-export.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function renderAdmin(){
    const listEl = document.getElementById('admin-users-list');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Render queue checkboxes if on admin page
    renderAdminQueueCheckboxes();
    
    if(!listEl) return;
    if(users.length === 0){
        listEl.innerHTML = '<div>No users found.</div>';
        return;
    }
    const rows = users.map((u, idx) => {
        const queues = u.permissions && u.permissions.queues ? u.permissions.queues.join(', ') : 'None';
        const emailDisplay = u.email ? ` • ${u.email}` : '';
        const roleIcon = u.role === 'customer' ? '👤' : (u.role === 'admin' ? '👨‍💼' : '🔧');
        return `
        <div class="admin-user-row" data-idx="${idx}" style="display:flex;align-items:center;gap:12px;padding:8px;border-bottom:1px solid #eee;">
            <div style="flex:1;">
                <strong>${roleIcon} ${u.name}</strong> 
                <div style="font-size:0.85rem;color:#666">${u.username} • ${u.role}${emailDisplay}</div>
                <div style="font-size:0.8rem;color:#888;margin-top:4px;">Queues: ${queues}</div>
            </div>
            <div>
                <button class="btn-secondary admin-edit-user" data-idx="${idx}" style="margin-right:6px;">Edit</button>
                <button class="btn-secondary admin-delete-user" data-idx="${idx}" style="margin-right:6px;">Delete</button>
                <button class="btn-secondary admin-toggle-active">${u.active ? 'Deactivate' : 'Activate'}</button>
            </div>
        </div>
    `;
    }).join('');
    listEl.innerHTML = rows;

    listEl.querySelectorAll('.admin-toggle-active').forEach((btn,i) => {
        btn.addEventListener('click', () => {
            users[i].active = !users[i].active;
            localStorage.setItem('users', JSON.stringify(users));
            renderAdmin();
        });
    });

    listEl.querySelectorAll('.admin-edit-user').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx, 10);
            const user = users[idx];
            if (!user) return;
            const u = document.getElementById('admin-new-username');
            const p = document.getElementById('admin-new-password');
            const n = document.getElementById('admin-new-name');
            const e = document.getElementById('admin-new-email');
            const r = document.getElementById('admin-new-role');
            if (!u || !p || !n || !r) return;
            u.value = user.username || '';
            p.value = '';
            n.value = user.name || '';
            if (e) e.value = user.email || '';
            r.value = user.role || 'tech';

            // set queues
            const queueCheckboxes = document.querySelectorAll('.admin-new-queue-checkbox');
            const userQueues = user.permissions?.queues || [];
            const isAdmin = userQueues.includes('*') || user.role === 'admin';
            const isCustomer = user.role === 'customer';
            queueCheckboxes.forEach(cb => {
                cb.checked = isAdmin ? true : userQueues.includes(cb.value);
                cb.disabled = isCustomer;
            });

            // permissions
            const perms = user.permissions || {};
            document.getElementById('admin-new-can-create').checked = !!perms.canCreateTickets;
            document.getElementById('admin-new-can-edit').checked = !!perms.canEditTickets;
            document.getElementById('admin-new-can-delete').checked = !!perms.canDeleteTickets;
            document.getElementById('admin-new-can-reports').checked = !!perms.canViewReports;
            document.getElementById('admin-new-can-export').checked = !!perms.canExportData;

            editingUserIndex = idx;
            adminAddBtn.textContent = 'Save Changes';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    listEl.querySelectorAll('.admin-delete-user').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx, 10);
            if (!Number.isInteger(idx)) return;
            if (!confirm('Delete this user?')) return;
            users.splice(idx, 1);
            localStorage.setItem('users', JSON.stringify(users));
            renderAdmin();
        });
    });
}

function renderAdminQueueCheckboxes() {
    const container = document.getElementById('admin-queue-checkboxes');
    if (!container) return;
    
    container.innerHTML = "";
    
    const queues = getActiveQueues();
    const mainQueues = queues.filter(q => !q.parentQueue).sort((a, b) => a.order - b.order);
    
    mainQueues.forEach(queue => {
        const label = document.createElement("label");
        label.className = "checkbox-label";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "admin-new-queue-checkbox";
        checkbox.value = queue.id;
        
        const span = document.createElement("span");
        span.textContent = `${queue.icon || '📋'} ${queue.name}`;
        
        label.appendChild(checkbox);
        label.appendChild(span);
        container.appendChild(label);
        
        // Add sub-queues
        const subQueues = queues.filter(sq => sq.parentQueue === queue.id).sort((a, b) => a.order - b.order);
        subQueues.forEach(subQueue => {
            const subLabel = document.createElement("label");
            subLabel.className = "checkbox-label";
            subLabel.style.marginLeft = "20px";
            subLabel.style.fontSize = "0.85rem";
            
            const subCheckbox = document.createElement("input");
            subCheckbox.type = "checkbox";
            subCheckbox.className = "admin-new-queue-checkbox";
            subCheckbox.value = subQueue.id;
            
            const subSpan = document.createElement("span");
            subSpan.textContent = `${subQueue.icon || '📋'} ${subQueue.name}`;
            
            subLabel.appendChild(subCheckbox);
            subLabel.appendChild(subSpan);
            container.appendChild(subLabel);
        });
    });
}

const exportBtn = document.getElementById('export-reports-csv');
if(exportBtn) exportBtn.addEventListener('click', exportTicketsCSV);

const adminAddBtn = document.getElementById('admin-add-user');
let editingUserIndex = null;

// Auto-select all when admin role is selected
const adminRoleSelect = document.getElementById('admin-new-role');
if (adminRoleSelect) {
    adminRoleSelect.addEventListener('change', () => {
        const role = adminRoleSelect.value;
        const isAdmin = role === 'admin';
        const isCustomer = role === 'customer';
        
        // Auto-check all permissions for admin, minimal for customer
        const permissionCheckboxes = [
            'admin-new-can-create',
            'admin-new-can-edit',
            'admin-new-can-delete',
            'admin-new-can-reports',
            'admin-new-can-export'
        ];
        
        if (isCustomer) {
            // Customer: only canCreateTickets
            document.getElementById('admin-new-can-create').checked = true;
            document.getElementById('admin-new-can-edit').checked = false;
            document.getElementById('admin-new-can-delete').checked = false;
            document.getElementById('admin-new-can-reports').checked = false;
            document.getElementById('admin-new-can-export').checked = false;
        } else {
            // Admin or tech
            permissionCheckboxes.forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) checkbox.checked = isAdmin;
            });
        }
        
        // Auto-check all queues for admin, none for customer
        const queueCheckboxes = document.querySelectorAll('.admin-new-queue-checkbox');
        queueCheckboxes.forEach(cb => {
            cb.checked = isAdmin;
            cb.disabled = isCustomer; // Disable queue checkboxes for customers
        });
    });
}

if(adminAddBtn){
    adminAddBtn.addEventListener('click', () => {
        const u = document.getElementById('admin-new-username');
        const p = document.getElementById('admin-new-password');
        const n = document.getElementById('admin-new-name');
        const e = document.getElementById('admin-new-email');
        const r = document.getElementById('admin-new-role');
        if(!u || !p || !n || !r) return;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const isEdit = editingUserIndex !== null;
        if(!u.value.trim()) { alert('Username required'); return; }
        if(!isEdit && !p.value.trim()) { alert('Username and password required'); return; }
        
        const role = r.value.trim() || 'tech';
        const isCustomer = role === 'customer';
        
        // Validate email for customers
        if (isCustomer && e && !e.value.trim()) {
            alert('Email is required for customer accounts');
            return;
        }
        
        // Collect queue assignments
        const queueCheckboxes = document.querySelectorAll('.admin-new-queue-checkbox');
        const assignedQueues = Array.from(queueCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        // If admin role, grant all queues. If customer, no queues
        const isAdmin = role === 'admin';
        const queues = isAdmin ? ['*'] : (isCustomer ? [] : assignedQueues);
        
        // Collect permissions
        const permissions = {
            queues: queues,
            canCreateTickets: document.getElementById('admin-new-can-create')?.checked || false,
            canEditTickets: document.getElementById('admin-new-can-edit')?.checked || false,
            canDeleteTickets: document.getElementById('admin-new-can-delete')?.checked || false,
            canViewReports: document.getElementById('admin-new-can-reports')?.checked || false,
            canExportData: document.getElementById('admin-new-can-export')?.checked || false,
            canManageUsers: isAdmin,
            canManageQueues: isAdmin
        };
        
        if (isEdit && users[editingUserIndex]) {
            const existing = users[editingUserIndex];
            existing.username = u.value.trim();
            existing.name = n.value.trim() || u.value.trim();
            existing.role = role;
            existing.permissions = permissions;
            // Update email if provided
            if (e && e.value.trim()) {
                existing.email = e.value.trim();
            }
            // Only update password if provided
            if (p.value.trim()) {
                existing.password = p.value.trim();
            }
        } else {
            const newUser = { 
                username: u.value.trim(), 
                password: p.value.trim(), 
                name: n.value.trim() || u.value.trim(), 
                role: role, 
                active: true,
                permissions: permissions
            };
            // Add email if provided
            if (e && e.value.trim()) {
                newUser.email = e.value.trim();
            }
            users.push(newUser);
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        u.value = p.value = n.value = '';
        if (e) e.value = '';
        editingUserIndex = null;
        adminAddBtn.textContent = 'Add User';
        
        // Reset checkboxes
        queueCheckboxes.forEach(cb => {
            cb.checked = false;
            cb.disabled = false;
        });
        document.getElementById('admin-new-can-create').checked = true;
        document.getElementById('admin-new-can-edit').checked = true;
        document.getElementById('admin-new-can-delete').checked = false;
        document.getElementById('admin-new-can-reports').checked = true;
        document.getElementById('admin-new-can-export').checked = false;
        
        renderAdmin();
    });
}

// -------------------------------
// CREATE / EDIT TICKET SUBMIT
// -------------------------------
newTicketForm.addEventListener("submit", e => {
    e.preventDefault();
    newTicketError.textContent = "";

    if (!newTitle.value.trim() || !newDescription.value.trim() || !newQueue.value) {
        newTicketError.textContent = "Title, Description, and Queue are required.";
        return;
    }

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const timestamp = now.toISOString();

    const assignedTo = newAssignedTo.value;
    const isAssigned = assignedTo !== "";

    if (editingTicketId) {
        // UPDATE EXISTING TICKET
        const t = tickets.find(t => t.id === editingTicketId);
        if (!t) return;

        t.title = newTitle.value.trim();
        t.description = newDescription.value.trim();
        t.queue = newQueue.value;
        t.status = newStatus.value;
        t.assigned = isAssigned;
        t.assignedTo = assignedTo;
        t.priority = newPriority.value;
        t.requesterName = newRequesterName.value.trim();
        t.requesterEmail = newRequesterEmail.value.trim();
        t.location = newLocation.value.trim();
        t.updatedDate = todayStr;
        t.dueDate = newDueDate.value;
        t.category = newCategory.value.trim();
        t.subcategory = newSubcategory.value.trim();
        t.attachments = newAttachments.value.trim();
        // save images attached via paste into the ticket
        t.images = newDescriptionImages.length ? [...newDescriptionImages] : [];

        // Collect custom field values
        t.customFieldValues = collectCustomFieldValues("new-custom-fields-container");

        // optional time logged via edit form
        if (newTimeHours || newTimeMinutes) {
            const h = parseInt((newTimeHours && newTimeHours.value) ? newTimeHours.value : "0", 10) || 0;
            const m = parseInt((newTimeMinutes && newTimeMinutes.value) ? newTimeMinutes.value : "0", 10) || 0;
            const editMinutes = Math.max(0, (h * 60) + m);
            if (editMinutes > 0) {
                t.timeEntries = Array.isArray(t.timeEntries) ? t.timeEntries : [];
                t.timeEntries.push({ minutes: editMinutes, by: currentUser, timestamp, source: "edit" });
                t.activity.push({ timestamp, user: currentUser, action: `Time logged (${formatMinutes(editMinutes)}) via edit form` });
            }
        }

        t.activity.push({
            timestamp,
            user: currentUser,
            action: "Ticket edited"
        });

        hideModal(newTicketModal);
        showToast(`Ticket #${t.id} updated`);
        updateTickets();
        return;
    }

    // CREATE NEW TICKET
    const maxId = tickets.reduce((max, t) => Math.max(max, t.id), 0);
    const newId = maxId + 1;

    const ticket = {
        id: newId,
        title: newTitle.value.trim(),
        description: newDescription.value.trim(),
        queue: newQueue.value,
        status: newStatus.value,
        assigned: isAssigned,
        assignedTo,
        priority: newPriority.value,
        tags: [],
        requesterName: newRequesterName.value.trim(),
        requesterEmail: newRequesterEmail.value.trim(),
        location: newLocation.value.trim(),
        createdDate: todayStr,
        updatedDate: todayStr,
        dueDate: newDueDate.value,
        category: newCategory.value.trim(),
        subcategory: newSubcategory.value.trim(),
        internalNotes: "",
        attachments: newAttachments.value.trim(),
        images: newDescriptionImages.length ? [...newDescriptionImages] : [],
        customFieldValues: collectCustomFieldValues("new-custom-fields-container"),
        comments: [],
        timeEntries: [],
        activity: [
            {
                timestamp,
                user: currentUser,
                action: "Ticket created"
            }
        ]
    };

    // optional initial time via create form
    if (newTimeHours || newTimeMinutes) {
        const h0 = parseInt((newTimeHours && newTimeHours.value) ? newTimeHours.value : "0", 10) || 0;
        const m0 = parseInt((newTimeMinutes && newTimeMinutes.value) ? newTimeMinutes.value : "0", 10) || 0;
        const minutes0 = Math.max(0, (h0 * 60) + m0);
        if (minutes0 > 0) {
            ticket.timeEntries.push({ minutes: minutes0, by: currentUser, timestamp, source: "create" });
            ticket.activity.push({ timestamp, user: currentUser, action: `Initial time logged (${formatMinutes(minutes0)})` });
        }
    }

    tickets.push(ticket);

    hideModal(newTicketModal);
    showToast(`Ticket #${newId} created`);

    if (!selectedQueue) {
        selectedQueue = ticket.queue;
    }

    updateTickets();
});

// -------------------------------
// OPEN TICKET DETAIL MODAL
// -------------------------------
function openTicketModal(ticket) {
    document.getElementById("modal-title").textContent = ticket.title;
    document.getElementById("modal-id").textContent = `Ticket ID: ${ticket.id}`;
    document.getElementById("modal-status").textContent = `Status: ${ticket.status}`;
    document.getElementById("modal-assigned").textContent = `Assigned To: ${ticket.assigned ? (ticket.assignedTo || "Assigned") : "Unassigned"}`;
    document.getElementById("modal-priority").textContent = `Priority: ${ticket.priority}`;
    document.getElementById("modal-queue").textContent = `Queue: ${ticket.queue}`;
    document.getElementById("modal-requester").textContent = `Requester: ${ticket.requesterName || "N/A"} (${ticket.requesterEmail || "no email"})`;
    document.getElementById("modal-location").textContent = `Location: ${ticket.location || "N/A"}`;
    document.getElementById("modal-dates").textContent = `Created: ${ticket.createdDate} | Updated: ${ticket.updatedDate} | Due: ${ticket.dueDate || "N/A"}`;
    document.getElementById("modal-tags").textContent = `Tags: ${ticket.tags && ticket.tags.length ? ticket.tags.join(", ") : "None"}`;
    document.getElementById("modal-category").textContent = `Category: ${ticket.category || "N/A"} | Subcategory: ${ticket.subcategory || "N/A"}`;
    
    // Set ticket description
    const descriptionDiv = document.getElementById("modal-description");
    if (descriptionDiv) {
        descriptionDiv.textContent = ticket.description || "No description provided.";
    }

    modalStatusSelect.value = ticket.status;
    modalAssignSelect.value = ticket.assignedTo || "";
    if (modalQueueSelect) {
        // Try to set exact queue, fallback to normalized main queue
        modalQueueSelect.value = ticket.queue || "";
        if (modalQueueSelect.value === "") {
            modalQueueSelect.value = normalizeQueue(ticket.queue);
        }
    }

    modal.dataset.ticketId = ticket.id;
    // set timer button states for this ticket
    if (modalTimerStart && modalTimerStop) {
        const running = (typeof activeTimers !== 'undefined') && activeTimers[ticket.id] ? true : false;
        modalTimerStart.disabled = running;
        modalTimerStop.disabled = !running;
    }

    // render ticket images gallery
    const ticketGallery = document.getElementById('modal-ticket-images');
    if (ticketGallery) {
        ticketGallery.innerHTML = '';
        const imgs = ticket.images || [];
        imgs.forEach(dataUrl => {
            const div = document.createElement('div');
            div.classList.add('image-gallery-item');
            const img = document.createElement('img');
            img.src = dataUrl;
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                const modalView = document.createElement('div');
                modalView.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:3000;';
                const fullImg = document.createElement('img');
                fullImg.src = dataUrl;
                fullImg.style.maxWidth = '90vw';
                fullImg.style.maxHeight = '90vh';
                fullImg.style.objectFit = 'contain';
                modalView.appendChild(fullImg);
                modalView.addEventListener('click', () => modalView.remove());
                document.body.appendChild(modalView);
            });
            div.appendChild(img);
            ticketGallery.appendChild(div);
        });
    }

    // reset any in-progress comment images when opening a ticket
    commentImages = [];
    const commentGallery = document.getElementById('modal-comment-images');
    if (commentGallery) commentGallery.innerHTML = '';
    if (modalCommentHours) modalCommentHours.value = "";
    if (modalCommentMinutes) modalCommentMinutes.value = "";
    // Update total time display
    if (modalTime) {
        const total = getTotalMinutes(ticket);
        modalTime.textContent = `Total Time: ${formatMinutes(total)}`;
    }

    // Display custom field values
    displayCustomFields(ticket);

    renderComments(ticket);
    renderActivity(ticket);

    showModal(modal);
}

// -------------------------------
// RENDER COMMENTS
// -------------------------------
function renderComments(ticket) {
    modalCommentsList.innerHTML = "";

    if (!ticket.comments || ticket.comments.length === 0) {
        modalCommentsList.innerHTML = "<p>No comments yet.</p>";
        return;
    }

    const sorted = [...ticket.comments].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    sorted.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("comment-item");
        const dateStr = new Date(c.timestamp).toLocaleString();
        div.innerHTML = `
            <div class="comment-header">
                <strong>${c.author}</strong> <span>${dateStr}</span>
            </div>
            <div class="comment-body">
                ${c.text}
            </div>
        `;

        if (c.loggedMinutes && c.loggedMinutes > 0) {
            const timeP = document.createElement("div");
            timeP.style.fontSize = "12px";
            timeP.style.color = "#666";
            timeP.textContent = `Logged: ${formatMinutes(c.loggedMinutes)}`;
            div.appendChild(timeP);
        }

        // If comment has images, render them below the text
        if (c.images && c.images.length) {
            const gallery = document.createElement('div');
            gallery.classList.add('image-gallery');
            c.images.forEach((dataUrl) => {
                const item = document.createElement('div');
                item.classList.add('image-gallery-item');
                const img = document.createElement('img');
                img.src = dataUrl;
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => {
                    const modalView = document.createElement('div');
                    modalView.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:3000;';
                    const fullImg = document.createElement('img');
                    fullImg.src = dataUrl;
                    fullImg.style.maxWidth = '90vw';
                    fullImg.style.maxHeight = '90vh';
                    fullImg.style.objectFit = 'contain';
                    modalView.appendChild(fullImg);
                    modalView.addEventListener('click', () => modalView.remove());
                    document.body.appendChild(modalView);
                });
                item.appendChild(img);
                gallery.appendChild(item);
            });
            div.appendChild(gallery);
        }

        modalCommentsList.appendChild(div);
    });
}

// -------------------------------
// RENDER ACTIVITY
// -------------------------------
function renderActivity(ticket) {
    modalActivityList.innerHTML = "";

    if (!ticket.activity || ticket.activity.length === 0) {
        modalActivityList.innerHTML = "<p>No activity recorded.</p>";
        return;
    }

    const sorted = [...ticket.activity].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    sorted.forEach(a => {
        const div = document.createElement("div");
        div.classList.add("activity-item");
        const dateStr = new Date(a.timestamp).toLocaleString();
        div.innerHTML = `
            <div class="activity-line">
                <span>${dateStr}</span> • <strong>${a.user}</strong> • ${a.action}
            </div>
        `;
        modalActivityList.appendChild(div);
    });
}

// -------------------------------
// ADD COMMENT
// -------------------------------
modalCommentAdd.addEventListener("click", () => {
    const id = parseInt(modal.dataset.ticketId);
    const t = tickets.find(t => t.id === id);
    if (!t) return;

    const text = modalCommentText.value.trim();
    if (!text) return;

    const now = new Date();
    const timestamp = now.toISOString();

    // include any pasted images with the comment
    const imagesForComment = commentImages.length ? [...commentImages] : [];

    // optional time from comment inputs
    let minutesFromComment = 0;
    if (modalCommentHours || modalCommentMinutes) {
        const ch = parseInt((modalCommentHours && modalCommentHours.value) ? modalCommentHours.value : "0", 10) || 0;
        const cm = parseInt((modalCommentMinutes && modalCommentMinutes.value) ? modalCommentMinutes.value : "0", 10) || 0;
        minutesFromComment = Math.max(0, (ch * 60) + cm);
    }

    t.comments.push({
        author: currentUser,
        timestamp,
        text,
        images: imagesForComment,
        loggedMinutes: minutesFromComment > 0 ? minutesFromComment : 0
    });

    if (minutesFromComment > 0) {
        t.timeEntries = Array.isArray(t.timeEntries) ? t.timeEntries : [];
        t.timeEntries.push({ minutes: minutesFromComment, by: currentUser, timestamp, source: "comment" });
    }

    t.activity.push({
        timestamp,
        user: currentUser,
        action: minutesFromComment > 0 ? `Comment added • Time logged (${formatMinutes(minutesFromComment)})` : "Comment added"
    });

    modalCommentText.value = "";
    // clear and re-render comment image gallery
    commentImages = [];
    const commentGallery = document.getElementById('modal-comment-images');
    if (commentGallery) commentGallery.innerHTML = '';
    renderComments(t);
    renderActivity(t);
    if (modalTime) {
        const total = getTotalMinutes(t);
        modalTime.textContent = `Total Time: ${formatMinutes(total)}`;
    }
    showToast("Comment added");
});

// -------------------------------
// EDIT TICKET BUTTON
// -------------------------------
modalEditBtn.addEventListener("click", () => {
    const id = parseInt(modal.dataset.ticketId);
    const t = tickets.find(t => t.id === id);
    if (!t) return;

    editingTicketId = id;

    newTicketTitle.textContent = `Edit Ticket #${id}`;
    newTicketSubmit.textContent = "Save Changes";

    newTitle.value = t.title;
    newDescription.value = t.description;
    
    // Populate queue dropdown filtered by ticket's current queue family
    populateQueueDropdown(t.queue);
    newQueue.value = t.queue;
    
    newPriority.value = t.priority;
    newStatus.value = t.status;
    newAssignedTo.value = t.assignedTo || "";
    newRequesterName.value = t.requesterName;
    newRequesterEmail.value = t.requesterEmail;
    newLocation.value = t.location;
    newDueDate.value = t.dueDate;
    populateCategorySelect(t.queue, newCategory, newSubcategory, t.category, t.subcategory);
    newAttachments.value = t.attachments;

    // Load custom fields with existing values
    renderCustomFields(t.queue, "new-custom-fields-container", t.customFieldValues || {});

    // load any images attached to this ticket into the edit form
    newDescriptionImages = t.images && t.images.length ? [...t.images] : [];
    renderImageGallery('new-description-images', newDescriptionImages);

    hideModal(modal);
    showModal(newTicketModal);
});

// -------------------------------
// CHANGE STATUS
// -------------------------------
modalStatusSave.addEventListener("click", () => {
    const id = parseInt(modal.dataset.ticketId);
    const t = tickets.find(t => t.id === id);
    if (!t) return;

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const timestamp = now.toISOString();

    t.status = modalStatusSelect.value;
    t.updatedDate = todayStr;

    t.activity.push({
        timestamp,
        user: currentUser,
        action: `Status changed to ${t.status}`
    });

    showToast(`Status updated to ${t.status}`);
    updateTickets();
    openTicketModal(t);
});

// -------------------------------
// REASSIGN TICKET
// -------------------------------
modalAssignSave.addEventListener("click", () => {
    const id = parseInt(modal.dataset.ticketId);
    const t = tickets.find(t => t.id === id);
    if (!t) return;

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const timestamp = now.toISOString();

    const assignedTo = modalAssignSelect.value;
    t.assignedTo = assignedTo;
    t.assigned = assignedTo !== "";
    t.updatedDate = todayStr;

    t.activity.push({
        timestamp,
        user: currentUser,
        action: `Reassigned to ${assignedTo || "Unassigned"}`
    });

    showToast(`Ticket reassigned`);
    updateTickets();
    openTicketModal(t);
});

// -------------------------------
// MOVE TICKET TO (SUB-)QUEUE
// -------------------------------
modalQueueSave.addEventListener("click", () => {
    const id = parseInt(modal.dataset.ticketId);
    const t = tickets.find(t => t.id === id);
    if (!t) return;

    const newQueue = modalQueueSelect.value;
    if (!newQueue) return;

    const oldQueue = t.queue;
    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const timestamp = now.toISOString();

    t.queue = newQueue;
    t.updatedDate = todayStr;

    t.activity.push({
        timestamp,
        user: currentUser,
        action: `Moved from ${formatQueueTitle(oldQueue)} to ${formatQueueTitle(newQueue)}`
    });

    showToast("Queue updated");
    updateTickets();
    openTicketModal(t);
});

// -------------------------------
// MAIN RENDER FUNCTION
// -------------------------------
function normalizeQueue(q) {
    if (!q) return "";
    if (q === "it" || q.startsWith("it-")) return "it";
    if (q === "building-grounds" || q === "buildings-grounds") return "buildings-grounds";
    if (q === "electrical-services" || q === "electrical") return "electrical";
    if (q === "moves" || q === "move-request" || q === "move-requests") return "moves";
    if (q === "rma" || q === "warehouse") return "rma";
    return q;
}

function formatQueueTitle(q) {
    const n = normalizeQueue(q);
    if (n === "it") return "Information Technology";
    if (n === "buildings-grounds") return "Buildings & Grounds";
    if (n === "electrical") return "Electrical Services";
    if (n === "moves") return "Move Requests";
    if (n === "rma") return "RMA / Warehouse";
    return (q || "").replace(/-/g, " ").replace(/^it-/, "IT ");
}

function updateTickets() {
    ticketList.innerHTML = "";

    if (!selectedQueue) {
        ticketHeader.textContent = "Tickets (Select a Queue)";
        const queueNewTicketBtn = document.getElementById("queue-new-ticket-btn");
        if (queueNewTicketBtn) queueNewTicketBtn.style.display = "none";
        return;
    }

    // Show +New Ticket button when queue is selected
    const queueNewTicketBtn = document.getElementById("queue-new-ticket-btn");
    if (queueNewTicketBtn) queueNewTicketBtn.style.display = "block";

    // Format queue title (simplified categories)
    let formattedQueue = formatQueueTitle(selectedQueue);

    ticketHeader.textContent = `Tickets — ${formattedQueue}`;

    // FILTERING
    let filtered = tickets.filter(t => {
        // Queue matching: if a specific IT sub-queue is selected, match exactly; otherwise compare normalized categories
        let queueMatch;
        if (selectedQueue && selectedQueue.startsWith("it-")) {
            queueMatch = t.queue === selectedQueue;
        } else {
            queueMatch = normalizeQueue(t.queue) === normalizeQueue(selectedQueue);
        }

        // Status filter
        const filterMatch =
            (selectedFilter === "open" && t.status === "open") ||
            (selectedFilter === "closed" && t.status === "closed") ||
            (selectedFilter === "assigned" && t.assigned === true) ||
            (selectedFilter === "unassigned" && t.assigned === false);

        // Priority filter
        const priorityMatch =
            selectedPriorityFilter === "all" ||
            t.priority === selectedPriorityFilter;

        // Search filter
        const searchMatch = searchInput
            ? t.title.toLowerCase().includes(searchInput.value.toLowerCase())
            : true;

        return queueMatch && filterMatch && priorityMatch && searchMatch;
    });

    // SORTING
    if (sortSelect) {
        switch (sortSelect.value) {
            case "az":
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "za":
                filtered.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "newest":
                filtered.sort((a, b) => b.id - a.id);
                break;
            case "oldest":
                filtered.sort((a, b) => a.id - b.id);
                break;
            case "priority-high":
                filtered.sort(
                    (a, b) => priorityRank[b.priority] - priorityRank[a.priority]
                );
                break;
            case "priority-low":
                filtered.sort(
                    (a, b) => priorityRank[a.priority] - priorityRank[b.priority]
                );
                break;
            case "assigned-first":
                filtered.sort((a, b) => (b.assigned === true) - (a.assigned === true));
                break;
            case "unassigned-first":
                filtered.sort((a, b) => (a.assigned === true) - (b.assigned === true));
                break;
            case "queue-az":
                filtered.sort((a, b) => formatQueueTitle(a.queue).localeCompare(formatQueueTitle(b.queue)));
                break;
            case "queue-za":
                filtered.sort((a, b) => formatQueueTitle(b.queue).localeCompare(formatQueueTitle(a.queue)));
                break;
        }
    }

    // RENDER
    if (filtered.length === 0) {
        ticketList.innerHTML = "<p>No tickets found.</p>";
        return;
    }

    if (viewMode === "cards") {
        renderCards(filtered);
    } else {
        renderTable(filtered);
    }
}

// -------------------------------
// RENDER CARDS
// -------------------------------
function renderCards(ticketsToRender) {
    ticketsToRender.forEach(t => {
        const card = document.createElement("div");
        card.classList.add("ticket-card");

        card.innerHTML = `
            <div class="ticket-title">
                ${t.title}
                <span class="priority-label priority-${t.priority.toLowerCase()}">
                    ${t.priority}
                </span>
            </div>
            <div class="ticket-meta">
                Ticket #${t.id} • 
                <span class="status-${t.status}">
                    ${t.status.toUpperCase()}
                </span> • 
                Assigned: ${t.assigned ? t.assignedTo || "Yes" : "No"}
            </div>
            <div class="ticket-meta" style="margin-top: 8px; color: #666; font-size: 13px;">
                Created: ${t.createdDate} • Time: ${formatMinutes(getTotalMinutes(t))}
            </div>
        `;

        card.addEventListener("click", () => openTicketModal(t));
        ticketList.appendChild(card);
    });
}

// -------------------------------
// RENDER TABLE
// -------------------------------
function renderTable(ticketsToRender) {
    const table = document.createElement("table");
    table.classList.add("ticket-table");

    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Created</th>
                <th>Queue</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    ticketsToRender.forEach(t => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${t.id}</td>
            <td>${t.title}</td>
            <td>${t.createdDate}</td>
            <td>${t.queue}</td>
            <td><span class="status-${t.status}">${t.status.toUpperCase()}</span></td>
            <td>${t.assigned ? (t.assignedTo || "Assigned") : "Unassigned"}</td>
            <td>
                <span class="priority-label priority-${t.priority.toLowerCase()}">
                    ${t.priority}
                </span>
            </td>
            <td>${formatMinutes(getTotalMinutes(t))}</td>
        `;
        row.addEventListener("click", () => openTicketModal(t));
        tbody.appendChild(row);
    });

    ticketList.appendChild(table);
}

// -------------------------------
// MODAL HELPERS
// -------------------------------
function showModal(el) {
    el.style.display = "flex";
}

function hideModal(el) {
    if (!el) return;
    el.style.display = "none";
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2200);
}

// IMAGE STORAGE AND PASTE HANDLERS
let newDescriptionImages = [];
let commentImages = [];

function handleImagePaste(e, imageArray, galleryElementId) {
    const clipboardItems = e.clipboardData?.items || [];
    for (let item of clipboardItems) {
        if (item.type.indexOf("image") !== -1) {
            e.preventDefault();
            const file = item.getAsFile();
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const dataUrl = event.target?.result;
                    if (dataUrl && imageArray.length < 5) {
                        imageArray.push(dataUrl);
                        renderImageGallery(galleryElementId, imageArray);
                        showToast(`Image added (${imageArray.length}/5)`);
                    }
                };
                reader.readAsDataURL(file);
            }
            break;
        }
    }
}

function renderImageGallery(galleryElementId, imageArray) {
    const gallery = document.getElementById(galleryElementId);
    if (!gallery) return;
    gallery.innerHTML = "";
    imageArray.forEach((dataUrl, index) => {
        const div = document.createElement("div");
        div.classList.add("image-gallery-item");
        const img = document.createElement("img");
        img.src = dataUrl;
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:2000;cursor:pointer;";
            const fullImg = document.createElement("img");
            fullImg.src = dataUrl;
            fullImg.style.maxWidth = "90vw";
            fullImg.style.maxHeight = "90vh";
            fullImg.style.objectFit = "contain";
            modal.appendChild(fullImg);
            modal.addEventListener("click", () => modal.remove());
            document.body.appendChild(modal);
        });
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "✕";
        removeBtn.addEventListener("click", () => {
            imageArray.splice(index, 1);
            renderImageGallery(galleryElementId, imageArray);
        });
        div.appendChild(img);
        div.appendChild(removeBtn);
        gallery.appendChild(div);
    });
}

if (newDescription) {
    newDescription.addEventListener("paste", (e) => {
        handleImagePaste(e, newDescriptionImages, "new-description-images");
    });
}

if (modalCommentText) {
    modalCommentText.addEventListener("paste", (e) => {
        handleImagePaste(e, commentImages, "modal-comment-images");
    });
}
// (Old paste-to-text handler removed - gallery-only paste is used)

// -------------------------------
// TIME TRACKING HELPERS & TIMER STATE
// -------------------------------
const activeTimers = {};

function formatMinutes(mins) {
    const m = Math.max(0, Math.floor(mins || 0));
    const h = Math.floor(m / 60);
    const r = m % 60;
    if (h > 0 && r > 0) return `${h}h ${r}m`;
    if (h > 0) return `${h}h`;
    return `${r}m`;
}

function getTotalMinutes(ticket) {
    const entries = Array.isArray(ticket.timeEntries) ? ticket.timeEntries : [];
    return entries.reduce((sum, e) => sum + (e.minutes || 0), 0);
}

if (modalTimerStart) {
    modalTimerStart.addEventListener("click", () => {
        const id = parseInt(modal.dataset.ticketId);
        if (!id) return;
        if (activeTimers[id]) return; // already running
        activeTimers[id] = { start: Date.now() };
        modalTimerStart.disabled = true;
        if (modalTimerStop) modalTimerStop.disabled = false;
        showToast("Timer started");
    });
}

if (modalTimerStop) {
    modalTimerStop.addEventListener("click", () => {
        const id = parseInt(modal.dataset.ticketId);
        const t = tickets.find(t => t.id === id);
        if (!t || !activeTimers[id]) return;
        const started = activeTimers[id].start;
        delete activeTimers[id];
        const elapsedMs = Date.now() - started;
        const minutes = Math.max(1, Math.round(elapsedMs / 60000));
        const timestamp = new Date().toISOString();
        t.timeEntries = Array.isArray(t.timeEntries) ? t.timeEntries : [];
        t.timeEntries.push({ minutes, by: currentUser, timestamp, source: "timer" });
        t.activity.push({ timestamp, user: currentUser, action: `Time logged (${formatMinutes(minutes)}) via timer` });
        if (modalTimerStart) modalTimerStart.disabled = false;
        if (modalTimerStop) modalTimerStop.disabled = true;
        if (modalTime) {
            const total = getTotalMinutes(t);
            modalTime.textContent = `Total Time: ${formatMinutes(total)}`;
        }
        renderActivity(t);
        showToast("Timer stopped & time logged");
    });
}