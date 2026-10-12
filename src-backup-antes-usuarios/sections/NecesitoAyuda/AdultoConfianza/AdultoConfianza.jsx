import { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Users,
  UserRound,
  GraduationCap,
  Heart,
  Send,
  CheckCircle2,
} from "lucide-react";

const adultOptions = [
  {
    id: "mama-papa",
    title: "Mamá o papá",
    icon: "👩‍👧‍👦",
    bg: "#eef7ff",
    iconBg: "#d9edff",
  },
  {
    id: "familiar",
    title: "Familiar",
    icon: "👵",
    bg: "#fff0f1",
    iconBg: "#ffe0e4",
  },
  {
    id: "profesor",
    title: "Profesor/a",
    icon: "👩‍🏫",
    bg: "#fff8e7",
    iconBg: "#ffedbd",
  },
  {
    id: "orientador",
    title: "Orientador/a",
    icon: "🙋‍♀️",
    bg: "#eef8f1",
    iconBg: "#d9efdf",
  },
  {
    id: "otro",
    title: "Otro adulto\nde confianza",
    icon: "🧑",
    bg: "#eef8f7",
    iconBg: "#d8eeee",
  },
  {
    id: "no-se",
    title: "No sé con quién\nhablar",
    icon: "❓",
    bg: "#f3edff",
    iconBg: "#e3d8ff",
  },
];

const phrases = [
  "Me siento raro/a últimamente.",
  "Hay algo que me preocupa.",
  "Necesito que me escuches.",
  "No sé cómo explicarlo.",
];

