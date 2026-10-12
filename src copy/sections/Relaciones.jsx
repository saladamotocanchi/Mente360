import { useState } from "react";
import { ArrowLeft, MessageCircle, Heart, Users } from "lucide-react";
import Comunicacion from "./Relaciones/Comunicacion/Comunicacion";
import Limites from "./Relaciones/Limites/Limites";
import Amistades from "./Relaciones/Amistades/Amistades";
import Conflictos from "./Relaciones/Conflictos/Conflictos";

const cards = [
  {
    title: "Comunicación saludable",
    text: "Expresa lo que sientes y escucha a los demás.",
    icon: MessageCircle,
    bg: "#f3efff",
    iconBg: "#e8e1ff",
    iconColor: "#6557c7",
  },
  {
    title: "Límites saludables",
    text: "Respeta tus espacios y los de los demás.",
    icon: Heart,
    bg: "#fff0f7",
    iconBg: "#ffddec",
    iconColor: "#c65c91",
  },
  {
    title: "Amistades",
    text: "Elige relaciones que te hagan bien.",
    icon: Users,
    bg: "#effaf7",
    iconBg: "#d9f1e9",
    iconColor: "#4d9a8a",
  },
  {
    title: "Resolver conflictos",
    text: "Busca soluciones y aprende a negociar.",
    icon: Heart,
    bg: "#fff8e7",
    iconBg: "#ffedbf",
    iconColor: "#a77b28",
  },
];

function PeopleIllustration() {
  return (
    <div
      style={{
        position: "relative",
        width: 250,
        height: 145,
        margin: "0 auto",
      }}
      aria-hidden="true"
    >
      <span style={{ position: "absolute", top: 4, left: 28, color: "#f2a7ca", fontSize: 25 }}>✦</span>
      <span style={{ position: "absolute", top: 20, right: 28, color: "#f2a7ca", fontSize: 22 }}>♡</span>
      <span style={{ position: "absolute", bottom: 4, left: 8, color: "#d8c9f6", fontSize: 18 }}>✦</span>
      <span style={{ position: "absolute", bottom: 8, right: 12, color: "#b8ddf4", fontSize: 18 }}>✦</span>

      <div
        style={{
          position: "absolute",
          left: 74,
          top: 14,
          width: 104,
          height: 104,
          borderRadius: "50%",
          background: "#ffe4f0",
          border: "3px solid #d96c9c",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 18,
          bottom: 6,
          width: 92,
          height: 92,
          borderRadius: "46% 46% 38% 38%",
          background: "#c8ddff",
          border: "3px solid #6677c9",
          boxSizing: "border-box",
        }}
      >
        <span style={{ position: "absolute", left: 25, top: 35, width: 7, height: 7, borderRadius: "50%", background: "#4c4f77" }} />
        <span style={{ position: "absolute", right: 25, top: 35, width: 7, height: 7, borderRadius: "50%", background: "#4c4f77" }} />
        <span style={{ position: "absolute", left: 35, top: 51, width: 20, height: 10, borderBottom: "3px solid #7b5b91", borderRadius: "0 0 18px 18px" }} />
        <span style={{ position: "absolute", left: 7, top: 20, width: 20, height: 26, borderRadius: "50%", background: "#b8d2ff", transform: "rotate(-18deg)" }} />
        <span style={{ position: "absolute", right: 7, top: 20, width: 20, height: 26, borderRadius: "50%", background: "#b8d2ff", transform: "rotate(18deg)" }} />
      </div>

      <div
        style={{
          position: "absolute",
          right: 18,
          bottom: 6,
          width: 92,
          height: 92,
          borderRadius: "46% 46% 38% 38%",
          background: "#bfe4dc",
          border: "3px solid #5e9c93",
          boxSizing: "border-box",
        }}
      >
        <span style={{ position: "absolute", left: 25, top: 35, width: 7, height: 7, borderRadius: "50%", background: "#4c4f77" }} />
        <span style={{ position: "absolute", right: 25, top: 35, width: 7, height: 7, borderRadius: "50%", background: "#4c4f77" }} />
        <span style={{ position: "absolute", left: 35, top: 51, width: 20, height: 10, borderBottom: "3px solid #7b5b91", borderRadius: "0 0 18px 18px" }} />
        <span style={{ position: "absolute", left: 7, top: 20, width: 20, height: 26, borderRadius: "50%", background: "#a9d8cf", transform: "rotate(-18deg)" }} />
        <span style={{ position: "absolute", right: 7, top: 20, width: 20, height: 26, borderRadius: "50%", background: "#a9d8cf", transform: "rotate(18deg)" }} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 104,
          bottom: 2,
          width: 72,
          height: 72,
          borderRadius: "50% 50% 42% 42%",
          background: "#f8b4cf",
          border: "3px solid #c95f91",
          boxSizing: "border-box",
        }}
      >
        <span style={{ position: "absolute", left: 18, top: 27, width: 6, height: 6, borderRadius: "50%", background: "#4c4f77" }} />
        <span style={{ position: "absolute", right: 18, top: 27, width: 6, height: 6, borderRadius: "50%", background: "#4c4f77" }} />
        <span style={{ position: "absolute", left: 25, top: 41, width: 18, height: 8, borderBottom: "3px solid #7b5b91", borderRadius: "0 0 18px 18px" }} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 111,
          top: 48,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#fff",
          display: "grid",
          placeItems: "center",
          color: "#7b5bd1",
          boxShadow: "0 7px 18px rgba(100,80,150,.10)",
          zIndex: 5,
        }}
      >
        <Heart size={28} fill="#8b73dc" strokeWidth={1.7} />
      </div>
    </div>
  );
}

