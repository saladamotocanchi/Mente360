import SectionPage from "./SectionPage";

export default function EstresAcademico({ onBack }) {
  return (
    <SectionPage
      title='Estrés académico'
      description='Organiza tu tiempo y estudia mejor.'
      icon='📚'
      onBack={onBack}
      items={[
    { title: 'Planifica', text: 'Prioriza tareas y divide el estudio en bloques.', icon: '🗓️' },
    { title: 'Descansa', text: 'Las pausas también forman parte de estudiar bien.', icon: '🌙' },
    { title: 'Pide ayuda', text: 'Consultar a docentes o compañeros puede facilitar una materia difícil.', icon: '🙋' }
      ]}
    />
  );
}
