// Building blocks for sharing a ritual to WhatsApp, social, email, native share or the clipboard.
import type { Ritual } from '../types';

export interface ShareContent {
  title: string;
  text: string;
  url: string;
}

export type ChannelId = 'whatsapp' | 'x' | 'facebook' | 'telegram' | 'email';

export interface ShareChannel {
  id: ChannelId;
  label: string;
  href: string;
}

export function buildShareContent(r: Ritual): ShareContent {
  const url = `${window.location.origin}${window.location.pathname}#${r.id}`;
  const title = `${r.name} — a small good moment`;
  const text = `${r.name} (${r.language} · ${r.region}) — ${r.essence}`;
  return { title, text, url };
}

export function hasNativeShare(): boolean {
  return typeof navigator !== 'undefined' && typeof navigator.share === 'function';
}

/** Returns true if shared, false if cancelled or unsupported. */
export async function nativeShare(c: ShareContent): Promise<boolean> {
  if (!hasNativeShare()) return false;
  try {
    await navigator.share({ title: c.title, text: c.text, url: c.url });
    return true;
  } catch {
    // AbortError when the user dismisses the OS sheet — treat as a no-op.
    return false;
  }
}

export async function copyLink(c: ShareContent): Promise<boolean> {
  const payload = `${c.text}\n${c.url}`;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(payload);
      return true;
    }
  } catch {
    // Fall through to the legacy path below.
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = payload;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function channelLinks(c: ShareContent): ShareChannel[] {
  const text = encodeURIComponent(c.text);
  const url = encodeURIComponent(c.url);
  const textWithUrl = encodeURIComponent(`${c.text} ${c.url}`);
  const subject = encodeURIComponent(c.title);
  return [
    { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${textWithUrl}` },
    { id: 'x', label: 'X', href: `https://twitter.com/intent/tweet?text=${text}&url=${url}` },
    { id: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { id: 'telegram', label: 'Telegram', href: `https://t.me/share/url?url=${url}&text=${text}` },
    { id: 'email', label: 'Email', href: `mailto:?subject=${subject}&body=${textWithUrl}` },
  ];
}
