function IngredientItem({ ingredient }) {
  const statusLabels = {
    halal: "Halal",
    "non-halal": "Non-Halal",
    syubhat: "Syubhat",
  };

  return (
    <div className="ingredient-item">
      <div className="ingredient-info">
        <h4>{ingredient.name}</h4>
        <span className="ingredient-category">
          {ingredient.category || "Uncategorized"}
        </span>
      </div>

      <div className="ingredient-result">
        <span className={`ingredient-badge badge-${ingredient.status}`}>
          {statusLabels[ingredient.status] || "Syubhat"}
        </span>

        {typeof ingredient.confidence === "number" && (
          <span className="ingredient-confidence">
            {(ingredient.confidence * 100).toFixed(1)}%
          </span>
        )}
      </div>

      {ingredient.explanation && (
        <p className="ingredient-explanation">{ingredient.explanation}</p>
      )}
    </div>
  );
}

export default IngredientItem;
