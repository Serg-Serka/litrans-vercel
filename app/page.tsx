import Image from 'next/image';
import { useTranslations } from 'next-intl';
import './trading/trading.css';
import HorizontalLine from "@/components/HorizontalLine";
import LogisticCard from "@/components/LogisticCard";
import TransparentCard from "@/components/TransparentCard";

export default function TradingPage() {
  const t = useTranslations();

  const logisticsData = [
    {image: '/images/uco.webp', title: t('tradingPage.uco')},
    {image: '/images/veg_oils.webp', title: t('tradingPage.vegOils')},
    {image: '/images/fatty_acids.jpeg', title: t('tradingPage.fattyAcids')},
  ];

  return (
    <div className="trading-page">
      <h1 className="page-title">{t("tradingPage.title")}</h1>
      <HorizontalLine color="#676767" height={5} />
      <section className="intro-text-section">
        <p className="intro-text">{t('tradingPage.introText1')}</p>
        <p className="intro-text">{t('tradingPage.introText2')}</p>
        <p className="intro-text">{t('tradingPage.introText3')}</p>
        <p className="intro-text">{t('tradingPage.introText4')}</p>
      </section>
      <section className="image-section">
        <div className="full-width-image-wrapper">
          <Image
            src="/images/home2.png"
            alt="Trading"
            className="full-width-image"
            fill
            priority
            objectFit="cover"
          />
          <div style={{
            position: "absolute",
            top: "30%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Ensure perfect centering
            display: "flex",
            justifyContent: "space-around",
            width: "80%", // Adjust width as needed
          }}>
            <TransparentCard title="50+" subtitle="FACTORIES"/>
            <TransparentCard title="5000+" subtitle="MT PER MONTH"/>
            <TransparentCard title="14" subtitle="COUNTRIES WHERE WE WORK"/>
          </div>
        </div>
      </section>
      <div className="p-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {logisticsData.map((item, index) => (
            <LogisticCard key={index} imageSrc={item.image} title={item.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}
