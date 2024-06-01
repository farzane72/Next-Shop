import { Field, ErrorMessage } from "formik";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import TextError from "./TextError";
import { useGetCategories } from "../../panel-admin/products/_api/products";
interface SelectEditProps {
  label: string;
  placeHolder?: string;
  name: string,
  
 // value:string
}

const Select: React.FunctionComponent<SelectEditProps> = ({ name,placeHolder,label}) => {


  const { data:categoriesData, isPending:categoriesPending,isSuccess:categoriesSuccess } = useGetCategories(1);
  //const { addOrEdit, categories } = useAppSelector((store) => store.products);
 // console.log(categories);
  return (
    <div className=" flex items-center align-middle gap-1 w-[700px]  ">
      <label className="text-sm text-gray-500 w-[150px]   ">{label}:</label>
      <div className=" w-full ">
        <Field
          placeholder="Select"
          name={name}
          as="select"
          
         // onClick={(e:any)=>console.log(e.target.id)}
          className=" w-full border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c] mt-4"
        >

        {/* <option className="text-gray-600" value="0">
         {value}
        </option> */}
        {categoriesData?.results.map((item:any) => (
          <option value={item.title} key={item.id}   >
            {item.title}
          </option>
        ))}
        </Field>

        <ErrorMessage name={name}>
          {(msg) => <TextError>{msg}</TextError>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default Select;
