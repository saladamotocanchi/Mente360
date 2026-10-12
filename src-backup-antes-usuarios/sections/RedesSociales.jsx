import { useState } from "react";

import UsoEquilibrado from "./RedesSociales/UsoEquilibrado/UsoEquilibrado";
import Comparacion from "./RedesSociales/Comparacion/Comparacion";
import DescansoDigital from "./RedesSociales/DescansoDigital/DescansoDigital";
import ContenidoSaludable from "./RedesSociales/ContenidoSaludable/ContenidoSaludable";

import {
  ArrowLeft,
  Smartphone,
  Heart,
  Users,
  Moon,
  Star,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

const cards = [
  {
    title: "Uso equilibrado",
    text: "Establece límites y cuida tu tiempo en línea.",
    icon: Smartphone,
    bg: "#f0ecff",
    iconBg: "#ddd5ff",
    iconColor: "#6255c4",
  },
  {
    title: "Comparación",
    text: "Recuerda que cada persona tiene su propio camino.",
    icon: Users,
    bg: "#fff0f7",
    iconBg: "#ffd9eb",
    iconColor: "#c65c91",
  },
  {
    title: "Descanso digital",
    text: "Desconéctate para conectar contigo mismo/a.",
    icon: Moon,
    bg: "#eefaf3",
    iconBg: "#d7f0e1",
    iconColor: "#4c9b68",
  },
  {
    title: "Contenido saludable",
    text: "Sigue lo que te inspira, te suma y te hace bien.",
    icon: Star,
    bg: "#fff8e7",
    iconBg: "#ffedbf",
    iconColor: "#a77b28",
  },
];

export default function RedesSociales({ onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (selectedSubcategory) {
    const Subcategory = {
      UsoEquilibrado,
      Comparacion,
      DescansoDigital,
      ContenidoSaludable,
    }[selectedSubcategory];

    return (
      <Subcategory
        onBack={() => setSelectedSubcategory(null)}
      />
    );
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
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
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
            Redes sociales{" "}
            <span style={{ fontSize: ".75em" }}>📱</span>
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
            Conecta, disfruta y mantén el equilibrio.
          </p>
        </div>
      </div>

      {/* Ilustración principal */}
      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: 210,
          margin: "16px auto 20px",
          maxWidth: 620,
          borderRadius: "46% 46% 40% 40% / 42% 42% 58% 58%",
          background:
            "linear-gradient(180deg,#f3edff 0%,#fff3fa 100%)",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 25,
            left: "13%",
            color: "#e5c9f6",
            fontSize: 22,
          }}
        >
          ✦
        </span>

        <span
          style={{
            position: "absolute",
            top: 48,
            right: "13%",
            color: "#f2a7c9",
            fontSize: 21,
          }}
        >
          ♡
        </span>

        <span
          style={{
            position: "absolute",
            bottom: 32,
            left: "22%",
            color: "#b9dff5",
            fontSize: 17,
          }}
        >
          ✦
        </span>

        <span
          style={{
            position: "absolute",
            bottom: 28,
            right: "22%",
            color: "#e9c979",
            fontSize: 18,
          }}
        >
          ✦
        </span>

        <div
          style={{
            position: "relative",
            width: 126,
            height: 150,
            borderRadius: 27,
            background:
              "linear-gradient(145deg,#d9e8ff,#b9d0ff)",
            border: "5px solid #ffffff",
            boxShadow:
              "0 12px 25px rgba(88,78,150,.18)",
            transform: "rotate(8deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 106,
              height: 127,
              borderRadius: 19,
              background:
                "linear-gradient(180deg,#f9fbff,#e9f2ff)",
              display: "grid",
              placeItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Smartphone
              size={46}
              color="#5b57b8"
              strokeWidth={1.7}
              style={{ opacity: 0 }}
            />

            <div
              style={{
                position: "absolute",
                top: 13,
                left: 13,
                width: 80,
                height: 1,
                background: "#cbd7f2",
              }}
            />

            <div
              style={{
                width: 55,
                height: 55,
                borderRadius: "50%",
                background: "#b8cfff",
                display: "grid",
                placeItems: "center",
                color: "#5a55b7",
                marginTop: 6,
              }}
            >
              <Heart
                size={29}
                fill="#fff"
                strokeWidth={1.8}
              />
            </div>

            <span
              style={{
                position: "absolute",
                left: 10,
                bottom: 17,
                fontSize: 17,
                color: "#5c7fd1",
              }}
            >
              ♡
            </span>

            <span
              style={{
                position: "absolute",
                right: 10,
                bottom: 20,
                fontSize: 17,
                color: "#5c7fd1",
              }}
            >
              ♡
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              left: -31,
              top: 34,
              width: 39,
              height: 39,
              borderRadius: "50%",
              background: "#f4b8da",
              border: "4px solid #fff",
              display: "grid",
              placeItems: "center",
              color: "#b24d7d",
            }}
          >
            <Heart size={19} fill="#fff" />
          </div>

          <div
            style={{
              position: "absolute",
              right: -34,
              top: 56,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#7e9ff0",
              border: "4px solid #fff",
              display: "grid",
              placeItems: "center",
              color: "#fff",
            }}
          >
            <ThumbsUp size={19} fill="#fff" />
          </div>

          <div
            style={{
              position: "absolute",
              left: -25,
              bottom: 16,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#d7c7ff",
              border: "4px solid #fff",
              display: "grid",
              placeItems: "center",
              color: "#6959c8",
            }}
          >
            <MessageCircle size={17} />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {cards.map(
          ({
            title,
            text,
            icon: Icon,
            bg,
            iconBg,
            iconColor,
          }) => (
            <article
              key={title}
              onClick={() => {
                const map = {
                  "Uso equilibrado": "UsoEquilibrado",
                  Comparación: "Comparacion",
                  "Descanso digital": "DescansoDigital",
                  "Contenido saludable":
                    "ContenidoSaludable",
                };

                setSelectedSubcategory(map[title]);
              }}
              style={{
                minHeight: 88,
                padding: "13px 17px",
                borderRadius: 21,
                background: `linear-gradient(135deg,#fff 0%,${bg} 100%)`,
                border:
                  "1px solid rgba(110,95,160,.10)",
                boxShadow:
                  "0 7px 20px rgba(80,65,130,.07)",
                display: "flex",
                alignItems: "center",
                gap: 14,
                boxSizing: "border-box",
                cursor: "pointer",
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
                <Icon
                  size={27}
                  strokeWidth={1.9}
                />
              </div>

              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <h2
                  style={{
                    margin: "0 0 4px",
                    color: "#3b3d6e",
                    fontSize: 15,
                    fontWeight: 900,
                  }}
                >
                  {title}
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#73768d",
                    fontSize: 12,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  {text}
                </p>
              </div>

              <span
                style={{
                  color: "#777991",
                  fontSize: 25,
                  lineHeight: 1,
                }}
              >
                ›
              </span>
            </article>
          )
        )}
      </div>
    </section>
  );
}