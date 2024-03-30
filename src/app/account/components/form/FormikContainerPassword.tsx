"use client";
import { useState } from "react";
import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { PasswordFormType } from "./LoginPage";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { fetchSetPassword } from "@/redux/features/account/loginSlice";
import Button from "../modules/Button";
import Input from "../modules/Input";
//"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

const passRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const FormikContainerPassword = () => {
  const [formValues, setformValues] = useState(null);
  const { password } = useAppSelector((store) => store.login);
  const dispatch = useAppDispatch();
  const router = useRouter();

  //----------------------------------------------funcyion formik------------------------------------------------------------------------------
  const initialValues = {
    password: password,
    rptPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("وارد کردن رمز ضروری است ")
      .min(8, "رمز  باید حداقل  8 رقم باشد")
      .matches(passRegExp, "رمز باید شامل حداقل یک حرف و حداقل یک عدد باشد"),

    rptPassword: Yup.string()
      .required("تکرار رمز  الزامی است")
      .oneOf([Yup.ref("password")], "رمز وارد شده با رمز امتخابی برابر نیست"),
  });
  const onSubmit = (
    values: PasswordFormType,
    { resetForm, setSubmitting }: FormikHelpers<PasswordFormType>
  ) => {
    console.log(values.password);
    //router.push("/account/loginWithPhone")

    dispatch(fetchSetPassword({ password: values.password })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        router.push("/account/loginWithPassword");
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
            <div className="  flex flex-col  gap-4  ">
              <Input label="رمز انتخابی خود را وارد کنید" name="password"  type="password" />
              <Input label="رمز انتخابی خود را مجدد تکرار نمایید" name="rptPassword"  type="password" />
            
              <Button text="ثبت" disabledItem={!formik.isValid || formik.isSubmitting} />
              
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainerPassword;

  {/* <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500 mb-2 ">
                  رمز انتخابی خود را وارد کنید
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
              {/* <div className="flex flex-col w-full">
                <label className="text-sm text-gray-500 mb-2 ">
                  رمز انتخابی خود را مجدد تکرار نمایید
                </label>
                <Field
                  id="rptPassword"
                  name="rptPassword"
                  type="password"
                  //placeholder=""
                  className="border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c]"
                />

                <ErrorMessage name="rptPassword">
                  {(msg) => <TextError>{msg}</TextError>}
                </ErrorMessage>
              </div> */}

              {/* <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                className="border-blue-800 bg-blue-500 p-2 rounded-md text-white mt-16 w-full"
              >
                ثبت
              </button> */}