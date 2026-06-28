import { supabase } from './supabase';
import type { GatheredMoment } from '../types';

/** Insert one "I did this" row for the current user. */
export async function gatherMoment(ritualId: string): Promise<GatheredMoment> {
  const { data, error } = await supabase
    .from('gathered_moments')
    .insert({ ritual_id: ritualId })
    .select()
    .single();
  if (error) throw error;
  return data as GatheredMoment;
}

/** All of the current user's gathered moments, newest first. */
export async function fetchGathered(): Promise<GatheredMoment[]> {
  const { data, error } = await supabase
    .from('gathered_moments')
    .select('*')
    .order('gathered_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as GatheredMoment[];
}

/** Current consecutive-day streak of gathering, counting back from today. */
export function computeStreak(moments: GatheredMoment[]): number {
  if (moments.length === 0) return 0;
  const days = new Set(
    moments.map((m) => new Date(m.gathered_at).toDateString()),
  );
  let streak = 0;
  const cursor = new Date();
  // Allow the streak to start either today or yesterday.
  if (!days.has(cursor.toDateString())) {
    cursor.setDate(cursor.getDate() - 1);
    if (!days.has(cursor.toDateString())) return 0;
  }
  while (days.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
