/** Small header lockup: soft italic name + a pink "Tax Bar" pill. */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="t-cute text-[1.45rem] leading-none min-[360px]:text-[1.7rem]">Gracie&rsquo;s</span>
      <span className="t-label -rotate-3 rounded-full bg-pink px-2 py-0.5 ring-1 ring-coal text-[0.625rem] text-coal">
        Tax Bar
      </span>
    </span>
  )
}
