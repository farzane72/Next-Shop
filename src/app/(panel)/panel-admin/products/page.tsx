"use client"
import ProductsPage from "../../components/template/ProductsPage";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/panel/productsSlice";
interface ProductsProps {
    
}
 
const Products: React.FunctionComponent<ProductsProps> = () => {
    const { currentPage } = useAppSelector((store) => store.products);

    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(fetchProducts((currentPage-1)*10))
        
    },[currentPage]
)
    return (  
        <ProductsPage />
    );
}
 
export default Products;