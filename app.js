// -------------------------------
// AUTHENTICATION CHECK
// -------------------------------
// Redirect to login if not authenticated
const authToken = localStorage.getItem('authToken');
if (!authToken) {
    window.location.href = 'tech-login.html';
}

// Prevent Customer role from accessing staff portal
// Only check if role exists (for backwards compatibility with existing sessions)
var currentUserRole = localStorage.getItem('currentUserRole');
if (currentUserRole && currentUserRole === 'Customer') {
    // Clear staff tokens and redirect to customer portal
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUsername');
    localStorage.removeItem('currentUserId');
    alert('Customer accounts cannot access the staff portal. Redirecting to customer portal.');
    window.location.href = 'index.html';
}

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
  },
  {
    id: 26,
    title: "Windows update deployment to workstations",
    description: "Deploy latest Windows security patches to all workstations in phases.",
    queue: "it-systems",
    status: "Pending",
    assigned: true,
    assignedTo: "Les Duffy",
    priority: "High",
    tags: ["patching", "windows", "deployment"],
    requesterName: "IT Operations",
    requesterEmail: "ops@example.com",
    location: "All Locations",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-15",
    category: "Infrastructure",
    subcategory: "Patch Management",
    internalNotes: "Awaiting change approval board meeting.",
    attachments: "patch-schedule.xlsx",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T08:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T09:00:00", user: "System", action: "Status changed to Pending" }
    ]
  },
  {
    id: 27,
    title: "New employee laptop setup",
    description: "Configure laptop for new sales representative starting Monday. Include VPN, CRM, and Office suite.",
    queue: "it-support",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["onboarding", "hardware", "setup"],
    requesterName: "HR Department",
    requesterEmail: "hr@example.com",
    location: "HQ",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-12",
    category: "User Management",
    subcategory: "Onboarding",
    internalNotes: "Laptop received, imaging in progress.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T08:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T10:00:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 28,
    title: "Data retention policy implementation",
    description: "Implement new 7-year data retention policy for financial records in document management system.",
    queue: "it-applications",
    status: "Open",
    assigned: true,
    assignedTo: "Alex Richards",
    priority: "Medium",
    tags: ["compliance", "data-retention", "policy"],
    requesterName: "Legal Department",
    requesterEmail: "legal@example.com",
    location: "HQ",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-20",
    category: "Applications",
    subcategory: "Document Management",
    internalNotes: "Review system capabilities and configuration options.",
    attachments: "retention-policy-v2.pdf",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T09:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 29,
    title: "Parking lot lighting repair",
    description: "Several lights not working in north parking lot. Safety concern for evening staff.",
    queue: "buildings-grounds",
    status: "In Progress",
    assigned: true,
    assignedTo: "Les Duffy",
    priority: "High",
    tags: ["lighting", "safety", "facilities"],
    requesterName: "Security",
    requesterEmail: "security@example.com",
    location: "HQ - North Parking Lot",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-09",
    category: "Facilities",
    subcategory: "Lighting",
    internalNotes: "Electrician scheduled for tomorrow morning.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T09:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T10:00:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 30,
    title: "SSL certificate renewal for intranet",
    description: "Intranet SSL certificate expires in 14 days. Renew and install before expiration.",
    queue: "it-security",
    status: "Open",
    assigned: true,
    assignedTo: "Alex Richards",
    priority: "Critical",
    tags: ["ssl", "certificate", "security"],
    requesterName: "IT Security",
    requesterEmail: "security@example.com",
    location: "Data Center",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-18",
    category: "Security",
    subcategory: "Certificates",
    internalNotes: "Certificate request submitted to CA.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T10:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 31,
    title: "Video surveillance camera offline",
    description: "Camera #12 in warehouse offline. Cannot view feed from monitoring station.",
    queue: "it-security",
    status: "Resolved",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["camera", "surveillance", "hardware"],
    requesterName: "Warehouse Manager",
    requesterEmail: "warehouse@example.com",
    location: "Warehouse - Bay 3",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "",
    category: "Security",
    subcategory: "Surveillance",
    internalNotes: "Power adapter replaced. Camera back online.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T10:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T11:30:00", user: "System", action: "Status changed to Resolved" }
    ]
  },
  {
    id: 32,
    title: "Network switch upgrade in server room",
    description: "Replace aging 1Gb switch with new 10Gb model to improve data center throughput.",
    queue: "it-networking",
    status: "Pending",
    assigned: true,
    assignedTo: "Peter Uhl",
    priority: "Medium",
    tags: ["network", "switch", "upgrade"],
    requesterName: "IT Infrastructure",
    requesterEmail: "infrastructure@example.com",
    location: "Data Center A",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-25",
    category: "Networking",
    subcategory: "Hardware",
    internalNotes: "Waiting for equipment delivery. Installation during maintenance window.",
    attachments: "switch-config.txt",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T11:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T11:15:00", user: "System", action: "Status changed to Pending" }
    ]
  },
  {
    id: 33,
    title: "Cloud storage quota increase request",
    description: "Marketing team exceeded cloud storage quota. Requesting 500GB increase for campaign assets.",
    queue: "it-applications",
    status: "Resolved",
    assigned: true,
    assignedTo: "Andrew Ayala",
    priority: "Low",
    tags: ["cloud", "storage", "quota"],
    requesterName: "Marketing Team",
    requesterEmail: "marketing@example.com",
    location: "HQ",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "",
    category: "Applications",
    subcategory: "Cloud Storage",
    internalNotes: "Quota increased and confirmed with user.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T11:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T12:00:00", user: "System", action: "Status changed to Resolved" }
    ]
  },
  {
    id: 34,
    title: "Desk phone not receiving calls",
    description: "Extension 4521 can make outbound calls but inbound calls go straight to voicemail.",
    queue: "it-networking",
    status: "Closed",
    assigned: true,
    assignedTo: "Kim Clemmer",
    priority: "Medium",
    tags: ["voip", "phone", "pbx"],
    requesterName: "Sarah Johnson",
    requesterEmail: "sarah.johnson@example.com",
    location: "HQ - Office 312",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "",
    category: "Networking",
    subcategory: "VoIP",
    internalNotes: "Call forwarding was inadvertently enabled. Disabled and tested.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T12:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T12:30:00", user: "System", action: "Status changed to Resolved" },
      { timestamp: "2026-01-08T13:00:00", user: "System", action: "Status changed to Closed" }
    ]
  },
  {
    id: 35,
    title: "Office furniture move for reorg",
    description: "Rearrange desks and furniture on 2nd floor for departmental reorganization.",
    queue: "moves",
    status: "Open",
    assigned: true,
    assignedTo: "Les Duffy",
    priority: "Low",
    tags: ["move", "furniture", "facilities"],
    requesterName: "Office Manager",
    requesterEmail: "admin@example.com",
    location: "HQ - 2nd Floor",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-18",
    category: "Facilities",
    subcategory: "Moves",
    internalNotes: "Coordinate with affected departments. Schedule for weekend.",
    attachments: "floor-plan-new.pdf",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T13:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 36,
    title: "RMA process for defective monitors",
    description: "Three monitors displaying color artifacts. Need RMA and replacement under warranty.",
    queue: "rma",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["rma", "monitor", "hardware"],
    requesterName: "IT Support",
    requesterEmail: "support@example.com",
    location: "HQ",
    createdDate: "2026-01-08",
    updatedDate: "2026-01-08",
    dueDate: "2026-01-15",
    category: "Hardware",
    subcategory: "Monitor",
    internalNotes: "RMA numbers obtained. Shipping labels printed.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-08T13:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-08T14:00:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 37,
    title: "Active Directory password reset automation",
    description: "Implement self-service password reset portal for Active Directory users to reduce helpdesk calls.",
    queue: "it-support",
    status: "Open",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["active-directory", "automation", "password"],
    requesterName: "IT Manager",
    requesterEmail: "itmanager@example.com",
    location: "HQ",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-25",
    category: "User Management",
    subcategory: "Active Directory",
    internalNotes: "Research self-service password reset solutions.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T08:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 38,
    title: "Laptop won't connect to corporate WiFi",
    description: "User laptop can see the WiFi network but fails to authenticate. Other devices work fine.",
    queue: "it-support",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "High",
    tags: ["wifi", "authentication", "troubleshooting"],
    requesterName: "Michael Brown",
    requesterEmail: "michael.brown@example.com",
    location: "HQ - 4th Floor",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-09",
    category: "Networking",
    subcategory: "Wireless",
    internalNotes: "Check WiFi profile settings and certificate validity.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T08:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T09:00:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 39,
    title: "Microsoft Office activation issue",
    description: "Office 365 showing 'Product Unlicensed' message despite valid subscription.",
    queue: "it-applications",
    status: "Resolved",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["office365", "licensing", "activation"],
    requesterName: "Finance Team",
    requesterEmail: "finance@example.com",
    location: "HQ",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "",
    category: "Applications",
    subcategory: "Office 365",
    internalNotes: "Ran Office activation troubleshooter. Issue resolved.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T09:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T09:45:00", user: "System", action: "Status changed to Resolved" }
    ]
  },
  {
    id: 40,
    title: "Server monitoring alert - High CPU usage",
    description: "Application server CPU at 95% for last 30 minutes. Investigate and optimize if needed.",
    queue: "it-systems",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Critical",
    tags: ["server", "performance", "cpu"],
    requesterName: "Monitoring System",
    requesterEmail: "alerts@example.com",
    location: "Data Center A",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-09",
    category: "Infrastructure",
    subcategory: "Server",
    internalNotes: "Reviewing process list and recent deployments.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T10:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T10:05:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 41,
    title: "Desktop computer blue screen error",
    description: "Workstation experiencing BSOD with DRIVER_IRQL_NOT_LESS_OR_EQUAL error code.",
    queue: "it-support",
    status: "Open",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "High",
    tags: ["hardware", "bsod", "troubleshooting"],
    requesterName: "Accounting",
    requesterEmail: "accounting@example.com",
    location: "HQ - 3rd Floor",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-10",
    category: "Hardware",
    subcategory: "Desktop",
    internalNotes: "Run memory diagnostics and driver updates.",
    attachments: "minidump.dmp",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T10:30:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 42,
    title: "Antivirus software update deployment",
    description: "Deploy latest antivirus definition updates to all endpoints across organization.",
    queue: "it-security",
    status: "Pending",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "High",
    tags: ["antivirus", "security", "deployment"],
    requesterName: "IT Security",
    requesterEmail: "security@example.com",
    location: "All Locations",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-11",
    category: "Security",
    subcategory: "Endpoint Protection",
    internalNotes: "Schedule deployment during maintenance window.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T11:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T11:15:00", user: "System", action: "Status changed to Pending" }
    ]
  },
  {
    id: 43,
    title: "Email signature template update",
    description: "Create and deploy new company-wide email signature template with updated branding.",
    queue: "it-applications",
    status: "Open",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Low",
    tags: ["email", "branding", "template"],
    requesterName: "Marketing",
    requesterEmail: "marketing@example.com",
    location: "HQ",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-16",
    category: "Applications",
    subcategory: "Email",
    internalNotes: "Coordinate with marketing for design approval.",
    attachments: "signature-template.html",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T11:30:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 44,
    title: "Zoom meeting room equipment setup",
    description: "Configure new Zoom Room in Conference Room D with camera, microphone, and display.",
    queue: "it-support",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["zoom", "conferencing", "av"],
    requesterName: "Facilities",
    requesterEmail: "facilities@example.com",
    location: "HQ - Conference Room D",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-12",
    category: "Applications",
    subcategory: "Conferencing",
    internalNotes: "Equipment arrived. Installation in progress.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T12:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T13:00:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 45,
    title: "Network printer queue stuck",
    description: "Print jobs queued but not printing. Printer shows online but won't process jobs.",
    queue: "it-support",
    status: "Resolved",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["printer", "network", "troubleshooting"],
    requesterName: "HR Department",
    requesterEmail: "hr@example.com",
    location: "HQ - 1st Floor",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "",
    category: "Hardware",
    subcategory: "Printer",
    internalNotes: "Cleared print queue and restarted print spooler service.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T13:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T14:00:00", user: "System", action: "Status changed to Resolved" }
    ]
  },
  {
    id: 46,
    title: "Outlook calendar sync issues with mobile",
    description: "Calendar events not syncing between Outlook desktop and mobile app.",
    queue: "it-applications",
    status: "Open",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["outlook", "calendar", "sync"],
    requesterName: "Executive Team",
    requesterEmail: "executives@example.com",
    location: "HQ",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-10",
    category: "Applications",
    subcategory: "Outlook",
    internalNotes: "Check ActiveSync settings and mailbox permissions.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T14:30:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 47,
    title: "Software license compliance audit",
    description: "Conduct quarterly software license compliance audit for all IT applications.",
    queue: "it-applications",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["licensing", "compliance", "audit"],
    requesterName: "IT Manager",
    requesterEmail: "itmanager@example.com",
    location: "HQ",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-20",
    category: "Applications",
    subcategory: "License Management",
    internalNotes: "Generate inventory report from asset management system.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T15:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-09T15:30:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 48,
    title: "USB ports not working on laptop",
    description: "All USB ports on laptop stopped functioning. Tried different devices with same result.",
    queue: "it-support",
    status: "Open",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "High",
    tags: ["hardware", "usb", "laptop"],
    requesterName: "Sales Team",
    requesterEmail: "sales@example.com",
    location: "Remote",
    createdDate: "2026-01-09",
    updatedDate: "2026-01-09",
    dueDate: "2026-01-11",
    category: "Hardware",
    subcategory: "Laptop",
    internalNotes: "Check USB controller drivers and BIOS settings.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-09T15:45:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 49,
    title: "Database backup verification failure",
    description: "Automated backup verification for customer database failed. Investigate backup integrity.",
    queue: "it-systems",
    status: "Critical",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Critical",
    tags: ["database", "backup", "verification"],
    requesterName: "Database Admin",
    requesterEmail: "dba@example.com",
    location: "Data Center B",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "2026-01-10",
    category: "Infrastructure",
    subcategory: "Database",
    internalNotes: "Run manual backup and verify restore capability.",
    attachments: "backup-log.txt",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T07:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 50,
    title: "Remote desktop connection timeout",
    description: "Remote users unable to connect via RDP. Connection times out during authentication.",
    queue: "it-networking",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "High",
    tags: ["rdp", "remote", "networking"],
    requesterName: "Remote Workers",
    requesterEmail: "remote@example.com",
    location: "Remote",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "2026-01-10",
    category: "Networking",
    subcategory: "Remote Access",
    internalNotes: "Check RDP gateway and firewall rules.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T08:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-10T08:15:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 51,
    title: "Group policy not applying to workstations",
    description: "New GPO settings not applying to domain-joined computers despite force update attempts.",
    queue: "it-systems",
    status: "Open",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["group-policy", "active-directory", "troubleshooting"],
    requesterName: "IT Operations",
    requesterEmail: "ops@example.com",
    location: "HQ",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "2026-01-12",
    category: "Infrastructure",
    subcategory: "Active Directory",
    internalNotes: "Review GPO inheritance and replication status.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T09:00:00", user: "System", action: "Ticket created" }
    ]
  },
  {
    id: 52,
    title: "Web browser crashing repeatedly",
    description: "Chrome browser crashes every 10-15 minutes on multiple user computers.",
    queue: "it-support",
    status: "Resolved",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["browser", "chrome", "troubleshooting"],
    requesterName: "Customer Service",
    requesterEmail: "customerservice@example.com",
    location: "HQ - 2nd Floor",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "",
    category: "Applications",
    subcategory: "Web Browser",
    internalNotes: "Disabled problematic extension. Issue resolved.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T10:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-10T10:45:00", user: "System", action: "Status changed to Resolved" }
    ]
  },
  {
    id: 53,
    title: "Shared mailbox permissions request",
    description: "Add three users to support@example.com shared mailbox with full access permissions.",
    queue: "it-applications",
    status: "Resolved",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Low",
    tags: ["email", "permissions", "shared-mailbox"],
    requesterName: "Customer Support",
    requesterEmail: "support@example.com",
    location: "HQ",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "",
    category: "Applications",
    subcategory: "Email",
    internalNotes: "Permissions granted via Exchange Admin Center.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T11:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-10T11:20:00", user: "System", action: "Status changed to Resolved" }
    ]
  },
  {
    id: 54,
    title: "File server disk space warning",
    description: "File server at 85% capacity. Need to clean up old files or expand storage.",
    queue: "it-systems",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Medium",
    tags: ["storage", "file-server", "capacity"],
    requesterName: "IT Operations",
    requesterEmail: "ops@example.com",
    location: "Data Center A",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "2026-01-14",
    category: "Infrastructure",
    subcategory: "Storage",
    internalNotes: "Running disk cleanup and identifying large files.",
    attachments: "storage-report.xlsx",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T12:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-10T12:30:00", user: "System", action: "Status changed to In Progress" }
    ]
  },
  {
    id: 55,
    title: "Multi-factor authentication enrollment help",
    description: "User needs assistance enrolling in MFA system for secure access to applications.",
    queue: "it-security",
    status: "Closed",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "Low",
    tags: ["mfa", "security", "enrollment"],
    requesterName: "New Employee",
    requesterEmail: "newuser@example.com",
    location: "HQ",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "",
    category: "Security",
    subcategory: "Identity",
    internalNotes: "Walked user through enrollment process. Completed successfully.",
    attachments: "",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T13:00:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-10T13:30:00", user: "System", action: "Status changed to Resolved" },
      { timestamp: "2026-01-10T14:00:00", user: "System", action: "Status changed to Closed" }
    ]
  },
  {
    id: 56,
    title: "Application performance optimization",
    description: "Internal CRM application loading slowly. Users experiencing 30+ second page load times.",
    queue: "it-applications",
    status: "In Progress",
    assigned: true,
    assignedTo: "Ercell Green",
    priority: "High",
    tags: ["performance", "optimization", "crm"],
    requesterName: "Sales Operations",
    requesterEmail: "salesops@example.com",
    location: "HQ",
    createdDate: "2026-01-10",
    updatedDate: "2026-01-10",
    dueDate: "2026-01-13",
    category: "Applications",
    subcategory: "CRM",
    internalNotes: "Analyzing application logs and database queries.",
    attachments: "performance-metrics.pdf",
    images: [],
    comments: [],
    activity: [
      { timestamp: "2026-01-10T14:30:00", user: "System", action: "Ticket created" },
      { timestamp: "2026-01-10T15:00:00", user: "System", action: "Status changed to In Progress" }
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
let selectedFilter = "all";
let selectedPriorityFilter = "all";
let selectedTechnician = "all";
let viewMode = "cards";
let editingTicketId = null;
let currentUser = localStorage.getItem("currentUser") || "Unknown User";
currentUserRole = localStorage.getItem("currentUserRole") || "Technician";
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
    // If no permissions set or user has admin access, return all active queues
    if (!currentUserPermissions.queues || currentUserPermissions.queues.includes("*")) {
        const allQueues = getActiveQueues();
        return allQueues.map(q => q.id);
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
const currentUserSelect = document.getElementById("current-user-select");

const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        // Clear all authentication data
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUserRole");
        localStorage.removeItem("currentUsername");
        localStorage.removeItem("currentUserId");
        localStorage.removeItem("currentUserPermissions");
        window.location.href = "tech-login.html";
    });
}

