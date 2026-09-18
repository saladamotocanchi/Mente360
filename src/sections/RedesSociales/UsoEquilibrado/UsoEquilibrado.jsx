import SubcategoryPage from "../../SubcategoryPage";

export default function UsoEquilibrado({ onBack }) {
  return (
    <SubcategoryPage
      category="RedesSociales"
      title="Uso equilibrado"
      subtitle="Establece límites y cuida tu tiempo en línea."
      icon="📱"
      intro="Las redes pueden servir para conectar y entretenerse, pero también conviene mantener un equilibrio con el descanso y las actividades fuera de pantalla."
      steps={["Observa cuánto tiempo pasas conectado/a.", "Identifica cuándo las usas por hábito.", "Establece momentos sin pantalla.", "Mantén actividades offline que disfrutes."]}
      activity="Elige un momento del día para dejar el teléfono fuera de tu alcance."
      tip="El objetivo es encontrar un uso que encaje bien con tu descanso, estudio y relaciones."
      onBack={onBack}
    />
  );
}
