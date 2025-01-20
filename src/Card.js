import React from "react";
function Card({ title, price, description, detailedDescription }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{detailedDescription}</p>
            <button>REZERWUJ TERMIN</button>
        </div>
    );
}
export default Card;