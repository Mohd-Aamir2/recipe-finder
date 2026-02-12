import React, { createContext, useContext, useState, useEffect } from 'react';
import { recipes } from '../data/mockRecipes';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [userIngredients, setUserIngredients] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [filters, setFilters] = useState({
        diet: 'All',
        cuisine: 'All',
        difficulty: 'All',
        time: 'All'
    });

    // Load favorites from local storage
    useEffect(() => {
        const savedFavorites = localStorage.getItem('recipeFavorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    // Save favorites to local storage
    useEffect(() => {
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    }, [favorites]);

    const addIngredient = (ingredient) => {
        if (!userIngredients.includes(ingredient)) {
            setUserIngredients([...userIngredients, ingredient]);
        }
    };

    const removeIngredient = (ingredient) => {
        setUserIngredients(userIngredients.filter(i => i !== ingredient));
    };

    const toggleFavorite = (recipeId) => {
        if (favorites.includes(recipeId)) {
            setFavorites(favorites.filter(id => id !== recipeId));
        } else {
            setFavorites([...favorites, recipeId]);
        }
    };

    const filteredRecipes = recipes.filter(recipe => {
        const matchesDiet = filters.diet === 'All' || recipe.diet === filters.diet;
        const matchesCuisine = filters.cuisine === 'All' || recipe.cuisine === filters.cuisine;
        const matchesDifficulty = filters.difficulty === 'All' || recipe.difficulty === filters.difficulty;

        // Time filter logic
        let matchesTime = true;
        if (filters.time !== 'All') {
            const recipeTime = parseInt(recipe.time);
            if (filters.time === '< 30 mins') matchesTime = recipeTime < 30;
            else if (filters.time === '30-60 mins') matchesTime = recipeTime >= 30 && recipeTime <= 60;
            else if (filters.time === '> 60 mins') matchesTime = recipeTime > 60;
        }

        // Ingredient logic: Recipe is shown if it matches at least ONE ingredient or if no ingredients are entered
        // In a production app, we might rank by match percentage
        const hasIngredientMatch = userIngredients.length === 0 ||
            recipe.ingredients.some(ri => userIngredients.some(ui => ri.toLowerCase().includes(ui.toLowerCase())));

        return matchesDiet && matchesCuisine && matchesDifficulty && matchesTime && hasIngredientMatch;
    });

    const value = {
        userIngredients,
        addIngredient,
        removeIngredient,
        recipes: filteredRecipes,
        allRecipes: recipes, // for recommendations
        favorites,
        toggleFavorite,
        filters,
        setFilters,
        selectedRecipe,
        setSelectedRecipe
    };

    return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

export const useRecipes = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipes must be used within a RecipeProvider');
    }
    return context;
};
