import { useEffect, useState } from "react";
import validateImage from "../utils/validateImage";

function useImageUpload() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  function handleFileSelect(selectedFile) {
    setError("");

    const validationError = validateImage(selectedFile);

    if (validationError) {
      setError(validationError);
      return;
    }

    setFile(selectedFile);
  }

  function removeImage() {
    setFile(null);
    setError("");
  }

  return {
    file,
    previewUrl,
    error,
    handleFileSelect,
    removeImage,
  };
}

export default useImageUpload;
