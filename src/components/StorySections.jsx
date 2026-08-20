import StoryModule from './StoryModule'

const imgStyle = {
  width: 'auto',
  height: '100%',
  maxWidth: 'min(78vw, 300px)',
  display: 'block',
  margin: '0 auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.55))',
}

export function PlayStory() {
  return (
    <StoryModule
      id="play"
      eyebrow="PLAY"
      title="Organiza y"
      titleAccent="juega."
      steps={[
        { label: 'Crea una reta en segundos', body: 'Elige formato, jugadores y cancha. Listo para jugar en menos de un minuto.', raw: true, screen: <img src="/hero-phone.webp" alt="Zetio Play — nueva reta" style={imgStyle} /> },
        { label: 'Confirma quién va', body: 'Cada jugador confirma su lugar. Nada de preguntar en el chat quién sí y quién no.', raw: true, screen: <img src="/play-02.webp" alt="Zetio Play — jugadores" style={imgStyle} /> },
        { label: 'El resultado queda guardado', body: 'Marcador, historial y estadísticas se guardan solos, partido tras partido.', raw: true, screen: <img src="/play-03.webp" alt="Zetio Play — tabla" style={imgStyle} /> },
      ]}
    />
  )
}

export function CoachStory() {
  return (
    <StoryModule
      id="coach"
      eyebrow="COACH"
      title="Mide"
      titleAccent="cada golpe."
      steps={[
        { label: 'Registra cada winner y error en vivo', body: 'Marca cada punto mientras juegas. Tu partido se convierte en datos, no en memoria.', raw: true, screen: <img src="/coach-01.webp" alt="Zetio Coach — registro en vivo" style={imgStyle} /> },
        { label: 'Mira tu evolución partido a partido', body: 'Compara tu rendimiento a lo largo del tiempo y detecta si de verdad estás mejorando.', raw: true, screen: <img src="/coach-02.webp" alt="Zetio Coach — mi rendimiento" style={imgStyle} /> },
        { label: 'Descubre tu golpe más fuerte', body: 'Sabe exactamente qué golpe te suma puntos y cuál te los está costando.', raw: true, screen: <img src="/coach-03.webp" alt="Zetio Coach — historial y efectividad" style={imgStyle} /> },
      ]}
    />
  )
}

function TourScreenBracket() {
  return (
    <div>
      <div className="text-[11px] text-white/45 mb-4.5" style={{ letterSpacing: '.14em' }}>CUADRO · CUARTOS</div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex justify-between px-3 py-2.5 rounded-[10px] bg-white/4 mb-2 text-xs">
          <span>Pareja {i * 2 + 1}</span><span className="text-white/45">vs</span><span>Pareja {i * 2 + 2}</span>
        </div>
      ))}
    </div>
  )
}
function TourScreenLive() {
  const rows = [['Cancha 1', '6–3 · 4–2'], ['Cancha 2', '5–5 · en juego'], ['Cancha 3', '6–1 · 6–2']]
  return (
    <div>
      <div className="text-[11px] text-white/45 mb-4.5" style={{ letterSpacing: '.14em' }}>RESULTADOS EN VIVO</div>
      {rows.map(([c, s], i) => (
        <div key={c} className={`flex justify-between py-3 text-[13px] ${i < 2 ? 'border-b border-white/7' : ''}`}>
          <span>{c}</span><span className="text-primary-light">{s}</span>
        </div>
      ))}
    </div>
  )
}
function TourScreenRanking() {
  const rows = [['1', 'Ana M.', '1240'], ['2', 'Diego R.', '1180'], ['3', 'Sofía T.', '1105']]
  return (
    <div>
      <div className="text-[11px] text-white/45 mb-4.5" style={{ letterSpacing: '.14em' }}>RANKING · LIGA NORTE</div>
      {rows.map(([p, n, s], i) => (
        <div key={p} className={`flex items-center gap-3 py-2.5 ${i < 2 ? 'border-b border-white/7' : ''}`}>
          <span className="font-extrabold text-white/45 w-4">{p}</span>
          <span className="text-[13px] flex-1">{n}</span>
          <span className="text-xs text-primary">{s}</span>
        </div>
      ))}
    </div>
  )
}

export function TourStory() {
  return (
    <StoryModule
      id="tour"
      eyebrow="TOUR · PRÓXIMAMENTE"
      title="Compite"
      titleAccent="en serio."
      steps={[
        { label: 'Arma cuadros y grupos automáticamente', body: 'Sube tu lista de inscritos y Tour arma el cuadro completo en segundos.', screen: <TourScreenBracket /> },
        { label: 'Resultados en vivo para todos', body: 'Cada resultado se actualiza al instante — jugadores y espectadores ven todo en tiempo real.', screen: <TourScreenLive /> },
        { label: 'Ranking y clasificación al día', body: 'Tu posición se recalcula automáticamente después de cada torneo.', screen: <TourScreenRanking /> },
      ]}
    />
  )
}
