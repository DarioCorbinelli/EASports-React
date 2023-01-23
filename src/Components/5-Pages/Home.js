import React from "react";
// import Card from "Components/2-Molecules/Cards/Card1";
// import CardsWrapper from "Components/3-Organisms/Wrappers/Custom/CardsWrapper";
// import CardsSection from "Components/4-Templates/Custom/CardsSection";
import Section from "Components/4-Templates/Section";
import Cards2Set from "Components/3-Organisms/Cards2Set";
import { Banner } from "Components/4-Templates/Banner";
import { Genitori } from "Components/4-Templates/Genitori";

// Mock Data
import UltimeNovita from "Mock-Data/Home/UltimeNovita";

//Style for Cards
// import style from "../../SCSS/2-Molecules/Cards/Card1.module.scss";
import { Links } from "Components/4-Templates/Links";
import Play from "Mock-Data/Home/Play";
<<<<<<< HEAD

import Hero from "Mock-Data/Home/Hero";
import Footer from "Components/4-Templates/Footer";

export default function Home() {
=======
import Hero from "Mock-Data/Home/Hero";
import Navigation from "Components/4-Templates/Navigation";
import Navbar from "Mock-Data/Home/Navigation";
import Sidebar from "Mock-Data/Home/Sidebar";
import WrCards from "Components/3-Organisms/Wrappers/WrCards";

export default function Home() {
  const navigation = JSON.parse(Navbar);
  const sidebar = JSON.parse(Sidebar);
>>>>>>> dev
  const hero = JSON.parse(Hero);
  const ultimeNovita = JSON.parse(UltimeNovita);
  const play = JSON.parse(Play);

  return (
    <>
<<<<<<< HEAD
      <h1>Home</h1>

      <Banner stacked logoMaxWidth="346px" logoImg="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-toty-logo-7x2-xl.png.adapt.crop7x2.1920w.png" bgImageData={hero} textPosition="left" margInlineXL="6%" title="SQUADRA DELL'ANNO" subtitle="Di' la tua sui migliori al mondo. Vota e aiutaci a decidere chi farà parte della Squadra dell'anno." textClrLight={true} btnTransparent={false} btnBgColor="var(--clr-light-400)" btnColor="var(--clr-dark-700)" btnContent="Vota ora" />

      <CardsSection title="Giochi in evidenza" sectionClass={style["section-wrapper"]}>
        <CardsWrapper wrapperClass={style["cards-wrapper"]}>
          {(cards) => {
            return cards.map((card, i) => {
              return <Card key={card + i} containerClass={card.containerClass} imgPath={card.imgPath} altIMg={card.altIMg} logoClass={card.logoClass} imgLogoPath={card.imgLogoPath} altLogo={card.altLogo} width={card.width} link={<p>Sito Ufficiale</p>} height={card.height} />;
            });
          }}
        </CardsWrapper>
      </CardsSection>

      <Section title="Ultime Novita" btnContent="Scopri di più">
        <Cards2Set data={ultimeNovita} />
      </Section>

      <Banner textPosition="left" textAlign="left" bgImageData={play} btnContent="Sfoglia offerte" btnColor="var(--clr-light-400)" logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" body="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli." />
      <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />

      <Links />
      <Footer />
=======
      <Navigation navigationData={navigation} sidebarData={sidebar}>
        <Banner stacked logoMaxWidth="220px" logoImg="https://media.contentapi.ea.com/content/dam/eacom/images/2022/10/eacom-apex-eclipse-adaptive-logo-xl.png.adapt.crop7x2.1920w.png" bgImageData={hero} textPosition="right" margInlineXL="6%" subtitle="Strega i tuoi avversari nell'evento collezione" textClrLight btnTransparent={false} btnBgColor="var(--clr-light-400)" btnColor="var(--clr-dark-700)" btnContent="Altre informazioni" />

        {/* <CardsSection title="Giochi in evidenza" sectionClass={style["section-wrapper"]}>
          <CardsWrapper wrapperClass={style["cards-wrapper"]}>
            {(cards) => {
              return cards.map((card, i) => {
                return <Card key={card + i} containerClass={card.containerClass} imgPath={card.imgPath} altIMg={card.altIMg} logoClass={card.logoClass} imgLogoPath={card.imgLogoPath} altLogo={card.altLogo} width={card.width} link={<p>Sito Ufficiale</p>} height={card.height} />;
              });
            }}
          </CardsWrapper>
        </CardsSection> */}

        <Section btnContent="Ultimi giochi" title="Ultime novità">
          <WrCards>
            {["", "", "", "", "", ""].map((item, i) => <div style={{backgroundColor: "lightgray", width: "100%", aspectRatio: "1 / 1"}}></div> )}
          </WrCards>
        </Section>

        <Section title="Ultime Novita" btnContent="Scopri di più">
          <Cards2Set data={ultimeNovita} />
        </Section>

        <Banner textPosition="left" textAlign="left" bgImageData={play} btnContent="Sfoglia offerte" btnColor="var(--clr-light-400)" logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" logoMaxWidth="240px" body="Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli." />

        <Genitori heading="Genitori: il controllo dei videogiochi è nelle vostre mani." btnContent="Scopri di più" />

        <Links />
      </Navigation>
>>>>>>> dev
    </>
  );
}
