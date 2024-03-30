"use client"
import GetCookie from "@/hooks/getCookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'
import { useAppDispatch } from "@/redux/store";
import { setCurrentUrl } from "@/redux/features/account/loginSlice";
interface ProfileProps {
    
}

const token=GetCookie("access")
 
const Profile: React.FunctionComponent<ProfileProps> = () => {

  const dispatch = useAppDispatch();
  const router = useRouter();
  console.log(router);
  const pathname = usePathname()
  console.log(pathname);
  useEffect( ()=>{
    if(!token){
      dispatch(setCurrentUrl(pathname))
      router.push("/account/login")
     
    }
  },[])
    return (
        <div className="text-green-500">
profile
        </div>
      );
}
 
export default Profile;