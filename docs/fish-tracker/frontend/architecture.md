---
title: Frontend Architecture
sidebar_label: Architecture
---

# Frontend Architecture

## Core Technologies

### Styling & UI
- **Tailwind CSS**
- **Framer Motion**: Animation library
- **React Icons**: Icon library


## Application Structure

### Pages (`/pages`)
The app uses Next.js file-based routing with these main pages:

1. **`index.tsx`** - Landing page with hero section and navigation
2. **`login.tsx`** - Authentication page with cookie-based session storage
3. **`stats.tsx`** - Main user dashboard with statistics, filtering and search option
4. **`demo.tsx`** - Public demo mode
5. **`admin.tsx`** - Administrative panel with multi-tab interface
6. **`logged-out.tsx`** - Logout page

### Components (`/components`)
Reusable UI components:

1. **`NavBar.tsx`** - Responsive navigation with authentication state
2. **`StatCard.tsx`** - Animated statistics display cards

### Utilities (`/utils`)
1. **`adminAPI.ts`** - TypeScript interfaces and API client functions

## Technical Implementation Details

### Data Flow
1. **Authentication**: Username stored in browser cookies
2. **API Calls**: Fetch user data from [backend](../backend) endpoints
4. **Real-time Updates**: Automatic data refresh on gamemode changes
