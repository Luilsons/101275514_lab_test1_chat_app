Chat Application

Overview
This is a real-time chat application built using Node.js, Express, MongoDB, and Socket.io. It allows users to sign up, log in, and join different chat rooms to communicate in real time.

/////////////////////////////////////////////
Features
* User Authentication: Users can sign up and log in securely.
* Chat Rooms: Users can join different chat rooms.
* Real-time Messaging: Messages are instantly sent and received.
* Socket.io Integration: Enables real-time communication.
* MongoDB Atlas: Stores user credentials securely.
* Frontend UI: Built with HTML, CSS (Bootstrap), and JavaScript.

/////////////////////////////////////////////////
Technologies Used
* Backend: Node.js, Express.js, MongoDB Atlas, Mongoose, JWT Authentication
* Frontend: HTML, CSS (Bootstrap), JavaScript
* Real-Time Communication: Socket.io

/////////////////////////////////////////////////
Project Structure

LabTest1/
│── models/
│   ├── User.js
│── public/
│   ├── index.html
│   ├── signup.html
│   ├── login.html
│   ├── chat.html
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   ├── chat.js
│   ├── css/
│       ├── style.css
│── routes/
│   ├── user.js
│   ├── chat.js
│── server.js
│── package.json
│── .env
│── README.txt

///////////////////////////////////////////
Installation and Setup

* Prerequisites
Make sure you have Node.js and MongoDB Atlas setup.

* Clone the Repository
git clone https://github.com/Luilsons/101275514_lab_test1_chat_app
cd LabTest1

* Install Dependencies
npm install

* Set Up Environment Variables
Create a .env file and add the following:
MONGO_URI=mongodb+srv://luilsonsousa:your_password@comp3123assignment1.lwip7.mongodb.net/LabTest1?retryWrites=true&w=majority
PORT=5000

* Start the Server
node server.js
Server should start running on http://localhost:5000.

* Open the Application
Open a browser and go to: http://localhost:5000/index.html
Sign up for a new account and log in.
Join a chat room and start messaging!

///////////////////////////////////////////////////
API Endpoints

* User Routes
Method: POST
Endpoint: /api/users/signup***/api/users/login
Description: Register a new user****Authenticate user

* Chat Routes
Method: GET
Endpoint: /api/chats
Description: Fetch chat messages

////////////////////////////////////////////////////////
How the Chat Works

1 - User enters username & selects a room.
2 - Socket.io connects the user to the room.
3 - Messages are broadcasted in real time to all users in the room.
4 - Users can see who is typing.

///////////////////////////////////////////////////////////
Screenshots
* Login Page
* Chat Interface

//////////////////////////////////////////////////////////
Future Enhancements
* Private Messaging between users
* User Online Status
* Database Storage for Messages

/////////////////////////////////////////////////////////
License
* This project is open-source and free to use.
