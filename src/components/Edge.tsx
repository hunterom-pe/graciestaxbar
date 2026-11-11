/**
 * A torn-paper edge used between sections instead of soft gradients.
 * `color` is the colour of the section the tear belongs to; by default
 * the paper sits at the bottom of the strip (tear on top).
 */

// Deterministic jagged line across a 1200-wide viewBox.
const tear = (() => {
  let seed = 7
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  const pts: string[] = ['M0 40', 'L0 22']
  let x = 0
  while (x < 1200) {
    x = Math.min(1200, x + 14 + rand() * 26)
    pts.push(`L${x.toFixed(0)} ${(6 + rand() * 24).toFixed(0)}`)
  }
  pts.push('L1200 40Z')
  return pts.join(' ')
})()

export function Edge({
  color,
  flip = false,
  className = '',
}: {
  color: string
  flip?: boolean
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-5 w-full md:h-8 ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <path fill={color} d={tear} />
    </svg>
  )
}
