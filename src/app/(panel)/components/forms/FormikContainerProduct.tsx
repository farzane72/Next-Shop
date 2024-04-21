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
import { ProductType, InitialProductType } from "../types/PanelFormTypes";
import { fetchAddProduct } from "@/redux/features/panel/productsSlice";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Textarea from "../modules/Textarea";
import Specifications from "../modules/Specifications";
import ImageProduct from "../modules/ImageProduct";
import Select from "../modules/Select";

//const phoneRegExp =/^(\+98|0)?9\d{9}$/

//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikContainerProduct: React.FunctionComponent<ProductType> = (
  props: ProductType
) => {
  //const [formValues, setformValues] = useState(null);
  const {
    title,
    category,
    price,
    inventory,
    description,
    specifications,
    image_ids,
  } = props;

  const { addOrEdit, categories } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  //console.log(pathname);
  //console.log(props);
  const [valueSpecifications, setValueSpecifications] =
    useState(specifications);
  const [images, setImages] = useState(image_ids);
  //console.log(categories);
  //console.log(valueSpecifications);
  //----------------------------------------------function formik------------------------------------------------------------------------------
  const initialValues: InitialProductType = {
    title,
    category,
    price,
    inventory,
    description,
    specifications,
    image_ids,
  };

  const validationSchema = Yup.object({
    //phoneNumber: Yup.string().matches()
    title: Yup.string().required("وارد کردن عنوان ضروری است"),
    category: Yup.string().required("وارد کردن دسته بندی ضروری است"),
    price: Yup.string().required("وارد کردن قیمت ضروری است"),
    inventory: Yup.string().required("وارد کردن تعداد ضروری است"),
  });
  const onSubmit = (
    values: ProductType,
    { resetForm, setSubmitting }: FormikHelpers<ProductType>,
   
  ) => {
    
    // console.log(values);
    // console.log(images);
    // console.log(valueSpecifications);
    const data = {
      title: values.title,
      category: values.category,
      price: values.price,
      inventory: values.inventory,
      description: values.description,
      specifications: { ...valueSpecifications },
      image_ids: [...images],
    };
    console.log(data);
  //  if (addOrEdit === "add") {
      dispatch(fetchAddProduct(data)).then((res) => {
        console.log(res);
        //modal add user
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("محصول جدید با موفقیت اضافه شد");
          // router.push("/account/loginWithPhone");
        }
        if (res.meta.requestStatus === "rejected") {
          toast.error("وجود خطا در ثبت محصول جدید");
          // router.push("/account/loginWithPhone");
        }
      });
      // const myPromise = fetchData();
      // toast.promise(myPromise, {
      //   loading: 'Loading',
      //   success: 'Got the data',
      //   error: 'Error when fetching',
      // });
  //  }

    if (addOrEdit === "edit") {
      //   dispatch(fetchUpdateUser({ email: values.email,id:id })).then(
      //     (res) => {
      //       console.log(res);
      //       //modal add user
      //       if (res.meta.requestStatus === "fulfilled") {
      //         toast.success("کاربر با موفقیت ویرایش شد");
      //          router.push("/panel-admin/users");
      //       }
      //       if (res.meta.requestStatus === "rejected") {
      //         toast.error("وجود خطا در ویرایش کاربر ");
      //         // router.push("/account/loginWithPhone");
      //       }
      //     }
      //   );
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
                <Input label=" عنوان محصول" name="title" type="text" />
                <Input label="قیمت محصول" name="price" type="text" />
                <Input label="تعداد " name="inventory" type="text" />
                <Textarea label="توضیحات " name="description" />
                <Select name="category" label="دسته بندی" />
                <Specifications
                  specifications={valueSpecifications}
                  setSpecifications={setValueSpecifications}
                />

                <ImageProduct image_ids={images} setImage_ids={setImages}  />

                <Button
                  text="ثبت"
                  disabledItem={!formik.isValid || formik.isSubmitting}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainerProduct;
