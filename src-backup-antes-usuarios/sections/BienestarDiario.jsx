import { useState } from "react";
import { ArrowLeft, Moon, PersonStanding, Apple, Sun } from "lucide-react";
import Sueno from "./BienestarDiario/Sueno/Sueno";
import Movimiento from "./BienestarDiario/Movimiento/Movimiento";
import Alimentacion from "./BienestarDiario/Alimentacion/Alimentacion";
import PequenosHabitos from "./BienestarDiario/PequenosHabitos/PequenosHabitos";

const cards = [
  {
    title: "Sueño",
    text: "Descansa bien, mejora tu energía y estado de ánimo.",
    icon: Moon,
    bg: "#f0ecff",
    iconBg: "#ddd5ff",
    iconColor: "#6255c4",
  },
  {
    title: "Movimiento",
    text: "Muévete, libera tensiones y siéntete mejor.",
    icon: PersonStanding,
    bg: "#fff0f7",
    iconBg: "#ffd9eb",
    iconColor: "#c65c91",
  },
  {
    title: "Alimentación e hidratación",
    text: "Cuida lo que comes y mantente hidratado/a.",
    icon: Apple,
    bg: "#eefaf3",
    iconBg: "#d7f0e1",
    iconColor: "#4c9b68",
  },
  {
    title: "Pequeños hábitos",
    text: "Haz cosas simples que mejoren tu día a día.",
    icon: Sun,
    bg: "#fff8e7",
    iconBg: "#ffedbf",
    iconColor: "#a77b28",
  },
];

function WellnessIllustration() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: 230,
        height: 150,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 18,
          bottom: 18,
          width: 105,
          height: 50,
          borderRadius: "55% 45% 48% 52%",
          background: "#d9eaff",
          border: "3px solid #5a58b6",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 70,
          bottom: 18,
          width: 105,
          height: 56,
          borderRadius: "52% 48% 50% 50%",
          background: "#d9eaff",
          border: "3px solid #5a58b6",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 22,
          width: 88,
          height: 47,
          borderRadius: "52% 48% 48% 52%",
          background: "#d9eaff",
          border: "3px solid #5a58b6",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 62,
          top: 8,
          width: 116,
          height: 116,
          borderRadius: "58% 58% 46% 46%",
          background: "linear-gradient(145deg,#eef7ff,#d4e7ff)",
          border: "4px solid #51439d",
          boxShadow: "0 10px 22px rgba(82,70,150,.12)",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -8,
            top: 9,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#d4e8ff",
            border: "3px solid #51439d",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 15,
              top: 0,
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#fff9fd",
            }}
          />
        </div>
        <span style={{ position: "absolute", left: 35, top: 48, width: 8, height: 8, borderRadius: "50%", background: "#51439d" }} />
        <span style={{ position: "absolute", left: 72, top: 48, width: 8, height: 8, borderRadius: "50%", background: "#51439d" }} />
        <span
          style={{
            position: "absolute",
            left: 47,
            top: 65,
            width: 30,
            height: 15,
            borderBottom: "4px solid #51439d",
            borderRadius: "0 0 50% 50%",
          }}
        />
        <span style={{ position: "absolute", left: 28, top: 62, width: 9, height: 9, borderRadius: "50%", background: "#f2a6c5" }} />
        <span style={{ position: "absolute", right: 28, top: 62, width: 9, height: 9, borderRadius: "50%", background: "#f2a6c5" }} />
      </div>
    </div>
  );
}

export default function BienestarDiario({ onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (selectedSubcategory) {
    const Subcategory = { Sueno: Sueno, Movimiento: Movimiento, Alimentacion: Alimentacion, PequenosHabitos: PequenosHabitos }[selectedSubcategory];
    return <Subcategory onBack={() => setSelectedSubcategory(null)} />;
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 820,
        margin: "0 auto",
        padding: "14px 18px 94px",
        boxSizing: "border-box",
        color: "#30345d",
      }}
    >
      <div style={{ position: "relative", textAlign: "center", marginBottom: 8 }}>
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 42,
            height: 42,
            border: 0,
            borderRadius: 14,
            background: "rgba(255,255,255,.92)",
            color: "#51439d",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 6px 18px rgba(90,70,140,.08)",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={22} />
        </button>

        <div style={{ padding: "0 46px" }}>
          <h1
            style={{
              margin: "2px 0 5px",
              color: "#303276",
              fontSize: "clamp(25px, 4vw, 34px)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Bienestar diario <span style={{ fontSize: ".72em" }}>🌙</span>
          </h1>
          <p style={{ margin: 0, color: "#646783", fontSize: 14, lineHeight: 1.45, fontWeight: 700 }}>
            Pequeños hábitos, grandes cambios en tu bienestar.
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: 210,
          margin: "16px auto 20px",
          maxWidth: 620,
          borderRadius: "46% 46% 40% 40% / 42% 42% 58% 58%",
          background: "linear-gradient(180deg,#eef6ff 0%,#f5efff 55%,#fff5fa 100%)",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <span style={{ position: "absolute", top: 30, left: "12%", color: "#9db6f1", fontSize: 22 }}>✦</span>
        <span style={{ position: "absolute", top: 47, right: "13%", color: "#f1d17c", fontSize: 22 }}>✦</span>
        <span style={{ position: "absolute", bottom: 31, left: "22%", color: "#c8a6ef", fontSize: 18 }}>✦</span>
        <span style={{ position: "absolute", bottom: 26, right: "22%", color: "#f4a9ca", fontSize: 18 }}>✦</span>
        <WellnessIllustration />
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {cards.map(({ title, text, icon: Icon, bg, iconBg, iconColor }) => (
          <article
            key={title}
            onClick={() => { const map = { "Sueño": "Sueno", "Movimiento": "Movimiento", "Alimentación e hidratación": "Alimentacion", "Pequeños hábitos": "PequenosHabitos" }; setSelectedSubcategory(map[title]); }}
            style={{
              minHeight: 88,
              padding: "13px 17px",
              borderRadius: 21,
              background: `linear-gradient(135deg,#fff 0%,${bg} 100%)`,
              border: "1px solid rgba(110,95,160,.10)",
              boxShadow: "0 7px 20px rgba(80,65,130,.07)",
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                flex: "0 0 54px",
                width: 54,
                height: 54,
                borderRadius: "50%",
                background: iconBg,
                display: "grid",
                placeItems: "center",
                color: iconColor,
              }}
            >
              <Icon size={27} strokeWidth={1.9} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ margin: "0 0 4px", color: "#3b3d6e", fontSize: 15, fontWeight: 900 }}>{title}</h2>
              <p style={{ margin: 0, color: "#73768d", fontSize: 12, lineHeight: 1.45, fontWeight: 600 }}>{text}</p>
            </div>
            <span style={{ color: "#777991", fontSize: 25, lineHeight: 1 }}>›</span>
          </article>
        ))}
      </div>
    </section>
  );
}
