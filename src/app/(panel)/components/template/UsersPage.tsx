"use cliet";
import Pagination from "../modules/Pagination";
import { CiEdit } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { useAppSelector } from "@/redux/store";
import { setAddOrEdit } from "@/redux/features/panel/panelSlice";
import { LineWave } from "react-loader-spinner";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ToastWithButton from "../modules/ToastWithButton";
import { useGetUsers } from "../../panel-admin/users/_api/users";

interface UsersPageProps {}

const UsersPage: React.FunctionComponent<UsersPageProps> = () => {
  const { users, currentPage } = useAppSelector((store) => store.panel);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, isPending } = useGetUsers(currentPage);
  console.log(data);
  //-----------------------------------------------------------------------------------------------------------------------------
  const addHandler = () => {
    dispatch(setAddOrEdit("add"));
    router.push("/panel-admin/users/add-user");
  };
  const editHandler = (id: number) => {
    dispatch(setAddOrEdit("edit"));
    router.push(`/panel-admin/users/edit-user/${id}`);
  };
  const detailHandler = (id: number) => {
    router.push(`/panel-admin/users/details/${id}`);
  };
  //console.log(users.results);
  if (isPending) {
    return (
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
    );
  }

  if (data) {
    return (
      <div className="p-4 flex flex-col items-center  mt-4 gap-4  ">
        <div
          className="py-2 px-4 bg-[#1d3855] rounded-md text-white self-start my-4  cursor-pointer"
          onClick={addHandler}
        >
          افزودن کاربر جدید
        </div>

        {/* overflow-x-auto  w-full */}
        <div className="w-full overflow-x-scroll   rounded-md ">
          <table className="w-full bg-white   border  ">
            <thead className="">
              <tr className=" border bg-[#f9fafc]">
                <th className=" p-2 text-right">آی دی کاربر</th>
                <th className="p-2 text-right">تلفن</th>
                <th className=" p-2 text-right">ایمیل</th>
                <th className=" p-2 text-right">نقش</th>
                <th className=" p-2 text-right">رمز</th>
                <th className=" p-2 text-right"></th>
              </tr>
            </thead>
            <tbody className="text-gray-500 [&>*:nth-child(even)]:bg-[#f9fafc] ">
              {data?.results.map((user: any) => (
                <tr className="bg-white border " key={user.id}>
                  <td className="  p-2">{user.id}</td>
                  <td className="  p-2 ">{user.phone}</td>
                  <td className=" p-2">{user.email}</td>
                  <td className=" p-2">{user.role}</td>
                  <td className=" p-2">
                    {user.has_password ? (
                      <CiCircleCheck className="text-2xl text-green-700" />
                    ) : (
                      <CiCircleRemove className="text-2xl text-red-700" />
                    )}
                  </td>
                  <td className=" p-2 flex items-center gap-2 ">
                    <CiEdit
                      className="text-2xl text-green-700 cursor-pointer"
                      onClick={() => editHandler(user.id)}
                    />
                    <ToastWithButton
                      title="حذف کاربر"
                      question={`آیا مایل به حذف ${user.phone} هستید؟`}
                      id={user.id}
                      type="user"
                    />
                    <BiMessageSquareDetail
                      className="text-xl text-[#1d3855] cursor-pointer"
                      onClick={() => detailHandler(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination {...data} />
      </div>
    );
  }
};

export default UsersPage;

{
  /* <tr className="bg-white border ">
              <td className="  p-2">1</td>
              <td className="  p-2 ">09119321901</td>
              <td className=" p-2">a@gmail.com</td>
              <td className=" p-2">PanelAdminPage</td>
              <td className=" p-2">
                <CiCircleCheck className="text-2xl text-green-700" />
              </td>
              <td className=" p-2 flex items-center gap-2 ">
                <CiEdit className="text-2xl text-green-700 cursor-pointer" />
                <RiDeleteBin7Line className="text-xl text-red-600 cursor-pointer" />
                <BiMessageSquareDetail className="text-xl text-[#1d3855] cursor-pointer" />
              </td>
            </tr> */
}
{
  /* <tr className=" border ">
              <td className="  p-2">1</td>
              <td className="  p-2 ">09119321901</td>
              <td className=" p-2">a@gmail.com</td>
              <td className=" p-2">PanelAdminPage</td>
              <td className=" p-2">true</td>
              <td className=" p-2">icons</td>
            </tr> */
}
{
  /* <tr className="">
              <td className="  p-2 ">1</td>
              <td className="  p-2 ">09119321901</td>
              <td className=" p-2">a@gmail.com</td>
              <td className=" p-2">PanelAdminPage</td>
              <td className=" p-2">true</td>
              <td className=" p-2">icons</td>
            </tr> */
}
