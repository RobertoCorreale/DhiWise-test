import React from "react";

import { SelectBox } from "components";

export default {
  title: "roberto_correale_s_application1/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder6",
  variant: "OutlineBluegray100",
  size: "xs",
  className: "w-[300px]",
};
