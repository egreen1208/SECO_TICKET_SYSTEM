// -------------------------------
// SAMPLE TICKET DATA
// -------------------------------
const tickets = [
    {
        id: 1,
        title: "Fix broken light",
        description: "Light is out in hallway near break room.",
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
        comments: [],
        activity: [
            { timestamp: "2026-01-01T09:00:00", user: "System", action: "Ticket created" }
        ]
    },
    {
        id: 2,
        title: "Server reboot needed",
        description: "Production server showing high memory usage. Reboot during maintenance window.",
        queue: "it-systems",
        status: "assigned",
        assigned: true,
        assignedTo: "Peter Uhl",
        priority: "High",
        tags: ["server", "maintenance"],
        requesterName: "Operations Team",
        requesterEmail: "ops@example.com",
        location: "Data Center A",
        createdDate: "2026-01-03",
        updatedDate: "2026-01-03",
        dueDate: "",
        category: "Infrastructure",
        subcategory: "Server",
        internalNotes: "Coordinate with NOC before reboot.",
        attachments: "",
        comments: [
            {
                author: "Operations Team",
                timestamp: "2026-01-03T10:00:00",
                text: "Please schedule during Sunday maintenance window."
            }
        ],
        activity: [
            { timestamp: "2026-01-03T09:00:00", user: "System", action: "Ticket created" },
            { timestamp: "2026-01-03T10:30:00", user: "System", action: "Status changed to assigned" }
        ]
    },
    {
        id: 3,
        title: "New user onboarding",
        description: "Create accounts and grant access for new hire.",
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
        dueDate: "",
        category: "User Management",
        subcategory: "Onboarding",
        internalNotes: "",
        attachments: "",
        comments: [],
        activity: [
            { timestamp: "2026-01-04T09:00:00", user: "System", action: "Ticket created" }
        ]
    },
    {
        id: 4,
        title: "Firewall rule update",
        description: "Allow outbound traffic to new vendor IP range.",
        queue: "it-security",
        status: "closed",
        assigned: true,
        assignedTo: "Kim Clemmer",
        priority: "Critical",
        tags: ["firewall", "security"],
        requesterName: "Security Team",
        requesterEmail: "security@example.com",
        location: "Data Center B",
        createdDate: "2026-01-02",
        updatedDate: "2026-01-05",
        dueDate: "",
        category: "Security",
        subcategory: "Firewall",
        internalNotes: "Change approved by CISO.",
        attachments: "change-request-4921.pdf",
        comments: [],
        activity: [
            { timestamp: "2026-01-02T09:00:00", user: "System", action: "Ticket created" },
            { timestamp: "2026-01-05T11:00:00", user: "System", action: "Status changed to closed" }
        ]
    },
    {
        id: 5,
        title: "Air conditioner leak",
        description: "Water leaking from AC unit in lobby.",
        queue: "electrical-services",
        status: "open",
        assigned: false,
        assignedTo: "",
        priority: "High",
        tags: ["hvac", "leak"],
        requesterName: "Front Desk",
        requesterEmail: "frontdesk@example.com",
        location: "HQ Lobby",
        createdDate: "2026-01-05",
        updatedDate: "2026-01-05",
        dueDate: "",
        category: "Facilities",
        subcategory: "HVAC",
        internalNotes: "",
        attachments: "",
        comments: [],
        activity: [
            { timestamp: "2026-01-05T09:00:00", user: "System", action: "Ticket created" }
        ]
    },
    {
        id: 6,
        title: "VPN access request",
        description: "Enable VPN access for remote employee.",
        queue: "it-networking",
        status: "assigned",
        assigned: true,
        assignedTo: "Andrew Ayala",
        priority: "Medium",
        tags: ["vpn", "remote"],
        requesterName: "John Smith",
        requesterEmail: "john.smith@example.com",
        location: "Remote",
        createdDate: "2026-01-06",
        updatedDate: "2026-01-06",
        dueDate: "",
        category: "Networking",
        subcategory: "VPN",
        internalNotes: "",
        attachments: "",
        comments: [],
        activity: [
            { timestamp: "2026-01-06T09:00:00", user: "System", action: "Ticket created" },
            { timestamp: "2026-01-06T10:00:00", user: "System", action: "Status changed to assigned" }
        ]
    },
    {
        id: 7,
        title: "Install new software",
        description: "Install licensed design software for marketing team.",
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
        dueDate: "",
        category: "Applications",
        subcategory: "Desktop Software",
        internalNotes: "",
        attachments: "",
        comments: [],
        activity: [
            { timestamp: "2026-01-06T09:00:00", user: "System", action: "Ticket created" }
        ]
    },
      {
        id: 8,
        title: "Printer jam on 2nd floor",
        description: "MFP-224 constantly jamming with multiple sheets.",
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
        dueDate: "",
        category: "Hardware",
        subcategory: "Printer",
        internalNotes: "Check feed rollers and paper quality.",
        attachments: "",
        comments: [],
        activity: [
          { timestamp: "2026-01-06T11:20:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 9,
        title: "Email deliverability issue",
        description: "External clients not receiving marketing emails. Investigate SPF/DKIM/DMARC.",
        queue: "it-systems",
        status: "assigned",
        assigned: true,
        assignedTo: "Peter Uhl",
        priority: "High",
        tags: ["email", "dns", "deliverability"],
        requesterName: "Marketing Team",
        requesterEmail: "marketing@example.com",
        location: "HQ",
        createdDate: "2026-01-06",
        updatedDate: "2026-01-07",
        dueDate: "",
        category: "Infrastructure",
        subcategory: "Email",
        internalNotes: "Review recent DNS changes; check SendGrid logs.",
        attachments: "",
        comments: [
          {
            author: "Marketing Team",
            timestamp: "2026-01-06T14:05:00",
            text: "Bounce rate increased since Jan 5."
          }
        ],
        activity: [
          { timestamp: "2026-01-06T13:50:00", user: "System", action: "Ticket created" },
          { timestamp: "2026-01-07T08:10:00", user: "System", action: "Status changed to assigned" }
        ]
      },
      {
        id: 10,
        title: "Wi-Fi coverage weak in training room",
        description: "Intermittent signal drops and low throughput during sessions.",
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
        dueDate: "",
        category: "Networking",
        subcategory: "Wireless",
        internalNotes: "Survey AP placement; check channel overlap.",
        attachments: "floorplan-training-room.pdf",
        comments: [],
        activity: [
          { timestamp: "2026-01-07T08:45:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 11,
        title: "Badge reader malfunction",
        description: "Main entrance badge reader intermittently denies valid badges.",
        queue: "building-grounds",
        status: "assigned",
        assigned: true,
        assignedTo: "Kim Clemmer",
        priority: "High",
        tags: ["security", "access-control"],
        requesterName: "Facilities",
        requesterEmail: "facilities@example.com",
        location: "HQ Main Entrance",
        createdDate: "2026-01-07",
        updatedDate: "2026-01-07",
        dueDate: "",
        category: "Security",
        subcategory: "Access Control",
        internalNotes: "Check power, cabling, controller logs.",
        attachments: "",
        comments: [],
        activity: [
          { timestamp: "2026-01-07T09:10:00", user: "System", action: "Ticket created" },
          { timestamp: "2026-01-07T09:30:00", user: "System", action: "Status changed to assigned" }
        ]
      },
      {
        id: 12,
        title: "Shared drive permissions",
        description: "Team cannot access new 'Projects2026' folder. Needs read/write for Marketing.",
        queue: "it-support",
        status: "open",
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
        comments: [],
        activity: [
          { timestamp: "2026-01-07T09:40:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 13,
        title: "Accounting app license renewal",
        description: "Renew 15 licenses before expiration on Jan 15.",
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
        comments: [],
        activity: [
          { timestamp: "2026-01-07T10:00:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 14,
        title: "Laptop battery replacement",
        description: "User reports battery drains from 100% to 20% within 30 minutes.",
        queue: "it-support",
        status: "assigned",
        assigned: true,
        assignedTo: "Andrew Ayala",
        priority: "Medium",
        tags: ["hardware", "battery"],
        requesterName: "John Smith",
        requesterEmail: "john.smith@example.com",
        location: "Remote",
        createdDate: "2026-01-07",
        updatedDate: "2026-01-07",
        dueDate: "",
        category: "Hardware",
        subcategory: "Laptop",
        internalNotes: "Check battery health via OEM tool; order replacement.",
        attachments: "",
        comments: [
          {
            author: "John Smith",
            timestamp: "2026-01-07T10:15:00",
            text: "Happens even with minimal usage."
          }
        ],
        activity: [
          { timestamp: "2026-01-07T10:10:00", user: "System", action: "Ticket created" },
          { timestamp: "2026-01-07T10:30:00", user: "System", action: "Status changed to assigned" }
        ]
      },
      {
        id: 15,
        title: "Patch management compliance",
        description: "Monthly patch cycle verification—20 endpoints pending.",
        queue: "it-systems",
        status: "open",
        assigned: false,
        assignedTo: "",
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
        comments: [],
        activity: [
          { timestamp: "2026-01-07T10:45:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 16,
        title: "New conference room setup",
        description: "Add display, conference phone, and room scheduler panel.",
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
        dueDate: "",
        category: "Facilities",
        subcategory: "AV",
        internalNotes: "Coordinate with vendors; verify power and network drops.",
        attachments: "roomC-specs.pdf",
        comments: [],
        activity: [
          { timestamp: "2026-01-07T11:00:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 17,
        title: "2FA enrollment issue",
        description: "User unable to enroll in MFA—QR code scan fails.",
        queue: "it-security",
        status: "assigned",
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
        comments: [],
        activity: [
          { timestamp: "2026-01-07T11:20:00", user: "System", action: "Ticket created" },
          { timestamp: "2026-01-07T11:35:00", user: "System", action: "Status changed to assigned" }
        ]
      },
      {
        id: 18,
        title: "SharePoint site request",
        description: "Create new site for 'Q1 Initiatives' with Marketing and Sales access.",
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
        dueDate: "",
        category: "Applications",
        subcategory: "SharePoint",
        internalNotes: "Apply standard template; set owners and members groups.",
        attachments: "",
        comments: [],
        activity: [
          { timestamp: "2026-01-07T11:40:00", user: "System", action: "Ticket created" }
        ]
      },
      {
        id: 19,
        title: "Power outage report",
        description: "Brief outage affected building; verify UPS logs and server uptime.",
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
        comments: [
          {
            author: "Facilities",
            timestamp: "2026-01-07T07:55:00",
            text: "No safety incidents reported."
          }
        ],
        activity: [
          { timestamp: "2026-01-06T17:15:00", user: "System", action: "Ticket created" },
          { timestamp: "2026-01-07T08:20:00", user: "System", action: "Status changed to closed" }
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
const newTags = document.getElementById("new-tags");
const newRequesterName = document.getElementById("new-requester-name");
const newRequesterEmail = document.getElementById("new-requester-email");
const newLocation = document.getElementById("new-location");
const newDueDate = document.getElementById("new-due-date");
const newCategory = document.getElementById("new-category");
const newSubcategory = document.getElementById("new-subcategory");
const newNotes = document.getElementById("new-notes");
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

    const tagsArray = newTags.value
        ? newTags.value.split(",").map(t => t.trim()).filter(t => t.length > 0)
        : [];

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
        t.tags = tagsArray;
        t.requesterName = newRequesterName.value.trim();
        t.requesterEmail = newRequesterEmail.value.trim();
        t.location = newLocation.value.trim();
        t.updatedDate = todayStr;
        t.dueDate = newDueDate.value;
        t.category = newCategory.value.trim();
        t.subcategory = newSubcategory.value.trim();
        t.internalNotes = newNotes.value.trim();
        t.attachments = newAttachments.value.trim();

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
        tags: tagsArray,
        requesterName: newRequesterName.value.trim(),
        requesterEmail: newRequesterEmail.value.trim(),
        location: newLocation.value.trim(),
        createdDate: todayStr,
        updatedDate: todayStr,
        dueDate: newDueDate.value,
        category: newCategory.value.trim(),
        subcategory: newSubcategory.value.trim(),
        internalNotes: newNotes.value.trim(),
        attachments: newAttachments.value.trim(),
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
    document.getElementById("modal-notes").textContent = `Internal Notes: ${ticket.internalNotes || "None"} | Attachments: ${ticket.attachments || "None"}`;

    modalStatusSelect.value = ticket.status;
    modalAssignSelect.value = ticket.assignedTo || "";

    modal.dataset.ticketId = ticket.id;

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

    t.comments.push({
        author: currentUser,
        timestamp,
        text
    });

    t.activity.push({
        timestamp,
        user: currentUser,
        action: "Comment added"
    });

    modalCommentText.value = "";
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
    newTags.value = t.tags.join(", ");
    newRequesterName.value = t.requesterName;
    newRequesterEmail.value = t.requesterEmail;
    newLocation.value = t.location;
    newDueDate.value = t.dueDate;
    newCategory.value = t.category;
    newSubcategory.value = t.subcategory;
    newNotes.value = t.internalNotes;
    newAttachments.value = t.attachments;

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
                <span class="priority-badge priority-${t.priority.toLowerCase()}">
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
            <td>${t.queue}</td>
            <td><span class="status-${t.status}">${t.status.toUpperCase()}</span></td>
            <td>${t.assigned ? (t.assignedTo || "Assigned") : "Unassigned"}</td>
            <td>
                <span class="priority-badge priority-${t.priority.toLowerCase()}">
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

