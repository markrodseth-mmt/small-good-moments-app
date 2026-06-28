-- Small Good Moments — favourites
-- Per-user list of favourited rituals. Mirrors gathered_moments (0001_init.sql).

-- ---------------------------------------------------------------------------
-- favourite_rituals: a per-user bookmark list. One row per favourited ritual.
-- ---------------------------------------------------------------------------
create table if not exists public.favourite_rituals (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  ritual_id  text not null references public.rituals (id),
  created_at timestamptz not null default now(),
  unique (user_id, ritual_id)
);

create index if not exists favourite_rituals_user_idx
  on public.favourite_rituals (user_id, created_at desc);

alter table public.favourite_rituals enable row level security;

-- Users (including anonymous users) may only see and touch their own favourites.
drop policy if exists "users read own favourites" on public.favourite_rituals;
create policy "users read own favourites"
  on public.favourite_rituals for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "users insert own favourites" on public.favourite_rituals;
create policy "users insert own favourites"
  on public.favourite_rituals for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "users delete own favourites" on public.favourite_rituals;
create policy "users delete own favourites"
  on public.favourite_rituals for delete
  to authenticated
  using (auth.uid() = user_id);
