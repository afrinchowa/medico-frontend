Medisphere - Medicine E-Commerce Shop
Welcome to Medisphere, a modern and intuitive front-end solution for an e-commerce medicine shop. Built with Next.js, TailwindCSS, and powered by Redux, this project offers seamless user experiences for browsing, purchasing, and managing pharmaceutical products. With an elegant and clean interface, it is designed to meet the needs of both customers and administrators.

Table of Contents
Overview

Technologies

Features

Installation Instructions

Available Scripts

Project Structure

Contributing

License

Overview
Medisphere provides a smooth and modern experience for managing medicine orders online. Designed with scalability in mind, this platform offers an interactive, responsive front-end interface that enables users to browse, select, and purchase medications with ease. The use of Next.js ensures server-side rendering, delivering excellent performance and SEO benefits. Redux powers the state management for the application, allowing real-time updates and a seamless user experience across pages.

Technologies
The following technologies and tools are used in this project:

Next.js: A powerful React framework for building server-side rendered applications.

TailwindCSS: A utility-first CSS framework for rapid UI development.

React: A JavaScript library for building user interfaces.

Redux: A predictable state container for managing global state in React apps.

NextAuth.js: Provides authentication functionality to enable login and secure user sessions.

Axios: Promise-based HTTP client for making API requests.

Framer Motion: A library for complex animations and transitions.

Radix UI: A set of low-level UI components for building accessible, modern design systems.

React Toastify: For displaying customizable toast notifications.

Swiper: A modern touch slider library for creating interactive product carousels.

TypeScript: A typed superset of JavaScript that adds type safety to the codebase.

Prettier & ESLint: Code formatting and linting for ensuring clean and consistent code.

Features
Responsive UI: Fully responsive design optimized for mobile and desktop views.

Authentication: Secure user login and session management using NextAuth.js.

Product Browsing: Interactive product listing with filtering and sorting options.

Product Carousel: Beautiful and interactive carousels powered by Swiper for featured products.

Cart Management: Add products to the shopping cart and view order summary.

Animations: Smooth animations with Framer Motion for a modern user experience.

Toast Notifications: Notifications for various actions, such as successful login or adding products to the cart, using React Toastify.

State Management: Efficient state handling and persistence with Redux and Redux Persist.

Clean UI: A clean and minimalistic design that prioritizes usability and accessibility.

Dark Mode Support: Optimized for both light and dark themes, ensuring a pleasant browsing experience.

Installation Instructions
To get started with Medisphere, follow these simple steps:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/medisphere.git
cd medisphere
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env.local file at the root of the project and add the following keys:

ini
Copy
Edit
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
Make sure to replace your-secret-key with a secure secret key for authentication.

4. Start the development server
bash
Copy
Edit
npm run dev
Your application should now be live at http://localhost:3000.

Available Scripts
In the project directory, you can run the following commands:

npm run dev: Starts the development server.

npm run build: Builds the application for production.

npm run start: Starts the application in production mode.

npm run lint: Runs ESLint to lint your project files.

npm run format: Automatically formats your code using Prettier.

Project Structure
Here is an overview of the project's structure:

ruby
Copy
Edit
├── public/                     # Static assets such as images, fonts, etc.
├── src/
│   ├── components/             # Reusable UI components (Buttons, Modals, etc.)
│   ├── pages/                  # Pages of the application (Home, Cart, etc.)
│   ├── store/                  # Redux store and reducers
│   ├── utils/                  # Utility functions
│   ├── styles/                 # Tailwind and custom CSS files
│   ├── hooks/                  # Custom React hooks
│   ├── App.tsx                 # Main app component
│   ├── index.tsx               # Entry point for React
│   └── _document.tsx           # Custom document setup for Next.js
├── .env.local                  # Environment variables for local setup
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # TailwindCSS configuration
└── package.json                # Project metadata and dependency management
Contributing
We welcome contributions to Medisphere! To contribute, please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature-branch.

Make your changes and commit them: git commit -m 'Add new feature'.

Push to your fork: git push origin feature-branch.

Open a pull request to the main repository.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any inquiries or feedback, feel free to reach out via email.
arfinchowa524@gmail.com












# Live link

https://medi-sphere-five.vercel.app/

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Faey2023/medi-sphere

   ```

2. **Navigate to the project directory:**

   ```bash
   cd medi-sphere
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the project:**
   ```bash
   npm run dev
   ```
