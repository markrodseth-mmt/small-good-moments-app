import { useEffect, useRef } from 'react';
import type { ComponentType, SVGProps } from 'react';
import type { Ritual } from '../types';
import type { ChannelId } from '../lib/share';
import { buildShareContent, channelLinks, copyLink, hasNativeShare, nativeShare } from '../lib/share';
import { Close, Facebook, Link, Mail, Share, Telegram, WhatsApp, XLogo } from './ui-icons';

const CHANNEL_ICONS: Record<ChannelId, ComponentType<SVGProps<SVGSVGElement>>> = {
  whatsapp: WhatsApp,
  x: XLogo,
  facebook: Facebook,
  telegram: Telegram,
  email: Mail,
};

interface Props {
  ritual: Ritual;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export default function ShareSheet({ ritual, onClose, onToast }: Props) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const content = buildShareContent(ritual);
  const channels = channelLinks(content);

  async function handleNative() {
    const ok = await nativeShare(content);
    if (ok) onClose();
  }

  async function handleCopy() {
    const ok = await copyLink(content);
    onToast(ok ? 'Link copied — share it anywhere' : 'Could not copy the link — please try again.');
    if (ok) onClose();
  }

  return (
    <div
      className="scrim"
      role="dialog"
      aria-modal="true"
      aria-labelledby="shareTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sheet share-sheet" ref={sheetRef}>
        <button className="close" ref={closeRef} onClick={onClose} aria-label="Close">
          <Close />
        </button>
        <div className="share-head">
          <h3 className="serif" id="shareTitle">
            Share {ritual.name}
          </h3>
          <p>Pass this small good moment to someone.</p>
        </div>

        <div className="share-grid">
          {hasNativeShare() && (
            <button className="share-tile native" onClick={handleNative}>
              <span className="st-ic">
                <Share />
              </span>
              <span>More…</span>
            </button>
          )}

          {channels.map((ch) => {
            const ChannelIcon = CHANNEL_ICONS[ch.id];
            return (
              <a
                key={ch.id}
                className={`share-tile ${ch.id}`}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <span className="st-ic">
                  <ChannelIcon />
                </span>
                <span>{ch.label}</span>
              </a>
            );
          })}

          <button className="share-tile copy" onClick={handleCopy}>
            <span className="st-ic">
              <Link />
            </span>
            <span>Copy link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
