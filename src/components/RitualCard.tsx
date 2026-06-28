import { useEffect, useRef, useState } from 'react';
import type { Ritual } from '../types';
import { CLUSTERS, Icon, innerForRitual } from '../lib/icons';
import { Heart, HeartSolid, Share } from './ui-icons';

interface Props {
  ritual: Ritual;
  index: number;
  isFavourite: boolean;
  onOpen: (r: Ritual) => void;
  onToggleFavourite: (r: Ritual) => void;
  onShare: (r: Ritual) => void;
}

export default function RitualCard({
  ritual,
  index,
  isFavourite,
  onOpen,
  onToggleFavourite,
  onShare,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`card-wrap${shown ? ' in' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 45}ms` }}
    >
      <button className="card" onClick={() => onOpen(ritual)}>
        <span className="tag">{CLUSTERS[ritual.cluster].label}</span>
        <span className="ic">
          <Icon inner={innerForRitual(ritual.id, ritual.cluster)} />
        </span>
        <span className="origin">{ritual.region}</span>
        <h3 className="serif">{ritual.name}</h3>
        <p className="ess">{ritual.essence}</p>
      </button>
      <button
        className="share-btn"
        aria-label={`Share ${ritual.name}`}
        onClick={() => onShare(ritual)}
      >
        <Share />
      </button>
      <button
        className={`fav${isFavourite ? ' on' : ''}`}
        aria-pressed={isFavourite}
        aria-label={isFavourite ? `Remove ${ritual.name} from favourites` : `Add ${ritual.name} to favourites`}
        onClick={() => onToggleFavourite(ritual)}
      >
        {isFavourite ? <HeartSolid /> : <Heart />}
      </button>
    </div>
  );
}
