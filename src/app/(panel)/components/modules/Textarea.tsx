import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
interface TextareaProps {
  label: string;
  placeHolder?: string;
  name: string;
  
}


const Textarea: React.FunctionComponent<TextareaProps> = ({ label, name }) => {
  return (
    <div className=" flex items-center align-middle gap-1 w-[700px]  ">
      <label className="text-sm text-gray-500 w-[150px]   ">{label}:</label>
      <div className=" w-full ">
        <Field
          id={name}
          name={name}
          as='textarea'
         
         // placeholder=""
          className=" w-full border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c] mt-4"
        >
          </Field>

        <ErrorMessage name={name}>
          {(msg) => <TextError>{msg}</TextError>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default Textarea;
