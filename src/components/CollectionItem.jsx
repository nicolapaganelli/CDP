import React from 'react';

const CollectionItem = ({ image, title, description, price }) => {
  return (
    <div className="collection-item">
      <div className="collection-item-image">
        <img src={image} alt={title} />
      </div>
      <div className="collection-item-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="collection-item-price">
          <span>{price}</span>
          <a href="https://displate.com/limited-edition/displate/8023130" className="cta-button">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem; 