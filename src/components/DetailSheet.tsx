import { useEffect, useRef } from 'react';
import type { Ritual } from '../types';
import { Icon, innerForRitual } from '../lib/icons';
import { Check, Chevron, Clock, Close, Heart, HeartSolid, Play, Share, Speaker } from './ui-icons';

interface Props {
  ritual: Ritual;
  isFavourite: boolean;
  onToggleFavourite: (r: Ritual) => void;
  onClose: () => void;
  onBegin: (r: Ritual) => void;
  onGather: (r: Ritual) => void;
  onShare: (r: Ritual) => void;
}

const NOTE_PREFIX =
  'A word borrowed with care. Cultural meanings run deeper than any single description can hold.';

export default function DetailSheet({
  ritual,
  isFavourite,
  onToggleFavourite,
  onClose,
  onBegin,
  onGather,
  onShare,
}: Props) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    restoreTo.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      restoreTo.current?.focus?.();
    };
  }, []);

  // Escape to close + simple focus trap.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !sheetRef.current) return;
      const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  function speak() {
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(ritual.name);
    u.rate = 0.82;
    u.pitch = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  return (
    <div
      className="scrim"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheetName"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sheet" ref={sheetRef}>
        <div className="sheet-top">
          <button className="close" ref={closeRef} onClick={onClose} aria-label="Close">
            <Close />
          </button>
          <div className="ic">
            <Icon inner={innerForRitual(ritual.id, ritual.cluster)} />
          </div>
          <div className="origin">
            {ritual.language} · {ritual.region}
          </div>
          <h2 className="serif" id="sheetName">
            {ritual.name}
          </h2>
          <span className="pron">
            <span>/ {ritual.pronunciation} /</span>
            <button onClick={speak} aria-label="Hear it spoken">
              <Speaker />
            </button>
          </span>
        </div>

        <div className="sheet-body">
          <p className="lead">{ritual.meaning}</p>

          <div className="row">
            <div className="rl">
              <Chevron />
            </div>
            <div className="rc">
              <h5>How to do it</h5>
              <ol>
                {ritual.how_to.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="rl">
              <Clock />
            </div>
            <div className="rc">
              <h5>When it happens</h5>
              <p>{ritual.when_context}</p>
            </div>
          </div>

          <div className="feeling">
            <h5>What it leaves you with</h5>
            <p>{ritual.feeling}</p>
          </div>

          {ritual.caution && (
            <div className="caution">
              <h5>Hold this gently</h5>
              <p>{ritual.caution}</p>
            </div>
          )}

          <p className="note">
            {ritual.cultural_note ? `${ritual.cultural_note} ` : ''}
            {NOTE_PREFIX}
          </p>

          <div className="sheet-cta">
            {ritual.duration_minutes > 0 && (
              <button className="btn btn-primary" onClick={() => onBegin(ritual)}>
                <Play />
                Begin this moment
              </button>
            )}
            <button className="btn btn-ghost" onClick={() => onGather(ritual)}>
              <Check />
              I did this — gather it
            </button>
            <button
              className={`btn btn-ghost btn-fav${isFavourite ? ' on' : ''}`}
              aria-pressed={isFavourite}
              onClick={() => onToggleFavourite(ritual)}
            >
              {isFavourite ? <HeartSolid /> : <Heart />}
              {isFavourite ? 'Saved to favourites' : 'Save to favourites'}
            </button>
            <button className="btn btn-ghost" onClick={() => onShare(ritual)}>
              <Share />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
