import Image from "next/image";
import { useState } from "react";
import { ImageProductProps, FileType } from "../types/PanelFormTypes";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { privateAxios } from "@/services/privateAxios";
import { Field } from "formik";

const ImageProduct: React.FunctionComponent<ImageProductProps> = (props) => {
  const { image_ids, setImage_ids } = props;
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const saveHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    //  formData.append("name",'name');

    privateAxios
      .post("/store/products/upload-image/", formData)
      .then((res) => {
        console.log(res.data);
        setImage_ids([...image_ids, res.data.id]);
        console.log(image_ids);
        alert("عکس با موفقیت آپلود شد");
      })
      .catch((error) => alert(error.response.data.detail));

    //set id respose imag-ids
  };
  return (
    <div className="flex items-center align-middle gap-1 w-[700px] ">
      <span className="text-sm text-gray-500 w-[150px]">تصویر:</span>
      <div className="w-full p-4 border rounded-md ">
        {/* <input
          type="file"
          name="images"
          placeholder="آپلود تصویر"
          multiple
          onChange={(event: any) => {
            console.log(event.target.files[0]);
           // setSelectedImage([...event.target.files]);
           //  setSelectedImage([...event.target.files]);

            const formData = new FormData();
            formData.append("image", event.target.files[0]);
            formData.append("test", "hyy");
            console.log(formData);

          }}
        /> */}

        <Field
          type="file"
          name="image"
          onChange={(event: any) => {
            setSelectedImage(event.target.files[0]);
          }}
        />

        <div className=" p-4">
          {
            //selectedImage.length > 0 && (
            <div className="flex justify-between items-center gap-2">
              <div className="flex  gap-2">
                {selectedImage && (
                  <div className="flex flex-col gap-2">
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      alt="Uploaded image"
                      width={80}
                      height={80}
                      className="rounded-sm"
                    />
                    <span>{selectedImage.name}</span>
                  </div>
                )}
              </div>
              {selectedImage && (
                <div className="w-[70px]">
                  <button
                    className="bg-green-500 p-1 rounded-md text-white flex gap-1 items-center  "
                    type="button"
                    onClick={saveHandler}
                  >
                    <MdOutlineLibraryAdd />
                    <span> آپلود</span>
                  </button>
                </div>
              )}
            </div>
            // )
          }
        </div>
      </div>
    </div>
  );
};

export default ImageProduct;
