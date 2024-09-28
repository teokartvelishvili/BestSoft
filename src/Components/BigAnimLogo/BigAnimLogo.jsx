import React from "react";
import gear1 from '../../Assets/gear 1.png';
import gear2 from '../../Assets/gear 2.png';
import gear3 from '../../Assets/gear 3.png';
import './BigAnimLogo.css'; 

const BigAnimLogo = () => {
  const smallBoltImage = gear3;
  const mediumBoltImage = gear2;
  const largeBoltImage = gear1;

  const Bolt = ({ size, direction, src }) => {
    return (
      <div className={`bolt-container ${size} ${direction}`}>
        <img src={src} alt={`${size} bolt`} className={`bolt-image ${size}`} />
      </div>
    );
  };

  return (
    <div className="main-component">
      <div className="top-bolt">
        {/* მარცხნივ ტრიალი საშუალო ზომის */}
        <Bolt size="medium" direction="rotate-left" src={mediumBoltImage} />
      </div>
      <div className="bottom-bolts">
        {/* მარჯვნივ ტრიალი დიდი ზომის */}
        <Bolt size="large" direction="rotate-right" src={largeBoltImage} />
        {/* მარჯვნივ ტრიალი პატარა ზომის */}
        <Bolt size="small" direction="rotate-right" src={smallBoltImage} />
      </div>
    </div>
  );
};

export default BigAnimLogo;
