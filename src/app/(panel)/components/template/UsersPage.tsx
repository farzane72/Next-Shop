import Pagination from "../modules/Pagination";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { useAppSelector } from "@/redux/store";
interface UsersPageProps {}

const UsersPage: React.FunctionComponent<UsersPageProps> = () => {
  const { users } = useAppSelector((store) => store.panel);
  
  console.log(users.results);
  return (
    <div className="p-4 flex flex-col items-center  mt-4 gap-4  ">
      <div className="p-2 bg-[#1d3855] rounded-md text-white self-start ">
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
            {users.results.map((user) => (
              <tr className="bg-white border ">
                <td className="  p-2">{user.id}</td>
                <td className="  p-2 ">{user.phone}</td>
                <td className=" p-2">{user.email}</td>
                <td className=" p-2">{user.role}</td>
                <td className=" p-2">
                  {
                    (user.has_password)?
                    <CiCircleCheck className="text-2xl text-green-700" />
                    :
                    <CiCircleRemove />
                  }
                 
                </td>
                <td className=" p-2 flex items-center gap-2 ">
                  <CiEdit className="text-2xl text-green-700 cursor-pointer" />
                  <RiDeleteBin7Line className="text-xl text-red-600 cursor-pointer" />
                  <BiMessageSquareDetail className="text-xl text-[#1d3855] cursor-pointer" />
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default UsersPage;

{/* <tr className="bg-white border ">
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
            </tr> */}
            {/* <tr className=" border ">
              <td className="  p-2">1</td>
              <td className="  p-2 ">09119321901</td>
              <td className=" p-2">a@gmail.com</td>
              <td className=" p-2">PanelAdminPage</td>
              <td className=" p-2">true</td>
              <td className=" p-2">icons</td>
            </tr> */}
            {/* <tr className="">
              <td className="  p-2 ">1</td>
              <td className="  p-2 ">09119321901</td>
              <td className=" p-2">a@gmail.com</td>
              <td className=" p-2">PanelAdminPage</td>
              <td className=" p-2">true</td>
              <td className=" p-2">icons</td>
            </tr> */}