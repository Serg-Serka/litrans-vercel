import {getRequestConfig} from 'next-intl/server';
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Read locale from cookies
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "us"; // Default to 'en'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
