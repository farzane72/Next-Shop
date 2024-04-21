import FormikContainerUser from "../forms/FormikContainerUser";
interface AddUserPageProps {
    
}
const user={
    phone:"",
    email:"",
    id:0
}
 
const AddUserPage:React.FunctionComponent<AddUserPageProps> = () => {
    return ( 
        <FormikContainerUser {...user} />
     );
}
 
export default AddUserPage;