import React, { useState } from "react";
import "./AdPreview.css";

const AdPreview: React.FC = () => {
  const [selectedAd, setSelectedAd] = useState<string>("Banner");

  const adFormats: Record<string, string> = {
    Banner: "This is a preview of a banner ad. Perfect for static displays.",
    Carousel: "This is a carousel ad preview. Swipe or click to navigate between images.",
    Video: "This is a video ad preview. Great for engaging storytelling.",
  };

  return (
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
  );
};

export default AdPreview;
