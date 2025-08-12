export interface WindowState {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface WindowConfig {
  id: string;
  title: string;
  icon: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
  minSize?: { width: number; height: number };
  resizable?: boolean;
}
