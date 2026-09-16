/**
 * Abstract network topology used as the hero's visual anchor.
 *
 * A decentralized node graph — outer ring, inner "block" squares and a central
 * hub — drawn from data so the geometry stays readable and easy to tune.
 * Decorative only: hidden from assistive technology.
 */

const NODES = [
  { id: 'a0', x: 300, y: 85, kind: 'outer' },
  { id: 'a1', x: 424, y: 136, kind: 'outer', accent: true },
  { id: 'a2', x: 475, y: 260, kind: 'outer' },
  { id: 'a3', x: 424, y: 384, kind: 'outer' },
  { id: 'a4', x: 300, y: 435, kind: 'outer' },
  { id: 'a5', x: 176, y: 384, kind: 'outer', accent: true },
  { id: 'a6', x: 125, y: 260, kind: 'outer' },
  { id: 'a7', x: 176, y: 136, kind: 'outer' },
  { id: 'b0', x: 300, y: 165, kind: 'block' },
  { id: 'b1', x: 395, y: 260, kind: 'block' },
  { id: 'b2', x: 300, y: 355, kind: 'block' },
  { id: 'b3', x: 205, y: 260, kind: 'block' },
];

const EDGES = [
  ['a0', 'a1'],
  ['a1', 'a2'],
  ['a2', 'a3'],
  ['a3', 'a4'],
  ['a4', 'a5'],
  ['a5', 'a6'],
  ['a6', 'a7'],
  ['a7', 'a0'],
  ['a0', 'b0'],
  ['a2', 'b1'],
  ['a4', 'b2'],
  ['a6', 'b3'],
  ['b0', 'b1'],
  ['b1', 'b2'],
  ['b2', 'b3'],
  ['b3', 'b0'],
  ['hub', 'b0'],
  ['hub', 'b1'],
  ['hub', 'b2'],
  ['hub', 'b3'],
];

const CENTRE = { x: 300, y: 260 };
const HEX_RADIUS = 22;

const byId = Object.fromEntries(NODES.map((node) => [node.id, node]));
byId.hub = CENTRE;

/** Pointy-top hexagon centred on the hub. */
const HUB_PATH = Array.from({ length: 6 }, (_, index) => {
  const angle = (Math.PI / 3) * index - Math.PI / 2;
  const x = CENTRE.x + HEX_RADIUS * Math.cos(angle);
  const y = CENTRE.y + HEX_RADIUS * Math.sin(angle);
  return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(' ') + ' Z';

const LINE_STROKE = 'rgba(180, 188, 199, 0.13)';
const NODE_STROKE = 'rgba(180, 188, 199, 0.32)';

export function HeroVisual() {
  return (
    <svg
      viewBox="0 0 600 520"
      className="h-auto w-full max-w-[26rem]"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke={LINE_STROKE} strokeWidth="1" fill="none">
        {EDGES.map(([from, to]) => {
          const a = byId[from];
          const b = byId[to];

          return <line key={`${from}-${to}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
        })}
      </g>

      {/* Outer ring nodes */}
      <g fill="#10131a" stroke={NODE_STROKE} strokeWidth="1">
        {NODES.filter((node) => node.kind === 'outer').map((node) => (
          <circle key={node.id} cx={node.x} cy={node.y} r={node.accent ? 5 : 3.5} />
        ))}
      </g>

      {/* Inner "block" squares */}
      <g fill="#10131a" stroke={NODE_STROKE} strokeWidth="1">
        {NODES.filter((node) => node.kind === 'block').map((node) => (
          <rect
            key={node.id}
            x={node.x - 7}
            y={node.y - 7}
            width="14"
            height="14"
            rx="3"
          />
        ))}
      </g>

      {/* Accent pulses — CSS-driven so no JS animation loop runs */}
      <g fill="#4fd6bd">
        {NODES.filter((node) => node.accent).map((node, index) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="5"
            className="animate-node-pulse"
            style={{ animationDelay: `${index * 1.4}s` }}
          />
        ))}
      </g>

      {/* Hub */}
      <path d={HUB_PATH} fill="#0b0d11" stroke="rgba(79, 214, 189, 0.75)" strokeWidth="1.25" />
      <circle cx={CENTRE.x} cy={CENTRE.y} r="4" fill="#4fd6bd" />
    </svg>
  );
}
