import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ initialSoldOut = false }) => {
    // 1) Estado de producto agotado
    const [isSoldOut] = useState(initialSoldOut);

    // 2) Clase BEM con modificador cuando isSoldOut === true
    const cardClassName = `product-card${isSoldOut ? ' product-card--sold-out' : ''}`;

    return (
        <div className={cardClassName}>
            <div className="product-image">
                {/* Imagen de producto genérica */}
                <img 
                    src="https://acdn-us.mitiendanube.com/stores/001/593/734/products/ng-a100bt-rj-angulo-554a80fc2c8cfb6e8316986747330025-640-0.webp"
                    alt="Producto Genérico" 
                />
            </div>
            <div className="product-info">
                <div className="product-title-container">
                    <h2 className="product-title">Auriculares Inalámbricos Pro</h2>
                    {/* Ampliación 3: Etiqueta de oferta en el título */}
                    <span className="discount-tag">OFERTA</span>
                </div>
                <p className="product-description">
                    Cancelación de ruido avanzada, 30 horas de batería y sonido de alta fidelidad. El diseño ergonómico garantiza la máxima comodidad.
                </p>
                <div className="product-price-section">
                    <span className="current-price">99,99 €</span>
                    <span className="old-price">149,99 €</span>
                </div>

                {/* 4) Deshabilitar el botón y cambiar el texto cuando esté agotado */}
                <button
                    className="add-to-cart-btn"
                    disabled={isSoldOut}
                >
                    {isSoldOut ? 'Agotado' : 'Añadir a la cesta'}
                </button>
            </div>
        </div>
    );
};
export default ProductCard;
