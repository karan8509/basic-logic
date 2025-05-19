import { useState } from "react";

function App() {
  const [active, setActive] = useState();

  const handleClick = (type) => {
    setActive(type);
  };

  const tabStyle = {
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    transition: "all 0.3s",
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: "#4caf50",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #4caf50",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  };

  const tabsWrapper = {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
  };

  return (
    <div style={containerStyle}>
      <div style={tabsWrapper}>
        <h4
          onClick={() => handleClick("Project")}
          style={active === "Project" ? activeTabStyle : tabStyle}
        >
          New Think
        </h4>

        <h4
          onClick={() => handleClick("assingment")}
          style={active === "assingment" ? activeTabStyle : tabStyle}
        >
          Assignment
        </h4>
      </div>

      {active === "Project" && <h1 style={{ color: "#4caf50" }}>hi</h1>}
      {active === "assingment" && <h1 style={{ color: "#2196f3" }}>hello</h1>}
    </div>
  );
}

export default App;
