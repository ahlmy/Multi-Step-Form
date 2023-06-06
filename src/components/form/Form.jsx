import "./Form.css";
import {
  Form_nav,
  Personal_plan,
  Select_plan,
  Add_ons,
  Finishing_up,
  Thanks_page,
} from "../";
import { useState, useCallback } from "react";

const Form = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isMonthly, setIsMonthly] = useState(true);
  const [plan, setPlan] = useState(null);
  const [showRequired, setShowRequired] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const handleStepSwitch = (n) => {
    switch (n) {
      case 0:
        return (
          <Personal_plan
            setName={(n) => setName(n)}
            setEmail={(n) => setEmail(n)}
            setPhone={(n) => setPhone(n)}
            name={name}
            email={email}
            phone={phone}
            showRequired={showRequired}
          />
        );
      case 1:
        return (
          <Select_plan
            isMonthly={isMonthly}
            setIsMonthly={(v) => setIsMonthly(v)}
            plan={plan}
            setPlan={(v) => setPlan(v)}
            showRequired={showRequired}
          />
        );
      case 2:
        return (
          <Add_ons
            isMonthly={isMonthly}
            addOns={addOns}
            setAddOns={(n) => setAddOns(n)}
          />
        );
      case 3:
        return (
          <Finishing_up
            isMonthly={isMonthly}
            plan={plan}
            addOns={addOns}
            setStep={() => setStep(1)}
          />
        );
      case 4:
        return <Thanks_page />;
      default:
        break;
    }
  };
  const handleNumberStyle = useCallback((bool) => {
    if (bool) {
      return {
        backgroundColor: "var(--pastel-blue)",
        color: "var(--marine-blue)",
      };
    } else if (!bool) {
      return { backgroundColor: "transparent", color: "var(--white)" };
    }
  }, []);
  const stepBack = useCallback(() => setStep((step) => step - 1), []);
  const handleBackBtn = useCallback(() => {
    stepBack();
  }, []);
  const handleRequiredShow = () => {
    if (showRequired) return;
    setShowRequired(true);
    setTimeout(() => {
      setShowRequired(false);
    }, 2000);
  };
  const stepNext = useCallback(() => setStep((step) => step + 1), []);
  const handleNextBtn = () => {
    switch (step) {
      case 0:
        if (name && email && phone) return stepNext();
        return handleRequiredShow();
      case 1:
        if (plan) return stepNext();
        return handleRequiredShow();
      case 2:
        return stepNext();
      case 3:
        return stepNext();
      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="form--container">
        <div className="form--container--image"></div>
        <ul className="form--container--image__list">
          <li>
            <div
              className="form--container__number"
              style={
                step === 0 ? handleNumberStyle(true) : handleNumberStyle(false)
              }
            >
              <span>1</span>
            </div>
            <div className="form--container__desc">
              <h4>Step 1</h4>
              <p>Your info</p>
            </div>
          </li>
          <li>
            <div
              className="form--container__number"
              style={
                step === 1 ? handleNumberStyle(true) : handleNumberStyle(false)
              }
            >
              <span>2</span>
            </div>
            <div className="form--container__desc">
              <h4>Step 2</h4>
              <p>Select Plans</p>
            </div>
          </li>
          <li>
            <div
              className="form--container__number"
              style={
                step === 2 ? handleNumberStyle(true) : handleNumberStyle(false)
              }
            >
              <span>3</span>
            </div>
            <div className="form--container__desc">
              <h4>Step 3</h4>
              <p>Add-ons</p>
            </div>
          </li>
          <li>
            <div
              className="form--container__number"
              style={
                step >= 3 ? handleNumberStyle(true) : handleNumberStyle(false)
              }
            >
              <span>4</span>
            </div>

            <div className="form--container__desc">
              <h4>Step 4</h4>
              <p>Summary</p>
            </div>
          </li>
        </ul>
        <div className="form--container--content">
          {handleStepSwitch(step)}

          <Form_nav
            step={step}
            handleBackBtn={handleBackBtn}
            handleNextBtn={handleNextBtn}
          />
        </div>
        {/* <div id="navBtn">NAVBAR</div> */}
      </div>
    </div>
  );
};
export default Form;
