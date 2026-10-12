import { ArrowLeft, Users, UserRound, Landmark, Phone, Heart, ChevronRight } from "lucide-react";

const options = [
  {
    title: "Habla con un adulto de confianza",
    text: "Tu familia, un profesor, etc.",
    icon: Users,
    bg: "#eefaf1",
    iconBg: "#d8f2df",
    iconColor: "#4c9a66",
  },
  {
    title: "Psicólogo/a",
    text: "Atención profesional.",
    icon: UserRound,
    bg: "#f5efff",
    iconBg: "#e5d6fb",
    iconColor: "#7558b8",
  },
  {
    title: "Instituciones educativas",
    text: "Tu colegio también te apoya.",
    icon: Landmark,
    bg: "#fff8e9",
    iconBg: "#f9e5a8",
    iconColor: "#9a7920",
  },
  {
    title: "Líneas de ayuda",
    text: "Servicios profesionales.",
    icon: Phone,
    bg: "#eaf9fc",
    iconBg: "#cceff5",
    iconColor: "#3d91a1",
  },
];

export default function NecesitoAyuda({ onBack }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        padding: "18px 20px 105px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "4px 50px 0",
          marginBottom: 18,
        }}
      >
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
          }}
        >
          <ArrowLeft size={22} strokeWidth={2.2} />
        </button>

        <h1
          style={{
            margin: 0,
            color: "#30345d",
            fontSize: "clamp(23px, 4vw, 31px)",
            lineHeight: 1.15,
            fontWeight: 900,
          }}
        >
          Necesito ayuda
        </h1>

        <p
          style={{
            margin: "7px 0 0",
            color: "#747793",
            fontSize: "clamp(12px, 2vw, 14px)",
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          No estás solo/a. Aquí puedes encontrar apoyo.
        </p>
      </div>

      <div style={{ display: "grid", gap: 9 }}>
        {options.map(({ title, text, icon: Icon, bg, iconBg, iconColor }) => (
          <article
            key={title}
            style={{
              minHeight: 88,
              padding: "14px 18px",
              borderRadius: 20,
              background: bg,
              border: "1px solid rgba(120,100,150,.10)",
              boxShadow: "0 6px 18px rgba(102,80,150,.09)",
              display: "flex",
              alignItems: "center",
              gap: 15,
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                minWidth: 54,
                borderRadius: 17,
                background: iconBg,
                color: iconColor,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon size={28} strokeWidth={1.9} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h2
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "clamp(14px, 2.2vw, 17px)",
                  lineHeight: 1.25,
                  fontWeight: 900,
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  margin: "3px 0 0",
                  color: "#747793",
                  fontSize: "clamp(12px, 1.8vw, 14px)",
                  lineHeight: 1.3,
                  fontWeight: 600,
                }}
              >
                {text}
              </p>
            </div>

            <ChevronRight size={19} color="#7c7d91" strokeWidth={2.2} />
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: 16,
          minHeight: 70,
          padding: "12px 18px",
          borderRadius: 19,
          background: "#ffe9f0",
          display: "flex",
          alignItems: "center",
          gap: 13,
          boxSizing: "border-box",
        }}
      >
        <Heart size={29} color="#df789d" fill="none" strokeWidth={1.9} />
        <div>
          <strong
            style={{
              display: "block",
              color: "#51405f",
              fontSize: "clamp(12px, 1.8vw, 14px)",
              lineHeight: 1.25,
            }}
          >
            Pedir ayuda no es un signo de debilidad,
          </strong>
          <span
            style={{
              display: "block",
              color: "#747793",
              fontSize: "clamp(11px, 1.7vw, 13px)",
              lineHeight: 1.25,
              marginTop: 2,
            }}
          >
            es un acto de valentía.
          </span>
        </div>
      </div>
    </section>
  );
}
