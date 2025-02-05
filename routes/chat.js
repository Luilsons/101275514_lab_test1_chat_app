const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// Get messages 
router.get("/:room", async (req, res) => {
    try {
        const messages = await Message.find({ room: req.params.room });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving messages" });
    }
});

module.exports = router;
