import { useState, useCallback, useEffect } from "react";
import { WindowState, WindowConfig } from "@/types/window";

const INITIAL_Z_INDEX = 100;

const windowConfigs: WindowConfig[] = [
  {
    id: "about",
    title: "About Me",
    icon: "fas fa-user",
    defaultPosition: { x: 128, y: 80 },
    defaultSize: { width: 384, height: 320 }
  },
  {
    id: "projects", 
    title: "Projects",
    icon: "fas fa-code",
    defaultPosition: { x: 144, y: 96 },
    defaultSize: { width: 600, height: 384 }
  },
  {
    id: "resume",
    title: "Resume", 
    icon: "fas fa-file-pdf",
    defaultPosition: { x: 160, y: 112 },
    defaultSize: { width: 700, height: 500 }
  },
  {
    id: "contact",
    title: "Contact",
    icon: "fas fa-envelope", 
    defaultPosition: { x: 176, y: 128 },
    defaultSize: { width: 320, height: 264 }
  },
  {
    id: "control-panel",
    title: "Control Panel",
    icon: "fas fa-cog",
    defaultPosition: { x: 200, y: 150 },
    defaultSize: { width: 600, height: 450 }
  },
  {
    id: "help-support",
    title: "Help and Support",
    icon: "fas fa-question-circle",
    defaultPosition: { x: 220, y: 170 },
    defaultSize: { width: 550, height: 400 }
  }
];

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [currentZIndex, setCurrentZIndex] = useState(INITIAL_Z_INDEX);

  // Load window positions from session storage
  useEffect(() => {
    const savedPositions = sessionStorage.getItem('windowPositions');
    const positions = savedPositions ? JSON.parse(savedPositions) : {};
    
    const initialWindows = windowConfigs.map(config => ({
      id: config.id,
      title: config.title,
      icon: config.icon,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      position: positions[config.id] || config.defaultPosition,
      size: config.defaultSize,
      zIndex: INITIAL_Z_INDEX
    }));
    
    setWindows(initialWindows);
  }, []);

  // Save window positions to session storage
  const saveWindowPositions = useCallback(() => {
    const positions = windows.reduce((acc, window) => {
      acc[window.id] = window.position;
      return acc;
    }, {} as Record<string, { x: number; y: number }>);
    
    sessionStorage.setItem('windowPositions', JSON.stringify(positions));
  }, [windows]);

  const openWindow = useCallback((windowId: string) => {
    setCurrentZIndex(prev => prev + 1);
    setWindows(prev => prev.map(window => 
      window.id === windowId 
        ? { ...window, isOpen: true, isMinimized: false, zIndex: currentZIndex + 1 }
        : window
    ));
  }, [currentZIndex]);

  const closeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(window =>
      window.id === windowId
        ? { ...window, isOpen: false, isMinimized: false }
        : window
    ));
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(window =>
      window.id === windowId
        ? { ...window, isMinimized: true }
        : window
    ));
  }, []);

  const restoreWindow = useCallback((windowId: string) => {
    setCurrentZIndex(prev => prev + 1);
    setWindows(prev => prev.map(window =>
      window.id === windowId
        ? { ...window, isMinimized: false, isMaximized: false, zIndex: currentZIndex + 1 }
        : window
    ));
  }, [currentZIndex]);

  const bringToFront = useCallback((windowId: string) => {
    setCurrentZIndex(prev => prev + 1);
    setWindows(prev => prev.map(window =>
      window.id === windowId
        ? { ...window, zIndex: currentZIndex + 1 }
        : window
    ));
  }, [currentZIndex]);

  const updateWindowPosition = useCallback((windowId: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(window =>
      window.id === windowId
        ? { ...window, position }
        : window
    ));
  }, []);

  const updateWindowSize = useCallback((windowId: string, size: { width: number; height: number }, position?: { x: number; y: number }) => {
    setWindows(prev => prev.map(window =>
      window.id === windowId
        ? { 
            ...window, 
            size,
            ...(position && { position })
          }
        : window
    ));
  }, []);

  // Save positions when windows change
  useEffect(() => {
    if (windows.length > 0) {
      saveWindowPositions();
    }
  }, [windows, saveWindowPositions]);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    bringToFront,
    updateWindowPosition,
    updateWindowSize
  };
}
