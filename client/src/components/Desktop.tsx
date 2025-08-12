import { useEffect } from "react";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { DesktopIcon } from "./DesktopIcon";
import { Window } from "./Window";
import { Taskbar } from "./Taskbar";
import { AboutWindow } from "./windows/AboutWindow";
import { ProjectsWindow } from "./windows/ProjectsWindow";
import { ResumeWindow } from "./windows/ResumeWindow";
import { ContactWindow } from "./windows/ContactWindow";

// Import icon images
import aboutIcon from "@assets/about-me_1754994898813.jpg";
import projectsIcon from "@assets/projects_1754994898814.jpg";
import resumeIcon from "@assets/resume_1754994898814.jpg";
import contactIcon from "@assets/contact_1754994898813.jpg";

const desktopIcons = [
  { id: "about", title: "About Me", icon: "fas fa-user", iconImage: aboutIcon },
  { id: "projects", title: "Projects", icon: "fas fa-code", iconImage: projectsIcon },
  { id: "resume", title: "Resume", icon: "fas fa-file-pdf", iconImage: resumeIcon },
  { id: "contact", title: "Contact", icon: "fas fa-envelope", iconImage: contactIcon }
];

export function Desktop() {
  const {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    bringToFront,
    updateWindowPosition
  } = useWindowManager();

  const { handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd } = useDragAndDrop();

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const renderWindowContent = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return <AboutWindow />;
      case 'projects':
        return <ProjectsWindow />;
      case 'resume':
        return <ResumeWindow />;
      case 'contact':
        return <ContactWindow />;
      default:
        return <div>Window content not found</div>;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden select-none font-xp">
      {/* Desktop Background */}
      <div className="fixed inset-0 desktop-background" />

      {/* Desktop Icons */}
      <div className="desktop-icons fixed top-4 left-4 space-y-6 z-10">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            title={icon.title}
            icon={icon.icon}
            iconImage={icon.iconImage}
            onClick={openWindow}
          />
        ))}
      </div>

      {/* Windows Container */}
      <div className="fixed inset-0 pointer-events-none">
        {windows.map((window) => (
          <Window
            key={window.id}
            window={window}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onBringToFront={bringToFront}
            onPositionChange={updateWindowPosition}
          >
            {renderWindowContent(window.id)}
          </Window>
        ))}
      </div>

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        onOpenWindow={openWindow}
        onRestoreWindow={restoreWindow}
      />
    </div>
  );
}
