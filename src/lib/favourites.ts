import { supabase } from './supabase';

/** Ritual ids the current user has favourited. */
export async function fetchFavourites(): Promise<string[]> {
  const { data, error } = await supabase
    .from('favourite_rituals')
    .select('ritual_id')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => row.ritual_id as string);
}

/** Add one ritual to the current user's favourites. */
export async function addFavourite(ritualId: string): Promise<void> {
  const { error } = await supabase
    .from('favourite_rituals')
    .insert({ ritual_id: ritualId });
  if (error) throw error;
}

/** Remove one ritual from the current user's favourites. RLS scopes to the user. */
export async function removeFavourite(ritualId: string): Promise<void> {
  const { error } = await supabase
    .from('favourite_rituals')
    .delete()
    .eq('ritual_id', ritualId);
  if (error) throw error;
}
