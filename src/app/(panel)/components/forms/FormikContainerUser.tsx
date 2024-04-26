"use client";
import { useState } from "react";
import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import Button from "../modules/Button";
import Input from "../modules/Input";
import { UserType } from "../types/PanelFormTypes";
import { fetchAddUser } from "@/redux/features/panel/panelSlice";
import { fetchUpdateUser } from "@/redux/features/panel/panelSlice";
import { usePathname } from 'next/navigation'
import toast from "react-hot-toast";
//const phoneRegExp =/^(\+98|0)?9\d{9}$/

//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikContainerUser: React.FunctionComponent<UserType> = (
  props: UserType
) => {
  //const [formValues, setformValues] = useState(null);
  const{phone,email,id}=props
  const { addOrEdit ,loading} = useAppSelector((store) => store.panel);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname()
  console.log(pathname);
  console.log(props);
  //----------------------------------------------function formik------------------------------------------------------------------------------
  const initialValues = {
    phone:phone,
    email:email,
    id:id
  }

  const validationSchema = Yup.object({
    //phoneNumber: Yup.string().matches()
    phone: Yup.string()
      .required("وارد کردن تلفن ضروری است ")
      .min(11, "شماره تلفن باید 11 رقم باشد!")
      .max(11, "شماره تلفن باید 11 رقم باشد!"),
    // .matches(phoneRegExp, "شماره تلفن معتبر نیست"),
    email: Yup.string().required("وارد کردن ایمیل ضروری است "),
  });
  const onSubmit = (
    values: UserType,
    { resetForm, setSubmitting }: FormikHelpers<UserType>
  ) => {
    console.log(values);
    if (addOrEdit === "add") {
      dispatch(fetchAddUser({ phone: values.phone, email: values.email })).then(
        (res) => {
          console.log(res);
          //modal add user
          if (res.meta.requestStatus === "fulfilled") {
            toast.success("کاربر جدید با موفقیت اضافه شد");
            // router.push("/account/loginWithPhone");
          }
          if (res.meta.requestStatus === "rejected") {
            toast.error("وجود خطا در ثبت کاربر جدید");
            // router.push("/account/loginWithPhone");
          }
        }
      );
      // const myPromise = fetchData();
      // toast.promise(myPromise, {
      //   loading: 'Loading',
      //   success: 'Got the data',
      //   error: 'Error when fetching',
      // });
    }

    if (addOrEdit === "edit") {
      dispatch(fetchUpdateUser({ email: values.email,id:id })).then(
        (res) => {
          console.log(res);
          //modal add user
          if (res.meta.requestStatus === "fulfilled") {
            toast.success("کاربر با موفقیت ویرایش شد");
             router.push("/panel-admin/users");
          }
          if (res.meta.requestStatus === "rejected") {
            toast.error("وجود خطا در ویرایش کاربر ");
            // router.push("/account/loginWithPhone");
          }
        }
      );
     
    }

    resetForm();
    setSubmitting(false);
  };
  //--------------------------------------------------------------------------------------------------------------------------------
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <div className=" flex justify-center mt-8">
              <div className="flex flex-col items-center  p-4 w-full md:w-[800px] gap-4   border rounded-md">
                <Input
                  label=" شماره موبایل کاربر را وارد کنید"
                  name="phone"
                  type="text"
                />
                <Input
                  label=" ایمیل کاربر  را وارد کنید"
                  name="email"
                  type="email"
                />

                <Button
                  text="ثبت"
                  disabledItem={!formik.isValid || formik.isSubmitting}
                  loading={loading}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainerUser;
