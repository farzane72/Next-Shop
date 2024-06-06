"use client"
import FormikContainerEditProduct from "../forms/FormikContainerEditProduct";
import { useAppSelector } from "@/redux/store";
import Specifications from "../modules/Specifications";
import {
  useGetCategories,
  useProductDetail,
} from "../../panel-admin/products/_api/products";
import { useState } from "react";
import { setCategories } from "@/redux/features/panel/productsSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { LineWave } from "react-loader-spinner";
//import { isPending } from "@reduxjs/toolkit";


interface EditProductsProps {
  // newSpecifications:any,
  // setNewSpecifications:any
  productId: number;
}

const EditProductsPage: React.FunctionComponent<EditProductsProps> = (
  props
) => {
  const { productId } = props;
  const [newSpecifications, setNewSpecifications] = useState<any>([]);

  const {
    data: productData,
    isPending,
    isSuccess,
  } = useProductDetail(productId);
  // if (isSuccess) {
  //   console.log(productData);
  // }

  //const dispatch = useAppDispatch();

  //dispatch(setCategories(categoriesData));

  //---------------------------------------------------------------بخش دوم---------------------------------------------------

  useEffect(() => {
   // console.log("test");
  
//---------------------------------------bug dare ????????????------------------

    if(isSuccess) {
     console.log(productData.specifications);
      setNewSpecifications(
        Object.entries(productData.specifications).map(([key, value]) => {
          return { [`${key}`]: value };
        })
      );

    }
     

    // });
  }, [productId]);

  //const {newSpecifications, setNewSpecifications}=props
  //const { product } = useAppSelector((store) => store.products);
  let newProduct = {
    id: 0,
    title: "",
    category: "",
    price: 0,
    inventory: 0,
    description: "",
    specifications: {},
    image_ids: [{ id: 0, image: "", name: "" }],
  };
  if (isSuccess) {
    newProduct = {
      id: productData.id,
      title: productData.title,
      category: productData.category,
      price: productData.price,
      inventory: productData.inventory,
      description: productData.description,
      specifications: { ...productData.specifications },
      image_ids: [...productData.images],
    };
  }

  // console.log(newProduct);
  if (isPending) {
    return <LineWave
    visible={true}
    height="100"
    width="100"
    color="#1d3855"
    ariaLabel="line-wave-loading"
    wrapperStyle={{}}
    wrapperClass=""
    firstLineColor=""
    middleLineColor=""
    lastLineColor=""
  />
  }
  if (isSuccess) {
    return (
      <FormikContainerEditProduct
        {...newProduct}
        newSpecifications={newSpecifications}
        setNewSpecifications={setNewSpecifications}
      />
    );
  }
};

export default EditProductsPage;
