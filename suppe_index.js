import Faq from "../src/components/Faq";
import Demo11content5 from "../src/components/olmo/demo11/Demo11content5";
import Demo11content7 from "../src/components/olmo/demo11/Demo11content7";
import Demo11content9 from "../src/components/olmo/demo11/Demo11content9";
import Demo11features4 from "../src/components/olmo/demo11/Demo11features4";
import Demo11features8 from "../src/components/olmo/demo11/Demo11features8";
import Demo6hero6 from "../src/components/olmo/demo6/Demo6hero6";
import Demo13features1 from "../src/components/olmo/demo13/Demo13features1";
import Demo11statistic2 from "../src/components/olmo/demo11/Demo11statistic2";
import Layout from "../src/layout/Layout";
import GoogleAnalytics from "../src/components/googleAnalytics.js";
import React from "react";
import ReactDOM from "react-dom";
import CookieConsent from "./CookieConsent.jsx";


function App() {
  return (
    <div>
      <CookieConsent></CookieConsent>
    </div>
  );
}

const Demo11 = () => {
  return (
    
    <Layout
      btnCustomHover="btn-pink tra-grey-hover"
      navHoverColor="nav-pink-hover"
    ><GoogleAnalytics />
      <Demo6hero6 />
      <Demo13features1 />
      <hr className="divider" />
      <Demo11content7 />
      <Demo11features8 />
      <Demo11content9 />
      <Demo11features4 />
      <hr className="divider" />
      <Demo11statistic2 />
      <Demo11content5 />
      <hr className="divider" />
      <Faq />
    </Layout>
  );
};
ReactDOM.render(<CookieConsent />, document.getElementById("App"));
export default Demo11;
