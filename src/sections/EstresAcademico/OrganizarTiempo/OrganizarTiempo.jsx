import SubcategoryPage from "../../SubcategoryPage";

export default function OrganizarTiempo({ onBack }) {
  return (
    <SubcategoryPage
      category="EstresAcademico"
      title="Organizar el tiempo"
      subtitle="Planifica tus tareas y establece prioridades."
      icon="📅"
      intro="Organizar el tiempo puede hacer que una tarea grande se sienta más manejable."
      steps={["Anota todo lo que necesitas hacer.", "Separa tareas urgentes de las importantes.", "Divide trabajos grandes en pasos.", "Reserva descansos realistas."]}
      activity="Haz una lista de tres tareas para hoy y ordénalas por prioridad."
      tip="Una planificación flexible puede adaptarse cuando aparecen imprevistos."
      onBack={onBack}
    />
  );
}
