# Happr: Empowering Creators with Instant Fan Support 🌟

Happr is a modern, responsive platform designed to enable creators to effortlessly receive financial support, affectionately termed "Smiles," directly from their fanbase. It provides a streamlined experience for creators to set up personalized pages, track supporters, manage payout settings, and connect with their community. Built with a robust React and TypeScript frontend, Happr emphasizes performance, maintainability, and a delightful user experience.

## Features ✨

*   **Seamless Creator Onboarding:** A guided, multi-step process for new creators to set up their profile, including username selection, bio, and social links.
*   **Personalized Creator Pages:** Each creator gets a unique `happr.me/username` link for their fans to send support.
*   **Intuitive Dashboard:** An overview of recent supporters, earnings, and key statistics, offering insights into fan engagement.
*   **Real-time Supporter Tracking:** Detailed list of all supporters with options to view messages, amounts, and support timestamps.
*   **Dynamic Payout Settings:** Configure thank you messages, customize support button wording, and adjust smile pricing.
*   **Secure User Authentication:** Robust sign-up, sign-in, and password reset functionalities.
*   **Responsive Design:** Optimized for a flawless experience across various devices and screen sizes, from mobile to desktop.
*   **Efficient State Management:** Leverages TanStack Query for effective data fetching, caching, and synchronization, ensuring a snappy interface.

## Getting Started 🚀

Follow these steps to get a local copy of Happr up and running on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone git@github.com:Charmingdc/Happr
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd Happr
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```
    The application will typically be available at `http://localhost:5173`.

### Environment Variables

To connect Happr to its backend services, you will need to configure environment variables. Create a `.env` file in the root of the project (if not already present) and add the following:

```
VITE_API_BASE_URL="http://localhost:3000/api" # Replace with your backend API URL
```
*Note: The current `axios` configuration in `@/lib` is assumed to be set up to use this base URL. Ensure your backend is running and accessible at the specified URL.*

## Usage 🧑‍💻

Once the development server is running, you can interact with the Happr platform:

1.  **Landing Page (`/`)**: Explore the marketing site, learn about Happr's features, and understand how it works for creators.
2.  **Sign Up (`/signup`)**: Begin your journey as a creator. You'll choose a unique username (which forms your public Happr page link) and then register your account.
3.  **Onboarding (`/complete-setup`)**: After signing up, you'll be guided through a simple onboarding flow to set up your profile details like your name, a short bio, and links to your website or social media.
4.  **Dashboard (`/dashboard`)**: As a logged-in creator, this is your central hub. View your recent supporters, total earnings, and various statistics.
5.  **Supporters (`/supporters`)**: Access a comprehensive list of all your fans who have sent "Smiles," including their names, message, and amount. You can also adjust your support page settings here.
6.  **Payout (`/payout`)**: Manage your payout preferences and view logs of your past transactions.

## Technologies Used 🛠️

Happr is built with a modern and efficient technology stack:

| Technology | Description | Link |
| :--------- | :---------- | :--- |
| React | A declarative, component-based JavaScript library for building user interfaces. | [![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/) |
| TypeScript | A superset of JavaScript that adds static types, enhancing code quality and developer experience. | [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) |
| Vite | A next-generation frontend tooling that provides an extremely fast development experience. | [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/) |
| Tailwind CSS | A highly customizable, utility-first CSS framework for rapidly building custom designs. | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) |
| React Router DOM | A collection of navigational components that compose declaratively with your application. | [![React Router DOM](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main) |
| TanStack Query | Powerful asynchronous state management for React, ideal for data fetching, caching, and synchronization. | [![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest) |
| Axios | A popular promise-based HTTP client for making API requests. | [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)](https://axios-http.com/) |
| Sonner | An elegant and customizable toast component for presenting notifications. | [![Sonner](https://img.shields.io/badge/Sonner-FFBE00?style=flat&logo=javascript&logoColor=black)](https://sonner.emilkowalski.pl/) |
| Lucide React | A collection of beautiful, community-maintained vector icons. | [![Lucide React](https://img.shields.io/badge/Lucide_React-2C3E50?style=flat&logo=lucide&logoColor=white)](https://lucide.dev/icons/) |
| Motion | A tiny, zero-dependency animation library for the web. | [![Motion](https://img.shields.io/badge/Motion-000000?style=flat&logo=framer&logoColor=white)](https://motion.dev/) |

## Contributing 🤝

We welcome contributions to the Happr project! If you're looking to help, please follow these guidelines:

*   **Fork the repository**.
*   **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/issue-description`.
*   **Make your changes**, ensuring they adhere to the project's coding style and standards.
*   **Commit your changes** with clear, descriptive messages.
*   **Push your branch** to your forked repository.
*   **Open a pull request** to the `main` branch of the original repository, detailing your changes.

## Author Info 👤

Happr was developed with passion by Charmingdc. Connect with me:

*   **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
*   **Twitter/X**: [@your_x_handle](https://x.com/your_x_handle)
*   **Portfolio**: [Your Portfolio Website](https://yourportfolio.com)

---

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Top Language](https://img.shields.io/github/languages/top/Charmingdc/Happr?style=for-the-badge)](https://github.com/Charmingdc/Happr)
[![Last Commit](https://img.shields.io/github/last-commit/Charmingdc/Happr?style=for-the-badge)](https://github.com/Charmingdc/Happr)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)