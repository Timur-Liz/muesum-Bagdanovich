import { useEffect, useState } from "react";
import { Landmark, MapPin, Music, Palette, PenLine, Send, Heart, Trash2, ArrowRight } from "lucide-react";
import { Reveal, HallPlate } from "../ui";
import { memoryCards } from "../data";
import { halls } from "../museum";

type Work = { name: string; type: string; text: string; likes: number };

const seed: Work[] = [
  { name: "Алеся, 9 клас, Мінск", type: "Верш-прысвячэнне", text: "Ты — зорка, што не гасне ўночы,\nТы — васількоў нябёсны спеў.\nДваццаць пяць вёснаў — як адзін дзень,\nАле святло тваё — навек.", likes: 24 },
  { name: "Цімафей, 7 клас, Гродна", type: "Малюнак-апісанне", text: "Намаляваў Нёман у тумане і хлопчыка з кніжкай на беразе. Уверсе — вялікая залатая Венера. Настаўніца сказала: «Гэта Максім слухае казкі бацькі».", likes: 18 },
  { name: "Школьны тэатр «Вянок», Яраслаўль", type: "Відэачытанне", text: "Паставілі кампазіцыю «Мадонны»: чыталі «Вераніку» пад скрыпку, паказвалі лісты да Ганны Какуевай. Запіс захоўваецца ў музеі школы.", likes: 31 },
];

