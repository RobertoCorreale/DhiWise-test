import React from "react";

import { Sidebar } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const inputFieldOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const countryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TaxCalculatorPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_10.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search Items, Customer etc"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search_black_900.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[94%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[309px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Coupons
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[46%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Friend List
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[47%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calculator.svg"
                        alt="calculator"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700_01"
                        size="txtGilroySemiBold16BlueA70001"
                      >
                        Calculator
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 md:flex-col flex-row md:gap-[58px] items-start justify-between md:mt-0 mt-[53px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[17px] w-[46%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Save Your Tax !
                </Text>
                <Text
                  className="leading-[29.00px] mt-[34px] text-blue_gray-700 text-lg w-full"
                  size="txtGilroyMedium18Bluegray700"
                >
                  Tax-saving investing is eay & rewarding you could earn enough
                  for a surfip trip.
                </Text>
                <div className="flex flex-col gap-6 items-center justify-start mt-6 w-[72%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-[99%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark"
                    />
                    <div className="flex flex-row gap-2 items-center justify-start mt-1">
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Save Money -
                      </Text>
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroyMedium16Bluegray700"
                      >
                        Save 1,50,000 per year
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[23px] items-start justify-between pt-1 w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark One"
                    />
                    <div className="flex flex-row gap-2 items-start justify-start">
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Free -
                      </Text>
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroyMedium16Bluegray700"
                      >
                        Get started without any charge
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-between w-[99%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark Two"
                    />
                    <div className="flex flex-row gap-2 items-center justify-start mt-1">
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Save Money -
                      </Text>
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroyMedium16Bluegray700"
                      >
                        Save 1,50,000 per year
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[23px] items-start justify-between pt-1 w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark Three"
                    />
                    <div className="flex flex-row gap-2 items-start justify-start">
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Free -
                      </Text>
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroyMedium16Bluegray700"
                      >
                        Get started without any charge
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[53px] items-center justify-start w-1/2 md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-[57px] items-center justify-start mt-[7px] w-[88%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtGilroySemiBold24Bluegray900"
                    >
                      Tax Calculator
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-md shadow-bs w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start mb-[5px]">
                          <Text
                            className="text-base text-blue_gray-400"
                            size="txtGilroyMedium16Bluegray400"
                          >
                            Estimated Annual Salary
                          </Text>
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-blue-A700_01"
                            size="txtGilroySemiBold36"
                          >
                            $2145.00
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start mt-5 w-[396px] sm:w-full">
                        <div className="flex flex-col items-start justify-start pr-[5px] pt-[5px] w-full">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroyMedium16Bluegray900"
                          >
                            Filling Status
                          </Text>
                        </div>
                        <SelectBox
                          className="border border-blue_gray-100 border-solid font-semibold h-11 text-base text-left w-full"
                          placeholderClassName="text-blue_gray-900"
                          indicator={
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown_bluegray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="InputField One"
                          options={inputFieldOneOptionsList}
                          isSearchable={false}
                          placeholder="Single"
                          shape="round"
                          color="white_A700"
                          size="md"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start mt-[26px] pb-[3px] w-full">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Dependents
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <div className="h-6 relative w-full">
                              <div className="absolute bg-blue-50 flex flex-col h-max inset-[0] items-start justify-center m-auto px-[11px] rounded w-full">
                                <div className="bg-blue-A700_01 h-2 rounded w-[67%]"></div>
                              </div>
                              <div className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto w-[39%]">
                                <div className="bg-blue-A700_01 border-2 border-blue-A700_01 border-solid h-6 rounded-[50%] w-6"></div>
                                <div className="bg-gray-50_01 border-2 border-blue-A700_01 border-solid h-6 rounded-[50%] w-6"></div>
                              </div>
                              <div className="absolute bg-blue-50 h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"></div>
                              <div className="absolute bg-blue-A700_01 border-2 border-blue-A700_01 border-solid h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"></div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                              <Text
                                className="text-blue_gray-300 text-sm"
                                size="txtGilroyMedium14Bluegray300"
                              >
                                0
                              </Text>
                              <Text
                                className="text-blue_gray-300 text-sm"
                                size="txtGilroyMedium14Bluegray300"
                              >
                                1
                              </Text>
                              <Text
                                className="text-blue_gray-300 text-sm"
                                size="txtGilroyMedium14Bluegray300"
                              >
                                2
                              </Text>
                              <Text
                                className="text-blue_gray-300 text-sm"
                                size="txtGilroyMedium14Bluegray300"
                              >
                                3+
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-5 w-full">
                        <div className="flex flex-col items-start justify-start pr-[5px] pt-[5px] w-full">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroyMedium16Bluegray900"
                          >
                            State you’ll Fill In
                          </Text>
                        </div>
                        <SelectBox
                          className="border border-blue_gray-100 border-solid font-semibold mt-1 text-base text-left w-full"
                          placeholderClassName="text-blue_gray-900"
                          indicator={
                            <Img
                              className="h-5 mr-3 w-5"
                              src="images/img_arrowdown_bluegray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="country"
                          options={countryOptionsList}
                          isSearchable={false}
                          placeholder="India"
                          shape="round"
                          color="white_A700"
                          size="sm"
                        />
                      </div>
                      <CheckBox
                        className="font-medium mt-[21px] text-left text-sm"
                        inputClassName="border-[0.83px] border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                        name="InputLabelS"
                        id="InputLabelS"
                        label="I work in multiple state"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium rounded text-base text-center w-[500px]"
                  shape="round"
                  size="3xl"
                >
                  Calculate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxCalculatorPage;
