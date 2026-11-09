const mockResult = {
  productName: "Sample Food Product",
  status: "syubhat",
  confidence: 0.92,
  ingredients: [
    {
      name: "Water",
      category: "Other",
      status: "halal",
      confidence: 0.99,
      explanation: "Classified as halal by the model.",
    },
    {
      name: "Gelatin",
      category: "Gelatin",
      status: "syubhat",
      confidence: 0.87,
      explanation: "The source of gelatin requires further verification.",
    },
    {
      name: "Sugar",
      category: "Sweetener",
      status: "halal",
      confidence: 0.98,
      explanation: "Classified as halal by the model.",
    },
  ],
  extractedText: "Ingredients: Water, Gelatin, Sugar.",
  isDemo: true,
};

function getMockAnalysis() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResult);
    }, 1200);
  });
}

export default getMockAnalysis;
