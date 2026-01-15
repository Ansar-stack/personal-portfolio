import React, { useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import ErrorComponent from "../components/ErrorComponent";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [err, setErr] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setErr((prev) => ({ ...prev, [name]: "" }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, message} = formData;
    if(name.length === 0)return setErr(prev=>({...prev, name:"Please enter your name."}));
    if(name.length < 3)return setErr(prev =>({...prev, name:"Name must be atleast 3 characters long."}));
    if(email.length === 0)return setErr(prev =>({...prev, email:"Please enter your email address."}));
    if(!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.+[a-zA-Z]{2,}/.test(email))return setErr(prev=>({...prev,  email:"Please enter a valid email address."}))
    if(!message)return setErr(prev=>({...prev, message:"Please type your message."}));
    alert("Message Send Successfully");
    setFormData({
      name:"",
      email:"",
      message:""
    });
    };
  return (
    <div 
    id="contactPage"
    className="font-mono  my-10 px-5 sm:px-20 flex flex-col items-center gap-7">
      <Heading number={"05."} text={"Contact"} />
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="p-5 bg-transparent border dark:border-[#64FFDA] border-gray-300 rounded-xl w-full md:w-3/4 lg:w-1/2 hover:shadow-[#64FFDA50] hover:shadow-[0_0_10px_1px] hover:-translate-y-1 duration-200 transition-all ease-in"
      >
        <h3 className="font-semibold text-black dark:text-white text-2xl">Let's Contact</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          {[
            {
              placeholder: "Enter your name",
              name: "name",
              value: formData.name,
            },
            {
              placeholder: "Enter your email address",
              name: "email",
              value: formData.email,
            },
          ].map((elem, index) => (
            <div key={index}>
              <input
                placeholder={elem.placeholder}
                name={elem.name}
                value={elem.value}
                onChange={handleChanges}
                type="text"
                className={`outline-0 border w-full ${index == 0 && err.name?'border-red-600':'dark:border-[#8892B0] border-gray-300'} ${index == 1 && err.email?'border-red-600':'border-[#8892B0]'} px-3 py-2 rounded-md placeholder:text-[#8892B0] text-[#8892B0]`}
              ></input>
              {index === 0 && <ErrorComponent err={err.name}/>}
              {index === 1 && <ErrorComponent err={err.email}/>}
            </div>
          ))}
          <div>
            <textarea
              placeholder="Type your message here..."
              name="message"
              value={formData.message}
              onChange={handleChanges}
              className={`outline-0 border w-full h-40 overflow-y-auto resize-none ${err.message?'border-red-600':'dark:border-[#8892B0] border-gray-300'} px-3 py-2 rounded-md placeholder:text-[#8892B0] text-[#8892B0]`}
            />
            {<ErrorComponent err={err.message}/>}
          </div>
          <Button
            text={
              <div className="flex gap-2 justify-center items-center font-semibold text-[#0A192F]">
                Submit <FaArrowRight />
              </div>
            }
            classes={`primaryButton`}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
