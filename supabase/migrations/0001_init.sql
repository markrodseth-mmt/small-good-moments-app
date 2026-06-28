-- Small Good Moments — initial schema
-- Rituals catalogue (public, read-only) + per-user gathered-moments journal.

-- ---------------------------------------------------------------------------
-- rituals: the catalogue. Seeded from rituals-catalogue.md. Public read.
-- ---------------------------------------------------------------------------
create table if not exists public.rituals (
  id               text primary key,
  name             text not null,
  language         text not null,
  region           text not null,
  pronunciation    text not null,
  cluster          text not null check (cluster in ('pause','outside','savour','gather','reflect')),
  type             text not null,
  promptable       boolean not null default false,
  solo_or_social   text not null check (solo_or_social in ('solo','social','either')),
  time_of_day      text not null check (time_of_day in ('dawn','morning','midday','afternoon','evening','night','any')),
  season           text not null,
  duration_minutes integer not null default 0,
  essence          text not null,
  meaning          text not null,
  how_to           text[] not null default '{}',
  when_context     text not null,
  feeling          text not null,
  cultural_note    text not null default '',
  lomas_path       text,
  caution          text,
  sort_order       integer not null default 0,
  created_at       timestamptz not null default now()
);

create index if not exists rituals_cluster_idx     on public.rituals (cluster);
create index if not exists rituals_time_of_day_idx on public.rituals (time_of_day);
create index if not exists rituals_sort_order_idx  on public.rituals (sort_order);

alter table public.rituals enable row level security;

-- Anyone (anon or authenticated) may read the catalogue. No write policies = no writes.
drop policy if exists "rituals are readable by everyone" on public.rituals;
create policy "rituals are readable by everyone"
  on public.rituals for select
  to anon, authenticated
  using (true);

-- ---------------------------------------------------------------------------
-- gathered_moments: a per-user journal. One row per "I did this".
-- ---------------------------------------------------------------------------
create table if not exists public.gathered_moments (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  ritual_id   text not null references public.rituals (id),
  gathered_at timestamptz not null default now()
);

create index if not exists gathered_moments_user_idx
  on public.gathered_moments (user_id, gathered_at desc);

alter table public.gathered_moments enable row level security;

-- Users (including anonymous users) may only see and touch their own moments.
drop policy if exists "users read own moments" on public.gathered_moments;
create policy "users read own moments"
  on public.gathered_moments for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "users insert own moments" on public.gathered_moments;
create policy "users insert own moments"
  on public.gathered_moments for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "users delete own moments" on public.gathered_moments;
create policy "users delete own moments"
  on public.gathered_moments for delete
  to authenticated
  using (auth.uid() = user_id);
