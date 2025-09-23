//login form
// Login form: user enters username & password (we won’t validate them seriously, just mock it).
// Authentication Token in Cookies: on login, we store a fake token in cookies (like real JWT/session tokens).
// Session Data in SessionStorage: store things like "currentPage" or "loggedInUser" (it clears when tab is closed).
// Flow of the App

// Initial Page (not logged in)

// Shows a login form (username + password).

// On Login

// Save a fake auth token into cookies.

// Save session info (e.g., "username": "Alice") into sessionStorage.

// Save theme (dark/light) in localStorage (and apply immediately).

// Redirect to a dashboard page that says “Welcome Alice 👋”.


let loginForm = document.querySelector(".login-form");// Select the login form element
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = loginForm.querySelector('input[type="text"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();
    // Mock authentication process
    if (username && password) {
            // Set a fake auth token in cookies setCookie(name, value , dates)
        setCookie("authToken", "fake-jwt-token", 7); // Expires in 7 days
        alert(`Welcome ${username} 👋`);

        //store username manually for any user
        sessionStorage.setItem("loggedInUser", username);

        // Redirect to dashboard 
        window.location.href = "dashboard.html";
    }else{
        alert("Please enter both username and password.");
    }
});


// Theme Toggle

const themeToggleBtn = document.getElementById("toggle-theme");
const themeIconSpan = themeToggleBtn.querySelector("span");

// Function to apply the theme based on localStorage value
function applyTheme(){
    let savedTheme = localStorage.getItem("theme") || "light";
      document.body.className = savedTheme; // Apply saved theme immediately
        themeIconSpan.textContent = savedTheme === "light" ? "🌙" : "☀️";
    themeToggleBtn.addEventListener("click", () => {
        savedTheme = savedTheme === "light" ? "dark" : "light";//
        localStorage.setItem("theme", savedTheme);
        document.body.className = savedTheme; 
        themeIconSpan.textContent = savedTheme === "light" ? "🌙" : "☀️";
        console.log(`Theme changed to: ${savedTheme}`);
    });
}

// Call the function to apply the theme on initial load
applyTheme();
