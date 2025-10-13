# Happr: Made with Love, Paid in Smiles 💜

## Overview
Happr is a modern web application built for creators to receive instant support ("Smiles") from their fans. This platform provides a seamless and transparent way for creators, especially in Nigeria, to monetize their passion with direct payouts, powered by Paystack. The frontend is crafted with TypeScript, React, and Vite, featuring a beautiful and responsive user interface designed with Tailwind CSS and enhanced with fluid animations using Motion.

## Features
*   ✨ **Creator Landing Page**: An engaging and informative landing page to showcase Happr's benefits and features.
*   📝 **User Authentication**: Secure sign-up and sign-in processes for creators to manage their Happr page.
*   🔗 **Customizable Page Claiming**: Allows creators to claim a unique `happr.me/username` link for their profile.
*   ⚡ **Instant Payouts**: Designed to facilitate immediate fund transfers to creators' bank accounts upon receiving "Smiles."
*   📱 **Responsive Design**: A fully responsive interface that delivers an optimal experience across all devices.
*   🚀 **Smooth UI Animations**: Utilizes the Motion library for delightful and fluid user interface transitions and interactions.

## Getting Started

To get Happr up and running locally, follow these simple steps.

### Installation
1.  **Clone the Repository**:
    ```bash
    git clone git@github.com:Charmingdc/Happr
    ```
2.  **Navigate to the Project Directory**:
    ```bash
    cd Happr
    ```
3.  **Install Dependencies**:
    Happr uses `npm` for package management.
    ```bash
    npm install
    ```
    or if you prefer Yarn:
    ```bash
    yarn install
    ```
    or pnpm:
    ```bash
    pnpm install
    ```

### Environment Variables
This project currently does not require any specific environment variables for local development as it's a frontend application. However, a backend API would typically require:

*   `VITE_API_BASE_URL`: The base URL for the Happr API (e.g., `http://localhost:3000/api/v1`).

## Usage

Once you have installed the dependencies, you can start the development server to view the Happr application in your browser.

1.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
    This command will start the Vite development server, usually accessible at `http://localhost:5173`.

2.  **Explore the Landing Page**:
    Upon opening the application, you will land on the main marketing page, which introduces Happr and its core functionalities.

3.  **Sign Up / Sign In**:
    *   Click on "Get Started" or "Sign up" to navigate to the registration page.
    *   You will first be prompted to choose a unique username for your Happr page.
    *   After choosing a username, you can proceed with email/password registration or use the "Continue with Google" option.
    *   Existing users can navigate to the "/signin" route to log into their accounts.

4.  **Enjoy the Experience**:
    The application provides an intuitive interface for creators to set up their profiles and begin receiving support. While the payment processing itself would involve a backend, the frontend provides the full user journey for registration and page setup.

## Technologies Used

| Technology         | Description                                                                 | Link                                            |
| :----------------- | :-------------------------------------------------------------------------- | :---------------------------------------------- |
| **TypeScript**     | A superset of JavaScript that adds static types and class-based OOP.        | [TypeScript](https://www.typescriptlang.org/)   |
| **React**          | A JavaScript library for building user interfaces.                          | [React](https://react.dev/)                     |
| **Vite**           | A fast build tool and development server for modern web projects.           | [Vite](https://vitejs.dev/)                     |
| **Tailwind CSS**   | A utility-first CSS framework for rapidly building custom designs.          | [Tailwind CSS](https://tailwindcss.com/)        |
| **React Router DOM**| Declarative routing for React applications.                                 | [React Router](https://reactrouter.com/en/main) |
| **React Query**    | Powerful asynchronous state management for React.                           | [React Query](https://tanstack.com/query)       |
| **Motion (Framer)**| A production-ready motion library for React.                                | [Framer Motion](https://www.framer.com/motion/) |
| **Sonner**         | An opinionated toast component for React.                                   | [Sonner](https://sonner.emilkowalski.pl/)       |

## Contributing

We welcome contributions to Happr! If you have suggestions for improvements or new features, please follow these guidelines:

1.  🍴 **Fork the repository** to your GitHub account.
2.  🌿 **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `bugfix/issue-description`.
3.  💻 **Make your changes** and ensure the code adheres to the project's style and quality standards.
4.  🧪 **Test your changes** thoroughly to avoid introducing regressions.
5.  ➕ **Commit your changes** with a clear and descriptive message.
6.  ⬆️ **Push your branch** to your forked repository.
7.  🤝 **Open a pull request** to the `main` branch of the original repository, describing your changes and their benefits.

## Author Info

*   **Charmingdc**
    *   🌐 [Portfolio](https://charmingdc.vercel.app/) (Placeholder)
    *   🐦 [Twitter](https://twitter.com/Charmingdc_) (Placeholder)
    *   💼 [LinkedIn](https://linkedin.com/in/charmingdc) (Placeholder)

---

[![Built With TypeScript](https://img.shields.io/badge/Built_With-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Built With React](https://img.shields.io/badge/Built_With-React-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Built With Vite](https://img.shields.io/badge/Built_With-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Built With Tailwind CSS](https://img.shields.io/badge/Built_With-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: Unlicensed](https://img.shields.io/badge/License-Unlicensed-lightgrey.svg?style=for-the-badge)](https://choosealicense.com/no-permission/)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)