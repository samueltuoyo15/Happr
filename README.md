# Happr - Your Platform for Instant Creator Support ✨



## Project Overview
Happr is a modern, single-page application meticulously crafted to empower creators by enabling their fans to send "Smiles" – fun, instant tips that seamlessly transfer to the creator's account. Engineered with React and TypeScript, Happr delivers an exceptionally smooth user experience, transparent pricing, and robust authentication. It is specifically tailored for creators in Nigeria, featuring seamless integration with Paystack for local payment processing.

## Features

*   💸 **Instant Payouts**: Enjoy immediate access to your earnings as funds are directly deposited into your bank account after every single tip.
*   🇳🇬 **Local Focus**: Designed from the ground up for Nigerian creators, leveraging Paystack's reliable infrastructure for universal compatibility with local banks.
*   😊 **Transparent & Fun Support**: Move beyond conventional donations with "Smiles," a playful yet effective way for fans to show appreciation, ensuring you retain a transparent 95% of every transaction.
*   😌 **Zero Setup Stress**: Get started effortlessly! Create your unique page without the need for complex Paystack keys or any coding expertise.
*   🚀 **Intuitive User Experience**: Navigate a clean, responsive interface powered by the latest React, enhanced by elegant Tailwind CSS styling, and brought to life with engaging animations.
*   🔐 **Secure Authentication**: Benefit from a streamlined and secure user authentication flow, including a unique username claiming system to personalize your presence.

## Getting Started

Follow these comprehensive steps to set up and run Happr locally on your development machine.

### Prerequisites

Ensure you have the following installed on your system:

*   Node.js (v18 or higher recommended)
*   npm or Yarn package manager

### Installation

1.  **Clone the Repository**: Begin by cloning the Happr project from its GitHub repository to your local machine.
    ```bash
    git clone git@github.com:Charmingdc/Happr
    ```
2.  **Navigate to the Client Directory**: The Happr frontend application resides within the `client` directory.
    ```bash
    cd Happr/client
    ```
3.  **Install Dependencies**: Install all required project dependencies using your preferred package manager.
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Run the Development Server**: Start the local development server to view the application in your browser.
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be accessible at `http://localhost:5173`. If this port is in use, Vite will automatically suggest an alternative.

### Building for Production

To generate an optimized, production-ready build of the Happr application, execute the following command:

```bash
npm run build
# or
yarn build
```
This process compiles and minifies all necessary assets, placing them into a `dist` directory, ready for deployment.

## Usage

Happr offers a straightforward and intuitive platform for creators to receive support and for fans to show their appreciation.

### Landing Page
The application's entry point is the `LandingPage`, which effectively communicates Happr's core value proposition and features:

*   **Hero Section**: A dynamic and inviting introduction that highlights Happr's mission: "Made with love. Paid in Smiles."
*   **How It Works**: A clear, step-by-step visual guide outlining the process of creating your page, sharing your link, and receiving instant support.
*   **Why Happr**: Delves into the distinct advantages for creators, emphasizing benefits like instant payouts, local compatibility, and transparent fees.
*   **Creator Stories**: Features compelling testimonials from creators who have experienced the benefits of Happr.
*   **Pricing Section**: Articulates Happr's transparent fee structure, clearly showing that creators retain 95% of every "Smile."
*   **Join Us Section**: An interactive module that allows prospective creators to claim their unique `happr.me/username` page.

### User Authentication
Users can seamlessly sign up for new accounts or sign in to existing ones through dedicated authentication routes:

*   **Sign Up (`/signup`)**:
    1.  **Claim Username**: Begin by choosing and claiming a unique `happr.me/username`. This ensures your page is personalized and easy to share.
    2.  **Account Creation**: After selecting a username, proceed to create your account using either an email and password combination or via Google authentication for a quicker setup.
*   **Sign In (`/signin`)**:
    -   Log in to your existing Happr account securely using your registered email and password or by leveraging Google authentication.

Throughout the authentication process and other user interactions, `sonner` is utilized to display clear and concise toast notifications, providing instant feedback on actions and any potential issues (e.g., "Invalid username input").

## Technologies Used

Happr is built upon a modern, high-performance technology stack, ensuring a responsive, scalable, and delightful user experience.

| Technology           | Description                                                        | Link                                                      |
| :------------------- | :----------------------------------------------------------------- | :-------------------------------------------------------- |
| **React**            | A powerful JavaScript library for building dynamic user interfaces. | [React](https://react.dev/)                               |
| **TypeScript**       | A superset of JavaScript providing static type checking for robust code. | [TypeScript](https://www.typescriptlang.org/)           |
| **Vite**             | A next-generation frontend tooling for fast development and builds. | [Vite](https://vitejs.dev/)                               |
| **Tailwind CSS**     | A utility-first CSS framework for rapidly styling modern interfaces. | [Tailwind CSS](https://tailwindcss.com/)                  |
| **TanStack Query**   | Manages asynchronous state, caching, and server interactions effortlessly. | [TanStack Query](https://tanstack.com/query)              |
| **React Router DOM** | Declarative routing solution for single-page React applications.   | [React Router](https://reactrouter.com/en/main)           |
| **Motion**           | A production-ready animation library for React (Framer Motion).    | [Motion](https://www.framer.com/motion/)                  |
| **Sonner**           | An elegant and accessible toast component for React applications.   | [Sonner](https://sonner.emilkowalski.pl/)                 |
| **ESLint**           | A pluggable linting utility for identifying and reporting on patterns in JavaScript code. | [ESLint](https://eslint.org/)                             |
| **Autoprefixer**     | Automatically adds vendor prefixes to CSS rules for browser compatibility. | [Autoprefixer](https://github.com/postcss/autoprefixer) |

## Contributing

We warmly welcome contributions to the Happr project! If you're interested in helping us grow, please follow these guidelines:

1.  🍴 **Fork the Repository**: Start by forking the Happr repository to your GitHub account.
2.  👯 **Clone Your Fork**: Clone your forked repository to your local machine.
    ```bash
    git clone git@github.com:your-username/Happr.git
    ```
3.  🌿 **Create a New Branch**: Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  💻 **Implement Your Changes**: Make your desired modifications, ensuring code quality and adherence to existing patterns.
5.  📥 **Stage Your Changes**: Add all modified files to the staging area.
    ```bash
    git add .
    ```
6.  📝 **Commit Your Changes**: Write a clear and concise commit message.
    ```bash
    git commit -m "feat: Add descriptive feature name"
    ```
7.  🚀 **Push to Your Fork**: Push your local branch to your forked repository on GitHub.
    ```bash
    git push origin feature/your-feature-name
    ```
8.  ⬆️ **Open a Pull Request**: Finally, open a detailed Pull Request against the `main` branch of the original repository, describing your changes and their purpose.

## License

No specific license has been explicitly defined for this project.

## Author

**Charmingdc**

*   LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-username)
*   Twitter (X): [Your Twitter Profile](https://twitter.com/your-username)
*   Portfolio: [Your Personal Website](https://your-portfolio.com)

---

## Badges

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)