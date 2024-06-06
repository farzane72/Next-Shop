

import FormikContainerUser from "../forms/FormikContainerUser";
 import { useAppSelector } from "@/redux/store";
 import { useUserDetail } from "../../panel-admin/users/_api/users";
 import { LineWave } from "react-loader-spinner";
 interface EditUserProps {
  
  userId: number;
}

const EditUserPage = ({userId}:EditUserProps) => {
   // const {user } = useAppSelector((store) => store.panel);
    const {data,isPending,isSuccess}=useUserDetail(userId)
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
   if(isSuccess){
    return ( 
      <FormikContainerUser {...data} />
    );

   }
    
}
 
export default EditUserPage;