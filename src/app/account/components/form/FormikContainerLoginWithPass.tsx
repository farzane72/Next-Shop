"use client";
import { useState } from "react";
import React from "react";
import { Formik, Form ,FormikHelpers } from "formik";
import * as Yup from "yup";
import { LoginWithPassType } from "./LoginPage";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { fetchLoginWithPassword } from "@/redux/features/account/loginSlice";
import { setError } from "@/redux/features/account/loginSlice";
import { GrFormNextLink } from "react-icons/gr";
import Button from "../modules/Button";
import Link from "next/link";
import Input from "../modules/Input";

//"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

//^(?:\d{10}|\w+@\w+\.\w{2,3})$
//const nameRegExp ="^\d{11}\t((?>[a-zA-Z\d!#$%&'*+\-\/=?^_`{|}~]+\x20*|""((?=[\x01-\x7f])[^""\\]|\\[\x01-\x7f])*""\x20*)*(?<angle><))?((?!\.)(?>\.?[a-zA-Z\d!#$%&'*+\-\/=?^_`{|}~]+)+|""((?=[\x01-\x7f])[^""\\]|\\[\x01-\x7f])*"")@(((?!-)[a-zA-Z\d\-]+(?<!-)\.)+[a-zA-Z]{2,}|\[(((?(?<!\[)\.)(25[0-5]|2[0-4]\d|[01]?\d?\d)){4}|[a-zA-Z\d\-]*[a-zA-Z\d]:((?=[\x01-\x7f])[^\\\[\]]|\\[\x01-\x7f])+)\])(?(angle)>)";
const nameRegExp = /^(?:\d{11}|\w+@\w+\.\w{2,3})$/;
const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//
//

const FormikContainerLoginWithPass = () => {
  const [formValues, setformValues] = useState(null);
  const dispatch = useAppDispatch();
  const router = useRouter();


  const {  currentUrl } = useAppSelector((store) => store.login);
  //----------------------------------------------funcyion formik------------------------------------------------------------------------------
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("وارد کردن نام کاربری ضروری است ")
      .matches(nameRegExp, "شماره تلفن معتبر نیست"),

    password: Yup.string()
      .required("وارد کردن رمز ضروری است ")
      .min(8, "رمز  باید حداقل  8 رقم باشد")
      .matches(passRegExp, "رمز باید شامل حداقل یک حرف و حداقل یک عدد باشد"),
  });
  const onSubmit = (
    values: LoginWithPassType,
    { resetForm, setSubmitting }: FormikHelpers<LoginWithPassType>
  ) => {
    console.log(values);
    //router.push("/account/loginWithPhone")

    dispatch(
      fetchLoginWithPassword({
        username: values.username,
        password: values.password,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        if (currentUrl) {
          router.push(`${currentUrl}`);
        } else {
          router.push("/profile");
        }
       
      } else {
        console.log("لطفا نام کاربری یا رمز خود را به درستی وارد نمایید");
        dispatch(
          setError("لطفا نام کاربری یا رمز خود را به درستی وارد نمایید")
        );
      }
    });

    resetForm();
    setSubmitting(false);
  };
  //--------------------------------------------------------------------------------------------------------------------------------
  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <div className=" flex flex-col gap-2  ">
              <Input label="نام کاربری وارد کنید" type="text" name="username"/>
              <Input label="رمز خود را وارد نمایید" type="password" name="password"/>
             
              <Link
                href="/account/login"
                className="mt-8 flex justify-center items-center text-blue-500"
              >
                <GrFormNextLink className="text-xl" />
                <p className="text-sm">ورود با شماره تلفن</p>
              </Link>
              <Button text="ورود" disabledItem={!formik.isValid || formik.isSubmitting} />
             
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainerLoginWithPass;
 {/* <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500 mb-2 ">
                  نام کاربری وارد کنید
                </label>
                <Field
                  id="username"
                  name="username"
                  type="text"
                  //placeholder=""
                  className="border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c]"
                />
                <ErrorMessage name="username">
                  {(msg) => <TextError>{msg}</TextError>}
                </ErrorMessage>
              </div> */}
              {/* <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500 mb-2 ">
                  رمز خود را وارد نمایید
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  //placeholder=""
                  className="border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c]"
                />

                <ErrorMessage name="password">
                  {(msg) => <TextError>{msg}</TextError>}
                </ErrorMessage>
              </div> */}

               {/* <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="border-blue-800 bg-blue-500 p-2 rounded-md text-white mt-16 w-full"
              >
                ورود
              </button> */}