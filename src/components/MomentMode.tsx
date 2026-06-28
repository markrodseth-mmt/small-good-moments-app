import { useEffect, useRef, useState } from 'react';
import type { Ritual } from '../types';
import type { Phase } from '../lib/timeOfDay';
import { Check } from './ui-icons';

interface Props {
  ritual: Ritual;
  phase: Phase;
  onClose: () => void;
  onDone: (r: Ritual) => void;
}

const CUES = ['breathe in', 'hold', 'breathe out', 'hold'];

function fmt(secs: number) {
  const s = Math.max(0, secs);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export default function MomentMode({ ritual, phase, onClose, onDone }: Props) {
  const total = (ritual.duration_minutes || 3) * 60;
  const [remaining, setRemaining] = useState(total);
  const [cue, setCue] = useState('settle in');
  const [running, setRunning] = useState(true);
  const doneRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    doneRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    let ci = 0;
    const id = setInterval(() => {
      setRemaining((prev) => {
        const next = prev - 1;
        if (next % 3 === 0 && next > 0) {
          setCue(CUES[ci % CUES.length]);
          ci++;
        }
        if (next <= 0) {
          clearInterval(id);
          setCue("whenever you're ready");
          setRunning(false);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
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
      className={`moment open${running ? ' running' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Moment mode"
      style={{ background }}
    >
      <p className="m-word serif">{ritual.name}</p>
      <p className="m-feel">{ritual.feeling}</p>
      <div className="ring">
        <div className="breath" />
        <div className="count">{fmt(remaining)}</div>
        <div className="cue">{cue}</div>
      </div>
      <div className="m-actions">
        <button className="btn btn-primary" ref={doneRef} onClick={() => onDone(ritual)}>
          <Check />
          I did it
        </button>
        <button className="btn btn-ghost" onClick={onClose}>
          Leave quietly
        </button>
      </div>
    </div>
  );
}
