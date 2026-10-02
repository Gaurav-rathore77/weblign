'use client';

import { useState, useMemo, type ElementType } from 'react';
import * as HeroOutline from 'react-icons/hi2';

/**
 * All Heroicons v2 outline exports available from react-icons.
 * Typing a wrong name previously rendered nothing at all, so the admin now
 * picks from a searchable list with a live preview instead of guessing.
 */
const NAMES = Object.keys(HeroOutline).filter((name) =>
  name.startsWith('HiOutline'),
) as Array<keyof typeof HeroOutline>;

const ICONS = HeroOutline as unknown as Record<string, ElementType>;

/** Grouped so the long list is browsable instead of a flat wall of 324 items. */
const GROUPS: Array<{ label: string; match: (name: string) => boolean }> = [
  { label: 'Popular', match: (n) => POPULAR.includes(n) },
  { label: 'Tech', match: (n) => /Chip|Computer|Cpu|Code|Command|Device|Cube|Cloud|Server|Spark|Bolt|Puzzle|Key|Lock|Finger/.test(n) },
  { label: 'Business', match: (n) => /Chart|Briefcase|Banknote|Currency|CreditCard|Receipt|Briefcase|Scale|Building|Bag|Shopping|ChartBar|Presentation/.test(n) },
  { label: 'Growth & success', match: (n) => /ArrowTrendingUp|BarsArrowUp|Trophy|Star|Heart|HandThumbUp|Sparkles|Fire|Rocket|Flag/.test(n) },
  { label: 'Education', match: (n) => /AcademicCap|Book|LightBulb|Pencil|PaintBrush|CalendarDays|Clipboard/.test(n) },
  { label: 'Communication', match: (n) => /Chat|Envelope|Phone|Megaphone|Bell|PaperAirplane|Link/.test(n) },
  { label: 'People', match: (n) => /User|Users|Identification|HandRaised|FaceSmile/.test(n) },
  { label: 'Time', match: (n) => /Clock|Calendar/.test(n) },
  { label: 'Files & folders', match: (n) => /Document|Folder|Archive|Photo|VideoCamera|Film|PaperClip/.test(n) },
  { label: 'Layout', match: (n) => /Square|Squares|Rectangle|View|Table|List|Bars3|Bars4/.test(n) },
  { label: 'Symbols', match: (n) => /Check|Exclamation|QuestionMark|Information|NoSymbol|Plus|Minus|Hashtag/.test(n) },
];

const POPULAR = [
  'HiOutlineBolt',
  'HiOutlineRocketLaunch',
  'HiOutlineLightBulb',
  'HiOutlineChartBar',
  'HiOutlineGlobeAlt',
  'HiOutlineCpuChip',
  'HiOutlinePaintBrush',
  'HiOutlineCodeBracket',
  'HiOutlineShoppingCart',
  'HiOutlineAcademicCap',
  'HiOutlineBriefcase',
  'HiOutlineHeart',
  'HiOutlineStar',
  'HiOutlineShieldCheck',
  'HiOutlineArrowTrendingUp',
  'HiOutlineSparkles',
];

interface IconPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function IconPicker({
  label,
  value,
  onChange,
  required,
}: IconPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return NAMES;
    return NAMES.filter((name) => name.toLowerCase().includes(q));
  }, [query]);

  const grouped = useMemo(() => {
    if (query.trim()) return [{ label: 'Matches', names: results }];
    return GROUPS.map((group) => ({
      label: group.label,
      names: results.filter(group.match),
    })).filter((group) => group.names.length > 0);
  }, [query, results]);

  const Preview = ICONS[value] ?? ICONS.HiOutlineQuestionMarkCircle;

  return (
    <div>
      <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-3 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left transition hover:border-zinc-400 focus:outline-2 focus:outline-offset-2 focus:outline-primary dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Preview className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-xs text-zinc-700 dark:text-zinc-300">
          {value || 'Select an icon…'}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {!open && (
        <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          {NAMES.length} icons available. Click to browse with a preview.
        </p>
      )}

      {/* Panel */}
      {open && (
        <div className="mt-2 rounded-lg border border-zinc-300 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 p-2 dark:border-zinc-800">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search icons… e.g. rocket"
              className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-sm outline-none focus:border-primary dark:border-zinc-700 dark:bg-zinc-950"
              autoFocus
            />
          </div>

          <div className="max-h-64 overflow-y-auto p-2">
            {grouped.length === 0 && (
              <p className="px-2 py-4 text-center text-xs text-zinc-500">
                No icon matches “{query}”.
              </p>
            )}

            {grouped.map((group) => (
              <div key={group.label} className="mb-2 last:mb-0">
                <p className="px-1.5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                  {group.label}
                </p>
                <div className="grid grid-cols-8 gap-1 sm:grid-cols-10">
                  {group.names.map((name) => {
                    const Icon = ICONS[name];
                    if (!Icon) return null;
                    const selected = name === value;
                    return (
                      <button
                        key={name}
                        type="button"
                        title={name}
                        onClick={() => {
                          onChange(name);
                          setOpen(false);
                          setQuery('');
                        }}
                        className={`flex aspect-square items-center justify-center rounded-md transition ${
                          selected
                            ? 'bg-primary text-white'
                            : 'text-zinc-500 hover:bg-primary/10 hover:text-primary dark:text-zinc-400'
                        }`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
