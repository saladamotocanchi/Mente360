import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Brain,
  Heart,
  BookOpen,
  Users,
  Moon,
  Smartphone,
  Sprout,
  BarChart3,
} from "lucide-react";

const STORAGE_KEY = "mente360_test_bienestar_resultado";

const AREAS = [
  {
    key: "Emociones",
    label: "Emociones",
    icon: Brain,
    bg: "#e9e4ff",
    color: "#7561d8",
  },
  {
    key: "Autoestima",
    label: "Autoestima",
    icon: Heart,
    bg: "#fff0f7",
    color: "#c46b9a",
  },
  {
    key: "Estudios",
    label: "Estudios",
    icon: BookOpen,
    bg: "#e8f5fb",
    color: "#477d9c",
  },
  {
    key: "Relaciones",
    label: "Relaciones",
    icon: Users,
    bg: "#fff4df",
    color: "#a77b38",
  },
  {
    key: "Sueño",
    label: "Sueño",
    icon: Moon,
    bg: "#edf0ff",
    color: "#6478b5",
  },
  {
    key: "Redes sociales",
    label: "Redes sociales",
    icon: Smartphone,
    bg: "#eef0ff",
    color: "#6478b5",
  },
  {
    key: "Hábitos",
    label: "Hábitos",
    icon: Sprout,
    bg: "#eaf8ee",
    color: "#4b9a68",
  },
];

function readTestResult() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "null"
    );
  } catch {
    return null;
  }
}

function getScore(area, result) {
  const saved = result?.areas?.find(
    (item) => item.key === area.key
  );

  if (!saved) {
    return null;
  }

  if (typeof saved.score10 === "number") {
    return Math.max(
      0,
      Math.min(10, saved.score10)
    );
  }

  if (typeof saved.average === "number") {
    return Math.max(
      0,
      Math.min(10, saved.average * 2)
    );
  }

  if (typeof saved.percent === "number") {
    return Math.max(
      0,
      Math.min(10, saved.percent / 10)
    );
  }

  return null;
}

function formatScore(score) {
  if (score === null || score === undefined) {
    return "—";
  }

  return Number.isInteger(score)
    ? String(score)
    : score.toFixed(1);
}

