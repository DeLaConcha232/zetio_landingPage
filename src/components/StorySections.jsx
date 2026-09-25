import StorySection from './StoryModule'

const imgStyle = {
  width: 'auto',
  height: '100%',
  maxWidth: 'min(88vw, 460px)',
  display: 'block',
  margin: '0 auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 30px 70px rgba(0,0,0,.55))',
}

const stories = [
  {
    id: 'play',
    eyebrow: 'PLAY',
    title: 'Organiza y',
    titleAccent: 'juega.',
    steps: [
      { label: 'Crea una reta en segundos', body: 'Elige formato, jugadores y cancha. Listo para jugar en menos de un minuto.', raw: true, screen: <img src="/hero-phone.webp" alt="Zetio Play — nueva reta" style={imgStyle} /> },
      { label: 'Confirma quién va', body: 'Cada jugador confirma su lugar. Nada de preguntar en el chat quién sí y quién no.', raw: true, screen: <img src="/play-02.webp" alt="Zetio Play — jugadores" style={imgStyle} /> },
      { label: 'El resultado queda guardado', body: 'Marcador, historial y estadísticas se guardan solos, partido tras partido.', raw: true, screen: <img src="/play-03.webp" alt="Zetio Play — tabla" style={imgStyle} /> },
    ],
  },
  {
    id: 'coach',
    eyebrow: 'COACH',
    title: 'Mide',
    titleAccent: 'cada golpe.',
    steps: [
      { label: 'Registra cada winner y error en vivo', body: 'Marca cada punto mientras juegas. Tu partido se convierte en datos, no en memoria.', raw: true, screen: <img src="/coach-01.webp" alt="Zetio Coach — registro en vivo" style={imgStyle} /> },
      { label: 'Mira tu evolución partido a partido', body: 'Compara tu rendimiento a lo largo del tiempo y detecta si de verdad estás mejorando.', raw: true, screen: <img src="/coach-02.webp" alt="Zetio Coach — mi rendimiento" style={imgStyle} /> },
      { label: 'Descubre tu golpe más fuerte', body: 'Sabe exactamente qué golpe te suma puntos y cuál te los está costando.', raw: true, screen: <img src="/coach-03.webp" alt="Zetio Coach — historial y efectividad" style={imgStyle} /> },
    ],
  },
  {
    id: 'tour',
    eyebrow: 'TOUR · PRÓXIMAMENTE',
    title: 'Compite',
    titleAccent: 'en serio.',
    steps: [
      { label: 'Busca e inscríbete en segundos', body: 'Encuentra torneos disponibles y da seguimiento a tu próximo partido, todo desde un mismo lugar.', raw: true, screen: <img src="/tour-01.webp" alt="Zetio Tour — inicio y búsqueda de torneos" style={imgStyle} /> },
      { label: 'Toda la información de tu torneo', body: 'Fecha, cuota de inscripción, sede y convocatoria: todo claro antes de jugar.', raw: true, screen: <img src="/tour-02.webp" alt="Zetio Tour — información del torneo" style={imgStyle} /> },
      { label: 'Cuadros y resultados en vivo', body: 'Sigue el cuadro de eliminación con marcadores que se actualizan en tiempo real, partido a partido.', raw: true, screen: <img src="/tour-03.webp" alt="Zetio Tour — cuadro de eliminatorias en vivo" style={imgStyle} /> },
    ],
  },
]

export default function Stories() {
  return <StorySection stories={stories} />
}
