# 🖥️ Windows XP Portfolio - Apoorva Prakash

A nostalgic Windows XP-style interactive portfolio website that recreates the authentic Windows XP desktop experience as a creative way to showcase professional skills, projects, and resume. Built with modern web technologies while maintaining the classic XP aesthetic.

![Windows XP Portfolio](https://img.shields.io/badge/Windows-XP_Style-0078d4?style=for-the-badge&logo=windows&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎨 Authentic Windows XP Experience
- **Classic Desktop Environment**: Complete with the iconic Bliss wallpaper and XP styling
- **Draggable Windows**: Fully functional window system with drag-and-drop support
- **Start Menu**: Authentic Windows XP Start menu with user profile and system options
- **Taskbar**: Classic blue gradient taskbar with Start button and window management
- **Desktop Icons**: Clean, borderless icons matching the original XP aesthetic

### 📁 Portfolio Sections
- **About Me**: Professional background, skills, and education details
- **Projects**: Showcase of development work and technical projects
- **Resume**: Embedded PDF resume viewer with download functionality
- **Contact**: Professional contact information and social media links

### ⚙️ System Windows
- **Control Panel**: Interactive system settings panel with XP-style categories
- **Help & Support**: Comprehensive help center with navigation tips and contact info
- **Turn Off Computer**: Realistic shutdown functionality that closes the browser tab

### 📱 Modern Features
- **Responsive Design**: Mobile-optimized with adaptive layouts
- **Touch Support**: Full touch gesture support for mobile devices
- **Type Safety**: Built with TypeScript for enhanced development experience
- **Performance**: Optimized with Vite for fast loading and hot reload

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/APRO-75/windows-xp-portfolio.git
   cd windows-xp-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000` to view the portfolio

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Database operations (if using database features)
npm run db:push
npm run db:studio
```

## 📋 Project Structure

```
windows-xp-portfolio/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── windows/     # Window content components
│   │   │   ├── Desktop.tsx  # Main desktop component
│   │   │   ├── Taskbar.tsx  # Taskbar with Start menu
│   │   │   └── Window.tsx   # Window wrapper component
│   │   ├── hooks/           # Custom React hooks
│   │   ├── data/            # Static data and portfolio content
│   │   ├── types/           # TypeScript type definitions
│   │   └── index.css        # Global styles and XP theming
├── server/                   # Express.js backend (minimal)
├── shared/                   # Shared types and schemas
├── attached_assets/          # Static assets and images
└── README.md
```

## 🎯 Key Components

### Desktop Environment
- **Desktop.tsx**: Main container managing the desktop interface with icon grid
- **Window.tsx**: Fully draggable and resizable window wrapper with authentic XP styling
- **Taskbar.tsx**: Bottom taskbar with Start button and active window management
- **DesktopIcon.tsx**: Interactive desktop icons with hover effects

### Portfolio Windows
- **AboutWindow.tsx**: Professional background, skills, and education details
- **ProjectsWindow.tsx**: Interactive project showcase with links and descriptions
- **ResumeWindow.tsx**: Embedded PDF resume viewer with download functionality
- **ContactWindow.tsx**: Contact information with social media integration

### System Windows
- **ControlPanelWindow.tsx**: Authentic XP-style system settings panel
- **HelpSupportWindow.tsx**: Comprehensive help center and navigation guide

## 🔧 Recent Improvements (Latest Updates)

### ✅ React Hooks Optimization (January 2025)
- **Fixed React Hooks Rule Violations**: Resolved "Rendered more hooks than during the previous render" errors
- **Improved useIsMobile Hook**: Eliminated undefined state issues causing rendering inconsistencies
- **Enhanced Window Component Stability**: Restructured hook calling order for consistent behavior
- **Performance Optimizations**: Added proper useCallback dependencies and memoization

### ✅ Window Management Enhancements
- **Advanced Resize Functionality**: 8-directional window resizing with visual cursor feedback
- **Touch Device Support**: Full mobile and tablet compatibility with touch gestures
- **Session Persistence**: Window positions saved across browser sessions
- **Z-Index Management**: Proper window layering and focus handling

## 🎨 Customization

### Updating Portfolio Content
Edit the portfolio data in `client/src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  about: {
    name: "Your Name",
    title: "Your Title",
    description: "Your description...",
    // ... more fields
  },
  projects: [
    {
      title: "Project Name",
      description: "Project description",
      // ... more project details
    }
  ]
};
```

### Browser Compatibility
- ✅ **Chrome**: Full support with all features
- ✅ **Firefox**: Complete compatibility including drag/drop
- ✅ **Safari**: Full support on macOS and iOS
- ✅ **Edge**: Microsoft Edge with full Windows XP nostalgia
- ✅ **Mobile Browsers**: Responsive design adapts to touch interfaces

### Development Status
- 🟢 **Core Features**: Complete and stable
- 🟢 **Window Management**: Fully functional with resize support
- 🟢 **Mobile Responsiveness**: Optimized for all device sizes
- 🟢 **React Hooks**: All violations fixed and optimized
- 🟢 **Performance**: Fast loading with efficient re-rendering

### Changing Assets
Replace images in the `attached_assets/` folder:
- `bliss-wallpaper_*.jpg` - Desktop background
- `profile_*.jpg` - Profile photo
- Custom desktop icons for authentic XP look

### Styling Modifications
Customize Windows XP colors in `client/src/index.css`:

```css
:root {
  --xp-blue: #0831d9;
  --xp-blue-dark: #0831a9;
  --xp-green: #73d216;
  /* ... more XP color variables */
}
```

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)

