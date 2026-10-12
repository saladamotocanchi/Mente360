import { ArrowLeft, Heart } from "lucide-react";

export default function SectionPage({ title, description, icon, items = [], onBack }) {
  return (
    <section className="section-page">
      <div className="section-page-top">
        <button className="section-back-button" type="button" onClick={onBack}>
          <ArrowLeft size={17} />
          Volver a Explora Mente360
        </button>
      </div>

      <div className="section-page-header">
        <div className="section-page-icon" aria-hidden="true">{icon}</div>
        <div>
          <span className="section-page-kicker">Mente360</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="section-page-grid">
        {items.map((item) => (
          <article className="section-info-card" key={item.title}>
            <h2>{item.icon || "♡"} {item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="section-page-note">
        <Heart size={18} />
        <span>Este espacio es educativo y de orientación. Si necesitas ayuda, busca apoyo de una persona de confianza o un profesional.</span>
      </div>
    </section>
  );
}
