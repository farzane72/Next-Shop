import FormikContainerProduct from "../forms/FormikContainerProduct";
import { useAppSelector } from "@/redux/store";
interface EditProductsProps {}

const EditProductsPage: React.FunctionComponent<EditProductsProps> = () => {
  const { product } = useAppSelector((store) => store.products);
  const newProduct = {
    title: product.title,
    category: product.category,
    price: product.price,
    inventory: product.inventory,
    description: product.description,
    specifications: { ...product.specifications },
    image_ids: [...product.images],
  };

  return <FormikContainerProduct {...newProduct} />;
};

export default EditProductsPage;
