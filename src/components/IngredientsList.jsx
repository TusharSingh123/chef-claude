export default function IngrediensList(props) {
  const ingredientsElementsList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">{ingredientsElementsList}</ul>
    </section>
  );
}
