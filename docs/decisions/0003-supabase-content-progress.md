# ADR 0003 — Supabase para contenido dinámico y progreso

## Estado

Propuesta aceptada para implementación, pendiente de aplicar.

## Decisión

Usar Supabase/Postgres como backend de la plataforma.

Separar tablas de contenido de tablas de usuario/progreso.

## Motivo

La plataforma necesita persistir progreso individual y, posteriormente, puede necesitar contenido administrable.

## Primera implementación

El primer vertical slice utilizará:

- courses
- modules
- lessons
- recipes
- recipe_ingredients
- recipe_steps
- lesson_recipes
- profiles
- lesson_progress
- recipe_progress
- evidence
- competency_progress

Las entidades de técnicas, equipo, Chibis y variantes quedan incluidas en el modelo para evitar rehacer la arquitectura, aunque no todas necesitan aparecer en el primer slice.

## Seguridad

Las tablas que contienen estado del alumno deberán protegerse mediante Row Level Security cuando se aplique la migración.

El usuario solo debe poder leer/escribir su propio progreso y evidencias.

El contenido público o autorizado tendrá políticas separadas.

## Estado del entorno

Al preparar esta ADR, el proyecto Supabase disponible se reportó como INACTIVE y una lectura de tablas agotó el tiempo de conexión. Por tanto, no se aplicó esta migración ni se afirma que el esquema exista todavía en Supabase.
