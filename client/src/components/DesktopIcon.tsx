import { useIsMobile } from "@/hooks/use-mobile";

interface DesktopIconProps {
  id: string;
  title: string;
  icon: string;
  iconImage?: string;
  onClick: (id: string) => void;
}

export function DesktopIcon({ id, title, icon, iconImage, onClick }: DesktopIconProps) {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  const handleDoubleClick = () => {
    onClick(id);
  };

  return (
    <div 
      className="desktop-icon flex flex-col items-center cursor-pointer group select-none w-16 text-center"
      onDoubleClick={handleDoubleClick}
      data-testid={`icon-${id}`}
    >
      <div className="transition-all duration-200 group-hover:scale-105">
        <div className="w-8 h-8 flex items-center justify-center mb-1">
          {iconImage ? (
            <img 
              src={iconImage} 
              alt={title} 
              className="w-8 h-8 object-contain filter drop-shadow-sm"
            />
          ) : (
            <i className={`${icon} text-2xl text-white drop-shadow`}></i>
          )}
        </div>
      </div>
      <span className="text-white text-xs font-normal drop-shadow-md text-center max-w-16 leading-tight">
        {title}
      </span>
    </div>
  );
}
