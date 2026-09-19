import {
  ArrowLeft,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
} from "lucide-react";

const institutions = [
  {
    name: "Centro de Salud Mental Comunitario Villa Tacna",
    place: "Gregorio Albarracín Lanchipa · Viñani",
    address: "Asoc. Los Arenales Roca Eterna, Viñani III Etapa",
    phone: "976 740 408",
    phoneHref: "tel:+51976740408",
  },
  {
    name: "Centro de Salud Mental Comunitario Valle Pocollay",
    place: "Pocollay",
    address: "Calle San Martín S/N, cruce con calle La Merced",
    phone: "(052) 611 525",
    phoneHref: "tel:+5152611525",
  },
  {
    name: "Centro de Salud Mental Comunitario Villa del Norte",
    place: "Ciudad Nueva",
    address: "Calle José Santos Atahualpa con Av. Mariano Necochea",
    phone: "(052) 783 489",
    phoneHref: "tel:+5152783489",
  },
  {
    name: "Centro de Salud Mental Comunitario La Heroica",
    place: "Tacna",
    address: "Av. José Gálvez con Av. Guardia Civil S/N",
    phone: "(052) 640 180",
    phoneHref: "tel:+5152640180",
  },
  {
    name: "Centro de Salud Mental Comunitario Universitario Jorge Basadre",
    place: "Tacna",
    address: "Av. Pinto con Av. Bolognesi S/N",
    phone: "(052) 641 333 / 993 399 854",
    phoneHref: "tel:+5152641333",
  },
];

function mapSearchUrl(name) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${name}, Tacna, Perú`
  )}`;
}

export default function InstitucionesAyudaPsicologica({ onBack }) {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 860,
        margin: "0 auto",
        padding: "18px 20px 105px",
        boxSizing: "border-box",
      }}
    >
      <button
        type="button"
        onClick={onBack}
        style={{
          border: 0,
          background: "#ffffff",
          color: "#51439d",
          padding: "10px 15px",
          borderRadius: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontWeight: 800,
          marginBottom: 20,
          boxShadow: "0 6px 18px rgba(102,80,150,.08)",
        }}
      >
        <ArrowLeft size={18} />
        Volver
      </button>

      <header style={{ marginBottom: 18 }}>
        <div
          style={{
            color: "#7561d8",
            fontWeight: 900,
            fontSize: 13,
            marginBottom: 5,
          }}
        >
          OPCIONES DE APOYO
        </div>

        <h1
          style={{
            margin: 0,
            color: "#30345d",
            fontSize: "clamp(25px, 4vw, 34px)",
            lineHeight: 1.15,
            fontWeight: 900,
          }}
        >
          Instituciones de ayuda psicológica 💜
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            color: "#747793",
            fontSize: 14,
            lineHeight: 1.55,
            fontWeight: 600,
            maxWidth: 700,
          }}
        >
          Si necesitas orientación o apoyo profesional, puedes consultar
          estos Centros de Salud Mental Comunitarios de Tacna.
        </p>
      </header>

      <div style={{ display: "grid", gap: 12 }}>
        {institutions.map((institution) => (
          <article
            key={institution.name}
            style={{
              background: "#ffffff",
              border: "1px solid #e7e1f2",
              borderRadius: 22,
              padding: "18px",
              boxShadow: "0 8px 24px rgba(102,80,150,.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 13,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  minWidth: 50,
                  borderRadius: 16,
                  background: "#e9e4ff",
                  color: "#7561d8",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 24,
                }}
              >
                🧠
              </div>

              <div style={{ minWidth: 0, flex: 1 }}>
                <h2
                  style={{
                    margin: 0,
                    color: "#30345d",
                    fontSize: 16,
                    lineHeight: 1.3,
                    fontWeight: 900,
                  }}
                >
                  {institution.name}
                </h2>

                <div
                  style={{
                    marginTop: 6,
                    color: "#7561d8",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {institution.place}
                </div>

                <div
                  style={{
                    marginTop: 7,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 7,
                    color: "#747793",
                    fontSize: 13,
                    lineHeight: 1.45,
                  }}
                >
                  <MapPin size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span>{institution.address}</span>
                </div>

                <div
                  style={{
                    marginTop: 7,
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    color: "#747793",
                    fontSize: 13,
                  }}
                >
                  <Phone size={16} style={{ flexShrink: 0 }} />
                  <span>{institution.phone}</span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 14,
              }}
            >
              <a
                href={institution.phoneHref}
                style={{
                  textDecoration: "none",
                  border: 0,
                  background: "#7561d8",
                  color: "#ffffff",
                  padding: "10px 15px",
                  borderRadius: 14,
                  fontSize: 12,
                  fontWeight: 900,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Phone size={15} />
                Llamar
              </a>

              <a
                href={mapSearchUrl(institution.name)}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  border: "1px solid #e2dcef",
                  background: "#f7f4ff",
                  color: "#51439d",
                  padding: "10px 15px",
                  borderRadius: 14,
                  fontSize: 12,
                  fontWeight: 900,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <ExternalLink size={15} />
                Ver ubicación
              </a>
            </div>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: 16,
          background: "#fffaf0",
          border: "1px solid #f2e4bd",
          borderRadius: 20,
          padding: "16px 18px",
          color: "#747793",
          fontSize: 13,
          lineHeight: 1.55,
        }}
      >
        <strong style={{ color: "#51405f" }}>
          📞 También puedes llamar al 113, opción 5.
        </strong>{" "}
        El Ministerio de Salud informa que esta línea brinda orientación y
        apoyo psicológico gratuito las 24 horas.
      </div>

      <div
        style={{
          marginTop: 12,
          background: "#ffe9f0",
          borderRadius: 20,
          padding: "14px 17px",
          display: "flex",
          alignItems: "center",
          gap: 11,
          color: "#747793",
          fontSize: 12.5,
          lineHeight: 1.45,
        }}
      >
        <Heart size={22} color="#df789d" style={{ flexShrink: 0 }} />
        <span>
          Los datos mostrados son informativos. Antes de acudir, confirma
          disponibilidad y condiciones de atención.
        </span>
      </div>
    </section>
  );
}
