import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Target, Layers } from "lucide-react";
import type { Hall } from "./museum";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${vis ? "visible" : ""} ${className}`}>{children}</div>;
}

/** Таблічка каля ўвахода ў залу: нумар, назва, змест, вынік для наведвальніка */
export function HallPlate({ hall, dark = false, visited = false }: { hall: Hall; dark?: boolean; visited?: boolean }) {
  return (
    <Reveal>
      <div className={`rounded-[26px] border overflow-hidden ${dark ? "bg-white/70 border-[#15120d]/12" : "bg-white/[0.05] border-white/12"} backdrop-blur`}>
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${hall.accent}, transparent)` }} />
        <div className="p-5 md:p-7 grid lg:grid-cols-[auto_1fr_1fr] gap-5 lg:gap-8 items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl grid place-items-center font-serif-d font-bold text-3xl md:text-4xl border-2"
              style={{ borderColor: hall.accent, color: hall.accent, background: dark ? "rgba(21,18,13,.04)" : "rgba(255,255,255,.04)" }}>
              {hall.num}
            </div>
            <div className="lg:hidden">
              <div className={`text-[10px] tracking-[0.28em] uppercase ${dark ? "text-[#8a7f64]" : "text-[#8a7f64]"}`}>Зала {hall.num}</div>
              <div className={`font-serif-d text-2xl font-bold leading-tight ${dark ? "text-[#15120d]" : "text-[#f6efe1]"}`}>«{hall.name}»</div>
            </div>
          </div>
          <div>
            <div className="hidden lg:block text-[10px] tracking-[0.28em] uppercase text-[#8a7f64]">Зала {hall.num} • {hall.minutes} хв</div>
            <div className={`hidden lg:block font-serif-d text-[26px] font-bold leading-tight ${dark ? "text-[#15120d]" : "text-[#f6efe1]"}`}>«{hall.name}»</div>
            <div className={`mt-3 flex items-start gap-2 text-[13px] leading-relaxed ${dark ? "text-[#4a4335]" : "text-[#cdc3a9]"}`}>
              <Layers className="w-4 h-4 mt-0.5 shrink-0" style={{ color: hall.accent }} />
              <span><strong className={dark ? "text-[#15120d]" : "text-[#f6efe1]"}>Змест: </strong>{hall.content}</span>
            </div>
          </div>
          <div className={`rounded-2xl p-4 ${dark ? "bg-[#15120d] text-[#f6efe1]" : "bg-[#f6efe1] text-[#15120d]"}`}>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: hall.accent }}>
              <Target className="w-3.5 h-3.5" /> Вынік для наведвальніка
            </div>
            <div className="text-[14px] font-semibold leading-snug mt-1.5">{hall.result}</div>
            {visited && <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30"><CheckCircle2 className="w-3 h-3" /> зала наведана</div>}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function speakText(text: string) {
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.slice(0, 900));
    u.lang = "be-BY"; u.rate = 0.92;
    window.speechSynthesis.speak(u);
  } catch { /* noop */ }
}
export function stopSpeak() { try { window.speechSynthesis.cancel(); } catch { /* noop */ } }

/** Назіральнік наведвання залы */
export function useHallVisit(id: string, onVisit: (id: string) => void) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && e.intersectionRatio > 0.25) onVisit(id); }, { threshold: [0.25] });
    obs.observe(el);
    return () => obs.disconnect();
  }, [id, onVisit]);
  return ref;
}
