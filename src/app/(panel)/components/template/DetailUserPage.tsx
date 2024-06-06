import { useAppSelector } from "@/redux/store";
import { useUserDetail } from "../../panel-admin/users/_api/users";
 import { LineWave } from "react-loader-spinner";

interface DetailUserPageProps {
  userId:number
}

const DetailUserPage: React.FunctionComponent<DetailUserPageProps> = ({userId}) => {
  const {data,isPending,isSuccess}=useUserDetail(userId)
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
      <div className="flex gap-1 border-b pb-2">
          <span className="">آی دی کاربر:</span>
          <span className="text-gray-600">{data.id}</span>
        </div>
        <div className="flex gap-1 border-b pb-2">
          <span className="">شماره تماس کاربر:</span>
          <span className="text-gray-600">{data.phone}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">ایمیل کاربر:</span>
          <span className="text-gray-600">{data.email}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">نقش کاربر:</span>
          <span className="text-gray-600">{data.role}</span>
        </div>
        <div className="flex gap-1  pb-2">
          <span className="">رمز:</span>
          <span className="text-gray-600">{data.has_password?"دارد":"ندارد"}</span>
        </div>
        
        
      </div>
    </div>
  );
}

 // const { user } = useAppSelector((store) => store.panel);
  
};

export default DetailUserPage;
