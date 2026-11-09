import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ImageUploader from "../features/scanner/components/ImageUploader";
import useAnalysis from "../hooks/useAnalysis";

function ScannerPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isLoading, error, runAnalysis } = useAnalysis();
  const navigate = useNavigate();

  async function handleAnalyze() {
    if (!selectedImage || isLoading) {
      return;
    }

    const analysisResult = await runAnalysis(selectedImage);

    if (analysisResult) {
      navigate("/result", {
        state: {
          result: analysisResult,
        },
      });
    }
  }

  return (
    <section className="scanner-page">
      <div className="scanner-header">
        <span className="section-label">FOOD INGREDIENT SCANNER</span>

        <h1>Scan Your Food Product</h1>

        <p>
          Upload a picture of your food product packaging to identify its
          ingredients.
        </p>
      </div>

      <div className="scanner-content">
        <ImageUploader onImageChange={setSelectedImage} />

        {selectedImage && (
          <div className="scanner-info">
            <p>Image selected successfully. You can now start the analysis.</p>
          </div>
        )}

        {error && (
          <div className="analysis-error" role="alert">
            {error}
          </div>
        )}

        <button
          type="button"
          className="btn btn-primary analyze-button"
          onClick={handleAnalyze}
          disabled={!selectedImage || isLoading}
        >
          {isLoading ? "Analyzing Image..." : "Analyze Image"}
        </button>

        {isLoading && (
          <div className="analysis-loading">
            <div className="analysis-spinner"></div>
            <p>Please wait while the system analyzes your image.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ScannerPage;
