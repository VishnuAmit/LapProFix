# LapProFix

_LapProFix_ is a full-stack web application designed to provide users with a convenient way to book laptop repair services from certified service centers. The platform emphasizes user experience by allowing for easy service booking, real-time progress tracking, and interactive support through a built-in chatbot.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Installation](#installation)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/VishnuAmit/LapProFix.git
   cd medi-connect
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Server Start**

   ```bash
   npm run dev
   ```

4. **Backend Configuration**

- Open the `.env` file and update the following variables:

```env
MONGODB_URI="your mongodb string"
```

## Usage

**Start the Server**

The application should be running at `http://localhost:3000`.

**Access the Application**

Open your web browser and navigate to `http://localhost:3000` to access the Medi-Connect(Application Booking System).

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
