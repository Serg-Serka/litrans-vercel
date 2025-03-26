"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="relative w-full h-80">
            <Image src='/images/map.png' alt='Map' layout="fill" objectFit="cover" className="rounded-t-lg"/>
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-2">{t('contactPage.contactUs')}</h2>
          <p className="text-gray-700">
            {t('contactPage.contactText')}
            <a href="mailto:sales@litrans.lt" className="text-blue-600 font-semibold"> sales@litrans.lt</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contactPage.formName")}
              required
              className="p-3 border border-gray-300 rounded w-full"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contactPage.formEmail")}
              required
              className="p-3 border border-gray-300 rounded w-full"
            />

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={t("contactPage.formMobile")}
              required
              className="p-3 border border-gray-300 rounded w-full"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contactPage.formMessage")}
              required
              rows={4}
              className="p-3 border border-gray-300 rounded w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              {t('contactPage.formSend')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
