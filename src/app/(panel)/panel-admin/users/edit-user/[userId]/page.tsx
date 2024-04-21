"use client"
import EditUserPage from "@/app/(panel)/components/template/EditUserPage";
import { ParamsProps } from "@/app/(panel)/components/types/PanelFormTypes";
import { useAppDispatch } from "@/redux/store";
import { fetchGetUser } from "@/redux/features/panel/panelSlice";
 import { useEffect } from "react";
const EditPage: React.FunctionComponent<ParamsProps> = ({params}) => {
    console.log("test");
    console.log(params.userId);
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(fetchGetUser(params.userId))
   
    },[params.userId])
    return (  
       <EditUserPage />
    );
}
 
export default EditPage;