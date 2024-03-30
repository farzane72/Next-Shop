import Image from "next/image";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  return (
    <div className="text-white ">
      <div className="bg-[#2a598b] p-4 ">
        <div className="flex gap-4 items-center justify-center">
          <Image
            className="rounded-full"
            src="/images/user_admin.jpg"
            width={75}
            height={75}
            alt="admin'simage"
          />
          <span className="text-lg">نام ادمین</span>
        </div>
      </div>
      <div className="bg-[#1d3855] bg-[url('/images/bg-sidebar.png')] flex flex-col gap-4 min-h-screen">
        <span className="p-4">صفحه اصلی</span>
        <span className="p-4">مدیریت کاربران</span>
        <span className="p-4">مدیریت محصولات</span>
        <span className="p-4">مدیریت فروشندگان</span>
      </div>
    </div>
  );
};

export default Sidebar;
