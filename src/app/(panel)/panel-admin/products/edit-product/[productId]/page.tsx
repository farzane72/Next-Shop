"use client"
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { fetchGetProduct,fetchCategories } from "@/redux/features/panel/productsSlice";
import { ParamsProduct } from "@/app/(panel)/components/types/PanelFormTypes";
import EditProductsPage from "@/app/(panel)/components/template/EditProductsPage";
import { useState } from "react";
interface SpeType{[key:string]:string}[] 
    

 
const EditProduct:React.FunctionComponent<ParamsProduct> = ({params}) => {
    const [newSpecifications, setNewSpecifications] = useState<any>([])
    //const [images, setImages] = useState<any>([])
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(fetchGetProduct(params.productId)).then((res)=>{
            console.log(res.payload.specifications);
            setNewSpecifications(
                Object.entries(res.payload.specifications).map(([key, value]) => {
     
                    return( { [`${key}`]:value})
                    })  

            )
           // setImages([res.payload.image_ids])
          
        })
        
   
    },[params.productId])

    console.log(newSpecifications);

    useEffect(()=>{
        dispatch(fetchCategories(1))
    },[])

    return ( 
        <EditProductsPage newSpecifications={newSpecifications} setNewSpecifications={setNewSpecifications} />
     );
}
 
export default EditProduct;