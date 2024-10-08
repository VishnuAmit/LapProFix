# LapProFix

_LapProFix_ is a open source web application designed to provide users with a convenient way to book laptop repair services from certified service centers. The platform emphasizes user experience by allowing for easy service booking, real-time progress tracking, and interactive support through a built-in chatbot.

## Table of Contents
- [Guidelines](#guidelines)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Hacktoberfest](#hacktoberfest)

## Guidelines
### 🚀 How to Contribute

We welcome all contributors! Whether you're a seasoned developer or a newbie in open source, follow these steps to contribute:

1. **Fork the Repository**

Click the **Fork** button at the top-right corner of this repository to create your own copy.

2. **Clone Your Fork**

Once you've forked the repository, clone it to your local machine:

```bash
git clone https://github.com/VishnuAmit/LapProFix.git
```

3. **Create a New Branch**

Always create a new branch for your changes:

```bash
git checkout -b your_branch
```

4. **Do staging in it**

Make Your Changes

```bash
git add .
```

6. **Commit Your Changes:**

```
git commit -m "Relevant message"
```

7. **Push to Your Branch:**

```
git push origin your_branch
```

8. **Create a Pull Request:**
 
 Go to your forked repository on GitHub and create a pull request to the main repository _and i'll merge it as soon as i can._


### 🌟 What Can You Contribute?

There are several ways you can help improve **LapProFix**:

- **🛠️ Bug Fixes**: Found a bug? We’d love your help fixing it.
- **📦 New Features**: Have a cool idea to make the platform better? Add it!
- **📜 Documentation**: If you think our docs can be improved, feel free to enhance them.
- **💡 Ideas & Discussions**: You can open an issue to discuss new features or improvements.

### 📜 Contribution Guidelines

To maintain quality and consistency, please adhere to the following guidelines:

1. **Code Style**: Follow the coding style used throughout the project. Clean, readable code with comments is always appreciated.
2. **Commits**: Write meaningful commit messages.
3. **Pull Requests**: Make sure PRs are focused, well-explained, and reference any issues they address.
4. **Testing**: Ensure that your changes are well-tested locally and don’t break existing functionality.
5. **Environment Setup**: Make sure your `.env` file and MongoDB connection are properly configured.

## Features
- _User Authentication_: Users can sign up and log in securely to manage their bookings.
- _Dashboard_: An intuitive dashboard displaying service options, user profile, and booking history.
- _Service Booking_:
  - Instant Book for quick service requests.
  - Specialized services for Windows, Apple, and other laptop types. 
- _Technician Scheduling_:
  - Automated scheduling of technicians based on the user's issues reported during the booking process.
  - Users can select specific time slots for technician visits, enhancing convenience and flexibility. 
- _Progress Tracking_:
  - A visual progress bar indicating the current status of the service request:
    - Booking
    - Assigning
    - Service Progress
    - Complete
- _Chatbot Assistance_:
  - A built-in chatbot to assist users with common queries and provide real-time support.
    
## Technologies Used

- _Frontend_:
  - _Next.js_: For building dynamic user interfaces.
  - _Axios_: For making HTTP requests to the backend.
- _Backend_: 
  - Node.js: JavaScript runtime for building the server.
  - Express.js: Web framework for Node.js to handle requests and responses.
  - MongoDB: NoSQL database for storing user and booking information.
  - Mongoose: ODM for MongoDB to define models and schemas.
- _Authentication_: 
  - JWT (JSON Web Tokens): For user authentication and secure session management.
- _Deployment_: 
  - Vercel: For hosting the application.
- _Other Libraries/Tools_: 
  - dotenv: For managing environment variables.
  - Bcrypt.js: For hashing user passwords.


## Hacktoberfest

We are proud participants of **Hacktoberfest 2024**! Here's how to get started:

- [Register for Hacktoberfest](https://hacktoberfest.com) to get started.
- Open at least 4 quality PRs during October and help us improve **LapProFix**!

Make sure your PRs are:

- **Focused**: Try to keep them small and meaningful.
- **High-Quality**: Test your changes and follow best practices.

  
**Happy Coding 💻 and we look forward to your contributions during **Hacktoberfest 2024**! 🎃**

