import { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  UserRound,
} from "lucide-react";

import InstitucionesAyudaPsicologica from "../InstitucionesAyudaPsicologica/InstitucionesAyudaPsicologica";

export default function InstitucionesEducativas({ onBack }) {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showInstitutions, setShowInstitutions] = useState(false);

  if (showInstitutions) {
    return (
      <InstitucionesAyudaPsicologica
        onBack={() => setShowInstitutions(false)}
      />
    );
  }

  const options = [
    { id: "ignorar", icon: "✕", text: "Ignorarlo." },
    { id: "hablar", icon: "💬", text: "Hablar con él/ella." },
    { id: "profesor", icon: "👩🏻‍🏫", text: "Decírselo a un profesor/a." },
    {
      id: "adulto",
      icon: "🛡️",
      text: "Buscar a un adulto responsable.",
    },
  ];

  const handleOption = (id) => {
    setSelectedOption(id);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === 2) {
    return (
      <section
        style={{
          width: "100%",
          maxWidth: 820,
          margin: "0 auto",
          padding: "18px 20px 105px",
          boxSizing: "border-box",
        }}
      >
        <button
          type="button"
          onClick={() => setStep(1)}
          style={{
            border: 0,
            background: "#ffffff",
            color: "#51439d",
            padding: "10px 15px",
            borderRadius: 14,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontWeight: 800,
            marginBottom: 20,
            boxShadow: "0 6px 18px rgba(102,80,150,.08)",
          }}
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        <div
          style={{
            background:
              "linear-gradient(135deg, #fffaf0 0%, #fff0f7 52%, #e9e4ff 100%)",
            borderRadius: 28,
            padding: "30px 24px",
            textAlign: "center",
            border: "1px solid rgba(120,100,150,.10)",
            boxShadow: "0 10px 30px rgba(102,80,150,.09)",
          }}
        >
          <div
            style={{
              width: 105,
              height: 105,
              margin: "0 auto 16px",
              borderRadius: "50%",
              background: "#fff4d7",
              display: "grid",
              placeItems: "center",
              fontSize: 62,
              boxShadow: "0 8px 20px rgba(180,140,70,.12)",
            }}
          >
            🔥
          </div>

          <div
            style={{
              color: "#e19a29",
              fontWeight: 900,
              fontSize: 13,
              marginBottom: 8,
            }}
          >
            {selectedOption === "adulto"
              ? "MUY BUENA DECISIÓN"
              : "BUSCAR APOYO ES IMPORTANTE"}
          </div>

          <h1
            style={{
              margin: 0,
              color: "#30345d",
              fontSize: "clamp(25px, 4vw, 34px)",
              fontWeight: 900,
            }}
          >
            ¡Buena decisión! 🌱
          </h1>

          <p
            style={{
              maxWidth: 560,
              margin: "12px auto 22px",
              color: "#747793",
              lineHeight: 1.6,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Buscar apoyo de un adulto puede ayudar a resolver la situación
            y hacerla más segura para todos.
          </p>

          <button
            type="button"
            onClick={() => setShowInstitutions(true)}
            style={{
              border: 0,
              background: "#7561d8",
              color: "#ffffff",
              padding: "13px 24px",
              borderRadius: 18,
              cursor: "pointer",
              fontWeight: 900,
              fontSize: 14,
              boxShadow: "0 8px 20px rgba(117,97,216,.22)",
            }}
          >
            Ver más opciones de ayuda
          </button>
        </div>

        <div
          style={{
            marginTop: 18,
            background: "#ffe9f0",
            border: "1px solid #f3cedb",
            borderRadius: 22,
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              minWidth: 48,
              borderRadius: 15,
              background: "#ffffff",
              display: "grid",
              placeItems: "center",
              color: "#df789d",
            }}
          >
            <UserRound size={24} />
          </div>

          <div>
            <strong
              style={{
                display: "block",
                color: "#51405f",
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              Recuerda:
            </strong>
            <span
              style={{
                color: "#747793",
                fontSize: 13,
                lineHeight: 1.45,
              }}
            >
              No tienes que enfrentar una situación difícil tú solo/a.
              Pedir ayuda también es una forma de cuidarte.
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            background: "linear-gradient(135deg, #7561d8, #8c78e5)",
            borderRadius: 20,
            padding: "15px 18px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 8px 20px rgba(117,97,216,.18)",
          }}
        >
          <span style={{ fontSize: 28 }}>🔥</span>
          <div>
            <strong style={{ display: "block", fontSize: 14 }}>
              ¡Misión completada!
            </strong>
            <span style={{ fontSize: 13, opacity: 0.92 }}>+1 fueguito</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            textAlign: "center",
            color: "#8a849e",
            fontSize: 13,
            fontWeight: 800,
          }}
        >
          2 / 2
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 820,
        margin: "0 auto",
        padding: "18px 20px 105px",
        boxSizing: "border-box",
      }}
    >
      <button
        type="button"
        onClick={onBack}
        style={{
          border: 0,
          background: "#ffffff",
          color: "#51439d",
          padding: "10px 15px",
          borderRadius: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontWeight: 800,
          marginBottom: 20,
          boxShadow: "0 6px 18px rgba(102,80,150,.08)",
        }}
      >
        <ArrowLeft size={18} />
        Volver
      </button>

      <div
        style={{
          background:
            "linear-gradient(135deg, #fffaf0 0%, #fff0f7 55%, #e9e4ff 100%)",
          borderRadius: 28,
          padding: "28px 24px",
          border: "1px solid rgba(120,100,150,.10)",
          boxShadow: "0 10px 30px rgba(102,80,150,.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 22,
          }}
        >
          <div>
            <div
              style={{
                color: "#7561d8",
                fontWeight: 900,
                fontSize: 13,
                marginBottom: 5,
              }}
            >
              INSTITUCIONES EDUCATIVAS
            </div>
            <h1
              style={{
                margin: 0,
                color: "#30345d",
                fontSize: "clamp(25px, 4vw, 34px)",
                lineHeight: 1.15,
                fontWeight: 900,
              }}
            >
              Cambia la escena 🌱
            </h1>
            <p
              style={{
                margin: "8px 0 0",
                color: "#747793",
                fontSize: 14,
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              Tú también puedes hacer la diferencia.
            </p>
          </div>

          <div
            style={{
              width: 70,
              height: 70,
              minWidth: 70,
              borderRadius: 22,
              background: "#fff0d5",
              display: "grid",
              placeItems: "center",
              fontSize: 42,
            }}
          >
            🔥
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: "18px 20px",
            border: "1px solid #eee5d6",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", gap: 11 }}>
            <MessageCircle
              size={23}
              color="#7561d8"
              style={{ flexShrink: 0, marginTop: 2 }}
            />
            <p
              style={{
                margin: 0,
                color: "#30345d",
                fontWeight: 800,
                lineHeight: 1.5,
                fontSize: 15,
              }}
            >
              Ves que un compañero está siendo excluido del grupo en el
              colegio. ¿Qué harías?
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gap: 9 }}>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleOption(option.id)}
              style={{
                width: "100%",
                border: "1px solid #e7e1f2",
                background: "#ffffff",
                borderRadius: 17,
                padding: "12px 15px",
                display: "flex",
                alignItems: "center",
                gap: 13,
                textAlign: "left",
                cursor: "pointer",
                color: "#30345d",
                boxShadow: "0 4px 12px rgba(102,80,150,.05)",
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  borderRadius: 13,
                  background: option.id === "adulto" ? "#d5f1df" : "#f1edff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 20,
                }}
              >
                {option.icon}
              </span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 800 }}>
                {option.text}
              </span>
              <span style={{ color: "#9a96ad", fontSize: 18 }}>›</span>
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "#8a849e",
            fontSize: 13,
            fontWeight: 800,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#7561d8",
            }}
          />
          1 / 2
        </div>
      </div>
    </section>
  );
}
