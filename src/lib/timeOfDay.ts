import type { Ritual, TimeOfDay } from '../types';

export interface Phase {
  key: Exclude<TimeOfDay, 'any'>;
  name: string;
  sky: [string, string, string];
  ground: string;
  /** Preferred ritual id for this phase (matches a catalogue id). */
  ritual: string;
  line: string;
}

/** Ported verbatim from the prototype's phaseFor(). */
export function phaseFor(h: number): Phase {
  if (h >= 5 && h < 8)
    return { key: 'dawn', name: 'Dawn', sky: ['#7c89c4', '#e9a6a0', '#f4c79a'], ground: '#3a3550', ritual: 'gokotta', line: 'the early risers are out listening for the first birds.' };
  if (h >= 8 && h < 11)
    return { key: 'morning', name: 'Morning', sky: ['#7fb7e0', '#bfe0ee', '#f6ead0'], ground: '#2e5a4f', ritual: 'fika', line: 'somewhere a kettle is on and the morning break is sacred.' };
  if (h >= 11 && h < 15)
    return { key: 'midday', name: 'Midday', sky: ['#6bb6e6', '#a9d8f0', '#f7eccb'], ground: '#2e5a4f', ritual: 'dolce-far-niente', line: 'the sun is high — a fine time to do nothing, sweetly.' };
  if (h >= 15 && h < 18)
    return { key: 'afternoon', name: 'Afternoon', sky: ['#7eaad6', '#e6c98a', '#f3b46a'], ground: '#3d4a55', ritual: 'utepils', line: 'the light is golden and made for a drink in the sun.' };
  if (h >= 18 && h < 21)
    return { key: 'evening', name: 'Evening', sky: ['#48598f', '#c66f7e', '#f0a35e'], ground: '#33304e', ritual: 'sobremesa', line: "plates are clearing, but no one's leaving the table." };
  return { key: 'night', name: 'Night', sky: ['#1c2142', '#2b2f52', '#4a3a60'], ground: '#171a33', ritual: 'hygge', line: 'the dark is for warmth, candlelight and being indoors.' };
}

/** Lighten/darken a hex colour by an integer amount (ported from prototype). */
export function shade(hex: string, amt: number): string {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amt;
  let g = ((n >> 8) & 255) + amt;
  let b = (n & 255) + amt;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Pick the ritual to surface "right now": the phase's signature ritual if present,
 * otherwise any promptable ritual tagged for this time of day, otherwise the first.
 */
export function pickNowRitual(phase: Phase, rituals: Ritual[]): Ritual | undefined {
  if (rituals.length === 0) return undefined;
  return (
    rituals.find((r) => r.id === phase.ritual) ??
    rituals.find((r) => r.promptable && r.time_of_day === phase.key) ??
    rituals[0]
  );
}
