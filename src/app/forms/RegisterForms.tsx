import React, { useState } from "react";
import Modal from "./Modal";
import FormInput from "./FormInput";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { listCourse } from "../Header/ListNavigate";
import FormSelect from "./FormSelect";

interface RegisterFormsProps {
  isRegisterFormsOpen: boolean;
  closeRegisterForms: () => void;
}

const RegisterForms: React.FC<RegisterFormsProps> = ({
  isRegisterFormsOpen,
  closeRegisterForms,
}) => {
  const [formData, setFormData] = useState({
    hovaten: "",
    sodienthoai: "",
    email: "",
    congviechientai: "",
    truonghoaccongty: "",
    tenkhoahoc: "",
  });

  // Update form state on change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.tenkhoahoc === "") {
      alert("Vui lòng chọn một khóa học.");
      return;
    }

    // Get the current date in dd-mm-yyyy format
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    const formEle = e.currentTarget;
    const formDatab = new FormData(formEle);
    // Append the current date to formDatab
    formDatab.append("ngaydangky", formattedDate);
    
    await fetch(process.env.NEXT_PUBLIC_URL_GG_SHEET_REGISTER_COURSE!, {
      method: "POST",
      body: formDatab,
    });
    alert("Đăng ký tư vấn thành công");
    setFormData({
      hovaten: "",
      sodienthoai: "",
      email: "",
      congviechientai: "",
      truonghoaccongty: "",
      tenkhoahoc: "",
    });
    closeRegisterForms();
  };

  return (
    <div className="fixed flex items-center justify-center h-screen z-[200]">
      <Modal isOpen={isRegisterFormsOpen} onClose={closeRegisterForms}>
        <div className="flex">
          <div className="flex-1 flex justify-start items-center">
            <Image
              loading="lazy"
              src={assets.telephone}
              height={300}
              width={300}
              alt="telephone"
              className=""
            />
          </div>
          <main className="flex-1 flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl font-bold text-primary-blue-lighter uppercase max-md:max-w-full">
              ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
            </h1>
            <form
              className="flex flex-col w-full text-xl leading-relaxed text-black max-md:max-w-full gap-2.5"
              onSubmit={handleSubmit}
            >
              <FormInput
                label="Họ và tên"
                id="hovaten"
                name="hovaten"
                value={formData.hovaten}
                onChange={handleChange}
              />
              <div className="flex gap-5 items-center w-full tracking-tight max-md:max-w-full">
                <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[200px]">
                  <FormInput
                    label="Số điện thoại"
                    id="sodienthoai"
                    name="sodienthoai"
                    value={formData.sodienthoai}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[255px]">
                  <FormInput
                    label="Địa chỉ email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <FormInput
                label="Công việc của bạn hiện tại?"
                id="congviechientai"
                name="congviechientai"
                value={formData.congviechientai}
                onChange={handleChange}
              />
              <FormInput
                label="Trường / Công ty"
                id="truonghoaccongty"
                name="truonghoaccongty"
                value={formData.truonghoaccongty}
                onChange={handleChange}
              />
              <FormSelect
                label="Tên khoá học"
                id="tenkhoahoc"
                name="tenkhoahoc"
                defaultSelectOption="Chọn khóa học"
                value={formData.tenkhoahoc}
                options={listCourse}
                onChange={handleChange}
              />
              <button
                className="self-center flex flex-col justify-center items-center px-5 py-2  max-w-full text-lg font-bold text-center text-white uppercase bg-primary-blue-lighter shadow-register-blue h-max w-[230px]"
                type="submit"
              >
                <span className="flex-1">ĐĂNG KÝ TƯ VẤN</span>
                <div className="mt-1.5 w-full bg-white border-white border-solid h-[3px]" />
              </button>
            </form>
          </main>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterForms;
