import { useState, useEffect } from "react";
import { WindowState } from "@/types/window";
import { StartMenu } from "./StartMenu";
import { useIsMobile } from "@/hooks/use-mobile";

interface TaskbarProps {
  windows: WindowState[];
  onOpenWindow: (windowId: string) => void;
  onRestoreWindow: (windowId: string) => void;
}

export function Taskbar({ windows, onOpenWindow, onRestoreWindow }: TaskbarProps) {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const closeStartMenu = () => {
    setIsStartMenuOpen(false);
  };

  const handleWindowButtonClick = (window: WindowState) => {
    if (window.isMinimized) {
      onRestoreWindow(window.id);
    } else {
      onRestoreWindow(window.id); // Bring to front
    }
  };

  const openWindows = windows.filter(w => w.isOpen);

  if (isMobile) {
    // Mobile navigation
    const mobileItems = [
      { id: "about", icon: "fas fa-user", title: "About" },
      { id: "projects", icon: "fas fa-code", title: "Projects" },
      { id: "resume", icon: "fas fa-file-pdf", title: "Resume" },
      { id: "contact", icon: "fas fa-envelope", title: "Contact" }
    ];

    return (
      <div className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-300 p-4 z-50 mobile-nav">
        <div className="grid grid-cols-4 gap-4">
          {mobileItems.map((item) => (
            <button 
              key={item.id}
              className="mobile-nav-btn flex flex-col items-center space-y-1"
              onClick={() => onOpenWindow(item.id)}
              data-testid={`mobile-nav-${item.id}`}
            >
              <div className="w-12 h-12 xp-button rounded flex items-center justify-center">
                <i className={`${item.icon} text-xl ${item.id === 'resume' ? 'text-red-600' : item.id === 'contact' ? 'text-blue-600' : 'text-gray-700'}`}></i>
              </div>
              <span className="text-xs">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-10 xp-taskbar border-t border-gray-400 flex items-center px-2 z-50">
        {/* Start Button */}
        <button 
          className="xp-start-button text-white px-4 py-1 rounded-r text-sm font-bold border border-gray-400 hover:brightness-110 flex items-center space-x-2"
          onClick={toggleStartMenu}
          data-testid="button-start"
        >
          <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
          </div>
          <span>Start</span>
        </button>

        {/* Window Buttons */}
        <div className="flex ml-2 space-x-1">
          {openWindows.map((window) => (
            <button
              key={window.id}
              className={`xp-button border border-gray-400 px-3 py-1 text-xs hover:bg-gray-200 min-w-0 max-w-32 truncate ${
                window.isMinimized ? 'opacity-60' : ''
              }`}
              onClick={() => handleWindowButtonClick(window)}
              data-testid={`taskbar-window-${window.id}`}
            >
              {window.title}
            </button>
          ))}
        </div>

        {/* Clock */}
        <div className="ml-auto bg-xp-gray border border-gray-400 px-3 py-1 text-xs">
          <span data-testid="taskbar-clock">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      <StartMenu 
        isOpen={isStartMenuOpen}
        onClose={closeStartMenu}
        onOpenWindow={onOpenWindow}
      />
    </>
  );
}
