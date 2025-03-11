This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## This is a Delivery App

# Delivery App

A modern delivery management system built with Next.js, featuring real-time driver tracking, AI-powered route optimization, and an intuitive admin dashboard.

## Features

- 🚚 **Real-time Driver Tracking**: Track delivery drivers' locations in real-time
- 🗺️ **Smart Route Optimization**: AI-powered sorting of orders based on postal codes
- 📱 **Driver Mobile Interface**: Easy-to-use interface for drivers with navigation
- 👨‍💼 **Admin Dashboard**: Comprehensive order management and driver assignment
- 🔐 **Secure Authentication**: User authentication powered by Clerk
- 📍 **Live Navigation**: Integration with Google Maps for turn-by-turn directions

## Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Maps**: Leaflet.js for maps, Google Maps for navigation
- **Authentication**: Clerk
- **AI**: OpenAI GPT-4 for route optimization
- **Real-time Updates**: Server-side updates with polling

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```
   DATABASE_URL="your-postgresql-url"
   OPENAI_API_KEY="your-openai-api-key"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app

## Project Structure

- `/app/(back-end)`: Admin dashboard and management interfaces
- `/app/(front-end)`: Customer-facing pages
- `/app/api`: API routes for orders, drivers, and location tracking
- `/components`: Reusable UI components
- `/prisma`: Database schema and migrations

## Key Features Implementation

### Driver Tracking
- Real-time location updates using browser's Geolocation API
- Location data stored in PostgreSQL with PostGIS
- Map visualization using Leaflet.js

### Order Management
- Smart order sorting using OpenAI's GPT-4
- Automatic grouping of orders by postal code proximity
- Real-time order status updates

### Navigation
- Integration with Google Maps for turn-by-turn navigation
- Optimal route calculation for multiple deliveries
- Real-time traffic updates

## Contributing

Feel free to submit issues and enhancement requests!

## Dependency Installed
# sass for css
# lucide-react for Icons 
# Installed react-chartjs-2

## For the Images ... I did Install uploadthing 
but I first created an account 


## Category 
This is where the Admin can differentiate between items and have a specific Description for each Item 

## Coupons
This is when there are offers for customers to have a reduction for products 



Username:harry23adjei
Password:ptbXgQrgVjhH3KOm
mongodb+srv://harry23adjei:ptbXgQrgVjhH3KOm@cluster0.pcbq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



terminal runs
when added new things to the Prisma schema
end the terminal
//
npx prisma db push

then 
//
npm run dev 