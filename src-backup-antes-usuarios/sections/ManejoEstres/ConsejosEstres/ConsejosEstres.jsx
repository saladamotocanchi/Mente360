import SubcategoryPage from "../../SubcategoryPage";

export default function ConsejosEstres({ onBack }) {
  return (
    <SubcategoryPage
      category="ManejoEstres"
      title="Consejos útiles"
      subtitle="Pequeños hábitos, grandes cambios."
      icon="💡"
      intro="Los hábitos sencillos pueden ayudarte a manejar mejor los días exigentes."
      steps={["Divide las tareas grandes en pasos pequeños.", "Mantén horarios razonables de descanso.", "Reserva tiempo para actividades que disfrutas.", "Habla con alguien de confianza cuando algo te supere."]}
      activity="Elige un hábito pequeño para practicar hoy y anota si te resultó útil."
      tip="Pedir apoyo también es una forma de cuidarte."
      onBack={onBack}
    />
  );
}
