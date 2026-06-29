export type ClusterId = 'pause' | 'outside' | 'savour' | 'gather' | 'reflect';

export type TimeOfDay =
  | 'dawn'
  | 'morning'
  | 'midday'
  | 'afternoon'
  | 'evening'
  | 'night'
  | 'any';

export interface Ritual {
  id: string;
  name: string;
  language: string;
  region: string;
  pronunciation: string;
  cluster: ClusterId;
  type: string;
  promptable: boolean;
  solo_or_social: 'solo' | 'social' | 'either';
  time_of_day: TimeOfDay;
  season: string;
  duration_minutes: number;
  essence: string;
  meaning: string;
  how_to: string[];
  when_context: string;
  feeling: string;
  cultural_note: string;
  lomas_path: string | null;
  caution: string | null;
  sort_order: number;
}

export interface GatheredMoment {
  id: string;
  user_id: string;
  ritual_id: string;
  gathered_at: string;
  note: string | null;
}

export interface FavouriteRitual {
  id: string;
  user_id: string;
  ritual_id: string;
  created_at: string;
}
