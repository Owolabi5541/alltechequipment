
export default function Section({ className = '', children, container = true }) {
  const base = 'section-y ' + (container ? 'container-px mx-auto ' : '')
  return <section className={base + className}>{children}</section>
}
