import { portfolioData } from "@/data/portfolio";
import profileImage from "@assets/Untitled design (1)_1754995203490.png";

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

  const handleControlPanel = () => {
    onOpenWindow('control-panel');
    onClose();
  };

  const handleHelpAndSupport = () => {
    onOpenWindow('help-support');
    onClose();
  };

  const handleTurnOff = () => {
    if (confirm('Are you sure you want to turn off the computer?')) {
      // Close the tab/window
      if (window.opener) {
        window.close();
      } else {
        // For browsers that don't allow window.close(), show a message
        alert('Thank you for visiting my portfolio! You can now close this tab.');
      }
    }
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
        className="fixed bottom-10 left-0 w-80 bg-white border-2 border-gray-400 window-shadow z-50"
        style={{ borderStyle: 'outset' }}
        data-testid="start-menu"
      >
        {/* User Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
            <img 
              src={profileImage}
              alt="User avatar" 
              className="w-8 h-8 object-cover" 
            />
          </div>
          <span className="font-bold text-sm">{portfolioData.about.name}</span>
        </div>
        
        {/* Menu Items */}
        <div className="p-1">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="start-menu-item flex items-center space-x-3 px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-sm"
              onClick={() => handleItemClick(item.id)}
              data-testid={`start-menu-${item.id}`}
            >
              <i className={`${item.icon} w-4 text-current`}></i>
              <span>{item.title}</span>
            </div>
          ))}
          
          {/* Separator */}
          <div className="border-t border-gray-300 my-1 mx-2"></div>
          
          {/* System Items */}
          <div 
            className="start-menu-item flex items-center space-x-3 px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-sm"
            onClick={handleControlPanel}
            data-testid="start-menu-control-panel"
          >
            <i className="fas fa-cog w-4 text-current"></i>
            <span>Control Panel</span>
          </div>
          
          <div 
            className="start-menu-item flex items-center space-x-3 px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer text-sm"
            onClick={handleHelpAndSupport}
            data-testid="start-menu-help-support"
          >
            <i className="fas fa-question-circle w-4 text-current"></i>
            <span>Help and Support</span>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-300 my-1 mx-2"></div>
          
          <div 
            className="start-menu-item flex items-center space-x-3 px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer text-sm font-bold"
            onClick={handleTurnOff}
            data-testid="start-menu-turn-off"
          >
            <i className="fas fa-power-off w-4 text-current"></i>
            <span>Turn Off Computer</span>
          </div>
        </div>
      </div>
    </>
  );
}