export default function AdultoConfianza({ onBack }) {
  const [selectedAdult, setSelectedAdult] = useState(null);
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  const selectedData = adultOptions.find(
    (item) => item.id === selectedAdult
  );

  if (selectedAdult) {
    return (
      <section
        style={{
          width: "100%",
          maxWidth: 760,
          margin: "0 auto",
          padding: "18px 20px 105px",
          boxSizing: "border-box",
        }}
      >
        {/* ENCABEZADO */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "2px 50px 0",
            marginBottom: 20,
          }}
        >
          <button
            type="button"
            onClick={() => {
              setSelectedAdult(null);
              setSelectedPhrase(null);
            }}
            aria-label="Volver"
            style={{
              position: "absolute",
              left: 0,
              top: 2,
              width: 42,
              height: 42,
              border: 0,
              borderRadius: 14,
              background: "rgba(255,255,255,.88)",
              color: "#51439d",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(100,80,150,.08)",
            }}
          >
            <ArrowLeft size={22} strokeWidth={2.2} />
          </button>

          <div
            style={{
              width: 52,
              height: 52,
              margin: "0 auto 9px",
              borderRadius: 18,
              background: "#e8f7ed",
              color: "#4d9b67",
              display: "grid",
              placeItems: "center",
            }}
          >
            <MessageCircle size={28} strokeWidth={1.9} />
          </div>

          <h1
            style={{
              margin: 0,
              color: "#30345d",
              fontSize: "clamp(22px, 4vw, 30px)",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Habla con un adulto
            <br />
            de confianza
          </h1>

          <p
            style={{
              margin: "8px auto 0",
              maxWidth: 520,
              color: "#747793",
              fontSize: "clamp(12px, 2vw, 14px)",
              lineHeight: 1.45,
              fontWeight: 600,
            }}
          >
            No tienes que pasar por esto solo/a. Puedes hablar con alguien
            que te escuche y te acompañe.
          </p>
        </div>

        {/* ADULTO SELECCIONADO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 13,
            padding: "13px 16px",
            borderRadius: 19,
            background: selectedData.bg,
            border: "1px solid rgba(120,100,150,.08)",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              minWidth: 48,
              borderRadius: 16,
              background: selectedData.iconBg,
              display: "grid",
              placeItems: "center",
              fontSize: 27,
            }}
          >
            {selectedData.icon}
          </div>

          <div>
            <span
              style={{
                display: "block",
                color: "#8a8ca0",
                fontSize: 11,
                fontWeight: 700,
                marginBottom: 2,
              }}
            >
              Quieres hablar con
            </span>

            <strong
              style={{
                color: "#30345d",
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              {selectedData.title.replace("\n", " ")}
            </strong>
          </div>
        </div>

        {/* PREGUNTA */}
        <div
          style={{
            padding: "15px 17px",
            borderRadius: 20,
            background: "#eee8ff",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#51439d",
              fontSize: 14,
              fontWeight: 900,
              lineHeight: 1.35,
            }}
          >
            ¿Qué te gustaría decirle?
          </div>
        </div>

        {/* FRASES */}
        <div
          style={{
            display: "grid",
            gap: 9,
          }}
        >
          {phrases.map((phrase) => {
            const active = selectedPhrase === phrase;

            return (
              <button
                key={phrase}
                type="button"
                onClick={() => setSelectedPhrase(phrase)}
                style={{
                  width: "100%",
                  minHeight: 52,
                  padding: "10px 14px",
                  borderRadius: 17,
                  border: active
                    ? "2px solid #8d79dc"
                    : "1px solid rgba(120,100,150,.10)",
                  background: active ? "#eee8ff" : "#ffffff",
                  color: "#4a4d70",
                  textAlign: "left",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxSizing: "border-box",
                  transition: "all .15s ease",
                }}
              >
                {phrase}
              </button>
            );
          })}
        </div>

        {/* MENSAJE FINAL */}
        {selectedPhrase && (
          <div
            style={{
              marginTop: 16,
              padding: 17,
              borderRadius: 20,
              background: "#fff7fb",
              border: "1px solid #f1ddeb",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginBottom: 9,
              }}
            >
              <Heart
                size={19}
                color="#df789d"
                fill="#ffe1eb"
                strokeWidth={2}
              />

              <strong
                style={{
                  color: "#51405f",
                  fontSize: 13,
                }}
              >
                Tu mensaje podría ser:
              </strong>
            </div>

            <p
              style={{
                margin: 0,
                padding: "11px 13px",
                borderRadius: 14,
                background: "#ffffff",
                color: "#5e617d",
                fontSize: 13,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              “{selectedPhrase}”
            </p>

            <button
              type="button"
              onClick={() => {
                alert(
                  "Recuerda: hablar con alguien de confianza puede ser un primer paso para sentirte acompañado/a."
                );
              }}
              style={{
                width: "100%",
                marginTop: 12,
                minHeight: 48,
                border: 0,
                borderRadius: 16,
                background: "#7561d8",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              <Send size={17} />
              Continuar
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 760,
        margin: "0 auto",
        padding: "18px 20px 105px",
        boxSizing: "border-box",
      }}
    >
      {/* ENCABEZADO */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "2px 48px 0",
          marginBottom: 14,
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
            background: "rgba(255,255,255,.88)",
            color: "#51439d",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(100,80,150,.08)",
          }}
        >
          <ArrowLeft size={22} strokeWidth={2.2} />
        </button>

        <div
          style={{
            width: 52,
            height: 52,
            margin: "0 auto 7px",
            borderRadius: 18,
            background: "#e8f7ed",
            color: "#4d9b67",
            display: "grid",
            placeItems: "center",
          }}
        >
          <MessageCircle size={28} strokeWidth={1.9} />
        </div>

        <h1
          style={{
            margin: 0,
            color: "#30345d",
            fontSize: "clamp(22px, 4vw, 30px)",
            lineHeight: 1.15,
            fontWeight: 900,
          }}
        >
          Habla con un adulto
          <br />
          de confianza
        </h1>

        <p
          style={{
            margin: "7px auto 0",
            maxWidth: 500,
            color: "#747793",
            fontSize: "clamp(12px, 2vw, 14px)",
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          No estás solo/a. Hay personas que pueden escucharte y apoyarte.
        </p>
      </div>

      {/* PREGUNTA LILA */}
      <div
        style={{
          margin: "0 0 14px",
          padding: "13px 15px",
          borderRadius: 18,
          background: "#eee8ff",
          textAlign: "center",
          border: "1px solid rgba(117,97,216,.07)",
        }}
      >
        <strong
          style={{
            color: "#51439d",
            fontSize: "clamp(13px, 2vw, 15px)",
            lineHeight: 1.35,
            fontWeight: 900,
          }}
        >
          ¿Con quién te sentirías más cómodo/a hablando?
        </strong>
      </div>

      {/* CUADRÍCULA 3 x 2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        {adultOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSelectedAdult(option.id)}
            style={{
              minWidth: 0,
              minHeight: 148,
              padding: "9px 6px 10px",
              border: "1px solid rgba(120,100,150,.08)",
              borderRadius: 18,
              background: option.bg,
              boxShadow: "0 5px 14px rgba(102,80,150,.06)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              boxSizing: "border-box",
              transition: "transform .15s ease, box-shadow .15s ease",
            }}
          >
            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 23,
                background: option.iconBg,
                display: "grid",
                placeItems: "center",
                fontSize: 49,
                lineHeight: 1,
              }}
            >
              {option.icon}
            </div>

            <span
              style={{
                whiteSpace: "pre-line",
                color: "#4b4e70",
                fontSize: "clamp(10px, 1.7vw, 12px)",
                lineHeight: 1.15,
                fontWeight: 900,
                textAlign: "center",
                minHeight: 27,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {option.title}
            </span>
          </button>
        ))}
      </div>

      {/* MENSAJE INFERIOR */}
      <div
        style={{
          marginTop: 15,
          padding: "12px 15px",
          borderRadius: 18,
          background: "#fff0f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          textAlign: "center",
        }}
      >
        <Heart
          size={20}
          color="#df789d"
          fill="#ffe1eb"
          strokeWidth={1.9}
        />

        <span
          style={{
            color: "#6b6170",
            fontSize: 12,
            lineHeight: 1.3,
            fontWeight: 700,
          }}
        >
          Pedir ayuda es un acto de valentía.
        </span>
      </div>
    </section>
  );
}