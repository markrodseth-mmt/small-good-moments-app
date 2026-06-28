import { CLUSTERS, Icon, innerForCluster } from '../lib/icons';
import type { ClusterId } from '../types';
import { Globe } from './ui-icons';

export type Filter = ClusterId | 'all';

interface Props {
  active: Filter;
  total: number;
  onChange: (f: Filter) => void;
}

const CLUSTER_IDS: ClusterId[] = ['pause', 'outside', 'savour', 'gather', 'reflect'];

export default function ClusterChips({ active, total, onChange }: Props) {
  return (
    <div className="chips" role="group" aria-label="Filter rituals by feeling">
      <button
        className={`chip${active === 'all' ? ' active' : ''}`}
        aria-pressed={active === 'all'}
        onClick={() => onChange('all')}
      >
        <Globe />
        All moments <small>{total}</small>
      </button>
      {CLUSTER_IDS.map((id) => (
        <button
          key={id}
          className={`chip${active === id ? ' active' : ''}`}
          aria-pressed={active === id}
          onClick={() => onChange(id)}
        >
          <Icon inner={innerForCluster(id)} />
          {CLUSTERS[id].label} <small>{CLUSTERS[id].sub}</small>
        </button>
      ))}
    </div>
  );
}
