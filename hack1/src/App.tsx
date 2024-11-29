import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [selectedAd, setSelectedAd] = useState<string>("Banner");

  const handleLaunchAds = (): void => {
    alert("Launching Ads...");
    // Add logic to launch ads here
  };

  const adFormats: Record<string, string> = {
    Banner: "This is a preview of a banner ad. Perfect for static displays.",
    Carousel: "This is a carousel ad preview. Swipe or click to navigate between images.",
    Video: "This is a video ad preview. Great for engaging storytelling.",
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">CreativeOps Platform</h1>
        <button className="launch-button" onClick={handleLaunchAds}>
          Launch Ads
        </button>
      </header>

      {/* Main Dashboard */}
      <main className="dashboard">
        {/* Left Panel */}
        <aside className="panel left-panel">
          <div className="upload-assets">
            <h2>Upload Assets</h2>
            <input type="file" multiple />
            <p>Drag & drop your files or click to upload.</p>
          </div>

          <div className="compliance-review">
            <h2>Compliance Review</h2>
            <p>Check your ads for compliance with brand and platform guidelines.</p>
          </div>
        </aside>

        {/* Center Panel */}
        <section className="panel center-panel">
          <div className="ad-preview">
            <h2>Ad Preview</h2>
            <div className="ad-sizes">
              {Object.keys(adFormats).map((adType) => (
                <div
                  key={adType}
                  className={`ad-size ${selectedAd === adType ? "active" : ""}`}
                  onClick={() => setSelectedAd(adType)}
                >
                  {adType} Ad
                </div>
              ))}
            </div>
            <div className="ad-content">
              <h3>{selectedAd} Ad</h3>
              <p>{adFormats[selectedAd]}</p>
            </div>
          </div>
        </section>

        {/* Right Panel */}
        <aside className="panel right-panel">
          <div className="performance-analytics">
            <h2>Performance Analytics</h2>
            <p>Analyze ad performance and optimize creative decisions.</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
