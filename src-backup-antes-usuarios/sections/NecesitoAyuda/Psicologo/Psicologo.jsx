import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Heart,
  Phone,
  UserRound,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const psicologos = [
  {
    nombre: "María del Rosario Melendes Costa",
    descripcion: "Practicante de Psicología · UNJBG",
    telefono: "999 000 001",
  },
  {
    nombre: "Andrea Martínez Flores",
    descripcion: "Practicante de Psicología · UNJBG",
    telefono: "999 000 002",
  },
  {
    nombre: "Valeria Torres Quispe",
    descripcion: "Practicante de Psicología · UNJBG",
    telefono: "999 000 003",
  },
  {
    nombre: "Camila Rojas Mendoza",
    descripcion: "Practicante de Psicología · UNJBG",
    telefono: "999 000 004",
  },
];

export default function Psicologo({ onBack }) {
  const [step, setStep] = useState(1);
  const [feeling, setFeeling] = useState("");

  const goNext = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (step === 2) {
      setStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    onBack?.();
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "760px",
        margin: "0 auto",
        padding: "10px 14px 100px",
        color: "#30345d",
        fontFamily: "Nunito, Poppins, system-ui, sans-serif",
      }}
    >
      {/* BOTÓN VOLVER */}
      <button
        type="button"
        onClick={goBack}
        style={{
          border: 0,
          background: "transparent",
          color: "#51439d",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 2px",
          cursor: "pointer",
          fontWeight: 800,
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        <ArrowLeft size={18} />
        Volver
      </button>

      {/* INDICADOR */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 13px",
            borderRadius: "999px",
            background: "#e9e4ff",
            color: "#51439d",
            fontSize: "12px",
            fontWeight: 900,
          }}
        >
          {step}/2
        </span>
      </div>

      {/* =========================
          PASO 1/2
      ========================= */}
      {step === 1 && (
        <>
          <header
            style={{
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                margin: "0 auto 14px",
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg, #e9e4ff, #fff0f7)",
                display: "grid",
                placeItems: "center",
                color: "#7561d8",
                boxShadow: "0 8px 22px rgba(102,80,150,.08)",
              }}
            >
              <Brain size={34} />
            </div>

            <h1
              style={{
                margin: 0,
                color: "#51439d",
                fontSize: "28px",
                lineHeight: 1.2,
                fontWeight: 900,
              }}
            >
              Psicólogo/a
            </h1>

            <p
              style={{
                margin: "8px auto 0",
                maxWidth: "560px",
                color: "#747793",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              Hablar con alguien de confianza puede ayudarte a comprender
              mejor lo que estás viviendo y buscar apoyo.
            </p>
          </header>

          {/* TARJETA PRINCIPAL */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #fff0f7 0%, #e9e4ff 100%)",
              borderRadius: "26px",
              padding: "26px",
              border: "1px solid #eadff1",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: "#ffffff",
                  display: "grid",
                  placeItems: "center",
                  color: "#df91b5",
                  flexShrink: 0,
                }}
              >
                <Heart size={23} />
              </div>

              <div>
                <h2
                  style={{
                    margin: "0 0 6px",
                    color: "#51439d",
                    fontSize: "19px",
                  }}
                >
                  No tienes que afrontar todo a solas
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#747793",
                    fontSize: "14px",
                    lineHeight: 1.65,
                  }}
                >
                  Si algo te preocupa, te causa tristeza, ansiedad,
                  estrés o simplemente necesitas hablar, buscar orientación
                  puede ser un buen primer paso.
                </p>
              </div>
            </div>
          </div>

          {/* ¿CÓMO TE SIENTES? */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e7e1f2",
              borderRadius: "24px",
              padding: "22px",
              boxShadow: "0 7px 20px rgba(102,80,150,.06)",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                color: "#30345d",
                fontSize: "18px",
              }}
            >
              ¿Cómo te sientes en este momento?
            </h2>

            <p
              style={{
                margin: "0 0 16px",
                color: "#747793",
                fontSize: "13px",
                lineHeight: 1.5,
              }}
            >
              Puedes elegir una opción para continuar.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "10px",
              }}
            >
              {[
                ["😟", "Preocupado/a"],
                ["😔", "Triste"],
                ["😰", "Ansioso/a"],
                ["😣", "Estresado/a"],
                ["😶", "Confundido/a"],
                ["💬", "Necesito hablar"],
              ].map(([emoji, label]) => {
                const selected = feeling === label;

                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setFeeling(label)}
                    style={{
                      border: selected
                        ? "2px solid #7561d8"
                        : "1px solid #e7e1f2",
                      background: selected ? "#f0edff" : "#ffffff",
                      borderRadius: "16px",
                      padding: "13px 10px",
                      cursor: "pointer",
                      color: "#30345d",
                      fontWeight: 800,
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{emoji}</span>
                    {label}
                  </button>
                );
              })}
            </div>

            {feeling && (
              <div
                style={{
                  marginTop: "15px",
                  padding: "11px 13px",
                  borderRadius: "14px",
                  background: "#f7f4ff",
                  color: "#62598b",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                💜 Has indicado que te sientes{" "}
                <strong>{feeling.toLowerCase()}</strong>. Puedes continuar
                para conocer opciones de apoyo.
              </div>
            )}
          </div>

          {/* SIGUIENTE */}
          <button
            type="button"
            onClick={goNext}
            style={{
              width: "100%",
              marginTop: "18px",
              border: 0,
              borderRadius: "18px",
              padding: "14px 18px",
              background: "#7561d8",
              color: "#ffffff",
              fontWeight: 900,
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 8px 18px rgba(117,97,216,.18)",
            }}
          >
            Siguiente
            <ArrowRight size={18} />
          </button>
        </>
      )}

      {/* =========================
          PASO 2/2
      ========================= */}
      {step === 2 && (
        <>
          <header
            style={{
              textAlign: "center",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                margin: "0 auto 13px",
                borderRadius: "23px",
                background: "#d5f1df",
                color: "#5a9b70",
                display: "grid",
                placeItems: "center",
              }}
            >
              <UserRound size={32} />
            </div>

            <h1
              style={{
                margin: 0,
                color: "#51439d",
                fontSize: "27px",
                fontWeight: 900,
              }}
            >
              Contacta con un psicólogo/a de confianza
            </h1>

            <p
              style={{
                margin: "8px auto 0",
                maxWidth: "570px",
                color: "#747793",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              En el colegio puedes encontrar personas capacitadas que pueden
              orientarte y escucharte.
            </p>
          </header>

          {/* PAUSA */}
          <div
            style={{
              background: "#f4fbf6",
              border: "1px solid #d8eedf",
              borderRadius: "20px",
              padding: "16px 18px",
              marginBottom: "18px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <Leaf
              size={23}
              color="#5a9b70"
              style={{ flexShrink: 0, marginTop: 2 }}
            />

            <div>
              <strong
                style={{
                  display: "block",
                  color: "#4f805f",
                  fontSize: "15px",
                  marginBottom: "4px",
                }}
              >
                Hacer una pausa
              </strong>

              <span
                style={{
                  color: "#747793",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                Respira, tómate un momento y recuerda que pedir apoyo también
                es una forma de cuidarte.
              </span>
            </div>
          </div>

          {/* PSICÓLOGOS */}
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {psicologos.map((psicologo) => (
              <article
                key={psicologo.nombre}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e7e1f2",
                  borderRadius: "21px",
                  padding: "17px",
                  boxShadow: "0 7px 20px rgba(102,80,150,.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "13px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "17px",
                      background: "#fff0f7",
                      display: "grid",
                      placeItems: "center",
                      color: "#df91b5",
                      flexShrink: 0,
                    }}
                  >
                    <UserRound size={24} />
                  </div>

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <h3
                      style={{
                        margin: 0,
                        color: "#30345d",
                        fontSize: "15px",
                        lineHeight: 1.3,
                      }}
                    >
                      {psicologo.nombre}
                    </h3>

                    <p
                      style={{
                        margin: "4px 0 0",
                        color: "#747793",
                        fontSize: "12px",
                        lineHeight: 1.4,
                      }}
                    >
                      {psicologo.descripcion}
                    </p>

                    <p
                      style={{
                        margin: "5px 0 0",
                        color: "#7561d8",
                        fontSize: "12px",
                        fontWeight: 800,
                      }}
                    >
                      📞 {psicologo.telefono}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${psicologo.telefono.replace(/\s/g, "")}`}
                  style={{
                    marginTop: "13px",
                    width: "100%",
                    boxSizing: "border-box",
                    borderRadius: "14px",
                    padding: "11px 14px",
                    background: "#7561d8",
                    color: "#ffffff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  <Phone size={15} />
                  CONSULTA AQUÍ
                </a>
              </article>
            ))}
          </div>

          {/* MENSAJE FINAL */}
          <div
            style={{
              marginTop: "18px",
              background: "#fffaf0",
              border: "1px solid #f2e4bd",
              borderRadius: "20px",
              padding: "16px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <CheckCircle2
              size={21}
              color="#b79543"
              style={{ flexShrink: 0, marginTop: 1 }}
            />

            <p
              style={{
                margin: 0,
                color: "#766b51",
                fontSize: "12px",
                lineHeight: 1.55,
              }}
            >
              Buscar ayuda no significa que haya algo malo en ti. Hablar con
              alguien de confianza puede ser un primer paso para sentirte
              acompañado/a.
            </p>
          </div>

          {/* VOLVER AL PASO 1 */}
          <button
            type="button"
            onClick={() => {
              setStep(1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              width: "100%",
              marginTop: "16px",
              border: 0,
              borderRadius: "16px",
              padding: "12px 16px",
              background: "#eeeafb",
              color: "#51439d",
              fontWeight: 900,
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            ← Volver al paso anterior
          </button>
        </>
      )}
    </section>
  );
}