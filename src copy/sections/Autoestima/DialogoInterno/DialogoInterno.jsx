import SubcategoryPage from "../../SubcategoryPage";

export default function DialogoInterno({ onBack }) {
  return (
    <SubcategoryPage
      category="Autoestima"
      title="Cuida tu diálogo interno"
      subtitle="Háblate bonito."
      icon="💗"
      intro="La forma en que te hablas puede influir en cómo afrontas los errores y los momentos difíciles."
      steps={["Detecta una frase demasiado dura contigo.", "Imagina qué dirías a un amigo en la misma situación.", "Cambia la frase por una más realista y amable.", "Repite la nueva frase cuando la necesites."]}
      activity="Escribe una frase de apoyo que puedas usar cuando cometas un error."
      tip="Hablarte con amabilidad no significa ignorar aquello que puedes mejorar."
      onBack={onBack}
    />
  );
}
