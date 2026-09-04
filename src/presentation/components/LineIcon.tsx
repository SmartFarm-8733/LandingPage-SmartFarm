interface LineIconProps {
  type: "pulse" | "pin" | "drop";
}

export function LineIcon({ type }: LineIconProps) {
  if (type === "pulse") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12h4l2-6 4 12 2-6h8" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z" />
      <path d="M9 15c.5 1.5 1.5 2 3 2" />
    </svg>
  );
}
