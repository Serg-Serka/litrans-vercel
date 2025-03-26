"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname(); // Get the current route
  const t = useTranslations(); // Get translations

  return (
    <header className="flex justify-between items-center bg-white shadow-md header">
      <nav className="flex gap-4 p-20">
        <button
          className="flex items-center px-3 py-2 border rounded-md shadow-md"
          >
          <Link href="/" className={pathname === "/" ? "nav-link-selected-text" : "nav-link-text"} style={{ alignItems: 'center' }}>
            <Image
              src="/images/logo.png"
              alt={t("navigation.home")}
              className="nav-link-image"
              width={140}
              height={100}
            />
            <p>{t("navigation.home")}</p>
          </Link>
        </button>

      </nav>
      <nav className="flex gap-4" style={{ alignItems: "center" }}>
        <Link href="/contact" className={pathname === "/contact" ? "nav-link-selected-text" : "nav-link-text"}>{t("navigation.contact")}</Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
