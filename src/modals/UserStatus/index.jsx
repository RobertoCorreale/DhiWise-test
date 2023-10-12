import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const UserStatusModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[46%]"
      overlayClassName="bg-gray-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[25px] justify-center p-6 md:px-5 rounded-[12px] shadow-bs7 w-full">
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[269px] mt-[13px] w-[56%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
              size="txtGilroySemiBold24Black90001"
            >
              Status
            </Text>
            <Img
              className="common-pointer h-6 w-6"
              src="images/img_close_1.svg"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-[7px] w-[97%] md:w-full">
            <div className="flex flex-row gap-4 items-end justify-start w-[59%] md:w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
              <div className="flex flex-col gap-[11px] items-center justify-start mb-[3px] mt-1.5">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18Bluegray900"
                >
                  Rose J. Henry
                </Text>
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyRegular18Bluegray400"
                >
                  Miami, Florida
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col md:gap-10 gap-[260px] justify-end mt-6 p-[7px] rounded-lg w-full">
              <Text
                className="md:ml-[0] ml-[9px] mr-[442px] mt-[13px] text-base text-blue_gray-200"
                size="txtGilroyMedium16Bluegray200"
              >
                Placeholder text
              </Text>
              <Img
                className="h-4 md:ml-[0] ml-[556px] rounded-[50%] w-4"
                src="images/img_edit_1.svg"
                alt="edit"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[31px] w-full">
              <div className="flex sm:flex-1 flex-row gap-2 items-center justify-start w-[24%] sm:w-full">
                <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail" />
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroySemiBold18Bluegray400"
                >
                  Photo/Video
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-2 items-start justify-center pt-0.5 w-[22%] sm:w-full">
                <Img
                  className="h-6 mb-0.5 w-6"
                  src="images/img_offer.svg"
                  alt="offer"
                />
                <div className="flex flex-col items-center justify-start mt-1">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroySemiBold18Bluegray400"
                  >
                    Tag People
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-row gap-2 items-center justify-between py-0.5 w-[24%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_location_24X24.svg"
                  alt="location"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroySemiBold18Bluegray400"
                  >
                    Add location
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[586px] sm:min-w-full mt-10 rounded-md text-base text-center"
              shape="round"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default UserStatusModal;
