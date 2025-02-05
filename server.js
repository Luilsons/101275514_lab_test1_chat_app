const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas Connected Successfully!"))
.catch(err => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1); 
});

// Import Routes
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");

app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);

// Serve HTML pages 
app.get("/:page", (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, "public", `${page}.html`);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("Page not found");
    }
});

// Default Route (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// SignUp Page 
app.get("/signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signup.html"));
});

// Login Page
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Socket.io for real-time chat
io.on("connection", (socket) => {
    console.log(`⚡ User Connected: ${socket.id}`);

    socket.on("joinRoom", (room) => {
        socket.join(room);
        console.log(`🚀 User ${socket.id} joined room: ${room}`);
    });

    socket.on("sendMessage", (data) => {
        io.to(data.room).emit("receiveMessage", data);
        console.log(`💬 Message from ${data.username}: ${data.message}`);
    });

    socket.on("typing", (data) => {
        socket.to(data.room).emit("displayTyping", data.username);
    });

    socket.on("disconnect", () => {
        console.log(`❌ User Disconnected: ${socket.id}`);
    });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
