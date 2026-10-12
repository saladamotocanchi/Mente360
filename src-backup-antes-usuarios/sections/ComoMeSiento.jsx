import { useState } from "react";
import { NotebookPen, Plus } from "lucide-react";

const moods = [
  ["Feliz", "😊", "#ffe9a8"],
  ["Triste", "😢", "#bfe8f8"],
  ["Ansioso/a", "😟", "#d9ccff"],
  ["Enojado/a", "😠", "#ffc7d9"],
  ["Calmado/a", "😌", "#c9efd7"],
  ["Confundido/a", "😕", "#d9d5ff"],
  ["Cansado/a", "😴", "#dfe3e9"],
  ["Motivado/a", "⭐", "#ffe0b4"],
];

export default function ComoMeSiento({ onBack }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const [savedMood, setSavedMood] = useState(() => {
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
      note,
      date: new Date().toISOString(),
    };

    localStorage.setItem("mente360_mood", JSON.stringify(moodData));
    setSavedMood(moodData);
  };

  const pageStyle = {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    padding: "26px 18px 120px",
    boxSizing: "border-box",
    color: "#30345d",
  };

  const titleStyle = {
    margin: "0 0 14px",
    color: "#4f3b91",
    fontSize: "clamp(28px, 4vw, 38px)",
    lineHeight: 1.1,
    fontWeight: 900,
    letterSpacing: "-0.7px",
  };

  const subtitleStyle = {
    margin: 0,
    color: "#555776",
    fontSize: "15px",
    lineHeight: 1.5,
    fontWeight: 600,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "24px 18px",
    margin: "28px 0 30px",
  };

  const choiceStyle = {
    appearance: "none",
    WebkitAppearance: "none",
    border: "0",
    outline: "none",
    background: "transparent",
    padding: 0,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    color: "#30345d",
    fontFamily: "inherit",
    cursor: "pointer",
  };

  const iconStyle = (background) => ({
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background,
    fontSize: "39px",
    lineHeight: 1,
    boxShadow: "0 5px 14px rgba(80,70,130,.08)",
    transition: "transform .18s ease, box-shadow .18s ease",
  });

  const nameStyle = {
    display: "block",
    color: "#3f4166",
    fontSize: "14px",
    lineHeight: 1.15,
    fontWeight: 800,
    textAlign: "center",
  };

  return (
    <section className="mood-page" style={pageStyle}>
      <div className="mood-page-top">
        <h1 style={titleStyle}>¿Cómo te sientes hoy?</h1>
        <p style={subtitleStyle}>Elige la emoción que mejor represente lo que sientes.</p>
      </div>

      <div className="mood-choice-grid" style={gridStyle}>
        {moods.map(([name, emoji, background]) => (
          <button
            key={name}
            className={`mood-choice ${selectedMood === name ? "selected" : ""}`}
            onClick={() => setSelectedMood(name)}
            type="button"
            aria-label={`Seleccionar ${name}`}
            style={choiceStyle}
          >
            <span
              className="mood-choice-icon"
              style={{
                ...iconStyle(background),
                ...(selectedMood === name
                  ? { transform: "scale(1.08)", boxShadow: "0 0 0 4px rgba(117,97,216,.18), 0 8px 18px rgba(80,70,130,.12)" }
                  : {}),
              }}
            >
              {emoji}
            </span>
            <b style={nameStyle}>{name}</b>
          </button>
        ))}

        <button
          className={`mood-choice other ${selectedMood === "Otro" ? "selected" : ""}`}
          onClick={() => setSelectedMood("Otro")}
          type="button"
          aria-label="Seleccionar Otro"
          style={choiceStyle}
        >
          <span
            className="mood-choice-icon"
            style={{
              ...iconStyle("#dcdcff"),
              color: "#4e4a96",
              ...(selectedMood === "Otro"
                ? { transform: "scale(1.08)", boxShadow: "0 0 0 4px rgba(117,97,216,.18), 0 8px 18px rgba(80,70,130,.12)" }
                : {}),
            }}
          >
            <Plus size={38} strokeWidth={2.1} />
          </span>
          <b style={nameStyle}>Otro</b>
        </button>
      </div>

      <div className="mood-note-area" style={{ marginTop: 0 }}>
        <label
          htmlFor="mood-note"
          style={{
            display: "block",
            margin: "0 0 9px",
            color: "#555776",
            fontSize: "17px",
            fontWeight: 800,
          }}
        >
          ¿Qué pasó hoy?
        </label>
        <textarea
          id="mood-note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Puedes escribir lo que quieras..."
          rows={5}
          style={{
            width: "100%",
            minHeight: "118px",
            boxSizing: "border-box",
            resize: "vertical",
            border: "2px solid #ded8ea",
            borderRadius: "18px",
            background: "#fff",
            padding: "15px 16px",
            color: "#45476b",
            fontFamily: "inherit",
            fontSize: "14px",
            outline: "none",
          }}
        />
      </div>

      <div
        className="mood-actions"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "15px",
          flexWrap: "wrap",
        }}
      >
        <button
          className="mood-save-button"
          type="button"
          onClick={registerMood}
          disabled={!selectedMood}
          style={{
            minHeight: "44px",
            border: 0,
            borderRadius: "14px",
            padding: "0 17px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "#7561d8",
            color: "#fff",
            fontFamily: "inherit",
            fontWeight: 900,
            cursor: selectedMood ? "pointer" : "not-allowed",
            opacity: selectedMood ? 1 : 0.5,
          }}
        >
          <NotebookPen size={18} />
          Registrar mi estado
        </button>

        {onBack && (
          <button
            className="mood-back-button"
            type="button"
            onClick={onBack}
            style={{
              minHeight: "44px",
              border: "1px solid #d9d0f4",
              borderRadius: "14px",
              padding: "0 17px",
              background: "#faf8ff",
              color: "#51439d",
              fontFamily: "inherit",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            ← Volver
          </button>
        )}
      </div>

      {selectedMood && (
        <div className="mood-message" style={{ marginTop: "14px", color: "#555776", fontSize: "14px" }}>
          💜 Has elegido <strong>{selectedMood}</strong>. Puedes registrar cómo te sientes y qué ocurrió hoy.
        </div>
      )}

      {savedMood && (
        <div className="mood-saved" style={{ marginTop: "10px", color: "#3b6a4a", fontSize: "14px", fontWeight: 700 }}>
          ✅ Estado registrado correctamente.
        </div>
      )}
    </section>
  );
}
