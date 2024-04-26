import FormikContainerEditProduct from "../forms/FormikContainerEditProduct";
import { useAppSelector } from "@/redux/store";
import Specifications from "../modules/Specifications";
interface EditProductsProps {
  newSpecifications:any,
  setNewSpecifications:any
}

const EditProductsPage: React.FunctionComponent<EditProductsProps> = (props) => {
  const {newSpecifications, setNewSpecifications}=props
  const { product } = useAppSelector((store) => store.products);
  const newProduct = {
    id:product.id,
    title: product.title,
    category: product.category,
    price: product.price,
    inventory: product.inventory,
    description: product.description,
    specifications: { ...product.specifications },
    image_ids: [...product.images],
  };
  console.log(newProduct);

  return <FormikContainerEditProduct {...newProduct}  newSpecifications={newSpecifications}setNewSpecifications={setNewSpecifications} />;
};

export default EditProductsPage;
