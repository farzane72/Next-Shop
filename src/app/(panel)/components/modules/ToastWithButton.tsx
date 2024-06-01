"use client";
import toast from "react-hot-toast";
import { RiDeleteBin7Line } from "react-icons/ri";
import { ToastPropsType } from "../types/PanelFormTypes";
import { useAppDispatch } from "@/redux/store";
import { fetchDeleteUser } from "@/redux/features/panel/panelSlice";
import { fetchDeleteProduct } from "@/redux/features/panel/productsSlice";
import { useDeleteUser } from "../../panel-admin/users/_api/users"; 
import { useDeleteProduct } from "../../panel-admin/products/_api/products";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const ToastWithButton: React.FunctionComponent<ToastPropsType> = (props) => {
  const { id, title, question, type } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {mutate:deleteUser,mutateAsync:deleteUserAsync}=useDeleteUser()
  const {mutate:deleteProduct,mutateAsync:deleteProductAsync}=useDeleteProduct()
  const deleteHandler = () => {
    toast((t) => (
      <div className="flex flex-col w-[200px] bg-[#1d3855] text-white p-2 rounded-md gap-2">
        <p className="">{title}</p>
        <p className="">{question}</p>
        <div className="flex justify-between">
          <div
            className="bg-white p-1 rounded-md text-gray-600 cursor-pointer"
            onClick={() => {
              if (type === "user") {
                //dispatch(fetchDeleteUser(id));
                //revalidatePath("/panel-admin/users")
                deleteUser(id)
            
              }
              if (type === "product") {
               // dispatch(fetchDeleteProduct(id));
                //revalidatePath("/panel-admin/products")
                  deleteProduct(id)
              }
              toast.dismiss(t.id);
            }}
          >
            حذف
          </div>
          <div
            className="bg-white p-1 rounded-md text-gray-600 cursor-pointer"
            onClick={() => toast.dismiss(t.id)}
          >
            انصراف
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div onClick={deleteHandler}>
      <RiDeleteBin7Line className="text-red-500 text-lg" />
    </div>
  );
};
{
  /* <RiDeleteBin7Line className="text-xl text-red-600 cursor-pointer" /> */
}
export default ToastWithButton;
