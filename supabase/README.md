# Supabase

El proyecto usa Supabase como fuente de datos del curso.

## Estado verificado

Proyecto: `dwfvhwrdbsugwidoadxg`

Migraciones aplicadas actualmente en la base de datos:

1. `20260918193358 initial_course_schema`
2. `20260918193704 enable_rls_and_content_progress_policies`
3. `20260918203800 seed_modulo_1_v5`

El repositorio contiene el directorio `supabase/migrations/`, pero los archivos SQL de esas migraciones no están actualmente versionados allí. Por tanto, **no se deben reconstruir ni inventar archivos de migración a partir del esquema desplegado** sin recuperar primero su contenido original.

## Contenido sembrado

La semilla actualmente verificada contiene:

- 1 curso
- 1 módulo
- 6 lecciones
- 4 recetas
- 48 ingredientes
- 36 pasos
- relaciones de 4 recetas con las lecciones

Las tablas de contenido tienen RLS habilitado y políticas de lectura pública; las tablas de progreso y evidencia están restringidas por `auth.uid()`.

## Regla para futuras migraciones

Toda modificación estructural o de contenido que deba reproducirse en otros entornos debe quedar acompañada por su migración SQL versionada en `supabase/migrations/`.

Los tipos TypeScript se generan desde el esquema desplegado y se guardan en `types/database.ts`.
