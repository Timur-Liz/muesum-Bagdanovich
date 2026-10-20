import { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, Award, RotateCcw, Globe2, Feather } from "lucide-react";
import { Reveal, HallPlate } from "../ui";
import { quizQuestions } from "../data";
import { halls } from "../museum";

export default function HallSix({ visited, onFinish }: { visited: boolean; onFinish: (score: number) => void }) {
  const hall = halls[5];
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);

  const next = () => {
    const add = picked === quizQuestions[idx].correct ? 1 : 0;
    const total = score + add;
    setScore(total);
    if (idx + 1 >= quizQuestions.length) { setDone(true); onFinish(total); }
    else { setIdx(idx + 1); setPicked(null); }
  };

  return (
    <section id="hall6" className="paper text-[#15120d] py-16 md:py-24 scroll-mt-16 relative overflow-hidden">
      <div className="ornament-strip absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <HallPlate hall={hall} dark visited={visited} />

        <Reveal>
          <h2 className="font-serif-d text-3xl md:text-5xl font-semibold mt-10 leading-[1.05] max-w-3xl text-[#15120d]">Апошняя зала: <span className="italic text-[#c1272d]">правер сябе</span></h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#5b5340] leading-relaxed">
            Музей не выдае адзнак — ён дае магчымасць пераканацца, што веды засталіся з табой. Віктарына, квэст і заданні для самастойнай працы.
          </p>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[1.1fr_.9fr] gap-6">
          <Reveal>
            <div className="rounded-[24px] bg-[#15120d] text-[#f6efe1] p-6 md:p-8 h-full">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif-d text-2xl font-bold flex items-center gap-2"><HelpCircle className="w-6 h-6 text-[#c9a227]" /> Віктарына • 10 пытанняў</h3>
                {!done && <span className="text-[12px] font-bold text-[#8a7f64]">{idx + 1} / {quizQuestions.length}</span>}
              </div>
              {!done ? (
                <>
                  <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-[#c9a227] transition-all" style={{ width: `${(idx / quizQuestions.length) * 100}%` }} /></div>
                  <div className="mt-6">
                    <div className="font-bold text-[16px] md:text-lg leading-snug min-h-[56px]">{quizQuestions[idx].q}</div>
                    <div className="mt-4 grid gap-2.5">
                      {quizQuestions[idx].options.map((o, i) => {
                        const isCorr = i === quizQuestions[idx].correct;
                        let cls = "border-white/12 bg-white/[0.05] hover:border-[#c9a227]/60";
                        if (picked !== null) {
                          if (isCorr) cls = "border-emerald-400 bg-emerald-400/15";
                          else if (picked === i) cls = "border-[#c1272d] bg-[#c1272d]/20";
                          else cls = "border-white/10 opacity-60";
                        }
                        return (
                          <button key={o} disabled={picked !== null} onClick={() => setPicked(i)} className={`text-left px-4 py-3.5 rounded-xl border text-[14px] font-semibold transition flex items-center justify-between gap-3 ${cls}`}>
                            <span>{o}</span>
                            {picked !== null && isCorr && <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />}
                            {picked === i && !isCorr && <XCircle className="w-5 h-5 text-red-300 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                    {picked !== null && (
                      <div className="mt-4 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/30 p-4 text-[13px] leading-relaxed">
                        <strong className={picked === quizQuestions[idx].correct ? "text-emerald-300" : "text-red-300"}>{picked === quizQuestions[idx].correct ? "Правільна! " : "Не зусім. "}</strong>
                        <span className="text-[#d8cdae]">{quizQuestions[idx].explain}</span>
                        <button onClick={next} className="mt-3 w-full py-3 rounded-xl bg-[#c9a227] text-[#15120d] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#f0d98c] transition">
                          {idx + 1 >= quizQuestions.length ? "Паказаць вынік" : "Наступнае пытанне"} <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="mt-6 text-center py-6">
                  <Award className="w-16 h-16 mx-auto text-[#c9a227]" />
                  <div className="font-serif-d text-5xl font-bold mt-4 text-[#f0d98c]">{score} / {quizQuestions.length}</div>
                  <div className="font-bold text-lg mt-2">{score >= 9 ? "Экскурсавод музея!" : score >= 6 ? "Упэўнены знаўца «Вянка»" : score >= 3 ? "Пачатковец-рамантык" : "Вандроўнік на пачатку шляху"}</div>
                  <p className="text-[13px] text-[#b9ad8d] mt-3 max-w-md mx-auto leading-relaxed">{score >= 9 ? "Ты можаш сам весці экскурсію па залах. Паспрабуй квэст і творчыя заданні справа." : "Вярніся ў залы 1–2, перачытай вершы і паспрабуй зноў — «Вянок» адкрываецца паступова."}</p>
                  <button onClick={() => { setIdx(0); setScore(0); setDone(false); setPicked(null); }} className="mt-5 px-6 py-3 rounded-full border border-[#c9a227]/40 font-bold text-sm flex items-center gap-2 mx-auto hover:bg-[#c9a227] hover:text-[#15120d] transition"><RotateCcw className="w-4 h-4" /> Прайсці зноў</button>
                </div>
              )}
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={100}>
              <div className="rounded-[24px] border border-[#15120d]/15 bg-white p-6 md:p-7">
                <h4 className="font-serif-d text-xl font-bold flex items-center gap-2"><Globe2 className="w-5 h-5" /> Квэст «Збяры вянок»</h4>
                <ol className="mt-4 space-y-3 text-[13px] leading-relaxed">
                  {[
                    "Знайдзі ў зале 2 слуцкі пояс. Якая кветка там «лішняя»? Падпішы яе радкамі з верша.",
                    "Запішы 30-секунднае чытанне «Пагоні» як дыктар і як ваяр. Якая версія мацнейшая і чаму?",
                    "На карце залы 4 прайдзі маршрут Мінск → Гродна → Вільня і выпішы па 2 даты для кожнага горада.",
                    "Знайдзі дома прадмет з беларускім арнаментам і прыдумай да яго чатырохрадкоўе ў стылі Багдановіча.",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-3 rounded-xl bg-[#f7f1e1] border border-[#15120d]/10 p-3.5"><span className="w-7 h-7 shrink-0 rounded-full bg-[#15120d] text-[#f0d98c] grid place-items-center text-[12px] font-bold">{i + 1}</span><span>{s}</span></li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-[24px] bg-gradient-to-br from-[#c1272d] to-[#6e1420] text-white p-6 md:p-7">
                <h4 className="font-serif-d text-xl font-bold flex items-center gap-2"><Feather className="w-5 h-5" /> 5 літаратурных заданняў</h4>
                <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed">
                  <li><strong>Памяць:</strong> вывучы страфу «Зоркі Венеры» і растлумач, да каго яна звернута.</li>
                  <li><strong>Увага да слова:</strong> знайдзі ў «Ткачыхах» 4 колеры — што сімвалізуе кожны?</li>
                  <li><strong>Параўнанне:</strong> супастаў верш «Пагоня» і герб Пагоня: што агульнага ў рытме і руху?</li>
                  <li><strong>Пераклад:</strong> перакладзі страфу на рускую ці англійскую. Што страцілася?</li>
                  <li><strong>Творчасць:</strong> напішы сінквейн «Вянок» і дашлі ў залу 5.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="ornament-strip absolute bottom-0 inset-x-0" />
    </section>
  );
}
