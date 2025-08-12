# 🖥️ Windows XP Portfolio

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A nostalgic Windows XP-style interactive portfolio website that recreates the authentic Windows XP desktop experience as a creative way to showcase professional skills, projects, and resume. Built with modern web technologies while maintaining the classic XP aesthetic.

## ✨ Live Demo

[View Live Portfolio](your-deployment-url-here) • [Report Bug](issues) • [Request Feature](issues)

## 📸 Screenshots

| Desktop View | Mobile View |
|--------------|-------------|
| ![Desktop](screenshots/desktop.png) | ![Mobile](screenshots/mobile.png) |

## 🚀 Features

### 🎨 Authentic Windows XP Experience
- **Classic Desktop Environment**: Complete with iconic Bliss wallpaper and XP styling
- **Fully Functional Windows**: Draggable, resizable, minimizable, and maximizable windows
- **Authentic Start Menu**: Windows XP Start menu with user profile and system options
- **XP Taskbar**: Classic blue gradient taskbar with Start button and active window management
- **Desktop Icons**: Clean, authentic desktop icons with hover effects

### 📁 Portfolio Content
- **About Section**: Professional background, skills, education, and experience
- **Projects Showcase**: Interactive project gallery with descriptions, technologies, and links
- **Resume Viewer**: Embedded PDF resume with download functionality
- **Contact Information**: Professional contact details and social media integration

### ⚙️ System Features
- **Control Panel**: Interactive XP-style system settings panel
- **Help & Support**: Comprehensive help center with navigation guide
- **Window Management**: Full window controls with session persistence

### 📱 Modern Enhancements
- **Responsive Design**: Mobile-optimized with adaptive layouts
- **Touch Support**: Complete touch gesture support for mobile devices
- **Performance Optimized**: Fast loading with efficient rendering
- **Cross-browser Compatible**: Works seamlessly across all modern browsers

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend framework | 18+ |
| **TypeScript** | Type safety | 5+ |
| **Vite** | Build tool and dev server | 5+ |
| **Tailwind CSS** | Styling framework | 3+ |
| **Wouter** | Lightweight routing | 3+ |
| **TanStack Query** | State management | 5+ |
| **Express.js** | Backend server | 4+ |

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/windows-xp-portfolio.git
   cd windows-xp-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking

# Database (if using database features)
npm run db:push      # Push database schema
npm run db:studio    # Open database studio
```

## 📂 Project Structure

```
windows-xp-portfolio/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── windows/      # Portfolio window components
│   │   │   ├── Desktop.tsx   # Main desktop interface
│   │   │   ├── Window.tsx    # Window wrapper component
│   │   │   └── Taskbar.tsx   # Bottom taskbar
│   │   ├── hooks/            # Custom React hooks
│   │   ├── data/             # Portfolio data and content
│   │   ├── types/            # TypeScript definitions
│   │   └── index.css         # Global styles and XP theme
├── server/                    # Express.js backend
├── shared/                    # Shared types and schemas
├── attached_assets/           # Static assets and images
└── README.md
```

## 🔧 Architecture

### Component Hierarchy
- **Desktop**: Main container managing the desktop environment
- **Window Management**: Custom window system with advanced features
- **Portfolio Windows**: Modular content components (About, Projects, Resume, Contact)
- **System Windows**: Control Panel and Help & Support

### State Management
- **Window Manager Hook**: Manages window states, positions, and z-index
- **Drag & Drop Hook**: Handles window dragging with touch support
- **Session Persistence**: Saves window positions across browser sessions

### Styling Strategy
- **Custom CSS Variables**: Windows XP color palette
- **Tailwind Extensions**: XP-specific utilities and components
- **Responsive Design**: Mobile-first approach with desktop enhancements

## 🎯 Key Components

### Core Components
- **Desktop.tsx**: Main desktop interface with icon management
- **Window.tsx**: Draggable, resizable, maximizable window wrapper
- **Taskbar.tsx**: Bottom taskbar with Start menu and window management
- **DesktopIcon.tsx**: Interactive desktop icons

### Portfolio Windows
- **AboutWindow.tsx**: Professional background and skills
- **ProjectsWindow.tsx**: Project showcase with interactive elements
- **ResumeWindow.tsx**: PDF resume viewer and download
- **ContactWindow.tsx**: Contact information and social links

### System Windows
- **ControlPanelWindow.tsx**: XP-style system settings
- **HelpSupportWindow.tsx**: Help center and navigation guide

## 🔄 Recent Updates

### ✅ Enhanced Window Management (January 2025)
- **Fixed Maximize Functionality**: Fully functional maximize/restore with proper state management
- **Improved Window Controls**: All window buttons (minimize, maximize, close) now work correctly
- **React Hooks Optimization**: Resolved all hooks rule violations for stable performance
- **Enhanced Mobile Support**: Better touch interactions and responsive behavior

### ✅ Performance Improvements
- **Optimized Re-rendering**: Proper useCallback and memoization implementation
- **Session Persistence**: Window positions automatically saved and restored
- **Cross-browser Compatibility**: Tested and optimized for all major browsers

## 🎨 Customization

### Updating Portfolio Content
Edit portfolio data in `client/src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  about: {
    name: "Your Name",
    title: "Your Professional Title",
    description: "Your professional summary...",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    education: [
      {
        degree: "Your Degree",
        institution: "Your University",
        year: "2020-2024"
      }
    ]
  },
  projects: [
    {
      title: "Project Name",
      description: "Project description",
      technologies: ["React", "TypeScript", "Node.js"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/your-username/project"
    }
  ],
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  }
};
```

### Changing Visual Assets
Replace images in `attached_assets/`:
- Desktop wallpaper images
- Profile photos
- Project screenshots
- Custom icons

### Theme Customization
Modify XP color scheme in `client/src/index.css`:
```css
:root {
  --xp-blue: #0078d4;
  --xp-light-blue: #4a9eff;
  --xp-green: #73aa24;
  /* Add custom colors */
}
```

## 🌐 Browser Compatibility

| Browser | Support Status | Features |
|---------|---------------|----------|
| **Chrome** | ✅ Full Support | All features including drag/drop |
| **Firefox** | ✅ Full Support | Complete compatibility |
| **Safari** | ✅ Full Support | macOS and iOS optimized |
| **Edge** | ✅ Full Support | Windows optimized |
| **Mobile Browsers** | ✅ Responsive | Touch-optimized interface |

## 🐛 Troubleshooting

### Common Issues

**Windows not dragging properly**
- Ensure you're dragging from the title bar area
- Check if window is maximized (maximized windows cannot be dragged)

**Maximize button not working**
- This has been fixed in the latest version
- Update to the latest commit for full functionality

**Mobile responsiveness issues**
- Clear browser cache and reload
- Ensure viewport meta tag is present in HTML

### Development Issues

**Build errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
# Run type checking
npm run type-check
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Use TypeScript for all new code
- Follow existing component patterns
- Add proper prop types and interfaces
- Include responsive design considerations
- Test on multiple browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Microsoft** for the iconic Windows XP design language
- **React Team** for the excellent framework
- **Tailwind CSS** for the utility-first approach
- **Vite** for the lightning-fast build tool

## 📞 Support

- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Report bugs via [GitHub Issues](issues)
- **Discussions**: Join community discussions in [GitHub Discussions](discussions)

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ and nostalgia for Windows XP

</div>