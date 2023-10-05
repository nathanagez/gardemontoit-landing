import rightImg from "@/images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./home/SectionFounder";
import SectionStatistic from "./home/SectionStatistic";
import SectionHero from "./home/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

export interface PageHomeProps {}

const PageHome: FC<PageHomeProps> = ({}) => {
  return (
      <div className={`nc-PageHome overflow-hidden relative`}>
        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
          <SectionHero
              rightImg={rightImg}
              heading="👋 Bienvenue sur GardeMonToit.nc !"
              btnText=""
              subHeading="Chez GardeMonToit, notre mission est simple : offrir la tranquillité d'esprit aux propriétaires tout en créant des opportunités de logement uniques pour les voyageurs ou particuliers responsables. Nous avons créé cette plateforme pour mettre en relation les propriétaires cherchant à sécuriser leur propriété pendant leur absence et les gardiens de confiance prêts à offrir leur services"
          />

            {/*<SectionFounder />*/}
          <SectionStatistic />
          <div className="relative py-16">
            <BackgroundSection />
            <SectionClientSay />
          </div>


          <SectionSubscribe2 />
        </div>
      </div>
  );
};

export default PageHome;
