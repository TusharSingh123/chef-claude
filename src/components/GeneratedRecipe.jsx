import ReactMarkdown from "react-markdown";

export default function GeneratedRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h1>Suggested Recipe : </h1>
      <ReactMarkdown>{props.generatedRecipe}</ReactMarkdown>
    </section>
  );
}
