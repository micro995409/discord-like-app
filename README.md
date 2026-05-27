# Discord-style Chat App

A Discord-inspired chat application built with Next.js (App Router), Socket.IO, MongoDB, and NextAuth.

## Features

- Tailwind CSS front-end styling
- WebSocket chat with Socket.IO
- NextAuth credentials authentication
- MongoDB models for users, servers, channels, and messages
- App router pages for home, login, and dashboard

## Getting Started

1. Copy `.env.local.example` to `.env.local`.
2. Set `MONGODB_URI`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL`.
3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Project Structure

- `app/` - app router pages and API auth route
- `components/` - reusable UI components
- `lib/` - database, auth, and socket helpers
- `models/` - Mongoose schemas for MongoDB
- `pages/api/socket.ts` - Socket.IO server endpoint
- `styles/` - global Tailwind CSS styles

## Notes

- Create at least one user in MongoDB before signing in, or extend the app with registration.
- Socket.IO uses `/api/socket` for real-time chat events.
