import "./Thanks_page.css";
import thank_icon from "../../../assets/icon-thank-you.svg";

const Thanks_page = () => {
  return (
    <div className="thanksPage">
      <img src={thank_icon} alt="thank-icon" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default Thanks_page;