export default function Relaciones({ onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (selectedSubcategory) {
    const Subcategory = { Comunicacion: Comunicacion, Limites: Limites, Amistades: Amistades, Conflictos: Conflictos }[selectedSubcategory];
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
          <h1 style={{ margin: "2px 0 6px", color: "#2f3176", fontSize: "clamp(28px,4.2vw,36px)", fontWeight: 900, lineHeight: 1.1 }}>
            Relaciones <span style={{ fontSize: ".72em" }}>👥</span>
          </h1>
          <p style={{ margin: 0, color: "#646783", fontSize: 14, lineHeight: 1.45, fontWeight: 700 }}>
            Construye vínculos sanos, comunica lo que sientes y rodéate de quienes te suman.
          </p>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          minHeight: 225,
          margin: "14px auto 22px",
          maxWidth: 650,
          borderRadius: "46% 46% 42% 42% / 36% 36% 58% 58%",
          background: "linear-gradient(180deg,#f5efff 0%,#fff2f8 100%)",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <PeopleIllustration />
      </div>

      <div style={{ display: "grid", gap: 13 }}>
        {cards.map(({ title, text, icon: Icon, bg, iconBg, iconColor }) => (
          <article
            key={title}
            onClick={() => { const map = { "Comunicación saludable": "Comunicacion", "Límites saludables": "Limites", "Amistades": "Amistades", "Resolver conflictos": "Conflictos" }; setSelectedSubcategory(map[title]); }}
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
            <div style={{ flex: "0 0 58px", width: 58, height: 58, borderRadius: "50%", background: iconBg, display: "grid", placeItems: "center", color: iconColor }}>
              <Icon size={29} strokeWidth={1.9} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ margin: "0 0 5px", color: "#3b3d6e", fontSize: 16, fontWeight: 900 }}>{title}</h2>
              <p style={{ margin: 0, color: "#73768d", fontSize: 12.5, lineHeight: 1.45, fontWeight: 600 }}>{text}</p>
            </div>
            <span style={{ color: "#777991", fontSize: 27, lineHeight: 1 }}>›</span>
          </article>
        ))}
      </div>
    </section>
  );
}
