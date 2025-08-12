import { useEffect, useRef } from "react";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { WindowState } from "@/types/window";
import { useIsMobile } from "@/hooks/use-mobile";

interface WindowProps {
  window: WindowState;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onBringToFront: (id: string) => void;
  onPositionChange: (id: string, position: { x: number; y: number }) => void;
  children: React.ReactNode;
}

export function Window({ 
  window, 
  onClose, 
  onMinimize, 
  onBringToFront,
  onPositionChange,
  children 
}: WindowProps) {
  const isMobile = useIsMobile();
  const windowRef = useRef<HTMLDivElement>(null);

  const { dragRef, isDragging, handleMouseDown, handleTouchStart } = useDragAndDrop(
    (position) => {
      if (windowRef.current) {
        windowRef.current.style.left = `${position.x}px`;
        windowRef.current.style.top = `${position.y}px`;
      }
    },
    (position) => {
      onPositionChange(window.id, position);
    }
  );

  useEffect(() => {
    if (windowRef.current && !isMobile) {
      windowRef.current.style.left = `${window.position.x}px`;
      windowRef.current.style.top = `${window.position.y}px`;
      windowRef.current.style.width = `${window.size.width}px`;
      windowRef.current.style.height = `${window.size.height}px`;
      windowRef.current.style.zIndex = window.zIndex.toString();
    }
  }, [window.position, window.size, window.zIndex, isMobile]);

  if (!window.isOpen) return null;

  const handleWindowClick = () => {
    onBringToFront(window.id);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(window.id);
  };

  const handleMinimizeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMinimize(window.id);
  };

  return (
    <div
      ref={windowRef}
      className={`
        window fixed bg-white window-shadow rounded-t pointer-events-auto
        ${window.isMinimized ? 'hidden' : ''}
        ${isDragging ? 'dragging' : ''}
        ${isMobile ? 'top-0 left-0 w-full h-[calc(100vh-80px)] rounded-none' : ''}
        window-open
      `}
      onClick={handleWindowClick}
      onMouseDown={handleWindowClick}
      data-testid={`window-${window.id}`}
    >
      <div 
        ref={dragRef}
        className="window-header xp-window-header text-white p-2 rounded-t flex justify-between items-center cursor-move"
        onMouseDown={!isMobile ? handleMouseDown : undefined}
        onTouchStart={!isMobile ? handleTouchStart : undefined}
        data-testid={`window-header-${window.id}`}
      >
        <div className="flex items-center space-x-2">
          <i className={`${window.icon} text-sm`}></i>
          <span className="text-sm font-bold">{window.title}</span>
        </div>
        <div className="flex space-x-1">
          <button 
            className="w-5 h-5 xp-button text-xs flex items-center justify-center hover:bg-gray-200"
            onClick={handleMinimizeClick}
            data-testid={`button-minimize-${window.id}`}
          >
            _
          </button>
          <button 
            className="w-5 h-5 xp-button text-xs flex items-center justify-center hover:bg-gray-200"
            data-testid={`button-maximize-${window.id}`}
          >
            □
          </button>
          <button 
            className="w-5 h-5 bg-red-500 border border-red-600 text-white text-xs flex items-center justify-center hover:bg-red-600"
            onClick={handleCloseClick}
            data-testid={`button-close-${window.id}`}
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-content p-4 h-[calc(100%-40px)] overflow-auto">
        {children}
      </div>
    </div>
  );
}
