export function HelpSupportWindow() {
  const helpTopics = [
    {
      id: 'getting-started',
      icon: 'fas fa-play-circle',
      title: 'Getting Started',
      description: 'Learn the basics of navigating this Windows XP-style portfolio'
    },
    {
      id: 'portfolio-features',
      icon: 'fas fa-star',
      title: 'Portfolio Features',
      description: 'Discover all the interactive elements and windows available'
    },
    {
      id: 'about-apoorva',
      icon: 'fas fa-user-circle',
      title: 'About Apoorva Prakash',
      description: 'Learn more about the developer behind this portfolio'
    },
    {
      id: 'contact-info',
      icon: 'fas fa-address-book',
      title: 'Contact Information',
      description: 'Find ways to get in touch for opportunities and collaborations'
    }
  ];

  const handleTopicClick = (topic: typeof helpTopics[0]) => {
    let message = '';
    switch (topic.id) {
      case 'getting-started':
        message = 'Welcome to this Windows XP-style portfolio!\n\n• Double-click desktop icons to open windows\n• Use the Start menu to access all sections\n• Drag windows to move them around\n• Click window controls to minimize/close';
        break;
      case 'portfolio-features':
        message = 'Portfolio Features:\n\n• About Me - Professional background and skills\n• Projects - Showcase of development work\n• Resume - Downloadable PDF resume\n• Contact - Ways to connect professionally';
        break;
      case 'about-apoorva':
        message = 'Apoorva Prakash is a Computer Science student at SRM Institute specializing in Cyber Security. Passionate about Full Stack Development, AI/ML, and creating innovative solutions.';
        break;
      case 'contact-info':
        message = 'Contact Information:\n\n📧 Email: ap75ro@gmail.com\n💼 LinkedIn: linkedin.com/in/apoorva-prakash-a00196265/\n🐙 GitHub: github.com/APRO-75\n\nFeel free to reach out for collaborations and opportunities!';
        break;
      default:
        message = 'Help topic not found.';
    }
    alert(message);
  };

  return (
    <div className="h-full bg-white">
      <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800 mb-1">Help and Support Center</h2>
        <p className="text-sm text-gray-600">Find answers and get help with this portfolio</p>
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          {helpTopics.map((topic) => (
            <div
              key={topic.id}
              className="help-topic flex items-start space-x-3 p-3 border border-gray-200 rounded hover:bg-green-50 hover:border-green-300 cursor-pointer transition-all"
              onClick={() => handleTopicClick(topic)}
              data-testid={`help-topic-${topic.id}`}
            >
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                <i className={`${topic.icon} text-white text-sm`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{topic.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{topic.description}</p>
              </div>
              <div className="text-gray-400">
                <i className="fas fa-chevron-right text-xs"></i>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <h3 className="font-semibold text-blue-800 text-sm mb-2">Quick Navigation Tips</h3>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Double-click desktop icons to open windows</li>
              <li>• Use the Start button to access all portfolio sections</li>
              <li>• Windows can be dragged around the desktop</li>
              <li>• Click the X button to close any window</li>
            </ul>
          </div>
          
          <div className="p-3 bg-purple-50 border border-purple-200 rounded">
            <h3 className="font-semibold text-purple-800 text-sm mb-2">Technical Information</h3>
            <p className="text-xs text-purple-700">
              This portfolio is built with React, TypeScript, and Tailwind CSS, 
              recreating the nostalgic Windows XP experience in a modern web application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}