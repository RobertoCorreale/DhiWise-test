import React from "react";

import { Sidebar } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Switch,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const inputFieldThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CustomAdvertisementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_04 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_6.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search "
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
          <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                      <Img
                        className="h-6 ml-[7px] w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Users
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
                    <div className="flex flex-row gap-2 items-start justify-start w-3/5">
                      <Img
                        className="h-6 w-6"
                        src="images/img_megaphone.svg"
                        alt="megaphone"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700_01"
                        size="txtGilroySemiBold16BlueA70001"
                      >
                        Advertisement{" "}
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
            <div className="flex flex-1 flex-col gap-11 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-gray-900_03 text-lg"
                  size="txtGilroySemiBold18Gray90003"
                >
                  Advertisement{" "}
                </Text>
                <div className="flex flex-row gap-4 items-center justify-between w-[24%]">
                  <Text
                    className="text-gray-900_03 text-lg"
                    size="txtGilroySemiBold18Gray90003"
                  >
                    Active Advertisement{" "}
                  </Text>
                  <div className="h-[29px] relative w-[22%]">
                    <Switch
                      onColor="#56c568"
                      offColor="#56c568"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={true}
                      className="m-auto w-full"
                    />
                    <Switch
                      onColor="#56c568"
                      offColor="#56c568"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={true}
                      className="absolute inset-[0] justify-center m-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="h-[347px] md:h-auto object-cover rounded-md w-full"
                src="images/img_rectangle1388.png"
                alt="Rectangle1388"
              />
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[504px] sm:w-full">
                    <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        Advertise Title
                      </Text>
                    </div>
                    <Input
                      name="InputField One"
                      placeholder="Placeholder Text"
                      className="font-medium md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[504px] sm:w-full">
                    <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        Redirect URL
                      </Text>
                    </div>
                    <Input
                      name="InputField Two"
                      placeholder="Placeholder Text"
                      className="font-medium md:h-auto p-0 placeholder:text-blue_gray-200 sm:h-auto text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      shape="round"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-[86%] md:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-[504px] sm:w-full">
                    <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        Select Advertisement Type
                      </Text>
                    </div>
                    <SelectBox
                      className="!text-blue_gray-200 border border-blue_gray-100 border-solid font-medium h-[52px] text-left text-lg w-full"
                      placeholderClassName="!text-blue_gray-200"
                      indicator={
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="InputField Three"
                      options={inputFieldThreeOptionsList}
                      isSearchable={false}
                      placeholder="Placeholder Text"
                      shape="round"
                      color="white_A700"
                      size="lg"
                    />
                  </div>
                  <div className="flex flex-col gap-[21px] items-start justify-start w-2/5 md:w-full">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      Select Platform
                    </Text>
                    <div className="flex flex-row items-center justify-between py-0.5 w-full">
                      <CheckBox
                        className="font-medium text-left text-lg"
                        inputClassName="h-6 mr-[5px] rounded-[3px] w-6"
                        name="InputPlaceho"
                        id="InputPlaceho"
                        label="Android"
                        color="blue_A700_01"
                      ></CheckBox>
                      <div className="flex flex-row gap-4 items-center justify-center">
                        <Img
                          className="h-6 w-6"
                          src="images/img_menu.svg"
                          alt="menu"
                        />
                        <Text
                          className="text-blue_gray-800 text-lg"
                          size="txtGilroyMedium18Bluegray800"
                        >
                          iOS
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-between w-[23%]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_menu.svg"
                          alt="menu One"
                        />
                        <Text
                          className="text-blue_gray-800 text-lg"
                          size="txtGilroyMedium18Bluegray800"
                        >
                          Web
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[504px] sm:w-full">
                    <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        Start Date
                      </Text>
                    </div>
                    <Input
                      name="InputField Four"
                      placeholder="Placeholder Text"
                      className="font-medium p-0 placeholder:text-blue_gray-200 text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] mr-3 my-4"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      shape="round"
                      size="sm"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[504px] sm:w-full">
                    <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        End Date
                      </Text>
                    </div>
                    <Input
                      name="InputField Five"
                      placeholder="Placeholder Text"
                      className="font-medium p-0 placeholder:text-blue_gray-200 text-left text-lg w-full"
                      wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] mr-3 my-4"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      shape="round"
                      size="sm"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <Button
                  className="cursor-pointer font-medium rounded-md text-center text-lg w-[504px]"
                  size="3xl"
                  variant="outline"
                >
                  cancel
                </Button>
                <Button
                  className="cursor-pointer font-medium rounded-md text-center text-lg w-[504px]"
                  size="3xl"
                >
                  Create Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAdvertisementPage;
