import Button from "Components/Button/Button";
import React, { useState } from "react";
import "./Greeter.css";

const Greeter = () => {
  const [name, setName] = useState({ value: "", wasCleared: false });
  const [showGreeting, setShowGreeting] = useState(false);

  const handleTextDisplay = () =>
    name.value !== "" && name.wasCleared === false
      ? setShowGreeting(!showGreeting)
      : name.value === "" && name.wasCleared === true && showGreeting
      ? (setShowGreeting(!showGreeting), (name.wasCleared = false))
      : null;

  let containerStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div>
        <input
          style={{ display: "block" }}
          placeholder="What's your name?"
          onKeyUp={(e) => {
            setName({
              value: e.target.value,
              wasCleared: e.target.value === "" && e.key === "Backspace",
            });
          }}
        />
        <Button
          text={showGreeting ? `Hide` : `Show`}
          handleClick={handleTextDisplay}
        />
        <label style={{ display: "block", height: "10px", maxWidth: "50px" }}>
          {showGreeting ? `Hi ${name.value}` : ""}
        </label>
      </div>
    </div>
  );
};

export default Greeter;
