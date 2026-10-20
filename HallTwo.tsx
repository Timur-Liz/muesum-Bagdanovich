import { useState } from "react";
import { Library, Palette, Lightbulb, Heart, ScrollText, Feather, Play, Square, ExternalLink, Eye, Sparkles, PenLine, Flower2 } from "lucide-react";
import { Reveal, HallPlate, speakText, stopSpeak } from "../ui";
import { poems } from "../data";
import { halls } from "../museum";

export default function HallTwo({ visited }: { visited: boolean }) {
  const hall = halls[1];
  const [activePoem, setActivePoem] = useState(poems[1].id);
  const [speaking, setSpeaking] = useState(false);
  const poem = poems.find(p => p.id === activePoem)!;

  return (
    <section id="hall2" className="paper text-[#15120d] py-16 md:py-24 relative scroll-mt-16 overflow-hidden">
      <div className="ornament-strip absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <HallPlate hall={hall} dark visited={visited} />

        <Reveal>
          <h2 className="font-serif-d text-3xl md:text-5xl font-semibold mt-10 leading-[1.05] max-w-3xl text-[#15120d]">
            Кніга ў 120 старонак, <span className="italic text-[#c1272d]">што перамагла стагоддзе</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#5b5340] leading-relaxed">
            Цэнтральная зала музея. Тут захоўваецца тое, дзеля чаго створана ўся экспазіцыя: адзіны прыжыццёвы зборнік, яго гісторыя і — галоўнае — самі вершы, якія можна прачытаць, паслухаць і разабраць.
          </p>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[.9fr_1.1fr] gap-6 items-stretch">
          <Reveal>
            <div className="rounded-[24px] overflow-hidden border border-[#15120d]/15 shadow-xl bg-white h-full flex flex-col">
              <div className="relative">
                <img src="/images/vianok.jpg" alt="Зборнік «Вянок», Вільня 1913" className="w-full aspect-[16/10] object-cover" />
                <span className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#15120d]/85 text-[#f0d98c] text-[11px] font-bold tracking-widest uppercase backdrop-blur">Экспанат 2.1 • факсіміле выдання 1913 г.</span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-serif-d text-2xl font-bold">Пашпарт «Вянка»</h3>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
                  {[["Выдавец", "Друкарня Марціна Кухты, Вільня"], ["Мецэнат", "Магдалена Радзівіл"], ["Тыраж", "2000 асобнікаў"], ["Аб'ём", "92 вершы + 2 паэмы"], ["Цыклы", "«Малюнкі і спевы», «Думы», «Мадонны»"], ["Прысвячэнне", "С. Палуяну (пам. 1910)"]].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-[#15120d]/[0.04] border border-[#15120d]/10 p-3"><dt className="text-[11px] uppercase tracking-widest text-[#8a7f64]">{k}</dt><dd className="font-bold mt-1 leading-snug">{v}</dd></div>
                  ))}
                </dl>
                <div className="mt-5 rounded-2xl bg-[#15120d] text-[#f6efe1] p-5 flex gap-4">
                  <ScrollText className="w-8 h-8 shrink-0 text-[#c9a227]" />
                  <p className="text-[13px] leading-relaxed italic">«…не грамадскія тэмы займаюць галоўным чынам паэта: ён перш за ўсё шукае чыстае красы» — <strong>Антон Луцкевіч</strong>, першая рэцэнзія на «Вянок», 1914.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[24px] bg-[#15120d] text-[#f6efe1] p-6 md:p-8 h-full flex flex-col">
              <h3 className="font-serif-d text-2xl font-bold flex items-center gap-2"><Library className="w-6 h-6 text-[#c9a227]" /> Экспанат 2.2 — Тры нізкі, тры светы</h3>
              <div className="mt-5 grid gap-4">
                {[
                  { t: "«Малюнкі і спевы»", d: "Імпрэсіянізм: прырода, горад, музыка. Тут «Зорка Венера» і «Слуцкія ткачыхі». Паэт-мастак малюе словам.", i: Palette },
                  { t: "«Думы»", d: "Філасофія і грамадзянскасць: «Краю мой родны…», «Эмігранцкая песня». Роздум пра долю народа і прызначэнне мастака.", i: Lightbulb },
                  { t: "«Мадонны»", d: "Каханне-паклон: паэмы «У вёсцы» і «Вераніка», прысвечаныя Ганне Какуевай. Беларускі петраркізм.", i: Heart },
                ].map(c => (
                  <div key={c.t} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 hover:border-[#c9a227]/50 transition">
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-[#c9a227] text-[#15120d] grid place-items-center"><c.i className="w-5 h-5" /></span>
                    <div><div className="font-bold">{c.t}</div><p className="text-[13px] text-[#b9ad8d] mt-1 leading-relaxed">{c.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[["Санет", "вяршыня формы"], ["Трыялет", "музыка паўтораў"], ["Рандо", "кола вечнасці"]].map(([a, b]) => (
                  <div key={a} className="rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/25 p-3"><div className="font-serif-d font-bold text-lg text-[#f0d98c]">{a}</div><div className="text-[11px] text-[#b9ad8d]">{b}</div></div>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-[#8a7f64]">Паводле А. Лойкі, «Вянок» стаў «універсітэтам класічнай паэтыкі» для ўсёй беларускай літаратуры.</p>
            </div>
          </Reveal>
        </div>

        {/* Чытальня */}
        <Reveal>
          <div className="mt-8 flex items-end justify-between gap-4 flex-wrap">
            <h3 className="font-serif-d text-2xl md:text-3xl font-bold flex items-center gap-2"><Feather className="w-6 h-6 text-[#c1272d]" /> Экспанат 2.3 — Чытальня з аналізам</h3>
            <span className="text-[12px] text-[#8a7f64]">выберы верш → прачытай → разбяры тэму, ідэю і сродкі</span>
          </div>
        </Reveal>
        <div className="mt-4 rounded-[24px] border border-[#15120d]/15 bg-white overflow-hidden">
          <div className="flex flex-wrap gap-2 p-4 md:p-5 border-b border-[#15120d]/10 bg-[#fbf7ec]">
            {poems.map(p => (
              <button key={p.id} onClick={() => { setActivePoem(p.id); stopSpeak(); setSpeaking(false); }}
                className={`px-4 py-2.5 rounded-full text-[13px] font-bold transition border ${activePoem === p.id ? "bg-[#15120d] text-[#f0d98c] border-[#15120d]" : "bg-white text-[#15120d] border-[#15120d]/15 hover:border-[#15120d]"}`}>
                {p.title} <span className="opacity-60 font-normal">• {p.year}</span>
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-[1fr_.95fr]">
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#8a7f64]"><Feather className="w-4 h-4" /> {poem.cycle} • {poem.year}</div>
              <h4 className="font-serif-d text-3xl md:text-5xl font-bold mt-2">{poem.title}</h4>
              {poem.epigraph && <div className="mt-2 text-[13px] italic text-[#8a7f64]">{poem.epigraph}</div>}
              <div className="mt-5 flex gap-2 flex-wrap">
                <button onClick={() => { if (speaking) { stopSpeak(); setSpeaking(false); } else { speakText(poem.title + ". " + poem.text); setSpeaking(true); } }}
                  className="px-4 py-2.5 rounded-full bg-[#c1272d] text-white text-[13px] font-bold flex items-center gap-2 hover:bg-[#a01f24] transition">
                  {speaking ? <><Square className="w-4 h-4" /> Спыніць чытанне</> : <><Play className="w-4 h-4" /> Слухаць верш</>}
                </button>
                <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent("Багдановіч " + poem.title)}`} target="_blank" rel="noreferrer"
                  className="px-4 py-2.5 rounded-full border border-[#15120d]/20 text-[13px] font-bold flex items-center gap-2 hover:bg-[#15120d] hover:text-white transition"><ExternalLink className="w-4 h-4" /> Знайсці спеў</a>
              </div>
              <div className="mt-6 poem-text font-serif-d text-[17px] md:text-[19px] leading-[1.9] text-[#221d12] bg-[#fdfaf1] border border-[#15120d]/10 rounded-2xl p-6 md:p-8 shadow-inner">{poem.text}</div>
            </div>
            <div className="bg-[#15120d] text-[#f6efe1] p-6 md:p-10 flex flex-col gap-4">
              <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c9a227]">Этыкетка экспаната • аналіз</div>
              {[
                ["Тэма", poem.theme, Eye],
                ["Ідэя", poem.idea, Lightbulb],
                ["Мастацкія сродкі", poem.means, Palette],
                ["Цікавы факт", poem.fact, Sparkles],
              ].map(([t, d, Icon]: any) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="flex items-center gap-2 font-bold text-[14px] text-[#f0d98c]"><Icon className="w-4 h-4" /> {t}</div>
                  <p className="text-[13px] text-[#d8cdae] leading-relaxed mt-2">{d}</p>
                </div>
              ))}
              <div className="mt-auto rounded-2xl bg-[#c9a227] text-[#15120d] p-5">
                <div className="font-bold text-sm flex items-center gap-2"><PenLine className="w-4 h-4" /> Заданне каля экспаната</div>
                <p className="text-[13px] mt-1 leading-relaxed">Выпішы 3 эпітэты і 1 метафару. Як яны ствараюць вобраз Радзімы? Сваю інтэрпрэтацыю дашлі ў залу 5 «Багдановіч сёння».</p>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5 items-stretch">
            <div className="rounded-[24px] overflow-hidden relative min-h-[280px] group">
              <img src="/images/slutsk.jpg" alt="Слуцкія ткачыхі — мастацкая інтэрпрэтацыя" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15120d]/90 via-[#15120d]/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <div className="text-[11px] tracking-[0.25em] uppercase text-[#f0d98c]">Экспанат 2.4 • «Старая Беларусь», 1912</div>
                <div className="font-serif-d text-2xl font-bold text-white">«Заміж персідскага ўзора — цвяток радзімы васілька»</div>
              </div>
            </div>
            <div className="rounded-[24px] bg-[#3a5fbf] text-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
              <Flower2 className="absolute -right-6 -top-6 w-40 h-40 opacity-20" />
              <h4 className="font-serif-d text-2xl font-bold">Чаму гэты вянок не вяне?</h4>
              <ul className="mt-4 space-y-2.5 text-[13px] md:text-sm leading-relaxed">
                <li>✦ Першы ўзор еўрапейскай формы па-беларуску: санет, трыялет, рандо, актава</li>
                <li>✦ «Каваная» мова: сотні новых паэтычных словазлучэнняў увайшлі ў літаратуру</li>
                <li>✦ Універсальнасць: ад вясковай ткачыхі да зорнага неба — адзін вянок сэнсаў</li>
                <li>✦ 2-е выданне — Вільня, 1927; факсіміле — Мінск, 1981 і 1985; перамога ў праекце «100 кніг ХХ ст.» (2000)</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="ornament-strip absolute bottom-0 inset-x-0" />
    </section>
  );
}
