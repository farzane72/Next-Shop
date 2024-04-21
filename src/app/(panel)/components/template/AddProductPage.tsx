import { number } from "yup";
import FormikContainerProduct from "../forms/FormikContainerProduct";
interface AddProductPageProps {
    
}
const product={
    title: "",
    category: 0,
    price: 0,
    inventory: 0,
    description: "",
    specifications : {},
    image_ids:[]
}
 
const AddProductPage:React.FunctionComponent<AddProductPageProps> = () => {
    return (  
       <FormikContainerProduct {...product} />
    );
}
 
export default AddProductPage;