import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-300",
    blue_A700_01: "bg-blue-A700_01 text-blue_gray-800",
  },
};
const shapes = { round: "rounded-[2.5px]" };
const sizes = { xs: "pt-1" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      shape = "round",
      size = "xs",
      variant = "fill",
      color = "white_A700",
      id = "checkbox_id",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_A700_01"]),
};

export { CheckBox };