import React, { useState } from "react";
import "./UploadAssets.css";

function UploadAssets() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    handleFiles(uploadedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter((file) => file.type.startsWith("image/"));
    if (validFiles.length < newFiles.length) {
      setError("Some files were skipped because they are not valid images.");
    } else {
      setError("");
    }
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert("No files selected for upload.");
    } else {
      // Simulate an upload process
      alert(`Uploading ${files.length} file(s)...`);
      setFiles([]); // Clear files after upload
    }
  };

  return (
    <div
      className="upload-assets"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>Upload Assets</h2>
      <input type="file" multiple onChange={handleFileUpload} />
      <p>Drag & drop your files here or click to upload.</p>
      {error && <p className="error">{error}</p>}

      <div className="file-preview">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="file-thumbnail"
            />
            <button onClick={() => removeFile(index)} className="remove-button">
              ✖
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleUpload} className="upload-button">
        Upload Files
      </button>
    </div>
  );
}

export default UploadAssets;
