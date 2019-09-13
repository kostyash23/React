import React from "react";
import PropTypes from "prop-types";
import "./MenuItem.css";

const MenuItem = ({ active, href, text }) => {
  // console.log(props);
  return (
    <li className={active === true ? "active" : null}>
      <a href={href}>{text}</a>
    </li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default MenuItem;
