# RC Cities Dubai

RC Cities is a premium single-page website for a Dubai experiential cafe that combines specialty coffee with remote-controlled scale construction machinery. The site presents the cafe concept, RC fleet, coffee menu, atmosphere, private and corporate events, booking calculator, location details, and booking/menu interactions.

## Tech Stack

- React 19 with TypeScript
- Vite
- Tailwind CSS
- Motion for animations
- Lucide React for icons

## Requirements

- Node.js 18 or newer
- npm

## Run Locally

1. Install dependencies:

	```bash
	npm install
	```

2. Start the development server:

	```bash
	npm run dev
	```

3. Open `http://localhost:3000` in your browser.

The Vite server is configured to listen on all host interfaces, which also makes the site available to other devices on the same network.

## Build for Production

Create an optimized production build with:

```bash
npm run build
```

The generated files are written to `dist/`. To serve that build locally, run:

```bash
npm run preview
```

## Validation and Cleanup

Run the TypeScript check without emitting files:

```bash
npm run lint
```

Remove generated build and server artifacts:

```bash
npm run clean
```

## Project Structure

```text
src/
  App.tsx                    Main single-page application and modal state
  index.css                  Global styles
  components/                Page sections, navigation, footer, and modals
  data/siteConfig.ts         Shared site and fleet content
  assets/images/             Image assets used by the site
raw/                         Source or working assets
index.html                   Vite HTML entry point
vite.config.ts               Vite and Tailwind configuration
```
