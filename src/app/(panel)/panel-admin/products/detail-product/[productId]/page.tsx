"use client"
import { useEffect } from "react";
import DetailProducPage from "@/app/(panel)/components/template/DetailProductPage";
import { fetchGetProduct,setProductDetail } from "@/redux/features/panel/productsSlice";
import { useAppDispatch } from "@/redux/store";
import { ParamsProduct } from "@/app/(panel)/components/types/PanelFormTypes";
import { useProductDetail } from "../../_api/products";

interface DetailProductProps {
    
}


 
const DetailProduct: React.FunctionComponent<ParamsProduct> = ({params}) => {
    
    const {data,isPending,isSuccess}=useProductDetail(+params.productId)
    const dispatch=useAppDispatch()

    if(isSuccess){
        dispatch(setProductDetail(data))
    }
    // useEffect(()=>{
    //     dispatch(fetchGetProduct(params.productId))
   
    // },[params.productId])
    return ( 
        <DetailProducPage />
     );
}
 
export default DetailProduct;