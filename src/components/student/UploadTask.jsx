import React, { useState } from "react";
import FileInput from "./FileInput";
import RichToolbar from "./RichToolbar";
import toast from "react-hot-toast";
function UploadTask() {
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");

  const clearFields = () => {
    setFile(null);
    setValue("");
  };

  const handleButtonSubmit = () => {
    clearFields();
    document.getElementById("vazifa-yuklash-modal").close();
    toast.success("Ma'lumot yuborildi!");
  };
  return (
    <div className="px-2 md:px-6 py-6 flex flex-col lg:flex-row gap-8 w-full h-full">
      <div className="left-side w-full lg:w-[40%] h-full min-h-[300px]  ">
        <FileInput
          accept="image/*, .pdf, .doc, .docx"
          onFile={setFile}
          value={file}
        />
        {/* <RejectedFileInput className="h-[300px]" /> */}
      </div>
      <div className="right-side flex-1 flex flex-col gap-4  ">
        <h2 className="text-title text-lg font-semibold">Izoh</h2>
        <RichToolbar value={value} setValue={setValue} />
        <div className="flex justify-between items-center lg:items-start xl:items-center gap-5 flex-col sm:flex-row lg:flex-col xl:flex-row">
          <p className="text-lightest-text text-sm">
            Muammoni yoki taklifingizni kiriting. Kamida 20 ta belgi
          </p>
          <div className="flex gap-4">
            <button
              onClick={clearFields}
              className="btn shadow-none rounded-full text-[16px] px-8 bg-main-bg border-blue-500 font-medium text-blue-500"
            >
              Tozalash
            </button>
            <button
              onClick={handleButtonSubmit}
              className="btn border-none text-[16px] shadow-none text-white px-8 bg-blue-500 font-medium rounded-full"
            >
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadTask;
