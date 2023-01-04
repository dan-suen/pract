const checkRep = (a, b, recipe) => {
  if (!a.includes(recipe.ingredients[0]) && !b.includes(recipe.ingredients[0])){
    return false
  }
  if (!a.includes(recipe.ingredients[1]) && !b.includes(recipe.ingredients[1])){
    return false
  }
  return true
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0; i< recipes.length; i ++) {
    if (checkRep(bakeryA,bakeryB,recipes[i])) {
      return recipes[i].name
    }
  }
}



//loop over the recipes 
//


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));