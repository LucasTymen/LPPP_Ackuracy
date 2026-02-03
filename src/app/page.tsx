"use client";

const CONTENT = {
  hero_title:
    "Alexis, suite à notre échange au Cyber Show — ce que je peux faire pour ACKURACY",
  hero_subtitle: "Pour ACKURACY — Alexis",
  cta_text: "Reprendre la conversation",
  positionnement:
    "Je me positionne en Growth Engineer : acquisition B2B, automatisation des pipelines de données et évangélisation. J'ai une idée assez précise de ce qu'ACKURACY apporte — expertise Red Team, pentest, positionnement boutique — et je vois bien où je pourrais vous être utile : industrialiser la détection de leads RSSI sans que vous passiez 4 heures par jour sur LinkedIn.",
  activite_pain_points:
    "Votre force, c'est l'expertise offensive : pentest, red team, image « hacker éthique ». Le défi, à mon sens, c'est la prospection : contacter le décideur au moment exact où il prévoit son prochain audit. J'automatise la détection des signaux d'achat (recrutement RSSI, NIS 2, changements d'infra) et j'alimente votre CRM avec des leads qualifiés. Une logique Red / Blue / Purple Team appliquée à la croissance commerciale.",
  produit_commercial:
    "J'ai préparé une petite étude (concurrence, PESTEL, SWOT, Porter) et un diagnostic SEO pour cadrer le contexte. Si l'angle vous parle, je serais ravi d'en discuter autour d'un café ou d'un appel — sans engagement, juste pour voir si on peut avancer ensemble sur la partie acquisition et prospection.",
};

const CTA_HREF =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL
    ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Suite à notre échange ACKURACY — Cyber Show Paris`
    : "mailto:lucas.tymen@gmail.com?subject=Suite à notre échange ACKURACY — Cyber Show Paris";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0b12] text-[#e6e6e6] p-4 md:p-8">
      <main className="max-w-[720px] mx-auto">
        <section className="text-center py-8 md:py-12">
          <h1 className="text-xl md:text-2xl font-semibold mb-2 text-[#FFFFFF]">
            {CONTENT.hero_title}
          </h1>
          <p className="text-base text-[#CCCCCC] mb-6">{CONTENT.hero_subtitle}</p>
          <a
            href={CTA_HREF}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-6 py-3 bg-[#ff0055] text-white font-semibold rounded-2xl no-underline hover:bg-[#ff3366] hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] transition-all"
          >
            {CONTENT.cta_text}
          </a>
        </section>

        <section className="bg-[rgba(20,20,40,0.7)] rounded-2xl p-5 mb-6 border border-[#e50041]/40 shadow-[0_0_15px_rgba(229,0,65,0.15)]">
          <h2 className="text-lg font-semibold mb-2 text-[#FFFFFF]">
            Positionnement
          </h2>
          <p className="text-[#CCCCCC] leading-relaxed">
            {CONTENT.positionnement}
          </p>
        </section>

        <section className="bg-[rgba(20,20,40,0.7)] rounded-2xl p-5 mb-6 border border-[#5a5eff]/40 shadow-[0_0_15px_rgba(90,94,255,0.15)]">
          <h2 className="text-lg font-semibold mb-2 text-[#FFFFFF]">
            Votre activité & besoins
          </h2>
          <p className="text-[#CCCCCC] leading-relaxed">
            {CONTENT.activite_pain_points}
          </p>
        </section>

        <section className="bg-[rgba(20,20,40,0.7)] rounded-2xl p-5 mb-6 border border-[#3a7bd5]/40 shadow-[0_0_15px_rgba(58,123,213,0.15)]">
          <h2 className="text-lg font-semibold mb-2 text-[#FFFFFF]">
            Me contacter
          </h2>
          <p className="text-[#CCCCCC] leading-relaxed">
            {CONTENT.produit_commercial}
          </p>
        </section>
      </main>
    </div>
  );
}
