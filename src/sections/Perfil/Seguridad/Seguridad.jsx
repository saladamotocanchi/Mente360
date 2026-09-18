import { useState } from "react";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

export default function Seguridad({ onBack }) {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const cambiarPassword = () => {
    setMensaje("La opción de cambio de contraseña está disponible.");
  };

  return (
    <section
      style={{
        minHeight: "calc(100vh - 40px)",
        padding: "10px 0 40px",
      }}
    >
      {/* VOLVER */}
      <button
        onClick={onBack}
        style={{
          border: "none",
          background: "#ffffff",
          color: "#51439d",
          padding: "10px 16px",
          borderRadius: "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "700",
          marginBottom: "20px",
          boxShadow: "0 6px 18px rgba(102,80,150,.08)",
        }}
      >
        <ArrowLeft size={18} />
        Volver
      </button>

      {/* ENCABEZADO */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #d5f1df 0%, #e9e4ff 55%, #cfeaf8 100%)",
          borderRadius: "28px",
          padding: "30px",
          marginBottom: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(255,255,255,.35)",
            right: "-30px",
            top: "-35px",
          }}
        />

        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "22px",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#5a9b70",
            marginBottom: "16px",
            boxShadow: "0 8px 22px rgba(102,80,150,.10)",
            position: "relative",
          }}
        >
          <Shield size={36} />
        </div>

        <h1
          style={{
            margin: 0,
            color: "#51439d",
            fontSize: "30px",
            lineHeight: 1.2,
          }}
        >
          Seguridad
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            color: "#747793",
            lineHeight: 1.6,
          }}
        >
          Revisa y protege la información relacionada con tu cuenta.
        </p>
      </div>

      {/* ESTADO DE CUENTA */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e7e1f2",
          borderRadius: "22px",
          padding: "20px",
          marginBottom: "16px",
          boxShadow: "0 8px 24px rgba(102,80,150,.07)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "15px",
              background: "#d5f1df",
              color: "#5a9b70",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircle2 size={24} />
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                color: "#30345d",
                fontSize: "17px",
              }}
            >
              Cuenta protegida
            </h3>

            <p
              style={{
                margin: "4px 0 0",
                color: "#747793",
                fontSize: "14px",
              }}
            >
              Tu cuenta está activa.
            </p>
          </div>
        </div>
      </div>

      {/* CONTRASEÑA */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e7e1f2",
          borderRadius: "22px",
          padding: "20px",
          marginBottom: "16px",
          boxShadow: "0 8px 24px rgba(102,80,150,.07)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "15px",
              background: "#e9e4ff",
              color: "#7561d8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lock size={23} />
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                color: "#30345d",
                fontSize: "17px",
              }}
            >
              Contraseña
            </h3>

            <p
              style={{
                margin: "4px 0 0",
                color: "#747793",
                fontSize: "14px",
              }}
            >
              Mantén protegida tu cuenta.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#f9f7fd",
            borderRadius: "15px",
            padding: "13px 15px",
            marginBottom: "14px",
          }}
        >
          <KeyRound size={19} color="#7561d8" />

          <span
            style={{
              flex: 1,
              color: "#30345d",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            {mostrarPassword ? "Mente360" : "••••••••"}
          </span>

          <button
            onClick={() => setMostrarPassword(!mostrarPassword)}
            style={{
              border: "none",
              background: "transparent",
              color: "#7561d8",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Mostrar u ocultar contraseña"
          >
            {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          onClick={cambiarPassword}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "16px",
            padding: "13px 18px",
            background: "#7561d8",
            color: "#ffffff",
            fontWeight: "800",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Cambiar contraseña
        </button>

        {mensaje && (
          <p
            style={{
              margin: "12px 0 0",
              color: "#5a9b70",
              fontSize: "14px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            ✓ {mensaje}
          </p>
        )}
      </div>

      {/* CONSEJO */}
      <div
        style={{
          background: "#fffaf0",
          border: "1px solid #f2e4bd",
          borderRadius: "20px",
          padding: "17px 18px",
          color: "#747793",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        🔐 Recuerda utilizar una contraseña segura y no compartirla con otras
        personas.
      </div>
    </section>
  );
}