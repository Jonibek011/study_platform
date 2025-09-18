// FileDrop.jsx
import React, { useRef, useState, useEffect } from "react";

//icons
import { MdUpload } from "react-icons/md";
const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const MIN_WIDTH = 300;
const MIN_HEIGHT = 600;

export default function FileDrop({
  onFile,
  accept,
  title = "",
  subtitle = "",
}) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Clean up object URL when preview changes or component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // Core validation + preview logic
  const validateAndHandle = (file) => {
    if (!file) return;
    setError("");

    if (file.size > MAX_SIZE) {
      setError("Fayl hajmi 5 MB dan katta bo'lmasin.");
      return;
    }

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      if (img.width < MIN_WIDTH || img.height < MIN_HEIGHT) {
        URL.revokeObjectURL(url);
        setError(
          `Rasm o'lchami kamida ${MIN_WIDTH} x ${MIN_HEIGHT} bo'lishi kerak.`
        );
        return;
      }

      // agar oldingi preview bo'lsa uni bekor qilamiz (memory leak oldini olish uchun)
      if (previewUrl) URL.revokeObjectURL(previewUrl);

      setPreviewUrl(url);
      setFileName(file.name);
      setSelectedFile(file);
      if (typeof onFile === "function") onFile(file);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError("Rasmni o'qishda xatolik yuz berdi.");
    };
    img.src = url;
  };

  // input onChange — file tanlanganda ishlaydi
  const handleInputChange = (e) => {
    const f = e.target.files?.[0];
    validateAndHandle(f);
    // Agar foydalanuvchi xuddi shu faylni yana tanlasa change event kelmasligi mumkin,
    // shuning uchun inputni tozalash foydali:
    e.target.value = "";
  };

  // drag&drop handlerlari
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer?.files?.[0];
    validateAndHandle(f);
  };
  const handleDragOver = (e) => {
    e.preventDefault(); // shu kerak — aks holda drop ishlamaydi
    setDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  // faylni olib tashlash
  const removeFile = (e) => {
    e?.stopPropagation();
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setFileName("");
    setSelectedFile(null);
    setError("");
    if (typeof onFile === "function") onFile(null);
  };

  return (
    <div className="w-full max-w-2xl bg-main-bg">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleInputChange}
      />

      <div
        role="button"
        tabIndex={0}
        aria-label="Rasm yuklash"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`rounded-lg p-8 border-2 border-dashed cursor-pointer select-none flex items-center justify-center flex-col transition min-h-[300px]
          ${
            dragActive
              ? "border-blue-400 bg-blue-50"
              : "border-blue-200 bg-main-bg"
          }`}
      >
        {previewUrl ? (
          <div className="w-full flex flex-col items-center gap-3">
            <img
              src={previewUrl}
              alt="preview"
              className="max-h-48 object-contain rounded-md"
            />
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-700">{fileName}</span>
              <button
                onClick={removeFile}
                className="text-xs px-2 py-1 bg-red-50 border rounded-md"
                type="button"
              >
                O'chirish
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="rounded-full p-6 mb-4 bg-blue-100">
              <MdUpload className="w-16 h-16 text-[#74A3F0]" />
            </div>
            <h3 className="font-semibold text-lg text-lighter-text mb-1">
              {title}
            </h3>
            <p className="text-sm text-lightest-text mb-4 text-center px-6">
              {subtitle}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // container onClick ishlamasligi uchun
                inputRef.current?.click();
              }}
              className="btn border-none font-normal px-8 h-10 py-2 bg-blue-first text-white rounded-full shadow-sm"
            >
              Faylni tanlash
            </button>
          </>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <p className="text-xs text-slate-400 mt-2 hidden md:block">
        Drag & drop ishlamasa — faylni tanlash tugmasi orqali yuklang.
      </p>
    </div>
  );
}
