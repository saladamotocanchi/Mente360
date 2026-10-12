import {
  ArrowLeft,
  MessageCircle,
  Heart,
  Users,
  Shield,
  BookOpen,
  Smartphone,
  Moon,
  Star,
  Zap,
} from "lucide-react";

const palettes = {
  purple: { bg: "#f3efff", soft: "#e8e1ff", icon: "#6557c7" },
  pink: { bg: "#fff0f7", soft: "#ffddec", icon: "#c65c91" },
  blue: { bg: "#edf8ff", soft: "#d9efff", icon: "#4d79c7" },
  green: { bg: "#effaf2", soft: "#dff3e5", icon: "#4c9b68" },
  yellow: { bg: "#fff8e7", soft: "#ffedbf", icon: "#a77b28" },
};

const sections = {
  Relaciones: {
    subtitle: "Construye vínculos sanos, comunica lo que sientes y rodéate de quienes te suman.",
    illustration: Users,
    illustrationBg: "#eee7ff",
    illustrationColor: "#6255c4",
    cards: [
      ["Comunicación saludable", "Expresa lo que sientes y escucha a los demás.", MessageCircle, "purple"],
      ["Límites saludables", "Respeta tus espacios y los de los demás.", Heart, "pink"],
      ["Amistades", "Elige relaciones que te hagan bien.", Users, "blue"],
      ["Resolver conflictos", "Busca soluciones y aprende a negociar.", Shield, "yellow"],
    ],
  },
  "Bullying y violencia": {
    subtitle: "Tu seguridad importa. Identifica, actúa y pide apoyo.",
    illustration: Shield,
    illustrationBg: "#eee7ff",
    illustrationColor: "#5e52c1",
    cards: [
      ["Reconocer señales", "Aprende a identificar situaciones de riesgo.", Smartphone, "blue"],
      ["Qué hacer", "Toma decisiones seguras y protege tu bienestar.", Shield, "purple"],
      ["Pedir ayuda", "No estás solo/a, puedes hablar con alguien.", Users, "green"],
      ["Acompañar a alguien", "Escucha, apoya y haz la diferencia.", Heart, "pink"],
    ],
  },
  "Estrés académico": {
    subtitle: "Organiza, respira y avanza a tu ritmo.",
    illustration: BookOpen,
    illustrationBg: "#eee7ff",
    illustrationColor: "#6255c4",
    cards: [
      ["Organizar el tiempo", "Planifica tus tareas y establece prioridades.", BookOpen, "blue"],
      ["Pausas activas", "Descansa, respira y recarga tu energía.", Heart, "pink"],
      ["Estudiar sin saturarse", "Encuentra tu método y mantén el equilibrio.", Zap, "green"],
      ["Pedir apoyo", "Habla con tu familia, profesores o amigos.", Users, "yellow"],
    ],
  },
  "Redes sociales": {
    subtitle: "Conecta, disfruta y mantén el equilibrio.",
    illustration: Smartphone,
    illustrationBg: "#eee7ff",
    illustrationColor: "#6255c4",
    cards: [
      ["Uso equilibrado", "Establece límites y cuida tu tiempo en línea.", Smartphone, "purple"],
      ["Comparación", "Recuerda que cada persona tiene su propio camino.", Users, "pink"],
      ["Descanso digital", "Desconéctate para conectar contigo mismo/a.", Moon, "green"],
      ["Contenido saludable", "Sigue lo que te inspira, te suma y te hace bien.", Star, "yellow"],
    ],
  },
  "Bienestar diario": {
    subtitle: "Pequeños hábitos, grandes cambios en tu bienestar.",
    illustration: Moon,
    illustrationBg: "#e8f5ff",
    illustrationColor: "#5a78c4",
    cards: [
      ["Sueño", "Descansa bien, mejora tu energía y estado de ánimo.", Moon, "purple"],
      ["Movimiento", "Muévete, libera tensiones y siéntete mejor.", Zap, "pink"],
      ["Alimentación e hidratación", "Cuida lo que comes y mantente hidratado/a.", Heart, "green"],
      ["Pequeños hábitos", "Haz cosas simples que mejoren tu día a día.", Star, "yellow"],
    ],
  },
};

export default function ExploraSectionPage({ title, icon, onBack }) {
  const data = sections[title] || sections.Relaciones;
  const Illustration = data.illustration;

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
      <div style={{ position: "relative", textAlign: "center", marginBottom: 10 }}>
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
            background: "rgba(255,255,255,.9)",
            color: "#51439d",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 6px 18px rgba(90,70,140,.08)",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={22} />
        </button>

        <div style={{ padding: "0 44px" }}>
          <h1
            style={{
              margin: "2px 0 5px",
              color: "#2f3176",
              fontSize: "clamp(25px, 4vw, 34px)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            {title} <span style={{ fontSize: ".75em" }}>{icon}</span>
          </h1>
          <p style={{ margin: 0, color: "#646783", fontSize: 14, lineHeight: 1.45, fontWeight: 700 }}>
            {data.subtitle}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: 190,
          margin: "18px auto 20px",
          maxWidth: 620,
          borderRadius: "46% 46% 40% 40% / 42% 42% 58% 58%",
          background: `linear-gradient(180deg, ${data.illustrationBg} 0%, #fff7fb 100%)`,
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <span style={{ position: "absolute", top: 22, left: "15%", color: "#d9c9f8", fontSize: 23 }}>✦</span>
        <span style={{ position: "absolute", top: 42, right: "17%", color: "#f5a9cb", fontSize: 20 }}>♡</span>
        <span style={{ position: "absolute", bottom: 24, left: "23%", color: "#b9dff5", fontSize: 17 }}>✦</span>
        <span style={{ position: "absolute", bottom: 28, right: "24%", color: "#e8c87a", fontSize: 18 }}>✦</span>

        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 38,
            background: "rgba(255,255,255,.82)",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 10px 25px rgba(100,80,150,.10)",
            border: "1px solid rgba(120,100,170,.08)",
          }}
        >
          <Illustration size={82} strokeWidth={1.7} color={data.illustrationColor} />
        </div>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {data.cards.map(([cardTitle, text, CardIcon, paletteName]) => {
          const palette = palettes[paletteName];
          return (
            <article
              key={cardTitle}
              style={{
                minHeight: 88,
                padding: "13px 17px",
                borderRadius: 21,
                background: `linear-gradient(135deg, #fff 0%, ${palette.bg} 100%)`,
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
                  background: palette.soft,
                  display: "grid",
                  placeItems: "center",
                  color: palette.icon,
                }}
              >
                <CardIcon size={27} strokeWidth={1.9} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ margin: "0 0 4px", color: "#3b3d6e", fontSize: 15, fontWeight: 900 }}>
                  {cardTitle}
                </h2>
                <p style={{ margin: 0, color: "#73768d", fontSize: 12, lineHeight: 1.45, fontWeight: 600 }}>
                  {text}
                </p>
              </div>
              <span style={{ color: "#777991", fontSize: 25, lineHeight: 1 }}>›</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
