import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";

const AREAS = [
  { key: "Emociones", icon: "🧠", color: "#9a8cdb" },
  { key: "Autoestima", icon: "♡", color: "#df91b5" },
  { key: "Estudios", icon: "📚", color: "#7fb7d8" },
  { key: "Relaciones", icon: "👥", color: "#c8a36d" },
  { key: "Sueño", icon: "☾", color: "#9aaee2" },
  { key: "Redes sociales", icon: "📱", color: "#8fa3df" },
  { key: "Hábitos", icon: "🌱", color: "#83c99b" },
];

const STORAGE_KEY = "mente360_test_bienestar_resultado";

const recommendations = {
  Emociones: "Respiración · Relajación · Pausas activas · Consejos útiles",
  Autoestima: "Cualidades · Logros · Confianza · Diálogo interno",
  Estudios: "Organizar tiempo · Pausas de estudio · Estudiar sin saturarse · Pedir apoyo",
  Relaciones: "Comunicación · Límites · Amistades · Conflictos",
  Sueño: "Sueño · Descanso · Rutina · Recuperación",
  "Redes sociales": "Uso equilibrado · Comparación · Descanso digital · Contenido saludable",
  Hábitos: "Movimiento · Alimentación · Pequeños hábitos · Cuidado diario",
};

function readTestResult() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function getScore(area, result) {
  const saved = result?.areas?.find((item) => item.key === area.key);
  if (!saved) return null;

  if (typeof saved.score10 === "number") {
    return Math.max(0, Math.min(10, saved.score10));
  }

  if (typeof saved.average === "number") {
    return Math.max(0, Math.min(10, saved.average * 2));
  }

  if (typeof saved.percent === "number") {
    return Math.max(0, Math.min(10, saved.percent / 10));
  }

  return null;
}

function point(cx, cy, radius, index, total) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / total;
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  };
}

function polygon(values, cx, cy, radius) {
  return values
    .map((value, index) => {
      const p = point(cx, cy, radius * (value / 10), index, values.length);
      return `${p.x},${p.y}`;
    })
    .join(" ");
}

