import { useState, useCallback, useRef } from 'react';

interface ResizeState {
  isResizing: boolean;
  resizeDirection: string;
  startMousePos: { x: number; y: number };
  startSize: { width: number; height: number };
  startPosition: { x: number; y: number };
}

export function useWindowResize(
  onResize: (size: { width: number; height: number }, position?: { x: number; y: number }) => void,
  minWidth = 300,
  minHeight = 200
) {
  const [resizeState, setResizeState] = useState<ResizeState>({
    isResizing: false,
    resizeDirection: '',
    startMousePos: { x: 0, y: 0 },
    startSize: { width: 0, height: 0 },
    startPosition: { x: 0, y: 0 }
  });

  const getResizeDirection = useCallback((e: React.MouseEvent, rect: DOMRect) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const edgeThreshold = 8;

    const isNear = {
      top: y <= edgeThreshold,
      bottom: y >= rect.height - edgeThreshold,
      left: x <= edgeThreshold,
      right: x >= rect.width - edgeThreshold
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

  const handleMouseMove = useCallback((e: MouseEvent, element?: HTMLDivElement) => {
    if (!resizeState.isResizing || !element) return;

    const deltaX = e.clientX - resizeState.startMousePos.x;
    const deltaY = e.clientY - resizeState.startMousePos.y;

    let newWidth = resizeState.startSize.width;
    let newHeight = resizeState.startSize.height;
    let newX = resizeState.startPosition.x;
    let newY = resizeState.startPosition.y;

    const direction = resizeState.resizeDirection;

    // Handle horizontal resizing
    if (direction.includes('e')) {
      newWidth = Math.max(minWidth, resizeState.startSize.width + deltaX);
    } else if (direction.includes('w')) {
      newWidth = Math.max(minWidth, resizeState.startSize.width - deltaX);
      if (newWidth > minWidth) {
        newX = resizeState.startPosition.x + deltaX;
      }
    }

    // Handle vertical resizing
    if (direction.includes('s')) {
      newHeight = Math.max(minHeight, resizeState.startSize.height + deltaY);
    } else if (direction.includes('n')) {
      newHeight = Math.max(minHeight, resizeState.startSize.height - deltaY);
      if (newHeight > minHeight) {
        newY = resizeState.startPosition.y + deltaY;
      }
    }

    // Update the element style immediately for smooth resizing
    element.style.width = `${newWidth}px`;
    element.style.height = `${newHeight}px`;
    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;

    // Call the callback with the new size and position
    onResize({ width: newWidth, height: newHeight }, { x: newX, y: newY });
  }, [resizeState, onResize, minWidth, minHeight]);

  const handleMouseUp = useCallback(() => {
    if (resizeState.isResizing) {
      setResizeState(prev => ({ ...prev, isResizing: false, resizeDirection: '' }));
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  }, [resizeState.isResizing]);

  const handleResizeStart = useCallback((e: React.MouseEvent, currentSize: { width: number; height: number }, currentPosition: { x: number; y: number }, element?: HTMLDivElement) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const direction = getResizeDirection(e, rect);

    if (direction) {
      e.preventDefault();
      e.stopPropagation();

      setResizeState({
        isResizing: true,
        resizeDirection: direction,
        startMousePos: { x: e.clientX, y: e.clientY },
        startSize: currentSize,
        startPosition: currentPosition
      });

      document.body.style.cursor = direction;
      document.body.style.userSelect = 'none';
    }
  }, [getResizeDirection]);

  const handleMouseMovePreview = useCallback((e: React.MouseEvent, element?: HTMLDivElement) => {
    if (resizeState.isResizing || !element) return;

    const rect = element.getBoundingClientRect();
    const direction = getResizeDirection(e, rect);
    
    if (direction) {
      element.style.cursor = direction;
    } else {
      element.style.cursor = '';
    }
  }, [getResizeDirection, resizeState.isResizing]);

  return {
    isResizing: resizeState.isResizing,
    handleResizeStart,
    handleMouseMovePreview,
    handleMouseMove,
    handleMouseUp
  };
}