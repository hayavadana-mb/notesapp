import React from "react";
import UploadAssets from "./components/UploadAssets";
import AdPreview from "./components/AdPreview";
import ComplianceReview from "./components/ComplianceReview";
import PerformanceAnalytics from "./components/PerformanceAnalytics";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>CreativeOps Platform</h1>
        <button className="launch-button" onClick={console.log("clicked")}>Launch Ads</button>
      </header>
      <main className="dashboard">
        <div className="left-panel">
          <UploadAssets />
          <ComplianceReview />
        </div>
        <div className="center-panel">
          <AdPreview />
        </div>
        <div className="right-panel">
          <PerformanceAnalytics />
        </div>
      </main>
    </div>
  );
}

export default App;