### Deploy to Replit
1. Import your GitHub repository to [Replit](https://replit.com)
2. Run `npm install` and then `npm run dev`
3. Use Replit's deployment feature for hosting

## 🔧 Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with enhanced IDE support
- **Vite**: Fast build tool with HMR for development
- **Tailwind CSS**: Utility-first CSS framework with custom XP theming
- **Wouter**: Lightweight routing for client-side navigation

### UI Components
- **Radix UI**: Accessible primitive components
- **Lucide React**: Modern icon library
- **Font Awesome**: Legacy icons for authentic XP styling
- **React Hook Form**: Form handling with validation

### State Management
- **TanStack React Query**: Server state and caching
- **Custom Hooks**: Window management and drag-and-drop functionality
- **Session Storage**: Persistent window positions

### Backend (Optional)
- **Express.js**: Minimal server for API endpoints
- **Drizzle ORM**: Type-safe database operations
- **PostgreSQL**: Database for dynamic content (if needed)

## 📝 Features in Detail

### Window Management
- **Draggable Windows**: Click and drag title bars to move windows
- **Z-Index Management**: Automatic window focus and layering
- **Minimize/Close**: Functional window controls
- **Responsive Sizing**: Adaptive window sizes for mobile devices

### Authentic XP Styling
- **Gradient Backgrounds**: Authentic XP window and button gradients
- **Classic Fonts**: Tahoma and MS Sans Serif font families
- **Icon Styling**: Borderless, clean desktop icons
- **Color Scheme**: Authentic XP blue and green color palette

### Interactive Elements
- **Start Menu**: Portfolio navigation and system options
- **Desktop Icons**: Double-click to open windows
- **Control Panel**: System settings with XP-style categories
- **Help System**: Comprehensive help and navigation guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Apoorva Prakash**
- 🎓 Computer Science Student at SRM Institute
- 🔐 Specializing in Cyber Security
- 💻 Passionate about Full Stack Development and AI/ML
- 🌟 Creating innovative solutions with modern technologies

### Connect with Me
- 📧 **Email**: [ap75ro@gmail.com](mailto:ap75ro@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/apoorva-prakash-a00196265/](https://linkedin.com/in/apoorva-prakash-a00196265/)
- 🐙 **GitHub**: [github.com/APRO-75](https://github.com/APRO-75)

## 🙏 Acknowledgments

- **Microsoft Windows XP**: For the iconic design inspiration
- **Replit**: For the development environment and deployment platform
- **Open Source Community**: For the amazing tools and libraries used in this project

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ and nostalgia for the classic Windows XP experience*