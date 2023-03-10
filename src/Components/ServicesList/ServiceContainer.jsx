import React from 'react'
import { telegramBotDesk, whatsAppBotDesk, landingPageDesk, landingImg, whatBot, teleBot } from "../../Data.js";
import Services from "../ServicesList/MyService.jsx";
export default function ServiceContainer() {
  return (
    <div className="flex flex-col sm:flex-row justify-center overflow-scroll sm:w-[1280px] sm:m-auto">
    <Services
      img={landingImg}
      title={"דפי נחיתה"}
      subTitle={landingPageDesk}
    />
    <Services
      img={teleBot}
      title={"בוטים לטלגרם"}
      subTitle={telegramBotDesk}
    />
    <Services
      img={whatBot}
      title={"בוטים לוואטסאפ"}
      subTitle={whatsAppBotDesk}
      last={true}
    />
  </div>
  )
}
