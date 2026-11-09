import { useRef, useState } from "react";

function UploadZone({ onFileSelect, error }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];

    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  }

  function handleInputChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      onFileSelect(selectedFile);
    }

    event.target.value = "";
  }

  function openFilePicker() {
    inputRef.current.click();
  }

  return (
    <div className="upload-container">
      <div
        className={`upload-zone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleInputChange}
          hidden
        />

        <div className="upload-icon">📁</div>

        <h3>Upload Product Image</h3>

        <p>Drag and drop your image here, or browse your files.</p>

        <button
          type="button"
          className="btn btn-primary upload-button"
          onClick={openFilePicker}
        >
          Browse Image
        </button>

        <span className="upload-hint">JPG, PNG, or WEBP · Maximum 5 MB</span>
      </div>

      {error && (
        <p className="upload-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default UploadZone;
