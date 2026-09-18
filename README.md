# Mente360

Primera versión responsive de Mente360, pensada primero para celular y también adaptada a PC.

## Ejecutar

```bash
npm install
npm run dev
```

Luego abre la dirección que muestre Vite (normalmente http://localhost:5173).

## Login funcional de esta etapa

- Crear cuenta con nombre, correo y contraseña.
- Validación de campos.
- Evita registrar dos veces el mismo correo.
- Iniciar sesión con las credenciales creadas.
- Recordar sesión en el navegador.
- Cerrar sesión desde el perfil del Dashboard.
- Recuperación de contraseña preparada como flujo visual/local.
- Botón Google preparado como simulación visual.

### Importante
Esta etapa usa `localStorage`/`sessionStorage` solamente para probar el flujo en el navegador. No es autenticación segura para producción. El siguiente paso puede ser conectar un servicio real como Supabase o Firebase, sin cambiar el diseño.
