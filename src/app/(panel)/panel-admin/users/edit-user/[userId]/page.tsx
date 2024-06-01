"use client"
import EditUserPage from "@/app/(panel)/components/template/EditUserPage";
import { ParamsProps } from "@/app/(panel)/components/types/PanelFormTypes";
import { useAppDispatch } from "@/redux/store";
import { fetchGetUser } from "@/redux/features/panel/panelSlice";
 import { useEffect } from "react";
 import { useUserDetail } from "../../_api/users";
 import { setUser } from "@/redux/features/panel/panelSlice";
 import { LineWave } from "react-loader-spinner";
const EditPage: React.FunctionComponent<ParamsProps> = ({params}) => {
    console.log("test");
    console.log(params.userId);
    const dispatch=useAppDispatch()
    const {data,isPending,isSuccess}=useUserDetail(+params.userId)
    console.log(data);
   
    
    // useEffect(()=>{
    //     dispatch(fetchGetUser(params.userId))
   
    // },[params.userId])
    if(isSuccess){
        dispatch(setUser(data))
       }
    if(isPending){
        return <LineWave
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

    }
    if(data){
        return (  
            <EditUserPage />
         );

    }

    
}
 
export default EditPage;