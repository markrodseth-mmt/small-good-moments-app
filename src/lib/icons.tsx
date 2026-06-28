import type { ClusterId } from '../types';

// Inner SVG strings ported verbatim from the prototype. Rendered inside a
// 0 0 40 40 viewBox. Content is static and trusted (authored here).
const H = 'fill="var(--honey)" stroke="var(--honey)" stroke-width="1.2"';

const INNER: Record<string, string> = {
  niksen: '<rect x="8" y="9" width="24" height="22" rx="2"/><path d="M20 9v22M8 20h24"/><path d="M24 13c2.2 0 3.2 1.6 1.6 2.8 1.8.3 1.6 2.4-.3 2.4h-3.2" ' + H + '/>',
  dolcefarniente: '<circle cx="13" cy="12" r="4" ' + H + '/><path d="M7 12h-2M13 5V3M18 9l1.4-1.4M8 9 6.6 7.6"/><path d="M6 28c4-3 8-3 12 0M6 28h22M27 22v6"/><path d="M27 22c3 0 5 2 5 5h-5"/>',
  fjaka: '<path d="M10 26c0-5 4-8 9-8 4 0 6 2 6 5 0 2-2 3-4 3-1.5 0-2.5-1-2.5-2 0-.8.6-1.4 1.4-1.4"/><circle cx="27" cy="14" r="2.4"/><path d="M27 11.6V9M30 14h2.4M24.5 14H22.5"/><path d="M6 28h28"/>',
  keyif: '<path d="M14 12h12l-1.5 12a3 3 0 0 1-3 2.6h-3a3 3 0 0 1-3-2.6z"/><path d="M20 9c-1 1.4 0 2.4 0 3.6" ' + H + '/><path d="M11 30h18"/>',
  kalsarikannit: '<path d="M6 22v-3a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v3M6 22h22v6H8v-3a3 3 0 0 0-2-3z"/><circle cx="30" cy="14" r="3" ' + H + '/><path d="M30 11V9"/>',
  hygge: '<rect x="14" y="16" width="12" height="16" rx="2"/><path d="M20 16v-3"/><path d="M20 6c2 2.5 3 4 3 5.6A3 3 0 0 1 17 11.6C17 10 18 8.5 20 6z" ' + H + '/>',
  yutori: '<path d="M11 8c-3 0-4 2-4 4M11 32c-3 0-4-2-4-4M29 8c3 0 4 2 4 4M29 32c3 0 4-2 4-4"/><circle cx="20" cy="20" r="2.4" ' + H + '/>',
  meriggiare: '<circle cx="14" cy="13" r="3.4" ' + H + '/><path d="M14 6.5V4M9 13H6.5M9.8 8.8 8 7M20 11l-1.6-1.6"/><path d="M26 13c-4 0-7 3-7 7v8M26 13c4 0 7 3 7 7h-7"/><path d="M14 28h22"/>',
  friluftsliv: '<path d="M5 30 14 16l5 7 4-6 12 13z"/><path d="M14 16l3.5 5M28 24l-5-7"/><circle cx="29" cy="11" r="3" ' + H + '/>',
  shinrinyoku: '<path d="M12 30v-9M12 21c-3 0-4-2-4-4 0-3 4-9 4-9s4 6 4 9c0 2-1 4-4 4z"/><path d="M27 30v-7M27 23c-2.5 0-3.5-1.6-3.5-3.4 0-2.6 3.5-7.6 3.5-7.6s3.5 5 3.5 7.6c0 1.8-1 3.4-3.5 3.4z"/><path d="M7 30h26"/>',
  gokotta: '<path d="M9 22c0-5 4-8 8-8 3 0 5 2 5 4.5 0 1.5-1 2.5-2.4 2.5M9 22c0 3 2.5 5 6 5 4 0 7-3 7-7"/><path d="M22 18.5 30 15M30 15l-2.5 3.5M30 15l-3.4-1.5"/><circle cx="13" cy="19" r="1" fill="currentColor"/><path d="M28 24l1.5-1.5M31 26l1.5-1.5" ' + H + '/>',
  uitwaaien: '<path d="M6 14h14a3 3 0 1 0-3-3M6 20h20a3 3 0 1 1-3 3M6 26h11a2.5 2.5 0 1 1-2.5 2.5"/><path d="M30 12c2 1 3 3 3 5" ' + H + '/>',
  utepils: '<path d="M13 12h10v17a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path d="M23 16h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3"/><path d="M13 18h10" ' + H + '/><circle cx="29" cy="9" r="2.4" ' + H + '/><path d="M29 6.6V5"/>',
  waldeinsamkeit: '<path d="M20 32V20M20 20c-4 0-6-2.5-6-5.5C14 10 20 4 20 4s6 6 6 10.5c0 3-2 5.5-6 5.5z"/><path d="M20 26c-3 0-4.5-1.8-4.5-3.8M20 26c3 0 4.5-1.8 4.5-3.8"/><path d="M11 32h18"/>',
  komorebi: '<circle cx="20" cy="14" r="5" ' + H + '/><path d="M20 5V2M20 26v-3M29 14h3M8 14H5M26.4 7.6 28.5 5.5M11.6 7.6 9.5 5.5"/><path d="M11 28l2-3M20 30v-3M29 28l-2-3" stroke-dasharray="0.5 4"/>',
  mangata: '<path d="M27 9a8 8 0 1 0 4 12 7 7 0 0 1-4-12z" ' + H + '/><path d="M6 26h28M9 30h22M13 22h8" opacity=".9"/>',
  fika: '<path d="M9 17h17v8a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4z"/><path d="M26 19h3a2.5 2.5 0 0 1 0 5h-3"/><path d="M14 10c-1 1.4 0 2.6 0 4M20 9c-1 1.4 0 2.6 0 4" ' + H + '/>',
  sobremesa: '<path d="M8 16h7v5a3.5 3.5 0 0 1-7 0z"/><path d="M22 16h8v5a4 4 0 0 1-8 0z"/><path d="M11 12c-.6 1 0 1.8 0 2.6M26 11c-.6 1 0 1.8 0 2.6" ' + H + '/><path d="M5 30h30"/>',
  aperitivo: '<path d="M10 11h18l-9 10z"/><path d="M19 21v9M13 30h12"/><circle cx="25" cy="14" r="2.4" ' + H + '/><path d="M25 11.6V10"/>',
  merienda: '<path d="M8 18h14v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4z"/><path d="M22 20h3a2 2 0 0 1 0 4h-3"/><path d="M27 13c3 1 4 3.5 1 5-3 1.5-1 3.5 1 3" ' + H + '/>',
  gongfucha: '<path d="M9 18c0-2 2-3 5-3h6c3 0 5 1 5 3 0 5-3 9-8 9s-8-4-8-9z"/><path d="M25 18h4a2.5 2.5 0 0 1 0 5"/><path d="M9 18l-1.5-2M22 15l1.5-2"/><path d="M15 11c-.6 1 0 1.8 0 2.6" ' + H + '/>',
  harahachibu: '<path d="M7 18h26c0 7-6 12-13 12S7 25 7 18z"/><path d="M9.5 23h21" ' + H + '/><path d="M5 18h30"/>',
  gezelligheid: '<path d="M9 15h9v9a4.5 4.5 0 0 1-9 0z"/><path d="M22 15h9v9a4.5 4.5 0 0 1-9 0z"/><path d="M13 10c-.6 1 0 2 0 2.6M27 10c-.6 1 0 2 0 2.6" ' + H + '/><path d="M18 24l4-4M22 24l-4-4" opacity=".5"/>',
  craic: '<path d="M6 10h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7l-4 4v-4H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"/><path d="M25 15h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v3l-3-3h-3"/><circle cx="11" cy="15" r="1" ' + H + '/><circle cx="15" cy="15" r="1" ' + H + '/>',
  passeggiata: '<circle cx="13" cy="8" r="2.6"/><path d="M13 11v8M13 14l-4 3M13 14l4 2M9 28l4-9M17 28l-4-9"/><circle cx="28" cy="9" r="2.2" ' + H + '/><path d="M28 11.5v6l-3 2.5M28 17l3 2M25 28l3-8.5M31 28l-3-8" opacity=".85"/>',
  renao: '<path d="M13 7v3M13 10c-3 0-5 2-5 5v4h10v-4c0-3-2-5-5-5z" ' + H + '/><path d="M8 19l-1 4h12l-1-4M13 23v4"/><path d="M27 7v3M27 10c-2.5 0-4 1.6-4 4v3h8v-3c0-2.4-1.5-4-4-4z"/><path d="M23 17l-1 3.5h10L31 17M27 20.5V24"/>',
  hooponopono: '<path d="M20 30s-9-6-9-13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 13-9 13z" ' + H + '/><path d="M14 17l6 4 6-4" stroke="var(--paper-card)"/>',
  cwtch: '<path d="M6 14c0-2 3-3 5-1l9 8 9-8c2-2 5-1 5 1 0 3-3 5-3 8v6H9v-6c0-3-3-5-3-8z"/><path d="M20 21l-4-3.6M20 21l4-3.6"/><path d="M20 14a3 3 0 0 1 0-2" ' + H + '/>',
  parea: '<circle cx="20" cy="11" r="3.2"/><circle cx="11" cy="24" r="3.2"/><circle cx="29" cy="24" r="3.2"/><path d="M20 14.5 11 21M20 14.5 29 21M14 24h12" opacity=".7"/><circle cx="20" cy="20" r="1" ' + H + '/>',
  ikigai: '<path d="M20 31c0-7 0-10-4-13M20 31c0-7 0-10 4-13M20 31V14"/><circle cx="20" cy="10" r="4" ' + H + '/><path d="M20 6V3"/>',
  lagom: '<path d="M20 6v22M9 28h22"/><path d="M20 9 8 14M20 9l12 5"/><path d="M8 14c0 2.4 2 4 4 4s4-1.6 4-4M24 14c0 2.4 2 4 4 4s4-1.6 4-4"/>',
  wabisabi: '<path d="M30 20a10 10 0 1 1-7-9.5" ' + H + '/><path d="M27 9c1.5.6 2.6 1.8 3.2 3.4"/>',
  sisu: '<path d="M20 32V18M20 18c-2.6 0-3.8-2-3.8-3.8 0-3 3.8-8 3.8-8s3.8 5 3.8 8c0 1.8-1.2 3.8-3.8 3.8z" ' + H + '/><path d="M20 26l-5 4M20 26l5 4M20 22l-4 3M20 22l4 3"/>',
  ubuntu: '<circle cx="20" cy="9" r="2.6"/><circle cx="9" cy="18" r="2.6"/><circle cx="31" cy="18" r="2.6"/><circle cx="14" cy="29" r="2.6"/><circle cx="26" cy="29" r="2.6"/><path d="M20 11.5 11 16M20 11.5 29 16M11 20l3 7M29 20l-3 7M16 29h8" opacity=".7"/>',
  saudade: '<path d="M6 26h28M9 30h22"/><path d="M14 24l4-12 9 12z"/><path d="M18 12v12" ' + H + '/>',
  kaizen: '<path d="M6 30h6v-6h6v-6h6v-6h6"/><circle cx="9" cy="27" r="1.4" fill="currentColor"/><circle cx="15" cy="21" r="1.4" fill="currentColor"/><circle cx="21" cy="15" r="1.4" fill="currentColor"/><circle cx="27" cy="9" r="2.4" ' + H + '/>',
  mononoaware: '<path d="M14 6c5 1 8 5 8 10M14 6c-1 5 1 9 5 11"/><path d="M24 20c-1 2-1 4 0 6-2-1-3.4-3-3.4-5M28 26c-3 1-6-.4-7.4-3" ' + H + '/>',
};

export interface ClusterMeta {
  label: string;
  sub: string;
  icon: string; // INNER key
}

export const CLUSTERS: Record<ClusterId, ClusterMeta> = {
  pause: { label: 'Pause', sub: 'rest & doing nothing', icon: 'fjaka' },
  outside: { label: 'Outside', sub: 'air, light & nature', icon: 'friluftsliv' },
  savour: { label: 'Savour', sub: 'food, drink & the table', icon: 'fika' },
  gather: { label: 'Gather', sub: 'people & warmth', icon: 'gezelligheid' },
  reflect: { label: 'Reflect', sub: 'meaning & quiet', icon: 'wabisabi' },
};

const norm = (id: string) => id.toLowerCase().replace(/[^a-z0-9]/g, '');

/** Inner SVG markup for a ritual id, falling back to its cluster's icon. */
export function innerForRitual(id: string, cluster: ClusterId): string {
  return INNER[norm(id)] ?? INNER[CLUSTERS[cluster].icon];
}

export function innerForCluster(cluster: ClusterId): string {
  return INNER[CLUSTERS[cluster].icon];
}

/** Render trusted inner SVG markup inside a 0 0 40 40 icon. */
export function Icon({ inner, className }: { inner: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
