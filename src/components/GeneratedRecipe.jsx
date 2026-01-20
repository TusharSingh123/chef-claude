import ReactMarkdown from "react-markdown";

export default function GeneratedRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <div className="recipe-header">
        <h2>✨ Suggested Recipe</h2>
      </div>
      <div className="recipe-content">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h3 className="recipe-title">{children}</h3>,
            h2: ({ children }) => <h4 className="recipe-section">{children}</h4>,
            h3: ({ children }) => <h4 className="recipe-section">{children}</h4>,
            ul: ({ children }) => <ul className="recipe-list">{children}</ul>,
            ol: ({ children }) => <ol className="recipe-ordered-list">{children}</ol>,
            li: ({ children }) => <li className="recipe-item">{children}</li>,
            p: ({ children }) => <p className="recipe-text">{children}</p>,
          }}
        >
          {props.generatedRecipe}
        </ReactMarkdown>
      </div>
    </section>
  );
}
