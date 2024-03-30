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
    <div className=" flex flex-col   gap-1 w-full   ">
      <label className="text-sm text-gray-500  ">{label}</label>
      <Field
        id={name}
        name={name}
        type={type}
        //placeholder="شماره موبایل خود را وارد کنید"
        className="border border-gray-500 p-4 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c]"
      />

      <ErrorMessage name={name}>
        {(msg) => <TextError>{msg}</TextError>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
