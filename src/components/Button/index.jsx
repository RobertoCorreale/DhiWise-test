import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0.5px]",
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    blue_gray_300_87: "bg-blue_gray-300_87",
    blue_A700_01: "bg-blue-A700_01 text-white-A700",
    white_A700: "bg-white-A700 text-blue_gray-400",
    white_A700_b2: "bg-white-A700_b2 text-black-900_e4",
    blue_50: "bg-blue-50 text-gray-900_04",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
    green_600: "bg-green-600 text-gray-50",
    gray_50_03: "bg-gray-50_03 text-gray-600",
  },
  outline: {
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_01",
    blue_gray_100: "border border-blue_gray-100 border-solid",
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
    blue_A700_01: "border border-blue-A700_01 border-solid text-blue-A700_01",
  },
};
const sizes = {
  xs: "p-px",
  sm: "p-1",
  md: "p-[7px]",
  lg: "pr-2 py-2",
  xl: "p-3",
  "2xl": "p-[15px]",
  "3xl": "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "2xl",
  variant = "fill",
  color = "blue_A700_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_300_87",
    "blue_A700_01",
    "white_A700",
    "white_A700_b2",
    "blue_50",
    "blue_gray_100",
    "green_600",
    "gray_50_03",
    "blue_gray_400",
    "blue_gray_100_01",
  ]),
};

export { Button };
