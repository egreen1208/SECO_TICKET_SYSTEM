// -------------------------------
// MOCK ACCOUNTS WITH ROLES
// -------------------------------
const DEFAULT_VERSION = "1.1"; // Increment this when you update defaultAccounts or tickets
const defaultAccounts = [
    { username: "admin", password: "admin", name: "Administrator", role: "admin", active: true },
    { username: "puhl", password: "admin123", name: "Peter Uhl", role: "tech", active: true },
    { username: "kclemmer", password: "support1", name: "Kim Clemmer", role: "tech", active: true },
    { username: "adayala", password: "network!", name: "Andrew Ayala", role: "tech", active: true }
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

        // Save logged-in user + role
        localStorage.setItem("currentUser", account.name);
        localStorage.setItem("currentUserRole", account.role);
        localStorage.setItem("currentUsername", account.username);

        // Optional: log login event
        const logs = JSON.parse(localStorage.getItem("systemLogs") || "[]");
        logs.push({
            timestamp: new Date().toISOString(),
            user: account.name,
            action: "Logged in"
        });
        localStorage.setItem("systemLogs", JSON.stringify(logs));

        // Redirect to main app
        window.location.href = "home.html";
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



