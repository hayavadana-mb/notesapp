import React from "react";
import "./UploadAssets.css";

const UploadAssets: React.FC = () => {
  return (
    <div className="upload-assets">
      <h2>Upload Assets</h2>
      <input type="file" multiple />
      <p>Drag & drop your files or click to upload.</p>
    </div>
  );
};

export default UploadAssets;
