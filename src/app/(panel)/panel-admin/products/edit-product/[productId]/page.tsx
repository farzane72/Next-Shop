"use client"
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { fetchGetProduct } from "@/redux/features/panel/productsSlice";
import { ParamsProduct } from "@/app/(panel)/components/types/PanelFormTypes";
import EditProductsPage from "@/app/(panel)/components/template/EditProductsPage";
interface EditProductProps {
    
}
 
const EditProduct:React.FunctionComponent<ParamsProduct> = ({params}) => {
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(fetchGetProduct(params.productId))
   
    },[params.productId])

    return ( 
        <EditProductsPage />
     );
}
 
export default EditProduct;