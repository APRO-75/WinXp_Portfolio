# Overview

This is a Windows XP-style interactive portfolio website that recreates the nostalgic Windows XP desktop experience as a creative way to showcase professional skills, projects, and resume. The application features a desktop environment with draggable windows, a taskbar, start menu, and desktop icons, all styled with authentic Windows XP visual elements while maintaining modern web standards and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a React-based single-page application (SPA) architecture with the following key design decisions:

- **React with TypeScript**: Provides type safety and modern component-based development
- **Vite**: Chosen for fast development builds and hot module replacement
- **Wouter**: Lightweight routing library for client-side navigation
- **TanStack React Query**: Handles server state management and caching
- **Tailwind CSS**: Utility-first CSS framework for rapid styling with custom Windows XP theming

## Component Structure
The application follows a hierarchical component design:

- **Desktop**: Main container component managing the desktop environment
- **Window Management**: Custom window system with drag-and-drop, minimize/maximize, and z-index management
- **UI Components**: Comprehensive shadcn/ui component library with Windows XP styling overrides
- **Window Content**: Modular window components (About, Projects, Resume, Contact)

## State Management
- **Window Manager Hook**: Custom hook (`useWindowManager`) manages all window states, positions, and z-index ordering
- **Drag and Drop Hook**: Custom hook (`useDragAndDrop`) handles window dragging functionality with touch support
- **Session Storage**: Persists window positions across browser sessions

## Responsive Design
- **Mobile-First Approach**: Desktop icons hidden on mobile, replaced with bottom navigation
- **Adaptive UI**: Windows become full-screen modals on mobile devices
- **Touch Support**: Full touch gesture support for mobile interactions

## Styling Strategy
- **Custom CSS Variables**: Windows XP color palette defined in CSS custom properties
- **Tailwind Extensions**: Extended Tailwind configuration with XP-specific colors and fonts
- **Component Variants**: Using class-variance-authority for consistent component styling

## Data Architecture
- **Static Portfolio Data**: Centralized portfolio information in `/data/portfolio.ts`
- **Type Safety**: Comprehensive TypeScript interfaces for window states and configurations
- **Modular Content**: Each window component renders specific portfolio sections

# Recent Changes

## January 12, 2025 - React Hooks Optimization
- **Issue Fixed**: Resolved React hooks rule violations causing "Rendered more hooks than during the previous render" errors
- **Root Cause**: The `useIsMobile` hook was returning `undefined` initially, causing inconsistent render cycles
- **Solution Applied**: 
  - Modified `useIsMobile` hook to initialize with actual boolean value instead of undefined
  - Moved early return (`if (!window.isOpen) return null`) after all hooks in Window component
  - Added proper useCallback dependencies for all event handlers
- **Result**: Application now runs without React hooks errors and maintains stable window management

## Window Management System
- **Advanced Resizing**: 8-directional window resizing with proper cursor feedback
- **Touch Support**: Complete mobile device compatibility with touch gestures
- **Session Persistence**: Window positions automatically saved and restored
- **Performance**: Optimized re-rendering with proper memoization and useCallback usage

## Development Status
- Core functionality: ✅ Complete and stable
- React hooks compliance: ✅ All violations resolved
- Mobile responsiveness: ✅ Fully functional
- Window management: ✅ Advanced features working
- Browser compatibility: ✅ Cross-browser tested
- **Modular Content**: Each window component renders specific portfolio sections

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible primitive components for complex UI interactions
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library for modern icons
- **Font Awesome**: Legacy icon support for Windows XP authentic styling
- **Google Fonts**: Tahoma font family for authentic Windows XP typography

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and enhanced development experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

## Database and Backend
- **Drizzle ORM**: Type-safe database ORM configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database provider
- **Express.js**: Backend server framework (minimal implementation)
- **Session Management**: PostgreSQL session storage with connect-pg-simple

## State and Query Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library integrated with Drizzle

## Mobile and Accessibility
- **React Touch**: Touch gesture support for mobile interactions
- **ARIA Compliance**: Accessible components through Radix UI primitives
- **Responsive Design**: Mobile-first approach with desktop enhancements

The architecture prioritizes user experience through smooth animations, responsive design, and authentic Windows XP styling while maintaining modern web development best practices and accessibility standards.