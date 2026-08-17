export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex min-w-0 items-center ${className}`}>
      <span className="font-display font-semibold leading-none text-ink whitespace-nowrap truncate">
        Cable<span className="text-primary"> View Point</span>
      </span>
    </span>
  );
}
