"use client"
import { useEffect } from "react";
import GetCookie from "@/hooks/getCookie";
import SetPasswordPage from "../components/template/SetPasswordPage";
import { useRouter } from "next/navigation";


interface SetPasswordProps {
    
}

 
const SetPassword: React.FunctionComponent<SetPasswordProps> = () => {
    const token=GetCookie("access")
    const router = useRouter();
  useEffect(()=>{
    if(!token){
      router.push("/account/login")

    }
  },[])
    return ( 
        <SetPasswordPage />
     );
}
 
export default SetPassword;