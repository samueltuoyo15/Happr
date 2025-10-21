# Happr Backend API 

<img src="./public/docs.png" />

## Project Overview 
The Happr Backend API is a robust and scalable solution built with NestJS and TypeScript, designed to power a modern web application. It features secure user authentication, email verification, and efficient background job processing, providing a solid foundation for creator-focused platforms. This API aims for high performance, maintainability, and extensibility, offering a comprehensive suite of tools for managing user data and interactions.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![BullMQ](https://img.shields.io/badge/BullMQ-FF5733?style=for-the-badge&logo=bullmq&logoColor=white)](https://bullmq.io/)
[![npm version](https://img.shields.io/badge/npm-v0.0.1-blue?style=for-the-badge)](https://www.npmjs.com/)

## Table of Contents
*   [Overview](#overview)
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Getting Started](#getting-started)
    *   [Installation](#installation)
    *   [Environment Variables](#environment-variables)
*   [API Documentation](#api-documentation)
*   [Usage](#usage)
*   [Contributing](#contributing)
*   [License](#license)
*   [Author Info](#author-info)

---

# Happr Backend API

## Overview
The Happr Backend API is a robust and scalable solution built with NestJS (TypeScript) and Prisma ORM for PostgreSQL, featuring user authentication, email verification, and asynchronous background job processing with BullMQ.

## Features
- `NestJS`: Provides a powerful framework for building efficient and scalable server-side applications.
- `TypeScript`: Ensures type safety and improves code maintainability and developer experience.
- `Prisma ORM`: Enables type-safe database access and simplifies interactions with the PostgreSQL database.
- `PostgreSQL`: A powerful, open-source object-relational database system.
- `JWT`: Facilitates secure, stateless authentication and authorization for API requests.
- `argon2`: A modern, strong password hashing algorithm for enhanced security.
- `BullMQ`: Manages asynchronous background jobs, such as sending emails, improving application responsiveness.
- `Nodemailer`: Handles email sending for user verification, welcome messages, and other notifications.
- `Swagger`: Generates interactive API documentation for easy exploration and testing of endpoints.
- `CORS`: Configured for secure Cross-Origin Resource Sharing with the frontend application.

## Getting Started
To get the Happr Backend API up and running on your local machine, follow these steps.

### Installation
To set up the project locally, run the following commands:

-   🔗 **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd server
    ```
-   📦 **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
-   ⚙️ **Generate Prisma client:**
    ```bash
    npx prisma generate --schema ./prisma/schema.prisma
    ```
-   💾 **Run database migrations:**
    ```bash
    npx prisma migrate dev --schema ./prisma/schema.prisma
    ```
-   ▶️ **Start the development server:**
    ```bash
    npm run start:dev
    ```

### Environment Variables
The project requires the following environment variables to be set. Create a `.env` file in the root of the `server` directory and populate it with your specific values.

-   `DATABASE_URL`: Connection string for your PostgreSQL database.
    *   Example: `postgresql://user:password@localhost:5432/happr_db?schema=public`
-   `REDIS_URL`: Connection string for your Redis instance, used by BullMQ.
    *   Example: `redis://localhost:6379`
-   `JWT_SECRET`: A strong secret key for signing JWT tokens.
    *   Example: `YOUR_SUPER_SECRET_JWT_KEY`
-   `FRONTEND_DOMAIN`: The URL of your frontend application (for CORS and email links).
    *   Example: `http://localhost:3000`
-   `BACKEND_DOMAIN`: The base URL of your backend API (for Swagger documentation).
    *   Example: `http://localhost:5000`
-   `PORT`: The port number on which the API server will listen.
    *   Example: `5000`
-   `GMAIL_AUTH_USER`: Your Gmail account email for Nodemailer.
    *   Example: `your.email@gmail.com`
-   `GMAIL_AUTH_PASS`: Your Gmail app password for Nodemailer.
    *   Example: `your_gmail_app_password`

## API Documentation
The API documentation is automatically generated using Swagger. Once the server is running, you can access the interactive documentation at `[BACKEND_DOMAIN]/docs`.

### Base URL
The API root path for all endpoints is:
`[BACKEND_DOMAIN]/api/v1`

### Endpoints

#### GET /auth/username-availability
Checks if a given username is available for registration.

**Request**:
Query Parameters:
```
username: string (The username to check)
```

**Response**:
```json
{
  "success": true,
  "message": "johndoe is available",
  "data": []
}
```

**Errors**:
- `400 Bad Request`: `{"success": false, "message": "\"johndoe\" is already taken", "data": []}`

#### POST /auth/register
Registers a new user with email, username, and password.

**Request**:
Payload Structure:
```json
{
  "email": "string",
  "username": "string",
  "password": "string"
}
```
Example:
```json
{
  "email": "john.doe@example.com",
  "username": "johndoe",
  "password": "StrongPassword123!"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Account created. Please verify your email",
  "data": []
}
```

**Errors**:
- `400 Bad Request`: `{"success": false, "message": "Account already exists", "data": []}`
- `400 Bad Request`: Validation errors for `email`, `username`, `password` fields.

#### GET /auth/verify-email
Verifies a user's email address using a provided token.

**Request**:
Query Parameters:
```
token: string (The email verification token)
```
Example: `/api/v1/auth/verify-email?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

**Response**:
```json
{
  "success": true,
  "message": "Email verified successfully!",
  "data": []
}
```

**Errors**:
- `400 Bad Request`: `{"success": false, "message": "Invalid or expired token!", "data": []}`
- `400 Bad Request`: `{"success": false, "message": "User not found", "data": []}`
- `400 Bad Request`: `{"success": false, "message": "Email already verified, just login!", "data": []}`

#### POST /auth/signin
Authenticates a user and issues JWT access and refresh tokens via HTTP-only cookies.

**Request**:
Payload Structure:
```json
{
  "email": "string",
  "password": "string"
}
```
Example:
```json
{
  "email": "john.doe@example.com",
  "password": "StrongPassword123!"
}
```

**Response**:
Cookies are set: `access_token` (HTTP-only, secure, lax, 30m expiry), `refresh_token` (HTTP-only, secure, lax, 7d expiry).
```json
{
  "success": true,
  "message": "User signedin successfully",
  "data": []
}
```

**Errors**:
- `401 Unauthorized`: `{"success": false, "message": "Invalid credentials", "data": []}`
- `401 Unauthorized`: `{"success": false, "message": "Your account has not been verified yet, kindly check your email", "data": []}`

## Usage
After successfully installing and starting the backend, you can interact with the API using any HTTP client (e.g., Postman, Insomnia, or your frontend application).

-   **Access API Documentation:**
    Once the server is running, navigate to `http://localhost:5000/docs` (or your configured `BACKEND_DOMAIN`/docs) in your web browser to explore all available endpoints, request/response schemas, and even test them directly using Swagger UI.

-   **Example Flow:**
    1.  Check username availability using `GET /auth/username-availability`.
    2.  Register a new user with `POST /auth/register`. An email verification link will be sent.
    3.  Click the verification link from the email, which calls `GET /auth/verify-email`.
    4.  Sign in using `POST /auth/signin` to receive authentication cookies.

## Contributing
We welcome contributions to the Happr Backend API! If you're interested in improving the project, please follow these guidelines:

-   🙋‍♀️ **Fork the repository** and clone it to your local machine.
-   🌱 **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/issue-description`.
-   ✨ **Make your changes**, ensuring they adhere to the project's coding standards.
-   📝 **Write clear, concise commit messages**.
-   🧪 **Add or update tests** for your changes.
-   🚀 **Push your branch** to your forked repository.
-   🔄 **Open a pull request** to the `main` branch of the original repository, describing your changes and their purpose.

## License
This project is currently UNLICENSED, as specified in `package.json`.

## Author Info
Developed with passion and precision.

-   Twitter: [Your Twitter Handle](https://x.com/TuoyoS26091)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
