# CursoPanadero

Plataforma web de aprendizaje de panadería y pastelería.

## Principio pedagógico

La plataforma no debe limitarse a presentar recetas. La experiencia central es:

`concepto → práctica → observación → diagnóstico → evidencia → siguiente competencia`

La receta es el vehículo de práctica dentro de una ruta progresiva.

## Stack actual

- Next.js 13
- React 18
- Tailwind CSS
- Supabase Auth + Postgres
- `@supabase/ssr`

Se mantiene el proyecto Next.js existente. No se está migrando a Vite.

## Estado actual

La base de datos de Supabase ya contiene el primer vertical slice:

- 1 curso
- 1 módulo
- 6 lecciones
- 4 recetas
- ingredientes y pasos normalizados
- tablas preparadas para técnicas, equipo, Chibis, evaluaciones, evidencia y progreso
- RLS habilitado

El frontend nuevo consume el contenido desde Supabase en lugar de usar `data/curso.js` y `data/recetas.js` como fuente de verdad.

## Rutas nuevas

```text
/                         Inicio
/ruta                     Ruta del alumno
/modulos/:slug            Módulo
/lecciones/:slug          Lección
/recetas/:slug            Receta
/progreso                 Progreso
/acceso                   Autenticación
```

El árbol `/curso` se conserva temporalmente por compatibilidad con la aplicación anterior.

## Estructura relevante

```text
components/course/        componentes del nuevo curso
lib/course.js             acceso server-side al contenido
pages/ruta.js             ruta del alumno
pages/modulos/            páginas de módulos
pages/lecciones/          páginas de lecciones
pages/recetas/            páginas de recetas
pages/progreso.js         seguimiento
types/database.ts         tipos generados desde Supabase
supabase/                 estado y documentación de la base de datos
legacy/                   contenido de la aplicación anterior
data/                     contenido anterior; no es fuente de verdad
```

## Fuente de contenido

El contenido pedagógico procede del corpus de recetas analizado para el proyecto. Los campos `source_*` de la base de datos conservan la procedencia y permiten separar el material fuente de las capas pedagógicas añadidas para la plataforma.

## Próximo paso

Completar el vertical slice con:

1. progreso interactivo de lecciones y recetas;
2. panel de observación y diagnóstico;
3. equipo contextual;
4. Chibis;
5. evidencia/evaluación;
6. validación de contenido antes de ampliar la carga de recetas.

La documentación del estado de Supabase está en [supabase/README.md](supabase/README.md).
