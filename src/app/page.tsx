import rightImg from "@/images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./about/SectionFounder";
import SectionStatistic from "./about/SectionStatistic";
import SectionHero from "./about/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import {Metadata} from "next";

export interface PageHomeProps {}

export const metadata = {
    title: 'GardeMonToit.nc | GMT',
    description: "GardeMonToit.nc : La plateforme de référence en Nouvelle-Calédonie pour le home-sitting de confiance. Trouvez des gardiens fiables pour veiller sur votre maison pendant votre absence, offrant la tranquillité d'esprit que vous méritez. Rejoignez notre communauté de propriétaires de maison et de gardiens de confiance dès aujourd'hui.",
    applicationName: "GardeMonToit.nc",
    authors: "GardeMonToit.nc",
    generator: "Next.js",
    keywords: ["Home-sitting", "Garde de maison", "Gardiens de confiance", "Surveillance résidentielle", "Nouvelle-Calédonie", "Gardemontoit.nc", "Home-sitting de confiance", "Home-sitters qualifiés", "Sécurité résidentielle", "Propriétaires de maison", "Gardiens qualifiés", "Garde de domicile", "Séjour sans souci", "Plateforme de home-sitting", "Protection résidentielle", "Service de garde de maison", "Community de home-sitters", "Surveillance de domicile", "Sécurité de propriété", "Séjour en toute confiance", "Service de confiance", "Nouvelle-Calédonie", "NC"],
    category: "service",
    icons: {
        icon: 'icon.png',
    }
};

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
          <SectionSubscribe2 />
          <SectionStatistic />
          <div className="relative py-16">
            <BackgroundSection />
            <SectionClientSay />
          </div>


        </div>
      </div>
  );
};

export default PageHome;
