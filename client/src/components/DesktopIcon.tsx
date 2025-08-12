import { useIsMobile } from "@/hooks/use-mobile";

interface DesktopIconProps {
  id: string;
  title: string;
  icon: string;
  onClick: (id: string) => void;
}

export function DesktopIcon({ id, title, icon, onClick }: DesktopIconProps) {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  const handleDoubleClick = () => {
    onClick(id);
  };

  return (
    <div 
      className="desktop-icon flex flex-col items-center cursor-pointer group select-none"
      onDoubleClick={handleDoubleClick}
      data-testid={`icon-${id}`}
    >
      <div className="icon-glow transition-all duration-200 group-hover:scale-110">
        <div className="w-16 h-16 xp-button rounded flex items-center justify-center mb-2 group-active:bg-xp-button-pressed">
          <i className={`${icon} text-2xl text-gray-700`}></i>
        </div>
      </div>
      <span className="text-white text-sm font-bold drop-shadow-lg group-hover:drop-shadow-xl">
        {title}
      </span>
    </div>
  );
}
