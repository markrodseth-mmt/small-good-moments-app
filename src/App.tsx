import { useEffect, useMemo, useRef, useState } from 'react';
import type { Ritual } from './types';
import type { Filter } from './components/ClusterChips';
import { ensureSession } from './lib/supabase';
import { fetchRituals } from './lib/rituals';
import { fetchGathered, gatherMoment, computeStreak } from './lib/moments';
import { phaseFor, pickNowRitual } from './lib/timeOfDay';
import type { GatheredMoment } from './types';
import AppShell from './components/AppShell';
import Hero from './components/Hero';
import ClusterChips from './components/ClusterChips';
import RitualGrid from './components/RitualGrid';
import DetailSheet from './components/DetailSheet';
import MomentMode from './components/MomentMode';
import Toast from './components/Toast';
import { Shuffle } from './components/ui-icons';

export default function App() {
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [gathered, setGathered] = useState<GatheredMoment[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Ritual | null>(null);
  const [moment, setMoment] = useState<Ritual | null>(null);

  const [toast, setToast] = useState({ msg: '', show: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const phase = useMemo(() => phaseFor(new Date().getHours()), []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        await ensureSession();
        const [rs, gs] = await Promise.all([fetchRituals(), fetchGathered()]);
        if (!alive) return;
        setRituals(rs);
        setGathered(gs);
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : 'Something went wrong loading the rituals.');
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  function showToast(msg: string) {
    setToast({ msg, show: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2400);
  }

  async function gather(r: Ritual) {
    try {
      const m = await gatherMoment(r.id);
      setGathered((prev) => [m, ...prev]);
      showToast(`${r.name} — gathered`);
    } catch {
      showToast('Could not save that moment — please try again.');
    }
  }

  const nowRitual = useMemo(() => pickNowRitual(phase, rituals), [phase, rituals]);
  const visible = useMemo(
    () => (filter === 'all' ? rituals : rituals.filter((r) => r.cluster === filter)),
    [filter, rituals],
  );
  const streak = useMemo(() => computeStreak(gathered), [gathered]);

  function openDetail(r: Ritual) {
    setSelected(r);
  }
  function beginMoment(r: Ritual) {
    setSelected(null);
    setTimeout(() => setMoment(r), 120);
  }

  return (
    <>
      <AppShell gathered={gathered.length} streak={streak} />

      <main>
        <Hero phase={phase} nowRitual={nowRitual} onTry={openDetail} />

        <div className="wrap">
          <section id="explore">
            <div className="sec-head">
              <div>
                <span className="label">Find a moment</span>
                <h2 className="serif">What do you need to feel?</h2>
              </div>
              <p>
                Each ritual below is a real, repeatable thing you can actually do. Pick a feeling, or
                let the day choose for you.
              </p>
            </div>

            <ClusterChips active={filter} total={rituals.length} onChange={setFilter} />

            <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="btn btn-ghost"
                disabled={rituals.length === 0}
                onClick={() => openDetail(rituals[Math.floor(Math.random() * rituals.length)])}
              >
                <Shuffle />
                Surprise me with a moment
              </button>
            </div>

            {loading && <div className="state">Gathering the world's gentle rituals…</div>}
            {error && <div className="state err">{error}</div>}
            {!loading && !error && <RitualGrid rituals={visible} onOpen={openDetail} />}
          </section>
        </div>

        <footer>
          <div className="wrap">
            <div>
              <h4 className="serif">The idea is small on purpose.</h4>
              <p>
                Across the world, people have words for the good little parts of being alive that
                English never quite named: lingering at the table after a meal, sitting in the forest,
                the first beer outdoors after a long winter, doing nothing at all and meaning it.
              </p>
              <p>
                This guide gathers a handful of them. The point isn't to learn the vocabulary. It's to
                do the thing.
              </p>
            </div>
            <div>
              <h4 className="serif">A note of respect</h4>
              <p className="mini">
                Several of these words come from living cultures and traditions, some sacred. They're
                shared here with care and curiosity, not as decoration. Treat them, and the people they
                belong to, gently.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {selected && (
        <DetailSheet
          ritual={selected}
          onClose={() => setSelected(null)}
          onBegin={beginMoment}
          onGather={(r) => {
            gather(r);
            setSelected(null);
          }}
        />
      )}

      {moment && (
        <MomentMode
          ritual={moment}
          phase={phase}
          onClose={() => setMoment(null)}
          onDone={(r) => {
            setMoment(null);
            gather(r);
          }}
        />
      )}

      <Toast message={toast.msg} show={toast.show} />
    </>
  );
}
