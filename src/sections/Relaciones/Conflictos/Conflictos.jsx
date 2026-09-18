import SubcategoryPage from "../../SubcategoryPage";

export default function Conflictos({ onBack }) {
  return (
    <SubcategoryPage
      category="Relaciones"
      title="Resolver conflictos"
      subtitle="Busca soluciones y aprende a negociar."
      icon="🤝"
      intro="Los conflictos pueden aparecer incluso en relaciones importantes. Resolverlos implica escuchar, expresar necesidades y buscar acuerdos posibles."
      steps={["Deja que cada persona explique su punto de vista.", "Separa el problema de la persona.", "Propón soluciones concretas.", "Acuerda qué hará cada uno."]}
      activity="Practica con un conflicto pequeño: escribe el problema, dos posibles soluciones y un acuerdo."
      tip="Si hay amenazas, violencia o miedo, la prioridad es la seguridad y pedir ayuda."
      onBack={onBack}
    />
  );
}
