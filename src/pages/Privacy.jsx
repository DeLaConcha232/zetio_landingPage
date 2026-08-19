import LegalLayout, { LegalSection } from '../components/LegalLayout'

function SubHeading({ children }) {
  return (
    <h3 className="text-white/80 font-semibold text-sm sm:text-base mt-5 mb-2 first:mt-0">
      {children}
    </h3>
  )
}

function LegalTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/8 mt-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/8 bg-white/3">
            {headers.map((h) => (
              <th key={h} className="text-left text-white/70 font-semibold px-4 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top leading-relaxed text-white/55">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function LegalList({ items }) {
  return (
    <ul className="list-none space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-primary mt-1 shrink-0">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LegalNote({ children }) {
  return (
    <div className="border-l-2 border-primary/40 pl-4 py-1 bg-primary/5 rounded-r-lg mt-3 text-white/55 text-sm leading-relaxed">
      {children}
    </div>
  )
}

function StepList({ steps }) {
  return (
    <ol className="list-none space-y-2 mt-2">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-primary font-bold shrink-0 w-5 text-right">{i + 1}.</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  )
}

function Code({ children }) {
  return (
    <code className="text-primary/80 text-xs bg-white/5 px-1 rounded">{children}</code>
  )
}

export default function Privacy() {
  return (
    <LegalLayout
      badge="Legal · Privacidad"
      title="Aviso de Privacidad"
      updated="11 de agosto de 2026"
    >
      {/* Intro */}
      <section>
        <div className="text-white/55 text-sm sm:text-base leading-relaxed space-y-3">
          <p>
            Bienvenido a <strong className="text-white/80">Zetio</strong>. Esta Política de Privacidad describe cómo <strong className="text-white/80">Diego Diaz</strong> ("nosotros", "nuestro" o "Zetio") recopila, usa, almacena y protege tu información cuando utilizas la aplicación móvil Zetio y los servicios asociados (en conjunto, el "Servicio").
          </p>
          <LegalNote>
            <strong className="text-white/75">Alcance de este documento — Zetio Users.</strong> Esta política cubre los productos orientados a jugadores y coaches individuales: <strong className="text-white/75">Zetio Tour</strong>, <strong className="text-white/75">Zetio Play</strong> y <strong className="text-white/75">Zetio Coach</strong>. El tratamiento de datos de <strong className="text-white/75">Zetio Clubs</strong> (dirigido a administradores de clubes/canchas) se documentará en una sección separada dentro de este mismo documento cuando ese producto esté disponible.
          </LegalNote>
          <p>Zetio es una plataforma de pádel compuesta por tres módulos, cada uno con tratamientos de datos específicos descritos en esta política:</p>
          <LegalList items={[
            <><strong className="text-white/80">Zetio Tour</strong> — organización y participación en torneos estructurados con inscripciones, categorías, fases de grupos y eliminatorias.</>,
            <><strong className="text-white/80">Zetio Play</strong> — retas casuales entre amigos con códigos de invitación, tabla de posiciones y resultados rápidos.</>,
            <><strong className="text-white/80">Zetio Coach</strong> — gestión de la relación entre coaches y jugadores, agenda de sesiones de entrenamiento, partidos supervisados y métricas deportivas.</>,
          ]} />
          <p>Al usar Zetio, aceptas las prácticas descritas en esta política. Si no estás de acuerdo, por favor no utilices el Servicio.</p>
        </div>
      </section>

      {/* 1 */}
      <LegalSection number={1} title="Información que recopilamos">
        <SubHeading>1.1 Información que proporcionas directamente</SubHeading>
        <p>Cuando te registras y usas Zetio, recopilamos la siguiente información:</p>
        <LegalTable
          headers={['Categoría', 'Datos', 'Propósito']}
          rows={[
            [<strong className="text-white/75">Cuenta</strong>, 'Correo electrónico, contraseña (almacenada como hash, nunca en texto plano), o cuenta Google (OAuth)', 'Crear y autenticar tu cuenta'],
            [<strong className="text-white/75">Perfil</strong>, 'Nombre, apellido paterno, apellido materno', 'Identificarte como jugador en torneos, retas y sesiones de coaching'],
            [<strong className="text-white/75">Datos personales</strong>, 'Fecha de nacimiento, sexo', 'Validar tu elegibilidad en categorías de torneo por edad y género'],
            [<strong className="text-white/75">Contacto</strong>, 'Número de teléfono', 'Información de perfil y contacto entre jugadores'],
            [<strong className="text-white/75">Ubicación del perfil</strong>, 'Nacionalidad, estado, ciudad', 'Mostrar tu ubicación en tu perfil'],
            [<strong className="text-white/75">Preferencias</strong>, 'Deporte preferido (ej. pádel)', 'Personalizar tu experiencia'],
            [<strong className="text-white/75">Encuesta de experiencia</strong>, 'Ciudad, estado y país donde juegas pádel; club donde juegas; estilo de juego (amigos, retas, torneos, clases); frecuencia semanal de juego; cómo conociste Zetio; funcionalidades de tu interés; intención de participar en torneos', 'Personalizar el contenido y las funcionalidades que te mostramos. Esta información se recopila de forma progresiva y su aportación es completamente voluntaria: puedes saltar cualquier pregunta en cualquier momento sin que ello afecte al funcionamiento del Servicio'],
          ]}
        />
        <LegalNote>
          El dato de <strong className="text-white/75">sexo</strong> se considera categoría especial bajo el Art. 9 del GDPR. Se trata con base en tu <strong className="text-white/75">consentimiento explícito</strong> otorgado al registrarte y se utiliza únicamente para determinar elegibilidad en categorías por género en torneos y retas.
        </LegalNote>

        <SubHeading>1.2 Información recopilada automáticamente</SubHeading>
        <LegalTable
          headers={['Categoría', 'Datos', 'Propósito']}
          rows={[
            [<strong className="text-white/75">Ubicación del dispositivo</strong>, 'Coordenadas aproximadas (latitud/longitud), ciudad, estado, país, código postal', <><strong className="text-white/75">Mostrarte torneos cercanos a tu zona.</strong> La ubicación se obtiene únicamente tras tu consentimiento explícito mediante el sistema de permisos del dispositivo (iOS/Android). La precisión es reducida (red/WiFi, no GPS fino) y se actualiza como máximo cada 24 horas. Puedes revocar este permiso en cualquier momento desde los ajustes del sistema operativo; al revocarlo, las funciones dependientes de ubicación dejarán de estar disponibles, sin afectar el resto del Servicio.</>],
            [<strong className="text-white/75">Token de push</strong>, 'Identificador único del dispositivo para notificaciones, plataforma (iOS/Android)', 'Enviarte notificaciones operativas sobre tus torneos, retas, partidos, invitaciones de amistad y de vínculo coach-jugador'],
            [<strong className="text-white/75">Datos de sesión</strong>, 'Token de sesión, identificador de sesión (UUID), timestamps de actividad', 'Mantener tu sesión activa y segura'],
            [<strong className="text-white/75">Plataforma del dispositivo</strong>, 'Sistema operativo utilizado (iOS, Android o web)', 'Compatibilidad técnica y estadísticas internas de uso'],
            [<strong className="text-white/75">Código de país</strong>, 'País derivado de tu ubicación aproximada (p. ej. MX, US, ES)', 'Personalización regional y estadísticas internas'],
          ]}
        />

        <SubHeading>1.3 Información de torneos, retas y partidos</SubHeading>
        <p>Cuando participas en los módulos Zetio Tour y Zetio Play, generamos y almacenamos:</p>

        <p className="text-white/70 font-medium mt-3">Zetio Tour (torneos estructurados):</p>
        <LegalList items={[
          'Inscripciones a torneos y categorías',
          'Parejas formadas (tú y tu compañero)',
          'Resultados de partidos (marcadores por set)',
          'Historial de partidos jugados',
          'Estadísticas (participaciones, trofeos, posiciones en grupos y eliminatorias)',
        ]} />

        <p className="text-white/70 font-medium mt-3">Zetio Play (retas casuales):</p>
        <LegalList items={[
          'Retas que creas o en las que participas, con nombre, modalidad (número de jugadores), club indicado y estado',
          <>Un <strong className="text-white/75">código de invitación</strong> (<Code>invite_code</Code>) único por reta que puedes compartir con otros jugadores para que se unan. Cualquier persona con el código puede unirse a la reta, incluso usando el Modo Invitado descrito en la sección 1.5.</>,
          <>Lista de jugadores de cada reta. Una reta puede incluir <strong className="text-white/75">jugadores manuales</strong> (sin cuenta en Zetio): en ese caso únicamente se almacena el nombre de texto libre que introduce el organizador, sin datos de contacto ni identificación adicional.</>,
          'Jornadas, partidos, marcadores, rankings parciales y finales',
          'Histórico del ranking final al cerrar la reta (snapshot agregado)',
        ]} />

        <p className="text-white/70 font-medium mt-4">Modificación de la lista de jugadores por el host</p>
        <p className="mt-2">
          El usuario que crea una reta (host) puede, en cualquier momento — incluso después de que la reta haya comenzado y aun cuando ya existan partidos con resultados registrados — <strong className="text-white/75">reemplazar o quitar a cualquier participante distinto de sí mismo</strong>. Esto incluye:
        </p>
        <LegalList items={[
          <>Cambiar a un amigo vinculado por otro amigo vinculado, por un nombre manual (jugador sin cuenta), o por un nombre genérico (<Code>Jugador N</Code>).</>,
          'Quitar a un participante que se unió mediante el código de invitación.',
        ]} />
        <p className="mt-2">
          Esta capacidad es <strong className="text-white/75">exclusiva del host</strong> y forma parte del control operativo sobre las retas que él mismo organiza.
        </p>
        <p className="text-white/70 font-medium mt-3">Consecuencias para el participante removido o reemplazado:</p>
        <LegalList items={[
          <>El <strong className="text-white/75">vínculo entre el usuario y la reta se rompe inmediatamente</strong>: el <Code>user_id</Code> del usuario deja de estar asociado a ese slot.</>,
          <>La reta <strong className="text-white/75">deja de aparecer en su sección "Partidos donde participas"</strong> y deja de poder visualizarla desde su cuenta, salvo que el host vuelva a incluirlo más tarde.</>,
          <>Los <strong className="text-white/75">resultados de los partidos ya jugados permanecen en la reta</strong> bajo el slot del que fue removido. Los puntos están ligados a la posición del slot, no a la identidad del usuario que los introdujo; por integridad histórica de la reta no se borran. Estos resultados pasan a aparecer asociados al nuevo ocupante del slot (otro jugador, un nombre manual o el placeholder genérico).</>,
          <>El <strong className="text-white/75">nombre que se mostraba</strong> en ese slot puede ser sustituido por el host por el nombre del nuevo participante o por un identificador genérico (<Code>Jugador N</Code>).</>,
        ]} />
        <p className="mt-2">
          Al unirte a una reta como amigo vinculado o mediante código de invitación, aceptas que el host conserva esta facultad. Si en algún momento dejas de tener acceso a una reta en la que participabas, lo más probable es que el host te haya removido o reemplazado. Esto no afecta a tu cuenta de Zetio ni a ningún otro torneo o reta en el que participes.
        </p>

        <p className="text-white/70 font-medium mt-3">Sistema de amigos (<Code>friend_code</Code>):</p>
        <p className="mt-2">
          Zetio asigna a cada usuario un <strong className="text-white/75">código de amigo</strong> (<Code>friend_code</Code>) único. Este código es un <strong className="text-white/75">identificador público dentro de la plataforma</strong>: cualquier otro usuario registrado que conozca tu código puede localizarte para enviarte una solicitud de amistad. El código <strong className="text-white/75">no es secreto</strong>; compartirlo es una acción deliberada y equivalente a darle a alguien tu nombre de usuario público. Una solicitud de amistad <strong className="text-white/75">no</strong> otorga acceso automático a tus datos: debe ser aceptada por ambas partes. Zetio <strong className="text-white/75">no accede a la libreta de contactos de tu dispositivo</strong> en ningún momento.
        </p>

        <p className="text-white/70 font-medium mt-4">Visibilidad del perfil y datos dentro de la plataforma</p>
        <p className="mt-2">Al utilizar Zetio, aceptas que ciertos datos formen parte de la experiencia social de la plataforma. Esto incluye:</p>
        <LegalList items={[
          'Tu nombre de usuario',
          'Resultados de partidos',
          'Estadísticas deportivas generadas en torneos, retas y coaching',
        ]} />
        <p className="mt-2">
          Estos datos pueden ser visibles para otros usuarios dentro del mismo contexto (torneos, retas o vínculo coach-jugador), pero <strong className="text-white/75">nunca incluyen información privada</strong> como correo electrónico, teléfono o fecha de nacimiento. Esta visibilidad es parte esencial del funcionamiento del Servicio.
        </p>
        <p className="mt-2">
          <strong className="text-white/75">Visibilidad de los datos de torneos y retas:</strong> Los resultados de partidos, estadísticas y posiciones son visibles para otros usuarios registrados en Zetio que participen en el mismo torneo o reta. Tu nombre y estadísticas forman parte de tu perfil de jugador visible dentro de la plataforma. Tu información privada (correo electrónico, número de teléfono, fecha de nacimiento) <strong className="text-white/75">nunca es visible para otros usuarios</strong>.
        </p>

        <SubHeading>1.4 Información de pagos</SubHeading>
        <p>Actualmente Zetio <strong className="text-white/75">no procesa pagos en línea</strong> dentro de la aplicación:</p>
        <LegalList items={[
          <>Las inscripciones a torneos se gestionan mediante un <strong className="text-white/75">flujo de reservación sin cobro</strong> dentro de la app; cualquier pago asociado se coordina de forma externa entre el organizador del torneo y el jugador.</>,
          <>Los pagos de sesiones de Zetio Coach se registran internamente como una <strong className="text-white/75">herramienta de seguimiento para el coach</strong> (marcar una sesión como "pendiente" o "pagada"), sin intervenir en ninguna transacción financiera real ni en el movimiento de dinero.</>,
          <><strong className="text-white/75">Zetio no recopila, almacena ni tiene acceso a datos de tarjetas, cuentas bancarias, credenciales de pago ni ningún dato financiero sensible.</strong></>,
        ]} />
        <p className="mt-2">
          En caso de que en el futuro Zetio integre un procesador de pagos externo (por ejemplo, Stripe), actualizaremos esta Política de Privacidad con <strong className="text-white/75">al menos 30 días de anticipación</strong> antes de activar dicha integración, describiendo qué datos se compartirán y con qué finalidad.
        </p>

        <SubHeading>1.5 Modo Invitado (Guest Mode)</SubHeading>
        <p>Zetio Play permite acceder al módulo de retas casuales <strong className="text-white/75">sin necesidad de crear una cuenta</strong>. En modo invitado:</p>
        <LegalList items={[
          <><strong className="text-white/75">Datos que recopilamos:</strong> Datos de sesión anónimos (sin vincular a un usuario identificado) y ubicación aproximada del dispositivo (únicamente si concedes el permiso). Nuestro sistema de analítica interna solo registra eventos vinculados a una cuenta autenticada; <strong className="text-white/75">hoy no se generan eventos de analítica en modo invitado</strong>.</>,
          <><strong className="text-white/75">Datos que NO recopilamos:</strong> Correo electrónico, contraseña, número de teléfono, fecha de nacimiento ni ningún otro dato de perfil personal.</>,
          <>Unirse a una reta con código: un usuario en modo invitado puede unirse a una reta de Zetio Play utilizando únicamente el código de invitación (<Code>invite_code</Code>) y un <strong className="text-white/75">nombre temporal</strong> introducido manualmente. Ese nombre se almacena asociado a la reta (no a un perfil) únicamente mientras la reta esté activa, y forma parte del historial agregado de la reta al cerrarse.</>,
          <><strong className="text-white/75">El host puede removerte de la reta</strong> en cualquier momento (ver sección 1.3, "Modificación de la lista de jugadores por el host"). Al ser removido como invitado, pierdes el acceso a la reta y, como tus datos de invitado no están vinculados a un perfil permanente, no quedará ninguna referencia identificable a ti en esa reta.</>,
          <>Los datos de invitado <strong className="text-white/75">no se asocian a ningún perfil permanente</strong> y se eliminan al cerrar la sesión o al crear una cuenta.</>,
          'Si decides crear una cuenta desde el modo invitado, se te solicitará proporcionar la información descrita en la sección 1.1.',
        ]} />

        <SubHeading>1.6 Información específica de Zetio Coach</SubHeading>
        <p>
          El módulo <strong className="text-white/75">Zetio Coach</strong> permite a un usuario actuar como <em>coach</em> (entrenador) y gestionar la relación con sus <em>jugadores</em>. Un mismo usuario puede desempeñar ambos roles simultáneamente (ser coach de unos jugadores y jugador vinculado a otro coach). El tratamiento de datos específico de este módulo es el siguiente:
        </p>

        <p className="text-white/70 font-medium mt-3">Vínculo coach ↔ jugador (consentimiento explícito):</p>
        <StepList steps={[
          <>El coach envía una <strong className="text-white/75">invitación</strong> al jugador desde la app. El jugador recibe una notificación (tipo <Code>coach_invitation</Code>) con el nombre del coach.</>,
          <>El vínculo permanece en estado <strong className="text-white/75">pendiente</strong> hasta que el jugador lo <strong className="text-white/75">acepta explícitamente</strong>. Mientras esté pendiente, no se comparten datos del jugador con el coach.</>,
          <>Al aceptar, el vínculo pasa a <strong className="text-white/75">activo</strong> y el coach comienza a poder registrar información deportiva del jugador.</>,
          <>Tanto el coach como el jugador pueden <strong className="text-white/75">romper el vínculo</strong> en cualquier momento desde la app, lo que detiene inmediatamente el acceso del coach a datos futuros del jugador.</>,
        ]} />

        <p className="text-white/70 font-medium mt-3">Datos que un coach registra sobre sus jugadores vinculados:</p>
        <LegalList items={[
          <><strong className="text-white/75">Sesiones de entrenamiento agendadas:</strong> fecha, hora y participantes de cada sesión.</>,
          <><strong className="text-white/75">Partidos supervisados:</strong> fecha, club/ubicación, tipo de partido, notas del coach, y participantes.</>,
          <><strong className="text-white/75">Estadísticas deportivas por jugador:</strong> sets jugados, puntuaciones, métricas de efectividad, agregados históricos y progresión.</>,
          <><strong className="text-white/75">Notas del coach</strong> asociadas a sesiones o partidos (texto libre introducido por el coach).</>,
          <><strong className="text-white/75">Jugadores manuales:</strong> un coach también puede registrar jugadores "manuales" que no tienen cuenta en Zetio. En ese caso únicamente se almacena el nombre de texto libre introducido por el coach, sin datos de contacto ni identificación adicional.</>,
        ]} />

        <LegalNote>
          <strong className="text-white/75">Naturaleza no médica de las métricas.</strong> Las métricas registradas en Zetio Coach corresponden exclusivamente a rendimiento deportivo y actividad dentro de la plataforma. Estas métricas <strong className="text-white/75">no constituyen datos médicos ni información de salud</strong> en el sentido legal o clínico (LFPDPPP, GDPR Art. 9, HIPAA o normativa equivalente), y Zetio no registra datos biométricos, lesiones, condiciones médicas ni información de salud personal.
        </LegalNote>

        <LegalNote>
          <strong className="text-white/75">Registro interno de pagos de coaching.</strong> Zetio Coach incluye una funcionalidad para que el coach marque sesiones como <strong className="text-white/75">"pendiente" o "pagada"</strong> como herramienta de seguimiento propia. Este registro es estrictamente interno: <strong className="text-white/75">Zetio no procesa pagos reales, no recolecta datos bancarios, no maneja transferencias de dinero y no interviene en la relación económica entre coach y jugador.</strong> Los campos almacenados son únicamente el estado (<Code>pendiente</Code>/<Code>pagado</Code>) y la marca de tiempo de cambio de estado.
        </LegalNote>

        <p className="text-white/70 font-medium mt-3">Visibilidad de los datos de Zetio Coach:</p>
        <LegalList items={[
          <>Un <strong className="text-white/75">coach</strong> puede ver todos los datos deportivos (sesiones, partidos, estadísticas, notas) de los jugadores que han aceptado vincularse con él.</>,
          <>Un <strong className="text-white/75">jugador</strong> puede ver sus propias métricas y el historial compartido con el coach con el que está vinculado.</>,
          <><strong className="text-white/75">Los datos de Zetio Coach no son visibles para usuarios fuera del vínculo activo</strong>, ni aparecen en el perfil público del jugador dentro de Zetio Play o Zetio Tour.</>,
          <>Si el vínculo se rompe, el acceso del coach a datos futuros del jugador cesa inmediatamente; los registros históricos permanecen asociados al coach que los creó salvo solicitud de eliminación (sección 6).</>,
        ]} />
        <p className="mt-3">
          <strong className="text-white/75">Notificaciones operativas de Coach.</strong> Las invitaciones de vínculo y otros eventos de coaching se envían como notificaciones dentro de la app y, si están habilitados, como notificaciones push. Estas notificaciones son <strong className="text-white/75">operativas</strong>, no publicitarias.
        </p>
        <p className="mt-2">
          <strong className="text-white/75">Menores de edad en Zetio Coach.</strong> Si el jugador vinculado es menor de edad, es <strong className="text-white/75">requisito indispensable</strong> contar con el consentimiento de un padre o tutor legal antes de aceptar el vínculo y antes de que el coach registre cualquier dato deportivo del menor. Ver sección 7 para más detalle.
        </p>

        <SubHeading>1.7 Soporte y consultas</SubHeading>
        <p>Cuando abres un <strong className="text-white/75">ticket de soporte</strong> desde la app o nos escribes a nuestro correo de soporte, almacenamos los siguientes datos asociados al ticket:</p>
        <LegalList items={[
          <>Tipo de incidencia (<Code>issue_type</Code>) y prioridad (<Code>priority</Code>)</>,
          'Descripción del problema introducida por ti',
          'Identificador de tu cuenta de usuario (para poder responderte)',
          'Fecha y hora de creación del ticket',
        ]} />
        <p className="mt-2">Estos datos se utilizan <strong className="text-white/75">exclusivamente</strong> para atender tu consulta y darle seguimiento. No se comparten con terceros, no se utilizan para analítica agregada y se conservan mientras el ticket permanezca activo más un período razonable para auditoría interna.</p>
      </LegalSection>

      {/* 2 */}
      <LegalSection number={2} title="Cómo usamos tu información">
        <p>Utilizamos tu información exclusivamente para:</p>
        <LegalList items={[
          <><strong className="text-white/75">Proveer el Servicio:</strong> Crear tu cuenta, gestionar tu perfil, inscribirte en torneos, organizar retas casuales, emparejar jugadores y registrar resultados.</>,
          <><strong className="text-white/75">Funcionalidad de ubicación:</strong> Mostrar torneos y eventos cercanos a tu zona geográfica.</>,
          <><strong className="text-white/75">Gestión de coaching (Zetio Coach):</strong> Facilitar la relación entre coaches y jugadores vinculados, registrar sesiones de entrenamiento, partidos supervisados y métricas deportivas, y enviar notificaciones operativas relacionadas con entrenamientos y partidos supervisados.</>,
          <><strong className="text-white/75">Personalización mediante encuesta:</strong> Las respuestas que aportas voluntariamente en la encuesta de onboarding y en las preguntas progresivas se utilizan para adaptar el contenido, sugerencias y funcionalidades que se te presentan dentro de la app (por ejemplo, mostrar torneos o eventos relevantes para tu zona de juego). En ningún caso estos datos se comparten con terceros ni se usan para publicidad.</>,
          <><strong className="text-white/75">Notificaciones:</strong> Informarte sobre actualizaciones de tus torneos, resultados de partidos, inscripciones, invitaciones de amistad, invitaciones de vínculo coach-jugador y eventos relevantes.</>,
          <><strong className="text-white/75">Mejora del Servicio:</strong> Resolver problemas técnicos y mejorar la experiencia de usuario mediante analítica interna.</>,
          <><strong className="text-white/75">Comunicación:</strong> Responder a tickets de soporte y consultas.</>,
          <><strong className="text-white/75">Feedback:</strong> Permitirte calificar la aplicación mediante el sistema nativo de calificaciones del sistema operativo.</>,
        ]} />
        <p className="text-white/70 font-medium mt-4">No utilizamos tu información para:</p>
        <LegalList items={[
          'Publicidad dirigida o personalizada',
          'Venta de datos a terceros',
          'Elaboración de perfiles con fines comerciales',
          'Rastreo (tracking) según la definición de Apple App Tracking Transparency (ATT)',
        ]} />
      </LegalSection>

      {/* 3 */}
      <LegalSection number={3} title="Base legal para el tratamiento (GDPR)">
        <p>
          Para los usuarios sujetos al <strong className="text-white/80">Reglamento General de Protección de Datos (GDPR)</strong> de la Unión Europea o el Espacio Económico Europeo, el tratamiento de tus datos personales se basa en las siguientes bases legales según el Artículo 6 del GDPR:
        </p>
        <LegalTable
          headers={['Finalidad del tratamiento', 'Base legal']}
          rows={[
            ['Crear y gestionar tu cuenta, inscribirte en torneos, participar en retas y registrar resultados', <><strong className="text-white/75">Ejecución de contrato</strong> (Art. 6.1.b)</>],
            ['Gestionar la relación coach-jugador en Zetio Coach (vínculo, sesiones, métricas)', <><strong className="text-white/75">Ejecución de contrato</strong> (Art. 6.1.b) — solo tras aceptación explícita del vínculo por ambas partes</>],
            ['Enviar notificaciones push sobre tus torneos, retas e invitaciones', <><strong className="text-white/75">Consentimiento</strong> (Art. 6.1.a) — otorgado al conceder el permiso de notificaciones</>],
            ['Analítica interna para mejorar el Servicio', <><strong className="text-white/75">Interés legítimo</strong> (Art. 6.1.f) — sin afectar a tus derechos fundamentales</>],
            ['Encuesta de experiencia y personalización', <><strong className="text-white/75">Consentimiento</strong> (Art. 6.1.a) — voluntario y revocable en cualquier momento</>],
            ['Cumplir obligaciones fiscales y legales', <><strong className="text-white/75">Obligación legal</strong> (Art. 6.1.c)</>],
          ]}
        />
        <p className="mt-3">
          Puedes retirar tu consentimiento en cualquier momento contactándonos en <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a> o utilizando las opciones de opt-out descritas en esta política, sin que ello afecte a la licitud del tratamiento anterior a su retirada.
        </p>
        <p className="text-white/70 font-medium mt-4">Usuarios en Latinoamérica.</p>
        <p>Para usuarios en Latinoamérica (incluyendo México, Argentina, Chile, Colombia y otros países de la región), el tratamiento de datos se basa principalmente en:</p>
        <LegalList items={[
          <>El <strong className="text-white/75">consentimiento</strong> del usuario otorgado al registrarse y al aceptar los permisos solicitados por la app</>,
          <>La <strong className="text-white/75">ejecución del servicio</strong> solicitado por el usuario (cuenta, torneos, retas, coaching)</>,
          <>El <strong className="text-white/75">interés legítimo</strong> de Zetio para la mejora del Servicio, siempre subordinado a tus derechos fundamentales</>,
        ]} />
        <p className="text-white/70 font-medium mt-3">Usuarios en España y Unión Europea.</p>
        <p>El tratamiento se rige adicionalmente por el GDPR conforme a lo descrito en esta sección y por la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD) en España.</p>
        <LegalNote>
          <strong className="text-white/75">No decisiones automatizadas.</strong> Zetio <strong className="text-white/75">no realiza decisiones automatizadas ni elaboración de perfiles con efectos jurídicos o significativos</strong> sobre ti en el sentido del Art. 22 del GDPR.
        </LegalNote>
      </LegalSection>

      {/* 4 */}
      <LegalSection number={4} title="Servicios de terceros">
        <p>Zetio utiliza los siguientes servicios de terceros para operar. Cada uno tiene su propia política de privacidad:</p>
        <LegalTable
          headers={['Servicio', 'Propósito', 'Datos compartidos', 'Política de privacidad']}
          rows={[
            [<strong className="text-white/75">Supabase</strong>, 'Base de datos, autenticación, almacenamiento y Edge Functions', 'Datos de cuenta, perfil, torneos, retas, coaching y sesión', <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">supabase.com/privacy</a>],
            [<strong className="text-white/75">Google OAuth</strong>, 'Autenticación con cuenta Google', 'Correo, nombre, foto de perfil', <a href="https://google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">google.com/privacy</a>],
            [<strong className="text-white/75">Firebase Cloud Messaging (Google)</strong>, 'Notificaciones push en Android', 'Token del dispositivo', <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">firebase.google.com/support/privacy</a>],
            [<strong className="text-white/75">Apple Push Notification service (APNs)</strong>, 'Notificaciones push en iOS', 'Token del dispositivo', <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">apple.com/legal/privacy</a>],
            [<strong className="text-white/75">OpenStreetMap / Nominatim</strong>, 'Geocodificación inversa (convertir coordenadas en nombre de ciudad)', 'Coordenadas de ubicación aproximada', <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">osmfoundation.org/wiki/Privacy_Policy</a>],
            [<strong className="text-white/75">Capacitor In-App Review</strong>, 'Calificación in-app (iOS SKStoreReviewController / Android Play In-App Reviews API)', 'Ningún dato personal — el prompt es nativo del sistema operativo', <a href="https://capacitorjs.com/docs/apis/in-app-review" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">capacitorjs.com/docs/apis/in-app-review</a>],
          ]}
        />
        <p className="text-white/70 font-medium mt-4">Servicios adicionales que se consultan pero <strong className="text-white/75">no reciben datos personales:</strong></p>
        <LegalList items={[
          <><strong className="text-white/75">Unsplash</strong> — Imágenes decorativas (solo se cargan imágenes, no se envían datos de usuario)</>,
        ]} />
        <p className="mt-2">
          La lista de países del selector de nacionalidad es una <strong className="text-white/75">lista estática incluida en la propia app</strong> (no se consulta ningún servicio externo); el estado y la ciudad donde juegas se ingresan como texto libre. Zetio ya no depende de APIs externas de terceros para esta información.
        </p>
        <LegalNote>
          <strong className="text-white/75">Procesadores de pago.</strong> Zetio <strong className="text-white/75">no utiliza actualmente ningún procesador de pagos externo</strong> como parte del flujo operativo de la app (ver sección 1.4). Si en el futuro integramos un procesador (por ejemplo, Stripe), esta tabla y esta sección se actualizarán con al menos 30 días de anticipación.
        </LegalNote>
        <p className="mt-3">
          <strong className="text-white/75">Rol como encargados del tratamiento.</strong> Todos los proveedores listados en la tabla anterior actúan como <strong className="text-white/75">encargados del tratamiento de datos (data processors)</strong> en los términos del Art. 28 del GDPR y los artículos aplicables de la LFPDPPP. Procesan la información únicamente bajo las instrucciones de Zetio y para la prestación del Servicio. Zetio <strong className="text-white/75">no vende ni comparte datos personales con terceros para fines comerciales o publicitarios</strong>, ni firma acuerdos de intercambio de datos para marketing cruzado entre aplicaciones.
        </p>
        <p className="mt-2">
          <strong className="text-white/75">Transferencias internacionales.</strong> Cuando los datos se transfieran fuera del Espacio Económico Europeo, se aplicarán las <strong className="text-white/75">Cláusulas Contractuales Tipo (SCCs)</strong> aprobadas por la Comisión Europea o garantías equivalentes, según corresponda.
        </p>
        <LegalNote>
          <strong className="text-white/75">Firebase Analytics.</strong> Zetio utiliza Firebase Cloud Messaging únicamente para notificaciones push. Firebase Analytics está <strong className="text-white/75">desactivado de forma explícita</strong> en la configuración de la app y no recolecta eventos de uso.
        </LegalNote>
        <LegalNote>
          <strong className="text-white/75">Función de compartir.</strong> La función para compartir torneos, retas, tarjetas de resultados, perfiles y códigos de amigo utiliza el sistema nativo de compartir del dispositivo (<Code>@capacitor/share</Code>) o la Web Share API del navegador. La generación de imágenes para compartir ocurre <strong className="text-white/75">100 % en tu dispositivo</strong>; Zetio no envía esas imágenes a ningún servidor propio ni de terceros. La información compartida se entrega directamente por el sistema operativo a la aplicación de destino que tú elijas.
        </LegalNote>
      </LegalSection>

      {/* 5 */}
      <LegalSection number={5} title="Almacenamiento y seguridad">
        <SubHeading>5.1 Dónde almacenamos tus datos</SubHeading>
        <LegalList items={[
          <><strong className="text-white/75">Servidor:</strong> Tus datos se almacenan en servidores de Supabase con cifrado en reposo y en tránsito (TLS/SSL).</>,
          <>
            <strong className="text-white/75">Dispositivo:</strong> Se almacena localmente en tu dispositivo:
            <ul className="list-none space-y-2 mt-2">
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">›</span>
                <span><strong className="text-white/75">Tu sesión de autenticación.</strong> En <strong className="text-white/75">iOS y Android</strong>, se guarda en almacenamiento cifrado a nivel de sistema operativo (<strong className="text-white/75">Keychain</strong> en iOS, <strong className="text-white/75">Keystore</strong> en Android, vía <Code>@aparajita/capacitor-secure-storage</Code>) — no en el almacenamiento web de la aplicación. En la <strong className="text-white/75">versión web/PWA</strong>, se guarda en <Code>localStorage</Code> del navegador. Se elimina al cerrar sesión.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">›</span>
                <span>Preferencias de idioma, tema, módulo seleccionado por última vez, rol de coach elegido y estado de notificaciones</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">›</span>
                <span>Una caché de tu ubicación aproximada (máximo 24 horas)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">›</span>
                <span>Un <strong className="text-white/75">recordatorio de tus últimas 3 cuentas usadas</strong> en este dispositivo (correo electrónico, nombre para mostrar y método de acceso) para agilizar el inicio de sesión. Hoy no existe un control dentro de la app para borrar este recordatorio de forma individual; se elimina si borras los datos de la aplicación o la desinstalas.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1 shrink-0">›</span>
                <span>Un dato <strong className="text-white/75">temporal de verificación pendiente</strong> (tu correo electrónico y la marca de tiempo del registro) mientras confirmas tu cuenta con el código de verificación; se elimina automáticamente al verificar tu cuenta o al cancelar.</span>
              </li>
            </ul>
          </>,
          <><strong className="text-white/75">Service Worker / PWA:</strong> En la versión web y en la aplicación progresiva (PWA), un Service Worker (Workbox) almacena en caché archivos de la aplicación (JavaScript, CSS, fuentes, imágenes) para el funcionamiento sin conexión y un mejor rendimiento. Esta caché contiene únicamente activos estáticos de la aplicación, <strong className="text-white/75">no datos personales</strong>.</>,
        ]} />

        <SubHeading>5.2 Medidas de seguridad</SubHeading>
        <LegalList items={[
          'Las contraseñas se almacenan como hash criptográfico; nunca en texto plano.',
          'Todas las comunicaciones entre la app y el servidor usan cifrado TLS/SSL.',
          'La autenticación utiliza el flujo OAuth para máxima seguridad.',
          <><strong className="text-white/75">Row Level Security (RLS):</strong> El acceso a tus datos personales, torneos, retas, métricas deportivas de Zetio Coach, notificaciones y tickets de soporte está restringido a nivel <strong className="text-white/75">servidor</strong> mediante políticas de Row Level Security de Supabase. Esto significa que un usuario únicamente puede acceder a los datos a los que tiene permiso explícito (sus propios datos, datos de torneos o retas en los que participa como jugador o como anfitrión, o datos de los jugadores vinculados a él como coach tras la aceptación mutua). Estas políticas se aplican en la base de datos, no en el cliente, lo que impide el acceso cruzado entre usuarios incluso si la aplicación cliente fuera modificada.</>,
          'Los tokens de sesión se renuevan periódicamente y se invalidan al cerrar sesión.',
          <>Los registros de depuración (logs) en la <strong className="text-white/75">versión de producción</strong> están limitados a información operativa mínima y <strong className="text-white/75">no almacenan datos personales identificables</strong> (correos, contraseñas, tokens, contenido de mensajes o ubicación precisa).</>,
          <><strong className="text-white/75">Notificación de incidentes.</strong> En caso de un incidente que afecte la confidencialidad, integridad o disponibilidad de tus datos, Zetio notificará a la autoridad de protección de datos competente en un plazo máximo de <strong className="text-white/75">72 horas</strong> desde su detección, conforme al Art. 33 del GDPR y a la normativa local aplicable. Si el incidente representa un riesgo alto para tus derechos y libertades, te notificaremos también directamente.</>,
        ]} />

        <SubHeading>5.3 Retención de datos</SubHeading>
        <p>Conservamos tu información mientras mantengas una cuenta activa en Zetio. Si solicitas la eliminación de tu cuenta:</p>
        <LegalList items={[
          <>El <strong className="text-white/75">borrado lógico es inmediato</strong> al confirmar la acción: tu cuenta deja de ser accesible y tu información no aparece en ningún flujo activo del Servicio.</>,
          <>El <strong className="text-white/75">borrado físico completo</strong> (incluyendo copias de seguridad y réplicas de disaster recovery) se completa en un plazo máximo de <strong className="text-white/75">30 días naturales</strong>.</>,
          'Los datos que debamos conservar por obligación legal o fiscal aplicable se almacenarán únicamente por el período mínimo requerido por la legislación correspondiente.',
        ]} />
      </LegalSection>

      {/* 6 */}
      <LegalSection number={6} title="Tus derechos">
        <SubHeading>6.1 Derechos ARCO (México — LFPDPPP)</SubHeading>
        <p>De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México y otras leyes aplicables, tienes derecho a:</p>
        <LegalList items={[
          <><strong className="text-white/75">Acceso:</strong> Solicitar una copia de los datos personales que tenemos sobre ti.</>,
          <><strong className="text-white/75">Rectificación:</strong> Corregir datos inexactos o incompletos. Puedes actualizar la mayoría de tus datos directamente desde la sección de edición de perfil en la app.</>,
          <><strong className="text-white/75">Cancelación:</strong> Solicitar la eliminación de tu cuenta y datos personales.</>,
          <><strong className="text-white/75">Oposición:</strong> Oponerte al tratamiento de tus datos para fines específicos.</>,
        ]} />
        <p className="mt-3">Para ejercer tus derechos ARCO, envía un correo a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a> con:</p>
        <LegalList items={[
          'Tu nombre completo',
          'El correo electrónico asociado a tu cuenta',
          'Una descripción clara de tu solicitud',
          'Una copia de identificación oficial (para verificar tu identidad)',
        ]} />
        <LegalNote>
          La copia de identificación que nos proporciones se utilizará <strong className="text-white/75">exclusivamente para verificar tu identidad</strong> y se eliminará de forma segura tras completar la verificación, en un plazo máximo de <strong className="text-white/75">30 días</strong>. No se conservará, no se utilizará para ningún otro fin ni se compartirá con terceros.
        </LegalNote>
        <p className="mt-2">
          Responderemos en un plazo máximo de <strong className="text-white/75">20 días hábiles</strong> conforme a la ley. Si tu solicitud procede, la haremos efectiva dentro de los <strong className="text-white/75">15 días hábiles</strong> siguientes a la respuesta. Ambos plazos pueden ampliarse una sola vez por un período igual cuando las circunstancias del caso lo justifiquen.
        </p>

        <SubHeading>6.2 Derechos extendidos (GDPR — Usuarios de la UE/EEE)</SubHeading>
        <p>Si te encuentras en la Unión Europea o el Espacio Económico Europeo, además de los derechos ARCO, tienes derecho a:</p>
        <LegalList items={[
          <><strong className="text-white/75">Portabilidad:</strong> Solicitar una copia de tus datos en un formato estructurado, de uso común y legible por máquina, para transferirlos a otro responsable del tratamiento.</>,
          <><strong className="text-white/75">Restricción del tratamiento:</strong> Solicitar que limitemos el uso de tus datos en circunstancias específicas (por ejemplo, mientras se verifica la exactitud de los datos o se evalúa una objeción).</>,
          <><strong className="text-white/75">Reclamación ante autoridad supervisora:</strong> Tienes derecho a presentar una reclamación ante la autoridad de protección de datos de tu país de la UE/EEE si consideras que el tratamiento de tus datos infringe el GDPR.</>,
        ]} />

        <SubHeading>6.3 Eliminación de cuenta</SubHeading>
        <p>Puedes eliminar tu cuenta y todos tus datos personales directamente desde la app, sin necesidad de contactar a soporte:</p>
        <p className="text-white/70 font-medium mt-2">Cómo eliminar tu cuenta en la app:</p>
        <StepList steps={[
          <>Ve a <strong className="text-white/75">Ajustes</strong> (icono de engranaje en la barra de navegación)</>,
          <>Selecciona <strong className="text-white/75">Editar perfil</strong></>,
          'Desplázate hasta el final de la página',
          <>Pulsa <strong className="text-white/75">Eliminar cuenta</strong> y sigue el proceso de confirmación</>,
        ]} />
        <p className="mt-3">Al eliminar tu cuenta se realizan las siguientes acciones de forma inmediata e irreversible:</p>
        <LegalList items={[
          'Se borrarán tus datos de perfil, historial de partidos, amigos, tokens de push, preferencias, tickets de soporte y respuestas de encuestas.',
          <>Se borrarán tus <strong className="text-white/75">métricas deportivas, sesiones de entrenamiento, partidos supervisados, notas del coach, registros internos de pagos de coaching y vínculos coach-jugador</strong> asociados a tu cuenta (tanto si actuabas como coach como si eras jugador vinculado).</>,
          <>Los resultados de torneos y retas en los que participaste se <strong className="text-white/75">anonimizarán</strong> (se elimina la referencia a tu usuario) para mantener la integridad histórica de los torneos y rankings.</>,
          'Los datos que debamos conservar por obligación legal aplicable se almacenarán únicamente por el período mínimo requerido por la legislación correspondiente.',
        ]} />
        <p className="mt-2">Si tienes algún problema para eliminar tu cuenta desde la app, también puedes solicitarlo por correo a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>.</p>
        <LegalNote>
          <strong className="text-white/75">Importante:</strong> <em>Ser removido de una reta por el host</em> (ver sección 1.3) <strong className="text-white/75">no es lo mismo que eliminar tu cuenta</strong>. Si el host te remueve de una reta, simplemente dejas de tener acceso a esa reta en particular; tu cuenta de Zetio, tu perfil, tus amigos, tu historial en otros torneos/retas y todos tus demás datos <strong className="text-white/75">permanecen intactos</strong>. La eliminación de cuenta descrita en esta sección es una acción que solo tú puedes iniciar desde tus Ajustes.
        </LegalNote>
      </LegalSection>

      {/* 7 */}
      <LegalSection number={7} title="Menores de edad">
        <p>
          Zetio está dirigido a personas de <strong className="text-white/80">13 años o más</strong>. No recopilamos intencionadamente información de menores de 13 años. Si eres padre o tutor y crees que un menor de 13 años nos ha proporcionado datos personales, contáctanos a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a> y eliminaremos dicha información.
        </p>
        <p className="mt-2">
          Los usuarios entre 13 y 17 años solo pueden utilizar Zetio con el consentimiento de un padre, madre o tutor legal. Este consentimiento debe ser otorgado fuera de la plataforma y es responsabilidad del usuario y de su tutor. Zetio no verifica de forma independiente la obtención de dicho consentimiento, pero se reserva el derecho de restringir, suspender o eliminar cuentas si detecta uso indebido por menores sin autorización o sin cumplimiento de la edad mínima aplicable en la jurisdicción del usuario (p. ej. 16 años en algunos países de la UE conforme al GDPR Art. 8).
        </p>
        <p className="text-white/70 font-medium mt-4">Menores en Zetio Coach</p>
        <p>El módulo Zetio Coach permite que un coach establezca un vínculo con un jugador menor de edad para registrar sesiones, partidos y métricas deportivas. Cuando el jugador vinculado es menor de edad:</p>
        <LegalList items={[
          <>El <strong className="text-white/75">consentimiento explícito del padre, madre o tutor legal</strong> es un requisito indispensable antes de que el jugador acepte la invitación de vínculo y antes de que el coach registre cualquier dato deportivo del menor.</>,
          <>El coach es <strong className="text-white/75">responsable de obtener y conservar evidencia</strong> de dicho consentimiento, así como de informar al tutor sobre qué datos se registrarán y con qué finalidad.</>,
          <>El padre, madre o tutor legal puede en cualquier momento solicitar el acceso, rectificación o eliminación de los datos del menor escribiendo a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>, y puede solicitar la ruptura del vínculo con el coach desde la propia app a través de la cuenta del menor.</>,
        ]} />
      </LegalSection>

      {/* 8 */}
      <LegalSection number={8} title="Transferencias internacionales">
        <p>
          Tus datos pueden ser procesados en servidores ubicados fuera de México (principalmente, infraestructura de Supabase y los servicios de notificación push de Google/Apple). En todos los casos, estos proveedores mantienen estándares de seguridad equivalentes o superiores a los requeridos por la legislación mexicana y cumplen con certificaciones internacionales de protección de datos (incluyendo, según corresponda, las cláusulas contractuales tipo de la UE para transferencias de datos internacionales).
        </p>
      </LegalSection>

      {/* 9 */}
      <LegalSection number={9} title="Cookies y tecnologías similares">
        <p>
          Zetio <strong className="text-white/80">no utiliza cookies propias de rastreo ni tecnologías de publicidad</strong>. Utilizamos almacenamiento local del dispositivo exclusivamente para:
        </p>
        <LegalList items={[
          <>Mantener tu sesión activa — en Keychain/Keystore (iOS/Android nativo) o <Code>localStorage</Code> (web); ver sección 5.1 para el detalle.</>,
          'Guardar tus preferencias de idioma y tema (claro/oscuro), módulo seleccionado, rol de coach y estado de notificaciones',
          'Cachear tu ubicación para evitar consultas repetidas al GPS (máximo 24 horas)',
          'Recordar tus últimas 3 cuentas usadas en este dispositivo para agilizar el inicio de sesión',
          'Recordar de forma temporal una verificación de cuenta pendiente (tu correo y la hora de registro) para permitirte retomar el ingreso del código; se elimina al completar o cancelar la verificación',
        ]} />
        <p className="mt-2">
          Estos datos son estrictamente funcionales y no se comparten con terceros. Los datos de sesión y de verificación pendiente se eliminan al cerrar sesión o completarse; las preferencias y el recordatorio de cuentas persisten hasta que borres los datos de la app o la desinstales.
        </p>
      </LegalSection>

      {/* 10 */}
      <LegalSection number={10} title="Notificaciones push">
        <p>Zetio envía notificaciones push sobre:</p>
        <LegalList items={[
          'Actualizaciones de torneos y retas en los que participas',
          'Resultados de partidos',
          'Confirmaciones de inscripción y de unión a retas',
          'Solicitudes de amistad recibidas o aceptadas',
          'Invitaciones de vínculo coach-jugador (y eventos operativos de Zetio Coach como sesiones agendadas)',
          'Recordatorios de partidos y entrenamientos próximos',
          'Información relevante sobre tus competencias',
        ]} />
        <p className="mt-2">
          Las notificaciones push son <strong className="text-white/80">operativas y no publicitarias</strong>. No enviamos mensajes de marketing ni promociones sin tu consentimiento explícito.
        </p>
        <p className="mt-2">
          Puedes desactivar las notificaciones en cualquier momento desde los ajustes de tu dispositivo. Al desactivarlas, el token de push se marca como inactivo en nuestros servidores.
        </p>
      </LegalSection>

      {/* 11 */}
      <LegalSection number={11} title="Analítica y publicidad">
        <LegalList items={[
          <><strong className="text-white/75">Analítica propia:</strong> Zetio utiliza un sistema de analítica <strong className="text-white/75">interno y propio</strong> para medir el uso del Servicio. Registramos eventos de alto nivel como inicios de sesión, inscripciones a torneos, creación de retas en Zetio Play, partidos completados, invitaciones y aceptaciones de amigos, y eventos de la encuesta de experiencia — estos últimos pueden incluir el contenido concreto de tu respuesta (por ejemplo, la ciudad donde juegas) junto con el evento. Junto a cada evento se almacena el identificador de sesión, la plataforma del dispositivo y el código de país derivado de la ubicación aproximada. Estos eventos <strong className="text-white/75">requieren una cuenta autenticada</strong> — el sistema de analítica no registra eventos en modo invitado. Estos datos se almacenan en nuestros propios servidores (Supabase) en la tabla <Code>analytics_events</Code>, <strong className="text-white/75">no se comparten con ningún tercero</strong>, y se usan exclusivamente para mejorar el Servicio y entender cómo se utiliza. No utilizamos Google Analytics, Firebase Analytics, Mixpanel, Sentry, PostHog ni ninguna plataforma de analítica de terceros.</>,
          <><strong className="text-white/75">Publicidad:</strong> Zetio <strong className="text-white/75">no muestra publicidad de terceros</strong> ni utiliza SDKs publicitarios (no usamos AdMob, Facebook Ads ni similares). No compartimos datos con redes publicitarias.</>,
          <><strong className="text-white/75">Rastreo:</strong> Zetio <strong className="text-white/75">no rastrea</strong> a sus usuarios según la definición del App Tracking Transparency (ATT) de Apple. Los datos de analítica que recopilamos son de uso estrictamente interno y no se combinan con datos de otras aplicaciones o sitios web.</>,
        ]} />
      </LegalSection>

      {/* 12 */}
      <LegalSection number={12} title="Derechos de los usuarios de California (CCPA/CPRA)">
        <p>
          Si resides en el estado de California (EE.UU.), la Ley de Privacidad del Consumidor de California (CCPA) y la Ley de Derechos de Privacidad de California (CPRA) te otorgan los siguientes derechos adicionales.
        </p>
        <LegalNote>
          <strong className="text-white/75">Zetio no vende ni comparte tu información personal</strong> con terceros para fines de publicidad conductual entre contextos.
        </LegalNote>
        <p className="text-white/70 font-medium mt-3">Categorías de información personal recopilada en los últimos 12 meses:</p>
        <LegalList items={[
          <><strong className="text-white/75">Identificadores:</strong> Correo electrónico, nombre, número de teléfono, identificador de dispositivo</>,
          <><strong className="text-white/75">Información de perfil:</strong> Fecha de nacimiento, sexo, preferencias deportivas, ciudad/estado</>,
          <><strong className="text-white/75">Información de ubicación:</strong> Ubicación aproximada (coarse location, no GPS preciso)</>,
          <><strong className="text-white/75">Información de actividad en internet/app:</strong> Eventos de sesión y uso del Servicio</>,
          <><strong className="text-white/75">Información profesional/deportiva:</strong> Métricas de rendimiento, historial de entrenamientos, sesiones agendadas, estadísticas de partidos y notas del coach (Zetio Coach, únicamente con vínculo aceptado)</>,
          <><strong className="text-white/75">Información de inferencia:</strong> Estilo de juego, frecuencia y preferencias (de encuesta voluntaria)</>,
        ]} />
        <p className="text-white/70 font-medium mt-3">Como residente de California tienes derecho a:</p>
        <LegalList items={[
          <><strong className="text-white/75">Conocer</strong> qué información personal se recopila, usa y comparte.</>,
          <><strong className="text-white/75">Eliminar</strong> tu información personal (ver sección 6.3 para el proceso de eliminación de cuenta).</>,
          <><strong className="text-white/75">Corregir</strong> información personal inexacta.</>,
          <><strong className="text-white/75">Optar por no participar</strong> en la venta o el intercambio de información personal (Zetio <strong className="text-white/75">no realiza</strong> dicha venta o intercambio).</>,
          <><strong className="text-white/75">No ser discriminado</strong> por ejercer cualquiera de estos derechos.</>,
        ]} />
        <p className="mt-3">Para ejercer tus derechos CCPA, contacta a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>.</p>
        <p className="mt-2">
          <strong className="text-white/75">Señales de opt-out del navegador (Global Privacy Control).</strong> Como Zetio no vende ni comparte información personal para publicidad conductual entre contextos, no hay ninguna venta/uso compartido del cual optar por no participar. Aun así, si tu navegador envía una señal de <strong className="text-white/75">Global Privacy Control (GPC)</strong> u otra señal de preferencia de opt-out reconocida, la respetamos como si hubieras ejercido tu derecho a no participar — aunque, dado que no vendemos ni compartimos datos, esto no cambia ningún tratamiento activo de tu información.
        </p>
      </LegalSection>

      {/* 13 */}
      <LegalSection number={13} title="Cambios a esta política">
        <p>Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando lo hagamos:</p>
        <LegalList items={[
          'Actualizaremos la fecha de "Última actualización" al inicio de este documento.',
          'Si los cambios son significativos, te notificaremos a través de la app o por correo electrónico.',
          'El uso continuado del Servicio después de los cambios constituye tu aceptación de la política actualizada.',
        ]} />
      </LegalSection>

      {/* 14 */}
      <LegalSection number={14} title="Contacto">
        <p>Si tienes preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad o el tratamiento de tus datos personales, puedes contactarnos en:</p>
        <div className="mt-3 p-4 rounded-xl border border-white/7 bg-white/2 space-y-1.5">
          <p><span className="text-white/80 font-medium">Email:</span>{' '}<a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a></p>
          <p><span className="text-white/80 font-medium">Titular:</span> Diego Diaz</p>
          <p><span className="text-white/80 font-medium">Aplicación:</span> Zetio — plataforma de pádel: torneos estructurados, retas casuales y gestión de coach-jugador</p>
          <p><span className="text-white/80 font-medium">Sitio web:</span>{' '}<a href="https://zetio.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetio.app</a></p>
        </div>
      </LegalSection>

      {/* 15 */}
      <LegalSection number={15} title="Legislación aplicable">
        <p>
          Esta Política de Privacidad se rige principalmente por la <strong className="text-white/80">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> de México y su Reglamento.
        </p>
        <p className="mt-2">Para usuarios en otras jurisdicciones, se aplicarán adicionalmente las siguientes leyes en la medida que sean aplicables:</p>
        <LegalTable
          headers={['Región', 'Ley aplicable', 'Derechos adicionales']}
          rows={[
            [<strong className="text-white/75">Unión Europea / EEE</strong>, 'GDPR (Reglamento 2016/679)', 'Portabilidad, restricción del tratamiento, reclamación ante autoridad supervisora (sección 6.2)'],
            [<strong className="text-white/75">Brasil</strong>, 'LGPD (Lei Geral de Proteção de Dados — Lei nº 13.709/2018)', <>Derechos equivalentes al GDPR; contacto: <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a></>],
            [<strong className="text-white/75">California, EE.UU.</strong>, 'CCPA / CPRA', 'Ver sección 12'],
            [<strong className="text-white/75">Argentina</strong>, 'Ley 25.326 de Protección de Datos Personales (con estatus de adecuación reconocido por la Unión Europea desde enero de 2024)', 'Derechos de acceso, rectificación, supresión'],
            [<strong className="text-white/75">Colombia</strong>, 'Ley 1581 de 2012', 'Derechos de acceso, corrección, supresión'],
            [<strong className="text-white/75">Demás jurisdicciones</strong>, 'Leyes locales de protección de datos aplicables', <>Contactar a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a> para solicitudes específicas</>],
          ]}
        />
        <p className="mt-3">En caso de conflicto entre legislaciones, se aplicará la normativa que otorgue mayor protección al usuario.</p>
      </LegalSection>

      {/* 16 */}
      <LegalSection number={16} title="Clasificación de datos (Apple App Store y Google Play)">
        <p>
          Esta sección alinea la información declarada en los formularios de <strong className="text-white/80">Apple Privacy Nutrition Labels</strong> (App Store Connect) y <strong className="text-white/80">Google Play Data Safety</strong> con el tratamiento real descrito en esta política.
        </p>

        <SubHeading>16.1 Datos vinculados a tu identidad (Data Linked to You)</SubHeading>
        <p>Los siguientes datos se recopilan y <strong className="text-white/75">sí</strong> están vinculados a tu cuenta, porque son necesarios para prestar el Servicio:</p>
        <LegalTable
          headers={['Categoría Apple / Google', 'Datos concretos', 'Uso']}
          rows={[
            ['Información de contacto', 'Correo electrónico, nombre, teléfono', 'Autenticación, perfil, soporte'],
            ['Identificadores', 'Identificador de usuario, token de push', 'Funcionamiento del Servicio, notificaciones'],
            ['Ubicación aproximada', 'Coordenadas, ciudad, estado', 'Mostrar torneos cercanos (solo con consentimiento)'],
            ['Datos de usuario', 'Fecha de nacimiento, sexo, ciudad/club/estilo de juego', 'Elegibilidad en categorías, personalización'],
            ['Contenido del usuario', 'Resultados, partidos, notas de coach, tickets de soporte', 'Funcionalidad deportiva y soporte'],
            ['Uso de la app', 'Eventos de sesión y uso interno', 'Analítica propia para mejorar el Servicio'],
          ]}
        />

        <SubHeading>16.2 Datos NO vinculados a tu identidad (Data Not Linked to You)</SubHeading>
        <LegalList items={[
          'Eventos de analítica en Modo Invitado (sin cuenta creada)',
          'Métricas agregadas de uso a nivel de plataforma',
          'Código de país derivado de la ubicación aproximada a efectos estadísticos',
        ]} />
        <p className="mt-2">Estos datos <strong className="text-white/75">no permiten identificar personalmente al usuario</strong>.</p>

        <SubHeading>16.3 Datos utilizados para rastreo (Tracking)</SubHeading>
        <p>
          <strong className="text-white/75">Zetio no utiliza datos para rastreo entre aplicaciones o sitios web de terceros</strong> según la definición del App Tracking Transparency (ATT) de Apple ni de Google Play. No integramos SDKs publicitarios, no compartimos identificadores con brokers de datos y no participamos en redes de atribución cruzada.
        </p>
      </LegalSection>

      <p className="text-white/20 text-xs text-center pt-4">© 2026 Zetio. Todos los derechos reservados.</p>
    </LegalLayout>
  )
}