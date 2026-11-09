import api from "../lib/axios";
import getMockAnalysis from "../mocks/analysisMock";

const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === "true";

async function analyzeImage(file) {
  if (!file) {
    throw new Error("Please select an image first.");
  }

  if (USE_MOCK_API) {
    return await getMockAnalysis();
  }

  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/api/analyze", formData);

  return {
    ...response.data,
    isDemo: false,
  };
}

export default analyzeImage;
