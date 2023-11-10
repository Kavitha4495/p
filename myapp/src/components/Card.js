
import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.title} />
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;