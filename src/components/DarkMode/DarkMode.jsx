import React from "react";
import "./DarkModeStyle.css";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";
import { useState, useEffect } from "react";

function updateTheme (isEnabled) {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;
  const body = document.querySelector('body')
  const Cards = document.querySelectorAll('.Container-Card')
  const Nav = document.querySelector(".NAV")

  if (isEnabled) {
    docEl.style.setProperty("--background", black);
    docEl.style.setProperty("--foreground", white);
    body.style.backgroundColor="#202d36";
    body.style.color="#fff";
    for(let i=0; i<Cards.length;i++){
      Cards[i].style.backgroundColor= "#2b3743"
    }
    Nav.style.backgroundColor="#2b3743";
  } 
  else {
    docEl.style.setProperty("--background", white);
    docEl.style.setProperty("--foreground", black);
    body.style.backgroundColor="#fff";
    body.style.color="black";
    for(let i=0; i<Cards.length;i++){
      Cards[i].style.backgroundColor= "#fff"
    }
    Nav.style.backgroundColor="darkgray";
  }
};

function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    updateTheme(isEnabled);
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onChange={toggleState}
        />
      </div>
    </label>
  );
}
export default ThemeToggle ;