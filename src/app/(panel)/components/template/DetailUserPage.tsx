import { useAppSelector } from "@/redux/store";

interface DetailUserPageProps {}

const DetailUserPage: React.FunctionComponent<DetailUserPageProps> = () => {
  const { user } = useAppSelector((store) => store.panel);
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4  mt-8 border p-4 rounded-md">
      <div className="flex gap-1 border-b pb-2">
          <span className="">آی دی کاربر:</span>
          <span className="text-gray-600">{user.id}</span>
        </div>
        <div className="flex gap-1 border-b pb-2">
          <span className="">شماره تماس کاربر:</span>
          <span className="text-gray-600">{user.phone}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">ایمیل کاربر:</span>
          <span className="text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-1 border-b  pb-2">
          <span className="">نقش کاربر:</span>
          <span className="text-gray-600">{user.role}</span>
        </div>
        <div className="flex gap-1  pb-2">
          <span className="">رمز:</span>
          <span className="text-gray-600">{user.has_password?"دارد":"ندارد"}</span>
        </div>
        
        
      </div>
    </div>
  );
};

export default DetailUserPage;
