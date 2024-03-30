"use client"
import { useAppSelector } from "@/redux/store";

import FormikContainerLoginWithPass from "../form/FormikContainerLoginWithPass";

interface LoginWithPassPageProps {}

const LoginWithPassPage: React.FunctionComponent<
  LoginWithPassPageProps
> = () => {
  
  const { error } = useAppSelector((store) => store.login);
  

  return (
    <>
      <span>ورود</span>
      {
        error&&
        <p className="text-red-500 my-4">{error}</p>
        
      }
     
      <div className="w-full md:w-[500px] 2xl:w-full">
        <FormikContainerLoginWithPass />
      </div>
    
    </>
  );
};

export default LoginWithPassPage;
