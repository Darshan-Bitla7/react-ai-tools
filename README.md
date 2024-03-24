# Overview-

This is an application that allows users to seamlessly navigate through multiple different AI-tools in the market and explore them further. The user experience is of utmost importance and hence the application is made to be interactive so that the user spends more time on the application.

# Technology Stack used-

- **JavaScript Framework:** React.js
- **Major Plugins/Packages:**
  - **Vite:** For fast development server and optimized build.
  - **Material UI:** To make use of certain ready to use React UI components.
  - **React-loader-spinner:** To make use of readymade loaders.
  - **VantaJS:** To implement interactive and 3D visuals in the app.
  - **JSON Placeholder:** To make use of a mock API.

# Page load time initially

The page load time is 987ms. This was measured using the Pingdom Speed test website.

# Optimization efforts after 1st deployment-

To optimize the webpage-

1. The Largest Contentful Paint(LCP) element was reduced from 850kb to 18kb which boosted it's load time by 66%.
2. Used React Context API to avoid prop drilling and repeated fetch requests.
3. Converted all static images from PNG to WEBP for faster downloads and lesser data consumption. Also tried to use smaller sized images wherever possible.
4. Implemented lazy loading in HTML for all the dynamic images to shorten the length of the critical rendering path, which translates into reduced page load times.
5. Implented Lazy loading in React for code splitting and optimization.
6. All the JavaScript and CSS files were refactored to remove redundant code.
7. All external dependencies were loaded through a CDN instead of bundling them with the application.

# Final Page load time-

- Total Blocking Time was brought down from 26,690 ms to 430 ms.
- First Contentful Paint(FCP) was reduced from 1.2s to 0.9s.
- The final page load time after optimization was 572ms as measured using the Pingdom Speed test website.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
