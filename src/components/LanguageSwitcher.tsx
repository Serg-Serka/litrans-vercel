"use client";

import { useRouter } from "next/navigation";
// import Link from "next/link";
import { useLocale } from "next-intl";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Cookies from "js-cookie";
import "../../node_modules/flag-icons/css/flag-icons.min.css";
import {useState} from "react";
import { AiTwotoneFlag } from "react-icons/ai";

const LanguageSwitcher = () => {
  const router = useRouter();
  const currentLocale = useLocale();

  const languages = [
    {code: "us", label: "EN"},
    {code: "ua", label: "УКР"},
  ];

  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    Cookies.set("locale", lang, { expires: 365 }); // Store locale in cookies
    router.refresh(); // Refresh the page to apply the new locale
    setIsOpen(false);
  };

  const getCurrentLanguage = () => {
    const lang = languages.find((lang) => lang.code === currentLocale);
    return lang?.label;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 border rounded-md shadow-md"
      >
        <AiTwotoneFlag  style={{ margin: '0 5px 0 0' }} />
        {getCurrentLanguage()}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-30 bg-white border rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
            >
              <span className={`fi fi-${lang.code} w-40`}></span>
              <span className='text-black p-2'>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
