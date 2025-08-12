import { portfolioData } from "@/data/portfolio";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

export function StartMenu({ isOpen, onClose, onOpenWindow }: StartMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    { id: "about", icon: "fas fa-user", title: "About Me" },
    { id: "projects", icon: "fas fa-code", title: "Projects" },
    { id: "resume", icon: "fas fa-file-pdf", title: "Resume" },
    { id: "contact", icon: "fas fa-envelope", title: "Contact" }
  ];

  const handleItemClick = (id: string) => {
    onOpenWindow(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
        data-testid="start-menu-backdrop"
      />
      
      {/* Start Menu */}
      <div 
        className="fixed bottom-10 left-0 w-64 bg-white border border-gray-400 window-shadow rounded-tr z-50"
        data-testid="start-menu"
      >
        <div className="xp-window-header text-white p-3 text-sm font-bold">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <img 
                src={portfolioData.about.profileImage}
                alt="User avatar" 
                className="w-6 h-6 rounded object-cover" 
              />
            </div>
            <span>{portfolioData.about.name}</span>
          </div>
        </div>
        <div className="p-2">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="start-menu-item flex items-center space-x-3 p-2 hover:bg-blue-100 cursor-pointer rounded"
              onClick={() => handleItemClick(item.id)}
              data-testid={`start-menu-${item.id}`}
            >
              <i className={`${item.icon} w-4 text-gray-600`}></i>
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
