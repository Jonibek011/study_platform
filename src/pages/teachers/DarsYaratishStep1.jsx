import React from "react";
//react hook form
import { useForm, Controller } from "react-hook-form";
//components
import FileDrop from "../../components/teacher/FileDrop";
//react router dom
import { Form, useNavigate } from "react-router-dom";

function DarsYaratishStep1() {
  // const [file, setFile] = useState(null);
  const { register, handleSubmit, control, reset } = useForm();
  const navigation = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigation("/teacher/darslar/step2");
  };
  return (
    <div className=" overflow-y-auto h-full  ">
      <div className="max-w-[1200px] bg-main-bg md:rounded-xl p-8 flex flex-col gap-5">
        <div className="steps  w-full h-28 py-4  flex flex-col gap-5  ">
          <div className="step-container rounded-full  relative w-[85%]  lg:w-[70%] h-2 ml-5 md:ml-10 bg-[#DFE5EF] flex justify-between items-center">
            <div className="absolute top-0 left-0 w-0 h-full bg-blue-first z-0"></div>
            <span className="span-1 relative z-10 w-10 h-10 rounded-full bg-blue-first text-white flex justify-center items-center text-lg ">
              <span className="absolute -bottom-12 lg:-bottom-8 text-blue-first font-semibold text-sm w-[80px] lg:w-[200px] text-center">
                Rasm yuklash
              </span>
              1
            </span>
            <span className="z-10 w-10 relative h-10 rounded-full bg-main-bg text-lightest-text border-2 border-[#DFE5EF] flex justify-center items-center text-lg ">
              <span className="absolute -bottom-12 lg:-bottom-8  text-lightest-text font-semibold text-sm w-[100px] lg:w-[200px] text-center ">
                Mavzular qo'shish
              </span>
              2
            </span>
            <span className="z-10 w-10 relative h-10 rounded-full bg-main-bg text-lightest-text border-2 border-[#DFE5EF] flex justify-center items-center text-lg ">
              <span className="absolute -bottom-12 lg:-bottom-8  text-lightest-text font-semibold text-sm w-[100px] lg:w-[200px] text-center ">
                Tekshirish va saqlash
              </span>
              3
            </span>
          </div>
        </div>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="inputs flex flex-col lg:flex-row gap-4"
        >
          <div className="flex-1 file-drop">
            <Controller
              name="file"
              control={control}
              render={({ field }) => (
                <FileDrop
                  onFile={(file) => field.onChange(file)}
                  accept="image/*"
                  title="Dars sarlavhasi uchun rasm yuklang "
                  subtitle="Rasm o'lchami min 300 x 600; 5 MB dan ko'p bo'lmagan rasm yuklang
              — drag & drop yoki tugma."
                />
              )}
            />
          </div>
          <div className="flex-1 input-section flex flex-col gap-5">
            <label className="flex flex-col">
              <span className="text-sm text-title">Dars nomini kiriting:</span>
              <input
                {...register("darsNomi")}
                type="text"
                className="input border border-darslar-border w-full focus:outline-none bg-input-bg text-title"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-title">
                Dars haqida qisqacha ma'lumot kiriting
              </span>
              <textarea
                {...register("darsMazmuni")}
                className="textarea border border-darslar-border w-full h-20 focus:outline-none bg-input-bg text-title"
                id="textarea"
              ></textarea>
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-title">
                Dars darajasini tanlang
              </span>
              <select
                {...register("darsDarajasi")}
                defaultValue="Dars darajasini tanlang"
                className="select border border-darslar-border w-full focus:outline-none bg-input-bg text-title default:text-lightest-text"
              >
                <option disabled={true}></option>
                <option>Boshlang'ich</option>
                <option>O'rta daraja</option>
                <option>Qiyin daraja</option>
              </select>
            </label>

            <div className="buttons flex justify-end items-center gap-5">
              <button className="btn  font-medium text-[16px] rounded-full bg-[#3B82F624] text-blue-first px-8 border-none shadow-sm">
                Bekor qilish
              </button>
              <button className="btn font-medium text-[16px] bg-blue-first shadow-sm border-none text-white rounded-full px-8">
                Keyingi
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default DarsYaratishStep1;
