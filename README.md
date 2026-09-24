# FitLog

FitLog is a workout library and planning app for browsing exercises, viewing exercise details, and organizing workouts into a personal plan. Users can save exercises for later, add exercises to today's plan, and track the total planned workout duration.

## Technologies Used

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- DaisyUI
- React Context API for shared workout-plan state
- React Toastify for notifications
- Lucide React for icons
- Next/Image and `next/font` for optimized assets and fonts

## Features

- Browse a workout exercise library
- View exercise details, including muscle groups, equipment, difficulty, duration, sets, reps, ratings, and instructions
- Add exercises to today's workout plan
- Save exercises for later
- Switch between today's plan and saved exercises
- Calculate the total duration of today's planned workout
- Responsive layout for desktop and mobile screens
- Toast notifications for user actions
- Sticky footer layout for short and long pages

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Start the production server
```

## Data Source

Exercise data is loaded from the FitLog API at `https://api.abcz.workers.dev/api/fitlog`.
