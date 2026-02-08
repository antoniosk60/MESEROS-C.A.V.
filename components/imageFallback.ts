export const DEFAULT_IMAGE_FALLBACK_SRC =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f172a"/>
          <stop offset="0.55" stop-color="#1f2937"/>
          <stop offset="1" stop-color="#111827"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#g)"/>
      <g fill="none" stroke="#f59e0b" stroke-opacity="0.5" stroke-width="4">
        <circle cx="1240" cy="240" r="140"/>
        <circle cx="1240" cy="240" r="90"/>
        <circle cx="1240" cy="240" r="40"/>
      </g>
      <g fill="#e5e7eb" fill-opacity="0.9" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" text-anchor="middle">
        <text x="800" y="470" font-size="44" font-weight="700">Meseros C.A.V.</text>
        <text x="800" y="520" font-size="22" fill-opacity="0.7">Imagen no disponible</text>
      </g>
    </svg>
  `);

