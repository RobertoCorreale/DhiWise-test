import React from "react";
import { Radio } from "components";

export default {
  title: "roberto_correale_s_application1/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = { label: "Radio", inputClassName: "mr-1" };