// New/Edit ticket modal (top bar button removed - using queue buttons now)
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
const newTicketSessionTime = document.getElementById("new-ticket-session-time");
const newUseSessionBtn = document.getElementById("new-use-session-btn");

// Toast
const toast = document.getElementById("toast");

// Ticket detail modal
const modal = document.getElementById("ticket-modal");
const modalClose = document.getElementById("modal-close");
const modalEditBtn = document.getElementById("modal-edit-btn");
const modalStatusSelect = document.getElementById("modal-status-select");
const modalAssignedSelect = document.getElementById("modal-assigned-select");
const modalQueueSelect = document.getElementById("modal-queue-select");
const modalDeleteBtn = document.getElementById("modal-delete-btn");
const modalTime = document.getElementById("modal-time");

// Comments & Activity DOM
const modalCommentsList = document.getElementById("modal-comments-list");
const modalCommentText = document.getElementById("modal-comment-text");
const modalSaveBtn = document.getElementById("modal-save-btn");

// Time tracking DOM elements
const modalSaveCloseBtn = document.getElementById("modal-save-close-btn");
const modalSessionTime = document.getElementById("modal-session-time");
const modalManualTimeBtn = document.getElementById("modal-manual-time-btn");

// Manual time entry modal DOM elements
const manualTimeModal = document.getElementById("manual-time-modal");
const manualTimeClose = document.getElementById("manual-time-close");
const manualTimeCancel = document.getElementById("manual-time-cancel");
const manualTimeSave = document.getElementById("manual-time-save");
const manualTimeDate = document.getElementById("manual-time-date");
const manualTimeTime = document.getElementById("manual-time-time");
const manualHoursInput = document.getElementById("manual-hours-input");
const manualMinutesInput = document.getElementById("manual-minutes-input");

