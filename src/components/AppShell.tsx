import { useEffect, useRef, useState } from 'react';
import { Logo, StarSolid } from './ui-icons';

interface Props {
  gathered: number;
  streak: number;
}

export default function AppShell({ gathered, streak }: Props) {
  const [pop, setPop] = useState(false);
  const first = useRef(true);

  // Pop the badge whenever the count changes (but not on first render).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setPop(false);
    const id = requestAnimationFrame(() => setPop(true));
    const t = setTimeout(() => setPop(false), 300);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(t);
    };
  }, [gathered]);

  return (
    <header className="bar">
      <div className="bar-inner">
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="The Small Good Moments — home"
        >
          <span className="mark">
            <Logo />
          </span>
          <b>The Small Good Moments</b>
        </button>
        <div
          className={`gathered${pop ? ' pop' : ''}`}
          title="Moments you've gathered"
        >
          <StarSolid />
          <span className="gl">Gathered&nbsp;</span>
          <b>{gathered}</b>
          {streak > 1 && (
            <span className="streak">&nbsp;· {streak}-day streak</span>
          )}
        </div>
      </div>
    </header>
  );
}
