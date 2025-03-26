import React from 'react';
import Image from 'next/image';
// import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import {useTranslations} from "next-intl";

const Footer = () => {
  const t = useTranslations(); // Get translations
  return (
    <footer className="flex justify-between items-center bg-white shadow-md p-5">
      <div className="flex gap-4 p-4">
        <Image
          src="/images/logo.png"
          alt={t("navigation.home")}
          className="footer-image"
          width={140}
          height={100}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>UAB LITRANS</p>
        <p>Mėtų g. 21A, Bajorų k., Vilniaus raj., Lietuva</p>
        <p>Kodas 305457073</p>
        <p>VAT number: LT100013020311</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          <a href="mailto:sales@litrans.lt" className="text-blue-600 font-semibold">sales@litrans.lt</a></p>
        <p>
          <a href="mailto:buh@litrans.lt" className="text-blue-600 font-semibold">buh@litrans.lt</a></p>
        <p>
          <a
            href="https://wa.me/+37060331715"
            className="text-blue-600 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            +37060331715</a></p>
      </div>

      <div style={{marginBottom: '20px'}}>
        <a href="/docs/certificate.pdf" target="_blank" rel="noopener noreferrer">
          <Image src="/images/certificate_icon.jpeg" alt="Certificate" width={150} height={150} />
        </a>
      </div>

      {/*<div className="flex gap-4">*/}
      {/*  /!* Social Media Icons *!/*/}
      {/*  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">*/}
      {/*    <FaInstagram size={30} style={{ margin: '0 10px' }} />*/}
      {/*  </a>*/}
      {/*  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">*/}
      {/*    <FaFacebook size={30} style={{ margin: '0 10px' }} />*/}
      {/*  </a>*/}
      {/*  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">*/}
      {/*    <FaTiktok size={30} style={{ margin: '0 10px' }} />*/}
      {/*  </a>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
