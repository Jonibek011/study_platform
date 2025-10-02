import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["image", "link"],
    ["clean"],
  ],
};

const formats = [
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "bullet",
  "image",
  "link",
];
function RichToolbar({ value, setValue }) {
  return (
    <div className="w-full bg-main-bg border border-blue-first rounded-xl overflow-hidden shadow-sm">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(content, delta, source, editor) => {
          setValue(editor.getText());
        }}
        modules={modules}
        formats={formats}
        className=" text-title"
        style={{ height: "200px", borderRadius: "20px" }}
      />
    </div>
  );
}

export default RichToolbar;
