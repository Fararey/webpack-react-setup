import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenGauntRecipe);
console.log(elvenShieldRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenGauntRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Gaunlet Recipe
      </button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}:{recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
