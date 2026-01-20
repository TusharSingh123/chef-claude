export default function IngrediensList(props) {
  const ingredientsElementsList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h1>Ingredients on hand:</h1>
      <ul className="ingredients-list">{ingredientsElementsList}</ul>
    </section>
  );
}
