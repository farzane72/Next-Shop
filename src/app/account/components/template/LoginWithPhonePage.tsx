"use client";
import Privecy from "../modules/Privecy";
import { IoIosArrowBack } from "react-icons/io";
import Timer from "../modules/Timer";
import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { setPassword } from "@/redux/features/account/loginSlice";
import { fetchLoginWithPhone } from "@/redux/features/account/loginSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
interface LoginWithPhonePageProps {}

const LoginWithPhonePage: React.FunctionComponent<
  LoginWithPhonePageProps
> = () => {
  const { phone, password, request_id, loading, currentUrl } = useAppSelector(
    (store) => store.login
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  console.log(currentUrl);
  const submitHandler = () => {
    dispatch(fetchLoginWithPhone({ phone, password, request_id })).then(
      (res) => {
        if (res.meta.requestStatus === "fulfilled") {
          // router.push("/");
          // router.back()
          if (currentUrl) {
            router.push(`${currentUrl}`);
          } else {
            router.push("/profile");
          }
        }
      }
    );
  };
  return (
    <div className="w-full md:w-[500px] 2xl:w-full">
      <div className="flex flex-col   items-center gap-4">
        <p>کد اعتباری</p>
        <div className="w-full flex flex-col gap-4 mt-4 ">
          <label>کد ارسال شده به {phone} را وراد کنید</label>
          <input
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            type="password"
            className="border border-gray-500 p-4 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c]"
          />
          <div className="place-self-end">
            <Timer time={120} />
          </div>
        </div>
        <Link
          href="/account/login"
          className="flex  items-center text-blue-500 gap-1 "
        >
          <span>ویرایش شماره</span>
          <IoIosArrowBack className="text-sm" />
        </Link>
        {loading ? (
          <ThreeDots />
        ) : (
          <button
            onClick={submitHandler}
            className=" w-full border-blue-800 bg-blue-500 p-2 rounded-md text-white -mt-2"
          >
            ورود
          </button>
        )}

        <Privecy />
      </div>
    </div>
  );
};

export default LoginWithPhonePage;
