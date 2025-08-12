export function ResumeWindow() {
  const handleDownloadClick = () => {
    // In a real implementation, this would download the actual resume PDF
    console.log('Resume download requested');
    // You could implement actual PDF download here
    // For now, we'll show an alert
    alert('Resume download would happen here. Please contact ap75ro@gmail.com for resume.');
  };

  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center">
      <i className="fas fa-file-pdf text-6xl text-red-500 mb-4"></i>
      <p className="text-gray-700 text-center mb-4">
        <strong>Resume PDF Viewer</strong><br />
        <span className="text-sm">In a real implementation, this would show an embedded PDF viewer</span>
      </p>
      <div className="text-xs text-gray-500 text-center mb-4" data-testid="resume-info">
        <p>📄 Expected file: assets/resume.pdf</p>
        <p>💡 Use PDF.js or similar library for embedding</p>
      </div>
      <button 
        className="px-4 py-2 bg-xp-blue text-white text-sm rounded hover:bg-xp-blue-dark transition-colors"
        onClick={handleDownloadClick}
        data-testid="button-download-resume"
      >
        Download Resume (PDF)
      </button>
    </div>
  );
}
