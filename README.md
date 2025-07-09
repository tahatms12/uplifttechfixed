# UPLIFT Technologies Website

This repository contains the official website for UPLIFT Technologies, a people-powered outsourcing partner. The website is built with React, Vite, and Tailwind CSS, and focuses on performance, accessibility, and maintainability.

## Project Goals

*   Provide comprehensive information about UPLIFT Technologies' services.
*   Showcase client success stories through case studies.
*   Offer career opportunities for talented individuals.
*   Enable easy contact and consultation scheduling.
*   Ensure a fast, accessible, and visually appealing user experience.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Vitest:** A fast and modern testing framework.
*   **Lighthouse CI:** For continuous integration of performance, accessibility, and best practices.
*   **Lucide React:** A collection of beautiful open-source icons.
*   **React Helmet:** A document head manager for React.
*   **React Router DOM:** For declarative routing in React applications.
*   **Sharp:** High-performance Node.js image processing.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (Node Package Manager) or Yarn
*   Git

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/tahatms12/uplifttechfixed.git
    cd uplifttech_fixed
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Development

### Running the Development Server

```bash
npm run dev
```

This will start the development server and open the application in your browser.

### Building for Production

```bash
npm run build
```

This command builds the application for production to the `dist` folder.

### Linting

```bash
npm run lint
```

This command runs ESLint to check for code quality issues.

### Testing

```bash
npm run test
```

This command runs unit tests using Vitest.

```bash
npm run test:a11y
```

This command runs accessibility tests using `jest-axe`.

### Performance Auditing (Lighthouse CI)

To run Lighthouse CI, you need to have `lighthouse` and `lighthouse-ci` installed globally.

```bash
npm install -g lighthouse lighthouse-ci
```

Then, you can run the Lighthouse CI audit:

```bash
lhci autorun --config=./lighthouserc.json
```

This command will build the project, start a local server, run Lighthouse audits, and then shut down the server. It will also check against the performance thresholds defined in `lighthouserc.json`.

## Animation Toggle

This project is designed with performance and accessibility in mind. All micro-animations are guarded by the `prefers-reduced-motion` media query, meaning they will automatically disable if the user has enabled "Reduce motion" in their operating system settings.

Additionally, all animations are controlled by a global `.animate` class. If this class is removed from the root HTML element, all animations will be disabled.

## Contributing

Contributions are welcome! Please follow the incremental commit policy outlined in `CONTRIBUTING.md` (if it exists) and ensure all tests pass before submitting a pull request.

## License

[Specify your license here, e.g., MIT License]