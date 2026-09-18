import { useState } from "react";
import {
  ArrowLeft,
  UserRound,
  Heart,
  Settings,
  Shield,
  ChevronRight,
} from "lucide-react";

import InformacionPersonal from "./InformacionPersonal/InformacionPersonal";
import Bienestar from "./Bienestar/Bienestar";
import Configuracion from "./Configuracion/Configuracion";
import Seguridad from "./Seguridad/Seguridad";

export default function Perfil({ onBack, user }) {
  const [selectedPage, setSelectedPage] = useState(null);

  const firstName = user?.name
    ? user.name.split(" ")[0]
    : "Usuario";

  /* INFORMACIÓN PERSONAL */
  if (selectedPage === "InformacionPersonal") {
    return (
      <InformacionPersonal
        user={user}
        onBack={() => setSelectedPage(null)}
      />
    );
  }

  /* MI BIENESTAR */
  if (selectedPage === "Bienestar") {
    return (
      <Bienestar
        user={user}
        onBack={() => setSelectedPage(null)}
      />
    );
  }

  /* CONFIGURACIÓN */
  if (selectedPage === "Configuracion") {
    return (
      <Configuracion
        onBack={() => setSelectedPage(null)}
      />
    );
  }

  /* SEGURIDAD */
  if (selectedPage === "Seguridad") {
    return (
      <Seguridad
        onBack={() => setSelectedPage(null)}
      />
    );
  }

  return (
    <section
      className="profile-page"
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
            "linear-gradient(135deg, #e9e4ff 0%, #fff0f7 55%, #cfeaf8 100%)",
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
            width: "76px",
            height: "76px",
            borderRadius: "24px",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "38px",
            marginBottom: "16px",
            boxShadow: "0 8px 22px rgba(102,80,150,.10)",
            position: "relative",
          }}
        >
          🧑🏻‍🎨
        </div>

        <p
          style={{
            margin: 0,
            color: "#747793",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Mi perfil
        </p>

        <h1
          style={{
            margin: "5px 0 8px",
            color: "#51439d",
            fontSize: "30px",
            lineHeight: 1.2,
          }}
        >
          Hola, {firstName} 💜
        </h1>

        <p
          style={{
            margin: 0,
            color: "#747793",
            lineHeight: 1.6,
            maxWidth: "600px",
          }}
        >
          Aquí puedes consultar tu información y personalizar tu experiencia
          en Mente360.
        </p>
      </div>

      {/* OPCIONES */}
      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {/* INFORMACIÓN PERSONAL */}
        <button
          onClick={() => setSelectedPage("InformacionPersonal")}
          style={{
            width: "100%",
            border: "1px solid #e7e1f2",
            background: "#ffffff",
            borderRadius: "22px",
            padding: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            textAlign: "left",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "16px",
                background: "#e9e4ff",
                color: "#7561d8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <UserRound size={23} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Información personal
              </h3>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Consulta los datos de tu cuenta
              </p>
            </div>
          </div>

          <ChevronRight
            size={21}
            color="#8d86aa"
            style={{ flexShrink: 0 }}
          />
        </button>

        {/* MI BIENESTAR */}
        <button
          onClick={() => setSelectedPage("Bienestar")}
          style={{
            width: "100%",
            border: "1px solid #e7e1f2",
            background: "#ffffff",
            borderRadius: "22px",
            padding: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            textAlign: "left",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "16px",
                background: "#fff0f7",
                color: "#df91b5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Heart size={23} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Mi bienestar
              </h3>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Revisa tus resultados y áreas de bienestar
              </p>
            </div>
          </div>

          <ChevronRight
            size={21}
            color="#8d86aa"
            style={{ flexShrink: 0 }}
          />
        </button>

        {/* CONFIGURACIÓN */}
        <button
          onClick={() => setSelectedPage("Configuracion")}
          style={{
            width: "100%",
            border: "1px solid #e7e1f2",
            background: "#ffffff",
            borderRadius: "22px",
            padding: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            textAlign: "left",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "16px",
                background: "#cfeaf8",
                color: "#5b91b0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Settings size={23} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Configuración
              </h3>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Personaliza algunas opciones de Mente360
              </p>
            </div>
          </div>

          <ChevronRight
            size={21}
            color="#8d86aa"
            style={{ flexShrink: 0 }}
          />
        </button>

        {/* SEGURIDAD */}
        <button
          onClick={() => setSelectedPage("Seguridad")}
          style={{
            width: "100%",
            border: "1px solid #e7e1f2",
            background: "#ffffff",
            borderRadius: "22px",
            padding: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            textAlign: "left",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "16px",
                background: "#d5f1df",
                color: "#5a9b70",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Shield size={23} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Seguridad
              </h3>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Opciones de seguridad de tu cuenta
              </p>
            </div>
          </div>

          <ChevronRight
            size={21}
            color="#8d86aa"
            style={{ flexShrink: 0 }}
          />
        </button>
      </div>

      {/* AVISO */}
      <div
        style={{
          marginTop: "22px",
          background: "#fffaf0",
          border: "1px solid #f2e4bd",
          borderRadius: "20px",
          padding: "17px 18px",
          color: "#747793",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        🌱 Mente360 es una herramienta de orientación y bienestar. No
        reemplaza la atención de un profesional de la salud mental.
      </div>
    </section>
  );
}