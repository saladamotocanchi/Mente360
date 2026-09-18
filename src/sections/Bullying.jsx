import { useState } from "react";
import { ArrowLeft, Eye, Shield, Users, Heart } from "lucide-react";
import ReconocerSenales from "./Bullying/ReconocerSenales/ReconocerSenales";
import QueHacer from "./Bullying/QueHacer/QueHacer";
import PedirAyuda from "./Bullying/PedirAyuda/PedirAyuda";
import Acompanamiento from "./Bullying/Acompanamiento/Acompanamiento";

const cards = [
  {
    title: "Reconocer señales",
    text: "Aprende a identificar situaciones de riesgo.",
    icon: Eye,
    bg: "#edf8ff",
    iconBg: "#d9efff",
    iconColor: "#4d79c7",
  },
  {
    title: "Qué hacer",
    text: "Toma decisiones seguras y protege tu bienestar.",
    icon: Shield,
    bg: "#f3efff",
    iconBg: "#e8e1ff",
    iconColor: "#6557c7",
  },
  {
    title: "Pedir ayuda",
    text: "No estás solo/a, puedes hablar con alguien.",
    icon: Users,
    bg: "#effaf2",
    iconBg: "#dff3e5",
    iconColor: "#4c9b68",
  },
  {
    title: "Acompañar a alguien",
    text: "Escucha, apoya y haz la diferencia.",
    icon: Heart,
    bg: "#fff0f7",
    iconBg: "#ffddec",
    iconColor: "#c65c91",
  },
];

function ShieldIllustration() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "230px",
        height: "150px",
        margin: "0 auto",
      }}
    >
      <span style={{ position: "absolute", top: 10, left: 35, color: "#c9bdf2", fontSize: 20 }}>✦</span>
      <span style={{ position: "absolute", top: 22, right: 34, color: "#c9bdf2", fontSize: 21 }}>✦</span>
      <span style={{ position: "absolute", left: 8, top: 66, color: "#f3cf73", fontSize: 21 }}>✦</span>
      <span style={{ position: "absolute", right: 9, top: 67, color: "#f3a9cb", fontSize: 23 }}>♡</span>
      <span style={{ position: "absolute", left: 28, bottom: 18, color: "#f2a7ca", fontSize: 24 }}>♡</span>
      <span style={{ position: "absolute", right: 29, bottom: 16, color: "#d4c7f5", fontSize: 18 }}>✦</span>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 10,
          transform: "translateX(-50%)",
          width: 132,
          height: 132,
          borderRadius: "50%",
          background: "rgba(215, 226, 255, .72)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 10,
          transform: "translateX(-50%)",
          width: 104,
          height: 126,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Shield size={108} fill="#dfe8ff" color="#5b58c9" strokeWidth={2.6} />

        <span
          style={{
            position: "absolute",
            top: 48,
            left: 34,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4c4f77",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 48,
            right: 34,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4c4f77",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 67,
            left: 39,
            width: 26,
            height: 12,
            borderBottom: "3px solid #7b5b91",
            borderRadius: "0 0 20px 20px",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 54,
            left: 14,
            width: 14,
            height: 22,
            borderRadius: "50%",
            background: "#cbdcff",
            transform: "rotate(-22deg)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 54,
            right: 14,
            width: 14,
            height: 22,
            borderRadius: "50%",
            background: "#cbdcff",
            transform: "rotate(22deg)",
          }}
        />
      </div>
    </div>
  );
}

export default function Bullying({ onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (selectedSubcategory) {
    const Subcategory = { ReconocerSenales: ReconocerSenales, QueHacer: QueHacer, PedirAyuda: PedirAyuda, Acompanamiento: Acompanamiento }[selectedSubcategory];
    return <Subcategory onBack={() => setSelectedSubcategory(null)} />;
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 820,
        margin: "0 auto",
        padding: "16px 20px 96px",
        boxSizing: "border-box",
        color: "#30345d",
      }}
    >
      <div style={{ position: "relative", textAlign: "center", marginBottom: 12 }}>
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 44,
            height: 44,
            border: 0,
            borderRadius: 14,
            background: "rgba(255,255,255,.94)",
            color: "#51439d",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 7px 20px rgba(90,70,140,.09)",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={23} />
        </button>

        <div style={{ padding: "0 48px" }}>
          <h1
            style={{
              margin: "2px 0 6px",
              color: "#2f3176",
              fontSize: "clamp(28px,4.2vw,36px)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Bullying y violencia <span style={{ fontSize: ".72em" }}>🛡️</span>
          </h1>
          <p
            style={{
              margin: 0,
              color: "#646783",
              fontSize: 14,
              lineHeight: 1.45,
              fontWeight: 700,
            }}
          >
            Tu seguridad importa.<br />
            Identifica, actúa y pide apoyo.
          </p>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          minHeight: 220,
          margin: "10px auto 22px",
          maxWidth: 650,
          borderRadius: "46% 46% 42% 42% / 36% 36% 58% 58%",
          background: "linear-gradient(180deg,#f4efff 0%,#fff5fa 100%)",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <ShieldIllustration />
      </div>

      <div style={{ display: "grid", gap: 13 }}>
        {cards.map(({ title, text, icon: Icon, bg, iconBg, iconColor }) => (
          <article
            key={title}
            onClick={() => { const map = { "Reconocer señales": "ReconocerSenales", "Qué hacer": "QueHacer", "Pedir ayuda": "PedirAyuda", "Acompañar a alguien": "Acompanamiento" }; setSelectedSubcategory(map[title]); }}
            style={{
              minHeight: 98,
              padding: "14px 18px",
              borderRadius: 22,
              background: `linear-gradient(135deg,#fff 0%,${bg} 100%)`,
              border: "1px solid rgba(110,95,160,.10)",
              boxShadow: "0 8px 22px rgba(80,65,130,.07)",
              display: "flex",
              alignItems: "center",
              gap: 15,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                flex: "0 0 58px",
                width: 58,
                height: 58,
                borderRadius: "50%",
                background: iconBg,
                display: "grid",
                placeItems: "center",
                color: iconColor,
              }}
            >
              <Icon size={29} strokeWidth={1.9} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ margin: "0 0 5px", color: "#3b3d6e", fontSize: 16, fontWeight: 900 }}>
                {title}
              </h2>
              <p style={{ margin: 0, color: "#73768d", fontSize: 12.5, lineHeight: 1.45, fontWeight: 600 }}>
                {text}
              </p>
            </div>
            <span style={{ color: "#777991", fontSize: 27, lineHeight: 1 }}>›</span>
          </article>
        ))}
      </div>
    </section>
  );
}
