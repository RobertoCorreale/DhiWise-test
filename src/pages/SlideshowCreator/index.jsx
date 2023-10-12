import React from "react";

import { Button, Img, List, Text } from "components";

const SlideshowCreatorPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_38.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900_01"
                  size="txtGilroyMedium16"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900_01"
                  size="txtGilroyMedium16"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_902.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-1 text-base text-gray-900_01"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[227px] rounded-md w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900_01">
                <Text size="txtGilroyMedium16">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] rounded-md text-base text-center"
                shape="round"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-6 items-center justify-start max-w-[1268px] mb-[519px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between rounded-md w-full">
            <Text
              className="mt-2 text-blue_gray-900 text-xl"
              size="txtGilroySemiBold20Bluegray900"
            >
              Choose Images (02 Selected)
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[68px] rounded-md text-base text-center"
              shape="round"
              size="md"
            >
              Create
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-3.5 items-start justify-start sm:ml-[0] pb-[3px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[257px] items-end justify-end p-4 rounded-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle14.png')",
                  }}
                >
                  <Button
                    className="flex h-5 items-center justify-center mt-[205px] rounded-[2.5px] w-5"
                    size="xs"
                  >
                    <Img
                      className="h-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start sm:ml-[0] pb-[3px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[257px] items-end justify-end p-4 rounded-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle13.png')",
                  }}
                >
                  <div className="border-[0.83px] border-blue_gray-50 border-solid h-5 mt-[205px] rounded-[2.5px] w-5"></div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start sm:ml-[0] pb-[3px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[257px] items-center justify-start rounded-[5px] w-full"
                  style={{
                    backgroundImage: "url('images/img_rectangle13.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[257px] items-end justify-end p-4 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9985.png')",
                    }}
                  >
                    <div className="border-[0.83px] border-blue_gray-50 border-solid h-5 mt-[205px] rounded-[2.5px] w-5"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtGilroyMedium16Bluegray700"
                  >
                    naturephotography.jpg
                  </Text>
                  <Text
                    className="mt-1 text-blue_gray-600 text-sm"
                    size="txtGilroyMedium14Bluegray600"
                  >
                    234kb
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start pb-[3px] w-[24%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[257px] items-center justify-start rounded-[5px] w-full"
                style={{ backgroundImage: "url('images/img_rectangle13.png')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[257px] items-center justify-start rounded-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_group9985.png')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[257px] items-end justify-end p-4 rounded-[5px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group9988.png')",
                    }}
                  >
                    <div className="border-[0.83px] border-blue_gray-50 border-solid h-5 mt-[205px] rounded-[2.5px] w-5"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-blue_gray-700"
                  size="txtGilroyMedium16Bluegray700"
                >
                  naturephotography.jpg
                </Text>
                <Text
                  className="mt-1 text-blue_gray-600 text-sm"
                  size="txtGilroyMedium14Bluegray600"
                >
                  234kb
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideshowCreatorPage;
