# Happr: Empowering Creators, One Smile at a Time ✨

Happr is a modern, creator-centric platform designed to simplify fan support. It allows digital artists, content creators, writers, gamers, and anyone with a passion to receive "Smiles" – instant, fun tips directly from their audience. Built with Nigerian creators in mind, Happr ensures instant payouts and a seamless experience for both creators and supporters, making it easy to monetize your passion.

## 🚀 Getting Started

Follow these steps to set up and run Happr locally on your machine.

### Installation

To get Happr up and running on your development environment:

1.  **Clone the Repository**:
    ```bash
    git clone git@github.com:Charmingdc/Happr.git
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
4.  **Start the Development Server**:
    This command will launch the application in development mode, typically accessible at `http://localhost:5173`.
    ```bash
    npm run dev
    ```

### Usage

Once the development server is running, you can interact with the Happr application through your web browser:

*   **Landing Page**: Access the main marketing page at `/`. Here you can learn about Happr's features and how it works.
*   **Authentication**:
    *   **Sign Up**: Create a new creator account by visiting `/signup`. You'll choose a unique username and provide your details.
    *   **Sign In**: Log into your existing account via `/signin`.
    *   **Reset Password**: If you forget your password, navigate to `/reset-password` to initiate the recovery process.
*   **Onboarding**: After signing up, you'll be directed to `/complete-setup` to personalize your creator page.
*   **User Dashboard**: Once logged in and onboarded, access your personalized dashboard at `/dashboard`. This page provides an overview of your earnings and recent supporters.
*   **Supporters Management**: View and manage all your supporters on the `/supporters` page.
*   **Payouts**: Keep track of your payout settings and logs on the `/payout` page.

Explore the various sections to see how creators manage their profiles and engage with their supporters.

## ✨ Features

Happr offers a suite of functionalities designed to empower creators and enhance the fan support experience:

*   **Creator-Centric Landing Page**: An engaging and informative introduction to the platform, highlighting benefits for creators.
*   **Secure User Authentication**: Robust sign-up, sign-in, and password reset flows to ensure user data security.
*   **Personalized Onboarding Flow**: A guided step-by-step process for new creators to set up their profiles and pages.
*   **Dynamic Dashboard**: An intuitive overview of earnings, supporter statistics, and quick access to essential features.
*   **Comprehensive Supporter Management**: Tools to view, track, and interact with supporters, including details about their "Smiles" and messages.
*   **Responsive User Interface**: A fluid and adaptive design built with Tailwind CSS, ensuring a consistent experience across all devices.
*   **Instant Payout Integration**: Designed for direct and immediate fund transfers to creators' bank accounts (via Paystack for Nigerian creators).
*   **Optimistic UI Updates**: Leveraging `React Query` for efficient data fetching, caching, and providing a smooth, responsive user experience.
*   **Clipboard Utility**: Custom hook for easily copying page links for sharing.

## 🛠️ Technologies Used

Happr leverages a modern and robust stack to deliver a fast and enjoyable experience:

| Category          | Technology                                   | Description                                                                     | Link                                                        |
| :---------------- | :------------------------------------------- | :------------------------------------------------------------------------------ | :---------------------------------------------------------- |
| **Frontend**      | [React](https://react.dev/)                  | A declarative, component-based JavaScript library for building user interfaces. | [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/) |
| **Language**      | [TypeScript](https://www.typescriptlang.org/) | A superset of JavaScript that adds static types, enhancing code quality.          | [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) |
| **Build Tool**    | [Vite](https://vitejs.dev/)                  | A next-generation frontend tooling that provides an extremely fast development experience. | [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)     | A utility-first CSS framework for rapidly building custom designs directly in your markup. | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) |
| **Routing**       | [React Router DOM](https://reactrouter.com/en/main)| Declarative routing for React applications, enabling seamless navigation.        | [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main) |
| **Data Fetching** | [TanStack Query](https://tanstack.com/query/latest)| Powerful asynchronous state management for React, handling data fetching, caching, and synchronization. | [![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest) |
| **Animations**    | [Motion (Framer Motion)](https://motion.dev/)| A production-ready animation library for React, enabling fluid and delightful UI movements. | [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/) |
| **Notifications** | [Sonner](https://sonner.emilkowalski.pl/)    | An opinionated toast component for React, providing elegant and accessible notifications. | [![Sonner](https://img.shields.io/badge/Sonner-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://sonner.emilkowalski.pl/) |
| **HTTP Client**   | [Axios](https://axios-http.com/)             | A promise-based HTTP client for the browser and Node.js, used for API requests. | [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/) |

## 🤝 Contributing

We welcome contributions to the Happr project! If you're interested in making improvements or adding new features, please follow these guidelines:

*   **Fork the Repository**: Start by forking the Happr repository to your GitHub account.
*   **Create a New Branch**: Create a descriptive branch for your feature or bug fix (e.g., `feature/add-dark-mode` or `bugfix/fix-login-issue`).
*   **Make Your Changes**: Implement your changes, ensuring they align with the project's coding style and best practices.
*   **Test Your Changes**: Before submitting, thoroughly test your modifications to prevent regressions.
*   **Commit Your Changes**: Write clear and concise commit messages that explain your changes.
*   **Open a Pull Request**: Submit a pull request to the `main` branch of the original repository. Provide a detailed description of your changes and why they are necessary.

## 📝 License

This project is currently unlicensed. Please contact the author for licensing information regarding its use and distribution.

## 👤 Author

**Charmingdc**

A passionate developer dedicated to building impactful and user-friendly web applications.

*   **Portfolio**: [Your Portfolio Link](https://yourportfolio.com)
*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
*   **X (formerly Twitter)**: [@yourhandle](https://x.com/yourhandle)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)