"use client";

import { useContext, useState } from "react";
import { LayoutContext } from "./context";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error(
      "LayoutContext must be used within a LayoutContext.Provider"
    );

  const { translations } = context;
  const t = translations.contactForm;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9+\-()\s]{6,20}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    toast.success("Message sent successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    console.log("Submitted:", formData);
  };

  return (
    <section id="contact" className="py-10 ms-auto max-w-[835px] px-2 md:px-4">
      <div className="max-w-[674px] w-full">
        <h2 className="text-[48px] font-semibold leading-[100%] tracking-[0%] mb-6 text-start text-white">
          {t.heading}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-[160%] tracking-[0%] text-white mb-1"
            >
              {t.firstName}*
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#f5bd4d62] focus:outline-none focus:ring-1 focus:ring-[#F5BD4D]"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white mb-1"
            >
              {t.lastName}*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#f5bd4d62] focus:outline-none focus:ring-1 focus:ring-[#F5BD4D]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              {t.email}*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#f5bd4d62] focus:outline-none focus:ring-1 focus:ring-[#F5BD4D]"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white mb-1"
            >
              {t.phone}*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#f5bd4d62] focus:outline-none focus:ring-1 focus:ring-[#F5BD4D]"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-1"
            >
              {t.message}*
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black text-white border border-[#f5bd4d62] focus:outline-none focus:ring-1 focus:ring-[#F5BD4D]"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gradient-to-r from-[#f5bd4de0] to-[#f89122e1] text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {t.sendButton}
            </button>
          </div>
        </form>
      </div>

      {/* Toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;
