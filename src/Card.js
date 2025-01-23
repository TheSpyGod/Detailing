import React from "react";
import { useTranslation } from 'react-i18next';

function Card({ title, price, description, detailedDescription }) {
    const { t } = useTranslation();
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{detailedDescription}</p>
            <button>{t('book_button')}</button>
        </div>
    );

}
export default Card;