import { useEffect, useRef } from "react";

import useImageUpload from "../hooks/useImageUpload";
import UploadZone from "./UploadZone";
import ImagePreview from "../../../components/shared/ImagePreview";

function ImageUploader({ onImageChange }) {
  const { file, previewUrl, error, handleFileSelect, removeImage } =
    useImageUpload();

  const inputRef = useRef(null);

  useEffect(() => {
    if (onImageChange) {
      onImageChange(file);
    }
  }, [file, onImageChange]);

  function openFilePicker() {
    inputRef.current?.click();
  }

  function handleChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      handleFileSelect(selectedFile);
    }

    event.target.value = "";
  }

  function handleRemove() {
    removeImage();
  }

  return (
    <div className="image-uploader">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleChange}
        hidden
      />

      {file && previewUrl ? (
        <ImagePreview
          file={file}
          previewUrl={previewUrl}
          onRemove={handleRemove}
          onChange={openFilePicker}
        />
      ) : (
        <UploadZone onFileSelect={handleFileSelect} error={error} />
      )}
      {error && file && (
        <p className="upload-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default ImageUploader;
