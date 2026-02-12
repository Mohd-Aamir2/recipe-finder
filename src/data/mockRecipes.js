export const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    time: "45 mins",
    difficulty: "Medium",
    servings: 2,
    cuisine: "Italian",
    diet: "Veg",
    ingredients: ["Flour", "Yeast", "Water", "Salt", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
    instructions: [
      "Prepare the pizza dough and let it rise for 1 hour.",
      "Preheat your oven to the highest setting.",
      "Roll out the dough on a floured surface.",
      "Spread tomato sauce evenly, leaving the edges.",
      "Top with mozzarella cheese and basil leaves.",
      "Bake for 10-15 minutes until the crust is golden and cheese is bubbly.",
      "Drizzle with olive oil before serving."
    ],
    nutrition: {
      calories: "250 kcal",
      protein: "12g",
      carbs: "35g",
      fat: "9g"
    }
  },
  {
    id: 2,
    title: "Paneer Tikka Masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    time: "40 mins",
    difficulty: "Medium",
    servings: 4,
    cuisine: "Indian",
    diet: "Veg",
    ingredients: ["Paneer", "Yogurt", "Ginger", "Garlic", "Onion", "Tomato", "Cream", "Butter", "Garam Masala", "Coriander"],
    instructions: [
      "Marinate paneer cubes in yogurt and spices for 30 minutes.",
      "Grill the marinated paneer until golden brown.",
      "Prepare a gravy with butter, onions, tomatoes, and cream.",
      "Add grilled paneer and simmer for 10 minutes.",
      "Garnish with fresh coriander."
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "18g",
      carbs: "12g",
      fat: "28g"
    }
  },
  {
    id: 3,
    title: "Kung Pao Chicken",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800",
    time: "30 mins",
    difficulty: "Hard",
    servings: 3,
    cuisine: "Chinese",
    diet: "Non-Veg",
    ingredients: ["Chicken", "Peanuts", "Dried Red Chilies", "Soy Sauce", "Rice Vinegar", "Ginger", "Garlic", "Green Onion", "Sugar"],
    instructions: [
      "Cut chicken into bite-sized cubes.",
      "Sauté ginger, garlic, and dried chilies in a wok.",
      "Add chicken and cook until no longer pink.",
      "Stir in the peanuts and sauce mixture (soy sauce, vinegar, sugar).",
      "Cook until sauce thickens and coat everything evenly.",
      "Garnish with sliced green onions."
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "32g",
      carbs: "15g",
      fat: "28g"
    }
  },
  {
    id: 4,
    title: "Quinoa Salad with Avocado",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    time: "15 mins",
    difficulty: "Easy",
    servings: 2,
    cuisine: "Continental",
    diet: "Vegan",
    ingredients: ["Quinoa", "Avocado", "Cherry Tomatoes", "Cucumber", "Lemon Juice", "Olive Oil", "Parsley", "Salt", "Black Pepper"],
    instructions: [
      "Cook quinoa according to package instructions and let cool.",
      "Dice the avocado, cucumber, and tomatoes.",
      "In a large bowl, combine quinoa, vegetables, and parsley.",
      "Whisk together lemon juice, olive oil, salt, and pepper.",
      "Toss the salad with dressing and serve chilled."
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "8g",
      carbs: "42g",
      fat: "14g"
    }
  },
  {
    id: 5,
    title: "Avocado Toast with Egg",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    time: "10 mins",
    difficulty: "Easy",
    servings: 1,
    cuisine: "Continental",
    diet: "Veg",
    ingredients: ["Bread", "Avocado", "Egg", "Red Pepper Flakes", "Salt", "Lemon Juice"],
    instructions: [
      "Toast the bread until golden brown.",
      "Mash the avocado with lemon juice and salt.",
      "Spread avocado on toast.",
      "Top with a fried or poached egg.",
      "Sprinkle with red pepper flakes."
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "14g",
      carbs: "22g",
      fat: "20g"
    }
  },
  {
    id: 6,
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
    time: "25 mins",
    difficulty: "Medium",
    servings: 2,
    cuisine: "Italian",
    diet: "Non-Veg",
    ingredients: ["Pasta", "Egg", "Parmesan Cheese", "Bacon", "Black Pepper", "Garlic"],
    instructions: [
      "Boil pasta in salted water.",
      "Fry bacon and garlic in a pan.",
      "Whisk eggs and parmesan cheese together.",
      "Toss hot pasta with bacon, then remove from heat.",
      "Quickly stir in egg mixture to create a creamy sauce."
    ],
    nutrition: {
      calories: "550 kcal",
      protein: "22g",
      carbs: "60g",
      fat: "25g"
    }
  },
  {
    id: 7,
    title: "Tofu Stir-Fry",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    time: "20 mins",
    difficulty: "Easy",
    servings: 2,
    cuisine: "Chinese",
    diet: "Vegan",
    ingredients: ["Tofu", "Broccoli", "Carrot", "Soy Sauce", "Ginger", "Garlic", "Sesame Oil"],
    instructions: [
      "Press and cube the tofu.",
      "Sauté tofu until golden.",
      "Add vegetables and stir-fry for 5 minutes.",
      "Stir in soy sauce, ginger, and garlic.",
      "Drizzle with sesame oil before serving."
    ],
    nutrition: {
      calories: "280 kcal",
      protein: "16g",
      carbs: "18g",
      fat: "14g"
    }
  },
  {
    id: 8,
    title: "Classic Beef Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    time: "20 mins",
    difficulty: "Medium",
    servings: 2,
    cuisine: "American",
    diet: "Non-Veg",
    ingredients: ["Beef", "Bread", "Cheese", "Lettuce", "Tomato", "Onion", "Pickles"],
    instructions: [
      "Shape beef into patties and season.",
      "Grill or pan-fry patties to desired doneness.",
      "Toast the buns.",
      "Assemble burger with cheese and fresh toppings.",
      "Serve with your favorite condiments."
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "35g",
      carbs: "45g",
      fat: "32g"
    }
  }
];

export const allIngredients = [
  "Chicken", "Paneer", "Tofu", "Beef", "Fish", "Shrimp", "Bacon", "Egg",
  "Onion", "Tomato", "Potato", "Garlic", "Ginger", "Carrot", "Broccoli", "Spinach", "Cucumber", "Avocado", "Lettuce", "Pickles",
  "Flour", "Rice", "Quinoa", "Pasta", "Noodles", "Bread",
  "Milk", "Cream", "Cheese", "Butter", "Yogurt", "Mozzarella Cheese", "Parmesan Cheese",
  "Olive Oil", "Soy Sauce", "Rice Vinegar", "Lemon Juice", "Sesame Oil",
  "Salt", "Black Pepper", "Sugar", "Garam Masala", "Turmeric", "Cumin", "Dried Red Chilies", "Red Pepper Flakes",
  "Coriander", "Fresh Basil", "Parsley", "Green Onion", "Peanuts", "Walnuts"
];
