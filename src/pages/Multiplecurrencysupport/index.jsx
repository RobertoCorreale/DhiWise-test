import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MultiplecurrencysupportPage = () => {
  const navigate = useNavigate();

  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[82px] items-center justify-start mx-auto pb-[546px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
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
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900_01"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900_01"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900_01"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-9 items-start justify-start max-w-[1119px] mx-auto md:px-5 w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Trending Currency
          </Text>
          <List
            className="flex flex-col gap-9 items-center w-full"
            orientation="vertical"
          >
            <div className="flex-1 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <Img
                    className="h-9 w-[37%]"
                    src="images/img_folder.svg"
                    alt="folder"
                  />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    US Dollar
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-[179px] items-center justify-center p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-center ml-2 w-[34%]">
                  <div className="bg-blue-900 h-9 md:h-[27px] p-[3px] relative w-[51%]">
                    <Img
                      className="absolute h-[27px] inset-[0] justify-center m-auto w-[27px]"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                  </div>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Euro
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2">
                  <Img
                    className="h-9 w-[29%]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Text
                    className="mb-[3px] mt-2.5 text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Pound Sterling
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
            </div>
            <div className="flex-1 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <div className="bg-white-A700 h-9 relative w-[27%]">
                    <Img
                      className="absolute h-9 inset-[0] justify-center m-auto w-full"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Canadian Dollar
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-blue-50 border border-blue-A700_01 border-solid flex flex-1 flex-row gap-[105px] items-center justify-center p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2 w-[57%]">
                  <Img
                    className="h-9 w-[30%]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                  <Text
                    className="mb-[3px] mt-2.5 text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Indian Rupee
                  </Text>
                </div>
                <div className="bg-blue-A700_01 flex flex-col h-4 items-center justify-start mr-2 my-2.5 p-1 rounded-[50%] w-4">
                  <div className="bg-white-A700 h-2 rounded-[50%] w-2"></div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <Img
                    className="h-9 w-[27%]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Australian Dollar
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
            </div>
            <div className="flex-1 gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-center justify-start ml-2">
                  <Img
                    className="h-9 w-[33%]"
                    src="images/img_menu_36X54.svg"
                    alt="menu"
                  />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    UAE Dirham
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-[76px] items-center justify-center p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2 w-[66%]">
                  <Img
                    className="common-pointer h-9 w-[26%]"
                    src="images/img_google.svg"
                    alt="google"
                    onClick={() => navigate("")}
                  />
                  <Text
                    className="mb-[3px] mt-2.5 text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Singapore Dollar
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row items-center justify-between p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-row gap-4 items-end justify-start ml-2">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-[7px] w-[29%]">
                    <div className="bg-red-A700 h-5 rounded-[50%] w-5"></div>
                  </div>
                  <Text
                    className="mb-[3px] mt-[11px] text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Japanese Yen
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid h-4 mr-2 my-2.5 rounded-[50%] w-4"></div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default MultiplecurrencysupportPage;
