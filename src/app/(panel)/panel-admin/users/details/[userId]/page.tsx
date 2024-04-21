"use client"
import { ParamsProps } from "@/app/(panel)/components/types/PanelFormTypes";
import DetailUserPage from "@/app/(panel)/components/template/DetailUserPage";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchGetUser } from "@/redux/features/panel/panelSlice";
interface DetailsProps {
    
}
 
const Details: React.FunctionComponent<ParamsProps> = ({params}) => {
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(fetchGetUser(params.userId))
   
    },[params.userId])
    return (
        <div>
            <DetailUserPage />
        </div>
      );
}
 
export default Details;