import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function PanelAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function cargar() {
      const { data, error } = await supabase.rpc(
        "mente360_admin_users"
      );

      if (!active) return;

      if (error) {
        setError("Acceso no autorizado o error al consultar usuarios.");
        setUsers([]);
      } else {
        setUsers(data ?? []);
      }

      setLoading(false);
    }

    cargar();
    return () => { active = false; };
  }, []);

  return (
    <section className="admin-panel">
      <h2>Administración de Mente360</h2>

      {loading && <p>Cargando usuarios...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <>
          <p>Total de cuentas: <strong>{users.length}</strong></p>
          <div className="admin-table-wrapper">
            <table className="admin-users-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Registro</th>
                  <th>Último acceso</th>
                  <th>Número de accesos</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.user_id}>
                    <td>{user.display_name || "Sin nombre"}</td>
                    <td>{user.email || "Sin correo"}</td>
                    <td>
                      {user.registered_at
                        ? new Date(user.registered_at).toLocaleString()
                        : "Sin datos"}
                    </td>
                    <td>
                      {user.last_login_at
                        ? new Date(user.last_login_at).toLocaleString()
                        : "Sin accesos registrados"}
                    </td>
                    <td>{user.login_count}</td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={5}>No hay cuentas para mostrar.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
