import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const a = 'https://prod.spline.design/pYMcrRTxMG4Ju8hp/scene.splinecode'
  const formRef: any = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }: any) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast.error("Something went wrong 😢");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        userId
      )
      .then(
        () => {
          toast.success("Thank you for your message 😃");
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setLoading(false);

        },
        () => {
          setLoading(false);
          toast.error("I didn't receive your message 😢");
        }
      );
  };

  return (
    <section
      className='relative flex lg:flex-row flex-col max-container'
      style={{ maxWidth: '74rem' }}
    >

      <div className='flex-1 w-2/4 flex flex-col z-10 ml-20'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className={'btn text-white'}
          >
            {loading ?
              <>
                <span className="loading loading-spinner text-black" />
                <span className="text-black">Sending...</span>
              </>
              : "Submit"}
          </button>
        </form>
      </div>

      <div className='flex-1 w-2/4 flex flex-col'>
        <Spline
          scene={a}
        />

      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </section>
  );
};

export default Contact;
