# CineFlix - Netflix Clone with Glassmorphic Design

A modern streaming platform built with React, TypeScript, and Tailwind CSS featuring a beautiful glassmorphic design.

## Features

- 🎬 Browse trending movies and TV shows
- 🔍 Search functionality
- 🎥 Watch trailers
- 📱 Responsive design
- ✨ Glassmorphic UI elements
- 🎯 Movie categories (Action, Comedy, Horror, Romance, Documentaries)
- ⭐ Top rated and Netflix Originals sections

## Setup

1. Install dependencies:
```bash
npm install
```

2. Get your TMDB API key:
   - Go to https://www.themoviedb.org/
   - Create a free account
   - Navigate to Settings → API → Request an API Key
   - Choose "Developer" option
   - Fill out the form

3. Create a `.env` file in the root directory:
```
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- TMDB API

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API services
├── types/         # TypeScript types
└── App.tsx        # Main app component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository: `vishalmk26/CineFlix`
5. Add environment variable:
   - Name: `VITE_TMDB_API_KEY`
   - Value: `0fa166b74c619b05dab31b8411043996`
6. Click "Deploy"

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `vishalmk26/CineFlix`
4. Add environment variable:
   - Key: `VITE_TMDB_API_KEY`
   - Value: `0fa166b74c619b05dab31b8411043996`
5. Click "Deploy site"

### Manual Deployment

```bash
npm install
npm run build
# Upload the 'dist' folder to your hosting provider
```
