'use client'

import React, { FC, FormEventHandler, HTMLInputTypeAttribute } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import rightImg from "@/images/SVG-subcribe2.png";
import Badge from "@/shared/Badge";
import Input from "@/shared/Input";
import Image from "next/image";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState({state: false, message: ''});

  const subscribeUser = async (event) => {
    event.preventDefault();
    let alert = ''

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    alert = res.ok ? 'Vous êtes abonné(e) !' : 'Une erreur est survenue :(';
    
    setSubscribed({state: true, message: alert})
    setTimeout(() => {
      setEmail('');
      setSubscribed({state: false, message: ''})
    }, 3000)
  }

  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Restez connectés 🎉</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Abonnez-vous à notre news-letter pour être au courant de notre mise en ligne!
        </span>
        {/*<ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium magazines
            </span>
          </li>
        </ul>*/}
        <form className="mt-10 relative max-w-sm" onSubmit={subscribeUser}>
          <Input
            required
            aria-required
            placeholder="Entrez votre email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            rounded="rounded-full"
            sizeClass="h-12 px-5 py-3"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-1.5"
            size="w-10 h-10"
          >
            <i className="las la-arrow-right text-xl"></i>
          </ButtonCircle>
        </form>
        {subscribed.state && <span>{subscribed.message}</span>}
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
