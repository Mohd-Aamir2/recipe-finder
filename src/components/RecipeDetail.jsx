import React from 'react';
import { useRecipes } from '../context/RecipeContext';

const RecipeDetail = ({ recipe, onBack }) => {
    const { userIngredients, favorites, toggleFavorite } = useRecipes();
    const isFavorite = favorites.includes(recipe.id);

    const missingIngredients = recipe.ingredients.filter(
        ri => !userIngredients.some(ui => ri.toLowerCase().includes(ui.toLowerCase()))
    );

    return (
        <div className="recipe-detail" style={{ background: 'var(--surface)', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <button
                onClick={onBack}
                style={{ margin: '20px', background: 'transparent', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
                ← Back to Search
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                <div style={{ height: '500px' }}>
                    <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span className="tag" style={{ background: 'var(--primary)', color: 'white', marginBottom: '10px' }}>{recipe.diet}</span>
                            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '15px' }}>{recipe.title}</h2>
                        </div>
                        <button
                            onClick={() => toggleFavorite(recipe.id)}
                            style={{ fontSize: '2rem', background: 'transparent' }}
                        >
                            {isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '30px', margin: '20px 0', borderY: '1px solid var(--border)', padding: '15px 0' }}>
                        <div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Prep Time</p>
                            <p style={{ fontWeight: '700' }}>{recipe.time}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Difficulty</p>
                            <p style={{ fontWeight: '700' }}>{recipe.difficulty}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase' }}>Servings</p>
                            <p style={{ fontWeight: '700' }}>{recipe.servings}</p>
                        </div>
                    </div>

                    {missingIngredients.length > 0 && (
                        <div style={{ padding: '15px', background: 'rgba(253, 203, 110, 0.15)', borderRadius: 'var(--radius)', marginBottom: '20px', border: '1px solid var(--warning)' }}>
                            <p style={{ fontWeight: '600', color: '#a66d00', fontSize: '0.9rem' }}>⚠️ Missing {missingIngredients.length} ingredients:</p>
                            <p style={{ fontSize: '0.85rem' }}>{missingIngredients.join(', ')}</p>
                        </div>
                    )}

                    <div style={{ marginTop: 'auto' }}>
                        <h4 style={{ marginBottom: '10px' }}>Nutrition Per Serving</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {Object.entries(recipe.nutrition).map(([key, val]) => (
                                <div key={key} style={{ textAlign: 'center', background: 'var(--background)', padding: '8px 12px', borderRadius: '10px', minWidth: '70px' }}>
                                    <p style={{ fontSize: '0.7rem', textTransform: 'capitalize', color: 'var(--text-light)' }}>{key}</p>
                                    <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>{val}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '60px', padding: '60px 40px' }}>
                <div>
                    <h3 style={{ marginBottom: '20px', borderBottom: '2px solid var(--primary)', display: 'inline-block' }}>Ingredients</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {recipe.ingredients.map(ing => {
                            const hasIt = userIngredients.some(ui => ing.toLowerCase().includes(ui.toLowerCase()));
                            return (
                                <li key={ing} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        background: hasIt ? 'var(--success)' : 'var(--border)',
                                        display: 'inline-block'
                                    }}></span>
                                    <span style={{ color: hasIt ? 'var(--text)' : 'var(--text-light)', textDecoration: !hasIt && userIngredients.length > 0 ? 'none' : 'none' }}>
                                        {ing}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h3 style={{ marginBottom: '20px' }}>Cooking Instructions</h3>
                    <ol style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        {recipe.instructions.map((step, index) => (
                            <li key={index} style={{ display: 'flex', gap: '20px' }}>
                                <span style={{
                                    flexShrink: 0,
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: 'var(--secondary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700'
                                }}>
                                    {index + 1}
                                </span>
                                <p style={{ paddingTop: '5px' }}>{step}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
