import React from "react";

import { Button, Img, List, Text } from "components";

const GalleryPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto pt-[35px] sm:px-5 px-[35px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_1.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start md:ml-[0] ml-[270px] w-auto">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900_01 w-16"
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
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="text-base text-gray-900_01 w-[69px]"
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
              </List>
              <Text
                className="text-base text-gray-900_01 w-[121px]"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex flex-row gap-6 sm:hidden items-center justify-start md:ml-[0] ml-[220px] w-auto">
              <a href="javascript:" className="text-base text-gray-900_01 w-12">
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
        <div className="flex flex-col gap-[37px] items-center justify-end max-w-[1268px] mx-auto pt-0.5 md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-end justify-between rounded-lg w-full">
            <Text
              className="mt-2.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtGilroySemiBold32Black900"
            >
              Gallery
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[95px] rounded-lg"
              leftIcon={
                <Img
                  className="h-6 my-3 mx-2.5"
                  src="images/img_filter_24X24.svg"
                  alt="filter"
                />
              }
            >
              <div className="font-semibold text-left text-lg">Filter</div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  Recent
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2446.png"
                    alt="RectangleTen"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2447.png"
                    alt="RectangleEleven"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2448.png"
                    alt="RectangleTwelve"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2446.png"
                    alt="RectangleTen One"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2447.png"
                    alt="RectangleEleven One"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2448.png"
                    alt="RectangleTwelve One"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2447.png"
                    alt="RectangleEleven Two"
                  />
                  <Img
                    className="h-[150px] md:h-auto object-cover w-[150px]"
                    src="images/img_group2448.png"
                    alt="RectangleTwelve Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-start justify-start mt-[77px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24"
              >
                Last Week
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle10.png"
                      alt="RectangleTen Two"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_group2452.png"
                      alt="RectangleTen Three"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle11.png"
                      alt="RectangleEleven Three"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle10.png"
                      alt="RectangleTen Four"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera"
                      />
                    </div>
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle11.png"
                      alt="RectangleSeventeen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle10.png"
                      alt="RectangleTen Five"
                    />
                    <div
                      className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                      style={{
                        backgroundImage: "url('images/img_group2452.png')",
                      }}
                    >
                      <Img
                        className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                        src="images/img_videocamera.svg"
                        alt="videocamera One"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-1 w-full">
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle14.png"
                      alt="RectangleFourteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle12.png"
                      alt="RectangleTwelve Three"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle13.png"
                      alt="RectangleThirteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle14.png"
                      alt="RectangleSixteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle12.png"
                      alt="RectangleFifteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle13.png"
                      alt="RectangleEighteen"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle14.png"
                      alt="RectangleTwenty"
                    />
                    <Img
                      className="h-[150px] md:h-auto object-cover w-[150px]"
                      src="images/img_rectangle12.png"
                      alt="RectangleNineteen"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start mt-20 w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtGilroySemiBold24"
              >
                A Month Ago
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle10.png"
                  alt="RectangleTen Six"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <div className="bg-black-900_4c h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]">
                    <Img
                      className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera Two"
                    />
                  </div>
                </div>
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle11.png"
                  alt="RectangleEleven Four"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle10.png"
                  alt="RectangleTen Seven"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <Img
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera Three"
                  />
                </div>
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle11.png"
                  alt="RectangleSeventeen One"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-[150px]"
                  src="images/img_rectangle10.png"
                  alt="RectangleTen Eight"
                />
                <div
                  className="bg-cover bg-no-repeat h-[150px] md:h-[27px] pt-1 px-1 relative w-[150px]"
                  style={{ backgroundImage: "url('images/img_group2452.png')" }}
                >
                  <Img
                    className="absolute bottom-[0] h-[27px] left-[3%] w-[27px]"
                    src="images/img_videocamera.svg"
                    alt="videocamera Four"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
