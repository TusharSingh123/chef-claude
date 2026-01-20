import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
  systemInstruction: SYSTEM_PROMPT,
  generationConfig: {
    maxOutputTokens: 1024,
  },
});

export async function getRecipeFromGemini(ingredients) {
  const ingredientsString = ingredients.join(", ");

  const prompt = `I have ${ingredientsString}.Suggest a recipe.`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.log(error.message);
  }
}
