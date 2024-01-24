import React from "react";
import PropTypes from "prop-types";

const ButtonAtom = ({ className, buttonType, buttonName }) => {
  return (
    <button className={className} type={buttonType}>
      {buttonName}
    </button>
  );
};

ButtonAtom.defaultProps = {
  className: "",
  buttonType: "",
  buttonName: "",
};

ButtonAtom.propTypes = {
  className: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default ButtonAtom;
