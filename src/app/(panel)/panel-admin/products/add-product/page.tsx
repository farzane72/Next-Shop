"use client"
import AddProductPage from "@/app/(panel)/components/template/AddProductPage";
import { useAppDispatch } from "@/redux/store";
import { fetchCategories } from "@/redux/features/panel/productsSlice";
import { useEffect } from "react";
interface AddProductProps {
    
}
 
const AddProduct:React.FunctionComponent<AddProductProps> = () => {
    const dispatch=useAppDispatch()

    useEffect(()=>{
        dispatch(fetchCategories(1))
    },[])
    return (  
        <AddProductPage />
    );
}
 
export default AddProduct;