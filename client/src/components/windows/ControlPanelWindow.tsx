export function ControlPanelWindow() {
  const controlPanelItems = [
    {
      id: 'display',
      icon: 'fas fa-desktop',
      title: 'Display Properties',
      description: 'Change desktop background, screen saver, and display settings'
    },
    {
      id: 'sounds',
      icon: 'fas fa-volume-up',
      title: 'Sounds and Audio Devices',
      description: 'Change sound scheme and configure audio devices'
    },
    {
      id: 'network',
      icon: 'fas fa-network-wired',
      title: 'Network Connections',
      description: 'Connect to networks and configure network settings'
    },
    {
      id: 'system',
      icon: 'fas fa-microchip',
      title: 'System Properties',
      description: 'View system information and performance settings'
    },
    {
      id: 'user-accounts',
      icon: 'fas fa-users',
      title: 'User Accounts',
      description: 'Create and manage user accounts and passwords'
    },
    {
      id: 'security',
      icon: 'fas fa-shield-alt',
      title: 'Security Center',
      description: 'Manage firewall, antivirus, and security settings'
    }
  ];

  const handleItemClick = (item: typeof controlPanelItems[0]) => {
    alert(`${item.title}: This would open the ${item.title.toLowerCase()} configuration. This is a demo portfolio, so actual system settings are not available.`);
  };

  return (
    <div className="h-full bg-white">
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-1">Control Panel</h2>
        <p className="text-sm text-gray-600">Configure your computer's settings and options</p>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {controlPanelItems.map((item) => (
            <div
              key={item.id}
              className="control-panel-item flex items-start space-x-3 p-3 border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-all"
              onClick={() => handleItemClick(item)}
              data-testid={`control-panel-${item.id}`}
            >
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-white text-sm`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <div className="flex items-start space-x-2">
            <i className="fas fa-info-circle text-yellow-600 mt-0.5"></i>
            <div>
              <p className="text-sm text-yellow-800 font-medium">Demo Mode</p>
              <p className="text-xs text-yellow-700">This is a portfolio demonstration. Actual system configuration is not available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}