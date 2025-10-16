# Happr: Empowering Creators, One Smile at a Time ✨

## Overview
Happr is a modern, responsive platform enabling content creators to receive support from their fans through "Smiles." Built with TypeScript, React 19, and Vite, it offers a seamless experience for creators to manage their page, view supporter statistics, and engage with their community. It integrates robust authentication and efficient data fetching with TanStack Query, all styled beautifully with Tailwind CSS and enhanced with smooth animations using Motion.

## Features
- **Intuitive User Dashboard**: A personalized dashboard displaying user statistics like earnings and supporter count, along with recent supporter activity.
- **Secure Authentication System**: Streamlined sign-up and sign-in flows with options for username claiming and potential third-party integrations (e.g., Google Auth).
- **Supporter Management**: Comprehensive section for viewing all supporters, their contributions, messages, and adjusting personal page settings.
- **Dynamic UI/UX**: Utilizes React Router DOM for navigation, TanStack Query for efficient data fetching and caching, and Motion for smooth, engaging animations.
- **Responsive Design**: Crafted with Tailwind CSS, ensuring a consistent and adaptive user experience across various devices, from mobile to desktop.
- **Utility Hooks**: Custom React hooks (`useIsMobile`, `useCopyToClipboard`) for enhanced functionality and code reusability.
- **Custom Theming**: Extensible Tailwind CSS configuration with custom color palettes and typography.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation
Clone the repository:
```bash
git clone git@github.com:Charmingdc/Happr
```

Navigate into the project directory:
```bash
cd Happr
```

Install the dependencies:
```bash
npm install
# or
yarn install
```

Start the development server:
```bash
npm run dev
# or
yarn dev
```

This will launch the application in your browser, typically at `http://localhost:5173`.

### Environment Variables
This project currently does not require any specific environment variables for local development beyond what Vite handles by default. However, for a production environment or when integrating with an actual backend, you would typically define variables for API endpoints, authentication keys, and other sensitive information.

## Usage

Happr provides a straightforward interface for creators and their supporters.

### Landing Page
The public-facing landing page showcases Happr's value proposition, how it works, creator stories, and transparent pricing. Visitors can explore the platform's benefits and claim their own Happr page.

### Authentication
Users can navigate to `/signup` to create a new account by choosing a unique username and providing their email and password. Existing users can sign in at `/signin`.

### Creator Dashboard
Upon signing in, creators are directed to their personalized dashboard (`/dashboard`), where they can:
- View a greeting with their unique Happr page link.
- Copy their Happr page link to easily share with fans.
- See key statistics like total earnings and supporter count.
- Review recent supporter interactions.

### Supporters Page
The dedicated supporters page (`/supporters`) allows creators to:
- Browse a detailed list of all their supporters, including anonymous contributions, smile counts, amounts, and messages.
- Switch between "Supporters" and "Settings" tabs to manage their page.

### Settings
Within the "Settings" tab on the supporters page, creators can:
- Customize their "Thank You Message" shown to supporters.
- Edit the wording on their support button.
- Adjust the price per "smile" for their page.

## Technologies Used

| Technology         | Description                                                                                             | Link                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------- |
| **TypeScript**     | A strongly typed superset of JavaScript that compiles to plain JavaScript.                              | [TypeScript](https://www.typescriptlang.org/)                               |
| **React 19**       | A declarative, efficient, and flexible JavaScript library for building user interfaces.                 | [React](https://react.dev/)                                                 |
| **Vite**           | A fast build tool that provides a lightning-fast development experience for modern web projects.        | [Vite](https://vitejs.dev/)                                                 |
| **Tailwind CSS**   | A utility-first CSS framework for rapidly building custom designs without leaving your HTML.            | [Tailwind CSS](https://tailwindcss.com/)                                    |
| **TanStack Query** | Powerful asynchronous state management for React, simplifying data fetching, caching, and synchronization. | [TanStack Query](https://tanstack.com/query/latest)                         |
| **Motion**         | A simple yet powerful animation library for React by Framer, offering expressive and fluid UI animations. | [Motion](https://www.framer.com/motion/)                                    |
| **React Router DOM** | A library for declarative routing in React applications, handling navigation and URL synchronization. | [React Router](https://reactrouter.com/en/main)                             |
| **Axios**          | A promise-based HTTP client for the browser and Node.js, used for making API requests.                  | [Axios](https://axios-http.com/)                                            |
| **Sonner**         | An opinionated toast component for React.                                                               | [Sonner](https://sonner.emilkowal.ski/)                                     |
| **Lucide React**   | A simply beautiful open-source icon toolkit, providing a vast library of customizable SVG icons.        | [Lucide React](https://lucide.dev/guide/packages/lucide-react)              |

## Contributing
We welcome contributions to Happr! To contribute:

-   Fork the repository.
-   Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
-   Make your changes and ensure tests pass.
-   Commit your changes with a descriptive message.
-   Push to your fork: `git push origin feature/your-feature-name`
-   Open a pull request to the `main` branch of this repository.

Please ensure your code adheres to the project's coding standards and includes appropriate documentation and tests.

## Author Info

-   **Your Name**: [Your Social Media Link (e.g., LinkedIn)](https://linkedin.com/in/yourprofile)
-   **Email**: [Your Email](mailto:your.email@example.com)

---
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](https://github.com/Charmingdc/Happr/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)