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

export default function Privacy() {
  return (
    <LegalLayout
      badge="Legal · Privacidad"
      title="Política de Privacidad"
      updated="18 de abril de 2026"
    >
      {/* Intro */}
      <section>
        <div className="text-white/55 text-sm sm:text-base leading-relaxed space-y-3">
          <p>
            Bienvenido a <strong className="text-white/80">Zetio</strong>. Esta Política de Privacidad describe cómo <strong className="text-white/80">Diego Diaz</strong> ("nosotros", "nuestro" o "Zetio") recopila, usa, almacena y protege tu información cuando utilizas la aplicación móvil Zetio y los servicios asociados (en conjunto, el "Servicio").
          </p>
          <p>Zetio es una plataforma de pádel compuesta por tres módulos, cada uno con tratamientos de datos específicos:</p>
          <LegalList items={[
            <><strong className="text-white/80">Zetio Torneos</strong> — organización y participación en torneos estructurados con inscripciones, categorías, fases de grupos y eliminatorias.</>,
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
            [<strong className="text-white/75">Cuenta</strong>, 'Correo electrónico, contraseña (almacenada como hash, nunca en texto plano)', 'Crear y autenticar tu cuenta'],
            [<strong className="text-white/75">Perfil</strong>, 'Nombre, apellido paterno, apellido materno', 'Identificarte como jugador en torneos, retas y sesiones de coaching'],
            [<strong className="text-white/75">Datos personales</strong>, 'Fecha de nacimiento, sexo', 'Validar tu elegibilidad en categorías de torneo por edad y género'],
            [<strong className="text-white/75">Contacto</strong>, 'Número de teléfono', 'Información de perfil y contacto entre jugadores'],
            [<strong className="text-white/75">Ubicación del perfil</strong>, 'Nacionalidad, estado, ciudad', 'Mostrar tu ubicación en tu perfil'],
            [<strong className="text-white/75">Preferencias</strong>, 'Deporte preferido (ej. pádel)', 'Personalizar tu experiencia'],
            [<strong className="text-white/75">Encuesta de experiencia</strong>, 'Ciudad, estado y país donde juegas pádel; club; estilo de juego; frecuencia semanal; cómo conociste Zetio; funcionalidades de interés; intención de participar en torneos', 'Personalizar el contenido y las funcionalidades. Su aportación es completamente voluntaria: puedes saltar cualquier pregunta sin que ello afecte al funcionamiento del Servicio'],
          ]}
        />
        <LegalNote>
          El dato de <strong className="text-white/75">sexo</strong> se considera categoría especial bajo el Art. 9 del GDPR. Se trata con base en tu <strong className="text-white/75">consentimiento explícito</strong> otorgado al registrarte y se utiliza únicamente para determinar elegibilidad en categorías por género en torneos y retas.
        </LegalNote>

        <SubHeading>1.2 Información recopilada automáticamente</SubHeading>
        <LegalTable
          headers={['Categoría', 'Datos', 'Propósito']}
          rows={[
            [<strong className="text-white/75">Ubicación del dispositivo</strong>, 'Coordenadas aproximadas (latitud/longitud), ciudad, estado, país, código postal', 'Mostrarte torneos cercanos a tu zona. La ubicación se obtiene únicamente tras tu consentimiento explícito mediante el sistema de permisos del dispositivo (iOS/Android). Precisión reducida (red/WiFi, no GPS fino), actualizada máximo cada 24 horas.'],
            [<strong className="text-white/75">Token de push</strong>, 'Identificador único del dispositivo para notificaciones, plataforma (iOS/Android)', 'Enviarte notificaciones operativas sobre torneos, retas, partidos, invitaciones de amistad y vínculo coach-jugador'],
            [<strong className="text-white/75">Datos de sesión</strong>, 'Token de sesión, identificador de sesión (UUID), timestamps de actividad', 'Mantener tu sesión activa y segura'],
            [<strong className="text-white/75">Plataforma del dispositivo</strong>, 'Sistema operativo utilizado (iOS, Android o web)', 'Compatibilidad técnica y estadísticas internas de uso'],
            [<strong className="text-white/75">Código de país</strong>, 'País derivado de tu ubicación aproximada (p. ej. MX, US, ES)', 'Personalización regional y estadísticas internas'],
          ]}
        />

        <SubHeading>1.3 Información de torneos, retas y partidos</SubHeading>
        <p>Cuando participas en los módulos Zetio Torneos y Zetio Play, generamos y almacenamos:</p>

        <p className="text-white/70 font-medium mt-3">Zetio Torneos (torneos estructurados):</p>
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
          <>Un <strong className="text-white/75">código de invitación</strong> (<code className="text-primary/80 text-xs bg-white/5 px-1 rounded">invite_code</code>) único por reta que puedes compartir con otros jugadores para que se unan</>,
          <>Lista de jugadores de cada reta. Una reta puede incluir <strong className="text-white/75">jugadores manuales</strong> (sin cuenta en Zetio): en ese caso únicamente se almacena el nombre de texto libre que introduce el organizador, sin datos de contacto ni identificación adicional</>,
          'Jornadas, partidos, marcadores, rankings parciales y finales',
          'Histórico del ranking final al cerrar la reta (snapshot agregado)',
        ]} />

        <p className="text-white/70 font-medium mt-3">Sistema de amigos (<code className="text-primary/80 text-xs bg-white/5 px-1 rounded">friend_code</code>):</p>
        <p className="mt-2">
          Zetio asigna a cada usuario un <strong className="text-white/75">código de amigo</strong> único. Este código es un <strong className="text-white/75">identificador público dentro de la plataforma</strong>: cualquier otro usuario registrado que conozca tu código puede localizarte para enviarte una solicitud de amistad. El código <strong className="text-white/75">no es secreto</strong>; compartirlo es una acción deliberada y equivalente a darle a alguien tu nombre de usuario público. Una solicitud de amistad <strong className="text-white/75">no</strong> otorga acceso automático a tus datos: debe ser aceptada por ambas partes. Zetio <strong className="text-white/75">no accede a la libreta de contactos de tu dispositivo</strong> en ningún momento.
        </p>

        <p className="text-white/70 font-medium mt-4">Visibilidad del perfil y datos dentro de la plataforma</p>
        <p className="mt-2">Al utilizar Zetio, aceptas que ciertos datos formen parte de la experiencia social de la plataforma. Esto incluye:</p>
        <LegalList items={[
          'Tu nombre de usuario',
          'Resultados de partidos',
          'Estadísticas deportivas generadas en torneos, retas y coaching',
        ]} />
        <p className="mt-2">
          Estos datos pueden ser visibles para otros usuarios dentro del mismo contexto (torneos, retas o vínculo coach-jugador), pero <strong className="text-white/75">nunca incluyen información privada</strong> como correo electrónico, teléfono o fecha de nacimiento.
        </p>

        <SubHeading>1.4 Información de pagos</SubHeading>
        <p>Actualmente Zetio <strong className="text-white/75">no procesa pagos en línea</strong> dentro de la aplicación:</p>
        <LegalList items={[
          'Las inscripciones a torneos se gestionan mediante un flujo de reservación sin cobro dentro de la app; cualquier pago asociado se coordina de forma externa entre el organizador del torneo y el jugador.',
          'Los pagos de sesiones de Zetio Coach se registran internamente como una herramienta de seguimiento para el coach (marcar una sesión como "pendiente" o "pagada"), sin intervenir en ninguna transacción financiera real ni en el movimiento de dinero.',
          'Zetio no recopila, almacena ni tiene acceso a datos de tarjetas, cuentas bancarias, credenciales de pago ni ningún dato financiero sensible.',
        ]} />
        <p className="mt-2">
          En caso de que en el futuro Zetio integre un procesador de pagos externo (por ejemplo, Stripe), actualizaremos esta Política de Privacidad con <strong className="text-white/75">al menos 30 días de anticipación</strong> antes de activar dicha integración.
        </p>

        <SubHeading>1.5 Modo Invitado (Guest Mode)</SubHeading>
        <p>Zetio Play permite acceder al módulo de retas casuales <strong className="text-white/75">sin necesidad de crear una cuenta</strong>. En modo invitado:</p>
        <LegalList items={[
          <><strong className="text-white/75">Datos que recopilamos:</strong> Datos de sesión anónimos (sin vincular a un usuario identificado), ubicación aproximada del dispositivo (únicamente si concedes el permiso), y eventos de analítica interna anónimos para medir el uso de la funcionalidad.</>,
          <><strong className="text-white/75">Datos que NO recopilamos:</strong> Correo electrónico, contraseña, número de teléfono, fecha de nacimiento ni ningún otro dato de perfil personal.</>,
          <>Unirse a una reta con código: un usuario en modo invitado puede unirse a una reta de Zetio Play utilizando únicamente el código de invitación (<code className="text-primary/80 text-xs bg-white/5 px-1 rounded">invite_code</code>) y un nombre temporal introducido manualmente. Ese nombre se almacena asociado a la reta (no a un perfil) únicamente mientras la reta esté activa.</>,
          'Los datos de invitado no se asocian a ningún perfil permanente y se eliminan al cerrar la sesión o al crear una cuenta.',
          'Si decides crear una cuenta desde el modo invitado, se te solicitará proporcionar la información descrita en la sección 1.1.',
        ]} />

        <SubHeading>1.6 Información específica de Zetio Coach</SubHeading>
        <p>
          El módulo <strong className="text-white/75">Zetio Coach</strong> permite a un usuario actuar como <em>coach</em> (entrenador) y gestionar la relación con sus <em>jugadores</em>. Un mismo usuario puede desempeñar ambos roles simultáneamente.
        </p>

        <p className="text-white/70 font-medium mt-3">Vínculo coach ↔ jugador (consentimiento explícito):</p>
        <StepList steps={[
          'El coach envía una invitación al jugador desde la app. El jugador recibe una notificación con el nombre del coach.',
          'El vínculo permanece en estado pendiente hasta que el jugador lo acepta explícitamente. Mientras esté pendiente, no se comparten datos del jugador con el coach.',
          'Al aceptar, el vínculo pasa a activo y el coach comienza a poder registrar información deportiva del jugador.',
          'Tanto el coach como el jugador pueden romper el vínculo en cualquier momento desde la app, lo que detiene inmediatamente el acceso del coach a datos futuros del jugador.',
        ]} />

        <p className="text-white/70 font-medium mt-3">Datos que un coach registra sobre sus jugadores vinculados:</p>
        <LegalList items={[
          'Sesiones de entrenamiento agendadas: fecha, hora y participantes de cada sesión.',
          'Partidos supervisados: fecha, club/ubicación, tipo de partido, notas del coach, y participantes.',
          'Estadísticas deportivas por jugador: sets jugados, puntuaciones, métricas de efectividad, agregados históricos y progresión.',
          'Notas del coach asociadas a sesiones o partidos (texto libre introducido por el coach).',
          'Jugadores manuales: un coach también puede registrar jugadores que no tienen cuenta en Zetio. En ese caso únicamente se almacena el nombre de texto libre introducido por el coach.',
        ]} />

        <LegalNote>
          <strong className="text-white/75">Naturaleza no médica de las métricas.</strong> Las métricas registradas en Zetio Coach corresponden exclusivamente a rendimiento deportivo y actividad dentro de la plataforma. Estas métricas <strong className="text-white/75">no constituyen datos médicos ni información de salud</strong> en el sentido legal o clínico (LFPDPPP, GDPR Art. 9, HIPAA o normativa equivalente), y Zetio no registra datos biométricos, lesiones, condiciones médicas ni información de salud personal.
        </LegalNote>

        <p className="text-white/70 font-medium mt-3">Visibilidad de los datos de Zetio Coach:</p>
        <LegalList items={[
          'Un coach puede ver todos los datos deportivos (sesiones, partidos, estadísticas, notas) de los jugadores que han aceptado vincularse con él.',
          'Un jugador puede ver sus propias métricas y el historial compartido con el coach con el que está vinculado.',
          'Los datos de Zetio Coach no son visibles para usuarios fuera del vínculo activo, ni aparecen en el perfil público del jugador dentro de Zetio Play o Zetio Torneos.',
          'Si el vínculo se rompe, el acceso del coach a datos futuros del jugador cesa inmediatamente; los registros históricos permanecen asociados al coach que los creó salvo solicitud de eliminación (sección 6).',
        ]} />

        <SubHeading>1.7 Soporte y consultas</SubHeading>
        <p>Cuando abres un <strong className="text-white/75">ticket de soporte</strong> desde la app o nos escribes a nuestro correo de soporte, almacenamos los siguientes datos asociados al ticket:</p>
        <LegalList items={[
          'Tipo de incidencia y prioridad',
          'Descripción del problema introducida por ti',
          'Identificador de tu cuenta de usuario (para poder responderte)',
          'Fecha y hora de creación del ticket',
        ]} />
        <p className="mt-2">Estos datos se utilizan <strong className="text-white/75">exclusivamente</strong> para atender tu consulta y darle seguimiento. No se comparten con terceros ni se utilizan para analítica agregada.</p>
      </LegalSection>

      {/* 2 */}
      <LegalSection number={2} title="Cómo usamos tu información">
        <p>Utilizamos tu información exclusivamente para:</p>
        <LegalList items={[
          <><strong className="text-white/75">Proveer el Servicio:</strong> Crear tu cuenta, gestionar tu perfil, inscribirte en torneos, organizar retas casuales, emparejar jugadores y registrar resultados.</>,
          <><strong className="text-white/75">Funcionalidad de ubicación:</strong> Mostrar torneos y eventos cercanos a tu zona geográfica.</>,
          <><strong className="text-white/75">Gestión de coaching (Zetio Coach):</strong> Facilitar la relación entre coaches y jugadores vinculados, registrar sesiones de entrenamiento, partidos supervisados y métricas deportivas, y enviar notificaciones operativas relacionadas con entrenamientos.</>,
          <><strong className="text-white/75">Personalización mediante encuesta:</strong> Las respuestas voluntarias en la encuesta de onboarding se utilizan para adaptar el contenido, sugerencias y funcionalidades que se te presentan dentro de la app. En ningún caso estos datos se comparten con terceros ni se usan para publicidad.</>,
          <><strong className="text-white/75">Notificaciones:</strong> Informarte sobre actualizaciones de tus torneos, resultados de partidos, inscripciones, invitaciones de amistad, invitaciones de vínculo coach-jugador y eventos relevantes.</>,
          <><strong className="text-white/75">Mejora del Servicio:</strong> Resolver problemas técnicos y mejorar la experiencia de usuario mediante analítica interna.</>,
          <><strong className="text-white/75">Comunicación:</strong> Responder a tickets de soporte y consultas.</>,
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
          'El consentimiento del usuario otorgado al registrarse y al aceptar los permisos solicitados por la app',
          'La ejecución del servicio solicitado por el usuario (cuenta, torneos, retas, coaching)',
          'El interés legítimo de Zetio para la mejora del Servicio, siempre subordinado a tus derechos fundamentales',
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
            [<strong className="text-white/75">Firebase Cloud Messaging (Google)</strong>, 'Notificaciones push en Android', 'Token del dispositivo', <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">firebase.google.com/support/privacy</a>],
            [<strong className="text-white/75">Apple Push Notification service (APNs)</strong>, 'Notificaciones push en iOS', 'Token del dispositivo', <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">apple.com/legal/privacy</a>],
            [<strong className="text-white/75">OpenStreetMap / Nominatim</strong>, 'Geocodificación inversa (convertir coordenadas en nombre de ciudad)', 'Coordenadas de ubicación aproximada', <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors text-xs">osmfoundation.org/wiki/Privacy_Policy</a>],
          ]}
        />
        <p className="text-white/70 font-medium mt-4">Servicios adicionales que se consultan pero <strong className="text-white/75">no reciben datos personales:</strong></p>
        <LegalList items={[
          <><strong className="text-white/75">restcountries.com</strong> — Lista de países (solo lectura)</>,
          <><strong className="text-white/75">countriesnow.space</strong> — Lista de estados y ciudades (solo lectura)</>,
          <><strong className="text-white/75">Unsplash</strong> — Imágenes decorativas (solo se cargan imágenes, no se envían datos de usuario)</>,
        ]} />
        <LegalNote>
          <strong className="text-white/75">Procesadores de pago.</strong> Zetio <strong className="text-white/75">no utiliza actualmente ningún procesador de pagos externo</strong> como parte del flujo operativo de la app. Si en el futuro integramos un procesador (por ejemplo, Stripe), esta tabla y esta sección se actualizarán con al menos 30 días de anticipación.
        </LegalNote>
        <p className="mt-3">
          Todos los proveedores listados actúan como <strong className="text-white/75">encargados del tratamiento de datos (data processors)</strong> en los términos del Art. 28 del GDPR y los artículos aplicables de la LFPDPPP. Zetio <strong className="text-white/75">no vende ni comparte datos personales con terceros para fines comerciales o publicitarios</strong>, ni firma acuerdos de intercambio de datos para marketing cruzado entre aplicaciones.
        </p>
        <p className="mt-2">
          Cuando los datos se transfieran fuera del Espacio Económico Europeo, se aplicarán las <strong className="text-white/75">Cláusulas Contractuales Tipo (SCCs)</strong> aprobadas por la Comisión Europea o garantías equivalentes, según corresponda.
        </p>
        <LegalNote>
          <strong className="text-white/75">Firebase Analytics.</strong> Zetio utiliza Firebase Cloud Messaging únicamente para notificaciones push. Firebase Analytics está <strong className="text-white/75">desactivado de forma explícita</strong> en la configuración de la app y no recolecta eventos de uso.
        </LegalNote>
        <LegalNote>
          <strong className="text-white/75">Función de compartir.</strong> La generación de imágenes para compartir ocurre <strong className="text-white/75">100 % en tu dispositivo</strong>; Zetio no envía esas imágenes a ningún servidor propio ni de terceros. La información compartida se entrega directamente por el sistema operativo a la aplicación de destino que tú elijas.
        </LegalNote>
      </LegalSection>

      {/* 5 */}
      <LegalSection number={5} title="Almacenamiento y seguridad">
        <SubHeading>5.1 Dónde almacenamos tus datos</SubHeading>
        <LegalList items={[
          <><strong className="text-white/75">Servidor:</strong> Tus datos se almacenan en servidores de Supabase con cifrado en reposo y en tránsito (TLS/SSL).</>,
          <><strong className="text-white/75">Dispositivo:</strong> Se almacena localmente en tu dispositivo tu sesión de autenticación, preferencias de idioma y tema, una caché de tu ubicación aproximada (máximo 24 horas), y el módulo seleccionado por última vez. Estos datos se eliminan al cerrar sesión.</>,
          <><strong className="text-white/75">Service Worker / PWA:</strong> Un Service Worker (Workbox) almacena en caché archivos de la aplicación (JavaScript, CSS, fuentes, imágenes) para el funcionamiento sin conexión. Esta caché contiene únicamente activos estáticos de la aplicación, <strong className="text-white/75">no datos personales</strong>.</>,
        ]} />

        <SubHeading>5.2 Medidas de seguridad</SubHeading>
        <LegalList items={[
          'Las contraseñas se almacenan como hash criptográfico; nunca en texto plano.',
          'Todas las comunicaciones entre la app y el servidor usan cifrado TLS/SSL.',
          'La autenticación utiliza el flujo PKCE (Proof Key for Code Exchange) para máxima seguridad.',
          <><strong className="text-white/75">Row Level Security (RLS):</strong> El acceso a tus datos personales, torneos, retas, métricas deportivas de Zetio Coach, notificaciones y tickets de soporte está restringido a nivel <strong className="text-white/75">servidor</strong> mediante políticas de Row Level Security de Supabase. Estas políticas se aplican en la base de datos, no en el cliente, lo que impide el acceso cruzado entre usuarios incluso si la aplicación cliente fuera modificada.</>,
          'Los tokens de sesión se renuevan periódicamente y se invalidan al cerrar sesión.',
          <>Los registros de depuración (logs) en la <strong className="text-white/75">versión de producción</strong> están limitados a información operativa mínima y <strong className="text-white/75">no almacenan datos personales identificables</strong> (correos, contraseñas, tokens, contenido de mensajes o ubicación precisa).</>,
        ]} />
        <LegalNote>
          <strong className="text-white/75">Notificación de incidentes.</strong> En caso de un incidente que afecte la confidencialidad, integridad o disponibilidad de tus datos, Zetio notificará a la autoridad de protección de datos competente en un plazo máximo de <strong className="text-white/75">72 horas</strong> desde su detección, conforme al Art. 33 del GDPR. Si el incidente representa un riesgo alto para tus derechos y libertades, te notificaremos también directamente.
        </LegalNote>

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
        <p className="mt-2">Responderemos en un plazo máximo de <strong className="text-white/75">20 días hábiles</strong> conforme a la ley.</p>

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
          'Se borrarán tus métricas deportivas, sesiones de entrenamiento, partidos supervisados, notas del coach, registros internos de pagos de coaching y vínculos coach-jugador asociados a tu cuenta (tanto si actuabas como coach como si eras jugador vinculado).',
          'Los resultados de torneos y retas en los que participaste se anonimizarán (se elimina la referencia a tu usuario) para mantener la integridad histórica de los torneos y rankings.',
          'Los datos que debamos conservar por obligación legal aplicable se almacenarán únicamente por el período mínimo requerido por la legislación correspondiente.',
        ]} />
        <p className="mt-2">Si tienes algún problema para eliminar tu cuenta desde la app, también puedes solicitarlo por correo a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>.</p>
      </LegalSection>

      {/* 7 */}
      <LegalSection number={7} title="Menores de edad">
        <p>
          Zetio está dirigido a personas de <strong className="text-white/80">13 años o más</strong>. No recopilamos intencionadamente información de menores de 13 años. Si eres padre o tutor y crees que un menor de 13 años nos ha proporcionado datos personales, contáctanos a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a> y eliminaremos dicha información.
        </p>
        <p className="mt-2">
          Los usuarios entre 13 y 17 años solo pueden utilizar Zetio con el consentimiento de un padre, madre o tutor legal. Zetio no verifica de forma independiente la obtención de dicho consentimiento, pero se reserva el derecho de restringir, suspender o eliminar cuentas si detecta uso indebido por menores sin autorización o sin cumplimiento de la edad mínima aplicable en la jurisdicción del usuario (p. ej. 16 años en algunos países de la UE conforme al GDPR Art. 8).
        </p>
        <p className="text-white/70 font-medium mt-4">Menores en Zetio Coach</p>
        <p>El módulo Zetio Coach permite que un coach establezca un vínculo con un jugador menor de edad. Cuando el jugador vinculado es menor de edad:</p>
        <LegalList items={[
          'El consentimiento explícito del padre, madre o tutor legal es un requisito indispensable antes de que el jugador acepte la invitación de vínculo y antes de que el coach registre cualquier dato deportivo del menor.',
          'El coach es responsable de obtener y conservar evidencia de dicho consentimiento, así como de informar al tutor sobre qué datos se registrarán y con qué finalidad.',
          <>El padre, madre o tutor legal puede en cualquier momento solicitar el acceso, rectificación o eliminación de los datos del menor escribiendo a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>.</>,
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
          Zetio <strong className="text-white/80">no utiliza cookies propias de rastreo ni tecnologías de publicidad</strong>. Utilizamos almacenamiento local del dispositivo (localStorage) exclusivamente para:
        </p>
        <LegalList items={[
          'Mantener tu sesión activa',
          'Guardar tus preferencias de idioma y tema (claro/oscuro)',
          'Cachear tu ubicación para evitar consultas repetidas al GPS',
          'Recordar tu módulo seleccionado',
        ]} />
        <p className="mt-2">Estos datos son estrictamente funcionales, no se comparten con terceros y se eliminan al cerrar sesión.</p>
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
          <><strong className="text-white/75">Analítica propia:</strong> Zetio utiliza un sistema de analítica <strong className="text-white/75">interno y propio</strong> para medir el uso del Servicio. Registramos eventos de alto nivel como inicios de sesión, inscripciones a torneos, creación de retas en Zetio Play, partidos completados, invitaciones y aceptaciones de amigos, y eventos de la encuesta de experiencia. Estos datos se almacenan en nuestros propios servidores (Supabase), <strong className="text-white/75">no se comparten con ningún tercero</strong>, y se usan exclusivamente para mejorar el Servicio. No utilizamos Google Analytics, Firebase Analytics, Mixpanel, Sentry, PostHog ni ninguna plataforma de analítica de terceros.</>,
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
            [<strong className="text-white/75">Argentina</strong>, 'Ley 25.326 de Protección de Datos Personales', 'Derechos de acceso, rectificación, supresión'],
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
