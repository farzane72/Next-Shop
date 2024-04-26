"use client";
import ProductsPage from "../../components/template/ProductsPage";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/panel/productsSlice";
import { LineWave } from "react-loader-spinner";
interface ProductsProps {}

const Products: React.FunctionComponent<ProductsProps> = () => {
  const { itemOffset, loading } = useAppSelector((store) => store.products);
  console.log(itemOffset);

  const dispatch = useAppDispatch();
  useEffect(() => {
    //dispatch(fetchProducts((currentPage-1)*10))
    dispatch(fetchProducts(itemOffset));
  }, [itemOffset]);
  return (
    <>
      {loading ? (
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
      ) : (
        <ProductsPage />
      )}
    </>
  );
};

export default Products;
