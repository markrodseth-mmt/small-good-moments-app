import type { Ritual } from '../types';
import RitualCard from './RitualCard';

interface Props {
  rituals: Ritual[];
  favourites: Set<string>;
  onOpen: (r: Ritual) => void;
  onToggleFavourite: (r: Ritual) => void;
  onShare: (r: Ritual) => void;
}

export default function RitualGrid({ rituals, favourites, onOpen, onToggleFavourite, onShare }: Props) {
  return (
    <div className="grid">
      {rituals.map((r, i) => (
        <RitualCard
          key={r.id}
          ritual={r}
          index={i}
          isFavourite={favourites.has(r.id)}
          onOpen={onOpen}
          onToggleFavourite={onToggleFavourite}
          onShare={onShare}
        />
      ))}
    </div>
  );
}
