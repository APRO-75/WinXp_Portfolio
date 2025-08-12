import { portfolioData } from "@/data/portfolio";

export function ContactWindow() {
  const { contact } = portfolioData;

  const contactItems = [
    {
      id: 'email',
      icon: 'fab fa-google',
      iconBg: 'bg-red-500',
      title: 'Gmail',
      subtitle: contact.email,
      href: `mailto:${contact.email}`
    },
    {
      id: 'linkedin',
      icon: 'fab fa-linkedin-in',
      iconBg: 'bg-blue-600',
      title: 'LinkedIn',
      subtitle: 'Connect professionally',
      href: contact.linkedin
    },
    {
      id: 'github',
      icon: 'fab fa-github',
      iconBg: 'bg-gray-800',
      title: 'GitHub',
      subtitle: 'View my code',
      href: contact.github
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Get In Touch</h2>
        <p className="text-sm text-gray-600">Connect with me through any of these platforms</p>
      </div>
      
      <div className="space-y-3">
        {contactItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.id !== 'email' ? '_blank' : undefined}
            rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
            className="contact-item flex items-center space-x-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
            data-testid={`contact-${item.id}`}
          >
            <div className={`w-10 h-10 ${item.iconBg} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
              <i className={`${item.icon} text-white text-base`}></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">{item.title}</p>
              <p className="text-xs text-gray-600 group-hover:text-gray-700">{item.subtitle}</p>
            </div>
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
              <i className="fas fa-external-link-alt text-xs"></i>
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">Available for collaborations and opportunities</p>
      </div>
    </div>
  );
}
