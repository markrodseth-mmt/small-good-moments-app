import { useEffect, useRef, useState } from 'react';
import type { Ritual } from '../types';
import { CLUSTERS, Icon, innerForRitual } from '../lib/icons';

interface Props {
  ritual: Ritual;
  index: number;
  onOpen: (r: Ritual) => void;
}

export default function RitualCard({ ritual, index, onOpen }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      className={`card${shown ? ' in' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 45}ms` }}
      onClick={() => onOpen(ritual)}
    >
      <span className="tag">{CLUSTERS[ritual.cluster].label}</span>
      <span className="ic">
        <Icon inner={innerForRitual(ritual.id, ritual.cluster)} />
      </span>
      <span className="origin">{ritual.region}</span>
      <h3 className="serif">{ritual.name}</h3>
      <p className="ess">{ritual.essence}</p>
    </button>
  );
}
