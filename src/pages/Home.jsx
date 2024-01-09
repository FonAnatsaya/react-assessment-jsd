import { useState } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Admin from "./Admin";

const Home = () => {
  const [text, setText] = useState("React-Assessment");

  const handleButton = (type) => {
    if (type) {
      setText("Home-User Sector");
    } else {
      setText("Home-Admin Sector");
    }
  };

  return (
    <div className="Layout">
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div style={{ margin: "40px" }}>
          <h1>Generation Thailand </h1>
          <h1>{text}</h1>
        </div>
        <div className="button">
          <button onClick={() => handleButton(true)}>User Home Sector</button>
          <button onClick={() => handleButton(false)}>Admin Home Sector</button>
        </div>
        {text === "Home-User Sector" ? <User /> : <Admin />}
      </div>
    </div>
  );
};

export default Home;
