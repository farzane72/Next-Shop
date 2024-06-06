import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import { useProductDetail } from "../../panel-admin/products/_api/products";
import { LineWave } from "react-loader-spinner";
interface DetailProducrProps {
  productId:number
}

const DetailProducPage: React.FunctionComponent<DetailProducrProps> = ({productId}) => {

  const {data,isPending,isSuccess}=useProductDetail(productId)

  // if(isSuccess){
  //  console.log(data);
  // }
 

  //const dispatch=useAppDispatch()

  // const {
  //   product: {
  //     id,
  //     title,
  //     slug,
  //     category,
  //     thumbnail,
  //     seller,
  //     price,
  //     viewer,
  //     status,
  //     images,
  //     inventory,
  //     description,
  //     specifications,
  //     comments,
  //   },
  // } = useAppSelector((store) => store.products);

  if(isPending){
    return <LineWave
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
      <div className="p-4">
        <div className="flex flex-col gap-4  mt-8 border p-4 rounded-md">
        <div className="flex gap-1 border-b pb-2 items-center">
            <span className="">تصویر محصول:</span>
            <div className="text-gray-600">
              {
                data.images[0]?.image ?
                <img className="w-[150px] h-[120px]" src={data.images[0].image}/>:
                <Image src="/images/no-images2.jpg" alt="no-picture" width={40} height={40} className="rounded-md" />
  
              }
             
             
            </div>
          </div>
          {/* <div className="flex   border-b  "> */}
          <div className="  flex gap-1  border-b  pb-4  ">
            <span className="">آی دی محصول:</span>
            <span className="text-gray-600">{data.id}</span>
          </div>
          
          <div className="  flex gap-1 border-b  pb-2    ">
            <span className="">عنوان محصول:</span>
            <span className="text-gray-600">{data.title}</span>
          </div>
  
          {/* </div> */}
         
         
          <div className="flex gap-1 border-b  pb-2">
            <span className="">دسته بندی محصول</span>
            <span className="text-gray-600">{data.category.title}</span>
          </div>
          <div className="flex gap-1 border-b  pb-2">
            <span className="">فروشنده:</span>
            <div className="flex flex-col gap-2 text-gray-600">
              {data.seller.first_name ||
                (data.seller.last_name && (
                  <span className="border-b ">
                    {data.seller.first_name} {data.seller.last_name}
                  </span>
                ))}
              {data.seller.company_name && (
                <span className="text-gray-600">{data.seller.company_name} </span>
              )}
            </div>
          </div>
          <div className="flex gap-1 border-b  pb-2">
            <span className="">قیمت محصول</span>
            <span className="text-gray-600">{data.price}</span>
          </div>
          
          <div className="flex gap-1 border-b  pb-2">
            <span className="">وضعیت</span>
            <span className="text-gray-600">{data.status}</span>
          </div>
          <div className="flex gap-1 border-b  pb-2">
            <span className="">موجودی:</span>
            <span className="text-gray-600">{data.inventory}</span>
          </div>
          <div className="flex gap-1 border-b  pb-2">
            <span className="">توضیحات:</span>
            <span className="text-gray-600">{data.description}</span>
          </div>
          <div className="flex gap-2   pb-2 ">
            <span className="">ویژگی ها:</span>
            <div className="text-gray-600">
              {data.specifications ? (
                Object.entries(data.specifications).map(([key, value],index) => (
                  <p className="mb-1 border-b " key={index}>{`${key}:${value}`}</p>
                ))
              ) : (
                <span>هیچ ویژگی ثبت نشده است</span>
              )}
            </div>
          </div>
          <div className="flex gap-1  border-b    pb-2">
            <span className="">پیام کاربران:</span>
            <div className="text-gray-600">
              {data.comments.length > 0 ? (
                data.comments.map((comment:any) => <p className="mb-1  ">{comment}</p>)
              ) : (
                <span>هیچ پیامی ثبت نشده است</span>
              )}
            </div>
          </div>
          
          <div className="flex gap-1 border-b  pb-2">
            <span className="">تعداد بینندگان</span>
            <span className="text-gray-600">{data.viewer}</span>
          </div>
          <div className="flex gap-1 border-b  pb-2">
            <span className="">اسلاگ محصول:</span>
            <span className="text-gray-600">{data.slug}</span>
          </div>
          {/* <div className="flex gap-1 border-b  pb-2">
            <span className="">ویژگی ها:</span>
            <span className="text-gray-600">{specifications}</span>
          </div> */}
          {/* <div className="flex gap-1  pb-2">
            <span className="">رمز:</span>
            <span className="text-gray-600">
              {user.has_password ? "دارد" : "ندارد"}
            </span>
          </div> */}
        </div>
      </div>
    );
  }
  
};

export default DetailProducPage;
