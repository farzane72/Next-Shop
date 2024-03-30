"use client";
import { useState } from "react";
import React from "react";
import {
  Formik,
  Form,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { LoginFormType } from "./LoginPage";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { fetchLogin } from "@/redux/features/account/loginSlice";
import Button from "../modules/Button";
import Input from "../modules/Input";
const phoneRegExp =/^(\+98|0)?9\d{9}$/

   //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikContainer = () => {
  const [formValues, setformValues] = useState(null);
  const { phone } = useAppSelector((store) => store.login);
  const dispatch = useAppDispatch();
  const router = useRouter();

  //----------------------------------------------funcyion formik------------------------------------------------------------------------------
  const initialValues = {
    phone: phone,
  };

  const validationSchema = Yup.object({
    //phoneNumber: Yup.string().matches()
    phone: Yup.string()
      .required("وارد کردن تلفن ضروری است ")
      //.min(11, 'شماره تلفن باید 11 رقم باشد!').max(11, 'شماره تلفن باید 11 رقم باشد!')
      .matches(phoneRegExp, "شماره تلفن معتبر نیست"),
  });
  const onSubmit = (
    values: LoginFormType,
    { resetForm, setSubmitting }: FormikHelpers<LoginFormType>
  ) => {
    console.log(values.phone);
    //router.push("/account/loginWithPhone")

    dispatch(fetchLogin({ phone: values.phone })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
       
        router.push("/account/loginWithPhone");
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
            
            <div className="flex flex-col ">
              <Input  label=" شماره موبایل خود را وارد کنید" name="phone" type="text" />
              
              <Button text="ادامه" disabledItem={!formik.isValid || formik.isSubmitting} />
              
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;

{/* <div className=" flex flex-col   gap-1    ">
                <label className="text-sm text-gray-500 mb-2 ">
                  شماره موبایل خود را وارد کنید
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  //placeholder="شماره موبایل خود را وارد کنید"
                  className="border border-gray-500 p-4 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c]"
                />

                <ErrorMessage name="phone">
                  {(msg) => <TextError>{msg}</TextError>}
                </ErrorMessage>
              </div> */}

              {/* {loading ? (
                <div className="flex justify-center">
                  <ThreeDots
                    visible={true}
                    height="50"
                    width="50"
                    color=" rgb(59 130 246)"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className="border-blue-800 bg-blue-500 p-2 rounded-md text-white mt-16"
                >
                  ادامه
                </button>
              )} */}