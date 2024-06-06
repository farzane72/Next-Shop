"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import Button from "../modules/Button";
import Input from "../modules/Input";
import { ProductType, InitialEditProductType,ProductEditType } from "../types/PanelFormTypes";
import { fetchAddProduct } from "@/redux/features/panel/productsSlice";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Textarea from "../modules/Textarea";
import Specifications from "../modules/Specifications";
import ImageProduct from "../modules/ImageProduct";
import Select from "../modules/Select";
import { useEditProduct,useGetCategories } from "../../panel-admin/products/_api/products";

//const phoneRegExp =/^(\+98|0)?9\d{9}$/


//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikContainerEditProduct: React.FunctionComponent<ProductEditType> = (
  props
) => {
  //const [formValues, setformValues] = useState(null);
  const {
    id,
    title,
    category:category,
    price,
    inventory,
    description,
    specifications,
    image_ids,
    newSpecifications,
    setNewSpecifications,
    
  } = props;
  
console.log(specifications);
console.log(newSpecifications);
console.log(image_ids);

 // const {  categories,loading } = useAppSelector((store) => store.products);
  const{mutate ,mutateAsync,isPending}=useEditProduct()
  const {data:categories}=useGetCategories(1)
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  //console.log(pathname);
  // //console.log(props);
  // const test=Object.entries(specifications).map(([key, value]) => {
     
  //   return( { [`${key}`]:value})
  //   })  
  //   console.log(test);

 // const [valueSpecifications, setValueSpecifications] =useState<any>({...specifications});
  // useEffect(()=>{
  //   setValueSpecifications({...specifications})

  // },[])
 
  const [images, setImages] = useState<any>([]);
  //const [categoryId, setCategoryId] = useState<number>(category.id);
  //console.log(categories);
  //console.log(valueSpecifications);
  console.log(category);
    // console.log(categoryId);
  //console.log(images);
  //----------------------------------------------function formik------------------------------------------------------------------------------
  //const initialValues:InitialEditProductType = {
    const initialValues:InitialEditProductType = {
    id,
    title,
    category:category.title,
    price,
    inventory,
    description,
    specifications,
    image_ids,
    newSpecifications,
    setNewSpecifications,
  };

  

  const validationSchema = Yup.object({
    //phoneNumber: Yup.string().matches()
    title: Yup.string().required("وارد کردن عنوان ضروری است"),
    category: Yup.string().required("وارد کردن دسته بندی ضروری است"),
    price: Yup.string().required("وارد کردن قیمت ضروری است"),
    inventory: Yup.string().required("وارد کردن تعداد ضروری است"),
  });
  const onSubmit = (
    values: ProductEditType,
    { resetForm, setSubmitting }: FormikHelpers<ProductEditType>,
   
  ) => {
    
     console.log(category);
     //console.log(categoryId);
    // console.log(valueSpecifications);
    const data = {
      id,
      title: values.title,
      category: categories.results.find(
        (item:any) => item.title === values.category)?.id,
      price: values.price,
      inventory: values.inventory,
      description: values.description,
      specifications: newSpecifications.reduce((accumulator:any,currentObject:any)=>{return{...accumulator,...currentObject}},{}),
      image_ids:images.length>0? [...images]:[image_ids[0].id],
    };
    console.log(data);
  
    mutateAsync(data).then(()=>{

      toast.success("محصول  با موفقیت ویرایش شد");
       router.push("/panel-admin/products");

    })
   
    // dispatch(fetchUpdateProduct({data,id})).then((res) => {
    //   console.log(res);
    //   //modal add user
    //   if (res.meta.requestStatus === "fulfilled") {
    //     toast.success("محصول  با موفقیت ویرایش شد");
    //      router.push("/panel-admin/products");
    //   }
    //   if (res.meta.requestStatus === "rejected") {
    //     toast.error("وجود خطا درویرایش محصول");
    //     // router.push("/account/loginWithPhone");
    //   }
    // });
    

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
                <Select name="category" label="دسته بندی"  />
                <Specifications
                  newSpecifications={newSpecifications}
                  setNewSpecifications={setNewSpecifications}
                  //setSpecifications={initialValues.specifications}
                />

                <ImageProduct images={images} setImages={setImages} image_ids={image_ids} />

                <Button
                  text="ویرایش"
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

export default FormikContainerEditProduct;
