import React from "react";

import { Button, Img, Input, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FeedbackCollectionPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_35X162.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="round"
                  size="xs"
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[980px] md:px-5 relative w-[95%] md:w-full">
          <div className="flex flex-col gap-[30px] h-full items-end justify-start ml-auto my-auto w-[76%]">
            <div className="flex flex-col items-center justify-start pl-0.5 py-0.5 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[784px] mt-[7px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Feedback Collection
                </Text>
                <div className="flex sm:flex-1 flex-row font-opensans gap-2.5 items-center justify-between w-[11%] sm:w-full">
                  <Text
                    className="ml-0.5 text-blue_gray-600 text-sm"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    This Week
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Button
                className="cursor-pointer flex h-8 items-center justify-center rounded w-8"
                onClick={() => sliderRef.current?.slidePrev?.()}
                shape="round"
                color="blue_gray_300_87"
                size="sm"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="!text-blue-A700_01 border border-blue-A700_01 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                shape="round"
                color="white_A700"
                size="md"
              >
                1
              </Button>
              <Button
                className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                shape="round"
                color="white_A700"
                size="md"
              >
                2
              </Button>
              <Button
                className="border border-blue_gray-100 border-solid cursor-pointer font-semibold font-sfprotext h-8 rounded text-center text-sm w-8"
                shape="round"
                color="white_A700"
                size="md"
              >
                ...
              </Button>
              <Button
                className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                shape="round"
                color="white_A700"
                size="md"
              >
                9
              </Button>
              <Button
                className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                shape="round"
                color="white_A700"
                size="md"
              >
                10
              </Button>
              <Button
                className="border border-blue_gray-100 border-solid cursor-pointer flex h-8 items-center justify-center rounded w-8"
                onClick={() => sliderRef.current?.slideNext?.()}
                shape="round"
                color="white_A700"
                size="sm"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </Button>
            </div>
          </div>
          <Slider
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 2 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] absolute"
            ref={sliderRef}
            className="absolute inset-[0] justify-center m-auto w-full"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-start mx-2.5">
                  <List
                    className="flex flex-col gap-6 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between my-0 p-4 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mb-0.5 ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                        <Text
                          className="text-blue-A700_01 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          @ABC
                        </Text>
                        <Text
                          className="mt-[18px] text-base text-black-900_01"
                          size="txtGilroyMedium16Black90001"
                        >
                          Add: 4517 Washington Ave. Manchester, Kentucky...
                        </Text>
                        <Text
                          className="mt-3 text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Details: Lorem ipsum dolor sit amet, consectetur...
                        </Text>
                      </div>
                      <Text
                        className="bg-blue-50 h-[26px] justify-center mb-[72px] mr-4 pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                        size="txtGilroyMedium14"
                      >
                        18/05/2022
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between my-0 p-4 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mb-0.5 ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                        <Text
                          className="text-blue-A700_01 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          @ABC
                        </Text>
                        <Text
                          className="mt-[18px] text-base text-black-900_01"
                          size="txtGilroyMedium16Black90001"
                        >
                          Add: 4517 Washington Ave. Manchester, Kentucky...
                        </Text>
                        <Text
                          className="mt-3 text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Details: Lorem ipsum dolor sit amet, consectetur...
                        </Text>
                      </div>
                      <Text
                        className="bg-blue-50 h-[26px] justify-center mb-[72px] mr-4 pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                        size="txtGilroyMedium14"
                      >
                        18/05/2022
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between my-0 p-4 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] sm:mt-0 my-1.5">
                        <Text
                          className="text-blue-A700_01 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          @ABC
                        </Text>
                        <Text
                          className="mt-[18px] text-base text-black-900_01"
                          size="txtGilroyMedium16Black90001"
                        >
                          Add: 4517 Washington Ave. Manchester, Kentucky...
                        </Text>
                        <Text
                          className="mt-3 text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Details: Lorem ipsum dolor sit amet, consectetur...
                        </Text>
                      </div>
                      <Text
                        className="bg-blue-50 h-[26px] justify-center mb-[72px] mr-4 pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                        size="txtGilroyMedium14"
                      >
                        18/05/2022
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between my-0 p-4 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mb-0.5 ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                        <Text
                          className="text-blue-A700_01 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          @ABC
                        </Text>
                        <Text
                          className="mt-[18px] text-base text-black-900_01"
                          size="txtGilroyMedium16Black90001"
                        >
                          Add: 4517 Washington Ave. Manchester, Kentucky...
                        </Text>
                        <Text
                          className="mt-3 text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Details: Lorem ipsum dolor sit amet, consectetur...
                        </Text>
                      </div>
                      <Text
                        className="bg-blue-50 h-[26px] justify-center mb-[72px] mr-4 pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                        size="txtGilroyMedium14"
                      >
                        18/05/2022
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-center justify-between my-0 p-4 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mb-0.5 ml-4 sm:ml-[0] sm:mt-0 mt-1.5">
                        <Text
                          className="text-blue-A700_01 text-lg"
                          size="txtGilroySemiBold18"
                        >
                          @ABC
                        </Text>
                        <Text
                          className="mt-[18px] text-base text-black-900_01"
                          size="txtGilroyMedium16Black90001"
                        >
                          Add: 4517 Washington Ave. Manchester, Kentucky...
                        </Text>
                        <Text
                          className="mt-3 text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          Details: Lorem ipsum dolor sit amet, consectetur...
                        </Text>
                      </div>
                      <Text
                        className="bg-blue-50 h-[26px] justify-center mb-[72px] mr-4 pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                        size="txtGilroyMedium14"
                      >
                        18/05/2022
                      </Text>
                    </div>
                  </List>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackCollectionPage;
