

import FormikContainerUser from "../forms/FormikContainerUser";
 import { useAppSelector } from "@/redux/store";
const EditUserPage = () => {
    const {user } = useAppSelector((store) => store.panel);
    return ( 
       <FormikContainerUser {...user} />
     );
}
 
export default EditUserPage;