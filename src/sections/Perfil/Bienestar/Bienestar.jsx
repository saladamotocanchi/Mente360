import React, {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  Brain,
  Heart,
  BookOpen,
  Users,
  Moon,
  Smartphone,
  Leaf,
} from "lucide-react";

const STORAGE_KEY =
  "mente360_test_bienestar_resultado";

const areas = [
  {
    key: "Emociones",
    storageKey: "Emociones",
    title: "Emociones",
    icon: Brain,
    bg: "#e9e4ff",
    color: "#7561d8",
  },
  {
    key: "Autoestima",
    storageKey: "Autoestima",
    title: "Autoestima",
    icon: Heart,
    bg: "#ffe5f0",
    color: "#c8668d",
  },
  {
    key: "Estudios",
    storageKey: "Estudios",
    title: "Estudios",
    icon: BookOpen,
    bg: "#fff1c9",
    color: "#aa862c",
  },
  {
    key: "Relaciones",
    storageKey: "Relaciones",
    title: "Relaciones",
    icon: Users,
    bg: "#dff3e5",
    color: "#57946a",
  },
  {
    key: "Sueño",
    storageKey: "Sueño",
    title: "Sueño",
    icon: Moon,
    bg: "#dff1fb",
    color: "#4a91bd",
  },
  {
    key: "Redes sociales",
    storageKey: "Redes sociales",
    title: "Redes sociales",
    icon: Smartphone,
    bg: "#ffe5ed",
    color: "#c8668d",
  },
  {
    key: "Hábitos",
    storageKey: "Hábitos",
    title: "Hábitos",
    icon: Leaf,
    bg: "#e5f5e8",
    color: "#57946a",
  },
];

function leerResultado() {
  try {
    const guardado =
      localStorage.getItem(
        STORAGE_KEY
      );

    return guardado
      ? JSON.parse(guardado)
      : null;
  } catch {
    return null;
  }
}

function obtenerPuntaje(
  resultado,
  area
) {
  const guardada =
    resultado?.areas?.find(
      (item) =>
        item.key ===
        area.storageKey
    );

  if (!guardada) {
    return null;
  }

  if (
    typeof guardada.score10 ===
    "number"
  ) {
    return Math.max(
      0,
      Math.min(
        10,
        guardada.score10
      )
    );
  }

  if (
    typeof guardada.average ===
    "number"
  ) {
    return Math.max(
      0,
      Math.min(
        10,
        guardada.average * 2
      )
    );
  }

  if (
    typeof guardada.percent ===
    "number"
  ) {
    return Math.max(
      0,
      Math.min(
        10,
        guardada.percent / 10
      )
    );
  }

  return null;
}