// Time tracking state
let timeTrackingInterval = null;
let sessionStartTime = null;
let currentTrackingTicketId = null;
let sessionElapsedSeconds = 0;

// New ticket session time tracking
let newTicketTimeInterval = null;
let newTicketSessionStart = null;
let newTicketElapsedSeconds = 0;

// View mode state
let currentView = 'list'; // 'list' or 'board'

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
    if (!container) {
        return;
    }
    
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
        
        // Create main queue button
        if (hasAccess) {
            const mainBtn = document.createElement("button");
            mainBtn.className = "queue-btn";
            mainBtn.dataset.queue = queue.id;
            mainBtn.textContent = `${queue.icon || '📋'} ${queue.name}`;
            mainBtn.style.borderLeftColor = queue.color;
            
            // Special handling for Information Technology queue with sub-queues
            if (queue.id === 'it' && subQueues.length > 0) {
                mainBtn.innerHTML = `${queue.icon || '📋'} ${queue.name} <span style="float:right">▾</span>`;
                mainBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const subGroup = queueGroup.querySelector('.queue-subgroup');
                    if (subGroup) {
                        const isOpen = subGroup.style.display !== 'none';
                        subGroup.style.display = isOpen ? 'none' : 'flex';
                        const arrow = mainBtn.querySelector('span');
                        if (arrow) arrow.textContent = isOpen ? '▸' : '▾';
                    }
                });
            } else {
                mainBtn.addEventListener("click", () => {
                    selectedQueue = queue.id;
                    updateTickets();
                });
            }
            queueGroup.appendChild(mainBtn);
        }
        
        // Create sub-queue buttons if there are any
        if (subQueues.length > 0) {
            const subGroup = document.createElement("div");
            subGroup.className = "queue-subgroup";
            subGroup.style.marginTop = "8px";
            subGroup.style.display = queue.id === 'it' ? 'none' : 'flex'; // IT starts collapsed
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
    const queueConfig = getQueueConfig();
    renderQueueButtons();
    renderAdminQueueCheckboxes();
    renderAdmin(); // ensure existing users render on admin page load
    initSidebarDropdown();
    initTextToolbar();
    initCommentPasteHandler();
    
    // Initialize sidebar toggle
    const sidebarElement = document.getElementById("sidebar");
    const sidebarToggleBtn = document.getElementById("sidebar-toggle");
    if (sidebarToggleBtn && sidebarElement) {
        sidebarToggleBtn.addEventListener("click", () => {
            sidebarElement.classList.toggle("collapsed");
        });
    }
    
    // Initialize dark mode toggle
    const darkModeToggleElement = document.getElementById("dark-mode-toggle");
    
    // Load saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        if (darkModeToggleElement) {
            darkModeToggleElement.checked = true;
        }
    }
    
    if (darkModeToggleElement) {
        darkModeToggleElement.addEventListener("change", () => {
            if (darkModeToggleElement.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
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
// STATUS FILTER DROPDOWN
// -------------------------------
const statusFilter = document.getElementById('status-filter');
if (statusFilter) {
    statusFilter.addEventListener('change', () => {
        selectedFilter = statusFilter.value;
        updateTickets();
    });
}

// -------------------------------
// PRIORITY FILTER DROPDOWN
// -------------------------------
const prioritySelect = document.getElementById('priority-select');
if (prioritySelect) {
    prioritySelect.addEventListener('change', () => {
        selectedPriorityFilter = prioritySelect.value;
        updateTickets();
    });
}

// -------------------------------
// TECHNICIAN FILTER DROPDOWN
// -------------------------------
const technicianSelect = document.getElementById('technician-select');
if (technicianSelect) {
    technicianSelect.addEventListener('change', () => {
        selectedTechnician = technicianSelect.value;
        updateTickets();
    });
}

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
// VIEW DROPDOWN BUTTON (LIST/BOARD + CARDS/TABLE)
// -------------------------------
const viewDropdownBtn = document.getElementById('view-dropdown-btn');
const viewDropdownMenu = document.getElementById('view-dropdown-menu');

if (viewDropdownBtn && viewDropdownMenu) {
    // Toggle dropdown on button click
    viewDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Position the dropdown menu below the button
        const rect = viewDropdownBtn.getBoundingClientRect();
        viewDropdownMenu.style.top = `${rect.bottom + 4}px`;
        viewDropdownMenu.style.right = `${window.innerWidth - rect.right}px`;
        
        viewDropdownMenu.classList.toggle('show');
    });

    // Handle option selection
    const viewOptions = document.querySelectorAll('.view-option');
    viewOptions.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.view;
            if (value === 'board') {
                currentView = 'board';
                viewMode = 'cards';
            } else if (value === 'list-cards') {
                currentView = 'list';
                viewMode = 'cards';
            } else if (value === 'list-table') {
                currentView = 'list';
                viewMode = 'table';
            }
            
            // Close dropdown
            viewDropdownMenu.classList.remove('show');
            
            updateTickets();
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        viewDropdownMenu.classList.remove('show');
    });
}

