/**
 * Logo — Banco GNB Perú · Core Financiero
 *
 * Props:
 *   size      {number}           Tamaño del isotipo en px.        (default: 44)
 *   wordmark  {boolean}          Mostrar texto junto al isotipo.  (default: true)
 *   variant   {'dark'|'light'}   'light' = todo blanco/clarito,   (default: 'dark')
 *                                 sobre navbar verde oscuro.
 *   subtitle  {string|false}     Texto debajo del nombre.         (default: false)
 *                                 Pasa subtitle="CORE FINANCIERO"
 *                                 solo donde quieras mostrarlo.
 */
export default function Logo({
  size     = 44,
  wordmark = true,
  variant  = 'dark',
  subtitle = false,
}) {
  /* ── Colores según variante ── */
  const bancoColor = variant === 'light' ? '#ffffff'  : '#1B5E20'   // "BANCO"
  const gnbColor   = variant === 'light' ? '#A5D6A7'  : '#1565C0'   // "GNB"  azul GNB
  const subColor   = variant === 'light' ? 'rgba(255,255,255,0.72)' : '#5A7060'

  /* Copa y tronco del árbol */
  const treeTop    = variant === 'light' ? '#A5D6A7'  : '#4CAF50'
  const treeMid    = variant === 'light' ? '#81C784'  : '#388E3C'
  const trunkColor = variant === 'light' ? 'rgba(255,255,255,0.60)' : '#5D4037'

  const nameSize = Math.round(size * 0.50)
  const subSize  = Math.max(9,  Math.round(size * 0.21))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>

      {/* ── Isotipo: árbol GNB ── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Banco GNB Perú"
        role="img"
      >
        {/* Sombra/base de la copa */}
        <ellipse cx="24" cy="27" rx="15" ry="11" fill={treeMid} opacity="0.55" />

        {/* Triángulo superior (copa alta) */}
        <polygon points="24,5  39,27  9,27"  fill={treeTop} />

        {/* Triángulo medio */}
        <polygon points="24,13 37,29 11,29"  fill={treeTop} opacity="0.80" />

        {/* Triángulo base (más oscuro, da profundidad) */}
        <polygon points="24,19 38,34 10,34"  fill={treeMid} />

        {/* Tronco */}
        <rect x="21" y="33" width="6" height="9" rx="2" fill={trunkColor} />
      </svg>

      {/* ── Wordmark ── */}
      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>

          {/* "BANCO GNB" en la misma línea, dos colores */}
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
            <span style={{
              fontWeight: 700,
              fontSize: nameSize,
              color: bancoColor,
              letterSpacing: '0.4px',
            }}>
              BANCO
            </span>
            <span style={{
              fontWeight: 900,
              fontSize: nameSize,
              color: gnbColor,
              letterSpacing: '0.4px',
            }}>
              GNB
            </span>
          </span>

          {/* Subtítulo opcional */}
          {subtitle && (
            <span style={{
              fontSize: subSize,
              fontWeight: 600,
              color: subColor,
              letterSpacing: '0.9px',
              marginTop: 1,
              textTransform: 'uppercase',
            }}>
              {subtitle}
            </span>
          )}

        </span>
      )}

    </span>
  )
}