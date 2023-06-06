import "./Finishing_up.css";
import { useCallback } from "react";

const Finishing_up = ({ isMonthly, addOns, plan, setStep }) => {
  const calcCost = useCallback((item) => {
    switch (item) {
      case "Arcade":
        return 9;
      case "Advanced":
        return 12;
      case "Pro":
        return 15;
      case "Online services":
        return 1;
      case "Larger storage":
        return 2;
      case "Customizable profile":
        return 2;
      default:
        return 0;
    }
  }, []);
  const getServices = (serviceName, index) => {
    return (
      <div
        className="finishingUp--content__addons--item"
        key={Date.now() + index}
      >
        <div>{serviceName}</div>
        <h4>
          ${calcCost(serviceName) * (isMonthly ? 1 : 10)}
          {isMonthly ? "/mo" : "yr"}
        </h4>
      </div>
    );
  };
  const calcTotalCost = () => {
    let totalCost = 0;
    totalCost += calcCost(plan);
    addOns.forEach((addon) => (totalCost += calcCost(addon)));
    return totalCost * (isMonthly ? 1 : 10);
  };
  return (
    <div className="finishingUp">
      <div className="finishingUp--title">
        <h1>Finishing up</h1>
        <p style={{ color: "var(--cool-gray)" }}>
          Double-check everything looks OK before confirming
        </p>
      </div>
      <div className="finishingUp--content">
        <div className="finishingUp--content__plan">
          <div>
            <h4>
              {plan ?? "Select a plan"}
              {isMonthly ? "(monthly)" : "(yearly)"}
            </h4>
            <div
              className="finishingUp--content__plan__change"
              onClick={setStep}
            >
              Change
            </div>
          </div>
          <h4>
            ${isMonthly ? +calcCost(plan) + "/mo" : calcCost(plan) * 10 + "yr"}
          </h4>
        </div>
        {addOns.length > 0 ? (
          <>
            <div id="line">
              <span></span>
            </div>
            <div className="finishingUp--content__addons">
              {addOns.map((addon, index) => getServices(addon, index))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="finishingUp--total">
        <div>Total ({isMonthly ? "per month" : "per year"})</div>
        <h3>
          +${calcTotalCost()}
          {isMonthly ? "/mo" : "/yr"}
        </h3>
      </div>
    </div>
  );
};
export default Finishing_up;
