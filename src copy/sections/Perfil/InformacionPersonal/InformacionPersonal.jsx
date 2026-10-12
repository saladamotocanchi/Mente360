import {
  ArrowLeft,
  UserRound,
  Mail,
  Lock,
  CheckCircle2,
} from "lucide-react";

export default function InformacionPersonal({ onBack, user }) {
  const name = user?.name || "Usuario";
  const email = user?.email || "No registrado";

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "760px",
        margin: "0 auto",
        padding: "8px 14px 110px",
        color: "#30345d",
        fontFamily: "Nunito, Poppins, system-ui, sans-serif",
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
        <ArrowLeft size={21} strokeWidth={2.3} />
        Volver
      </button>

      {/* ENCABEZADO */}
      <header
        style={{
          textAlign: "center",
          marginTop: "8px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "76px",
            height: "76px",
            margin: "0 auto 12px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #e9e4ff, #f8c7df)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 10px 25px rgba(102,80,150,.10)",
          }}
        >
          <UserRound
            size={38}
            color="#51439d"
            strokeWidth={1.8}
          />
        </div>

        <h1
          style={{
            margin: 0,
            color: "#51439d",
            fontSize: "28px",
            fontWeight: 900,
            lineHeight: 1.15,
          }}
        >
          Información personal
        </h1>

        <p
          style={{
            margin: "8px auto 0",
            maxWidth: "470px",
            color: "#747793",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          Aquí puedes consultar la información de tu cuenta.
        </p>
      </header>

      {/* INFORMACIÓN DE LA CUENTA */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e7e1f2",
          borderRadius: "24px",
          padding: "22px",
          boxShadow: "0 10px 30px rgba(102,80,150,.10)",
        }}
      >
        {/* NOMBRE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px 0",
            borderBottom: "1px solid #eee9f5",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              flexShrink: 0,
              borderRadius: "15px",
              background: "#e9e4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <UserRound
              size={23}
              color="#51439d"
              strokeWidth={2}
            />
          </div>

          <div style={{ minWidth: 0 }}>
            <div
              style={{
                color: "#747793",
                fontSize: "12px",
                fontWeight: 800,
                marginBottom: "4px",
              }}
            >
              Nombre
            </div>

            <div
              style={{
                color: "#30345d",
                fontSize: "16px",
                fontWeight: 900,
                wordBreak: "break-word",
              }}
            >
              {name}
            </div>
          </div>
        </div>

        {/* CORREO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px 0",
            borderBottom: "1px solid #eee9f5",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              flexShrink: 0,
              borderRadius: "15px",
              background: "#fff0f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Mail
              size={23}
              color="#c46b9a"
              strokeWidth={2}
            />
          </div>

          <div style={{ minWidth: 0 }}>
            <div
              style={{
                color: "#747793",
                fontSize: "12px",
                fontWeight: 800,
                marginBottom: "4px",
              }}
            >
              Correo electrónico
            </div>

            <div
              style={{
                color: "#30345d",
                fontSize: "16px",
                fontWeight: 800,
                wordBreak: "break-word",
              }}
            >
              {email}
            </div>
          </div>
        </div>

        {/* CONTRASEÑA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px 0",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              flexShrink: 0,
              borderRadius: "15px",
              background: "#cfeaf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lock
              size={23}
              color="#477d9c"
              strokeWidth={2}
            />
          </div>

          <div style={{ minWidth: 0 }}>
            <div
              style={{
                color: "#747793",
                fontSize: "12px",
                fontWeight: 800,
                marginBottom: "4px",
              }}
            >
              Contraseña
            </div>

            <div
              style={{
                color: "#30345d",
                fontSize: "16px",
                fontWeight: 900,
                letterSpacing: "3px",
              }}
            >
              ••••••••
            </div>
          </div>
        </div>
      </div>

      {/* CUENTA LOCAL */}
      <div
        style={{
          marginTop: "18px",
          background: "#d5f1df",
          borderRadius: "20px",
          padding: "16px 18px",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <CheckCircle2
          size={22}
          color="#4b9a68"
          strokeWidth={2}
          style={{
            flexShrink: 0,
            marginTop: "1px",
          }}
        />

        <div>
          <div
            style={{
              color: "#3e7753",
              fontSize: "14px",
              fontWeight: 900,
              marginBottom: "3px",
            }}
          >
            Tu cuenta está activa
          </div>

          <div
            style={{
              color: "#5d8069",
              fontSize: "12px",
              lineHeight: 1.45,
            }}
          >
            Esta información corresponde a la cuenta
            actualmente iniciada en Mente360.
          </div>
        </div>
      </div>

      {/* NOTA */}
      <p
        style={{
          textAlign: "center",
          color: "#747793",
          fontSize: "11px",
          lineHeight: 1.45,
          margin: "18px auto 0",
          maxWidth: "500px",
        }}
      >
        Mente360 es una herramienta de orientación y
        bienestar. No realiza diagnósticos psicológicos.
      </p>
    </section>
  );
}