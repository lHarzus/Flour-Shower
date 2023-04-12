const recipes = [
  {
    name: "Bolo de chocolate",
    ingredients: [
      "Ovos",
      "açucar",
      "óleo",
      "leite integral",
      "cacau",
      "farinha de trigo",
      "sal",
      "essência de baunilha",
      "fermento",
    ],
    category: "pastelaria",
    url: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-de-liquidificador-10-730x554.jpeg",
  },
  {
    name: "Bolo simples",
    ingredients: [
      "Sal",
      "manteiga",
      "farinha de trigo",
      "ovos",
      "açúcar",
      "oleo vegetal",
      "leite integral",
      "chá de fubá",
      "amido de milho",
      "fermento",
    ],
    category: "pastelaria",
    url: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-fuba-simples-e-gostoso-07-730x548.jpeg",
  },
  {
    name: "Bolo de laranja",
    ingredients: [
      "Ovos",
      "açúcar refinado",
      "manteiga",
      "leite fresco",
      "laranja",
      "farinha de trigo",
      "sal",
      "fermento biologico seco",
    ],
    category: "pastelaria",
    url: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-laranja-09-730x547.jpeg",
  },
  {
    name: "Bolo de limão",
    ingredients: [
      "Ovos",
      "Chá de leite",
      "manteiga",
      "limão",
      "farinha de trigo",
      "fermento",
      "leite condensado",
    ],
    category: "pastelaria",
    url: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-limao-10-730x548.jpeg",
  },
  {
    name: "Bolo de fubá",
    ingredients: [
      "Fubá",
      "leite",
      "farinha de trigo",
      "açucar",
      "ovos",
      "fermento",
      "margarina",
      "parmesão",
    ],
    category: "pastelaria",
    url: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-fuba-fofinho-6-730x548.jpg",
  },
  {
    name: "Lasanha",
    ingredients: [
      "azeite",
      "cebola",
      "alho",
      "carne vitela picada",
      "vinho branco",
      "orégão",
      "sal",
      "tomate maduro",
      "folhas de lasanha",
      "queijo",
    ],
    category: "cozinha",
    url: "https://www.pingodoce.pt/wp-content/uploads/2015/03/lasanha.jpeg",
  },
  {
    name: "Arroz de pato",
    ingredients: [
      "arroz",
      "carde de pato",
      "cebola",
      "tomate",
      "colorau",
      "sal",
      "vinho tinto",
    ],
    category: "cozinha",
    url: "https://www.pingodoce.pt/wp-content/uploads/2016/12/arroz-de-pato.jpeg",
  },
  {
    name: "Bacalhau à Brás",
    ingredients: [
      "batata",
      "lombo de bacalhau",
      "óleo",
      "azeite",
      "ovos",
      "salsa",
      "cebola",
    ],
    category: "cozinha",
    url: "https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpg",
  },
];

const categories = ["cozinha", "pastelaria"];

export const getRecipesData = () => {
  return recipes;
};

export const getRecipesCatData = category => {
  if (category === "all") return recipes;
  else return recipes.filter(recipe => recipe.category === category);
};

export const getCategoriesData = () => {
  return categories;
};
