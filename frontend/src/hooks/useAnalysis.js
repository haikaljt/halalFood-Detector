import { useState } from "react";
import analyzeImage from "../services/analysisService";

function useAnalysis() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function runAnalysis(file) {
    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const analysisResult = await analyzeImage(file);

      setResult(analysisResult);

      return analysisResult;
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail ||
        err.message ||
        "An unexpected error occurred.";

      setError(errorMessage);

      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    result,
    isLoading,
    error,
    runAnalysis,
  };
}

export default useAnalysis;