export default function Bienestar({
  onBack,
}) {
  const [
    resultado,
    setResultado,
  ] = useState(
    leerResultado
  );

  useEffect(() => {
    const actualizar =
      () => {
        setResultado(
          leerResultado()
        );
      };

    actualizar();

    window.addEventListener(
      "storage",
      actualizar
    );

    window.addEventListener(
      "focus",
      actualizar
    );

    return () => {
      window.removeEventListener(
        "storage",
        actualizar
      );

      window.removeEventListener(
        "focus",
        actualizar
      );
    };
  }, []);

  if (!resultado) {
    return (
      <section
        style={{
          width: "100%",
          maxWidth: 430,
          margin: "0 auto",
          padding:
            "8px 14px 105px",
          color: "#30345d",
          fontFamily:
            "Nunito, Poppins, system-ui, sans-serif",
        }}
      >
        <button
          type="button"
          onClick={onBack}
          style={{
            border: 0,
            background:
              "transparent",
            color: "#51439d",
            padding:
              "7px 0",
            cursor:
              "pointer",
            display:
              "flex",
            alignItems:
              "center",
            gap: 5,
            fontWeight:
              800,
          }}
        >
          <ArrowLeft size={20} />
          Volver
        </button>

        <div
          style={{
            marginTop: 10,
            background:
              "rgba(255,255,255,.94)",
            border:
              "1px solid #e7e1f2",
            borderRadius: 22,
            padding: 24,
            textAlign:
              "center",
            boxShadow:
              "0 8px 22px rgba(102,80,150,.07)",
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              margin:
                "0 auto 12px",
              borderRadius:
                "50%",
              background:
                "#e9e4ff",
              display:
                "grid",
              placeItems:
                "center",
              fontSize: 34,
            }}
          >
            💜
          </div>

          <h1
            style={{
              margin: 0,
              color:
                "#51439d",
              fontSize: 24,
              fontWeight:
                900,
            }}
          >
            Mi bienestar
          </h1>

          <p
            style={{
              margin:
                "9px 0 0",
              color:
                "#747793",
              fontSize:
                12,
              lineHeight:
                1.5,
            }}
          >
            Todavía no has realizado
            el Test de bienestar.
          </p>

          <p
            style={{
              margin:
                "6px 0 0",
              color:
                "#9698aa",
              fontSize:
                11,
              lineHeight:
                1.5,
            }}
          >
            Cuando completes el test,
            tus resultados aparecerán
            aquí automáticamente.
          </p>
        </div>
      </section>
    );
  }

  const valores =
    areas.map(
      (area) => ({
        ...area,
        score:
          obtenerPuntaje(
            resultado,
            area
          ),
      })
    );

  const areasConResultado =
    valores.filter(
      (area) =>
        area.score !== null
    );

  const promedio =
    areasConResultado.length
      ? areasConResultado.reduce(
          (total, area) =>
            total +
            area.score,
          0
        ) /
        areasConResultado.length
      : 0;

  const areaMenor =
    areasConResultado.length
      ? [
          ...areasConResultado,
        ].sort(
          (a, b) =>
            a.score -
            b.score
        )[0]
      : null;

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 430,
        margin: "0 auto",
        padding:
          "8px 14px 105px",
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
          background:
            "transparent",
          color: "#51439d",
          padding:
            "7px 0",
          cursor:
            "pointer",
          display:
            "flex",
          alignItems:
            "center",
          gap: 5,
          fontWeight:
            800,
        }}
      >
        <ArrowLeft size={20} />
        Volver
      </button>

      {/* CABECERA */}

      <header
        style={{
          textAlign:
            "center",
          margin:
            "4px 0 16px",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            margin:
              "0 auto 9px",
            borderRadius:
              "50%",
            background:
              "#e9e4ff",
            color:
              "#7561d8",
            display:
              "grid",
            placeItems:
              "center",
          }}
        >
          <span
            style={{
              fontSize: 34,
            }}
          >
            💜
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            color:
              "#51439d",
            fontSize: 24,
            fontWeight:
              900,
          }}
        >
          Mi bienestar
        </h1>

        <p
          style={{
            margin:
              "5px auto 0",
            color:
              "#747793",
            fontSize:
              11.5,
          }}
        >
          Tus resultados del Test
          de bienestar.
        </p>
      </header>

      {/* RESULTADO GENERAL */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#f4efff,#ffeef6)",
          border:
            "1px solid #e7e1f2",
          borderRadius: 22,
          padding: 20,
          textAlign:
            "center",
          boxShadow:
            "0 8px 22px rgba(102,80,150,.07)",
          marginBottom: 14,
        }}
      >
        <div
          style={{
            color:
              "#747793",
            fontSize:
              10,
            fontWeight:
              900,
            letterSpacing:
              ".4px",
            marginBottom:
              4,
          }}
        >
          BIENESTAR GENERAL
        </div>

        <div
          style={{
            color:
              "#51439d",
            fontSize:
              42,
            lineHeight:
              1,
            fontWeight:
              900,
          }}
        >
          {promedio.toFixed(
            1
          )}

          <span
            style={{
              color:
                "#747793",
              fontSize:
                17,
              marginLeft:
                2,
            }}
          >
            /10
          </span>
        </div>

        <p
          style={{
            margin:
              "7px 0 0",
            color:
              "#747793",
            fontSize:
              10.5,
          }}
        >
          Resultado de tu último
          Test de bienestar.
        </p>
      </div>

      {/* ÁREAS */}

      <div
        style={{
          display:
            "grid",
          gap: 8,
        }}
      >
        {valores.map(
          (area) => {
            const Icon =
              area.icon;

            const score =
              area.score ===
              null
                ? 0
                : area.score;

            return (
              <div
                key={
                  area.key
                }
                style={{
                  background:
                    "rgba(255,255,255,.94)",
                  border:
                    "1px solid #e7e1f2",
                  borderRadius: 16,
                  padding:
                    "10px 11px",
                  boxShadow:
                    "0 5px 14px rgba(102,80,150,.05)",
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: 9,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius:
                        11,
                      background:
                        area.bg,
                      color:
                        area.color,
                      display:
                        "grid",
                      placeItems:
                        "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={17}
                    />
                  </span>

                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        display:
                          "flex",
                        justifyContent:
                          "space-between",
                        alignItems:
                          "center",
                        gap: 7,
                        marginBottom:
                          5,
                      }}
                    >
                      <strong
                        style={{
                          color:
                            "#51439d",
                          fontSize:
                            11.5,
                          fontWeight:
                            900,
                        }}
                      >
                        {
                          area.title
                        }
                      </strong>

                      <span
                        style={{
                          color:
                            area.color,
                          fontSize:
                            10.5,
                          fontWeight:
                            900,
                        }}
                      >
                        {area.score ===
                        null
                          ? "—/10"
                          : `${score.toFixed(
                              1
                            )}/10`}
                      </span>
                    </div>

                    <div
                      style={{
                        height: 6,
                        background:
                          "#eeeaf6",
                        borderRadius:
                          99,
                        overflow:
                          "hidden",
                      }}
                    >
                      <div
                        style={{
                          width:
                            `${Math.max(
                              0,
                              Math.min(
                                100,
                                score *
                                  10
                              )
                            )}%`,
                          height:
                            "100%",
                          background:
                            area.color,
                          borderRadius:
                            99,
                          transition:
                            "width .3s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* ÁREA A CUIDAR */}

      {areaMenor && (
        <div
          style={{
            background:
              "#fff7df",
            border:
              "1px solid #f0dfb2",
            borderRadius: 17,
            padding:
              "12px 14px",
            marginTop: 11,
          }}
        >
          <strong
            style={{
              display:
                "block",
              color:
                "#6d5c32",
              fontSize:
                11.5,
              marginBottom:
                4,
            }}
          >
            🌱 Área para prestar
            atención
          </strong>

          <strong
            style={{
              display:
                "block",
              color:
                "#51439d",
              fontSize:
                16,
              marginBottom:
                3,
            }}
          >
            {areaMenor.title}
          </strong>

          <p
            style={{
              margin: 0,
              color:
                "#766b51",
              fontSize:
                10.5,
              lineHeight:
                1.45,
            }}
          >
            {areaMenor.title} tiene
            el puntaje más bajo de
            tu último test. Puedes
            explorar los recursos
            relacionados en Mente360
            y avanzar poco a poco.
          </p>
        </div>
      )}

      {/* FECHA */}

      {resultado.date && (
        <p
          style={{
            textAlign:
              "center",
            margin:
              "10px 0 0",
            color:
              "#9698aa",
            fontSize:
              9.5,
          }}
        >
          Último resultado:
          {" "}
          {new Date(
            resultado.date
          ).toLocaleDateString(
            "es-PE"
          )}
        </p>
      )}

      {/* AVISO */}

      <div
        style={{
          marginTop: 9,
          padding:
            "10px 13px",
          borderRadius: 15,
          background:
            "#f7f4fc",
          color:
            "#747793",
          fontSize:
            9.5,
          lineHeight:
            1.4,
          textAlign:
            "center",
        }}
      >
        💜 Este resultado es
        orientativo y educativo.
        No es un diagnóstico
        psicológico.
      </div>
    </section>
  );
}