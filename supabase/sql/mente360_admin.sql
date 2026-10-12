-- =========================================================
-- MENTE360: ESTADÍSTICAS PÚBLICAS Y PANEL ADMINISTRATIVO
-- Revisar antes de ejecutar en Supabase SQL Editor.
-- =========================================================

-- 1. Lista privada de administradores.
CREATE TABLE IF NOT EXISTS public.mente360_admins (
    user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.mente360_admins ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.mente360_admins FROM PUBLIC, anon, authenticated;

-- 2. Registro de accesos comunicados por la aplicación.
CREATE TABLE IF NOT EXISTS public.login_events (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    logged_in_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.login_events ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.login_events FROM PUBLIC, anon, authenticated;
GRANT INSERT ON TABLE public.login_events TO authenticated;

DROP POLICY IF EXISTS "Users can record their own login" ON public.login_events;

CREATE POLICY "Users can record their own login"
ON public.login_events
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 3. Estadísticas generales: no devuelve información personal.
CREATE OR REPLACE FUNCTION public.mente360_public_stats()
RETURNS TABLE (
    total_registered bigint,
    total_logins bigint
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $function$
    SELECT
        (SELECT count(*) FROM auth.users),
        (SELECT count(*) FROM public.login_events);
$function$;

REVOKE ALL ON FUNCTION public.mente360_public_stats() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.mente360_public_stats() TO anon, authenticated;

-- 4. Lista administrativa. Verifica los permisos dentro de la función.
CREATE OR REPLACE FUNCTION public.mente360_admin_users()
RETURNS TABLE (
    user_id uuid,
    display_name text,
    email text,
    registered_at timestamptz,
    last_login_at timestamptz,
    login_count bigint
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
    IF auth.uid() IS NULL OR NOT EXISTS (
        SELECT 1
        FROM public.mente360_admins AS a
        WHERE a.user_id = auth.uid()
    ) THEN
        RAISE EXCEPTION 'No autorizado'
            USING ERRCODE = '42501';
    END IF;

    RETURN QUERY
    SELECT
        u.id,
        COALESCE(
            p.display_name::text,
            u.raw_user_meta_data ->> 'display_name'
        ),
        u.email::text,
        u.created_at,
        u.last_sign_in_at,
        count(le.id)::bigint
    FROM auth.users AS u
    LEFT JOIN public.profiles AS p
        ON p.id = u.id
    LEFT JOIN public.login_events AS le
        ON le.user_id = u.id
    GROUP BY
        u.id,
        p.display_name,
        u.raw_user_meta_data,
        u.email,
        u.created_at,
        u.last_sign_in_at
    ORDER BY u.created_at DESC;
END;
$function$;

REVOKE ALL ON FUNCTION public.mente360_admin_users() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.mente360_admin_users() TO authenticated;
