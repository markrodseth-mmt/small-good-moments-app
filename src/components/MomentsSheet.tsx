import { useEffect, useMemo, useRef } from 'react';
import type { GatheredMoment, Ritual } from '../types';
import { Icon, innerForRitual } from '../lib/icons';
import { Close } from './ui-icons';

interface Props {
  moments: GatheredMoment[];
  rituals: Ritual[];
  onClose: () => void;
}

function whenLabel(iso: string): string {
  const then = new Date(iso);
  const now = new Date();
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const days = Math.round((startOfDay(now) - startOfDay(then)) / 86400000);
  const time = then.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  if (days === 0) return `Today · ${time}`;
  if (days === 1) return `Yesterday · ${time}`;
  if (days < 7) return `${days} days ago · ${time}`;
  return then.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
}

export default function MomentsSheet({ moments, rituals, onClose }: Props) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  const byId = useMemo(() => {
    const m = new Map<string, Ritual>();
    for (const r of rituals) m.set(r.id, r);
    return m;
  }, [rituals]);

  useEffect(() => {
    restoreTo.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      restoreTo.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="scrim"
      role="dialog"
      aria-modal="true"
      aria-labelledby="momentsTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="sheet" ref={sheetRef}>
        <div className="sheet-top">
          <button className="close" ref={closeRef} onClick={onClose} aria-label="Close">
            <Close />
          </button>
          <div className="origin">Your moments</div>
          <h2 className="serif" id="momentsTitle">
            What you've gathered
          </h2>
        </div>

        <div className="sheet-body">
          {moments.length === 0 ? (
            <p className="lead">
              Nothing gathered yet. When you finish a moment, it — and anything you write — will rest
              here.
            </p>
          ) : (
            <ul className="moments-list">
              {moments.map((m) => {
                const r = byId.get(m.ritual_id);
                return (
                  <li key={m.id} className="moment-entry">
                    <div className="me-ic">
                      <Icon inner={innerForRitual(m.ritual_id, r?.cluster ?? 'pause')} />
                    </div>
                    <div className="me-body">
                      <div className="me-head">
                        <span className="me-name serif">{r?.name ?? m.ritual_id}</span>
                        <span className="me-when">{whenLabel(m.gathered_at)}</span>
                      </div>
                      {m.note && <p className="me-note">{m.note}</p>}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
