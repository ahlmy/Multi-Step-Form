import "./Form_nav.css";

const Form_nav = ({ step, handleBackBtn, handleNextBtn }) => {
  return (
    <div className="formNav">
      <button
        type="button"
        className="formNav--back"
        onClick={handleBackBtn}
        style={step <= 0 ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        Go Back
      </button>
      <button
        type="button"
        className="formNav--next"
        onClick={handleNextBtn}
        style={
          step === 4 ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        {step === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};
export default Form_nav;