// -------------------------------
// ZOOM CONTROLS
// -------------------------------
const zoomInBtn = document.getElementById('zoom-in-btn');
const zoomOutBtn = document.getElementById('zoom-out-btn');
const zoomLevelDisplay = document.getElementById('zoom-level');

let currentZoom = 100;
const zoomLevels = [75, 90, 100, 110, 125];

function updateZoom(newZoom) {
    currentZoom = newZoom;
    if (zoomLevelDisplay) {
        zoomLevelDisplay.textContent = currentZoom + '%';
    }
    
    const ticketList = document.getElementById('ticket-list');
    const ticketBoard = document.getElementById('ticket-board');
    
    // Remove all zoom classes
    zoomLevels.forEach(level => {
        if (ticketList) {
            ticketList.classList.remove('zoom-' + level);
        }
        if (ticketBoard) {
            ticketBoard.classList.remove('zoom-' + level);
        }
    });
    
    // Add current zoom class
    if (ticketList) {
        ticketList.classList.add('zoom-' + currentZoom);
    }
    if (ticketBoard) {
        ticketBoard.classList.add('zoom-' + currentZoom);
    }
}

if (zoomInBtn && zoomOutBtn) {
    zoomInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIndex = zoomLevels.indexOf(currentZoom);
        if (currentIndex < zoomLevels.length - 1) {
            updateZoom(zoomLevels[currentIndex + 1]);
        }
    });
    
    zoomOutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentIndex = zoomLevels.indexOf(currentZoom);
        if (currentIndex > 0) {
            updateZoom(zoomLevels[currentIndex - 1]);
        }
    });
    
    // Initialize zoom
    updateZoom(100);
}

// -------------------------------
// SIDEBAR TOGGLE & DARK MODE
// -------------------------------
// These are now initialized in DOMContentLoaded event handler above

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
    newStatus.value = "Open";
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
    if (newTimeHours) newTimeHours.value = "0";
    if (newTimeMinutes) newTimeMinutes.value = "0";
    
    // Start session time tracking for new ticket
    startNewTicketTimeTracking();
    
    showModal(newTicketModal);
}

// Top bar new ticket button removed - now using queue-specific buttons

// -------------------------------
// TEXT TOOLBAR FUNCTIONS
// -------------------------------
function initTextToolbar() {
    const toolbar = document.getElementById('text-toolbar');
    if (!toolbar) return;
    
    const buttons = toolbar.querySelectorAll('.text-tool-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const command = btn.dataset.command;
            
            if (command === 'createLink') {
                const url = prompt('Enter the URL:');
                if (url) {
                    document.execCommand(command, false, url);
                }
            } else {
                document.execCommand(command, false, null);
            }
            
            // Keep focus on contenteditable
            modalCommentText.focus();
        });
    });
}

function initCommentPasteHandler() {
    if (!modalCommentText) return;
    
    // Handle paste events to capture images
    modalCommentText.addEventListener('paste', (e) => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                e.preventDefault();
                const blob = items[i].getAsFile();
                const reader = new FileReader();
                reader.onload = (event) => {
                    commentImages.push(event.target.result);
                    renderCommentImages();
                };
                reader.readAsDataURL(blob);
            }
        }
    });
    
    // Add placeholder functionality for contenteditable
    modalCommentText.addEventListener('focus', () => {
        if (modalCommentText.textContent === '') {
            modalCommentText.innerHTML = '';
        }
    });
    
    modalCommentText.addEventListener('blur', () => {
        if (modalCommentText.textContent.trim() === '') {
            modalCommentText.innerHTML = '';
        }
    });
}

