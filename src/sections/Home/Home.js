import "./Home.scss";
import { Button } from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import {TimerBox} from "../../components/TimerBox/TimerBox";

export const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="home-container">
        <div className="home-content">
          <h1 className="content-title">SOS<span id="diff">P</span>ulse</h1>
          <p className="content-desc">
            Send your current location to your emergency contacts through an email.
          </p>
          <div className="get-started-btn">
            <Button title="Learn more" />
          </div>
        </div>
        <div className="home-timer-container">
          <TimerBox/>
        </div>
      </div>
    </>
  );
};
