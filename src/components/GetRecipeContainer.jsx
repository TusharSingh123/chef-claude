export default function GetRecipeContainer(props) {
  return (
    <div className="get-recipe-container">
      <div ref={props.ref}>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={props.getRecipe}>Get a recipe</button>
    </div>
  );
}
