import React, { useState } from 'react';
import { useRecipes } from '../context/RecipeContext';
import { allIngredients } from '../data/mockRecipes';

const IngredientInput = () => {
    const { userIngredients, addIngredient, removeIngredient } = useRecipes();
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.length > 1) {
            const filtered = allIngredients.filter(ing =>
                ing.toLowerCase().includes(value.toLowerCase()) &&
                !userIngredients.includes(ing)
            ).slice(0, 5);
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleAdd = (ingredient) => {
        addIngredient(ingredient);
        setInputValue('');
        setSuggestions([]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            addIngredient(inputValue.trim());
            setInputValue('');
            setSuggestions([]);
        }
    };

    return (
        <div className="ingredient-input-section" style={{
            background: 'var(--surface)',
            padding: '24px',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)'
        }}>
            <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>What's in your pantry?</h3>

            <div style={{ position: 'relative', marginBottom: '16px' }}>
                <input
                    type="text"
                    placeholder="Add ingredient (e.g. Potato)"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius)',
                        border: '2px solid var(--border)',
                        outline: 'none',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />

                {suggestions.length > 0 && (
                    <ul className="glass" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        marginTop: '5px',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow)',
                        overflow: 'hidden'
                    }}>
                        {suggestions.map(suggestion => (
                            <li
                                key={suggestion}
                                onClick={() => handleAdd(suggestion)}
                                style={{
                                    padding: '10px 16px',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid var(--border)'
                                }}
                                onMouseOver={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
                                onMouseOut={(e) => e.target.style.background = 'transparent'}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {userIngredients.map(ing => (
                    <span key={ing} className="tag" style={{ background: 'var(--primary)', color: 'white', fontWeight: '500' }}>
                        {ing}
                        <button
                            onClick={() => removeIngredient(ing)}
                            style={{ background: 'transparent', color: 'white', fontSize: '1.1rem', marginLeft: '5px', display: 'flex', alignItems: 'center' }}
                        >
                            ×
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default IngredientInput;
