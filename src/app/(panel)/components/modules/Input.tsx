import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
interface InputProps {
  label: string;
  placeHolder?: string;
  name: string;
  type: string;
}

const Input: React.FunctionComponent<InputProps> = ({ label, name, type }) => {
  return (
    <div className=" flex items-center align-middle gap-1 w-[700px]  ">
      <label className="text-sm text-gray-500 w-[150px]   ">{label}:</label>
      <div className=" w-full ">
        <Field
          id={name}
          name={name}
          type={type}
          //placeholder="شماره موبایل خود را وارد کنید"
          className=" w-full border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c] mt-4"
        />

        <ErrorMessage name={name}>
          {(msg) => <TextError>{msg}</TextError>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default Input;
