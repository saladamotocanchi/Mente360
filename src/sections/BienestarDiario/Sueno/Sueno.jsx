import SubcategoryPage from "../../SubcategoryPage";

export default function Sueno({ onBack }) {
  return (
    <SubcategoryPage
      category="BienestarDiario"
      title="Sueño"
      subtitle="Descansa bien, mejora tu energía y estado de ánimo."
      icon="🌙"
      intro="Dormir es una parte importante del bienestar cotidiano y ayuda a mantener un ritmo saludable."
      steps={["Intenta mantener horarios relativamente regulares.", "Prepara un ambiente cómodo para dormir.", "Reduce actividades estimulantes antes de acostarte.", "Da prioridad al descanso cuando puedas."]}
      activity="Durante una semana observa a qué hora sueles dormir y cómo te sientes al despertar."
      tip="Si tienes dificultades persistentes para dormir, coméntalo con un profesional de salud."
      onBack={onBack}
    />
  );
}
