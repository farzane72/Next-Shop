import { useAppSelector } from "@/redux/store";
interface DetailProducrProps {}

const DetailProducPage: React.FunctionComponent<DetailProducrProps> = () => {
  const {
    product: {
      id,
      title,
      slug,
      category,
      thumbnail,
      seller,
      price,
      viewer,
      status,
      images,
      inventory,
      description,
      specifications,
      comments,
    },
  } = useAppSelector((store) => store.products);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4  mt-8 border p-4 rounded-md">
      <div className="flex gap-1 border-b pb-2 items-center">
          <span className="">تصویر محصول:</span>
          <div className="text-gray-600">
            <img className="w-[150px] h-[120px]" src={images[0].image}/>
          </div>
        </div>
        {/* <div className="flex   border-b  "> */}
        <div className="  flex gap-1  border-b  pb-4  ">
          <span className="">آی دی محصول:</span>
          <span className="text-gray-600">{id}</span>
        </div>
        
        <div className="  flex gap-1 border-b  pb-2    ">
          <span className="">عنوان محصول:</span>
          <span className="text-gray-600">{title}</span>
        </div>

        {/* </div> */}
       
       
        <div className="flex gap-1 border-b  pb-2">
          <span className="">دسته بندی محصول</span>
          <span className="text-gray-600">{category.title}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">فروشنده:</span>
          <div className="flex flex-col gap-2 text-gray-600">
            {seller.first_name ||
              (seller.last_name && (
                <span className="border-b ">
                  {seller.first_name} {seller.last_name}
                </span>
              ))}
            {seller.company_name && (
              <span className="text-gray-600">{seller.company_name} </span>
            )}
          </div>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">قیمت محصول</span>
          <span className="text-gray-600">{price}</span>
        </div>
        
        <div className="flex gap-1 border-b  pb-2">
          <span className="">وضعیت</span>
          <span className="text-gray-600">{status}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">موجودی:</span>
          <span className="text-gray-600">{inventory}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">توضیحات:</span>
          <span className="text-gray-600">{description}</span>
        </div>
        <div className="flex gap-2   pb-2 ">
          <span className="">ویژگی ها:</span>
          <div className="text-gray-600">
            {specifications ? (
              Object.entries(specifications).map(([key, value],index) => (
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
            {comments.length > 0 ? (
              comments.map((comment) => <p className="mb-1  ">{comment}</p>)
            ) : (
              <span>هیچ پیامی ثبت نشده است</span>
            )}
          </div>
        </div>
        
        <div className="flex gap-1 border-b  pb-2">
          <span className="">تعداد بینندگان</span>
          <span className="text-gray-600">{viewer}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">اسلاگ محصول:</span>
          <span className="text-gray-600">{slug}</span>
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
};

export default DetailProducPage;
