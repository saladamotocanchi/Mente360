
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import "./styles.css";

import ComoMeSiento from "./sections/ComoMeSiento";
import ManejoEstres from "./sections/ManejoEstres";
import Autoestima from "./sections/Autoestima";
import Relaciones from "./sections/Relaciones";
import Bullying from "./sections/Bullying";
import EstresAcademico from "./sections/EstresAcademico";
import RedesSociales from "./sections/RedesSociales";
import BienestarDiario from "./sections/BienestarDiario";
import DiarioEmocional from "./sections/DiarioEmocional";
import MapaBienestar from "./sections/MapaBienestar";
import TestBienestar from "./sections/TestBienestar";
import NecesitoAyuda from "./sections/NecesitoAyuda";
import Perfil from "./sections/Perfil/Perfil";
import EstadisticasPublicas from "./sections/EstadisticasPublicas";

import {
  Bell,
  BookOpen,
  Brain,
  ChevronRight,
  CircleHelp,
  Heart,
  Home,
  Moon,
  NotebookPen,
  Search,
  Shield,
  Smartphone,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

/* =========================================================
   HERRAMIENTAS DEL INICIO
========================================================= */

const tools = [
  [
    "¿Cómo me siento?",
    "Reconoce tus emociones y observa tus cambios.",
    Brain,
    "lavender",
  ],
  [
    "Manejo del estrés y ansiedad",
    "Ejercicios y técnicas para tu calma.",
    Zap,
    "blue",
  ],
  [
    "Autoestima",
    "Reconoce tus cualidades y fortalezas.",
    Heart,
    "pink",
  ],
  [
    "Relaciones",
    "Mejora tu comunicación y tus vínculos.",
    Users,
    "green",
  ],
  [
    "Bullying y violencia",
    "Infórmate y aprende a pedir ayuda.",
    Shield,
    "lavender",
  ],
  [
    "Estrés académico",
    "Organiza tu tiempo y estudia mejor.",
    BookOpen,
    "yellow",
  ],
  [
    "Redes sociales",
    "Usa las redes de forma saludable.",
    Smartphone,
    "pink",
  ],
  [
    "Bienestar diario",
    "Cuida tus hábitos y tu energía.",
    Moon,
    "blue",
  ],
  [
    "Diario emocional",
    "Escribe lo que sientes cuando lo necesites.",
    NotebookPen,
    "green",
  ],
];

/* =========================================================
   LOGO
========================================================= */

function Logo({ compact = false }) {
  return (
    <div
      className={`logo ${
        compact ? "logo-compact" : ""
      }`}
    >
      <div className="logo-brain">
        <Brain size={compact ? 25 : 34} />
      </div>

      <span>
        Mente
        <span>360</span>
      </span>
    </div>
  );
}

/* =========================================================
   AUTENTICACIÓN: REGISTRO E INICIO DE SESIÓN
========================================================= */

function AuthScreen({ onEnter }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const clearFeedback = () => {
    setError("");
    setMessage("");
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setPassword("");
    clearFeedback();
  };

  const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  /* ---------------------------------------------------------
     REGISTRAR O INICIAR SESIÓN
  --------------------------------------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearFeedback();

    if (submitting) return;

    const cleanEmail = email.trim().toLowerCase();

    if (!validEmail(cleanEmail)) {
      setError("Escribe un correo electrónico válido.");
      return;
    }

    if (!password) {
      setError("Escribe tu contraseña.");
      return;
    }

    if (mode === "register") {
      if (name.trim().length < 2) {
        setError("Escribe tu nombre para crear la cuenta.");
        return;
      }

      if (password.length < 6) {
        setError(
          "La contraseña debe tener al menos 6 caracteres."
        );
        return;
      }
    }

    setSubmitting(true);

    try {
      if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              display_name: name.trim(),
            },
          },
        });

        if (error) throw error;

        if (data.session && data.user) {
          onEnter({
            id: data.user.id,
            name:
              data.user.user_metadata?.display_name ||
              name.trim(),
            email: data.user.email,
          });
        } else {
          setMessage(
            "Cuenta creada. Revisa tu correo para confirmar el registro antes de ingresar."
          );
          setMode("login");
          setPassword("");
        }

        return;
      }

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

      if (error) throw error;

      const { data: profile, error: profileError } =
        await supabase
          .from("profiles")
          .select("display_name")
          .eq("id", data.user.id)
          .maybeSingle();

      if (profileError) throw profileError;

      onEnter({
        id: data.user.id,
        name:
          profile?.display_name ||
          data.user.user_metadata?.display_name ||
          data.user.email,
        email: data.user.email,
      });
    } catch (err) {
      setError(
        err.message ||
          "No se pudo completar la operación."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------------------------------------------------
     RECUPERACIÓN DE CONTRASEÑA
  --------------------------------------------------------- */

  const handleForgotPassword = async () => {
    clearFeedback();

    const cleanEmail = email.trim().toLowerCase();

    if (!validEmail(cleanEmail)) {
      setError("Primero escribe tu correo electrónico.");
      return;
    }

    try {
      const { error } =
        await supabase.auth.resetPasswordForEmail(
          cleanEmail,
          {
            redirectTo: window.location.origin,
          }
        );

      if (error) throw error;

      setMessage(
        "Si el correo corresponde a una cuenta, recibirás instrucciones para restablecer la contraseña."
      );
    } catch {
      setError(
        "No se pudo solicitar la recuperación. Revisa la configuración del correo y las URL permitidas en Supabase."
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration auth-decoration-one">
        ✦
      </div>

      <div className="auth-decoration auth-decoration-two">
        ♡
      </div>

      <div className="auth-decoration auth-decoration-three">
        ✧
      </div>

      {/* PARTE IZQUIERDA */}

      <section className="auth-visual">
        <div className="auth-brand">
          <Logo />
        </div>

        <div className="auth-illustration">
          <div className="auth-orbit">◜　　◝</div>

          <div className="auth-brain-emoji">🧠</div>

          <div className="auth-heart">♥</div>

          <div className="auth-cloud">☁️</div>
        </div>

        <h1>
          Tu bienestar,
          <br />
          <span>en un solo lugar.</span>
        </h1>

        <p>
          Entiende lo que sientes,
          cuida tu mente y busca apoyo.
        </p>

        <div className="auth-dots">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </section>

      {/* FORMULARIO */}

      <section className="auth-card">
        <div className="auth-heading">
          <span className="welcome-icon">💜</span>

          <h2>
            {mode === "login"
              ? "¡Qué bueno verte!"
              : "Crea tu cuenta"}
          </h2>

          <p>
            {mode === "login"
              ? "Ingresa para continuar cuidando tu bienestar."
              : "Comienza tu camino hacia un mayor bienestar."}
          </p>
        </div>

        {/* PESTAÑAS */}

        <div className="auth-tabs">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => switchMode("login")}
          >
            Ingresar
          </button>

          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => switchMode("register")}
          >
            Crear cuenta
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* NOMBRE */}

          {mode === "register" && (
            <label className="field">
              <span>Nombre</span>

              <div>
                <UserRound size={18} />

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                />
              </div>
            </label>
          )}

          {/* CORREO */}

          <label className="field">
            <span>Correo electrónico</span>

            <div>
              <span className="field-symbol">✉</span>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="tu@correo.com"
                autoComplete="email"
              />
            </div>
          </label>

          {/* CONTRASEÑA */}

          <label className="field">
            <span>Contraseña</span>

            <div>
              <span className="field-symbol">🔒</span>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Tu contraseña"
                autoComplete={
                  mode === "login"
                    ? "current-password"
                    : "new-password"
                }
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword((value) => !value)
                }
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </label>

          {/* OPCIONES DE INGRESO */}

          {mode === "login" && (
            <div className="auth-options">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                />

                <span>Recordarme</span>
              </label>

              <button
                type="button"
                onClick={handleForgotPassword}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}

          {/* MENSAJES */}

          {error && (
            <div className="auth-feedback error" role="alert">
              ⚠️ {error}
            </div>
          )}

          {message && (
            <div className="auth-feedback success" role="status">
              💜 {message}
            </div>
          )}

          {/* BOTÓN PRINCIPAL */}

          <button
            className="primary-auth-button"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Procesando..."
              : mode === "login"
                ? "Ingresar a Mente360"
                : "Crear mi cuenta"}

            {!submitting && <ChevronRight size={18} />}
          </button>
        </form>

        {/* CAMBIAR MODO */}

        <p className="auth-switch">
          {mode === "login"
            ? "¿Aún no tienes una cuenta?"
            : "¿Ya tienes una cuenta?"}

          <button
            type="button"
            onClick={() =>
              switchMode(
                mode === "login" ? "register" : "login"
              )
            }
          >
            {mode === "login"
              ? " Crear cuenta"
              : " Ingresar"}
          </button>
        </p>

        <p className="privacy-note">
          🔒 Tu información personal se mantiene privada y segura.
        </p>
      </section>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({ user, onLogout }) {
  const [activeSection, setActiveSection] = useState("Inicio");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const searchItems = [
    {
      label: "¿Cómo me siento?",
      section: "¿Cómo me siento?",
      description: "Reconoce tus emociones y observa tus cambios.",
      icon: Brain,
      keywords: "como me siento emociones sentir animo",
    },
    {
      label: "Manejo del estrés y ansiedad",
      section: "Manejo del estrés y ansiedad",
      description: "Ejercicios y técnicas para tu calma.",
      icon: Zap,
      keywords:
        "estres estrés ansiedad calma relajacion relajación respiracion respiración",
    },
    {
      label: "Autoestima",
      section: "Autoestima",
      description: "Reconoce tus cualidades y fortalezas.",
      icon: Heart,
      keywords: "autoestima cualidades confianza logros",
    },
    {
      label: "Relaciones",
      section: "Relaciones",
      description: "Mejora tu comunicación y tus vínculos.",
      icon: Users,
      keywords:
        "relaciones comunicacion comunicación amistades limites límites conflictos",
    },
    {
      label: "Bullying y violencia",
      section: "Bullying y violencia",
      description: "Infórmate y aprende a pedir ayuda.",
      icon: Shield,
      keywords: "bullying violencia acoso ayuda",
    },
    {
      label: "Estrés académico",
      section: "Estrés académico",
      description: "Organiza tu tiempo y estudia mejor.",
      icon: BookOpen,
      keywords:
        "estres estrés academico académico estudios estudiar tareas tiempo",
    },
    {
      label: "Redes sociales",
      section: "Redes sociales",
      description: "Usa las redes de forma saludable.",
      icon: Smartphone,
      keywords:
        "redes sociales celular comparacion comparación descanso digital contenido",
    },
    {
      label: "Bienestar diario",
      section: "Bienestar diario",
      description: "Cuida tus hábitos y tu energía.",
      icon: Moon,
      keywords:
        "bienestar diario habitos hábitos sueño sueno movimiento alimentacion alimentación",
    },
    {
      label: "Diario emocional",
      section: "Diario emocional",
      description: "Escribe lo que sientes cuando lo necesites.",
      icon: NotebookPen,
      keywords: "diario emocional escribir sentimientos",
    },
    {
      label: "Mapa de bienestar",
      section: "Mapa de bienestar",
      description: "Observa tus resultados de bienestar.",
      icon: BookOpen,
      keywords: "mapa resultados progreso areas áreas",
    },
    {
      label: "Test de bienestar",
      section: "Test de bienestar",
      description: "Evalúa tus áreas de bienestar.",
      icon: Zap,
      keywords: "test bienestar preguntas evaluacion evaluación puntaje",
    },
    {
      label: "Necesito ayuda",
      section: "Necesito ayuda",
      description: "Encuentra orientación, apoyo y opciones de ayuda.",
      icon: CircleHelp,
      keywords:
        "ayuda apoyo psicologo psicólogo lineas líneas instituciones",
    },
    {
      label: "Perfil",
      section: "Perfil",
      description: "Consulta tu información y bienestar.",
      icon: UserRound,
      keywords:
        "perfil cuenta configuracion configuración seguridad informacion información",
    },
  ];

  const normalizeSearch = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const query = normalizeSearch(searchTerm.trim());

  const searchResults = query
    ? searchItems.filter((item) => {
        const searchable = normalizeSearch(
          `${item.label} ${item.description} ${item.keywords}`
        );

        return searchable.includes(query);
      })
    : [];

  const goToSection = (label) => {
    setActiveSection(label);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
    const props = {
      onBack: () => goToSection("Inicio"),
      user,
      onLogout,
    };

    switch (activeSection) {
      case "¿Cómo me siento?":
        return <ComoMeSiento {...props} />;

      case "Manejo del estrés y ansiedad":
        return <ManejoEstres {...props} />;

      case "Autoestima":
        return <Autoestima {...props} />;

      case "Relaciones":
        return <Relaciones {...props} />;

      case "Bullying y violencia":
        return <Bullying {...props} />;

      case "Estrés académico":
        return <EstresAcademico {...props} />;

      case "Redes sociales":
        return <RedesSociales {...props} />;

      case "Bienestar diario":
        return <BienestarDiario {...props} />;

      case "Diario emocional":
        return <DiarioEmocional {...props} />;

      case "Mapa de bienestar":
        return <MapaBienestar {...props} />;

      case "Test de bienestar":
        return <TestBienestar {...props} />;

      case "Perfil":
        return <Perfil {...props} />;

      case "Necesito ayuda":
        return <NecesitoAyuda {...props} />;

      default:
        return null;
    }
  };

  return (
    <div className="app-shell">
      <main className="main">
        {/* BARRA SUPERIOR */}

        <header className="topbar">
          <div className="desktop-logo">
            <Logo compact />
          </div>

          {/* BUSCADOR */}

          <div
            className="search"
            style={{ position: "relative" }}
          >
            <Search size={19} />

            <input
              value={searchTerm}
              onChange={(e) => {
                const value = e.target.value;
                setSearchTerm(value);
                setSearchOpen(Boolean(value.trim()));
              }}
              onFocus={() => {
                if (searchTerm.trim()) setSearchOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setSearchOpen(false);
                }

                if (
                  e.key === "Enter" &&
                  searchResults.length > 0
                ) {
                  e.preventDefault();
                  goToSection(searchResults[0].section);
                  setSearchTerm("");
                  setSearchOpen(false);
                }
              }}
              placeholder="Buscar herramientas, consejos..."
              aria-label="Buscar herramientas y consejos"
            />

            {searchOpen && searchTerm.trim() && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: 0,
                  right: 0,
                  zIndex: 9999,
                  background: "#ffffff",
                  border: "1px solid #e7e1f2",
                  borderRadius: 18,
                  padding: 8,
                  boxShadow: "0 14px 34px rgba(102,80,150,.16)",
                  maxHeight: 360,
                  overflowY: "auto",
                }}
              >
                {searchResults.length > 0 ? (
                  searchResults.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.section}
                        type="button"
                        onClick={() => {
                          goToSection(item.section);
                          setSearchTerm("");
                          setSearchOpen(false);
                        }}
                        style={{
                          width: "100%",
                          minHeight: 58,
                          border: 0,
                          borderRadius: 13,
                          background: "transparent",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "9px 10px",
                          color: "#30345d",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f7f3ff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span
                          style={{
                            width: 36,
                            height: 36,
                            flex: "0 0 36px",
                            borderRadius: 11,
                            display: "grid",
                            placeItems: "center",
                            background: "#eee9ff",
                            color: "#7561d8",
                          }}
                        >
                          <Icon size={18} />
                        </span>

                        <span style={{ minWidth: 0, flex: 1 }}>
                          <strong
                            style={{
                              display: "block",
                              fontSize: 13,
                              lineHeight: 1.2,
                            }}
                          >
                            {item.label}
                          </strong>

                          <small
                            style={{
                              display: "block",
                              marginTop: 3,
                              color: "#747793",
                              fontSize: 11,
                              lineHeight: 1.25,
                            }}
                          >
                            {item.description}
                          </small>
                        </span>

                        <ChevronRight size={17} />
                      </button>
                    );
                  })
                ) : (
                  <div
                    style={{
                      padding: "16px 12px",
                      color: "#747793",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    No encontramos una sección con ese nombre.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ACCIONES */}

          <div className="top-actions">
            <button
              className="icon-button"
              type="button"
              aria-label="Notificaciones"
            >
              <Bell size={21} />
              <i />
            </button>

            <button
              className="profile-button"
              type="button"
              onClick={onLogout}
              title="Cerrar sesión"
            >
              <div className="avatar">🧑🏻‍🎨</div>

              <span>
                {user?.name
                  ? `¡Hola, ${user.name.split(" ")[0]}!`
                  : "¡Hola!"}
              </span>

              <ChevronRight size={17} />
            </button>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}

        {activeSection === "Inicio" ? (
          <>
            {/* HERO */}

            <section className="hero">
              <div className="hero-copy">
                <div className="sparkles">✦　✧　✦</div>

                <h1>
                  Mente
                  <span>360</span>
                </h1>

                <p>
                  “Entiende lo que sientes,
                  <br />
                  cuida tu mente y busca apoyo.”
                </p>

                <div className="heart-line">
                  ━━　♡　━━
                </div>
              </div>

              <div className="hero-brain">
                <div className="orbit">◜　　　　　　◝</div>

                <div className="brain-face">
                  🧠

                  <Heart
                    className="brain-heart"
                    fill="currentColor"
                  />
                </div>
              </div>

              <div className="hero-bubble">
                <strong>
                  Tu bienestar,
                  <br />
                  en un solo lugar
                </strong>

                <span>♡</span>
              </div>
            </section>

            {/* TARJETAS */}

            <section className="tools-section">
              <div className="title-decor">
                <span>✧</span>
                <h2>Explora Mente360</h2>
                <span>✦</span>
              </div>

              <div className="tools-grid">
                {tools.map(([title, desc, Icon, tone]) => (
                  <button
                    className={`tool-card ${tone}`}
                    key={title}
                    type="button"
                    onClick={() => goToSection(title)}
                    aria-label={`Abrir sección ${title}`}
                  >
                    <div className="tool-icon">
                      <Icon size={29} />
                    </div>

                    <div className="tool-text">
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>

                    <ChevronRight className="arrow" size={20} />
                  </button>
                ))}

                <button
                  type="button"
                  className="help-support-card"
                  onClick={() => goToSection("Necesito ayuda")}
                  aria-label="Abrir Necesito ayuda"
                >
                  <div className="help-support-icon">
                    <Heart size={27} />
                  </div>

                  <div className="help-support-text">
                    <strong>¿Necesitas ayuda?</strong>
                    <span>
                      Encuentra orientación, apoyo y opciones para pedir ayuda.
                    </span>
                  </div>

                  <ChevronRight size={21} />
                </button>
              </div>
            </section>

            <EstadisticasPublicas />
          </>
        ) : (
          <div className="section-route" id="section-content">
            {renderSection()}
          </div>
        )}

        {/* BANNER INFERIOR */}

        <section className="bottom-banner">
          <div className="plant">🌱</div>

          <div>
            <strong>
              Tu salud mental también
              es importante
            </strong>

            <div>━━　♡　━━</div>
          </div>

          <div className="cloud-small">☁️</div>
        </section>
      </main>

      {/* NAVEGACIÓN INFERIOR */}

      <nav className="mobile-nav">
        <button
          className={activeSection === "Inicio" ? "selected" : ""}
          type="button"
          onClick={() => goToSection("Inicio")}
        >
          <Home />
          <span>Inicio</span>
        </button>

        <button
          type="button"
          className={
            activeSection === "Test de bienestar" ? "selected" : ""
          }
          onClick={() => goToSection("Test de bienestar")}
        >
          <Zap />
          <span>Test</span>
        </button>

        <button
          type="button"
          className={
            activeSection === "Mapa de bienestar" ? "selected" : ""
          }
          onClick={() => goToSection("Mapa de bienestar")}
        >
          <BookOpen />
          <span>Mapa</span>
        </button>

        <button
          type="button"
          className={activeSection === "Perfil" ? "selected" : ""}
          onClick={() => goToSection("Perfil")}
          title="Perfil"
        >
          <UserRound />
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  );
}

