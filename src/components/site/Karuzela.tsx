import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Karuzela({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const przewin = (kierunek: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: kierunek * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {children}
      </div>
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          aria-label="Poprzednie"
          onClick={() => przewin(-1)}
          className="grid h-11 w-11 place-items-center rounded-sm border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Następne"
          onClick={() => przewin(1)}
          className="grid h-11 w-11 place-items-center rounded-sm border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
