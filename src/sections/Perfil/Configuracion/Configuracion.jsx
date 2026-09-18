import { ArrowLeft, Bell, Moon, Palette, Save } from "lucide-react";
import { useState } from "react";

export default function Configuracion({ onBack }) {
  const [notificaciones, setNotificaciones] = useState(true);
  const [modoSuave, setModoSuave] = useState(false);
  const [guardado, setGuardado] = useState(false);

  const guardarConfiguracion = () => {
    localStorage.setItem(
      "mente360_configuracion",
      JSON.stringify({
        notificaciones,
        modoSuave,
      })
    );

    setGuardado(true);

    setTimeout(() => {
      setGuardado(false);
    }, 2000);
  };

  return (
    <section
      style={{
        minHeight: "calc(100vh - 40px)",
        padding: "10px 0 40px",
      }}
    >
      <button
        onClick={onBack}
        style={{
          border: "none",
          background: "white",
          color: "#51439d",
          padding: "10px 16px",
          borderRadius: "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "700",
          marginBottom: "18px",
          boxShadow: "0 6px 18px rgba(102,80,150,.08)",
        }}
      >
        <ArrowLeft size={18} />
        Volver
      </button>

      <div
        style={{
          background: "linear-gradient(135deg, #e9e4ff, #fff0f7)",
          borderRadius: "28px",
          padding: "28px",
          marginBottom: "22px",
        }}
      >
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "18px",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            marginBottom: "14px",
          }}
        >
          ⚙️
        </div>

        <h1
          style={{
            margin: 0,
            color: "#51439d",
            fontSize: "30px",
          }}
        >
          Configuración
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            color: "#747793",
            lineHeight: 1.6,
          }}
        >
          Personaliza algunas opciones de Mente360 según tus preferencias.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #e7e1f2",
            borderRadius: "22px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
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
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "#fff0f7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#df91b5",
              }}
            >
              <Bell size={22} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Notificaciones
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Permitir recordatorios de bienestar
              </p>
            </div>
          </div>

          <button
            onClick={() => setNotificaciones(!notificaciones)}
            style={{
              width: "52px",
              height: "30px",
              border: "none",
              borderRadius: "20px",
              background: notificaciones ? "#7561d8" : "#d8d5df",
              padding: "3px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: notificaciones ? "flex-end" : "flex-start",
            }}
            aria-label="Activar o desactivar notificaciones"
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#fff",
                display: "block",
              }}
            />
          </button>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #e7e1f2",
            borderRadius: "22px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
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
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "#e9e4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#7561d8",
              }}
            >
              <Moon size={22} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Modo suave
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Una experiencia visual más tranquila
              </p>
            </div>
          </div>

          <button
            onClick={() => setModoSuave(!modoSuave)}
            style={{
              width: "52px",
              height: "30px",
              border: "none",
              borderRadius: "20px",
              background: modoSuave ? "#7561d8" : "#d8d5df",
              padding: "3px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: modoSuave ? "flex-end" : "flex-start",
            }}
            aria-label="Activar o desactivar modo suave"
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#fff",
                display: "block",
              }}
            />
          </button>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #e7e1f2",
            borderRadius: "22px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(102,80,150,.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: "#cfeaf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5b91b0",
              }}
            >
              <Palette size={22} />
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#30345d",
                  fontSize: "17px",
                }}
              >
                Apariencia
              </h3>

              <p
                style={{
                  margin: "4px 0 0",
                  color: "#747793",
                  fontSize: "14px",
                }}
              >
                Mente360 utiliza su diseño pastel para mantener una experiencia
                agradable.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#f9f7fd",
              borderRadius: "16px",
              padding: "14px",
              color: "#747793",
              fontSize: "14px",
            }}
          >
            🌸 Diseño pastel y amigable
          </div>
        </div>

        <button
          onClick={guardarConfiguracion}
          style={{
            border: "none",
            borderRadius: "18px",
            padding: "15px 20px",
            background: "#7561d8",
            color: "#fff",
            fontWeight: "800",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "9px",
            boxShadow: "0 8px 20px rgba(117,97,216,.22)",
          }}
        >
          <Save size={19} />
          {guardado ? "Configuración guardada ✓" : "Guardar configuración"}
        </button>
      </div>
    </section>
  );
}