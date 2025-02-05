$(document).ready(() => {
    const token = localStorage.getItem("token");

    // Redirect to login page if the user is not logged in
    if (!token && window.location.pathname !== "/login.html" && window.location.pathname !== "/signup.html") {
        window.location.href = "login.html";
    }

    // Redirect logged-in users away from login/signup pages
    if (token && (window.location.pathname === "/login.html" || window.location.pathname === "/signup.html")) {
        window.location.href = "index.html";
    }
});
