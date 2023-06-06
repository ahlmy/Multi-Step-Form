import "./Select_plan.css";
import arcade from "../../../assets/icon-arcade.svg";
import advanced from "../../../assets/icon-advanced.svg";
import pro from "../../../assets/icon-pro.svg";
import { useCallback } from "react";

const Select_plan = ({
  isMonthly,
  setIsMonthly,
  plan,
  setPlan,
  showRequired,
}) => {
  const infoText = useCallback(() => {
    return (
      <>
        <br />
        <span className="selectPlan--form__item__info">2 months free</span>
      </>
    );
  }, []);
  const handlePlanSelection = useCallback((e) => {
    const item = e.currentTarget;
    const planName = item.querySelector("h4").innerText;
    setPlan(planName);
  }, []);
  return (
    <div className="selectPlan">
      <div className="selectPlan--title">
        <h1>Select your plan</h1>
        <p style={{ color: "var(--cool-gray)" }}>
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="selectPlan--form">
        <div
          className="selectPlan--form__item"
          onClick={handlePlanSelection}
          style={
            plan === "Arcade" ? { borderColor: "var(--purplish-blue)" } : null
          }
        >
          <img src={arcade} alt="arcade" />
          <h4>Arcade</h4>
          <p>
            ${isMonthly ? 9 + "/mo" : 9 * 10 + "/yr"}
            {isMonthly ? "" : infoText()}
          </p>
        </div>
        <div
          className="selectPlan--form__item"
          onClick={handlePlanSelection}
          style={
            plan === "Advanced" ? { borderColor: "var(--purplish-blue)" } : null
          }
        >
          <img src={advanced} alt="advanced" />
          <h4>Advanced</h4>
          <p>
            ${isMonthly ? 12 + "/mo" : 12 * 10 + "/yr"}
            {isMonthly ? "" : infoText()}
          </p>
        </div>
        <div
          className="selectPlan--form__item"
          onClick={handlePlanSelection}
          style={
            plan === "Pro" ? { borderColor: "var(--purplish-blue)" } : null
          }
        >
          <img src={pro} alt="pro" />
          <h4>Pro</h4>
          <p>
            ${isMonthly ? 15 + "/mo" : 15 * 10 + "/yr"}
            {isMonthly ? "" : infoText()}
          </p>
        </div>
      </div>
      <div className="selectPlan--selection">
        <div>
          <span
            style={
              isMonthly
                ? { color: "var(--marine-blue)" }
                : { color: "var(--cool-gray)" }
            }
          >
            Monthly
          </span>
          <span id="selection" onClick={() => setIsMonthly(!isMonthly)}>
            <span
              id="selection__circle"
              className={isMonthly ? "left" : "right"}
            ></span>
          </span>
          <span
            style={
              isMonthly
                ? { color: "var(--cool-gray)" }
                : { color: "var(--marine-blue)" }
            }
          >
            Yearly
          </span>
        </div>
      </div>
      {showRequired ? (
        <div
          style={{
            alignSelf: "center",
            color: "var(--strawberry-red)",
            fontSize: "0.85rem",
          }}
        >
          Select a plan
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Select_plan;
