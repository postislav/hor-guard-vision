export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div className="label-tag">// 01 — Про систему</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Розроблено на запит <span className="text-gold">бойових підрозділів</span>
          </h2>

          <blockquote className="border-l-2 border-gold pl-6 py-2 italic text-lg text-gold/90 font-light">
            «Ми створили те, чого не вистачало на позиції — компактний пост спостереження,
            який розгортається за хвилини і працює в будь-яких умовах.»
          </blockquote>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed pt-4 lg:pt-16">
          <p>
            <span className="text-foreground font-medium">ГОР-1 — це не камера спостереження.</span> Це
            готовий до бою комплект, що замінює виходи на огляд позиції. Усе обладнання
            змонтовано в одному захищеному кейсі і готове до роботи з коробки.
          </p>
          <p>
            Чотири Starlight-камери з ШІ-детекцією забезпечують контроль периметру 360° навіть
            у повній темряві — без ІЧ-підсвічування, що демаскує позицію. Кабелі 25 метрів
            дозволяють розташувати оператора в укритті, далеко від точок встановлення камер.
          </p>
          <p>
            Захист IP67, робоча температура від −10 до +45°C, живлення від 7 до 32 В —
            система спроєктована під реальні польові умови, а не під вітрину.
          </p>
        </div>
      </div>
    </section>
  );
};
