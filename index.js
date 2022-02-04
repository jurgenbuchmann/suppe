import React from "react";
import ReactDOM from "react-dom";
import CookieConsent from "./CookieConsent";

function App() {
  return (
    <div>
      <h1>Suppe</h1>
      <CookieConsent></CookieConsent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
