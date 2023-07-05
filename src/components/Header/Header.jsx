import React from "react";
import "./Header.css";

const Header = () => {
  const title = "Todo List";

  /* ==================================== */

  return (
    <>
      <h1 className="title">{title}</h1>
    </>
  );
};

export default React.memo(Header);
