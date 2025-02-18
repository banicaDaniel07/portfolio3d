import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

import Spline from "@splinetool/react-spline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import _ from "lodash";
import { getTimeFromSeconds } from "../utils/date-utils";
import { CONTACT_ANIMATION, LAST_MESSAGE, ONE_HOUR } from "../utils/constants";
import { scrollTop } from "../utils/style-utils";


const Contact = () => {
  const formRef: any = useRef();
  let timer: any = null;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [messageTimeLeft, setMessageTimeLeft] = useState<any>(3600);

  const startCountdown = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
  }

  useEffect(() => {
    scrollTop();
    if (!_.isNil(localStorage.getItem(LAST_MESSAGE))) {
      calculateTimeLeft();
      startCountdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const calculateTimeLeft = () => {
    setMessageTimeLeft(moment().diff(moment(localStorage.getItem(LAST_MESSAGE)), 'seconds'));
  }

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
      setLoading(false);
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
          localStorage.setItem(LAST_MESSAGE, moment().toString())
          calculateTimeLeft();
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setLoading(false);
          startCountdown();

        },
        () => {
          setLoading(false);
          toast.error("I didn't receive your message 😢");
        }
      );
  };

  return (
    <section
      className='relative flex lg:flex-row flex-col contact-container'
    >

      <div className='lg:w-1/3 w-4/5 flex flex-col z-10 mb-20 ml-auto mr-auto lg:ml-16 sm:w-2/3'>
        <h1 className='about-head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-7 sm:mt-9 lg:mt-11'
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
            disabled={loading || messageTimeLeft < ONE_HOUR}
            className={'btn text-white hover:scale-105'}
          >
            {loading ?
              <>
                <span className="loading loading-spinner text-black" />
                <span className="text-black">Sending...</span>
              </>
              :
              messageTimeLeft < ONE_HOUR ?
                <span className="text-black">{getTimeFromSeconds(ONE_HOUR - messageTimeLeft)}</span>
                :
                "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-2/3 w-full flex flex-col relative' style={{ height: 590 }}>
        <div className="absolute w-full h-full" />
        <Spline
          scene={CONTACT_ANIMATION}
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
