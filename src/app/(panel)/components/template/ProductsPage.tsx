"use client"

import { CiEdit } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { useAppSelector } from "@/redux/store";
//import { setAddOrEdit } from "@/redux/features/panel/panelSlice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ToastWithButton from "../modules/ToastWithButton";
import Image from "next/image";
import PaginationReact from "../modules/Pagination-React-Paginate";
import { LineWave } from "react-loader-spinner";
import { useGetProducts } from "../../panel-admin/products/_api/products";


//import { productsSelected } from "@/redux/features/panel/productsSlice";
interface ProductsPageProps {}

const ProductsPage: React.FunctionComponent<ProductsPageProps> = () => {


  const { itemOffset } = useAppSelector((store) => store.products);
  //const dispatch = useAppDispatch();
  const {data,isPending,isSuccess}=useGetProducts( itemOffset)



 // const { products } =useAppSelector((store) => store.products)
  
  const router = useRouter();

  //---------------------------------------------Function--------------------------------------------------------------------------------
  const addHandler = () => {
    // dispatch(setAddOrEdit("add"));
    router.push("/panel-admin/products/add-product");
  };

  const editHandler = (id: number) => {
    // dispatch(setAddOrEdit("edit"));
     router.push(`/panel-admin/products/edit-product/${id}`);
  };
  const detailHandler = (id: number) => {
    router.push(`/panel-admin/products/detail-product/${id}`);
  };
 // console.log(users.results);

 //----------------------------------------------------------------------------------------------------------------------------------

 if(isPending) {
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

 }
  
 if(isSuccess){
  return (
    <div className="p-4    ">
      <div
        className="py-2 px-4 bg-[#1d3855] rounded-md text-white self-start  my-8 inline-block cursor-pointer "
        onClick={addHandler}
      >
        افزودن محصول  جدید
      </div>

      {/* overflow-x-auto  w-full */}
      <div className="w-full overflow-x-scroll xl:overflow-hidden  rounded-md ">
        <table className="w-full bg-white   border  ">
          <thead className="">
            <tr className=" border bg-[#f9fafc]">
              {/* <th className=" p-2 text-right">آی دی محصول</th> */}
              <th className=" p-2 text-right">تصویر محصول</th>
              <th className="p-2 text-right">عنوان</th>
              <th className=" p-2 text-right">دسته بندی</th>
              <th className=" p-2 text-right">فروشنده</th>
              <th className=" p-2 text-right">قیمت</th>
              {/* <th className=" p-2 text-right">تعداد بیننده</th>
              <th className=" p-2 text-right">اسلاگ</th> */}
              <th className=" p-2 text-right">وضعیت</th>
              <th className=" p-2 text-right"></th>
            </tr>
          </thead>
          <tbody className="text-gray-500 [&>*:nth-child(even)]:bg-[#f9fafc] ">
            {
            data.results.map((product:any) => (
              <tr className="bg-white border " key={product.id}>
               
                <td className="  p-2 ">{product.thumbnail?
                  // <Image src={product.thumbnail.image} alt={product.thumbnail.name} width={40} height={40} className="rounded-md" />
                  <img src={product.thumbnail.image} alt={product.thumbnail.name} className="w-[50px] h-[50px]"/>
                :
                <Image src="/images/no-images2.jpg" alt="no-picture" width={40} height={40} className="rounded-md" />
                }
                </td>
                <td className="  p-2 ">{product.title}</td>
                <td className=" p-2">{product.category.title}</td>
                <td className=" p-2">{product.seller}</td>
                <td className=" p-2">{product.price}</td>
                
                <td className=" p-2">{product.status}</td>
                
                <td className=" p-2 flex items-center gap-2 ">
                  <CiEdit
                    className="text-2xl text-green-700 cursor-pointer"
                    onClick={() => editHandler(product.id)}
                  />
                  <ToastWithButton
                    title="حذف  محصول"
                    question={`آیا مایل به حذف ${product.title} هستید؟`}
                    id={product.id}
                    type="product"
                  />
                  <BiMessageSquareDetail
                    className="text-xl text-[#1d3855] cursor-pointer"
                    onClick={() => detailHandler(product.id)}
                  />
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>

      <PaginationReact  products={data}/>
    </div>
  );

 }
  
};

export default ProductsPage;


