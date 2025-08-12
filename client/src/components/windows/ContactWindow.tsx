import { portfolioData } from "@/data/portfolio";

export function ContactWindow() {
  const { contact } = portfolioData;

  const contactItems = [
    {
      id: 'email',
      icon: 'fas fa-envelope',
      iconBg: 'bg-blue-500',
      title: 'Email',
      subtitle: contact.email,
      href: `mailto:${contact.email}`
    },
    {
      id: 'linkedin',
      icon: 'fab fa-linkedin',
      iconBg: 'bg-blue-700',
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
      <h2 className="text-lg font-bold text-gray-800 mb-4">Get In Touch</h2>
      
      {contactItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.id !== 'email' ? '_blank' : undefined}
          rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
          className="contact-item flex items-center space-x-3 p-2 rounded hover:bg-gray-100 transition-colors"
          data-testid={`contact-${item.id}`}
        >
          <div className={`w-8 h-8 ${item.iconBg} rounded flex items-center justify-center`}>
            <i className={`${item.icon} text-white text-sm`}></i>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-600">{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
