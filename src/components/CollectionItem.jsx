import { useState } from 'react';

const CollectionItem = ({ image, title, description, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="collection-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="collection-item-image">
        <img src={image} alt={title} />
        <div className={`collection-item-overlay ${isHovered ? 'active' : ''}`}>
          <div className="collection-item-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="price">{price}</span>
            <a href="https://displate.com/limited-edition/displate/8023130" className="cta-button">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem; 