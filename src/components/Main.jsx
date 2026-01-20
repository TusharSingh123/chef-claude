import React from "react";
import Form from "./Form";
import IngrediensList from "./IngredientsList";
import GetRecipeContainer from "./GetRecipeContainer";
import GeneratedRecipe from "./GeneratedRecipe";
import { getRecipeFromGemini } from "../dataFromAi/generateRecipeFromAi";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [generatedRecipe, setGeneratedRecipe] = React.useState(undefined);

  function addIngredients(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  }

  async function getRecipe() {
    setGeneratedRecipe(await getRecipeFromGemini(ingredients));
  }

  return (
    <main>
      <Form action={addIngredients} />
      {ingredients.length > 0 && <IngrediensList ingredients={ingredients} />}
      {ingredients.length > 3 && <GetRecipeContainer getRecipe={getRecipe} />}
      {generatedRecipe && <GeneratedRecipe generatedRecipe={generatedRecipe} />}
    </main>
  );
}
