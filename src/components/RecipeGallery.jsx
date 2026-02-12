import React from 'react';
import { useRecipes } from '../context/RecipeContext';

const RecipeCard = ({ recipe, onClick }) => {
    const { favorites, toggleFavorite } = useRecipes();
    const isFavorite = favorites.includes(recipe.id);

    return (
        <div className="recipe-card" onClick={onClick} style={{
            background: 'var(--surface)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            border: '1px solid var(--border)',
            position: 'relative'
        }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{ position: 'relative', height: '200px' }}>
                <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                    }}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(255,255,255,0.9)',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: isFavorite ? 'var(--primary)' : 'var(--text-light)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                    <span className="tag" style={{ background: 'rgba(0,184,148,0.1)', color: 'var(--success)' }}>{recipe.cuisine}</span>
                    <span className="tag">{recipe.time}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--secondary)' }}>{recipe.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span>📊 {recipe.difficulty}</span>
                    <span>•</span>
                    <span>👤 {recipe.servings} servings</span>
                </p>
            </div>
        </div>
    );
};

const RecipeGallery = () => {
    const { recipes, setSelectedRecipe } = useRecipes();

    if (recipes.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--surface)', borderRadius: 'var(--radius)', border: '2px dashed var(--border)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🥗</div>
                <h3>No matching recipes found</h3>
                <p style={{ color: 'var(--text-light)' }}>Try adding more ingredients or clearing your filters.</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="section-title">Discovery ({recipes.length})</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                ))}
            </div>
        </div>
    );
};

export default RecipeGallery;
