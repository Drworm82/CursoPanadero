-- Restrict course lesson metadata to users with active course access.
-- Community recipes remain independent and public.

drop policy if exists "public can read lessons" on public.lessons;

create policy "course members can read lessons"
  on public.lessons
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));
