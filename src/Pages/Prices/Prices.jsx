import headPicture from "./head picture.png";
import "./Prices.css";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";

const Prices = () => {
  return (
    <div className="prices">
      <CircleEffect />
      <div className="servSect1 contactSect1 priceSect1">
        <img alt="contactImage" src={headPicture} className="image" />{" "}
      </div>
    </div>
  );
};

export default Prices;
