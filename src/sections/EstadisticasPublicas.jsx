
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function EstadisticasPublicas() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  // Número aleatorio del 1 al 50 al cargar el componente.
  const [iniciosSimulados] = useState(
    () => Math.floor(Math.random() * 50) + 1
  );

  useEffect(() => {
    let active = true;

    async function cargar() {
      const { data, error } = await supabase.rpc(
        "mente360_public_stats"
      );

      if (!active) return;

      if (error) {
        setError("No se pudieron cargar las estadísticas.");
      } else {
        setStats(data?.[0] ?? null);
      }
    }

    cargar();

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return (
      <p role="alert" className="public-stats-error">
        {error}
      </p>
    );
  }

  if (!stats) {
    return (
      <p className="public-stats-loading">
        Cargando estadísticas...
      </p>
    );
  }

  return (
    <section className="public-stats">
      <div className="public-stats-heading">
        <span className="public-stats-eyebrow">
          NUESTRA COMUNIDAD
        </span>

        <h2>La comunidad Mente360</h2>

        <p>
          Seguimos creciendo juntos, cuidando el bienestar
          emocional de nuestra comunidad.
        </p>
      </div>

      <div className="public-stats-grid">
        <article className="public-stat-card users-card">
          <div className="public-stat-top">
            <div className="public-stat-icon users-icon">
              <svg
                viewBox="0 0 24 24"
                width="27"
                height="27"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <span className="public-stat-tag">
              Comunidad
            </span>
          </div>

          <p className="public-stat-number">
            {stats.total_registered ?? 0}
          </p>

          <h3>Usuarios registrados</h3>

          <p className="public-stat-description">
            Personas que forman parte de Mente360.
          </p>
        </article>

        <article className="public-stat-card logins-card">
          <div className="public-stat-top">
            <div className="public-stat-icon logins-icon">
              <svg
                viewBox="0 0 24 24"
                width="27"
                height="27"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 12h4l3-8 4 16 3-8h4" />
              </svg>
            </div>

            <span className="public-stat-tag demo-tag">
              Demo
            </span>
          </div>

          <p className="public-stat-number">
            {iniciosSimulados}
          </p>

          <h3>Inicios de sesión</h3>

          <p className="public-stat-description">
            Indicador visual simulado de actividad.
          </p>
        </article>
      </div>

      <p className="public-stats-footer">
        <span className="public-stats-status-dot" />
        Estadísticas de la comunidad
        <span className="public-stats-separator">·</span>
        Actividad simulada para demostración
      </p>
    </section>
  );
}