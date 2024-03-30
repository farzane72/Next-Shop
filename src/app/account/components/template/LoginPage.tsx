"use client";
import Image from "next/image";
import FormikContainer from "../form/FormikContainerLogin";
import Privecy from "../modules/Privecy";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
//import { GetLoacalStorage } from "@/hooks/localStorage";

interface LoginPageProps {}
//kolesh bad az anjam profile bayad virayesh she set passs nadarim in storage ha ham pak mishe
//const GetPhone = GetLoacalStorage("phone");
//const GetPassword = GetLoacalStorage("password");
const GetPhone = localStorage.getItem("phone")
const GetPassword = localStorage.getItem("password");
console.log(GetPhone);

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  return (
    <>
      <div className="flex justify-center gap-6 w-full  text-center text-lg md:text-xl ">
        <span className="">ورود</span>
        <span className="w-[.5px] h-6 bg-black "></span>
        <span className="">ثبت نام</span>
      </div>
      <p className="text-lg">خوش اومدی!</p>
      {GetPhone ? (
        GetPassword ? (
          <Link
            href="/account/loginWithPassword"
            className="text-blue-500 flex items-center"
          >
            ورود با رمز
            <IoIosArrowRoundBack className="text-2xl" />
          </Link>
        ) : (
          <Link
            href="/account/setPassword"
            className="text-blue-500 flex items-center"
          >
            ورود با رمز
            <IoIosArrowRoundBack className="text-2xl" />
          </Link>
        )
      ) : (
        ""
      )}

      <div className="  w-full md:w-[500px] 2xl:w-full">
        <FormikContainer />
      </div>

      <Privecy />
    </>
  );
};

export default LoginPage;
