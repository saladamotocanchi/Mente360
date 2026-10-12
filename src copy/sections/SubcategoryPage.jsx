import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SubcategoryPage({ category, title, subtitle, icon, intro, steps, activity, tip, onBack }) {
  const key = `mente360_completed_${category}_${title}`;
  const [completed, setCompleted] = useState(() => {
    try { return localStorage.getItem(key) === "1"; } catch { return false; }
  });

  useEffect(() => {
    if (completed) {
      try {
        const all = JSON.parse(localStorage.getItem("mente360_subcategories_completed") || "[]");
        const id = `${category}/${title}`;
        if (!all.includes(id)) localStorage.setItem("mente360_subcategories_completed", JSON.stringify([...all, id]));
        localStorage.setItem(key, "1");
      } catch {}
    }
  }, [completed, key, category, title]);

  return (
    <section style={{ width: "100%", maxWidth: 780, margin: "0 auto", padding: "18px 20px 100px", boxSizing: "border-box", color: "#30345d" }}>
      <button type="button" onClick={onBack} style={{ border: 0, borderRadius: 14, background: "rgba(255,255,255,.9)", color: "#51439d", padding: "10px 15px", display: "inline-flex", alignItems: "center", gap: 7, cursor: "pointer", fontWeight: 800, boxShadow: "0 6px 18px rgba(90,70,140,.08)" }}>
        <ArrowLeft size={19} /> Volver
      </button>

      <div style={{ textAlign: "center", marginTop: 18 }}>
        <div style={{ fontSize: 44 }}>{icon}</div>
        <span style={{ display: "inline-block", marginTop: 5, padding: "6px 11px", borderRadius: 999, background: "#e9e4ff", color: "#51439d", fontSize: 12, fontWeight: 900 }}>Mente360 · {category}</span>
        <h1 style={{ margin: "12px 0 7px", color: "#30345d", fontSize: "clamp(27px,4vw,38px)", lineHeight: 1.1, fontWeight: 900 }}>{title}</h1>
        <p style={{ margin: 0, color: "#747793", fontSize: 15, fontWeight: 700 }}>{subtitle}</p>
      </div>

      <div style={{ marginTop: 22, padding: 22, borderRadius: 25, background: "linear-gradient(135deg,#f3efff,#fff0f7)", boxShadow: "0 10px 30px rgba(102,80,150,.09)", border: "1px solid rgba(110,95,160,.09)" }}>
        <h2 style={{ margin: "0 0 9px", color: "#51439d", fontSize: 20 }}>💜 ¿Qué debes saber?</h2>
        <p style={{ margin: 0, color: "#5f6582", lineHeight: 1.7, fontSize: 15 }}>{intro}</p>
      </div>

      <div style={{ marginTop: 18, display: "grid", gap: 11 }}>
        {steps.map((step, i) => (
          <div key={step} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 15px", borderRadius: 18, background: "#fff", border: "1px solid #e7e1f2", boxShadow: "0 5px 16px rgba(102,80,150,.06)" }}>
            <span style={{ flex: "0 0 31px", width: 31, height: 31, borderRadius: "50%", display: "grid", placeItems: "center", background: "#e9e4ff", color: "#51439d", fontWeight: 900 }}>{i + 1}</span>
            <p style={{ margin: "3px 0 0", color: "#555b78", lineHeight: 1.55, fontSize: 14 }}>{step}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, padding: 20, borderRadius: 22, background: "#d5f1df", color: "#426b52" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 900, marginBottom: 7 }}><CheckCircle2 size={20} /> Pequeña actividad</div>
        <p style={{ margin: 0, lineHeight: 1.6, fontSize: 14 }}>{activity}</p>
      </div>

      <div style={{ marginTop: 14, padding: "15px 17px", borderRadius: 18, background: "#fff8e7", color: "#806528", lineHeight: 1.55, fontSize: 13 }}>💡 <strong>Recuerda:</strong> {tip}</div>

      <button type="button" onClick={() => setCompleted(!completed)} style={{ width: "100%", marginTop: 18, border: 0, borderRadius: 17, padding: "14px 18px", background: completed ? "#d5f1df" : "#7561d8", color: completed ? "#426b52" : "#fff", cursor: "pointer", fontWeight: 900, fontSize: 15 }}>
        {completed ? "✓ Actividad marcada como completada" : "Marcar actividad como completada"}
      </button>
    </section>
  );
}
