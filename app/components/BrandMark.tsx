// Recurring visual motif: concentric rings, standing in for the studio's
// "considered, built in layers" positioning. Reused at three scales — nav
// mark, section ornament, footer mark — per the brief's request for one
// signature geometric device instead of one-off decoration.
export default function BrandMark({
  size = 32,
  color = 'currentColor',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="brand-mark"
    >
      <circle cx="24" cy="24" r="21.5" stroke={color} strokeWidth="1.25" />
      <circle cx="24" cy="24" r="14" stroke={color} strokeWidth="1.25" />
      <circle cx="24" cy="24" r="6.5" fill={color} fillOpacity="0.16" stroke={color} strokeWidth="1.25" />
    </svg>
  );
}
