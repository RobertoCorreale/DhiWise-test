import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const SurveysModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[21%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-6 items-center justify-end p-6 md:px-5 rounded-md w-full">
          <div className="flex flex-col gap-3.5 items-center justify-start mt-[7px]">
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtGilroySemiBold18Bluegray900"
            >
              Rate Your Experience
            </Text>
            <Text
              className="text-base text-blue_gray-400"
              size="txtGilroyRegular16"
            >
              Are you satisfied with the service?
            </Text>
          </div>
          <Img
            className="h-[50px] w-[61%]"
            src="images/img_frame9866.svg"
            alt="Frame9866"
          />
        </div>
      </div>
    </ModalProvider>
  );
};

export default SurveysModal;
