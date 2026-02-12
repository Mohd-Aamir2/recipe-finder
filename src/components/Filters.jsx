import React from 'react';
import { useRecipes } from '../context/RecipeContext';

const Filters = () => {
    const { filters, setFilters } = useRecipes();

    const filterOptions = {
        diet: ['All', 'Veg', 'Non-Veg', 'Vegan'],
        cuisine: ['All', 'Indian', 'Italian', 'Chinese', 'Continental'],
        difficulty: ['All', 'Easy', 'Medium', 'Hard'],
        time: ['All', '< 30 mins', '30-60 mins', '> 60 mins']
    };

    const handleChange = (category, value) => {
        setFilters({ ...filters, [category]: value });
    };

    return (
        <div className="filters-section" style={{
            background: 'var(--surface)',
            padding: '24px',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)'
        }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Filters</h3>

            {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        textTransform: 'capitalize',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        color: 'var(--text-light)'
                    }}>
                        {category}
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleChange(category, option)}
                                style={{
                                    padding: '6px 12px',
                                    borderRadius: '20px',
                                    border: '1px solid var(--border)',
                                    fontSize: '0.85rem',
                                    background: filters[category] === option ? 'var(--secondary)' : 'transparent',
                                    color: filters[category] === option ? 'white' : 'var(--text)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Filters;
