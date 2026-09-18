# Modelo de datos — v19

## Principio

Separar:

1. contenido pedagógico relativamente estable;
2. relaciones pedagógicas;
3. estado dinámico del alumno.

La base debe permitir que una misma receta, técnica o herramienta se reutilice en múltiples lecciones.

## Entidades de contenido

- courses
- modules
- lessons
- recipes
- recipe_ingredients
- recipe_steps
- techniques
- lesson_techniques
- equipment
- recipe_equipment
- chibis
- chibi_interventions
- evaluations
- evaluation_items
- recipe_variants

## Entidades de progreso

- profiles
- lesson_progress
- recipe_progress
- evidence
- competency_progress

## Relaciones principales

`course → modules → lessons`

`lesson → recipes`

`recipe ↔ techniques`

`recipe ↔ equipment`

`lesson ↔ chibi_interventions`

`recipe → recipe_variants`

`user → progress/evidence`

## Decisiones

### Contenido vs progreso

El contenido no pertenece a un usuario. El progreso sí.

### IDs

Usar UUID para entidades persistentes y slugs únicos para navegación.

### Fuente

Las recetas deben conservar campos de trazabilidad hacia el corpus analizado, por ejemplo:

- source_id
- source_class
- source_objective
- source_demo

Estos campos no deben confundirse con decisiones pedagógicas posteriores.

### Estado de validación

Las variantes, sustituciones y recomendaciones que todavía no hayan sido verificadas deben tener un estado explícito.

## Nota sobre Supabase

El proyecto Supabase actualmente disponible para esta cuenta aparece como INACTIVE. Por ello, en esta fase se prepara el modelo y la migración, pero no se declara que el esquema haya sido aplicado a producción.
