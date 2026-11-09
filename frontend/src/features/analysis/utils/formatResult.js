function normalizeStatus(status) {
  const normalizedStatus = String(status || "")
    .toLowerCase()
    .replaceAll("_", "-");

  if (normalizedStatus === "halal") {
    return "halal";
  }

  if (normalizedStatus === "non-halal" || normalizedStatus === "nonhalal") {
    return "non-halal";
  }

  return "syubhat";
}

function formatResult(result) {
  return {
    productName: result?.productName || "Unknown Product",
    status: normalizeStatus(result?.status),
    confidence: Number(result?.confidence ?? 0),
    ingredients: Array.isArray(result?.ingredients)
      ? result.ingredients.map((ingredient) => ({
          name: ingredient.name || "Unknown Ingredient",
          category: ingredient.category || "Uncategorized",
          status: normalizeStatus(ingredient.status),
          confidence:
            typeof ingredient.confidence === "number"
              ? ingredient.confidence
              : null,
          explanation: ingredient.explanation || "",
        }))
      : [],
    extractedText: result?.extractedText || "",
    isDemo: Boolean(result?.isDemo),
  };
}

export default formatResult;
