import React from 'react';
import { RecipeProvider, useRecipes } from './context/RecipeContext';
import IngredientInput from './components/IngredientInput';
import Filters from './components/Filters';
import RecipeGallery from './components/RecipeGallery';
import RecipeDetail from './components/RecipeDetail';

const AppContent = () => {
  const { selectedRecipe, setSelectedRecipe } = useRecipes();

  return (
    <div className="app">
      <header className="glass" style={{
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        marginBottom: '30px',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: 'var(--primary)', cursor: 'pointer' }} onClick={() => setSelectedRecipe(null)}>
            🍳 Recipe<span style={{ color: 'var(--secondary)' }}>Finder</span>
          </h1>
          <nav>
            <ul style={{ display: 'flex', gap: '20px', fontWeight: '600' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => setSelectedRecipe(null)}>Home</li>
              <li style={{ cursor: 'pointer' }}>Favorites</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
            <aside>
              <IngredientInput />
              <div style={{ marginTop: '30px' }}>
                <Filters />
              </div>
            </aside>
            <section>
              <RecipeGallery />
            </section>
          </div>
        )}
      </main>

      <footer style={{ marginTop: '60px', padding: '40px 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-light)' }}>© 2026 Recipe Finder. Made with ❤️ for foodies.</p>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <RecipeProvider>
      <AppContent />
    </RecipeProvider>
  );
};

export default App;
