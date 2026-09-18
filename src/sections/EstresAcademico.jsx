import { useState } from "react";
import { ArrowLeft, CalendarDays, Heart, GraduationCap, Users } from "lucide-react";
import OrganizarTiempo from "./EstresAcademico/OrganizarTiempo/OrganizarTiempo";
import PausasEstudio from "./EstresAcademico/PausasEstudio/PausasEstudio";
import EstudiarSinSaturarse from "./EstresAcademico/EstudiarSinSaturarse/EstudiarSinSaturarse";
import PedirApoyo from "./EstresAcademico/PedirApoyo/PedirApoyo";

const cards = [
  {
    title: "Organizar el tiempo",
    text: "Planifica tus tareas y establece prioridades.",
    icon: CalendarDays,
    bg: "#eef7ff",
    iconBg: "#dcecff",
    iconColor: "#5b78c9",
  },
  {
    title: "Pausas activas",
    text: "Descansa, respira y recarga tu energía.",
    icon: Heart,
    bg: "#fff0f7",
    iconBg: "#ffddec",
    iconColor: "#c75b91",
  },
  {
    title: "Estudiar sin saturarse",
    text: "Encuentra tu método y mantén el equilibrio.",
    icon: GraduationCap,
    bg: "#eefaf2",
    iconBg: "#d9f1e2",
    iconColor: "#4d9a68",
  },
  {
    title: "Pedir apoyo",
    text: "Habla con tu familia, profesores o amigos.",
    icon: Users,
    bg: "#fff8e7",
    iconBg: "#ffedc4",
    iconColor: "#a77c2b",
  },
];

function NotebookIllustration() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: 170,
        height: 130,
        transform: "rotate(-2deg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 25,
          top: 8,
          width: 118,
          height: 112,
          border: "4px solid #51439d",
          borderRadius: "12px 18px 18px 12px",
          background: "#fff",
          boxShadow: "0 9px 18px rgba(80,65,145,.10)",
        }}
      >
        {[22, 48, 74, 100].map((top) => (
          <span
            key={top}
            style={{
              position: "absolute",
              left: -12,
              top,
              width: 20,
              height: 10,
              border: "3px solid #51439d",
              borderRight: 0,
              borderRadius: "8px 0 0 8px",
              background: "#fff",
            }}
          />
        ))}
        <span style={{ position: "absolute", left: 48, top: 45, fontSize: 28, color: "#51439d" }}>•</span>
        <span style={{ position: "absolute", left: 69, top: 45, fontSize: 28, color: "#51439d" }}>•</span>
        <span style={{ position: "absolute", left: 89, top: 45, fontSize: 28, color: "#51439d" }}>•</span>
        <span
          style={{
            position: "absolute",
            left: 58,
            top: 61,
            width: 34,
            height: 18,
            borderBottom: "4px solid #51439d",
            borderRadius: "0 0 50% 50%",
          }}
        />
        <span style={{ position: "absolute", left: 48, top: 51, width: 8, height: 8, borderRadius: "50%", background: "#f2a6c5" }} />
        <span style={{ position: "absolute", right: 42, top: 51, width: 8, height: 8, borderRadius: "50%", background: "#f2a6c5" }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 35,
          width: 22,
          height: 92,
          borderRadius: 8,
          background: "#d77eb2",
          transform: "rotate(18deg)",
          boxShadow: "0 4px 10px rgba(100,70,130,.10)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -2,
          top: 24,
          width: 20,
          height: 20,
          borderRadius: "5px 5px 0 0",
          background: "#f2d19b",
          transform: "rotate(18deg)",
        }}
      />
    </div>
  );
}

export default function EstresAcademico({ onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (selectedSubcategory) {
    const Subcategory = { OrganizarTiempo: OrganizarTiempo, PausasEstudio: PausasEstudio, EstudiarSinSaturarse: EstudiarSinSaturarse, PedirApoyo: PedirApoyo }[selectedSubcategory];
    return <Subcategory onBack={() => setSelectedSubcategory(null)} />;
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 820,
        margin: "0 auto",
        padding: "14px 18px 92px",
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
          <h1 style={{ margin: "2px 0 5px", color: "#303276", fontSize: "clamp(25px, 4vw, 34px)", fontWeight: 900, lineHeight: 1.1 }}>
            Estrés académico <span style={{ fontSize: ".72em" }}>📚</span>
          </h1>
          <p style={{ margin: 0, color: "#646783", fontSize: 14, lineHeight: 1.45, fontWeight: 700 }}>
            Organiza, respira y avanza a tu ritmo.
          </p>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          height: 210,
          margin: "16px auto 20px",
          maxWidth: 620,
          borderRadius: "46% 46% 40% 40% / 42% 42% 58% 58%",
          background: "linear-gradient(180deg,#eee9ff 0%,#f5faff 55%,#fff7fb 100%)",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <span style={{ position: "absolute", top: 24, left: "15%", color: "#e8c87a", fontSize: 22 }}>✦</span>
        <span style={{ position: "absolute", top: 45, right: "16%", color: "#aebcf4", fontSize: 23 }}>✦</span>
        <span style={{ position: "absolute", bottom: 30, left: "22%", color: "#f4a9ca", fontSize: 19 }}>✦</span>
        <span style={{ position: "absolute", bottom: 24, right: "24%", color: "#b9dff5", fontSize: 17 }}>✦</span>
        <NotebookIllustration />
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {cards.map(({ title, text, icon: Icon, bg, iconBg, iconColor }) => (
          <article
            key={title}
            onClick={() => { const map = { "Organizar el tiempo": "OrganizarTiempo", "Pausas activas": "PausasEstudio", "Estudiar sin saturarse": "EstudiarSinSaturarse", "Pedir apoyo": "PedirApoyo" }; setSelectedSubcategory(map[title]); }}
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
            <div style={{ flex: "0 0 54px", width: 54, height: 54, borderRadius: "50%", background: iconBg, display: "grid", placeItems: "center", color: iconColor }}>
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
