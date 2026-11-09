import { useLocation } from "react-router-dom";

import ProductStatus from "../features/analysis/components/ProductStatus";
import IngredientList from "../features/analysis/components/IngredientList";
import ConfidenceScore from "../features/analysis/components/ConfidenceScore";
import ExtractedText from "../features/analysis/components/ExtractedText";

import formatResult from "../features/analysis/utils/formatResult";

const demoResult = {
  productName: "Sample Food Product",
  status: "syubhat",
  confidence: 0.92,
  ingredients: [
    {
      name: "Water",
      category: "Other",
      status: "halal",
      confidence: 0.99,
      explanation: "Sample classification data.",
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
      explanation: "Sample classification data.",
    },
  ],
  extractedText: "Ingredients: Water, Gelatin, Sugar.",
  isDemo: true,
};

function ResultPage() {
  const location = useLocation();

  const receivedResult = location.state?.result;
  const result = formatResult(receivedResult || demoResult);

  return (
    <section className="result-page">
      <div className="result-header">
        <span className="section-label">FOOD INGREDIENT ANALYSIS</span>

        <h1>Analysis Result</h1>

        <p>Review the ingredients detected and their classification results.</p>

        {result.isDemo && (
          <span className="demo-notice">
            Demo data — not an actual product analysis
          </span>
        )}
      </div>

      <div className="result-content">
        <div className="result-product-card">
          <span className="result-card-label">Product</span>
          <h2>{result.productName}</h2>
        </div>

        <ProductStatus status={result.status} />

        <ConfidenceScore score={result.confidence} />

        <div className="result-section">
          <div className="result-section-header">
            <h2>Ingredient Classification</h2>
            <span>{result.ingredients.length} ingredients</span>
          </div>

          <IngredientList ingredients={result.ingredients} />
        </div>

        <ExtractedText text={result.extractedText} />

        <div className="result-disclaimer">
          <strong>Important Notice</strong>
          <p>
            This system provides an automated analysis based on visible
            ingredient information. The result does not represent official halal
            certification or laboratory verification.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResultPage;
