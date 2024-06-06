"use client";
import ProductsPage from "../../components/template/ProductsPage";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/panel/productsSlice";
import { LineWave } from "react-loader-spinner";
import { useGetProducts } from "./_api/products";
import { setProducts } from "@/redux/features/panel/productsSlice";
interface ProductsProps {}

const Products: React.FunctionComponent<ProductsProps> = () => {
//   const { itemOffset } = useAppSelector((store) => store.products);
//   const dispatch = useAppDispatch();
//   const {data,isPending,isSuccess}=useGetProducts( itemOffset)
//  // console.log(itemOffset);

  

//  if( isSuccess) {

//     dispatch(setProducts(data))

//   }
  // useEffect(() => {
  //   dispatch(fetchProducts(itemOffset));
  // }, [itemOffset]);


  return (
    <>
      {/* {isPending ? (
        <LineWave
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
      ) : ( */}
        <ProductsPage />
    {/* //  )} */}
    </>
  );
};

export default Products;
