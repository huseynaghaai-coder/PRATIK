import { useState } from "react";

function ThemeBox() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const increaseFont = () => {
    if (fontSize < 30) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFont = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 2);
    }
  };

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: fontSize,
  };

  return (
    <div style={styles}>
      <h1>Hello PTP101</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={increaseFont} disabled={fontSize >= 30}>
          +
        </button>
        <button
          onClick={decreaseFont}
          disabled={fontSize <= 10}
          style={{ marginLeft: "5px" }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ThemeBox;
