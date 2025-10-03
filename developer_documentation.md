# Spatial Developer Documentation

## 1. Project Overview

This document provides a comprehensive overview of the Spatial project, a web application built with Next.js and React. The application is a marketing website for a platform called "Spatial," which allows users to create and experience interactive virtual worlds.

The website showcases the platform's features, use cases, and pricing. It is designed to be visually appealing and interactive, with a focus on smooth animations and a modern user experience.

### Key Features and Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: GSAP (GreenSock Animation Platform), Embla Carousel, and custom CSS animations
- **Smooth Scrolling**: Implemented with `@studio-freight/lenis`
- **Linting**: ESLint with `next/core-web-vitals`
- **Package Manager**: npm

## 2. Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)

### Installation

1.  Clone the repository to your local machine.
2.  Open a terminal in the project's root directory.
3.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application in development mode with Turbopack at `http://localhost:3000`. The page will reload automatically when you make changes to the code.

### Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## 3. Folder Structure

The project follows a standard Next.js folder structure. Here is an overview of the main directories:

```
spatial/
├── app/
│   ├── (pages)/
│   │   ├── brands/
│   │   ├── dynamic/
│   │   └── pricing/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Brands/
│   ├── Dynamic/
│   ├── Landing/
│   ├── Pricing/
│   ├── reusable/
│   └── utils/
├── constants/
├── public/
└── ... (config files)
```

-   **`app/`**: Contains the application's pages and layouts, following the Next.js App Router conventions. Each sub-directory represents a route.
-   **`components/`**: Contains all the React components used in the application, organized by feature.
-   **`constants/`**: Contains all the static data and content used in the application, such as text for pages, links, and lists of items.
-   **`public/`**: Contains all the static assets, such as images, videos, and fonts.

### Suggestions for Improvement

The current folder structure is well-organized and follows best practices. Here are a few minor suggestions:

-   **Component Organization**: The `utils` directory contains several SVG logos that are implemented as class components (`Forbes.jsx`, `Pocket.jsx`, etc.), while the rest of the project uses functional components. For consistency, these could be refactored into functional components.
-   **CSS Files**: The global CSS files (`landing.css`, `dynamichero.css`) are located in the `app` directory. It might be cleaner to create a dedicated `styles` or `css` directory at the root of the project to store all global styles.

## 4. Architecture and Conventions

### Next.js App Router

The application uses the Next.js App Router, which means that pages and layouts are defined in the `app` directory. Each page is a `page.jsx` file within a route directory.

### Component-Based Architecture

The application is built with a component-based architecture. Each page is composed of several smaller, reusable components. This makes the code modular, easier to understand, and maintain.

### Styling

Styling is handled with Tailwind CSS, which allows for rapid UI development. The project also uses some global CSS for custom styles and animations.

### Data Management

All static data and content are managed in the `constants` directory. This is a good practice as it separates the data from the presentation layer, making it easy to update the content without touching the component code.

## 5. Routing

The application has the following main routes:

-   `/`: The landing page.
-   `/brands`: The page for brands.
-   `/dynamic`: A page for showcasing a dynamic experience in an iframe.
-   `/pricing`: The pricing page.

These routes are defined by the directory structure in the `app` directory.

## 6. Components

The `components` directory is organized by feature. Here is a breakdown of the main component directories:

### `components/Brands/`

Contains components used on the `/brands` page.

-   `BrandAudience.jsx`: Displays statistics about the target audience.
-   `BrandHero.jsx`: The hero section for the brands page.
-   `BrandToLife.jsx`: Showcases how to bring a brand to life.
-   `BuildGame.jsx`: A section about building a game for a brand.
-   `WhyBrands.jsx`: Explains why brands should choose Spatial.
-   `YourNextCamp.jsx`: A call-to-action section.

### `components/Dynamic/`

Contains components used on the `/dynamic` page.

-   `DynamicHero.jsx`: The main component for the dynamic page, which includes an iframe.
-   `IFrameLoader.jsx`: A component that loads an iframe with a progress bar.
-   `ProgressBar.jsx`: The progress bar component.

### `components/Landing/`

Contains components used on the landing page (`/`).

-   `AudienceCount.jsx`: Displays statistics about user engagement.
-   `AvatarCustomization.jsx`: An interactive section showcasing avatar customization.
-   `Begin.jsx`: A call-to-action section.
-   `BrandsScroll.jsx`: A horizontally scrolling list of brand logos.
-   `CrossPlatform.jsx`: Highlights the cross-platform capabilities.
-   `Explore.jsx`: A scrolling list of virtual worlds to explore.
-   `Footer.jsx`: The application's footer.
-   `Header.jsx`: The application's header.
-   `Hero.jsx`: The hero section for the landing page.
-   `Industry.jsx`: Showcases the "Spatial Creator Toolkit".
-   `Press.jsx`: A carousel of press quotes.
-   `SmoothScroller.jsx`: Implements smooth scrolling across the application.
-
-   `UseCases.jsx`: A scrolling list of use cases.
-   `YourWorld.jsx`: A section for creators.

### `components/Pricing/`

Contains components used on the `/pricing` page.

-   `Features.jsx`: A detailed feature comparison table.
-   `PricingHero.jsx`: The main component for the pricing page, displaying the pricing plans.

### `components/reusable/`

Contains reusable components that can be used anywhere in the application.

-   `AnimatedNumber.jsx`: A component that animates a number.

### `components/utils/`

Contains small, utility components, mostly SVG logos.

-   `AppleStoreLogo.jsx`, `Forbes.jsx`, `Logo.jsx`, `MetaLogo.jsx`, `Pocket.jsx`, `Telefonica.jsx`, `Unity.jsx`, `Vb.jsx`, `Wired.jsx`: SVG logos as React components.
-   `AvatarBackground.jsx`: A reusable SVG background pattern.

## 7. Data and Constants

The `constants` directory contains all the static data for the application.

-   `brands-page.js`: Data for the `/brands` page.
-   `landing-data.js`: Data for the landing page.
-   `pricing-page.js`: Data for the `/pricing` page.

To modify the content of the website, you can edit these files.

## 8. Styling

The project uses Tailwind CSS for styling. The configuration file is `tailwind.config.js`.

Global styles are defined in `app/globals.css`. Custom animations and styles for the landing page are in `app/landing.css`.

## 9. Deployment

The project is set up for deployment on Vercel, as indicated by the presence of the `.vercel` directory. To deploy the application, you can connect your Git repository to a Vercel account.
