import React, { useState } from "react";

const CalculatorApp = () => {
  const [displayNum, setDisplayNum] = useState("");
  const [switchThemeButton, setSwitchThemeButton] = useState("toggle-theme-1");

  const displayOnScreen = (num) => {
    setDisplayNum(displayNum + num);
  };

  const clearScreen = () => {
    setDisplayNum("");
  };

  const delButton = () => {
    let delNum = displayNum.slice(0, -1);
    setDisplayNum(delNum);
  };

  const calculate = () => {
    try {
      setDisplayNum(eval(displayNum));
    } catch (error) {
      setDisplayNum("Error");
    }
  };

  const changeTheme1 = () => {
    setSwitchThemeButton("toggle-theme-1");
    document.body.style.backgroundColor = "";
  };
  const changeTheme2 = () => {
    setSwitchThemeButton("toggle-theme-2");
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  };

  const changeTheme3 = () => {
    setSwitchThemeButton("toggle-theme-3");
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  };
  const paragraphTheme = () => {
    return {
      color:switchThemeButton === "toggle-theme-2"
          ? "hsl(60, 10%, 19%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(52, 100%, 62%)"
          : "",
    };
  };
  const displayTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(0, 0%, 93%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(268, 71%, 12%)"
          : "",
      color:switchThemeButton === "toggle-theme-2"
          ? "hsl(60, 10%, 19%)"
          :switchThemeButton === "toggle-theme-3"
          ? "hsl(52, 100%, 62%)"
          : "",
    };
  };
  const buttonConTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(0, 5%, 81%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(268, 71%, 12%)"
          : "",
    };
  };
  const buttonTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(45, 7%, 89%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(268, 47%, 21%)"
          : "",
      boxShadow:
          switchThemeButton === "toggle-theme-2"
            ? "0 5px hsl(35, 11%, 61%)"
            : switchThemeButton === "toggle-theme-3"
            ? "0 5px hsl(290, 70%, 36%)"
            : "",
      color:switchThemeButton === "toggle-theme-3"
            ? "hsl(52, 100%, 62%)"
            :switchThemeButton === "toggle-theme-2"
            ? "hsl(60, 10%, 19%)"
            : "",
    };
  };
  const opButtonTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(185, 42%, 37%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(281, 89%, 26%)"
          : "",
          boxShadow:
          switchThemeButton === "toggle-theme-2"
            ? "0 5px hsl(185, 58%, 25%)"
            : switchThemeButton === "toggle-theme-3"
            ? "0 5px hsl(285, 91%, 52%)"
            : "",
    };
  };
  const equalButtonTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(25, 98%, 40%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(176, 100%, 44%)"
          : "",
      boxShadow:
        switchThemeButton === "toggle-theme-2"
          ? "0 5px hsl(25, 99%, 27%)"
          : switchThemeButton === "toggle-theme-3"
          ? "0 5px hsl(177, 92%, 70%)"
          : "",
      color:switchThemeButton === "toggle-theme-3"
          ? "black"
          : "",
    };
  };
  const sliderTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(0, 5%, 81%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(268, 71%, 12%)"
          : "",
    };
  };
  const sliderButtonTheme = () => {
    return {
      backgroundColor:
        switchThemeButton === "toggle-theme-2"
          ? "hsl(25, 98%, 40%)"
          : switchThemeButton === "toggle-theme-3"
          ? "hsl(176, 100%, 44%)"
          : "",
    };
  };
  return (
    <div className="calculator">
      <div className="theme" style={paragraphTheme()}>
        <h3>calc</h3>
        <p id="theme">THEME</p>
        <div className="toggle-theme">
          <div className="theme-numbers">
            <p onClick={changeTheme1}>1</p>
            <p onClick={changeTheme2}>2</p>
            <p onClick={changeTheme3}>3</p>
          </div>
          <div className="toggle-bar" style={sliderTheme()}>
            <div className={switchThemeButton} style={sliderButtonTheme()}></div>
          </div>
        </div>
      </div>
      <div className="display" style={displayTheme()}>
        <div className="operations">
          <input type="text" value={displayNum} style={displayTheme()} />
        </div>
      </div>
      <div className="buttons-con" style={buttonConTheme()}>
        <div className="buttons" >
          <div className="button" onClick={() => displayOnScreen(7)} style={buttonTheme()}>
            7
          </div>
          <div className="button" onClick={() => displayOnScreen(8)} style={buttonTheme()}>
            8
          </div>
          <div className="button" onClick={() => displayOnScreen(9)} style={buttonTheme()}>
            9
          </div>
          <div className="button" id="del-button" onClick={delButton} style={opButtonTheme()}>
            DEL
          </div>
          <div className="button" onClick={() => displayOnScreen(4)} style={buttonTheme()}>
            4
          </div>
          <div className="button" onClick={() => displayOnScreen(5)} style={buttonTheme()}>
            5
          </div>
          <div className="button" onClick={() => displayOnScreen(6)} style={buttonTheme()}>
            6
          </div>
          <div className="button" onClick={() => displayOnScreen("+")} style={buttonTheme()}>
            +
          </div>
          <div className="button" onClick={() => displayOnScreen(1)} style={buttonTheme()}>
            1
          </div>
          <div className="button" onClick={() => displayOnScreen(2)} style={buttonTheme()}>
            2
          </div>
          <div className="button" onClick={() => displayOnScreen(3)} style={buttonTheme()}>
            3
          </div>
          <div className="button" onClick={() => displayOnScreen("-")} style={buttonTheme()}>
            -
          </div>
          <div className="button" onClick={() => displayOnScreen(".")} style={buttonTheme()}>
            .
          </div>
          <div className="button" onClick={() => displayOnScreen(0)} style={buttonTheme()}>
            0
          </div>
          <div className="button" onClick={() => displayOnScreen("/")} style={buttonTheme()}>
            /
          </div>
          <div className="button" onClick={() => displayOnScreen("*")} style={buttonTheme()}>
            x
          </div>
          <div className="button" id="reset-button" onClick={clearScreen} style={opButtonTheme()}>
            RESET
          </div>
          <div className="button" id="equal-button" onClick={calculate} style={equalButtonTheme()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
