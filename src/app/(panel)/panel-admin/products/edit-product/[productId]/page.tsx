"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import {
  fetchGetProduct,
  fetchCategories,
} from "@/redux/features/panel/productsSlice";
import { ParamsProduct } from "@/app/(panel)/components/types/PanelFormTypes";
import EditProductsPage from "@/app/(panel)/components/template/EditProductsPage";
import { useGetCategories,useProductDetail } from "../../_api/products";
import { useState } from "react";
import { setCategories } from "@/redux/features/panel/productsSlice";
interface SpeType {
  [key: string]: string;
}
[];

const EditProduct: React.FunctionComponent<ParamsProduct> = ({ params }) => {
  // const [newSpecifications, setNewSpecifications] = useState<any>([]);

  // const { data:categoriesData, isPending:categoriesPending,isSuccess:categoriesSuccess } = useGetCategories(1);
  // const { data:productData, isPending:productPending,isSuccess:ProductSuccess } = useProductDetail (+params.productId);
  // const dispatch = useAppDispatch();


 // const {  product } = useAppSelector((store) => store.products);
  // useEffect(()=>{
  //     dispatch(fetchCategories(1))
  // },[])

  //------------------or no

  //dispatch(setCategories(categoriesData));

  //---------------------------------------------------------------بخش دوم---------------------------------------------------

  



//   useEffect(() => {
//     dispatch(fetchGetProduct(params.productId)).then((res) => {
//       console.log(res.payload.specifications);
//       setNewSpecifications(
//         Object.entries(res.payload.specifications).map(([key, value]) => {
//           return { [`${key}`]: value };
//         })
//       );
      
//     });
//   }, [params.productId]);




// useEffect(() => {
//         // dispatch(fetchGetProduct(params.productId)).then((res) => {
//         //   console.log(res.payload.specifications);
//         ProductSuccess && (
//             setNewSpecifications(
//                 Object.entries(productData.specifications).map(([key, value]) => {
//                   return { [`${key}`]: value };
//                 })
//               )

//         )
         
          
//        // });
//       }, [params.productId]);


//--------------------------------------------------------------------------------------









  //console.log(newSpecifications);

  return (
    <EditProductsPage
      productId={+params.productId}
    />
  );
};

export default EditProduct;
