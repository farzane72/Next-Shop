import Image from "next/image";
import Link from "next/link";
interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  return (
    <div className="text-white ">
      <div className="bg-[#2a598b] p-4 ">
        <div className="flex gap-4 items-center justify-center ">
          <Image
            className="rounded-full hidden lg:block"
            src="/images/user_admin.jpg"
            width={75}
            height={75}
            alt="admin'simage"
          />
          <span className="text-lg">نام ادمین</span>
        </div>
      </div>
      <div className="bg-[#1d3855] bg-[url('/images/bg-sidebar.png')] flex flex-col gap-4 md:min-h-screen">
        <Link href="/panel-admin" className="p-4"><span >صفحه اصلی</span></Link>
        <Link href="/panel-admin/users" className="p-4"><span >مدیریت کاربران</span></Link>
        <Link href="/panel-admin/products" className="p-4"><span >مدیریت محصولات</span></Link>
        <span className="p-4">مدیریت فروشندگان</span>
      </div>
    </div>
  );
};

export default Sidebar;
