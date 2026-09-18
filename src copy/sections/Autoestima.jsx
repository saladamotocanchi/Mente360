import { ArrowLeft, Heart, Star, Trophy, ShieldCheck, MessageCircleHeart } from "lucide-react";

const cards = [
  {
    title: "Conoce tus cualidades",
    text: "Eres más fuerte de lo que crees.",
    icon: Star,
    bg: "#fff1dc",
    iconBg: "#ffe2a8",
    iconColor: "#9b6b20",
  },
  {
    title: "Reconoce tus logros",
    text: "¡Tú también lo haces!",
    icon: Trophy,
    bg: "#eaf8ef",
    iconBg: "#ccefd7",
    iconColor: "#3d8c58",
  },
  {
    title: "Aumenta tu confianza",
    text: "Pequeños pasos, grandes cambios.",
    icon: ShieldCheck,
    bg: "#ffeaf4",
    iconBg: "#f8c5dd",
    iconColor: "#b54f7d",
  },
  {
    title: "Cuida tu diálogo interno",
    text: "Háblate bonito.",
    icon: MessageCircleHeart,
    bg: "#fff0f6",
    iconBg: "#f9cfe0",
    iconColor: "#b84d78",
  },
];

export default function Autoestima({ onBack }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 760,
        margin: "0 auto",
        padding: "18px 20px 90px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", textAlign: "center", marginBottom: 18 }}>
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 42,
            height: 42,
            border: 0,
            borderRadius: 14,
            background: "rgba(255,255,255,.82)",
            color: "#51439d",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(102,80,150,.10)",
          }}
        >
          <ArrowLeft size={22} />
        </button>

        <h1
          style={{
            margin: 0,
            color: "#30345d",
            fontSize: "clamp(30px, 4vw, 42px)",
            lineHeight: 1.05,
            fontWeight: 900,
          }}
        >
          Autoestima
        </h1>
        <p
          style={{
            margin: "10px 0 0",
            color: "#596080",
            fontSize: 17,
            fontWeight: 700,
          }}
        >
          Reconoce lo increíble que eres.
        </p>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: 190,
          margin: "0 auto 22px",
          borderRadius: "42% 42% 48% 48% / 34% 34% 58% 58%",
          background: "linear-gradient(180deg,#f7f0ff 0%,#fff4f8 100%)",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
        }}
      >
        <span style={{ position: "absolute", top: 22, left: "17%", color: "#9edff2", fontSize: 25 }}>♥</span>
        <span style={{ position: "absolute", top: 40, right: "18%", color: "#f4b5d1", fontSize: 20 }}>♥</span>
        <span style={{ position: "absolute", bottom: 25, left: "27%", color: "#d6b6ee", fontSize: 22 }}>✦</span>
        <span style={{ position: "absolute", bottom: 32, right: "25%", color: "#f3a8c8", fontSize: 18 }}>♥</span>

        <div
          style={{
            position: "relative",
            width: 145,
            height: 125,
            display: "grid",
            placeItems: "center",
            color: "#e77aa8",
            filter: "drop-shadow(0 10px 14px rgba(150,90,130,.13))",
          }}
        >
          <Heart size={145} fill="#f6a8c8" stroke="#e477a5" strokeWidth={2.5} />
          <span style={{ position: "absolute", top: 57, left: 50, width: 8, height: 12, borderRadius: "50%", background: "#51439d" }} />
          <span style={{ position: "absolute", top: 57, right: 50, width: 8, height: 12, borderRadius: "50%", background: "#51439d" }} />
          <span style={{ position: "absolute", top: 75, left: "50%", width: 22, height: 10, borderBottom: "3px solid #51439d", borderRadius: "0 0 20px 20px", transform: "translateX(-50%)" }} />
        </div>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {cards.map(({ title, text, icon: Icon, bg, iconBg, iconColor }) => (
          <article
            key={title}
            style={{
              minHeight: 84,
              padding: "12px 18px",
              boxSizing: "border-box",
              borderRadius: 20,
              background: bg,
              border: "1px solid rgba(120,100,150,.10)",
              boxShadow: "0 6px 18px rgba(102,80,150,.08)",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <div
              style={{
                flex: "0 0 52px",
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: iconBg,
                color: iconColor,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon size={27} strokeWidth={2.2} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h2 style={{ margin: 0, color: "#30345d", fontSize: 18, lineHeight: 1.2, fontWeight: 900 }}>
                {title}
              </h2>
              <p style={{ margin: "5px 0 0", color: "#69708f", fontSize: 14, fontWeight: 600 }}>
                {text}
              </p>
            </div>
            <span style={{ color: iconColor, fontSize: 28, lineHeight: 1, fontWeight: 700 }}>›</span>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: 18,
          padding: "12px 14px",
          borderRadius: 16,
          background: "rgba(255,255,255,.78)",
          color: "#656b88",
          display: "flex",
          alignItems: "center",
          gap: 9,
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        <Heart size={17} fill="#f2a3c5" color="#e77aa8" />
        <span>Reconocer tus avances también es una forma de cuidarte.</span>
      </div>
    </section>
  );
}
