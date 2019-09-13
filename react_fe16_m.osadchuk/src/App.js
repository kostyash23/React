import React from "react";
import Sidebar from "./Sidebar/Sidebar";
// import Main from "./Main/Main";
import "./App.css";
import Counter from "./Counter/Counter";
// import Inline from "./Inline/Inline";
// import Mod from "./Mod/Mod";

function App() {
  const navLink = [
    {
      text: "dashboard",
      href: "/dashboard"
    },
    {
      text: "user profile",
      href: "/user"
    },
    {
      text: "notifications",
      href: "/notifications"
    }
  ];

  return (
    <div className="App-container">
      {/* <Fragment> */}
      <Sidebar menu={navLink} />
      <Counter />
      {/* <Inline /> */}
      {/* <Mod /> */}
      {/* <Main /> */}

      {/* </Fragment> */}
    </div>
  );
}

export default App;
