import SubcategoryPage from "../../SubcategoryPage";

export default function PedirAyuda({ onBack }) {
  return (
    <SubcategoryPage
      category="Bullying"
      title="Pedir ayuda"
      subtitle="No estás solo/a, puedes hablar con alguien."
      icon="🫂"
      intro="Pedir ayuda puede ser un paso importante cuando una situación te supera o no puedes resolverla por tu cuenta."
      steps={["Elige una persona en quien confíes.", "Cuenta qué pasó y cómo te afecta.", "Si no te escuchan, busca otra persona responsable.", "Sigue pidiendo apoyo hasta encontrar una respuesta segura."]}
      activity="Escribe tres personas o instituciones a las que podrías acudir."
      tip="Si existe peligro inmediato, busca ayuda de emergencia de tu localidad."
      onBack={onBack}
    />
  );
}
