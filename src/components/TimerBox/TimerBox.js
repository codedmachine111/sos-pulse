import "./TimerBox.scss";
import { Button } from "../Button/Button";
import logo from "../../media/icon.png";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Spinner } from "../spinner/Spinner";
import { Input } from "../Input/Input";
import { sendEmail } from "../../utils/emailjs.utils";

export const TimerBox = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { location } = useContext(AppContext);

  const email_content = {
    location:
      "https://www.google.com/maps?ll=" +
      location.lat +
      "," +
      location.lon +
      "&z=15&t=m&hl=en-GB&gl=US&mapclient=apiv3",
    email: email,
  };
  const handleOnChange = (e) => {
    const emailField = e.target.value.toLowerCase();
    setEmail(emailField);
  };

  const onClickHandler = async () => {
    if (email_content.email === "") {
      alert("Please enter a valid email address!");
    } else {
      setLoading(true);
      await sendEmail(email_content);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="timer-box-container">
        <h2 className="timer-box-title">
          Send an S<span id="diff">O</span>S
        </h2>
        <div className="timer-box-time">
          <img src={logo} alt="" id="timer-box-img" />
        </div>
        <div className="input-box">
          <p>Your emergency email: </p>
          <Input placeholder="email" onChange={handleOnChange} />
          {loading ? (
            <Spinner />
          ) : (
            <Button title="SOS" id="emailbtn" onClick={onClickHandler} />
          )}
        </div>
      </div>
    </>
  );
};
