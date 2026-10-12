import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, ChevronRight, Plus, Save, Trash2, X } from "lucide-react";

const STORAGE_KEY = "mente360-diario-emocional";

function readEntries() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function preview(text) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > 48 ? `${clean.slice(0, 48)}...` : clean;
}

export default function DiarioEmocional({ onBack }) {
  const [entries, setEntries] = useState(readEntries);
  const [editorOpen, setEditorOpen] = useState(false);
  const [text, setText] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // Si el navegador bloquea el almacenamiento, la página sigue funcionando durante la sesión.
    }
  }, [entries]);

  const openNewEntry = () => {
    setText("");
    setSelectedEntry(null);
    setMessage("");
    setEditorOpen(true);
  };

  const saveEntry = () => {
    const cleanText = text.trim();
    if (!cleanText) {
      setMessage("Escribe algo antes de guardar tu entrada.");
      return;
    }

    const newEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text: cleanText,
      createdAt: Date.now(),
    };

    setEntries((current) => [newEntry, ...current]);
    setText("");
    setEditorOpen(false);
    setMessage("");
  };

  const deleteEntry = (id) => {
    setEntries((current) => current.filter((entry) => entry.id !== id));
    setSelectedEntry(null);
  };

  const openEntry = (entry) => {
    setSelectedEntry(entry);
    setEditorOpen(false);
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: 760,
        margin: "0 auto",
        padding: "18px 20px 96px",
        boxSizing: "border-box",
        color: "#30345d",
      }}
    >
      <div style={{ position: "relative", textAlign: "center", marginBottom: 14 }}>
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 42,
            height: 42,
            border: "none",
            borderRadius: "50%",
            background: "rgba(255,255,255,.9)",
            color: "#51439d",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            boxShadow: "0 5px 14px rgba(102,80,150,.08)",
          }}
        >
          <ArrowLeft size={21} />
        </button>

        <h1 style={{ margin: "2px 0 4px", fontSize: "clamp(25px, 4vw, 34px)", color: "#51439d", fontWeight: 800 }}>
          Diario emocional
        </h1>
        <p style={{ margin: 0, fontSize: 14, color: "#666987" }}>
          Un espacio seguro para ti.
        </p>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: 230,
          margin: "0 auto 20px",
          borderRadius: "42% 42% 48% 48% / 32% 32% 58% 58%",
          background: "linear-gradient(180deg,#fff0f7 0%,#fff7fb 52%,#f5efff 100%)",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
        }}
      >
        <span style={{ position: "absolute", left: "14%", top: 35, fontSize: 24, color: "#d7b8e9" }}>✦</span>
        <span style={{ position: "absolute", right: "14%", top: 66, fontSize: 23, color: "#f0b7d2" }}>✦</span>
        <span style={{ position: "absolute", right: "21%", bottom: 28, fontSize: 19, color: "#a8dce7" }}>✦</span>

        <div style={{ position: "relative", width: 190, height: 145, transform: "rotate(6deg)" }}>
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 4,
              width: 150,
              height: 126,
              border: "4px solid #51439d",
              borderRadius: "14px 18px 16px 12px",
              background: "#fffdfd",
              boxShadow: "0 10px 20px rgba(102,80,150,.10)",
            }}
          >
            <div style={{ position: "absolute", left: -17, top: 13, display: "grid", gap: 12 }}>
              {[0, 1, 2, 3].map((item) => (
                <span key={item} style={{ width: 27, height: 5, borderRadius: 8, background: "#51439d", display: "block" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 19, marginTop: 53 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f19bbb" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f19bbb" }} />
            </div>
            <div style={{ width: 31, height: 15, borderBottom: "3px solid #51439d", borderRadius: "0 0 50% 50%", margin: "-1px auto 0" }} />
          </div>
          <div style={{ position: "absolute", right: 1, top: 39, width: 15, height: 73, borderRadius: 10, background: "#f4afd0", transform: "rotate(-7deg)" }} />
          <div style={{ position: "absolute", right: -1, top: 61, width: 8, height: 29, borderRadius: 8, background: "#d987b0" }} />
        </div>
      </div>

      <button
        type="button"
        onClick={openNewEntry}
        style={{
          width: "100%",
          minHeight: 52,
          border: "none",
          borderRadius: 28,
          background: "linear-gradient(135deg,#8e73e7,#7561d8)",
          color: "white",
          fontSize: 16,
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 8px 18px rgba(117,97,216,.20)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          marginBottom: 22,
        }}
      >
        <Plus size={19} />
        Escribir nuevo
      </button>

      <div>
        <h2 style={{ margin: "0 0 10px", fontSize: 18, color: "#51439d", fontWeight: 800 }}>
          Tus entradas
        </h2>

        {entries.length === 0 ? (
          <div
            style={{
              padding: "22px 18px",
              borderRadius: 18,
              background: "rgba(255,255,255,.72)",
              border: "1px solid #eadff2",
              textAlign: "center",
              color: "#777993",
              fontSize: 14,
            }}
          >
            Todavía no tienes entradas. Escribe cómo te sientes y aparecerá aquí.
          </div>
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {entries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => openEntry(entry)}
                style={{
                  width: "100%",
                  minHeight: 70,
                  padding: "12px 13px",
                  borderRadius: 17,
                  border: "1px solid #eadff2",
                  background: "rgba(255,255,255,.82)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "left",
                  cursor: "pointer",
                  boxShadow: "0 5px 14px rgba(102,80,150,.06)",
                  color: "#30345d",
                }}
              >
                <span
                  style={{
                    width: 39,
                    height: 39,
                    flex: "0 0 39px",
                    borderRadius: 12,
                    background: "#f2ecff",
                    color: "#7561d8",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <BookOpen size={19} />
                </span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <strong style={{ display: "block", fontSize: 13, marginBottom: 4 }}>{preview(entry.text)}</strong>
                  <small style={{ color: "#888ba4", fontSize: 11 }}>
                    {formatDate(entry.createdAt)} · {formatTime(entry.createdAt)}
                  </small>
                </span>
                <ChevronRight size={20} color="#8a8ca0" />
              </button>
            ))}
          </div>
        )}
      </div>

      {editorOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(48,52,93,.30)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "min(620px, 100%)",
              maxHeight: "90vh",
              overflow: "auto",
              borderRadius: 28,
              background: "#fffafd",
              padding: 22,
              boxSizing: "border-box",
              boxShadow: "0 20px 60px rgba(62,45,100,.20)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div>
                <h2 style={{ margin: 0, color: "#51439d", fontSize: 22 }}>Nueva entrada</h2>
                <p style={{ margin: "4px 0 0", color: "#777993", fontSize: 13 }}>Escribe lo que quieras. Este espacio es para ti.</p>
              </div>
              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                aria-label="Cerrar"
                style={{ border: "none", background: "#f2ecff", color: "#51439d", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", display: "grid", placeItems: "center" }}
              >
                <X size={19} />
              </button>
            </div>

            <textarea
              autoFocus
              value={text}
              onChange={(event) => {
                setText(event.target.value);
                setMessage("");
              }}
              placeholder="¿Qué pasó hoy? ¿Cómo te sentiste? Escribe aquí..."
              style={{
                width: "100%",
                minHeight: 230,
                resize: "vertical",
                boxSizing: "border-box",
                borderRadius: 20,
                border: "1px solid #ddd2ea",
                outline: "none",
                padding: 16,
                fontFamily: "inherit",
                fontSize: 15,
                lineHeight: 1.6,
                color: "#30345d",
                background: "#fff",
              }}
            />

            {message && <p style={{ margin: "9px 2px 0", color: "#b84d78", fontSize: 12 }}>{message}</p>}

            <button
              type="button"
              onClick={saveEntry}
              style={{
                width: "100%",
                marginTop: 14,
                minHeight: 50,
                border: "none",
                borderRadius: 25,
                background: "linear-gradient(135deg,#8e73e7,#7561d8)",
                color: "white",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <Save size={18} />
              Guardar entrada
            </button>
          </div>
        </div>
      )}

      {selectedEntry && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(48,52,93,.30)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "min(620px, 100%)",
              maxHeight: "90vh",
              overflow: "auto",
              borderRadius: 28,
              background: "#fffafd",
              padding: 22,
              boxSizing: "border-box",
              boxShadow: "0 20px 60px rgba(62,45,100,.20)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <h2 style={{ margin: 0, color: "#51439d", fontSize: 22 }}>Tu entrada</h2>
                <p style={{ margin: "4px 0 0", color: "#888ba4", fontSize: 12 }}>
                  {formatDate(selectedEntry.createdAt)} · {formatTime(selectedEntry.createdAt)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEntry(null)}
                aria-label="Cerrar"
                style={{ border: "none", background: "#f2ecff", color: "#51439d", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", display: "grid", placeItems: "center" }}
              >
                <X size={19} />
              </button>
            </div>

            <div
              style={{
                marginTop: 17,
                padding: 18,
                borderRadius: 20,
                background: "#fff",
                border: "1px solid #eadff2",
                whiteSpace: "pre-wrap",
                lineHeight: 1.7,
                fontSize: 15,
                color: "#41446b",
              }}
            >
              {selectedEntry.text}
            </div>

            <button
              type="button"
              onClick={() => deleteEntry(selectedEntry.id)}
              style={{
                width: "100%",
                marginTop: 12,
                minHeight: 46,
                border: "1px solid #f0cbd9",
                borderRadius: 23,
                background: "#fff1f6",
                color: "#b84d78",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
              }}
            >
              <Trash2 size={17} />
              Eliminar entrada
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
