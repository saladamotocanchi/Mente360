import {
  ArrowLeft,
  Brain,
  Heart,
  GraduationCap,
  Leaf,
  Phone,
} from "lucide-react";

const lineas = [
  {
    id: "psicologico",
    title: "Apoyo psicológico",
    subtitle: "Necesito hablar con alguien",
    number: "113",
    detail: "Marca 113 y elige la opción 5",
    icon: Brain,
    doorBg: "#dff2ff",
    doorColor: "#4a91bd",
    iconBg: "#c7e8f8",
  },
  {
    id: "violencia",
    title: "Violencia familiar",
    subtitle: "Necesito protección y orientación",
    number: "100",
    detail: "Línea gratuita las 24 horas",
    icon: Heart,
    doorBg: "#ffe8f0",
    doorColor: "#c8668d",
    iconBg: "#ffd4e3",
  },
  {
    id: "escolar",
    title: "Violencia escolar",
    subtitle: "Tengo un problema en el colegio",
    number: "01 615 5970",
    detail: "Reporte de casos de violencia escolar",
    icon: GraduationCap,
    doorBg: "#fff5d9",
    doorColor: "#aa862c",
    iconBg: "#f9e9b7",
  },
  {
    id: "hablafranco",
    title: "Habla Franco",
    subtitle: "Necesito orientación sobre drogas",
    number: "1815",
    detail: "Consejería psicológica y orientación",
    icon: Leaf,
    doorBg: "#e5f6e9",
    doorColor: "#57946a",
    iconBg: "#d0ecd7",
  },
];

export default function LineasAyuda({ onBack }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 850,
        margin: "0 auto",
        padding: "18px 20px 110px",
        boxSizing: "border-box",
      }}
    >
      {/* CABECERA */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "4px 50px 0",
          marginBottom: 22,
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
            boxShadow: "0 5px 15px rgba(102,80,150,.08)",
          }}
        >
          <ArrowLeft size={22} strokeWidth={2.2} />
        </button>

        <h1
          style={{
            margin: 0,
            color: "#30345d",
            fontSize: "clamp(24px, 4vw, 32px)",
            lineHeight: 1.15,
            fontWeight: 900,
          }}
        >
          Líneas de ayuda
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            color: "#747793",
            fontSize: "clamp(12px, 2vw, 14px)",
            lineHeight: 1.5,
            fontWeight: 600,
          }}
        >
          Elige la puerta que más se parece a lo que necesitas.
        </p>
      </div>

      {/* PUERTAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 18,
        }}
      >
        {lineas.map(
          ({
            id,
            title,
            subtitle,
            number,
            detail,
            icon: Icon,
            doorBg,
            doorColor,
            iconBg,
          }) => (
            <article
              key={id}
              style={{
                background: "#ffffff",
                borderRadius: 28,
                padding: 18,
                border: "1px solid #e7e1f2",
                boxShadow:
                  "0 10px 28px rgba(102,80,150,.10)",
              }}
            >
              {/* PUERTA */}
              <div
                style={{
                  minHeight: 210,
                  borderRadius: 22,
                  background: doorBg,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 16px",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* MARCO */}
                <div
                  style={{
                    width: 108,
                    height: 132,
                    borderRadius: "58px 58px 15px 15px",
                    background: doorColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                      "0 10px 18px rgba(70,60,100,.14)",
                    position: "relative",
                  }}
                >
                  {/* INTERIOR DE LA PUERTA */}
                  <div
                    style={{
                      width: 82,
                      height: 106,
                      borderRadius:
                        "44px 44px 10px 10px",
                      background: iconBg,
                      border:
                        "3px solid rgba(255,255,255,.75)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      size={42}
                      color={doorColor}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* PERILLA */}
                  <div
                    style={{
                      position: "absolute",
                      right: 13,
                      top: "55%",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#fff",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: 13,
                    fontSize: 12,
                    fontWeight: 900,
                    color: doorColor,
                    textAlign: "center",
                  }}
                >
                  ENCUENTRA TU SALIDA
                </div>
              </div>

              {/* INFORMACIÓN */}
              <div
                style={{
                  padding: "16px 4px 4px",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: "#30345d",
                    fontSize: 17,
                    fontWeight: 900,
                  }}
                >
                  {title}
                </h2>

                <p
                  style={{
                    margin: "5px 0 10px",
                    color: "#747793",
                    fontSize: 13,
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}
                >
                  {subtitle}
                </p>

                <div
                  style={{
                    background: "#f7f4fc",
                    borderRadius: 15,
                    padding: "10px 8px",
                    marginBottom: 12,
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      color: "#51439d",
                      fontSize: 18,
                      fontWeight: 900,
                    }}
                  >
                    {number}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: 3,
                      color: "#747793",
                      fontSize: 11,
                      lineHeight: 1.35,
                    }}
                  >
                    {detail}
                  </span>
                </div>

                <a
                  href={`tel:${number.replace(/\s/g, "")}`}
                  style={{
                    width: "100%",
                    minHeight: 44,
                    borderRadius: 14,
                    background: doorColor,
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 900,
                    boxSizing: "border-box",
                  }}
                >
                  <Phone size={17} />
                  LLAMAR
                </a>
              </div>
            </article>
          )
        )}
      </div>

      {/* MENSAJE FINAL */}
      <div
        style={{
          marginTop: 20,
          padding: "17px 20px",
          borderRadius: 22,
          background:
            "linear-gradient(135deg, #f4efff, #ffeef6)",
          border: "1px solid #e7e1f2",
          textAlign: "center",
        }}
      >
        <strong
          style={{
            display: "block",
            color: "#51439d",
            fontSize: 14,
            marginBottom: 4,
          }}
        >
          💜 No estás solo/a
        </strong>

        <span
          style={{
            color: "#747793",
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          Si una situación te preocupa, buscar ayuda es una buena forma
          de cuidarte.
        </span>
      </div>
    </section>
  );
}