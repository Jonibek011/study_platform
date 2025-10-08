import React, { memo, useState, useRef } from "react";
import { cn } from "../util/cn";
//icons
import { MdOutlineFileUpload } from "react-icons/md";

//toast
import toast from "react-hot-toast";
const FileInput = memo(function FileInput({
  value,
  onFile,
  className = "",
  accept,
  boxClass = "",
  ...rest
}) {
  const inputRef = useRef();

  const [dragOverEffect, setDragOverEffect] = useState(false);

  const onChange = (e) => {
    const file = e.target.files?.[0];
    validateFile(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOverEffect(true);
  };

  const onDragLeave = () => {
    setDragOverEffect(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOverEffect(false);

    const file = e.dataTransfer?.files?.[0];
    validateFile(file);
  };

  const validateFile = (file) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Fayl hajmi 5 mb dan oshmasligi kerak");
      return;
    }

    if (onFile) onFile(file);
  };
  return (
    <div className={cn(`w-full h-full`, className)} {...rest}>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        onChange={onChange}
        key={value ? value.name : "empty"}
      />
      <div
        className={cn(
          `${
            dragOverEffect ? "bg-blue-100" : "bg-main-bg "
          } w-full select-none h-[300px]  border-2 border-dashed border-blue-500 p-5 rounded-xl flex justify-center items-center flex-col focus:outline-none  outline-none`,
          boxClass
        )}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key == "Enter" && inputRef.current.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <span>
          <MdOutlineFileUpload className="w-24 h-24 text-blue-500 " />
        </span>
        <div className="text-center">
          <p className="text-lighter-text text-center">Faylni tanlang</p>
          <p className="text-center text-lighter-text">PDF, DOCs, JPG, PNG</p>
          <button
            onClick={() => inputRef.current.click()}
            className="btn rounded-full   px-8 btn-sm border-none shadow-sm bg-blue-500 text-white font-medium mt-4 disabled:bg-red-500"
            disabled={value}
          >
            {value ? "Fayl yuklandi" : "Faylni yuklash"}
          </button>
        </div>
      </div>
    </div>
  );
});

export default FileInput;
