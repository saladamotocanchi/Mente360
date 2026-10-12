import SubcategoryPage from "../../SubcategoryPage";

export default function Comparacion({ onBack }) {
  return (
    <SubcategoryPage
      category="RedesSociales"
      title="Comparación"
      subtitle="Recuerda que cada persona tiene su propio camino."
      icon="🪞"
      intro="Las publicaciones muestran una parte de la vida de una persona y no siempre reflejan todo lo que ocurre fuera de pantalla."
      steps={["Observa qué sientes después de ver ciertas publicaciones.", "Recuerda que estás viendo una selección de momentos.", "Deja de seguir o silencia contenido que te haga daño.", "Vuelve a actividades que te conecten contigo."]}
      activity="Escribe tres cosas que valoras de tu propia vida sin compararlas con nadie."
      tip="Si una red afecta persistentemente tu bienestar, considera hablarlo con alguien de confianza."
      onBack={onBack}
    />
  );
}
