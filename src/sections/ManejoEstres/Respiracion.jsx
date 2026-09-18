import React, { useEffect, useState } from "react";

export default function Respiracion({ onBack }) {
  const [activo, setActivo] = useState(false);
  const [fase, setFase] = useState("Listo");
  const [segundos, setSegundos] = useState(0);
  const [ciclo, setCiclo] = useState(0);

  useEffect(() => {
    if (!activo) return;

    const intervalo = setInterval(() => {
      setSegundos((actual) => {
        const nuevo = actual + 1;

        if (nuevo <= 3) {
          setFase("Inhala 🌿");
        } else if (nuevo <= 5) {
          setFase("Mantén 💜");
        } else if (nuevo <= 8) {
          setFase("Exhala 🌸");
        }

        if (nuevo >= 8) {
          setCiclo((actualCiclo) => actualCiclo + 1);
          return 0;
        }

        return nuevo;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [activo]);

  const iniciar = () => {
    setActivo(true);
    setFase("Inhala 🌿");
  };

  const pausar = () => {
    setActivo(false);
    setFase("Pausado");
  };

  const reiniciar = () => {
    setActivo(false);
    setFase("Listo");
    setSegundos(0);
    setCiclo(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff8fc",
        padding: "28px 20px 100px",
        fontFamily: "Nunito, Poppins, sans-serif",
        color: "#30345d",
      }}
    >
      {/* Volver */}
      <button
        onClick={onBack}
        style={{
          border: "none",
          background: "#e9e4ff",
          color: "#51439d",
          borderRadius: "14px",
          padding: "10px 16px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "700",
          marginBottom: "24px",
        }}
      >
        ← Volver
      </button>

      {/* Encabezado */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "8px" }}>
          🫁
        </div>

        <h1
          style={{
            margin: 0,
            color: "#51439d",
            fontSize: "32px",
            fontWeight: "800",
          }}
        >
          Ejercicios de respiración
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#747793",
            fontSize: "17px",
            lineHeight: 1.6,
          }}
        >
          Respira lentamente y date unos minutos para volver a la calma.
        </p>
      </div>

      {/* Información */}
      <div
        style={{
          maxWidth: "760px",
          margin: "28px auto 20px",
          background: "#ffffff",
          border: "1px solid #e7e1f2",
          borderRadius: "24px",
          padding: "22px",
          boxShadow: "0 10px 30px rgba(102,80,150,.10)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#7561d8",
            fontSize: "21px",
          }}
        >
          🌿 ¿Para qué sirve?
        </h2>

        <p
          style={{
            marginBottom: 0,
            color: "#747793",
            lineHeight: 1.7,
            fontSize: "15px",
          }}
        >
          Cuando estás tenso o preocupado, puedes probar a disminuir
          voluntariamente el ritmo de tu respiración. Esta actividad te
          acompaña durante unos minutos para practicar una respiración
          lenta y tranquila.
        </p>
      </div>

      {/* Ejercicio */}
      <div
        style={{
          maxWidth: "760px",
          margin: "20px auto",
          background: "linear-gradient(135deg, #e9e4ff, #fff0f7)",
          borderRadius: "30px",
          padding: "30px 20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(102,80,150,.10)",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            color: "#747793",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          RESPIRACIÓN GUIADA
        </p>

        <div
          style={{
            width: "190px",
            height: "190px",
            margin: "20px auto",
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 35px rgba(102,80,150,.15)",
            transition: "transform .5s ease",
            transform:
              fase === "Inhala 🌿"
                ? "scale(1.12)"
                : fase === "Exhala 🌸"
                ? "scale(.92)"
                : "scale(1)",
          }}
        >
          <div
            style={{
              fontSize: "27px",
              fontWeight: "800",
              color: "#51439d",
            }}
          >
            {fase}
          </div>

          <div
            style={{
              marginTop: "8px",
              color: "#747793",
              fontSize: "14px",
            }}
          >
            {activo ? `${segundos} / 8 segundos` : "Cuando estés listo/a"}
          </div>
        </div>

        <p
          style={{
            color: "#51439d",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          Inhala 3 segundos · Mantén 2 · Exhala 3
        </p>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {!activo ? (
            <button
              onClick={iniciar}
              style={{
                border: "none",
                background: "#7561d8",
                color: "#ffffff",
                borderRadius: "16px",
                padding: "13px 25px",
                cursor: "pointer",
                fontWeight: "800",
                fontSize: "15px",
              }}
            >
              ▶ Iniciar
            </button>
          ) : (
            <button
              onClick={pausar}
              style={{
                border: "none",
                background: "#f8c7df",
                color: "#51439d",
                borderRadius: "16px",
                padding: "13px 25px",
                cursor: "pointer",
                fontWeight: "800",
                fontSize: "15px",
              }}
            >
              ⏸ Pausar
            </button>
          )}

          <button
            onClick={reiniciar}
            style={{
              border: "none",
              background: "#ffffff",
              color: "#51439d",
              borderRadius: "16px",
              padding: "13px 25px",
              cursor: "pointer",
              fontWeight: "800",
              fontSize: "15px",
            }}
          >
            ↻ Reiniciar
          </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            color: "#747793",
            fontSize: "14px",
          }}
        >
          Ciclos completados: <strong>{ciclo}</strong>
        </div>
      </div>

      {/* Consejo */}
      <div
        style={{
          maxWidth: "760px",
          margin: "20px auto",
          background: "#d5f1df",
          borderRadius: "20px",
          padding: "18px 20px",
          color: "#426b52",
          lineHeight: 1.6,
          fontSize: "14px",
        }}
      >
        💚 <strong>Recuerda:</strong> no necesitas hacerlo perfectamente.
        Busca un ritmo lento y cómodo. Si concentrarte en la respiración
        te resulta incómodo, detén el ejercicio y vuelve a respirar de
        manera natural.
      </div>
    </div>
  );
}