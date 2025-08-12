import { useEffect, useRef, useCallback, useState } from "react";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { WindowState } from "@/types/window";
import { useIsMobile } from "@/hooks/use-mobile";

interface WindowProps {
  window: WindowState;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onBringToFront: (id: string) => void;
  onPositionChange: (id: string, position: { x: number; y: number }) => void;
  onSizeChange: (id: string, size: { width: number; height: number }, position?: { x: number; y: number }) => void;
  children: React.ReactNode;
}

export function Window({ 
  window, 
  onClose, 
  onMinimize, 
  onMaximize,
  onBringToFront,
  onPositionChange,
  onSizeChange,
  children 
}: WindowProps) {
  const isMobile = useIsMobile();
  const windowRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeData, setResizeData] = useState<{
    direction: string;
    startPos: { x: number; y: number };
    startSize: { width: number; height: number };
    startPosition: { x: number; y: number };
  } | null>(null);

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

  const getResizeDirection = useCallback((e: React.MouseEvent) => {
    if (!windowRef.current) return '';
    
    const rect = windowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const threshold = 8;

    const isNear = {
      top: y <= threshold,
      bottom: y >= rect.height - threshold,
      left: x <= threshold,
      right: x >= rect.width - threshold
    };

    if (isNear.top && isNear.left) return 'nw-resize';
    if (isNear.top && isNear.right) return 'ne-resize';
    if (isNear.bottom && isNear.left) return 'sw-resize';
    if (isNear.bottom && isNear.right) return 'se-resize';
    if (isNear.top) return 'n-resize';
    if (isNear.bottom) return 's-resize';
    if (isNear.left) return 'w-resize';
    if (isNear.right) return 'e-resize';

    return '';
  }, []);

  const handleMouseMoveResize = useCallback((e: MouseEvent) => {
    if (!isResizing || !resizeData || !windowRef.current) return;

    const deltaX = e.clientX - resizeData.startPos.x;
    const deltaY = e.clientY - resizeData.startPos.y;

    let newWidth = resizeData.startSize.width;
    let newHeight = resizeData.startSize.height;
    let newX = resizeData.startPosition.x;
    let newY = resizeData.startPosition.y;

    const direction = resizeData.direction;
    const minWidth = 300;
    const minHeight = 200;

    // Handle horizontal resizing
    if (direction.includes('e')) {
      newWidth = Math.max(minWidth, resizeData.startSize.width + deltaX);
    } else if (direction.includes('w')) {
      newWidth = Math.max(minWidth, resizeData.startSize.width - deltaX);
      if (newWidth > minWidth) {
        newX = resizeData.startPosition.x + deltaX;
      }
    }

    // Handle vertical resizing
    if (direction.includes('s')) {
      newHeight = Math.max(minHeight, resizeData.startSize.height + deltaY);
    } else if (direction.includes('n')) {
      newHeight = Math.max(minHeight, resizeData.startSize.height - deltaY);
      if (newHeight > minHeight) {
        newY = resizeData.startPosition.y + deltaY;
      }
    }

    // Update styles immediately
    windowRef.current.style.width = `${newWidth}px`;
    windowRef.current.style.height = `${newHeight}px`;
    windowRef.current.style.left = `${newX}px`;
    windowRef.current.style.top = `${newY}px`;

    // Update state
    onSizeChange(window.id, { width: newWidth, height: newHeight }, { x: newX, y: newY });
  }, [isResizing, resizeData, onSizeChange, window.id]);

  const handleMouseUpResize = useCallback(() => {
    if (isResizing) {
      setIsResizing(false);
      setResizeData(null);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  }, [isResizing]);

  useEffect(() => {
    if (windowRef.current && !isMobile) {
      windowRef.current.style.left = `${window.position.x}px`;
      windowRef.current.style.top = `${window.position.y}px`;
      windowRef.current.style.width = `${window.size.width}px`;
      windowRef.current.style.height = `${window.size.height}px`;
      windowRef.current.style.zIndex = window.zIndex.toString();
    }
  }, [window.position, window.size, window.zIndex, isMobile]);

  // Add global mouse event listeners for resizing
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMoveResize);
      document.addEventListener('mouseup', handleMouseUpResize);
      return () => {
        document.removeEventListener('mousemove', handleMouseMoveResize);
        document.removeEventListener('mouseup', handleMouseUpResize);
      };
    }
  }, [isResizing, handleMouseMoveResize, handleMouseUpResize]);

  const handleWindowClick = useCallback(() => {
    onBringToFront(window.id);
  }, [onBringToFront, window.id]);

  const handleCloseClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(window.id);
  }, [onClose, window.id]);

  const handleMinimizeClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onMinimize(window.id);
  }, [onMinimize, window.id]);

  const handleMaximizeClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onMaximize(window.id);
  }, [onMaximize, window.id]);

  const handleWindowMouseDown = useCallback((e: React.MouseEvent) => {
    if (!isMobile && !isDragging && !window.isMaximized) {
      const direction = getResizeDirection(e);
      if (direction) {
        e.preventDefault();
        e.stopPropagation();
        
        setIsResizing(true);
        setResizeData({
          direction,
          startPos: { x: e.clientX, y: e.clientY },
          startSize: window.size,
          startPosition: window.position
        });
        
        document.body.style.cursor = direction;
        document.body.style.userSelect = 'none';
        return;
      }
    }
    handleWindowClick();
  }, [isMobile, isDragging, window.isMaximized, getResizeDirection, window.size, window.position, handleWindowClick]);

  const handleWindowMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isMobile && !isResizing && !isDragging && !window.isMaximized) {
      const direction = getResizeDirection(e);
      if (windowRef.current) {
        windowRef.current.style.cursor = direction || '';
      }
    }
  }, [isMobile, isResizing, isDragging, window.isMaximized, getResizeDirection]);

  // Early return after all hooks are called
  if (!window.isOpen) return null;

  return (
    <div
      ref={windowRef}
      className={`
        window fixed bg-white window-shadow rounded-t pointer-events-auto
        ${window.isMinimized ? 'hidden' : ''}
        ${isDragging ? 'dragging' : ''}
        ${isResizing ? 'resizing' : ''}
        ${window.isMaximized ? 'maximized top-0 left-0 w-full h-[calc(100vh-80px)] rounded-none' : ''}
        ${isMobile ? 'top-0 left-0 w-full h-[calc(100vh-80px)] rounded-none' : ''}
        window-open
      `}
      style={{
        left: window.isMaximized || isMobile ? 0 : window.position.x,
        top: window.isMaximized || isMobile ? 0 : window.position.y,
        width: window.isMaximized || isMobile ? '100%' : window.size.width,
        height: window.isMaximized || isMobile ? 'calc(100vh - 80px)' : window.size.height,
        zIndex: window.zIndex,
        transition: 'all 0.2s ease-in-out',
      }}
      onClick={handleWindowClick}
      onMouseDown={handleWindowMouseDown}
      onMouseMove={handleWindowMouseMove}
      data-testid={`window-${window.id}`}
    >
      <div 
        ref={dragRef}
        className={`window-header xp-window-header text-white p-2 rounded-t flex justify-between items-center ${window.isMaximized ? 'cursor-default' : 'cursor-move'}`}
        onMouseDown={!isMobile && !window.isMaximized ? handleMouseDown : undefined}
        onTouchStart={!isMobile && !window.isMaximized ? handleTouchStart : undefined}
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
            onClick={handleMaximizeClick}
            data-testid={`button-maximize-${window.id}`}
          >
            {window.isMaximized ? '🗗' : '□'}
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