export default function HallFive({ visited }: { visited: boolean }) {
  const hall = halls[4];
  const [works, setWorks] = useState<Work[]>(() => {
    try { return JSON.parse(localStorage.getItem("vianok_works") || "null") || seed; } catch { return seed; }
  });
  const [form, setForm] = useState({ name: "", type: "Верш-прысвячэнне", text: "" });
  useEffect(() => { localStorage.setItem("vianok_works", JSON.stringify(works)); }, [works]);

  return (
    <section id="hall5" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <HallPlate hall={hall} visited={visited} />

        <Reveal>
          <h2 className="font-serif-d text-3xl md:text-5xl font-semibold mt-10 leading-[1.05] max-w-3xl">Паэт жыве ў муралах, песнях <span className="gold-text italic">і школьных сшытках</span></h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#cdc3a9] leading-relaxed">
            Гэтая зала пастаянна мяняецца, бо яе ствараеш ты. Вянок не вяне, пакуль у яго ўплятаюць новыя лісткі — уласныя інтэрпрэтацыі кожнага пакалення.
          </p>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {memoryCards.map((m, i) => (
            <Reveal key={m.title} delay={i * 60}>
              <div className="ink-card rounded-[22px] p-6 h-full hover:-translate-y-1 hover:border-[#c9a227]/60 transition">
                <span className="w-11 h-11 rounded-xl bg-[#c9a227]/15 border border-[#c9a227]/30 grid place-items-center text-[#f0d98c]">
                  {m.icon === "museum" ? <Landmark className="w-5 h-5" /> : m.icon === "street" ? <MapPin className="w-5 h-5" /> : m.icon === "music" ? <Music className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
                </span>
                <h4 className="font-serif-d text-xl font-bold mt-4">{m.title}</h4>
                <p className="text-[13px] text-[#b9ad8d] leading-relaxed mt-2">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          {[
            { t: "«Пагоня» — голас 2020-х", d: "Шматтысячны хор на вакзале, у метро і філармоніі. Верш 1916 года загучаў як сучасны.", tag: "відэа • гісторыя" },
            { t: "Каверы: Nizkiz, Dzieciuki, NaviBand", d: "Рок- і фолк-версіі «Зоркі» і «Ткачых» на фестывалях побач з сучбелам.", tag: "музыка • стрымінг" },
            { t: "Опера, муралы, маркі", d: "«Зорка Венера» Ю. Семянякі ў Оперным, мурал у Мінску, юбілейныя манеты і маркі.", tag: "сцэна • горад" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(c.t + " Багдановіч")}`} target="_blank" rel="noreferrer" className="block rounded-[22px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 hover:border-[#c9a227]/50 transition group h-full">
                <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#c9a227]">{c.tag}</div>
                <div className="font-serif-d text-xl font-bold mt-2 group-hover:text-[#f0d98c] transition">{c.t}</div>
                <p className="text-[13px] text-[#b9ad8d] mt-2 leading-relaxed">{c.d}</p>
                <div className="mt-4 text-[12px] font-bold flex items-center gap-1.5 text-[#f0d98c]">Глядзець і слухаць <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" /></div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-[.9fr_1.1fr] gap-6">
          <Reveal>
            <div className="paper text-[#15120d] rounded-[24px] p-6 md:p-8 h-full">
              <h3 className="font-serif-d text-2xl md:text-3xl font-bold flex items-center gap-2"><PenLine className="w-6 h-6" /> Дадай свой лісток у вянок</h3>
              <p className="text-[13px] text-[#6b6250] mt-2">Верш, малюнак-апісанне, эсэ, відэачытанне ці кавер. Твая работа становіцца экспанатам залы.</p>
              <div className="mt-5 space-y-3">
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Імя, клас, горад (напр.: Маша, 8 клас, Віцебск)" className="w-full px-4 py-3 rounded-xl border border-[#15120d]/15 bg-white text-sm outline-none focus:border-[#c9a227]" />
                <div className="flex gap-2 flex-wrap">
                  {["Верш-прысвячэнне", "Малюнак-апісанне", "Эсэ", "Відэачытанне", "Кавер"].map(t => (
                    <button key={t} onClick={() => setForm({ ...form, type: t })} className={`px-3 py-1.5 rounded-full text-[12px] font-bold border ${form.type === t ? "bg-[#15120d] text-[#f0d98c] border-[#15120d]" : "border-[#15120d]/15 hover:border-[#15120d]"}`}>{t}</button>
                  ))}
                </div>
                <textarea value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} rows={5} placeholder="Твой твор або апісанне работы…" className="w-full px-4 py-3 rounded-xl border border-[#15120d]/15 bg-white text-sm outline-none focus:border-[#c9a227] resize-none" />
                <button onClick={() => { if (!form.name.trim() || !form.text.trim()) return; setWorks([{ ...form, likes: 0 }, ...works]); setForm({ name: "", type: "Верш-прысвячэнне", text: "" }); }} className="w-full py-3.5 rounded-xl bg-[#c1272d] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#a01f24] transition"><Send className="w-4 h-4" /> Апублікаваць у галерэі</button>
                <p className="text-[11px] text-[#8a7f64]">Работы захоўваюцца ў тваім браўзеры — настаўнік можа сабраць лепшае ў школьную выставу.</p>
              </div>
            </div>
          </Reveal>
          <div className="space-y-4 max-h-[660px] overflow-y-auto pr-1">
            {works.map((w, i) => (
              <Reveal key={i} delay={Math.min(i * 40, 160)}>
                <div className="rounded-[22px] border border-[#c9a227]/25 bg-white/[0.05] p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-[15px]">{w.name}</div>
                      <div className="text-[11px] font-bold tracking-widest uppercase text-[#c9a227] mt-1">{w.type}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setWorks(works.map((x, xi) => xi === i ? { ...x, likes: (x.likes || 0) + 1 } : x))} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c1272d]/15 border border-[#c1272d]/30 text-[12px] font-bold hover:bg-[#c1272d] hover:text-white transition"><Heart className="w-3.5 h-3.5" /> {w.likes || 0}</button>
                      {i >= 3 && <button onClick={() => setWorks(works.filter((_, xi) => xi !== i))} className="w-8 h-8 grid place-items-center rounded-full border border-white/15 hover:bg-white/10"><Trash2 className="w-3.5 h-3.5" /></button>}
                    </div>
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#e6dcc2] whitespace-pre-line font-serif-d italic">«{w.text}»</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
