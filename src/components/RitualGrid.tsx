import type { Ritual } from '../types';
import RitualCard from './RitualCard';

interface Props {
  rituals: Ritual[];
  onOpen: (r: Ritual) => void;
}

export default function RitualGrid({ rituals, onOpen }: Props) {
  return (
    <div className="grid">
      {rituals.map((r, i) => (
        <RitualCard key={r.id} ritual={r} index={i} onOpen={onOpen} />
      ))}
    </div>
  );
}