/* =========================================================
   APLICACIÓN PRINCIPAL Y SESIÓN DE SUPABASE
========================================================= */

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadUser = async (session) => {
      if (!session?.user) {
        if (mounted) setUser(null);
        return;
      }

      const authUser = session.user;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", authUser.id)
        .maybeSingle();

      if (!mounted) return;

      if (error) {
        console.error("No se pudo cargar el perfil:", error);
      }

      setUser({
        id: authUser.id,
        name:
          profile?.display_name ||
          authUser.user_metadata?.display_name ||
          authUser.email,
        email: authUser.email,
      });
    };

    const initialize = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;

        await loadUser(data.session);
      } catch (err) {
        console.error("No se pudo recuperar la sesión:", err);

        if (mounted) setUser(null);
      } finally {
        if (mounted) setAuthLoading(false);
      }
    };

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // Ejecuta la consulta después de finalizar el callback de auth.
      Promise.resolve().then(async () => {
        if (!mounted) return;

        try {
          await loadUser(session);
        } catch (err) {
          console.error("No se pudo actualizar la sesión:", err);
        } finally {
          if (mounted) setAuthLoading(false);
        }
      });
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  /* CERRAR SESIÓN */

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("No se pudo cerrar la sesión:", error);
      return;
    }

    setUser(null);
  };

  if (authLoading) {
    return (
      <div className="auth-page">
        <p>Cargando Mente360...</p>
      </div>
    );
  }

  return user ? (
    <Dashboard user={user} onLogout={logout} />
  ) : (
    <AuthScreen onEnter={setUser} />
  );
}