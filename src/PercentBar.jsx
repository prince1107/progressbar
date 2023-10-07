import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const propTypes = {
  percent: PropTypes.number.isRequired
};

const PercentBar = ({ percent, ...props }) => (
  // spread extra props first to prohibit overriding prop values
  <ProgressBar {...props} now={percent} min={0} max={100} />
);

PercentBar.propTypes = propTypes;

export default PercentBar;
