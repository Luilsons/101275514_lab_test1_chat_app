const socket = io("http://localhost:5000");
const room = localStorage.getItem("chatRoom");
const username = localStorage.getItem("username");

$(document).ready(() => {
    socket.emit("joinRoom", room);

    $("#message-input").on("keypress", () => {
        socket.emit("typing", { room, username });
    });

    socket.on("displayTyping", (user) => {
        $("#typing-indicator").text(`${user} is typing...`);
        setTimeout(() => {
            $("#typing-indicator").text("");
        }, 2000);
    });

    socket.on("receiveMessage", (data) => {
        $("#chat-box").append(`<p><strong>${data.username}:</strong> ${data.message}</p>`);
    });
});

function sendMessage() {
    const message = $("#message-input").val();
    if (message.trim() === "") return;
    socket.emit("sendMessage", { room, username, message });
    $("#message-input").val("");
}

function leaveRoom() {
    localStorage.removeItem("chatRoom");
    window.location.href = "index.html";
}
