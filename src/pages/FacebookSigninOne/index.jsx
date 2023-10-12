import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const FacebookSigninOnePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[186px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group_35X162.svg"
            alt="Group"
          />
          <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Sign in to DhiWise
          </Text>
          <div className="flex flex-col items-start justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Email
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Email"
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                type="email"
                shape="round"
              ></Input>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Password
              </Text>
              <Input
                name="Group10198 One"
                placeholder="Enter Password"
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                type="password"
                shape="round"
              ></Input>
            </div>
            <a
              href="javascript:"
              className="md:ml-[0] ml-[381px] mt-[15px] text-blue-A700_01 text-lg"
            >
              <Text size="txtGilroyMedium18BlueA70001">Forgot Password?</Text>
            </a>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 rounded-md text-base text-center"
              shape="round"
            >
              Log in
            </Button>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-between ml-2 md:ml-[0] mt-7 w-[97%] md:w-full">
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[36%]" />
              <a href="javascript:" className="text-base text-blue_gray-200">
                <Text size="txtGilroyRegular16Bluegray200">
                  Or continue with
                </Text>
              </a>
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[7px] w-[35%]" />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start mt-[29px] w-full">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[528px] sm:min-w-full rounded-md text-base text-center"
                onClick={() => googleSignIn()}
                variant="outline"
              >
                Sign in with Google
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full rounded-md text-base text-center"
                variant="outline"
              >
                Sign in with Facebook
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full rounded-md text-base text-center"
                variant="outline"
              >
                Sign in with Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookSigninOnePage;
