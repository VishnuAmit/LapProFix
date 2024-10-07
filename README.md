# LapProFix

*LapProFix* is a full-stack web application designed to provide users with a convenient way to book laptop repair services from certified service centers. The platform emphasizes user experience by allowing for easy service booking, real-time progress tracking, and interactive support through a built-in chatbot. 

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Installation](#installation)

## Features
- *User Authentication*: Users can sign up and log in securely to manage their bookings.
- *Dashboard*: An intuitive dashboard displaying service options, user profile, and booking history.
- *Service Booking*: 
  - Instant Book for quick service requests.
  - Specialized services for Windows, Apple, and other laptop types.
- *Technician Scheduling*: 
  - Automated scheduling of technicians based on the user's issues reported during the booking process. 
  - Users can select specific time slots for technician visits, enhancing convenience and flexibility.
- *Progress Tracking*: 
  - A visual progress bar indicating the current status of the service request: 
    - Booking
    - Assigning
    - Service Progress
    - Complete
- *Chatbot Assistance*: 
  - A built-in chatbot to assist users with common queries and provide real-time support.


## Technologies Used
- *Frontend*: 
  - *Next.js*: For building dynamic user interfaces.
  - *Axios*: For making HTTP requests to the backend.

- *Backend*: 
  - *Node.js*: JavaScript runtime for building the server.
  - *Express.js*: Web framework for Node.js to handle requests and responses.
  - *MongoDB*: NoSQL database for storing user and booking information.
  - *Mongoose*: ODM for MongoDB to define models and schemas.
- *Authentication*: 
  - *JWT (JSON Web Tokens)*: For user authentication and secure session management.
- *Deployment*: 
  - *Vercel*: For hosting the application.
- *Other Libraries/Tools*: 
  - *Socket.IO*: For real-time communication, if implemented for chat features.
  - *dotenv*: For managing environment variables.
  - *Bcrypt.js*: For hashing user passwords.

## Contribution
We welcome contributions to LapProFix! If you'd like to contribute, please follow these steps:

## Installation
To set up *LapProFix* locally, follow these steps:

1. *Clone/Fork the repository*:
   ```bash
   git clone https://github.com/yourusername/lapprofix.git 

2. *Install Packages* 

   Navigate to the project directory and install the necessary packages using:
   ``` bash
   npm install i

3. Run the Project
   ```bash
   npm run dev

