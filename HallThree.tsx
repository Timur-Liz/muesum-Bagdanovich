import { useEffect, useState } from "react";
import { Play, Square, Mic, Guitar, ExternalLink, Drama, Volume2 } from "lucide-react";
import { Reveal, HallPlate, speakText, stopSpeak } from "../ui";
import { audioTracks, poems } from "../data";
import { halls } from "../museum";

export default function HallThree({ visited }: { visited: boolean }) {
  const hall = halls[2];
  const [playing, setPlaying] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (playing === null) { setProgress(0); return; }
    const id = setInterval(() => setProgress(p => (p >= 100 ? 0 : p + 0.6)), 60);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <section id="hall3" className="py-16 md:py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #f0d98c 1px, transparent 0)", backgroundSize: "26px 26px" }} />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <HallPlate hall={hall} visited={visited} />

        <Reveal>
          <h2 className="font-serif-d text-3xl md:text-5xl font-semibold mt-10 leading-[1.05] max-w-3xl">Націсні «play» — і верш <span className="gold-text italic">ажыве</span></h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#cdc3a9] leading-relaxed">
            Паэзія Багдановіча стваралася для вуха: яна поўная паўтораў, рэфрэнаў і ўнутранай музыкі. Таму дзясяткі яго вершаў сталі песнямі, якія спяваюць як народныя.
          </p>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[1fr_.85fr] gap-6">
          <div className="grid gap-4">
            {audioTracks.map((t, i) => (
              <Reveal key={t.title} delay={Math.min(i * 40, 200)}>
                <div className={`rounded-2xl border p-4 md:p-5 flex gap-4 items-center transition ${playing === i ? "border-[#c9a227] bg-[#c9a227]/10 shadow-[0_0_30px_rgba(201,162,39,.25)]" : "border-white/10 bg-white/[0.04] hover:border-white/25"}`}>
                  <button onClick={() => setPlaying(playing === i ? null : i)} className={`w-12 h-12 shrink-0 rounded-full grid place-items-center transition ${playing === i ? "bg-[#c9a227] text-[#15120d]" : "bg-white/10 text-white hover:bg-[#c9a227] hover:text-[#15120d]"}`}>
                    {playing === i ? <Square className="w-5 h-5" fill="currentColor" /> : <Play className="w-5 h-5 ml-0.5" fill="currentColor" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[15px]">{t.title}</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#c1272d]/20 text-[#ff9a9e] border border-[#c1272d]/40">{t.tag}</span>
                      <span className="text-[11px] text-[#8a7f64] ml-auto">{t.duration}</span>
                    </div>
                    <div className="text-[12px] text-[#b9ad8d] mt-0.5">{t.artist}</div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-gradient-to-r from-[#c9a227] to-[#f0d98c] rounded-full transition-all" style={{ width: playing === i ? `${progress}%` : "0%" }} /></div>
                    <p className="text-[12px] text-[#8f866d] mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                  <button onClick={() => speakText(t.title + ". " + (poems[i % poems.length]?.text || ""))} title="Прачытаць сінтэзатарам маўлення" className="hidden sm:grid w-10 h-10 shrink-0 rounded-xl border border-white/15 place-items-center hover:bg-white/10"><Mic className="w-4 h-4" /></button>
                </div>
              </Reveal>
            ))}
            <p className="text-[12px] text-[#8a7f64]">* Плэер залы — дэманстрацыйны, сінтэз голасу працуе проста ў браўзеры. Студыйныя запісы — па спасылках справа.</p>
          </div>

          <div className="space-y-5">
            <Reveal delay={100}>
              <div className="rounded-[24px] bg-gradient-to-br from-[#201b12] to-[#2b1a1a] border border-[#c9a227]/25 p-6 md:p-8">
                <h3 className="font-serif-d text-2xl font-bold flex items-center gap-2"><Guitar className="w-6 h-6 text-[#c9a227]" /> Фанатэка музея</h3>
                <div className="mt-5 grid gap-3">
                  {[
                    ["«Слуцкія ткачыхі» — «Песняры»", "Фолк-рок балада У. Мулявіна, якую ведае кожны", "Слуцкія ткачыхі Песняры"],
                    ["«Пагоня» — хор a cappella", "Музыка М. Шчаглова-Куліковіча, сучасныя рок-версіі", "Пагоня Багдановіч песня"],
                    ["«Зорка Венера» — раманс і опера", "Камерны раманс і арыя з оперы Ю. Семянякі", "Зорка Венера Багдановіч песня"],
                    ["Чытае Віктар Манаеў", "Эталонная дэкламацыя акцёра Купалаўскага тэатра", "Зорка Венера чытае Манаеў"],
                  ].map(([t, d, q]) => (
                    <a key={t} href={`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/[0.05] border border-white/10 p-4 hover:border-[#c9a227]/60 hover:bg-white/[0.08] transition group">
                      <span className="w-10 h-10 shrink-0 rounded-full bg-[#c1272d] grid place-items-center text-white"><Play className="w-4 h-4 ml-0.5" fill="currentColor" /></span>
                      <span className="flex-1"><span className="block font-bold text-[14px]">{t}</span><span className="block text-[12px] text-[#b9ad8d]">{d}</span></span>
                      <ExternalLink className="w-4 h-4 text-[#c9a227] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-[24px] paper text-[#15120d] p-6 md:p-8">
                <h4 className="font-serif-d text-xl font-bold flex items-center gap-2"><Drama className="w-5 h-5" /> Інтэрактыў «Голас паэта»</h4>
                <ol className="mt-3 space-y-2 text-[13px] leading-relaxed list-decimal list-inside">
                  <li>Прачытай «Зорку Венеру» шэптам, потым уголас, потым — як навіну.</li>
                  <li>Запішы сябе на тэлефон і параўнай з чытаннем В. Манаева.</li>
                  <li>Дзе ты зрабіў паўзу? Там — сэрца верша. Растлумач чаму.</li>
                </ol>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <button onClick={() => speakText(poems[0].text)} className="px-4 py-2 rounded-full bg-[#15120d] text-[#f0d98c] text-[12px] font-bold flex items-center gap-2"><Volume2 className="w-4 h-4" /> Паказальны тэмп</button>
                  <button onClick={stopSpeak} className="px-4 py-2 rounded-full border border-[#15120d]/20 text-[12px] font-bold">Спыніць</button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
