import SubcategoryPage from "../../SubcategoryPage";

export default function PedirApoyo({ onBack }) {
  return (
    <SubcategoryPage
      category="EstresAcademico"
      title="Pedir apoyo"
      subtitle="Habla con tu familia, profesores o amigos."
      icon="🫂"
      intro="Pedir ayuda académica puede evitar que una dificultad pequeña se convierta en una carga mayor."
      steps={["Identifica qué parte de la tarea te cuesta.", "Pregunta de manera concreta.", "Acepta orientación y vuelve a intentarlo.", "Agradece y registra lo que aprendiste."]}
      activity="Escribe una pregunta que podrías hacerle a un profesor o compañero."
      tip="Pedir apoyo no significa que no puedas aprender por ti mismo/a."
      onBack={onBack}
    />
  );
}
