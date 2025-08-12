import resumePdf from "@assets/Resume_Apoorva_1754995276880.pdf";

export function ResumeWindow() {
  const resumeUrl = resumePdf;
  
  const handleDownloadClick = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Apoorva_Prakash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full flex flex-col">
      {/* PDF Viewer */}
      <div className="flex-1 bg-white border border-gray-300 rounded mb-4 overflow-hidden relative">
        <object
          data={resumeUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume PDF"
            data-testid="resume-pdf-viewer"
          >
            <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-8">
              <i className="fas fa-file-pdf text-6xl text-red-500 mb-4"></i>
              <p className="text-gray-700 text-center mb-4">
                <strong>Resume - Apoorva Prakash</strong><br />
                <span className="text-sm">PDF preview not available in this browser</span>
              </p>
              <div className="text-xs text-gray-600 text-center mb-4 space-y-1">
                <p>📋 Computer Science Student at SRM Institute</p>
                <p>💼 Full Stack Developer & AI Enthusiast</p>
                <p>📧 ap75ro@gmail.com | 📱 7779891655</p>
              </div>
              <button 
                className="px-4 py-2 bg-xp-blue text-white text-sm rounded hover:bg-xp-blue-dark transition-colors"
                onClick={handleDownloadClick}
                data-testid="button-download-resume-fallback"
              >
                Download Resume (PDF)
              </button>
            </div>
          </iframe>
        </object>
      </div>
      
      {/* Download Button */}
      <div className="flex justify-center">
        <button 
          className="px-4 py-2 bg-xp-blue text-white text-sm rounded hover:bg-xp-blue-dark transition-colors flex items-center space-x-2"
          onClick={handleDownloadClick}
          data-testid="button-download-resume"
        >
          <i className="fas fa-download"></i>
          <span>Download Resume (PDF)</span>
        </button>
      </div>
    </div>
  );
}
