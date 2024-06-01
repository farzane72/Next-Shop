

import FormikContainerUser from "../forms/FormikContainerUser";
 import { useAppSelector } from "@/redux/store";
 import { useUserDetail } from "../../panel-admin/users/_api/users";
const EditUserPage = () => {
    const {user } = useAppSelector((store) => store.panel);
   
    return ( 
       <FormikContainerUser {...user} />
     );
}
 
export default EditUserPage;