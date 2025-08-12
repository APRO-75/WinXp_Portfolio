import { portfolioData } from "@/data/portfolio";

export function ProjectsWindow() {
  const { projects } = portfolioData;

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card bg-gray-50 border border-gray-300 rounded p-4 hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => handleProjectClick(project.githubUrl)}
          data-testid={`project-${project.id}`}
        >
          <div className="flex items-start space-x-3">
            <div className={`w-10 h-10 ${project.iconColor} rounded flex items-center justify-center flex-shrink-0`}>
              <i className={`${project.icon} text-white text-sm`}></i>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              <div className="flex items-center space-x-1 text-xs text-blue-600">
                <i className="fab fa-github"></i>
                <span>View on GitHub</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
