import React from "react";
import { TextArea } from "components";

export default {
  title: "roberto_correale_s_application1/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
