import React from "react";
import { useState } from "react";
import { ArrowLeft, Wind, BellRing, PersonStanding, Lightbulb, CheckCircle2 } from "lucide-react";
import Respiracion from "./ManejoEstres/Respiracion/Respiracion";
import Relajacion from "./ManejoEstres/Relajacion/Relajacion";
import PausasActivas from "./ManejoEstres/PausasActivas/PausasActivas";
import ConsejosEstres from "./ManejoEstres/ConsejosEstres/ConsejosEstres";

const content = {
  "Ejercicios de respiración": {
    icon: Wind,
    tone: "breathing",
    intro: "Una respiración lenta puede ayudarte a hacer una pausa cuando te sientes tenso/a o preocupado/a.",
    steps: [
      "Busca una posición cómoda.",
      "Inhala lentamente por la nariz durante unos segundos.",
      "Haz una pequeña pausa sin forzar la respiración.",
      "Exhala despacio y repite varias veces.",
    ],
    activity: "Prueba durante 1–2 minutos y observa cómo cambia tu sensación de tensión.",
  },
  "Técnicas de relajación": {
    icon: BellRing,
    tone: "relax",
    intro: "Relajarte no significa ignorar lo que sientes. Es darte un momento para bajar el ritmo y recuperar calma.",
    steps: [
      "Suelta los hombros y afloja la mandíbula.",
      "Aléjate unos minutos de aquello que te está saturando.",
      "Respira con tranquilidad y presta atención a tu cuerpo.",
      "Vuelve a la actividad cuando te sientas preparado/a.",
    ],
    activity: "Cierra los ojos durante unos segundos y nota qué parte de tu cuerpo está más tensa.",
  },
  "Pausas activas": {
    icon: PersonStanding,
    tone: "active",
    intro: "Cuando llevas mucho tiempo estudiando o frente a una pantalla, una pausa breve puede ayudarte a cambiar de ritmo.",
    steps: [
      "Levántate de tu asiento.",
      "Estira brazos, hombros y piernas suavemente.",
      "Camina un poco o cambia de espacio.",
      "Respira y vuelve a tu actividad con calma.",
    ],
    activity: "Haz una pausa de 2–5 minutos y elige un movimiento que disfrutes.",
  },
  "Consejos útiles": {
    icon: Lightbulb,
    tone: "tips",
    intro: "Pequeños hábitos pueden ayudarte a cuidar tu bienestar cuando atraviesas días exigentes.",
    steps: [
      "Organiza tus tareas en pasos pequeños.",
      "Cuida tus horarios de descanso y sueño.",
      "Mantén contacto con personas que te hagan sentir acompañado/a.",
      "Si algo te supera, habla con alguien de confianza y pide apoyo.",
    ],
    activity: "Elige un pequeño hábito que quieras probar hoy y márcalo como realizado.",
  },
};

export default function ManejoEstres({ onBack }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (selectedSubcategory) {
    const Subcategory = { Respiracion: Respiracion, Relajacion: Relajacion, PausasActivas: PausasActivas, ConsejosEstres: ConsejosEstres }[selectedSubcategory];
    return <Subcategory onBack={() => setSelectedSubcategory(null)} />;
  }

  const tips = [
    {
      title: "Ejercicios de respiración",
      text: "Respira, relájate, vuelve a ti.",
      icon: <Wind size={28} strokeWidth={2.1} />,
      tone: "breathing",
    },
    {
      title: "Técnicas de relajación",
      text: "Tu momento de calma.",
      icon: <BellRing size={28} strokeWidth={2.1} />,
      tone: "relax",
    },
    {
      title: "Pausas activas",
      text: "Muévete, despeja tu mente.",
      icon: <PersonStanding size={28} strokeWidth={2.1} />,
      tone: "active",
    },
    {
      title: "Consejos útiles",
      text: "Pequeños hábitos, grandes cambios.",
      icon: <Lightbulb size={28} strokeWidth={2.1} />,
      tone: "tips",
    },
  ];

  return (
    <section className="stress-page">
      <div className="stress-topbar">
        <button className="stress-back" type="button" onClick={onBack} aria-label="Volver">
          <ArrowLeft size={28} />
        </button>

        <div className="stress-heading">
          <h1>Manejo del estrés<br />y la ansiedad</h1>
          <p>Respira, todo estará bien.</p>
        </div>
      </div>

      <div className="stress-illustration" aria-hidden="true">
        <span className="stress-heart stress-heart-one">♥</span>
        <span className="stress-heart stress-heart-two">♥</span>
        <span className="stress-spark stress-spark-one">✦</span>
        <span className="stress-spark stress-spark-two">✦</span>

        <div className="stress-cloud">
          <span className="stress-cloud-face stress-eye-left" />
          <span className="stress-cloud-face stress-eye-right" />
          <span className="stress-cloud-face stress-cheek-left" />
          <span className="stress-cloud-face stress-cheek-right" />
          <span className="stress-cloud-mouth" />
        </div>
      </div>

      <div className="stress-list">
        {tips.map((item) => (
          <button
            key={item.title}
            type="button"
            className={`stress-card ${item.tone}`}
            onClick={() => { const map = { "Ejercicios de respiración": "Respiracion", "Técnicas de relajación": "Relajacion", "Pausas activas": "PausasActivas", "Consejos útiles": "ConsejosEstres" }; setSelectedSubcategory(map[item.title]); }}
          >
            <div className="stress-card-icon">{item.icon}</div>
            <div className="stress-card-copy">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <span className="stress-card-arrow" aria-hidden="true">›</span>
          </button>
        ))}
      </div>
    </section>
  );
}
