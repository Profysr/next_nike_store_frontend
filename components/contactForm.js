"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  function handleSubmit(e) {
    if (!name && !email && !msg) {
      console.log("Please Fill all the required Fields");
    }
    setName("");
    setEmail("");
    setMsg("");
  }
  return (
    <div className="my-4 w-full flex justify-center items-center">
      <form
        action="https://formspree.io/f/mpzegqzw"
        // action=""
        method="POST"
        className="max-w-[360px] lg:max-w-[460px] px-5 bg-white flex flex-col w-full mt-8"
      >
        <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
          We'd <span className="text-red-600 font-bold">love</span> to hear{" "}
          <span className="text-red-600 font-bold">you</span>
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          We don’t just care about our business, we care about you.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onSubmit={handleSubmit}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Send Message
        </button>
        <p className="text-xs text-gray-500 mt-3">
          We cared about your precious comments and 'll make sure to reply you
          soon!!
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
