import SubcategoryPage from "../../SubcategoryPage";

export default function Logros({ onBack }) {
  return (
    <SubcategoryPage
      category="Autoestima"
      title="Reconoce tus logros"
      subtitle="¡Tú también lo haces!"
      icon="🏆"
      intro="Los logros no tienen que ser enormes. Terminar una tarea, pedir ayuda o intentar algo difícil también cuenta."
      steps={["Recuerda algo que hayas conseguido recientemente.", "Describe qué hiciste para conseguirlo.", "Reconoce el esfuerzo que hubo detrás.", "Piensa qué aprendiste de esa experiencia."]}
      activity="Crea una pequeña lista de tres logros recientes, grandes o pequeños."
      tip="Reconocer avances no significa que todo tenga que salir perfecto."
      onBack={onBack}
    />
  );
}
