import { useState } from "react";
import { MapPin, Church } from "lucide-react";
import { Reveal, HallPlate } from "../ui";
import { geoPoints } from "../data";
import { halls } from "../museum";

export default function HallFour({ visited }: { visited: boolean }) {
  const hall = halls[3];
  const [idx, setIdx] = useState(0);
  const geo = geoPoints[idx];

  return (
    <section id="hall4" className="paper text-[#15120d] py-16 md:py-24 scroll-mt-16 relative overflow-hidden">
      <div className="ornament-strip absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <HallPlate hall={hall} dark visited={visited} />

        <Reveal>
          <h2 className="font-serif-d text-3xl md:text-5xl font-semibold mt-10 leading-[1.05] max-w-3xl text-[#15120d]">Шэсць гарадоў — <span className="italic text-[#3a5fbf]">адзін вянок</span></h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[#5b5340] leading-relaxed">
            Багдановіч амаль усё жыццё быў удалечыні ад Беларусі. Карта тлумачыць галоўны парадокс: радзіма для яго была не месцам, а вобразам, які трэба было ўтрымаць у слове.
          </p>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[1.05fr_.95fr] gap-6">
          <Reveal>
            <div className="rounded-[24px] bg-[#15120d] text-white p-5 md:p-7 relative overflow-hidden h-full">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c9a227]">Інтэрактыўная карта • 1891–1917</div>
                <div className="text-[11px] text-[#8a7f64]">націсні на кропку</div>
              </div>
              <svg viewBox="0 0 100 100" className="w-full aspect-[10/8] mt-3">
                <defs><pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.5" fill="rgba(240,217,140,.18)" /></pattern></defs>
                <rect width="100" height="100" fill="url(#dots)" rx="12" />
                <path d="M10 70 Q30 62 45 68 T85 60" stroke="#3a5fbf" strokeWidth="1.2" fill="none" opacity="0.6" strokeDasharray="3 2" />
                <path d="M70 10 Q74 30 70 55 Q68 75 60 92" stroke="#3a5fbf" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3 2" />
                <path d="M44 42 L24 48 L78 38 L74 28 L32 36 L44 42 L56 78" stroke="#c9a227" strokeWidth="1.4" fill="none" strokeDasharray="4 3" opacity="0.9" />
                {geoPoints.map((g, i) => (
                  <g key={g.city} onClick={() => setIdx(i)} className="cursor-pointer">
                    <circle cx={g.coords.x} cy={g.coords.y} r={i === idx ? 5 : 3.4} fill={i === idx ? "#c9a227" : "#f6efe1"} stroke="#15120d" strokeWidth="1" />
                    {i === idx && <circle cx={g.coords.x} cy={g.coords.y} r="5" fill="none" stroke="#c9a227" strokeWidth="1"><animate attributeName="r" values="5;10" dur="1.6s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.9;0" dur="1.6s" repeatCount="indefinite" /></circle>}
                    <text x={g.coords.x} y={g.coords.y - 7} textAnchor="middle" fill={i === idx ? "#f0d98c" : "#cdc3a9"} fontSize="4.2" fontWeight="700">{g.city}</text>
                    <text x={g.coords.x} y={g.coords.y + 10.5} textAnchor="middle" fill="#8a7f64" fontSize="2.8">{g.years.split("•")[0]}</text>
                  </g>
                ))}
              </svg>
              <div className="mt-2 flex flex-wrap gap-2">
                {geoPoints.map((g, i) => (
                  <button key={g.city} onClick={() => setIdx(i)} className={`px-3.5 py-2 rounded-full text-[12px] font-bold border transition ${i === idx ? "bg-[#c9a227] text-[#15120d] border-[#c9a227]" : "border-white/15 text-[#d8cdae] hover:border-[#c9a227]/60"}`}>{g.city}</button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[24px] overflow-hidden border border-[#15120d]/15 bg-white shadow-xl h-full flex flex-col">
              <div className="relative h-52 md:h-60">
                <img src={geo.photo} alt={geo.photoAlt} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15120d]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#f0d98c]">{geo.years}</div>
                    <div className="font-serif-d text-3xl md:text-4xl font-bold text-white">{geo.city}</div>
                    <div className="text-[13px] text-white/80 italic">{geo.short}</div>
                  </div>
                  <div className="flex gap-1.5">
                    <button onClick={() => setIdx((idx - 1 + geoPoints.length) % geoPoints.length)} className="w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/25 grid place-items-center text-white hover:bg-[#c9a227] hover:text-[#15120d] transition">←</button>
                    <button onClick={() => setIdx((idx + 1) % geoPoints.length)} className="w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/25 grid place-items-center text-white hover:bg-[#c9a227] hover:text-[#15120d] transition">→</button>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <p className="text-[14px] leading-relaxed text-[#3a3426]">{geo.text}</p>
                <div className="mt-4 rounded-2xl bg-[#f3ead3] border border-[#c9a227]/30 p-4 flex gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-[#c1272d]" />
                  <div className="text-[13px]"><strong>Што паглядзець сёння:</strong> {geo.visit}</div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[12px] text-[#8a7f64]">
                  <span>экспанат {idx + 1} з {geoPoints.length}</span>
                  <span className="flex gap-1.5">{geoPoints.map((_, i) => <span key={i} className={`w-6 h-1.5 rounded-full ${i === idx ? "bg-[#c9a227]" : "bg-[#15120d]/10"}`} />)}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-6 rounded-[24px] bg-[#e9dcc0] border border-[#15120d]/10 p-5 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="w-11 h-11 shrink-0 rounded-xl bg-[#15120d] text-[#f0d98c] grid place-items-center"><Church className="w-5 h-5" /></span>
            <p className="text-[13px] md:text-sm leading-relaxed"><strong>Маршрут выхаднога дня для класа:</strong> Мінск (музей на вул. Багдановіча, 7а → Траецкае прадмесце) → Гродна (дом-музей на вул. 1 Мая, 10 → Нёман) → Вільня (Вострая Брама → Роса). Тры дні — і ты прайшоў дарогамі «Вянка».</p>
          </div>
        </Reveal>
      </div>
      <div className="ornament-strip absolute bottom-0 inset-x-0" />
    </section>
  );
}
