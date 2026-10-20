import { Users, GraduationCap, Milestone, Flower2, Moon, Quote } from "lucide-react";
import { Reveal, HallPlate } from "../ui";
import { timeline } from "../data";
import { halls } from "../museum";

export default function HallOne({ visited }: { visited: boolean }) {
  const hall = halls[0];
  return (
    <section id="hall1" className="relative py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <HallPlate hall={hall} visited={visited} />

        <Reveal>
          <h2 className="font-serif-d text-3xl md:text-5xl font-semibold mt-10 leading-[1.05] max-w-3xl">
            Хлопчык з Траецкай гары, які <span className="gold-text italic">чуў музыку зорак</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#cdc3a9] leading-relaxed">
            Каб зразумець «Вянок», трэба спачатку ўбачыць жывога чалавека: сірату, кніжніка, хворага юнака, які ніколі доўга не жыў на Беларусі — і менавіта таму любіў яе так моцна.
          </p>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-2">
            <div className="paper text-[#15120d] rounded-[24px] p-6 md:p-10 relative overflow-hidden h-full">
              <div className="ornament-strip-red absolute top-0 inset-x-0 opacity-60" />
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-[#15120d] text-[#f0d98c] grid place-items-center"><Users className="w-6 h-6" /></span>
                <div>
                  <h3 className="font-serif-d text-2xl md:text-3xl font-bold">Вітрына 1.1 — Сям'я, першы ўніверсітэт</h3>
                  <p className="text-sm text-[#6b6250] mt-1">Паводле Літаратурнага музея М. Багдановіча і ўспамінаў Адама Багдановіча</p>
                </div>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { n: "Адам Ягоравіч (1862–1940)", r: "Бацька • этнограф", t: "Аўтар даследаванняў пра светапогляд беларусаў. Сабраў бібліятэку ў некалькі тысяч тамоў — па ёй Максім вывучыў беларускую мову ўдалечыні ад радзімы.", c: "bg-[#15120d] text-[#f6efe1]" },
                  { n: "Марыя Мякота (1869–1896)", r: "Маці • настаўніца", t: "Са шляхецкага роду герба Курч. Памерла ад сухотаў, калі сыну было 4 гады. Яе ранняя смерць — вытокі матыву тугі і культу Мадонны.", c: "bg-[#c1272d] text-white" },
                  { n: "Вадзім, Леў, Вольга", r: "Браты і сястра", t: "Разам перажылі пераезды і сіроцтва. Частка рукапісаў паэта згарэла ў 1918 г. у доме бацькі падчас грамадзянскай вайны.", c: "bg-white border border-[#15120d]/10" },
                  { n: "Ганна Какуева", r: "Каханне • «Мадонны»", t: "Сястра яраслаўскага сябра, піяністка. Ёй прысвечаны «Зорка Венера» і паэма «Вераніка». Захоўвала лісты паэта да канца жыцця.", c: "bg-[#3a5fbf] text-white" },
                ].map(f => (
                  <div key={f.n} className={`rounded-2xl p-5 ${f.c}`}>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-70">{f.r}</div>
                    <div className="font-serif-d font-bold text-lg leading-tight mt-1">{f.n}</div>
                    <p className="text-[13px] leading-relaxed mt-2 opacity-90">{f.t}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-[12px] font-semibold">
                {["Бібліятэка бацькі — 1000+ кніг", "Род Мякотаў герба Курч", "Дом у Гродне захаваўся", "Лісты да Ганны — у музеі"].map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-full bg-[#15120d]/5 border border-[#15120d]/10">✦ {s}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={100}>
              <div className="ink-card rounded-[24px] p-6">
                <div className="flex items-center gap-3"><GraduationCap className="w-6 h-6 text-[#c9a227]" /><h4 className="font-serif-d text-xl font-bold">Вітрына 1.2 — Адукацыя</h4></div>
                <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-[#d8cdae]">
                  <li className="flex gap-2"><span className="text-[#c9a227]">●</span> Ніжагародская мужчынская гімназія (1902–1908), удзел у страйках 1905 г.</li>
                  <li className="flex gap-2"><span className="text-[#c9a227]">●</span> Дзямідаўскі юрыдычны ліцэй у Яраслаўлі (1911–1916) — дыплом юрыста</li>
                  <li className="flex gap-2"><span className="text-[#c9a227]">●</span> Самаадукацыя: Пушкін, Фет, Шаўчэнка, Верлен, Багушэвіч, Купала, Колас</li>
                  <li className="flex gap-2"><span className="text-[#c9a227]">●</span> Праца: газета «Голос», «Наша Ніва», губернскі харчовы камітэт у Мінску</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-[24px] overflow-hidden border border-[#c9a227]/25 bg-gradient-to-br from-[#c1272d] to-[#7a1420] p-6 relative">
                <Flower2 className="absolute -right-4 -bottom-4 w-32 h-32 opacity-15" />
                <div className="text-[11px] tracking-[0.25em] uppercase opacity-80">Экспанат-факт</div>
                <p className="font-serif-d text-lg leading-snug mt-2 italic">Багдановіч перакладаў з сямі моў, а беларускую вывучыў па кнігах. Яму было 15, калі «Наша Ніва» надрукавала яго дэбют — апавяданне «Музыка».</p>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="rounded-[24px] bg-[#f6efe1] text-[#15120d] p-6 relative">
                <Quote className="w-8 h-8 text-[#c1272d]" />
                <p className="font-serif-d text-xl leading-snug italic mt-2">«Не пакідайце ж мовы нашай беларускай, каб не ўмёрлі!»</p>
                <div className="text-[12px] text-[#6b6250] mt-2 flex items-center gap-2"><Moon className="w-3.5 h-3.5" /> запавет паэта, 1915</div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="font-serif-d text-2xl md:text-3xl font-bold flex items-center gap-3"><Milestone className="w-7 h-7 text-[#c9a227]" /> Вітрына 1.3 — Храналогія: 7 крокаў да вечнасці</h3>
            <p className="text-[13px] text-[#8f866d] mt-2">Правядзі позіркам лінію часу — ад нараджэння ў Мінску да адзіноты ў Ялце.</p>
          </Reveal>
          <div className="mt-8 relative">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a227] via-[#c9a227]/40 to-transparent" />
            <div className="space-y-5">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={Math.min(i * 50, 250)}>
                  <div className={`relative flex gap-5 md:gap-0 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                    <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-5 w-[17px] h-[17px] rounded-full bg-[#15120d] border-[3px] border-[#c9a227] shadow-[0_0_18px_rgba(201,162,39,.7)] z-10" />
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-32px)] ${i % 2 ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className="rounded-2xl border border-[#c9a227]/20 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#c9a227]/50 transition p-5 md:p-6">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-serif-d text-2xl md:text-3xl font-bold text-[#f0d98c]">{t.year}</span>
                          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-[#c9a227]/15 text-[#f0d98c] border border-[#c9a227]/30">{t.tag}</span>
                        </div>
                        <div className="font-bold mt-2 text-[15px]">{t.title}</div>
                        <p className="text-[13px] md:text-sm text-[#b9ad8d] leading-relaxed mt-2">{t.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
