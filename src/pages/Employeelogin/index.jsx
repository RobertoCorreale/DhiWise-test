import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, List, Text } from "components";

const EmployeeloginPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-opensans sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-white-A700 flex flex-col justify-start p-6 sm:px-5 w-full">
            <Img
              className="h-[35px] mx-auto w-[65%]"
              src="images/img_group10392_9.svg"
              alt="Group10392"
            />
            <div className="flex flex-col gap-[42px] items-start justify-start mt-12 w-[56%] md:w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[74%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-[77%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[55%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Me
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-[74%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_videocamera.svg"
                    alt="videocamera"
                  />
                  <Text
                    className="text-base text-blue_gray-700"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Inbox
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-end justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_user_24X24.svg"
                    alt="user One"
                  />
                  <Text
                    className="mt-1.5 text-base text-blue_gray-700"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    My Team
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <Line className="bg-blue-A700_01 h-6 w-0.5" />
                <Img
                  className="h-6 w-6"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Text
                  className="mt-[5px] text-base text-blue-A700_01"
                  size="txtOpenSansRomanSemiBold16BlueA70001"
                >
                  Organization
                </Text>
              </div>
              <div className="flex flex-col font-gilroy gap-10 items-start justify-start ml-2 md:ml-[0] w-3/4 md:w-full">
                <div className="flex flex-row gap-2 items-end justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-700"
                    size="txtGilroySemiBold16"
                  >
                    Messages
                  </Text>
                </div>
                <div className="flex flex-row font-opensans gap-2 items-end justify-start w-[90%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings_24X24.svg"
                    alt="settings"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-700"
                    size="txtOpenSansRomanSemiBold16"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[480px] w-[27%] md:w-full">
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
        </Sidebar>
        <div className="bg-gray-50 flex flex-1 flex-col font-gilroy items-center justify-start p-[30px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[380px] mt-0.5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
              <Text
                className="md:mt-0 mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32"
              >
                Organization
              </Text>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[748px] p-2 rounded-[50%] w-14">
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
            <div className="sm:h-[172px] h-[41px] md:h-[69px] mt-8 pt-1 relative w-full">
              <Line className="absolute bg-gray-300 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
              <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[34px] items-start justify-between left-[3%] w-[46%]">
                <div className="flex flex-col gap-3.5 items-center justify-start">
                  <Text
                    className="text-base text-blue-A700_01"
                    size="txtGilroyMedium16BlueA70001"
                  >
                    Employee Login
                  </Text>
                  <Line className="bg-blue-A700_01 h-0.5 w-full" />
                </div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Shift Schedule
                </Text>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtGilroyMedium16Bluegray400"
                >
                  Attandance Requests
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start mt-[41px] p-6 sm:px-5 rounded-lg w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between pt-[3px] w-full">
                <div className="flex flex-row gap-3.5 items-start justify-between w-[13%]">
                  <Text
                    className="mt-1 text-blue_gray-900 text-lg"
                    size="txtGilroySemiBold18Bluegray900"
                  >
                    Fri, 13 May
                  </Text>
                  <Img
                    className="h-6 mb-0.5 w-6"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                </div>
                <div className="flex flex-row font-opensans gap-2 h-[22px] md:h-auto items-center justify-between w-[104px]">
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
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
              <div className="flex flex-col font-opensans items-center justify-start mb-1.5 w-full">
                <div className="flex flex-col gap-[7px] justify-start w-full">
                  <div className="bg-gray-50_02 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-3 w-full">
                    <Text
                      className="sm:mt-0 mt-[5px] text-blue_gray-600 text-sm"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Employee
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[116px] sm:mt-0 mt-1 text-blue_gray-600 text-sm"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Date
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[179px] sm:mt-0 mt-[5px] text-blue_gray-600 text-sm"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Log In Time
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[133px] sm:mt-0 mt-[5px] text-blue_gray-600 text-sm"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Log out Time
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[124px] sm:mt-0 mt-[3px] text-blue_gray-600 text-sm"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Action
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-3 md:ml-[0] w-[89%] md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-[16%] md:w-full">
                      <div className="flex flex-row gap-2 items-end justify-start w-[96%] md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7.png"
                          alt="EllipseSeven"
                        />
                        <Text
                          className="mb-[5px] mt-2.5 text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Ralph Edwards
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-[84%] md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7_32X32.png"
                          alt="EllipseSeven One"
                        />
                        <Text
                          className="mb-[5px] mt-2.5 text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Jane Cooper
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[78%] md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7_1.png"
                          alt="EllipseSeven Two"
                        />
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Robert Fox
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-start w-[79%] md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7_2.png"
                          alt="EllipseSeven Three"
                        />
                        <Text
                          className="mb-[5px] mt-2.5 text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Floyd Miles
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-4/5 md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7_3.png"
                          alt="EllipseSeven Four"
                        />
                        <Text
                          className="mb-[5px] mt-2.5 text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Jerome Bell
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-start w-[91%] md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7_4.png"
                          alt="EllipseSeven Five"
                        />
                        <Text
                          className="mb-[5px] mt-2.5 text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Arlene McCoy
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[91%] md:w-full">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_ellipse7_5.png"
                          alt="EllipseSeven Six"
                        />
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          Annette Black
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[137.24px] grid sm:grid-cols-1 grid-cols-3 ml-10 md:ml-[0] w-[55%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          12/05/2022
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          11/05/2022
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          09/05/2022
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          06/05/2022
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          06/05/2022
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          06/05/2022
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          06/05/2022
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          12:42:24 AM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          04:04:54 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 AM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 AM
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtOpenSansRomanRegular14"
                        >
                          10:32:24 PM
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col font-gilroy gap-[27px] items-center justify-start md:ml-[0] ml-[132px] pt-[3px] w-[11%] md:w-full">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload Two"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload Three"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload Four"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload Five"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="mt-0.5 text-blue-A200 text-sm"
                          size="txtGilroyMedium14BlueA200"
                        >
                          View history
                        </Text>
                        <Img
                          className="h-4 mb-[3px] w-4"
                          src="images/img_upload.svg"
                          alt="upload Six"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeloginPage;
