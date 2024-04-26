"use client"
import { useEffect } from "react";
import DetailProducPage from "@/app/(panel)/components/template/DetailProductPage";
import { fetchGetProduct } from "@/redux/features/panel/productsSlice";
import { useAppDispatch } from "@/redux/store";
import { ParamsProduct } from "@/app/(panel)/components/types/PanelFormTypes";

interface DetailProductProps {
    
}


 
const DetailProduct: React.FunctionComponent<ParamsProduct> = ({params}) => {
    
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(fetchGetProduct(params.productId))
   
    },[params.productId])
    return ( 
        <DetailProducPage />
     );
}
 
export default DetailProduct;