function renderCommentImages() {
    const gallery = document.getElementById('modal-comment-images');
    if (!gallery) return;
    
    gallery.innerHTML = '';
    commentImages.forEach((dataUrl, idx) => {
        const item = document.createElement('div');
        item.classList.add('image-gallery-item');
        item.style.position = 'relative';
        
        const img = document.createElement('img');
        img.src = dataUrl;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.style.cssText = 'position:absolute; top:4px; right:4px; background:red; color:white; border:none; border-radius:50%; width:24px; height:24px; cursor:pointer; font-size:16px; line-height:1;';
        removeBtn.addEventListener('click', () => {
            commentImages.splice(idx, 1);
            renderCommentImages();
        });
        
        item.appendChild(img);
        item.appendChild(removeBtn);
        gallery.appendChild(item);
    });
}

// Use Session Time button (for ticket modal)
// Use Session Time button (for new ticket modal)
if (newUseSessionBtn) {
    newUseSessionBtn.addEventListener('click', () => {
        const totalMinutes = Math.floor(newTicketElapsedSeconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        
        if (newTimeHours) newTimeHours.value = hours;
        if (newTimeMinutes) newTimeMinutes.value = minutes;
        
        showToast('Session time copied to initial time');
    });
}

// New Ticket Session Time Tracking Functions
function startNewTicketTimeTracking() {
    stopNewTicketTimeTracking();
    
    newTicketSessionStart = Date.now();
    newTicketElapsedSeconds = 0;
    
    if (newTicketSessionTime) {
        updateNewTicketSessionTimeDisplay();
        newTicketTimeInterval = setInterval(updateNewTicketSessionTimeDisplay, 1000);
    }
}

function stopNewTicketTimeTracking() {
    if (newTicketTimeInterval) {
        clearInterval(newTicketTimeInterval);
        newTicketTimeInterval = null;
    }
    newTicketSessionStart = null;
    newTicketElapsedSeconds = 0;
}

function updateNewTicketSessionTimeDisplay() {
    if (!newTicketSessionStart) return;
    
    const elapsed = Math.floor((Date.now() - newTicketSessionStart) / 1000);
    newTicketElapsedSeconds = elapsed;
    
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;
    
    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (newTicketSessionTime) {
        newTicketSessionTime.textContent = display;
    }
}

// -------------------------------
// TIME TRACKING EVENT LISTENERS
// -------------------------------
if (modalManualTimeBtn) {
    modalManualTimeBtn.addEventListener('click', () => {
        // Set defaults to current date and time
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().slice(0, 5);
        
        if (manualTimeDate) manualTimeDate.value = dateStr;
        if (manualTimeTime) manualTimeTime.value = timeStr;
        if (manualHoursInput) manualHoursInput.value = '';
        if (manualMinutesInput) manualMinutesInput.value = '';
        
        showModal(manualTimeModal);
    });
}

if (manualTimeClose) {
    manualTimeClose.addEventListener('click', () => hideModal(manualTimeModal));
}

if (manualTimeCancel) {
    manualTimeCancel.addEventListener('click', () => hideModal(manualTimeModal));
}

if (manualTimeSave) {
    manualTimeSave.addEventListener('click', () => {
        const id = parseInt(modal.dataset.ticketId);
        const t = tickets.find(t => t.id === id);
        if (!t) return;
        
        const hours = parseInt(manualHoursInput.value) || 0;
        const minutes = parseInt(manualMinutesInput.value) || 0;
        const totalMinutes = (hours * 60) + minutes;
        
        if (totalMinutes <= 0) {
            showToast('Please enter time duration');
            return;
        }
        
        // Create custom timestamp from date and time inputs
        const dateValue = manualTimeDate.value;
        const timeValue = manualTimeTime.value;
        const customTimestamp = new Date(`${dateValue}T${timeValue}`).toISOString();
        
        // Add to time entries
        t.timeEntries = Array.isArray(t.timeEntries) ? t.timeEntries : [];
        t.timeEntries.push({
            minutes: totalMinutes,
            by: currentUser,
            timestamp: customTimestamp,
            source: 'manual'
        });
        
        // Add activity log
        t.activity.push({
            timestamp: new Date().toISOString(),
            user: currentUser,
            action: `Time logged manually (${formatMinutes(totalMinutes)}) for ${dateValue} ${timeValue}`
        });
        
        // Update displays
        if (modalTime) {
            const total = getTotalMinutes(t);
            modalTime.textContent = `Total Time: ${formatMinutes(total)}`;
        }
        renderActivity(t);
        renderComments(t);
        
        hideModal(manualTimeModal);
        showToast('Manual time entry added');
    });
}

// Save Changes button
if (modalSaveBtn) {
    modalSaveBtn.addEventListener('click', () => {
        const id = parseInt(modal.dataset.ticketId);
        const t = tickets.find(t => t.id === id);
        if (!t) return;

        const now = new Date();
        const timestamp = now.toISOString();
        
        // Get comment text from contenteditable div
        const commentText = modalCommentText.innerHTML.trim();
        
        // Automatically use session time (convert seconds to minutes)
        const sessionMinutes = Math.floor(sessionElapsedSeconds / 60);
        
        // Check for status/assignee/queue changes
        const oldStatus = t.status;
        const oldAssigned = t.assignedTo;
        const oldQueue = t.queue;
        
        const newStatus = modalStatusSelect ? modalStatusSelect.value : t.status;
        const newAssigned = modalAssignedSelect ? modalAssignedSelect.value : t.assignedTo;
        const newQueue = modalQueueSelect ? modalQueueSelect.value : t.queue;
        
        // Track changes
        const changes = [];
        if (oldStatus !== newStatus) {
            changes.push(`Status changed from "${oldStatus}" to "${newStatus}"`);
            t.status = newStatus;
        }
        if (oldAssigned !== newAssigned) {
            changes.push(`Assigned changed from "${oldAssigned || 'Unassigned'}" to "${newAssigned || 'Unassigned'}"`);
            t.assignedTo = newAssigned;
        }
        if (oldQueue !== newQueue) {
            const oldQueueName = getQueueById(oldQueue)?.name || oldQueue;
            const newQueueName = getQueueById(newQueue)?.name || newQueue;
            changes.push(`Queue changed from "${oldQueueName}" to "${newQueueName}"`);
            t.queue = newQueue;
        }
        
        // Add comment if there's text or session time
        if (commentText || sessionMinutes > 0) {
            const imagesForComment = commentImages.length ? [...commentImages] : [];
            
            t.comments.push({
                author: currentUser,
                timestamp,
                text: commentText,
                images: imagesForComment,
                loggedMinutes: sessionMinutes
            });
            
            // Log time entry if session time exists
            if (sessionMinutes > 0) {
                if (!t.timeEntries) t.timeEntries = [];
                t.timeEntries.push({
                    by: currentUser,
                    timestamp,
                    minutes: sessionMinutes,
                    source: 'auto'
                });
            }
            
            t.activity.push({
                timestamp,
                user: currentUser,
                action: commentText ? "Comment added" : "Time logged"
            });
            
            // Clear comment input
            modalCommentText.innerHTML = "";
            commentImages = [];
            const commentGallery = document.getElementById('modal-comment-images');
            if (commentGallery) commentGallery.innerHTML = '';
        }
        
        // Log changes in comments
        if (changes.length > 0) {
            t.comments.push({
                author: currentUser,
                timestamp,
                text: `<em>${changes.join('<br>')}</em>`,
                images: [],
                loggedMinutes: 0
            });
            
            changes.forEach(change => {
                t.activity.push({
                    timestamp,
                    user: currentUser,
                    action: change
                });
            });
        }
        
        // Save to localStorage
        localStorage.setItem('tickets', JSON.stringify(tickets));
        
        // Update displays
        if (modalTime) {
            const total = getTotalMinutes(t);
            modalTime.textContent = `Total Time: ${formatMinutes(total)}`;
        }
        renderComments(t);
        
        // Reset session
        sessionElapsedSeconds = 0;
        sessionStartTime = Date.now();
        if (modalSessionTime) {
            modalSessionTime.textContent = '00:00:00';
        }
        
        showToast("Changes saved");
        renderTickets(); // Refresh ticket list to show status/queue changes
    });
}

if (modalSaveCloseBtn) {
    modalSaveCloseBtn.addEventListener('click', () => {
        const id = parseInt(modal.dataset.ticketId);
        const t = tickets.find(t => t.id === id);
        if (!t) return;

        const now = new Date();
        const timestamp = now.toISOString();
        
        // Get comment text from contenteditable div
        const commentText = modalCommentText.innerHTML.trim();
        
        // Automatically use session time (convert seconds to minutes)
        const sessionMinutes = Math.floor(sessionElapsedSeconds / 60);
        
        // Check for status/assignee/queue changes
        const oldStatus = t.status;
        const oldAssigned = t.assignedTo;
        const oldQueue = t.queue;
        
        const newStatus = modalStatusSelect ? modalStatusSelect.value : t.status;
        const newAssigned = modalAssignedSelect ? modalAssignedSelect.value : t.assignedTo;
        const newQueue = modalQueueSelect ? modalQueueSelect.value : t.queue;
        
        // Track changes
        const changes = [];
        if (oldStatus !== newStatus) {
            changes.push(`Status changed from "${oldStatus}" to "${newStatus}"`);
            t.status = newStatus;
        }
        if (oldAssigned !== newAssigned) {
            changes.push(`Assigned changed from "${oldAssigned || 'Unassigned'}" to "${newAssigned || 'Unassigned'}"`);
            t.assignedTo = newAssigned;
        }
        if (oldQueue !== newQueue) {
            const oldQueueName = getQueueById(oldQueue)?.name || oldQueue;
            const newQueueName = getQueueById(newQueue)?.name || newQueue;
            changes.push(`Queue changed from "${oldQueueName}" to "${newQueueName}"`);
            t.queue = newQueue;
        }
        
        // Add comment if there's text or session time
        if (commentText || sessionMinutes > 0) {
            const imagesForComment = commentImages.length ? [...commentImages] : [];
            
            t.comments.push({
                author: currentUser,
                timestamp,
                text: commentText,
                images: imagesForComment,
                loggedMinutes: sessionMinutes
            });
            
            // Log time entry if session time exists
            if (sessionMinutes > 0) {
                if (!t.timeEntries) t.timeEntries = [];
                t.timeEntries.push({
                    by: currentUser,
                    timestamp,
                    minutes: sessionMinutes,
                    source: 'auto'
                });
            }
            
            t.activity.push({
                timestamp,
                user: currentUser,
                action: commentText ? "Comment added" : "Time logged"
            });
        }
        
        // Log changes in comments
        if (changes.length > 0) {
            t.comments.push({
                author: currentUser,
                timestamp,
                text: `<em>${changes.join('<br>')}</em>`,
                images: [],
                loggedMinutes: 0
            });
            
            changes.forEach(change => {
                t.activity.push({
                    timestamp,
                    user: currentUser,
                    action: change
                });
            });
        }
        
        // Save to localStorage
        localStorage.setItem('tickets', JSON.stringify(tickets));
        
        updateTickets();
        hideModal(modal);
        showToast("Changes saved");
    });
}

// -------------------------------
// CLOSE MODALS
// -------------------------------
if (newTicketClose) newTicketClose.addEventListener("click", () => hideModal(newTicketModal));
if (newTicketCancel) newTicketCancel.addEventListener("click", () => hideModal(newTicketModal));
if (modalClose) modalClose.addEventListener("click", () => hideModal(modal));

window.addEventListener("click", e => {
    if (newTicketModal && e.target === newTicketModal) hideModal(newTicketModal);
    if (modal && e.target === modal) hideModal(modal);
    if (manualTimeModal && e.target === manualTimeModal) hideModal(manualTimeModal);
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
        return `
        <div class="admin-user-row" data-idx="${idx}" style="display:flex;align-items:center;gap:12px;padding:8px;border-bottom:1px solid #eee;">
            <div style="flex:1;">
                <strong>${u.name}</strong> 
                <div style="font-size:0.85rem;color:#666">${u.username} • ${u.role}</div>
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
            const r = document.getElementById('admin-new-role');
            if (!u || !p || !n || !r) return;
            u.value = user.username || '';
            p.value = '';
            n.value = user.name || '';
            r.value = user.role || 'tech';

            // set queues
            const queueCheckboxes = document.querySelectorAll('.admin-new-queue-checkbox');
            const userQueues = user.permissions?.queues || [];
            const isAdmin = userQueues.includes('*') || user.role === 'admin';
            queueCheckboxes.forEach(cb => {
                cb.checked = isAdmin ? true : userQueues.includes(cb.value);
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
        const isAdmin = adminRoleSelect.value === 'admin';
        
        // Auto-check all permissions
        const permissionCheckboxes = [
            'admin-new-can-create',
            'admin-new-can-edit',
            'admin-new-can-delete',
            'admin-new-can-reports',
            'admin-new-can-export'
        ];
        
        permissionCheckboxes.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) checkbox.checked = isAdmin;
        });
        
        // Auto-check all queues
        const queueCheckboxes = document.querySelectorAll('.admin-new-queue-checkbox');
        queueCheckboxes.forEach(cb => {
            cb.checked = isAdmin;
        });
    });
}

if(adminAddBtn){
    adminAddBtn.addEventListener('click', () => {
        const u = document.getElementById('admin-new-username');
        const p = document.getElementById('admin-new-password');
        const n = document.getElementById('admin-new-name');
        const r = document.getElementById('admin-new-role');
        if(!u || !p || !n || !r) return;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const isEdit = editingUserIndex !== null;
        if(!u.value.trim()) { alert('Username required'); return; }
        if(!isEdit && !p.value.trim()) { alert('Username and password required'); return; }
        
        // Collect queue assignments
        const queueCheckboxes = document.querySelectorAll('.admin-new-queue-checkbox');
        const assignedQueues = Array.from(queueCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        // If admin role, grant all queues
        const isAdmin = r.value.trim() === 'admin';
        const queues = isAdmin ? ['*'] : assignedQueues;
        
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
            existing.role = r.value.trim() || 'tech';
            existing.permissions = permissions;
            // Only update password if provided
            if (p.value.trim()) {
                existing.password = p.value.trim();
            }
        } else {
            users.push({ 
                username: u.value.trim(), 
                password: p.value.trim(), 
                name: n.value.trim() || u.value.trim(), 
                role: r.value.trim() || 'tech', 
                active: true,
                permissions: permissions
            });
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        u.value = p.value = n.value = '';
        editingUserIndex = null;
        adminAddBtn.textContent = 'Add User';
        
        // Reset checkboxes
        queueCheckboxes.forEach(cb => cb.checked = false);
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
    
    // Open the newly created ticket and start time tracking
    openTicketModal(ticket);
});

// -------------------------------
// OPEN TICKET DETAIL MODAL
// -------------------------------
function openTicketModal(ticket) {
    document.getElementById("modal-title").textContent = ticket.title;
    document.getElementById("modal-id").textContent = `Ticket ID: ${ticket.id}`;
    
    // Populate status dropdown
    if (modalStatusSelect) {
        modalStatusSelect.value = ticket.status || "Open";
    }
    
    // Populate assignee dropdown
    if (modalAssignedSelect) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        modalAssignedSelect.innerHTML = '<option value="">Unassigned</option>';
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.username;
            option.textContent = user.name || user.username;
            modalAssignedSelect.appendChild(option);
        });
        modalAssignedSelect.value = ticket.assignedTo || "";
    }
    
    // Populate queue dropdown
    if (modalQueueSelect) {
        const queues = getActiveQueues();
        modalQueueSelect.innerHTML = '';
        queues.forEach(q => {
            const option = document.createElement('option');
            option.value = q.id;
            option.textContent = `${q.icon || '📋'} ${q.name}`;
            modalQueueSelect.appendChild(option);
        });
        modalQueueSelect.value = ticket.queue || "it";
    }
    
    document.getElementById("modal-priority").textContent = `Priority: ${ticket.priority}`;
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

    modal.dataset.ticketId = ticket.id;

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

    // reset any in-progress comment images and inputs when opening a ticket
    commentImages = [];
    const commentGallery = document.getElementById('modal-comment-images');
    if (commentGallery) commentGallery.innerHTML = '';
    if (modalCommentText) modalCommentText.innerHTML = '';
    
    // Update total time display
    if (modalTime) {
        const total = getTotalMinutes(ticket);
        modalTime.textContent = `Total Time: ${formatMinutes(total)}`;
    }

    // Display custom field values
    displayCustomFields(ticket);

    // Start time tracking for this ticket
    startTimeTracking(ticket.id);

    renderComments(ticket);

    showModal(modal);
}

// -------------------------------
// RENDER COMMENTS
// -------------------------------
function renderComments(ticket) {
    modalCommentsList.innerHTML = "";

    // Get all comments and activity entries
    const items = [];
    
    // Add comments
    if (ticket.comments && ticket.comments.length > 0) {
        ticket.comments.forEach(c => {
            items.push({
                type: 'comment',
                data: c,
                timestamp: c.timestamp
            });
        });
    }
    
    // Add activity log entries
    if (ticket.activity && ticket.activity.length > 0) {
        ticket.activity.forEach(a => {
            items.push({
                type: 'activity',
                data: a,
                timestamp: a.timestamp
            });
        });
    }
    
    if (items.length === 0) {
        modalCommentsList.innerHTML = "<p>No comments or activity yet.</p>";
        return;
    }

    // Sort by timestamp, newest first
    const sorted = items.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    sorted.forEach(item => {
        const div = document.createElement("div");
        
        if (item.type === 'comment') {
            const c = item.data;
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
                timeP.style.fontSize = "13px";
                timeP.style.color = "#0078ff";
                timeP.style.marginTop = "8px";
                timeP.style.fontWeight = "600";
                timeP.innerHTML = `⏱ Time Worked: ${formatMinutes(c.loggedMinutes)}`;
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
        } else if (item.type === 'activity') {
            const a = item.data;
            div.classList.add("comment-item");
            div.style.background = "#f9f9f9";
            div.style.borderLeft = "3px solid #999";
            div.style.padding = "8px 12px";
            const dateStr = new Date(a.timestamp).toLocaleString();
            div.innerHTML = `
                <div style="font-size:0.9rem; color:#666;">
                    <strong>${a.user}</strong> - ${a.action} <span style="font-size:0.85rem; color:#999; margin-left:8px;">${dateStr}</span>
                </div>
            `;
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
// Comments are now saved via Save Changes button

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

    // Stop tracking on current ticket and save time
    stopTimeTracking(true);

    hideModal(modal);
    showModal(newTicketModal);
});

// Status, assign, and queue changes removed - functionality moved to Edit Ticket

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
    const ticketListEl = document.getElementById('ticket-list');
    const ticketBoardEl = document.getElementById('ticket-board');
    
    if (ticketListEl) ticketListEl.innerHTML = "";
    if (ticketBoardEl) ticketBoardEl.innerHTML = "";

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
            selectedFilter === "all" ||
            (selectedFilter === "open" && (t.status === "Open" || t.status === "open")) ||
            (selectedFilter === "in-progress" && (t.status === "In Progress" || t.status === "in-progress")) ||
            (selectedFilter === "pending" && (t.status === "Pending" || t.status === "pending")) ||
            (selectedFilter === "resolved" && (t.status === "Resolved" || t.status === "resolved")) ||
            (selectedFilter === "closed" && (t.status === "Closed" || t.status === "closed")) ||
            (selectedFilter === "assigned" && t.assigned === true) ||
            (selectedFilter === "unassigned" && t.assigned === false);

        // Priority filter
        const priorityMatch =
            selectedPriorityFilter === "all" ||
            t.priority === selectedPriorityFilter;

        // Technician filter
        const technicianMatch =
            selectedTechnician === "all" ||
            (selectedTechnician === "unassigned" && (!t.assigned || !t.assignedTo)) ||
            (selectedTechnician !== "unassigned" && t.assignedTo === selectedTechnician);

        // Search filter
        const searchMatch = searchInput
            ? t.title.toLowerCase().includes(searchInput.value.toLowerCase())
            : true;

        return queueMatch && filterMatch && priorityMatch && technicianMatch && searchMatch;
    });

    // SORTING
    if (sortSelect && sortSelect.value !== 'all') {
        const statusOrder = { 'Open': 1, 'In Progress': 2, 'Pending': 3, 'Resolved': 4, 'Closed': 5 };
        
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
            case "status-open":
                filtered.sort((a, b) => {
                    if (a.status === 'Open' && b.status !== 'Open') return -1;
                    if (a.status !== 'Open' && b.status === 'Open') return 1;
                    return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
                });
                break;
            case "status-progress":
                filtered.sort((a, b) => {
                    if (a.status === 'In Progress' && b.status !== 'In Progress') return -1;
                    if (a.status !== 'In Progress' && b.status === 'In Progress') return 1;
                    return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
                });
                break;
            case "status-pending":
                filtered.sort((a, b) => {
                    if (a.status === 'Pending' && b.status !== 'Pending') return -1;
                    if (a.status !== 'Pending' && b.status === 'Pending') return 1;
                    return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
                });
                break;
            case "status-resolved":
                filtered.sort((a, b) => {
                    if (a.status === 'Resolved' && b.status !== 'Resolved') return -1;
                    if (a.status !== 'Resolved' && b.status === 'Resolved') return 1;
                    return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
                });
                break;
            case "status-closed":
                filtered.sort((a, b) => {
                    if (a.status === 'Closed' && b.status !== 'Closed') return -1;
                    if (a.status !== 'Closed' && b.status === 'Closed') return 1;
                    return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
                });
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

    // RENDER based on current view
    if (currentView === 'board') {
        if (ticketListEl) ticketListEl.style.display = 'none';
        if (ticketBoardEl) {
            ticketBoardEl.style.display = 'flex';
            renderBoard(filtered);
        }
    } else {
        if (ticketBoardEl) ticketBoardEl.style.display = 'none';
        if (ticketListEl) {
            ticketListEl.style.display = 'block';
            
            if (filtered.length === 0) {
                ticketListEl.innerHTML = "<p>No tickets found.</p>";
                return;
            }

            if (viewMode === "cards") {
                renderCards(filtered, ticketListEl);
            } else {
                renderTable(filtered, ticketListEl);
            }
        }
    }
}

// -------------------------------
// RENDER CARDS
// -------------------------------
function renderCards(ticketsToRender, container) {
    container.innerHTML = ""; // Clear existing content
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
        container.appendChild(card);
    });
}

// -------------------------------
// RENDER TABLE
// -------------------------------
function renderTable(ticketsToRender, container) {
    container.innerHTML = ""; // Clear existing content
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

    container.appendChild(table);
}

// -------------------------------
// RENDER BOARD VIEW
// -------------------------------
function renderBoard(ticketsToRender) {
    const ticketBoardEl = document.getElementById('ticket-board');
    if (!ticketBoardEl) return;
    
    ticketBoardEl.innerHTML = '';
    
    // Define status columns
    const statuses = ['Open', 'In Progress', 'Pending', 'Resolved', 'Closed'];
    
    statuses.forEach(status => {
        // Filter tickets for this status (case-insensitive)
        const statusTickets = ticketsToRender.filter(t => 
            t.status && t.status.toLowerCase() === status.toLowerCase()
        );
        
        // Create column
        const column = document.createElement('div');
        column.className = 'board-column';
        column.setAttribute('data-status', status);
        
        // Column header
        const header = document.createElement('div');
        header.className = 'board-column-header';
        header.innerHTML = `
            <div class="board-column-title">${status}</div>
            <div class="board-column-count">${statusTickets.length}</div>
        `;
        
        // Column cards container
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'board-column-cards';
        
        // Add cards
        statusTickets.forEach(t => {
            const card = document.createElement('div');
            card.className = 'board-card';
            card.setAttribute('data-status', status);
            
            const priorityClass = `priority-${t.priority.toLowerCase()}`;
            
            card.innerHTML = `
                <div class="board-card-title">${t.title}</div>
                <div class="board-card-meta">
                    <div class="board-card-id">#${t.id}</div>
                    <div>${formatQueueTitle(t.queue)}</div>
                    <div class="board-card-assigned">
                        👤 ${t.assignedTo || 'Unassigned'}
                    </div>
                    <div>⏱ ${formatMinutes(getTotalMinutes(t))}</div>
                </div>
                <div class="board-card-priority ${priorityClass}">${t.priority}</div>
            `;
            
            card.addEventListener('click', () => openTicketModal(t));
            cardsContainer.appendChild(card);
        });
        
        column.appendChild(header);
        column.appendChild(cardsContainer);
        ticketBoardEl.appendChild(column);
    });
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
    
    // Stop time tracking when closing ticket modal
    if (el === modal) {
        stopTimeTracking(true); // true = save time
    }
    
    // Stop new ticket time tracking when closing new ticket modal
    if (el === newTicketModal) {
        stopNewTicketTimeTracking();
    }
}

// -------------------------------
// TIME TRACKING FUNCTIONS
// -------------------------------
function startTimeTracking(ticketId) {
    // Stop any existing tracking
    stopTimeTracking(false);
    
    currentTrackingTicketId = ticketId;
    sessionStartTime = Date.now();
    sessionElapsedSeconds = 0;
    
    if (modalSessionTime) {
        updateSessionTimeDisplay();
        timeTrackingInterval = setInterval(updateSessionTimeDisplay, 1000);
    }
}

function stopTimeTracking(shouldSave) {
    if (timeTrackingInterval) {
        clearInterval(timeTrackingInterval);
        timeTrackingInterval = null;
    }
    
    if (shouldSave && currentTrackingTicketId && sessionElapsedSeconds > 0) {
        saveTrackedTime();
    }
    
    sessionStartTime = null;
    sessionElapsedSeconds = 0;
    currentTrackingTicketId = null;
}

function updateSessionTimeDisplay() {
    if (!sessionStartTime) return;
    
    sessionElapsedSeconds = Math.floor((Date.now() - sessionStartTime) / 1000);
    
    if (modalSessionTime) {
        const hours = Math.floor(sessionElapsedSeconds / 3600);
        const minutes = Math.floor((sessionElapsedSeconds % 3600) / 60);
        const seconds = sessionElapsedSeconds % 60;
        modalSessionTime.textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

function saveTrackedTime() {
    if (!currentTrackingTicketId) return;
    
    const ticket = tickets.find(t => t.id === currentTrackingTicketId);
    if (!ticket) return;
    
    // Always use auto-tracked time
    const minutesToLog = Math.floor(sessionElapsedSeconds / 60);
    
    if (minutesToLog > 0) {
        const timestamp = new Date().toISOString();
        
        // Initialize timeEntries if needed
        if (!Array.isArray(ticket.timeEntries)) {
            ticket.timeEntries = [];
        }
        
        // Add time entry
        ticket.timeEntries.push({
            minutes: minutesToLog,
            by: currentUser,
            timestamp: timestamp,
            source: 'auto-tracking'
        });
        
        // Log activity
        ticket.activity.push({
            timestamp: timestamp,
            user: currentUser,
            action: `Auto-tracked ${formatMinutes(minutesToLog)}`
        });
        
        // Save to localStorage
        localStorage.setItem('seco_tickets', JSON.stringify(tickets));
        
        showToast(`Time logged: ${formatMinutes(minutesToLog)}`);
    }
}

function displayTimeByTechnician(ticket) {
    if (!modalTimeByTech) return;
    
    const entries = Array.isArray(ticket.timeEntries) ? ticket.timeEntries : [];
    
    // Group by technician
    const timeByTech = {};
    entries.forEach(entry => {
        const tech = entry.by || 'Unknown';
        if (!timeByTech[tech]) {
            timeByTech[tech] = 0;
        }
        timeByTech[tech] += entry.minutes || 0;
    });
    
    // Display
    if (Object.keys(timeByTech).length === 0) {
        modalTimeByTech.innerHTML = '<p style=\"margin:0; color:#666; font-size:0.9rem;\">No time logged yet</p>';
    } else {
        let html = '<div style=\"font-weight:600; margin-bottom:8px;\">Time by Technician:</div>';
        html += '<div style=\"display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:8px;\">';
        
        Object.entries(timeByTech).forEach(([tech, minutes]) => {
            html += `
                <div style=\"padding:8px; background:white; border-radius:6px; border:1px solid #e5e7eb;\">
                    <div style=\"font-weight:500; color:#003366;\">${tech}</div>
                    <div style=\"color:#0078ff; font-size:1.1rem;\">${formatMinutes(minutes)}</div>
                </div>
            `;
        });
        
        html += '</div>';
        modalTimeByTech.innerHTML = html;
    }
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

// Old timer buttons removed - using auto-tracking now