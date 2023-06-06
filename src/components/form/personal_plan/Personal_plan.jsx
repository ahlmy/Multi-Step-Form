import "./Personal_plan.css";

const Personal_plan = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  showRequired,
}) => {
  return (
    <div className="personalPlan">
      <div className="personalPlan--title">
        <h1>Personal info</h1>
        <p style={{ color: "var(--cool-gray)" }}>
          Please provide your name, email address and phone number.
        </p>
      </div>
      <form className="personalPlan--form">
        <label htmlFor="name">Name{showRequired && !name ? " *" : ""}</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephan King"
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={
            showRequired && !name
              ? { outline: "solid 1px var(--strawberry-red)" }
              : null
          }
        />
        <br />
        <label htmlFor="email">
          Email Address {showRequired && !email ? " *" : ""}
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephanking@lorem.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={
            showRequired && !email
              ? { outline: "solid 1px var(--strawberry-red)" }
              : null
          }
        />
        <br />
        <label htmlFor="phone">
          Phone Number {showRequired && !phone ? " *" : ""}
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          style={
            showRequired && !phone
              ? { outline: "solid 1px var(--strawberry-red)" }
              : null
          }
        />
      </form>
    </div>
  );
};
export default Personal_plan;
