import React, { useState, useEffect } from "react";
import "./SelectThemeBar.css";

const SelectThemeBar = () => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("key_name");
    if (localTheme === "") return "purple";
    return localTheme;
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("key_name", theme);
  }, [theme]);

  const handleClick = (e) => {
    let element = e.currentTarget.id;
    console.log(element);
    switch (element) {
      case "hero-btn1":
        setTheme("light-theme");
        localStorage.setItem("key_name", "light-theme");
        break;
      // case "hero-btn2":
      //   setTheme("dark-theme");
      //   localStorage.setItem("key_name", "dark-theme");
      //   break;
      case "hero-btn3":
        setTheme("purple");
        localStorage.setItem("key_name", "purple");
        break;
      // case "hero-btn4":
      //   setTheme("sharp-theme");
      //   localStorage.setItem("key_name", "sharp-theme");
      //   break;
      // case "hero-btn5":
      //   setTheme("sea-theme");
      //   localStorage.setItem("key_name", "sea-theme");
      //   break;
      // case "hero-btn6":
      //   setTheme("blue-theme");
      //   localStorage.setItem("key_name", "blue-theme");
      //   break;
      default:
        break;
    }
  };

  return (
    <div className='todo-colortheme'>
      <h5 className='select-theme-heading'>Select a Theme from below</h5>
      <div className='select-theme-div'>
        <button id='hero-btn1' onClick={handleClick}></button>
        {/* <button id='hero-btn2' onClick={handleClick}></button> */}
        <button id='hero-btn3' onClick={handleClick}></button>
        {/* <button id='hero-btn4' onClick={handleClick}></button>
        <button id='hero-btn5' onClick={handleClick}></button>
        <button id='hero-btn6' onClick={handleClick}></button> */}
      </div>
    </div>
  );
};

export default SelectThemeBar;
