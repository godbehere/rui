import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function Recipe({recipeId}) {
  const [ recipe, setRecipe ] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/recipe?recipeId=${recipeId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
      });
  }, []);

  if(!recipe) {
    return <div>Loading...</div>
  }

  // const ingredientsList = recipe.ingredients.map(item => <li>{item.amount} {item.units}  {item.ingredient.label}</li>);

  return (
    <div>
      <h2>{recipe.label}</h2>
      <h3>Instructions</h3>
      <div>{recipe.instructions.sort((a, b) => a.stepNumber - b.stepNumber).map(step => <p>{step.stepNumber}. {step.step}</p>)}</div>
      <h3>Ingredients</h3>
      <ul>{recipe.ingredients.map(item => <li>{item.amount} {item.units}  {item.ingredient.label}</li>)}</ul>
      {/* <ul>{JSON.stringify(recipe.ingredients)}</ul> */}
      {/* <div>{recipe.ingredients}</div> */}
      {/* <ul>{ingredientsList}</ul> */}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default Recipe;