export default function MapaBienestar({ onBack }) {
  const [testResult, setTestResult] = useState(readTestResult);
  const [selected, setSelected] = useState(null);

  // Re-read when entering/returning to this page so the map reflects
  // the latest completed Test without changing the Test itself.
  useEffect(() => {
    const refresh = () => setTestResult(readTestResult());

    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("focus", refresh);

    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  const areas = useMemo(
    () =>
      AREAS.map((area) => ({
        ...area,
        score: getScore(area, testResult),
      })),
    [testResult]
  );

  const completedScores = areas
    .filter((area) => area.score !== null)
    .map((area) => area.score);

  const hasResults = completedScores.length > 0;

  const overall = hasResults
    ? Math.round(
        (completedScores.reduce((sum, score) => sum + score, 0) /
          completedScores.length) *
          10
      ) / 10
    : null;

  const lowest = hasResults
    ? [...areas]
        .filter((area) => area.score !== null)
        .sort((a, b) => a.score - b.score)[0]
    : null;

  const cx = 160;
  const cy = 155;
  const radius = 82;

  // If there is no completed test yet, show a neutral guide shape.
  // Once the Test is completed, the polygon uses its real scores.
  const values = hasResults
    ? areas.map((area) => area.score ?? 0)
    : areas.map(() => 5);

  const clearResults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setTestResult(null);
    setSelected(null);
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 430,
        margin: "0 auto",
        padding: "8px 14px 105px",
        color: "#30345d",
        fontFamily: "Nunito, Poppins, system-ui, sans-serif",
      }}
    >
      <button
        type="button"
        onClick={onBack}
        aria-label="Volver"
        style={{
          border: 0,
          background: "transparent",
          color: "#51439d",
          padding: "7px 0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowLeft size={21} strokeWidth={2.2} />
      </button>

      <header style={{ textAlign: "center", marginTop: -2 }}>
        <h1
          style={{
            margin: 0,
            color: "#51439d",
            fontSize: 23,
            lineHeight: 1.15,
            fontWeight: 900,
          }}
        >
          Mapa de Bienestar
        </h1>

        <p
          style={{
            margin: "5px auto 0",
            maxWidth: 300,
            color: "#747793",
            fontSize: 11,
            lineHeight: 1.35,
          }}
        >
          Así es como te encuentras en este momento.
          <br />
          Toca cada área para ver más detalles.
        </p>
      </header>

      <div
        style={{
          position: "relative",
          margin: "7px auto 0",
          width: "100%",
          maxWidth: 380,
          height: 365,
        }}
      >
        <svg
          viewBox="0 0 320 320"
          width="100%"
          height="100%"
          role="img"
          aria-label="Mapa de bienestar sincronizado con el Test de bienestar"
          style={{ overflow: "visible" }}
        >
          {[2.5, 5, 7.5, 10].map((level) => (
            <polygon
              key={level}
              points={polygon(
                areas.map(() => level),
                cx,
                cy,
                radius
              )}
              fill="none"
              stroke="#e7e6ef"
              strokeWidth="1"
            />
          ))}

          {areas.map((area, index) => {
            const p = point(cx, cy, radius, index, areas.length);
            return (
              <line
                key={`axis-${area.key}`}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="#e4e3eb"
                strokeWidth="1"
              />
            );
          })}

          <polygon
            points={polygon(values, cx, cy, radius)}
            fill="rgba(248,199,223,.20)"
            stroke="#9a8cdb"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray={hasResults ? "0" : "4 4"}
          />

          {areas.map((area, index) => {
            const p = point(
              cx,
              cy,
              radius * (values[index] / 10),
              index,
              areas.length
            );

            return (
              <circle
                key={`point-${area.key}`}
                cx={p.x}
                cy={p.y}
                r="3.5"
                fill="#fff"
                stroke={area.color}
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {areas.map((area, index) => {
          const positions = [
            { top: 0, left: "50%", transform: "translateX(-50%)" },
            { top: 55, left: 2 },
            { top: 174, left: 3 },
            { bottom: 37, left: "50%", transform: "translateX(-50%)" },
            { bottom: 37, right: 5 },
            { top: 174, right: 0 },
            { top: 55, right: 5 },
          ];

          const score =
            area.score === null ? "—/10" : `${Math.round(area.score)}/10`;

          return (
            <button
              key={area.key}
              type="button"
              onClick={() =>
                setSelected(selected === area.key ? null : area.key)
              }
              style={{
                position: "absolute",
                ...positions[index],
                border: 0,
                background: "transparent",
                padding: 4,
                cursor: "pointer",
                textAlign: "center",
                color: "#51439d",
                minWidth: 72,
              }}
            >
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 31,
                  height: 31,
                  margin: "0 auto 2px",
                  borderRadius: "50%",
                  background: area.color,
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: 900,
                }}
              >
                {area.icon}
              </span>

              <span
                style={{
                  display: "block",
                  fontSize: 10.5,
                  lineHeight: 1.1,
                  fontWeight: 900,
                }}
              >
                {area.key}
              </span>

              <span
                style={{
                  display: "block",
                  marginTop: 2,
                  fontSize: 9,
                  color: "#8b8da5",
                  fontWeight: 800,
                }}
              >
                {score}
              </span>
            </button>
          );
        })}

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "49%",
            transform: "translate(-50%, -50%)",
            width: 57,
            height: 57,
            borderRadius: "50%",
            background: "#fff",
            border: "1px solid #e9e4f2",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(102,80,150,.07)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 7.5,
                color: "#8a8ca3",
                fontWeight: 800,
              }}
            >
              BIENESTAR
            </div>
            <strong
              style={{
                display: "block",
                color: "#51439d",
                fontSize: 13.5,
                lineHeight: 1.1,
              }}
            >
              {overall === null ? "—" : `${overall}/10`}
            </strong>
          </div>
        </div>
      </div>

      {selected && (
        <div
          style={{
            marginTop: -2,
            marginBottom: 9,
            padding: "10px 13px",
            borderRadius: 16,
            background: "#fff",
            border: "1px solid #e7e1f2",
          }}
        >
          <strong
            style={{
              display: "block",
              color: "#51439d",
              fontSize: 12,
              marginBottom: 3,
            }}
          >
            {areas.find((area) => area.key === selected)?.icon} {selected}
          </strong>
          <span
            style={{
              display: "block",
              color: "#747793",
              fontSize: 10.5,
              lineHeight: 1.4,
            }}
          >
            {recommendations[selected]}
          </span>
        </div>
      )}

      <div
        style={{
          background: "#fff7df",
          border: "1px solid #f0dfb2",
          borderRadius: 17,
          padding: "12px 14px",
          marginTop: 0,
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 25, lineHeight: 1 }}>💡</span>

          <div>
            <strong
              style={{
                display: "block",
                color: "#6d5c32",
                fontSize: 12,
                marginBottom: 4,
              }}
            >
              Lo que más necesitas cuidar:
            </strong>

            {lowest ? (
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 15,
                  color: "#766b51",
                  fontSize: 10.5,
                  lineHeight: 1.55,
                }}
              >
                <li>
                  {lowest.key} ({Math.round(lowest.score)}/10)
                </li>
                <li>Revisa sus recursos</li>
                <li>Avanza poco a poco</li>
              </ul>
            ) : (
              <p
                style={{
                  margin: 0,
                  color: "#766b51",
                  fontSize: 10.5,
                  lineHeight: 1.45,
                }}
              >
                Completa el Test de bienestar para que este mapa se actualice
                con tus resultados.
              </p>
            )}
          </div>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          margin: "9px auto 0",
          maxWidth: 330,
          color: "#9698ad",
          fontSize: 9.5,
          lineHeight: 1.35,
        }}
      >
        Este mapa usa directamente los resultados guardados por el Test de
        bienestar. Es orientativo, no un diagnóstico.
      </p>

      {testResult && (
        <button
          type="button"
          onClick={clearResults}
          style={{
            border: 0,
            background: "transparent",
            color: "#85879e",
            fontWeight: 800,
            fontSize: 10,
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            gap: 5,
            margin: "2px auto 0",
          }}
        >
          <RotateCcw size={12} />
          Borrar resultados del test
        </button>
      )}
    </section>
  );
}
