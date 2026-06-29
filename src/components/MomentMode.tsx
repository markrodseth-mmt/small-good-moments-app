import { useEffect, useRef, useState } from 'react';
import type { Ritual } from '../types';
import type { Phase } from '../lib/timeOfDay';
import { Check } from './ui-icons';

interface Props {
  ritual: Ritual;
  phase: Phase;
  onClose: () => void;
  onDone: (r: Ritual, note: string) => void;
}

// One full breath of the circle is 11s (see .breath keyframe): expand to ~5s,
// a brief hold, then contract. We sync the cue text to that rhythm.
const BREATH_MS = 11000;

export default function MomentMode({ ritual, phase, onClose, onDone }: Props) {
  const [cue, setCue] = useState('settle in');
  const [note, setNote] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Gently alternate the breathing cue in time with the circle — no countdown.
  useEffect(() => {
    const settle = setTimeout(() => setCue('breathe in'), 1600);
    const half = setTimeout(() => setCue('breathe out'), 1600 + BREATH_MS / 2);
    const id = setInterval(() => {
      setCue('breathe in');
      setTimeout(() => setCue('breathe out'), BREATH_MS / 2);
    }, BREATH_MS);
    return () => {
      clearTimeout(settle);
      clearTimeout(half);
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const background = `linear-gradient(160deg, ${phase.sky[0]}, ${phase.sky[2]})`;

  return (
    <div
      className="moment open running"
      role="dialog"
      aria-modal="true"
      aria-label="Moment mode"
      style={{ background }}
    >
      <button className="m-leave" ref={closeRef} onClick={onClose}>
        Leave quietly
      </button>

      <p className="m-word serif">{ritual.name}</p>
      <p className="m-feel">{ritual.feeling}</p>

      <div className="ring">
        <div className="breath" />
        <div className="cue">{cue}</div>
      </div>

      <div className="m-journal">
        <label htmlFor="momentNote">Anything you'd like to keep from this moment?</label>
        <textarea
          id="momentNote"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="A thought, a feeling, what you noticed… (optional)"
          rows={3}
        />
      </div>

      <div className="m-actions">
        <button className="btn btn-primary" onClick={() => onDone(ritual, note)}>
          <Check />
          I did it
        </button>
      </div>
    </div>
  );
}