export default function Bienestar({ onBack }) {
  const [testResult, setTestResult] =
    useState(readTestResult);

  useEffect(() => {
    const refresh = () => {
      setTestResult(readTestResult());
    };

    refresh();

    window.addEventListener(
      "storage",
      refresh
    );

    window.addEventListener(
      "focus",
      refresh
    );

    return () => {
      window.removeEventListener(
        "storage",
        refresh
      );

      window.removeEventListener(
        "focus",
        refresh
      );
    };
  }, []);

  const areas = useMemo(() => {
    return AREAS.map((area) => ({
      ...area,
      score: getScore(area, testResult),
    }));
  }, [testResult]);

  const completedAreas = areas.filter(
    (area) => area.score !== null
  );

  const overall =
    completedAreas.length > 0
      ? completedAreas.reduce(
          (total, area) =>
            total + area.score,
          0
        ) / completedAreas.length
      : null;

  const lowestArea =
    completedAreas.length > 0
      ? [...completedAreas].sort(
          (a, b) => a.score - b.score
        )[0]
      : null;

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "760px",
        margin: "0 auto",
        padding: "8px 14px 110px",
        color: "#30345d",
        fontFamily:
          "Nunito, Poppins, system-ui, sans-serif",
      }}
    >
      {/* VOLVER */}
      <button
        type="button"
        onClick={onBack}
        style={{
          border: 0,
          background: "transparent",
          color: "#51439d",
          padding: "7px 0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "14px",
          fontWeight: 800,
        }}
      >
        <ArrowLeft
          size={21}
          strokeWidth={2.3}
        />
        Volver
      </button>

      {/* ENCABEZADO */}
      <header
        style={{
          textAlign: "center",
          marginTop: "8px",
          marginBottom: "22px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            margin: "0 auto 12px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #fff0f7, #e9e4ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 10px 25px rgba(102,80,150,.10)",
          }}
        >
          <Heart
            size={36}
            color="#c46b9a"
            fill="#f8c7df"
            strokeWidth={1.8}
          />
        </div>

        <h1
          style={{
            margin: 0,
            color: "#51439d",
            fontSize: "28px",
            lineHeight: 1.15,
            fontWeight: 900,
          }}
        >
          Mi bienestar
        </h1>

        <p
          style={{
            margin: "8px auto 0",
            maxWidth: "480px",
            color: "#747793",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          Observa cómo se encuentran las
          diferentes áreas de tu bienestar.
        </p>
      </header>

      {/* RESUMEN */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #e9e4ff, #fff0f7)",
          borderRadius: "24px",
          padding: "22px",
          marginBottom: "18px",
          boxShadow:
            "0 10px 30px rgba(102,80,150,.10)",
          border: "1px solid #e7e1f2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "17px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <BarChart3
              size={28}
              color="#51439d"
            />
          </div>

          <div>
            <div
              style={{
                color: "#747793",
                fontSize: "12px",
                fontWeight: 800,
              }}
            >
              Bienestar general
            </div>

            <div
              style={{
                color: "#51439d",
                fontSize: "30px",
                lineHeight: 1.1,
                fontWeight: 900,
                marginTop: "2px",
              }}
            >
              {overall !== null
                ? `${formatScore(
                    Math.round(
                      overall * 10
                    ) / 10
                  )}/10`
                : "Sin resultado"}
            </div>
          </div>
        </div>

        <p
          style={{
            margin:
              "14px 0 0",
            color: "#686a87",
            fontSize: "12px",
            lineHeight: 1.5,
          }}
        >
          {overall !== null
            ? "Este resultado se obtiene a partir de las áreas guardadas en tu Test de bienestar."
            : "Completa el Test de bienestar para ver aquí tus resultados."}
        </p>
      </div>

      {/* ÁREA A CUIDAR */}
      {lowestArea && (
        <div
          style={{
            background: "#fcebc0",
            borderRadius: "20px",
            padding: "16px 18px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              color: "#8a6c2e",
              fontSize: "12px",
              fontWeight: 900,
              marginBottom: "4px",
            }}
          >
            🌱 Área que puedes cuidar
          </div>

          <div
            style={{
              color: "#6f592a",
              fontSize: "14px",
              fontWeight: 800,
            }}
          >
            {lowestArea.label}
            {" · "}
            {formatScore(
              lowestArea.score
            )}
            /10
          </div>

          <p
            style={{
              margin: "5px 0 0",
              color: "#806d42",
              fontSize: "11px",
              lineHeight: 1.45,
            }}
          >
            Puedes explorar las herramientas de
            Mente360 relacionadas con esta área.
          </p>
        </div>
      )}

      {/* ÁREAS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "14px",
        }}
      >
        {areas.map((area) => {
          const Icon = area.icon;

          return (
            <div
              key={area.key}
              style={{
                background: "#ffffff",
                border:
                  "1px solid #e7e1f2",
                borderRadius: "22px",
                padding: "18px",
                boxShadow:
                  "0 8px 22px rgba(102,80,150,.07)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "13px",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "15px",
                    background: area.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    size={23}
                    color={area.color}
                    strokeWidth={2}
                  />
                </div>

                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      color: "#30345d",
                      fontSize: "14px",
                      fontWeight: 900,
                    }}
                  >
                    {area.label}
                  </div>

                  <div
                    style={{
                      color: "#747793",
                      fontSize: "11px",
                      marginTop: "2px",
                    }}
                  >
                    Resultado del test
                  </div>
                </div>

                <strong
                  style={{
                    color: area.color,
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatScore(
                    area.score
                  )}
                  /10
                </strong>
              </div>

              {/* BARRA */}
              <div
                style={{
                  height: "9px",
                  borderRadius: "999px",
                  background: "#f0edf5",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width:
                      area.score !== null
                        ? `${area.score * 10}%`
                        : "0%",
                    height: "100%",
                    borderRadius:
                      "999px",
                    background:
                      area.color,
                    transition:
                      "width .3s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* INFORMACIÓN */}
      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border:
            "1px solid #e7e1f2",
          borderRadius: "20px",
          padding: "17px 18px",
          color: "#747793",
          fontSize: "11px",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        Tus resultados son una referencia para
        conocerte mejor. Mente360 no realiza
        diagnósticos psicológicos.
      </div>
    </section>
  );
}