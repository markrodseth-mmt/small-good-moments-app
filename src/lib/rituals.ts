import { supabase } from './supabase';
import type { Ritual } from '../types';

export async function fetchRituals(): Promise<Ritual[]> {
  const { data, error } = await supabase
    .from('rituals')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return (data ?? []) as Ritual[];
}
