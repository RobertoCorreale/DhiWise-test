import React from "react";

import { Button as ButtonComponent, Img } from "components";

export default {
  title: "roberto_correale_s_application1/Buttons",
  component: ButtonComponent,
  argTypes: {
    children: { control: "text" },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  shape: "RoundedBorder5",
  color: "blue_A700_01",
  size: "2xl",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
};

export const LeftIconButton = Template.bind({});

LeftIconButton.args = {
  shape: "RoundedBorder5",
  color: "blue_A700_01",
  size: "2xl",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
  leftIcon: (
    <Img
      src="images/img_upload.svg"
      alt="img"
      className="w-[25px] float-left mr-[10px]"
    />
  ),
};

export const RightIconButton = Template.bind({});

RightIconButton.args = {
  shape: "RoundedBorder5",
  color: "blue_A700_01",
  size: "2xl",
  variant: "fill",
  children: "Button",
  className: "flex items-center justify-center",
  rightIcon: (
    <Img
      src="images/img_upload.svg"
      alt="img"
      className="w-[25px] float-right ml-[10px]"
    />
  ),
};
