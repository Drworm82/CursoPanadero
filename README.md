# CursoPanadero

Plataforma web de aprendizaje de panadería y pastelería.

## Estado del proyecto

Actualmente estamos construyendo la arquitectura pedagógica, de contenido y de interfaz antes de implementar el producto completo.

### Principio pedagógico

La plataforma no debe limitarse a presentar recetas. La experiencia central es:

`concepto → práctica → observación → diagnóstico → evidencia → siguiente competencia`

La receta es el vehículo de práctica dentro de una ruta progresiva.

## Arquitectura

- Ruta del alumno
- Módulos
- Lecciones
- Recetas
- Técnicas
- Equipo
- Chibis
- Evaluaciones
- Progreso
- Capas opcionales de producción

## Estructura

```text
docs/        documentación y decisiones
content/     contenido pedagógico versionado
src/         aplicación web
public/      recursos estáticos
supabase/    migraciones, seeds y funciones
tests/       pruebas
```

## Desarrollo

La implementación comenzará con un vertical slice del Módulo 1:

`Inicio → Ruta → Módulo 1 → Lección → Receta → Observación → Evidencia → Progreso`

No se cargarán las 85 preparaciones como código duplicado. El contenido será independiente de los componentes de interfaz.

## Documentación

Consulta [docs/architecture.md](docs/architecture.md) para la arquitectura inicial.
