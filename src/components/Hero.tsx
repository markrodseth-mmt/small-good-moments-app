import { useMemo } from 'react';
import type { Phase } from '../lib/timeOfDay';
import { shade } from '../lib/timeOfDay';
import type { Ritual } from '../types';
import { Icon, innerForRitual } from '../lib/icons';
import { ArrowRight } from './ui-icons';

interface Props {
  phase: Phase;
  nowRitual?: Ritual;
  onTry: (r: Ritual) => void;
}

function Sky({ phase }: { phase: Phase }) {
  const isNight = phase.key === 'night';

  // Stars: generated once, twinkle via CSS when .night.
  const stars = useMemo(
    () =>
      Array.from({ length: 46 }, () => ({
        x: Math.round(Math.random() * 1000),
        y: Math.round(Math.random() * 150),
        r: +(Math.random() * 1.3 + 0.4).toFixed(1),
        d: +(Math.random() * 4).toFixed(1),
      })),
    [],
  );

  // Celestial body position across the visible arc, by current time.
  const { cx, cy } = useMemo(() => {
    const now = new Date();
    const h = now.getHours() + now.getMinutes() / 60;
    let t = isNight ? (h >= 21 ? h - 21 : h + 3) / 9 : (h - 6) / 12;
    t = Math.max(0.04, Math.min(0.96, t));
    return { cx: 60 + t * 880, cy: 270 - Math.sin(t * Math.PI) * 210 };
  }, [isNight]);

  const background = `linear-gradient(to bottom, ${phase.sky[0]} 0%, ${phase.sky[1]} 48%, ${phase.sky[2]} 100%)`;

  return (
    <div className={`sky${isNight ? ' night' : ''}`} style={{ background }}>
      <svg className="scene" viewBox="0 0 1000 330" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <g className="stars">
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" style={{ animationDelay: `${s.d}s` }} />
          ))}
        </g>
        <path d="M0 330 V250 Q250 196 500 232 T1000 244 V330Z" fill={shade(phase.ground, 18)} opacity={isNight ? 0.9 : 0.55} />
        <path d="M0 330 V288 Q200 250 460 282 Q720 312 1000 274 V330Z" fill={phase.ground} opacity={1} />
        <g className="celestial">
          {isNight ? (
            <>
              <circle cx={cx} cy={cy} r={26} fill="#f4ead2" />
              <circle cx={cx + 9} cy={cy - 7} r={26} fill={phase.sky[1]} />
            </>
          ) : (
            <>
              <circle cx={cx} cy={cy} r={60} fill="#fff4d6" opacity={0.35} />
              <circle cx={cx} cy={cy} r={34} fill="#ffe9a8" />
              <circle cx={cx} cy={cy} r={34} fill="none" stroke="#fff" strokeOpacity={0.5} strokeWidth={2} />
            </>
          )}
        </g>
      </svg>
      <div className="hero-copy">
        <span className="label">A field guide to the world's gentle rituals</span>
        <h1 className="serif">
          Every culture keeps a word for <em>feeling well</em>. Borrow one today.
        </h1>
      </div>
    </div>
  );
}

export default function Hero({ phase, nowRitual, onTry }: Props) {
  return (
    <div className="wrap hero">
      <Sky phase={phase} />

      <div className="now" role="region" aria-label="The moment for right now">
        <div className="now-icon">
          {nowRitual && <Icon inner={innerForRitual(nowRitual.id, nowRitual.cluster)} />}
        </div>
        <div className="now-text">
          <span className="label">{phase.name} · the world right now</span>
          <h2 className="serif">{nowRitual ? nowRitual.name : '—'}</h2>
          <p>
            {phase.line}
            {nowRitual && (
              <span className="ph">
                {' '}
                — {nowRitual.name}, {nowRitual.pronunciation}
              </span>
            )}
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => nowRitual && onTry(nowRitual)}
          disabled={!nowRitual}
        >
          <ArrowRight />
          Try this now
        </button>
      </div>
    </div>
  );
}
