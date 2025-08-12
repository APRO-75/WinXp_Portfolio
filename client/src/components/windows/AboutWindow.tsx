import { portfolioData } from "@/data/portfolio";

export function AboutWindow() {
  const { about } = portfolioData;

  return (
    <div className="flex flex-col items-center space-y-4">
      <img 
        src={about.profileImage}
        alt={`${about.name} profile photo`}
        className="w-24 h-24 rounded-full border-2 border-xp-blue object-cover"
        data-testid="profile-image"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2" data-testid="profile-name">
          {about.name}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3" data-testid="profile-description">
          {about.description}
        </p>
        <div className="text-xs text-gray-500 space-y-1">
          {about.highlights.map((highlight, index) => (
            <p key={index} data-testid={`highlight-${index}`}>
              {highlight}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
