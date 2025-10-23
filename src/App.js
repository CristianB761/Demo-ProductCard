import React from 'react';
import ProductCard from './components/ProductCard';

export default function App() {
    return (
        <div style={{ padding: 20, background: '#1a1a1a', minHeight: '100vh' }}>
            <h1 style={{ textAlign: 'center', marginBottom: 20, color: '#ecf0f1' }}>Demo ProductCard</h1>

            {/* Disponible */}
            <ProductCard initialSoldOut={false} />

            {/* Agotado */}
            <ProductCard initialSoldOut={true} />
        </div>
    );
}
