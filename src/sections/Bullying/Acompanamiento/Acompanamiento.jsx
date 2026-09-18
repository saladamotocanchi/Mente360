import SubcategoryPage from "../../SubcategoryPage";

export default function Acompanamiento({ onBack }) {
  return (
    <SubcategoryPage
      category="Bullying"
      title="Acompañar a alguien"
      subtitle="Escucha, apoya y haz la diferencia."
      icon="❤️"
      intro="Acompañar a alguien no significa resolverlo todo. Puedes escuchar, creerle y ayudarle a encontrar apoyo."
      steps={["Escucha sin burlarte ni culpar.", "Pregúntale qué necesita.", "Anímale a hablar con una persona adulta de confianza.", "Si hay peligro, busca ayuda responsable."]}
      activity="Practica una frase de apoyo: “Te creo, no tienes que pasar por esto solo/a”."
      tip="No prometas guardar en secreto una situación que implique peligro grave."
      onBack={onBack}
    />
  );
}
