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
import SelectAdd from "../modules/SelectAdd";
import { useAddProduct } from "../../panel-admin/products/_api/products";

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

  const {  categories,loading } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  //console.log(pathname);
  //console.log(props);
  const {mutate,mutateAsync,isPending}=useAddProduct()

  const [newSpecifications, setNewSpecifications] =useState<any>([]);



  const [images, setImages] = useState(image_ids);
  //console.log(categories);
  //console.log(specifications);
  
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
    
    // const test=Object.entries(newSpecifications).map(([key, value]) => {
     
    //   return( { [`${key}`]:value})
    //   })  
    // console.log(values);
     console.log("test");
     console.log(newSpecifications);
    const data = {
      title: values.title,
      category: values.category,
      price: values.price,
      inventory: values.inventory,
      description: values.description,
      specifications:  newSpecifications.reduce((accumulator:any,currentObject:any)=>{return{...accumulator,...currentObject}},{}),
      image_ids: [...images],
    };
    console.log(data);
   //if (addOrEdit === "add") {
      // dispatch(fetchAddProduct(data)).then((res) => {
      //   console.log(res);
      //   //modal add user
      //   if (res.meta.requestStatus === "fulfilled") {
      //     toast.success("محصول جدید با موفقیت اضافه شد");
      //     // router.push("/account/loginWithPhone");
      //   }
      //   if (res.meta.requestStatus === "rejected") {
      //     toast.error("وجود خطا در ثبت محصول جدید");
      //     // router.push("/account/loginWithPhone");
      //   }
      // });


        mutate(data)






      // const myPromise = fetchData();
      // toast.promise(myPromise, {
      //   loading: 'Loading',
      //   success: 'Got the data',
      //   error: 'Error when fetching',
      // });
  // }

   

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
                <SelectAdd name="category" label="دسته بندی" />
                <Specifications
                  newSpecifications={newSpecifications}
                setNewSpecifications={setNewSpecifications}
                />

                <ImageProduct images={images} setImages={setImages} image_ids={[]}  />

                <Button
                  text="ثبت"
                  disabledItem={!formik.isValid || formik.isSubmitting}
                  loading={isPending}
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
