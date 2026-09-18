import { useState } from "react";
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
import NecesitoAyuda from "./sections/NecesitoAyuda";

import {
  Bell,
  BookOpen,
  Brain,
  ChevronRight,
  CircleHelp,
  Heart,
  Home,
  Menu,
  Moon,
  NotebookPen,
  Search,
  Shield,
  Smartphone,
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   MENÚ
========================================================= */

const menuItems = [
  ["Inicio", Home],
  ["¿Cómo me siento?", Brain],
  ["Estrés y ansiedad", Zap],
  ["Autoestima", Heart],
  ["Relaciones", Users],
  ["Bullying y violencia", Shield],
  ["Estrés académico", BookOpen],
  ["Redes sociales", Smartphone],
  ["Bienestar diario", Moon],
  ["Diario emocional", NotebookPen],
  ["Mapa de bienestar", BookOpen],
  ["Necesito ayuda", CircleHelp],
];

/* =========================================================
   EMOCIONES
========================================================= */

const moods = [
  ["Feliz", "😊", "yellow"],
  ["Triste", "😢", "blue"],
  ["Ansioso/a", "😟", "purple"],
  ["Enojado/a", "😠", "pink"],
  ["Calmado/a", "😌", "green"],
  ["Confundido/a", "😕", "violet"],
  ["Cansado/a", "😴", "gray"],
  ["Motivado/a", "⭐", "gold"],
];

/* =========================================================
   HERRAMIENTAS
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
        <Brain
          size={
            compact
              ? 25
              : 34
          }
        />
      </div>

      <span>
        Mente
        <span>360</span>
      </span>
    </div>
  );
}

/* =========================================================
   PANTALLA DE LOGIN
========================================================= */

function AuthScreen({ onEnter }) {
  const [mode, setMode] = useState("login");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [remember, setRemember] =
    useState(true);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  /* -----------------------------------------
     LIMPIAR MENSAJES
  ----------------------------------------- */

  const clearFeedback = () => {
    setError("");
    setMessage("");
  };

  /* -----------------------------------------
     CAMBIAR LOGIN / REGISTRO
  ----------------------------------------- */

  const switchMode = (nextMode) => {
    setMode(nextMode);

    setPassword("");

    clearFeedback();
  };

  /* -----------------------------------------
     VALIDAR EMAIL
  ----------------------------------------- */

  const validEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value
    );
  };

  /* -----------------------------------------
     INGRESAR / CREAR CUENTA
  ----------------------------------------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    clearFeedback();

    const cleanEmail =
      email.trim().toLowerCase();

    /* CREAR CUENTA */

    if (mode === "register") {
      if (name.trim().length < 2) {
        setError(
          "Escribe tu nombre para crear la cuenta."
        );

        return;
      }

      if (!validEmail(cleanEmail)) {
        setError(
          "Escribe un correo electrónico válido."
        );

        return;
      }

      if (password.length < 6) {
        setError(
          "La contraseña debe tener al menos 6 caracteres."
        );

        return;
      }

      const users = JSON.parse(
        localStorage.getItem(
          "mente360_users"
        ) || "[]"
      );

      const alreadyExists =
        users.some(
          (user) =>
            user.email === cleanEmail
        );

      if (alreadyExists) {
        setError(
          "Ya existe una cuenta con ese correo. Puedes ingresar."
        );

        return;
      }

      const user = {
        name: name.trim(),
        email: cleanEmail,
        password,
      };

      localStorage.setItem(
        "mente360_users",
        JSON.stringify([
          ...users,
          user,
        ])
      );

      if (remember) {
        localStorage.setItem(
          "mente360_session",
          JSON.stringify(user)
        );
      } else {
        sessionStorage.setItem(
          "mente360_session",
          JSON.stringify(user)
        );
      }

      onEnter(user);

      return;
    }

    /* INGRESAR */

    if (!validEmail(cleanEmail)) {
      setError(
        "Escribe un correo electrónico válido."
      );

      return;
    }

    if (!password) {
      setError(
        "Escribe tu contraseña."
      );

      return;
    }

    const users = JSON.parse(
      localStorage.getItem(
        "mente360_users"
      ) || "[]"
    );

    const user =
      users.find(
        (item) =>
          item.email ===
            cleanEmail &&
          item.password ===
            password
      );

    if (!user) {
      setError(
        "El correo o la contraseña no son correctos."
      );

      return;
    }

    if (remember) {
      localStorage.setItem(
        "mente360_session",
        JSON.stringify(user)
      );
    } else {
      sessionStorage.setItem(
        "mente360_session",
        JSON.stringify(user)
      );
    }

    onEnter(user);
  };

  /* -----------------------------------------
     RECUPERAR CONTRASEÑA
  ----------------------------------------- */

  const handleForgotPassword = () => {
    clearFeedback();

    const cleanEmail =
      email.trim().toLowerCase();

    if (!validEmail(cleanEmail)) {
      setError(
        "Primero escribe tu correo electrónico."
      );

      return;
    }

    const users = JSON.parse(
      localStorage.getItem(
        "mente360_users"
      ) || "[]"
    );

    const exists =
      users.some(
        (user) =>
          user.email ===
          cleanEmail
      );

    if (exists) {
      setMessage(
        "La recuperación de contraseña quedará conectada al correo cuando tengamos autenticación real."
      );
    } else {
      setMessage(
        "No encontramos una cuenta local con ese correo."
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

      {/* =====================================
          PARTE IZQUIERDA
      ===================================== */}

      <section className="auth-visual">

        <div className="auth-brand">
          <Logo />
        </div>

        <div className="auth-illustration">

          <div className="auth-orbit">
            ◜　　◝
          </div>

          <div className="auth-brain-emoji">
            🧠
          </div>

          <div className="auth-heart">
            ♥
          </div>

          <div className="auth-cloud">
            ☁️
          </div>

        </div>

        <h1>
          Tu bienestar,
          <br />
          <span>
            en un solo lugar.
          </span>
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

      {/* =====================================
          FORMULARIO
      ===================================== */}

      <section className="auth-card">

        <div className="auth-heading">

          <span className="welcome-icon">
            💜
          </span>

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

        {/* TABS */}

        <div className="auth-tabs">

          <button
            className={
              mode === "login"
                ? "active"
                : ""
            }
            onClick={() =>
              switchMode("login")
            }
          >
            Ingresar
          </button>

          <button
            className={
              mode === "register"
                ? "active"
                : ""
            }
            onClick={() =>
              switchMode("register")
            }
          >
            Crear cuenta
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
        >

          {/* NOMBRE */}

          {mode === "register" && (
            <label className="field">

              <span>
                Nombre
              </span>

              <div>

                <UserRound size={18} />

                <input
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  placeholder="¿Cómo te llamas?"
                  autoComplete="name"
                />

              </div>

            </label>
          )}

          {/* EMAIL */}

          <label className="field">

            <span>
              Correo electrónico
            </span>

            <div>

              <span className="field-symbol">
                ✉
              </span>

              <input
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                type="email"
                placeholder="tu@correo.com"
                autoComplete="email"
              />

            </div>

          </label>

          {/* PASSWORD */}

          <label className="field">

            <span>
              Contraseña
            </span>

            <div>

              <span className="field-symbol">
                🔒
              </span>

              <input
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
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
                  setShowPassword(
                    (value) =>
                      !value
                  )
                }
              >
                {showPassword
                  ? "Ocultar"
                  : "Ver"}
              </button>

            </div>

          </label>

          {/* OPCIONES */}

          {mode === "login" && (
            <div className="auth-options">

              <label>

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Recordarme
                </span>

              </label>

              <button
                type="button"
                onClick={
                  handleForgotPassword
                }
              >
                ¿Olvidaste tu contraseña?
              </button>

            </div>
          )}

          {/* ERROR */}

          {error && (
            <div className="auth-feedback error">
              ⚠️ {error}
            </div>
          )}

          {/* MENSAJE */}

          {message && (
            <div className="auth-feedback success">
              💜 {message}
            </div>
          )}

          {/* BOTÓN */}

          <button
            className="primary-auth-button"
            type="submit"
          >
            {mode === "login"
              ? "Ingresar a Mente360"
              : "Crear mi cuenta"}

            <ChevronRight size={18} />
          </button>

        </form>

        {/* CAMBIAR MODO */}

        <p className="auth-switch">

          {mode === "login"
            ? "¿Aún no tienes una cuenta?"
            : "¿Ya tienes una cuenta?"}

          <button
            onClick={() =>
              switchMode(
                mode === "login"
                  ? "register"
                  : "login"
              )
            }
          >
            {mode === "login"
              ? " Crear cuenta"
              : " Ingresar"}
          </button>

        </p>

        <p className="privacy-note">
          🔒 Tu información personal
          se mantiene privada y segura.
        </p>

      </section>

    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({
  user,
  onLogout,
}) {

  const [activeSection, setActiveSection] = useState("Inicio");


  const goToSection = (label) => {
    setActiveSection(label);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
    const props = { onBack: () => goToSection("Inicio") };

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
      case "Necesito ayuda":
        return <NecesitoAyuda {...props} />;
      default:
        return null;
    }
  };

  const [
    selectedMood,
    setSelectedMood,
  ] = useState(null);

  const [
    savedMood,
    setSavedMood,
  ] = useState(() => {
    try {
      const saved = localStorage.getItem("mente360_mood");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const registerMood = () => {
    if (!selectedMood) return;

    const moodData = {
      mood: selectedMood,
      date: new Date().toISOString(),
    };

    localStorage.setItem(
      "mente360_mood",
      JSON.stringify(moodData)
    );

    setSavedMood(moodData);
  };

  return (
    <div className="app-shell">

      {/* MAIN */}

      <main className="main">

        {/* TOPBAR */}

        <header className="topbar">

          <div className="desktop-logo">
            <Logo compact />
          </div>

          <div className="search">

            <Search size={19} />

            <input
              placeholder="Buscar herramientas, consejos..."
            />

          </div>

          <div className="top-actions">

            <button className="icon-button">

              <Bell size={21} />

              <i />

            </button>

            <button
              className="profile-button"
              onClick={onLogout}
              title="Cerrar sesión"
            >

              <div className="avatar">
                🧑🏻‍🎨
              </div>

              <span>
                {user?.name
                  ? `¡Hola, ${
                      user.name.split(
                        " "
                      )[0]
                    }!`
                  : "¡Hola!"}
              </span>

              <ChevronRight
                size={17}
              />

            </button>

          </div>

        </header>

        {activeSection === "Inicio" ? (
          <>
            {/* HERO */}

            <section className="hero">

              <div className="hero-copy">

                <div className="sparkles">
                  ✦　✧　✦
                </div>

                <h1>
                  Mente
                  <span>
                    360
                  </span>
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

                <div className="orbit">
                  ◜　　　　　　◝
                </div>

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

                <span>
                  ♡
                </span>

              </div>

            </section>

            {/* HERRAMIENTAS */}

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
                  <span>Encuentra orientación, apoyo y opciones para pedir ayuda.</span>
                </div>
                <ChevronRight size={21} />
              </button>

              </div>

            </section>
          </>
        ) : (
          <div className="section-route" id="section-content">
            {renderSection()}
          </div>
        )}

        {/* BANNER */}

        <section className="bottom-banner">

          <div className="plant">
            🌱
          </div>

          <div>

            <strong>
              Tu salud mental también
              es importante
            </strong>

            <div>
              ━━　♡　━━
            </div>

          </div>

          <div className="cloud-small">
            ☁️
          </div>

        </section>

      </main>

      {/* NAV INFERIOR */}

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
          className={activeSection === "¿Cómo me siento?" ? "selected" : ""}
          onClick={() => goToSection("¿Cómo me siento?")}
        >
          <Zap />
          <span>Test</span>
        </button>

        <button
          type="button"
          className={activeSection === "Mapa de bienestar" ? "selected" : ""}
          onClick={() => goToSection("Mapa de bienestar")}
        >
          <BookOpen />
          <span>Mapa</span>
        </button>

        <button
          type="button"
          onClick={onLogout}
          title="Cerrar sesión"
        >
          <UserRound />
          <span>Perfil</span>
        </button>

      </nav>

    </div>
  );
}

/* =========================================================
   APP PRINCIPAL
========================================================= */

export default function App() {

  const saved =
    localStorage.getItem(
      "mente360_session"
    );

  const temporary =
    sessionStorage.getItem(
      "mente360_session"
    );

  const initialUser = saved
    ? JSON.parse(saved)
    : temporary
      ? JSON.parse(temporary)
      : null;

  const [user, setUser] =
    useState(initialUser);

  /* -----------------------------------------
     CERRAR SESIÓN
  ----------------------------------------- */

  const logout = () => {

    localStorage.removeItem(
      "mente360_session"
    );

    sessionStorage.removeItem(
      "mente360_session"
    );

    setUser(null);
  };

  return user ? (
    <Dashboard
      user={user}
      onLogout={logout}
    />
  ) : (
    <AuthScreen
      onEnter={setUser}
    />
  );
}