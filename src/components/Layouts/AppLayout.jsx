import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function AppLayout(props) {
  return (
    <>
      <body>
        {<Header />}
        {props.children}
        {<Footer />}
      </body>
    </>
  );
}

export default AppLayout;
