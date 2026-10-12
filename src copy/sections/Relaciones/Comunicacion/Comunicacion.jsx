import SubcategoryPage from "../../SubcategoryPage";

export default function Comunicacion({ onBack }) {
  return (
    <SubcategoryPage
      category="Relaciones"
      title="Comunicación saludable"
      subtitle="Expresa lo que sientes y escucha a los demás."
      icon="💬"
      intro="Una comunicación saludable combina expresar tus ideas y emociones con escuchar y respetar a la otra persona."
      steps={["Habla desde lo que tú sientes.", "Usa frases como “yo siento…” o “yo necesito…”.", "Escucha sin interrumpir.", "Pregunta si entendiste correctamente."]}
      activity="Practica expresar una necesidad de forma clara y respetuosa."
      tip="Si una conversación se vuelve insegura o agresiva, busca apoyo."
      onBack={onBack}
    />
  );
}
