// import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  const a = 'https://prod.spline.design/pYMcrRTxMG4Ju8hp/scene.splinecode'
  const formRef: any = useRef();
  const [form, setForm] = useState({ name: "Daniel", email: "Danile@Email.com", message: "Hello" });
  const {
    alert,
    // showAlert,
    // hideAlert
  } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }: any) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       showAlert({
    //         show: true,
    //         text: "Thank you for your message 😃",
    //         type: "success",
    //       });

    //       setTimeout(() => {
    //         hideAlert(false);
    //         setCurrentAnimation("idle");
    //         setForm({
    //           name: "",
    //           email: "",
    //           message: "",
    //         });
    //       }, [3000]);
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);
    //       setCurrentAnimation("idle");

    //       showAlert({
    //         show: true,
    //         text: "I didn't receive your message 😢",
    //         type: "danger",
    //       });
    //     }
    //   );
  };

  return (
    <section
      className='relative flex lg:flex-row flex-col max-container'
      style={{ maxWidth: '74rem' }}
    >
      {alert.show && <Alert {...alert} />}

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

    </section>
  );
};

export default Contact;
