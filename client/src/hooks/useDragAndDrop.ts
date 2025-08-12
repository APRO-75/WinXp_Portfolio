import { useState, useCallback, useRef } from "react";

interface DragState {
  isDragging: boolean;
  startPosition: { x: number; y: number };
  elementPosition: { x: number; y: number };
}

export function useDragAndDrop(
  onDrag?: (position: { x: number; y: number }) => void,
  onDragEnd?: (position: { x: number; y: number }) => void
) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startPosition: { x: 0, y: 0 },
    elementPosition: { x: 0, y: 0 }
  });

  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!dragRef.current) return;
    
    const rect = dragRef.current.getBoundingClientRect();
    const startPosition = { x: e.clientX, y: e.clientY };
    const elementPosition = { x: rect.left, y: rect.top };

    setDragState({
      isDragging: true,
      startPosition,
      elementPosition
    });

    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragState.isDragging) return;

    const deltaX = e.clientX - dragState.startPosition.x;
    const deltaY = e.clientY - dragState.startPosition.y;

    const newPosition = {
      x: Math.max(0, Math.min(window.innerWidth - 200, dragState.elementPosition.x + deltaX)),
      y: Math.max(0, Math.min(window.innerHeight - 100, dragState.elementPosition.y + deltaY))
    };

    onDrag?.(newPosition);
  }, [dragState, onDrag]);

  const handleMouseUp = useCallback(() => {
    if (!dragState.isDragging) return;

    setDragState(prev => ({ ...prev, isDragging: false }));
    
    if (onDragEnd && dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      onDragEnd({ x: rect.left, y: rect.top });
    }
  }, [dragState.isDragging, onDragEnd]);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!dragRef.current) return;
    
    const touch = e.touches[0];
    const rect = dragRef.current.getBoundingClientRect();
    const startPosition = { x: touch.clientX, y: touch.clientY };
    const elementPosition = { x: rect.left, y: rect.top };

    setDragState({
      isDragging: true,
      startPosition,
      elementPosition
    });

    e.preventDefault();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!dragState.isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - dragState.startPosition.x;
    const deltaY = touch.clientY - dragState.startPosition.y;

    const newPosition = {
      x: Math.max(0, Math.min(window.innerWidth - 200, dragState.elementPosition.x + deltaX)),
      y: Math.max(0, Math.min(window.innerHeight - 100, dragState.elementPosition.y + deltaY))
    };

    onDrag?.(newPosition);
  }, [dragState, onDrag]);

  const handleTouchEnd = useCallback(() => {
    if (!dragState.isDragging) return;

    setDragState(prev => ({ ...prev, isDragging: false }));
    
    if (onDragEnd && dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      onDragEnd({ x: rect.left, y: rect.top });
    }
  }, [dragState.isDragging, onDragEnd]);

  return {
    dragRef,
    isDragging: dragState.isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}
