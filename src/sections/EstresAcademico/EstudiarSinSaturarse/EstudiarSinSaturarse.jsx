import SubcategoryPage from "../../SubcategoryPage";

export default function EstudiarSinSaturarse({ onBack }) {
  return (
    <SubcategoryPage
      category="EstresAcademico"
      title="Estudiar sin saturarse"
      subtitle="Encuentra tu método y mantén el equilibrio."
      icon="📚"
      intro="Aprender no consiste solamente en estudiar más horas. También importa cómo organizas el aprendizaje y el descanso."
      steps={["Define qué quieres aprender.", "Trabaja en bloques pequeños.", "Haz preguntas o resume con tus propias palabras.", "Descansa y revisa qué aprendiste."]}
      activity="Prueba una sesión corta con un objetivo concreto y una pausa al terminar."
      tip="Si el estrés académico está afectando mucho tu vida diaria, habla con alguien de confianza."
      onBack={onBack}
    />
  );
}
