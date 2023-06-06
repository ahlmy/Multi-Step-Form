import "./Add_ons.css";
import checkmark from "../../../assets/icon-checkmark.svg";
import { useCallback } from "react";

const Add_ons = ({ isMonthly, addOns, setAddOns }) => {
  const setItemStyle = useCallback(
    (serviceName) => {
      if (addOns.includes(serviceName)) {
        return { outline: "solid 1px var(--purplish-blue)" };
      } else {
        return { outline: "solid 1px var(--pastel-blue)" };
      }
    },
    [addOns]
  );
  const setImageConStyle = useCallback(
    (serviceName) => {
      if (addOns.includes(serviceName)) {
        return { backgroundColor: "var(--purplish-blue)" };
      } else {
        return { backgroundColor: "transparent" };
      }
    },
    [addOns]
  );
  const handleAddOn = (e) => {
    const addOnName = e.currentTarget.querySelector("h4").innerText;
    if (!addOns.includes(addOnName)) {
      setAddOns([...addOns, addOnName]);
    } else {
      setAddOns(addOns.filter((addon) => addon !== addOnName));
    }
  };
  return (
    <div className="addOns">
      <div className="addOns--title">
        <h1>Pick add-ons</h1>
        <p style={{ color: "var(--cool-gray)" }}>
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <div className="addOns--content">
        <div
          className="addOns--item"
          onClick={handleAddOn}
          style={setItemStyle("Online services")}
        >
          <div
            className="addOns--item__img"
            style={setImageConStyle("Online services")}
          >
            <img src={checkmark} alt="check" />
          </div>
          <div className="addOns--item__desc">
            <h4>Online services</h4>
            <p>Access to multiplayer games</p>
          </div>
          <div>+${isMonthly ? 1 + "/mo" : 1 * 10 + "/yr"}</div>
        </div>
        <div
          className="addOns--item"
          onClick={handleAddOn}
          style={setItemStyle("Larger storage")}
        >
          <div
            className="addOns--item__img"
            style={setImageConStyle("Larger storage")}
          >
            <img src={checkmark} alt="check" />
          </div>
          <div className="addOns--item__desc">
            <h4>Larger storage</h4>
            <p>Extra 1TB of cloud storage</p>
          </div>
          <div>+${isMonthly ? 2 + "/mo" : 2 * 10 + "/yr"}</div>
        </div>
        <div
          className="addOns--item"
          onClick={handleAddOn}
          style={setItemStyle("Customizable profile")}
        >
          <div
            className="addOns--item__img"
            style={setImageConStyle("Customizable profile")}
          >
            <img src={checkmark} alt="check" />
          </div>
          <div className="addOns--item__desc">
            <h4>Customizable profile</h4>
            <p>Custom theme on your profile</p>
          </div>
          <div>+${isMonthly ? 2 + "/mo" : 2 * 10 + "/yr"}</div>
        </div>
      </div>
    </div>
  );
};
export default Add_ons;
