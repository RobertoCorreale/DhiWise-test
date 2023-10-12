import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  underline: {
    blue_gray_100: "border-b border-blue_gray-100 text-black-900_01",
  },
  fill: { white_A700: "bg-white-A700 text-blue_gray-200" },
};
const shapes = { round: "rounded-md" };
const sizes = {
  xs: "pb-3.5 pr-[13px] pt-[13px]",
  xl: "pb-[33px]",
  sm: "pb-[17px]",
  md: "pb-[13px] pl-[11px] pr-[13px] pt-[18px]",
  lg: "pb-[34px] sm:pr-5 pr-[29px] pt-[29px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "md",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "xl", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["underline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_100", "white_A700"]),
};

export { Input };
