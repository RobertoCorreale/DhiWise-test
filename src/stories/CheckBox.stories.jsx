import React from "react";
import { CheckBox } from "components";

export default {
  title: "roberto_correale_s_application1/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "round",
  color: "white_A700",
  size: "xs",
  variant: "fill",
  label: "Checkbox",
  inputClassName: "mr-1",
};
