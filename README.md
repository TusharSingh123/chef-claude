# Chef Claude

A smart recipe recommendation app powered by Google's Gemini AI. Enter the ingredients you have, and Chef Claude will suggest delicious recipes you can make!

## Features

- **Ingredient Input**: Easily add ingredients one by one to your ingredient list
- **AI-Powered Recipes**: Uses Google Gemini AI to generate recipes based on your available ingredients
- **Smart Suggestions**: The AI intelligently suggests recipes that use most of your ingredients while keeping extra additions minimal
- **Markdown Formatting**: Recipes are beautifully formatted for easy reading
- **Interactive UI**: Real-time feedback as you add ingredients

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **AI API**: Google Generative AI (Gemini)
- **Styling**: CSS
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chef-claude
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

1. **Add Ingredients**: Type an ingredient name in the input field and submit to add it to your list
2. **Build Your List**: Continue adding ingredients until you have at least 4 ingredients
3. **Generate Recipe**: Once you have 4+ ingredients, click the "Get a recipe" button
4. **View Recipe**: The AI will generate a recipe suggestion based on your ingredients

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/
│   ├── App.jsx              # Main app component
│   ├── Header.jsx           # App header
│   ├── Main.jsx             # Main container component
│   ├── Form.jsx             # Ingredient input form
│   ├── IngredientsList.jsx  # Display list of ingredients
│   ├── GetRecipeContainer.jsx # Recipe generation button container
│   └── GeneratedRecipe.jsx  # Display generated recipe
├── dataFromAi/
│   └── generateRecipeFromAi.js # Gemini API integration
├── images/                  # Image assets
├── main.jsx                 # React entry point
└── App.jsx                  # Root app component
```

## How It Works

1. Users add ingredients through the form component
2. Once 4+ ingredients are added, the "Get a recipe" button becomes available
3. Clicking the button sends the ingredient list to Google's Gemini AI
4. The AI generates a recipe suggestion based on the ingredients
5. The recipe is displayed in a formatted, easy-to-read markdown format

## Environment Variables

- `VITE_GEMINI_API_KEY` - Your Google Gemini API key (required)

## Dependencies

- `react` - UI library
- `react-dom` - React DOM rendering
- `react-markdown` - Markdown rendering for recipes
- `@google/generative-ai` - Google Gemini AI API client

## License

This project is open source and available under the MIT License.
