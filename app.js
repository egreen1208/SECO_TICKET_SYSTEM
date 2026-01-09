// -------------------------------
// SAMPLE TICKET DATA
// -------------------------------

const tickets = [
  {
    id: 1,
    title: "Fix broken light in hallway",
    description: "Light is out in hallway near break room. LED fixture appears to be faulty. Need to order replacement and schedule installation.",
    queue: "building-grounds",
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
// STATE VARIABLES & DOM HOOKS
// -------------------------------
let selectedQueue = null;
let selectedFilter = "open";
let selectedPriorityFilter = "all";
let viewMode = "cards";
let editingTicketId = null;
let currentUser = localStorage.getItem("currentUser") || "System";

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
const modalDeleteBtn = document.getElementById("modal-delete-btn");

// Comments & Activity DOM
const modalCommentsList = document.getElementById("modal-comments-list");
const modalCommentText = document.getElementById("modal-comment-text");
const modalCommentAdd = document.getElementById("modal-comment-add");
const modalActivityList = document.getElementById("modal-activity-list");

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
// QUEUE SELECTION
// -------------------------------
document.querySelectorAll(".queue-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        selectedQueue = btn.dataset.queue;
        updateTickets();
    });
});

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
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

// -------------------------------
// DARK MODE TOGGLE
// -------------------------------
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

// -------------------------------
// VIEW MODE TOGGLE
// -------------------------------
viewToggle.addEventListener("click", () => {
    viewMode = viewMode === "cards" ? "table" : "cards";
    viewToggle.textContent = `View: ${viewMode === "cards" ? "Cards" : "Table"}`;
    updateTickets();
});

// -------------------------------
// NEW TICKET MODAL OPEN
// -------------------------------
newTicketBtn.addEventListener("click", () => {
    editingTicketId = null;
    newTicketTitle.textContent = "Create New Ticket";
    newTicketSubmit.textContent = "Create Ticket";
    newTicketError.textContent = "";
    newTicketForm.reset();
    newPriority.value = "Medium";
    newStatus.value = "open";
    newAssignedTo.value = "";
    // clear any previous description images when creating a new ticket
    newDescriptionImages = [];
    const newDescGallery = document.getElementById('new-description-images');
    if (newDescGallery) newDescGallery.innerHTML = '';
    showModal(newTicketModal);
});

// -------------------------------
// CLOSE MODALS
// -------------------------------
newTicketClose.addEventListener("click", () => hideModal(newTicketModal));
newTicketCancel.addEventListener("click", () => hideModal(newTicketModal));
modalClose.addEventListener("click", () => hideModal(modal));

window.addEventListener("click", e => {
    if (e.target === newTicketModal) hideModal(newTicketModal);
    if (e.target === modal) hideModal(modal);
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
    tickets.forEach(t => {
        byStatus[t.status] = (byStatus[t.status] || 0) + 1;
        byQueue[t.queue] = (byQueue[t.queue] || 0) + 1;
        byPriority[t.priority] = (byPriority[t.priority] || 0) + 1;
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
        prioEl.innerHTML = Object.keys(byPriority).map(k => `<div>${k}: <strong>${byPriority[k]}</strong></div>`).join('');
    }
}

function exportTicketsCSV(){
    const headers = ['id','title','createdDate','queue','status','assignedTo','priority','requesterName','location'];
    const rows = tickets.map(t => headers.map(h => `"${(t[h]||'').toString().replace(/"/g,'""')}"`).join(','));
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
    if(!listEl) return;
    if(users.length === 0){
        listEl.innerHTML = '<div>No users found.</div>';
        return;
    }
    const rows = users.map((u, idx) => `
        <div class="admin-user-row" data-idx="${idx}" style="display:flex;align-items:center;gap:12px;padding:8px;border-bottom:1px solid #eee;">
            <div style="flex:1;"><strong>${u.name}</strong> <div style="font-size:0.85rem;color:#666">${u.username} • ${u.role}</div></div>
            <div>
                <button class="btn-secondary admin-toggle-active">${u.active ? 'Deactivate' : 'Activate'}</button>
            </div>
        </div>
    `).join('');
    listEl.innerHTML = rows;

    listEl.querySelectorAll('.admin-toggle-active').forEach((btn,i) => {
        btn.addEventListener('click', () => {
            users[i].active = !users[i].active;
            localStorage.setItem('users', JSON.stringify(users));
            renderAdmin();
        });
    });
}

const exportBtn = document.getElementById('export-reports-csv');
if(exportBtn) exportBtn.addEventListener('click', exportTicketsCSV);

const adminAddBtn = document.getElementById('admin-add-user');
if(adminAddBtn){
    adminAddBtn.addEventListener('click', () => {
        const u = document.getElementById('admin-new-username');
        const p = document.getElementById('admin-new-password');
        const n = document.getElementById('admin-new-name');
        const r = document.getElementById('admin-new-role');
        if(!u || !p || !n || !r) return;
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if(!u.value.trim() || !p.value.trim()) { alert('Username and password required'); return; }
        users.push({ username: u.value.trim(), password: p.value.trim(), name: n.value.trim() || u.value.trim(), role: r.value.trim() || 'tech', active: true });
        localStorage.setItem('users', JSON.stringify(users));
        u.value = p.value = n.value = r.value = '';
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
        comments: [],
        activity: [
            {
                timestamp,
                user: currentUser,
                action: "Ticket created"
            }
        ]
    };

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

    // reset any in-progress comment images when opening a ticket
    commentImages = [];
    const commentGallery = document.getElementById('modal-comment-images');
    if (commentGallery) commentGallery.innerHTML = '';

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

    t.comments.push({
        author: currentUser,
        timestamp,
        text,
        images: imagesForComment
    });

    t.activity.push({
        timestamp,
        user: currentUser,
        action: "Comment added"
    });

    modalCommentText.value = "";
    // clear and re-render comment image gallery
    commentImages = [];
    const commentGallery = document.getElementById('modal-comment-images');
    if (commentGallery) commentGallery.innerHTML = '';
    renderComments(t);
    renderActivity(t);
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
    newQueue.value = t.queue;
    newPriority.value = t.priority;
    newStatus.value = t.status;
    newAssignedTo.value = t.assignedTo || "";
    newRequesterName.value = t.requesterName;
    newRequesterEmail.value = t.requesterEmail;
    newLocation.value = t.location;
    newDueDate.value = t.dueDate;
    newCategory.value = t.category;
    newSubcategory.value = t.subcategory;
    newAttachments.value = t.attachments;

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
// MAIN RENDER FUNCTION
// -------------------------------
function updateTickets() {
    ticketList.innerHTML = "";

    if (!selectedQueue) {
        ticketHeader.textContent = "Tickets (Select a Queue)";
        return;
    }

    // Format queue title
    let formattedQueue = selectedQueue
        .replace("it-all", "Information Technology")
        .replace("it-", "IT ")
        .replace("-", " ")
        .toUpperCase();

    ticketHeader.textContent = `Tickets — ${formattedQueue}`;

    // FILTERING
    let filtered = tickets.filter(t => {
        // Queue matching logic
        const queueMatch =
            selectedQueue === "it-all"
                ? t.queue.startsWith("it-")
                : t.queue === selectedQueue;

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
                filtered.sort((a, b) => a.queue.localeCompare(b.queue));
                break;
            case "queue-za":
                filtered.sort((a, b) => b.queue.localeCompare(a.queue));
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
                Created: ${t.createdDate}
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