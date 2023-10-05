import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "Économie",
    subHeading: "Évitez les coûts élevés de la sécurité privée ou de la gestion de propriété en optant pour nos services. C'est une solution économique pour protéger votre investissement.",
  },
  {
    id: "2",
    heading: "Sécurité et tranquillité d'esprit",
    subHeading:
      "Partez en vacances ou en voyage d'affaires l'esprit tranquille en sachant que votre maison est entre de bonnes mains. GardeMonToit fonctionne sur un système de parainnage, les utilisateurs sont soigneusement sélectionnés et prêts à veiller sur votre propriété comme s'ils étaient chez eux.",
  },
  {
    id: "3",
    heading: "Entretien de la maison",
    subHeading:
      "Votre maison sera entretenue pendant votre absence. Posez vous mêmes les conditions!",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc="Votre maison mérite d'être protégée et entretenue en votre absence, tout en offrant aux voyageurs ou particuliers une expérience d'hébergement authentique et économique. GardeMonToit est là pour répondre à ces besoins, que vous soyez propriétaire ou gardien."
      >
        🚀 Pour les propriétaires :
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
