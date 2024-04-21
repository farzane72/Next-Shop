import { useEffect, useState } from "react";
interface SpecificationsProps {
  specifications: any;
  setSpecifications:any
}
interface SpecificationType {}

import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const  Specifications:React.FunctionComponent<SpecificationsProps>  = (props) => {
  const { specifications,setSpecifications } = props;

 

  //console.log(specifications)

 
  const [newSpecifications, setNewSpecifications] = useState<any>(
    Object.entries(specifications).map(([key, value]) => {
     
      return( { [`${key}`]:value})
      })  
  );
  useEffect(()=>{
     setSpecifications(({...newSpecifications}))
  },[newSpecifications])

  // console.log(newSpecifications);
  // console.log(specifications)
  
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  //setSpecifications({...newSpecifications})

  const changeHandlerName = (e: any) => {
    
    setName(e.target.value);
   
  };
  const changeHandlerValue = (e: any) => {
    setValue(e.target.value);
    
  };
  const saveHandler = () => {
    
     setNewSpecifications([...newSpecifications, {[name]:value}])
   


    //setSpecifications({...newSpecifications,[name]:value})


    // console.log(newSpecifications)
    // console.log(specifications)
    setName("");
    setValue("");
    setIsAdd(false);
    
  };
  const addHandler = () => {
    setIsAdd(true);
   
  };
  

  
  const deleteHandler2 = () => {
    
    setIsAdd(false);
    setName("");
    setValue("");
    
  };
  const deleteHandler = (index: number) => {
   
    specifications.splice(index, 1);
    setSpecifications([...specifications]);
    
  };
  return (
    <div className="flex items-center align-middle gap-1 w-[700px] ">
      <span className="text-sm text-gray-500 w-[150px]">ویژگی ها:</span>
      <div className="w-full p-4 border rounded-md">
        <div className="flex flex-col  gap-1 ">
        <div>
          {
          //  Object.entries(specifications).forEach(([key, value]) =>
            newSpecifications.map((specification: any, index: number) => 
            (
            //Object.entries(obj).forEach(([key, value]) =>
            <div key={index} className="flex gap-1 items-center text-gray-600">
              <div  className="w-full flex justify-between items-center border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0  mt-4">
              {Object.keys(specification)} : {Object.values(specification)}

              <button
                className=" flex gap-1 items-center border border-red-500 rounded-md p-1 text-red-500"
                onClick={() => deleteHandler(index)}
              >
                حذف
                <AiOutlineDelete />
              </button>
                </div>
              {/* <input
                type="text"
                //value={Object.keys(specification)}
                //value=
                name="name"
                placeholder="نام ویژگی"
                onChange={(e) => changeHandlerName(e)}
               
              /> */}
              {/* <input
                type="text"
                value={Object.values(specification)[0]}
                name="value"
                placeholder="مقدار ویژگی"
                onChange={(e) => changeHandler2(e, index)}
                className="w-[40%] border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c] mt-4"
              /> */}
              
              
            </div>
          ))}
        </div>
        {
          isAdd?
          <div className="flex gap-1 items-center">
          <input
            type="text"
            //value={Object.keys(specification)}
            value={name}
            name={name}
            placeholder="نام ویژگی"
            onChange={(e) => changeHandlerName(e)}
            className=" w-[45%] border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c] mt-4"
          />
          <input
            type="text"
            value={value}
            name={name}
            placeholder="مقدار ویژگی"
            onChange={(e) => changeHandlerValue(e)}
            className="w-[45%] border border-gray-500 p-2 rounded-md outline-none mb-2 placeholder-opacity-0 focus-within:border-[#b0882c] mt-4"
          />
          <button
            className=" flex gap-1 items-center border border-red-500 rounded-md p-1 text-red-500"
            type="button"
            onClick={() => deleteHandler2()
              
            }
            
          >
            حذف
            <AiOutlineDelete className="text-lg" />
          </button>
          <button
            className="bg-green-500 p-1 rounded-md text-white flex gap-1 items-center "
            type="button"
            onClick={saveHandler}
          >
            <MdOutlineLibraryAdd />
            <span> ثبت</span>
          </button>
        </div>
        :""
        }
       
        <button
          className="bg-blue-500 p-1 rounded-md text-white flex gap-1 items-center w-[70px] "
          type="button"
          onClick={addHandler}
        >
          <MdOutlineLibraryAdd />
          <span> افزودن</span>
        </button>
       
        </div>
      </div>
    </div>
  );
};

export default Specifications;
