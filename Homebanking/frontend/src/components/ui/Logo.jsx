/**
 * Logo de marca de Banco GNB Perú.
 * Isotipo: árbol estilizado (inspirado en el logo oficial GNB).
 * "BANCO" en blanco · "GNB" en azul #1565C0 (sobre fondo verde o claro).
 *
 * @param {Object} props
 * @param {number}  [props.size=44]          Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true]    Mostrar el texto del banco.
 * @param {'dark'|'light'} [props.variant='dark'] 'light' = todo blanco (sobre verde), 'dark' = verde+azul (sobre blanco)
 * @param {string}  [props.subtitle]         Texto secundario bajo el nombre.
 */
export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'BANCA POR INTERNET',
}) {
  // Colores según variante
  const bancoColor = variant === 'light' ? '#ffffff' : '#2E7D32'
  const gnbColor   = variant === 'light' ? '#ffffff' : '#1565C0'
  const subColor   = variant === 'light' ? 'rgba(255,255,255,0.80)' : '#5A7060'

  const nameSize = Math.round(size * 0.48)
  const subSize  = Math.max(9, Math.round(size * 0.22))

  // Colores del árbol SVG
  const treeGreen = variant === 'light' ? '#A5D6A7' : '#4CAF50'
  const treeDark  = variant === 'light' ? '#81C784' : '#388E3C'
  const trunkColor = variant === 'light' ? 'rgba(255,255,255,0.7)' : '#5D4037'

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* Isotipo: árbol GNB */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Banco GNB Perú"
        role="img"
      >
        {/* Copa del árbol — capa inferior (más oscura) */}
        <ellipse cx="24" cy="26" rx="16" ry="13" fill={treeDark} opacity="0.7" />

        {/* Copa del árbol — triángulo principal */}
        <polygon
          points="24,6 38,28 10,28"
          fill={treeGreen}
        />

        {/* Copa del árbol — triángulo medio (overlapping) */}
        <polygon
          points="24,12 36,30 12,30"
          fill={treeGreen}
          opacity="0.85"
        />

        {/* Copa del árbol — triángulo base */}
        <polygon
          points="24,18 37,34 11,34"
          fill={treeDark}
        />

        {/* Tronco */}
        <rect x="21" y="33" width="6" height="9" rx="2" fill={trunkColor} />
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          {/* "BANCO GNB" — dos colores como en la marca real */}
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span
              style={{
                fontWeight: 700,
                fontSize: nameSize,
                color: bancoColor,
                letterSpacing: '0.5px',
              }}
            >
              BANCO
            </span>
            <span
              style={{
                fontWeight: 900,
                fontSize: nameSize,
                color: gnbColor,
                letterSpacing: '0.5px',
              }}
            >
              GNB
            </span>
          </span>

          {subtitle && (
            <span
              style={{
                fontSize: subSize,
                fontWeight: 600,
                color: subColor,
                letterSpacing: '0.8px',
                marginTop: 1,
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
