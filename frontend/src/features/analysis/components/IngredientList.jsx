import IngredientItem from "./IngredientItem";

function IngredientList({ ingredients }) {
  if (!ingredients || ingredients.length === 0) {
    return (
      <div className="empty-ingredients">No ingredients were detected.</div>
    );
  }

  return (
    <div className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <IngredientItem
          key={`${ingredient.name}-${index}`}
          ingredient={ingredient}
        />
      ))}
    </div>
  );
}

export default IngredientList;
