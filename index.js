// -------------------------------
// MOCK ACCOUNTS WITH ROLES
// -------------------------------
const DEFAULT_VERSION = "1.2"; // Increment this when you update defaultAccounts or tickets
const defaultAccounts = [
    { 
        username: "admin", 
        password: "admin", 
        name: "Administrator", 
        role: "admin", 
        active: true,
        permissions: {
            queues: ["*"], // All queues
            canCreateTickets: true,
            canEditTickets: true,
            canDeleteTickets: true,
            canViewReports: true,
            canExportData: true,
            canManageUsers: true,
            canManageQueues: true
        }
    },
    { 
        username: "puhl", 
        password: "admin123", 
        name: "Peter Uhl", 
        role: "tech", 
        active: true,
        permissions: {
            queues: ["it", "it-support", "it-systems"], // IT queues only
            canCreateTickets: true,
            canEditTickets: true,
            canDeleteTickets: false,
            canViewReports: true,
            canExportData: false,
            canManageUsers: false,
            canManageQueues: false
        }
    },
    { 
        username: "kclemmer", 
        password: "support1", 
        name: "Kim Clemmer", 
        role: "tech", 
        active: true,
        permissions: {
            queues: ["buildings-grounds", "electrical"], // Facilities queues
            canCreateTickets: true,
            canEditTickets: true,
            canDeleteTickets: false,
            canViewReports: true,
            canExportData: false,
            canManageUsers: false,
            canManageQueues: false
        }
    },
    { 
        username: "adayala", 
        password: "network!", 
        name: "Andrew Ayala", 
        role: "tech", 
        active: true,
        permissions: {
            queues: ["it", "it-networking", "it-security"], // Network/Security only
            canCreateTickets: true,
            canEditTickets: true,
            canDeleteTickets: false,
            canViewReports: false,
            canExportData: false,
            canManageUsers: false,
            canManageQueues: false
        }
    },
    { 
        username: "test1@example.com", 
        password: "password", 
        name: "Test User 1", 
        email: "test1@example.com",
        role: "customer", 
        active: true,
        permissions: {
            queues: [],
            canCreateTickets: true,
            canEditTickets: false,
            canDeleteTickets: false,
            canViewReports: false,
            canExportData: false,
            canManageUsers: false,
            canManageQueues: false
        }
    },
    { 
        username: "test2@example.com", 
        password: "password", 
        name: "Test User 2", 
        email: "test2@example.com",
        role: "customer", 
        active: true,
        permissions: {
            queues: [],
            canCreateTickets: true,
            canEditTickets: false,
            canDeleteTickets: false,
            canViewReports: false,
            canExportData: false,
            canManageUsers: false,
            canManageQueues: false
        }
    },
    { 
        username: "test3@example.com", 
        password: "password", 
        name: "Test User 3", 
        email: "test3@example.com",
        role: "customer", 
        active: true,
        permissions: {
            queues: [],
            canCreateTickets: true,
            canEditTickets: false,
            canDeleteTickets: false,
            canViewReports: false,
            canExportData: false,
            canManageUsers: false,
            canManageQueues: false
        }
    }
];

// Seed users into localStorage if not present or version changed
function seedUsers() {
    const currentVersion = localStorage.getItem("defaultVersion");
    if (currentVersion !== DEFAULT_VERSION) {
        // Clear localStorage to reset everything
        localStorage.clear();
        // Set new defaults
        localStorage.setItem("users", JSON.stringify(defaultAccounts));
        localStorage.setItem("defaultVersion", DEFAULT_VERSION);
    } else {
        // Ensure users exist (in case localStorage was cleared manually)
        const existing = localStorage.getItem("users");
        if (!existing) {
            localStorage.setItem("users", JSON.stringify(defaultAccounts));
        }
    }
}

seedUsers();

// -------------------------------
// DOM REFERENCES
// -------------------------------
const loginBtn = document.getElementById("login-btn");
const loginError = document.getElementById("login-error");
const usernameInput = document.getElementById("login-username");
const passwordInput = document.getElementById("login-password");
const togglePassword = document.getElementById("toggle-password");

// -------------------------------
// PASSWORD TOGGLE
// -------------------------------
if (togglePassword) {
    togglePassword.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        togglePassword.textContent = isPassword ? "🙈" : "👁";
    });
}

// -------------------------------
// LOGIN HANDLER
// -------------------------------
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        loginError.textContent = "";

        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        if (!user || !pass) {
            loginError.textContent = "Please enter both username and password.";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const account = users.find(
            a => a.username.toLowerCase() === user.toLowerCase() &&
                 a.password === pass &&
                 a.active !== false
        );

        if (!account) {
            loginError.textContent = "Invalid credentials or inactive account.";
            return;
        }

        // Save logged-in user + role + permissions
        localStorage.setItem("currentUser", account.name);
        localStorage.setItem("currentUserRole", account.role);
        localStorage.setItem("currentUsername", account.username);
        localStorage.setItem("currentUserPermissions", JSON.stringify(account.permissions || {}));

        // Optional: log login event
        const logs = JSON.parse(localStorage.getItem("systemLogs") || "[]");
        logs.push({
            timestamp: new Date().toISOString(),
            user: account.name,
            action: "Logged in"
        });
        localStorage.setItem("systemLogs", JSON.stringify(logs));

        // Redirect to landing selector
        window.location.href = "landing.html";
    });
}

// Allow Enter key to submit
passwordInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        loginBtn.click();
    }
});
usernameInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        passwordInput.focus();
    }
});

// Auto-redirect to public landing on direct access
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('login')) {
        window.location.href = 'landing.html';
    }
}



