import headPicture from "./head picture.png";
import "./Prices.css";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";
import CircleSquare from "../../Components/CircleSquare/CircleSquare";
import CalculationPage from "../Calculator/Calculation";


const Prices = () => {
  return (
    <div className="prices">
      <CircleEffect />
      <div className="">
        {/* <img alt="contactImage" src={headPicture} className="image" />{" "} */}
        <CircleSquare/>
        <CalculationPage/>
      </div>
    </div>
  );
};

export default Prices;
