import React from "react";

import { Input } from "components";

export default {
  title: "roberto_correale_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder6",
  color: "white_A700",
  size: "md",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
