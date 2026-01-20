export default function Form(props) {
  return (
    <form className="add-ingredient-form" action={props.action}>
      <input
        type="text"
        placeholder="e.g. oregano"
        aria-label="Input Ingredient"
        name="ingredient"
        required
      />
      <button>Add ingredient</button>
    </form>
  );
}
