$("#loginForm").submit(async function (e) {
    e.preventDefault();
    
    const user = {
        username: $("#username").val(),
        password: $("#password").val()
    };

    try {
        const response = await fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            window.location.href = "index.html";
        } else {
            alert(data.error || "Login failed!");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Error logging in. Please try again.");
    }
});
