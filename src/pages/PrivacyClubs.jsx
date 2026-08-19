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

export default function PrivacyClubs() {
  return (
    <LegalLayout
      badge="Legal · Zetio Club"
      title="Aviso de Privacidad — Zetio Club"
      updated="16 de agosto de 2026"
    >
      {/* 1 */}
      <LegalSection number={1} title="Identidad y domicilio del responsable">
        <p>
          Zetio Club (la "Plataforma") es operado por <strong className="text-white/80">Luis Fernando Esparza Zarate</strong>, persona física con actividad empresarial, con Registro Federal de Contribuyentes <strong className="text-white/80">EAZL9303222J7</strong> y domicilio en Avenida Las Américas, número interior 104, exterior 110, colonia Las Américas, entre calle Ignacio T. Chávez, municipio de Aguascalientes, Aguascalientes, México (el "Responsable", "Zetio", "nosotros"), accesible en <a href="https://club.zetio.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">club.zetio.app</a>.
        </p>
        <p>
          El Responsable opera además, bajo la misma identidad legal, la aplicación móvil Zetio (Zetio Users). Ambos productos comparten la misma cuenta de usuario (Sección 6), pero <strong className="text-white/80">este Aviso rige exclusivamente el tratamiento de datos realizado a través de Zetio Club</strong>; el uso de la app móvil se rige por su propio Aviso de Privacidad.
        </p>
      </LegalSection>

      {/* 2 */}
      <LegalSection number={2} title="Datos personales que tratamos">
        <p>
          No tratamos categorías de datos personales sensibles en el sentido del artículo 2, fracción VI de la Ley (origen racial o étnico, estado de salud, información genética, creencias religiosas, opiniones políticas, preferencia sexual, o similares) — no las solicitamos ni las almacenamos.
        </p>
        <LegalTable
          headers={['Titular', 'Datos que tratamos', 'Quién los captura']}
          rows={[
            [<><strong className="text-white/75">Cuenta / Personal del Club</strong> (Propietario, Administrador u Operador de un Club)</>, 'Nombre, apellidos, correo electrónico, sexo, fecha de nacimiento, nacionalidad, teléfono (opcional), ciudad/estado, fotografía de perfil, contraseña (gestionada por nuestro proveedor de autenticación, nunca en texto plano por nosotros)', 'El propio titular, al crear su Cuenta y completar su perfil'],
            [<strong className="text-white/75">Club</strong>, 'Nombre del Club, ubicación/dirección, deporte, nombres de las canchas', 'El Personal del Club, al configurar el perfil del Club'],
            [<strong className="text-white/75">Jugador con Cuenta propia inscrito por un Club</strong>, 'Nombre, apellidos, sexo, fecha de nacimiento, teléfono, correo electrónico y fotografía de perfil, visibles para el Club que lo inscribe', 'El propio Jugador, al crear su Cuenta; el Club accede a estos datos al inscribirlo en una Categoría (buscándolo por su código de amigo)'],
            [<strong className="text-white/75">Jugador sin Cuenta / genérico</strong>, 'Únicamente su nombre, como texto libre — sin correo, teléfono ni fecha de nacimiento', 'El Club, al registrarlo manualmente en una Pareja'],
            [<><strong className="text-white/75">Historial deportivo</strong> (participaciones, trofeos, torneo activo)</>, 'Se actualiza automáticamente cuando un Jugador con Cuenta participa en un Torneo de Zetio Club, y es visible también en la app móvil Zetio (Sección 6)', 'El sistema, de forma automática'],
            [<><strong className="text-white/75">Pagos</strong>.</>, <>Identificadores de transacción de Stripe (ID de cliente, de suscripción, de pago) y el correo del Personal del Club que realiza la compra. <strong className="text-white/75">Nunca tratamos ni almacenamos números de tarjeta u otros datos de instrumentos de pago</strong> — esos los captura y procesa directamente Stripe en su propia infraestructura (Sección 5)</>, 'Stripe, al procesar el pago'],
          ]}
        />
      </LegalSection>

      {/* 3 */}
      <LegalSection number={3} title="Finalidades del tratamiento">
        <p>
          <strong className="text-white/80">Finalidades necesarias</strong> (indispensables para prestar el Servicio; no requieren consentimiento adicional, conforme al artículo 9, fracción IV de la Ley, por derivarse de la relación contractual entre el titular y el Responsable):
        </p>
        <LegalList items={[
          'Crear y administrar tu Cuenta y autenticarte de forma segura.',
          'Permitir que un Club te inscriba en un Torneo y muestre tu información deportiva (resultados, cuadro, calendario) a los demás participantes del mismo Torneo.',
          'Generar cuadros, calendarios y resultados de Torneos.',
          'Procesar el cobro de Créditos y Suscripciones del Club a través de Stripe, y prevenir fraude.',
          'Enviarte correos operativos indispensables: confirmación de alta, recuperación de contraseña, invitaciones a formar parte del Personal de un Club.',
          'Cumplir obligaciones legales y atender requerimientos de autoridad.',
        ]} />
        <p>
          No usamos tus datos personales para publicidad de terceros, no los vendemos, y no realizamos perfilamiento automatizado que produzca efectos jurídicos sobre ti.
        </p>
      </LegalSection>

      {/* 4 */}
      <LegalSection number={4} title="Cómo obtenemos tus datos">
        <p>
          La mayoría de los datos los proporcionas tú directamente (al registrarte, al completar tu perfil, o al inscribirte tú mismo). Una excepción relevante: si un Club te busca por tu <strong className="text-white/80">código de amigo</strong> para inscribirte en un Torneo, obtiene acceso a tu nombre, apellidos, sexo, fecha de nacimiento, teléfono, correo y fotografía de perfil <strong className="text-white/80">sin que tú tengas que compartirlos en ese momento</strong> — el código de amigo funciona como un identificador que tú controlas y decides con quién compartir (fuera de esta Plataforma, por ejemplo verbalmente o por mensaje). Si prefieres no ser localizable así, no compartas tu código de amigo con el Club.
        </p>
      </LegalSection>

      {/* 5 */}
      <LegalSection number={5} title="Encargados y terceros con los que compartimos datos">
        <p>
          Utilizamos los siguientes proveedores para operar la Plataforma. Todos actúan como <strong className="text-white/80">encargados</strong> (tratan datos por cuenta e instrucción nuestra, conforme al artículo 2, fracción XII de la Ley), no como responsables independientes de tus datos:
        </p>
        <LegalTable
          headers={['Proveedor', 'Qué procesa', 'Datos involucrados']}
          rows={[
            [<strong className="text-white/75">Stripe</strong>, 'Cobro de Créditos y Suscripciones del Club', 'Correo del comprador, monto, medio de pago (Stripe captura y almacena el instrumento de pago directamente; nosotros solo recibimos identificadores de transacción)'],
            [<strong className="text-white/75">Supabase</strong>, 'Base de datos, autenticación, almacenamiento de imágenes y funciones de servidor', 'Todos los datos descritos en la Sección 2'],
            [<strong className="text-white/75">OpenCage</strong>, 'Geocodificación de la dirección de texto de un Club o Torneo (nunca tu ubicación como dispositivo)', 'Dirección de texto que el Club escribe o el pin que coloca en el mapa'],
            [<strong className="text-white/75">Google Maps</strong>, 'Renderizado del mapa en tu navegador', 'Ninguno de tus datos personales; solo carga el mapa'],
            [<strong className="text-white/75">Resend</strong>, 'Envío del correo de invitación al Personal de un Club', 'Correo electrónico del invitado'],
            [<strong className="text-white/75">Netlify</strong>, 'Alojamiento (hosting) del Servicio', 'Tráfico técnico de la aplicación'],
          ]}
        />
        <p>
          <strong className="text-white/80">No compartimos tus datos con anunciantes, brokers de datos, ni los usamos con fines de mercadeo de terceros.</strong> No usamos herramientas de analítica o rastreo de terceros en Zetio Club.
        </p>

        <SubHeading>Transferencia dentro del mismo grupo — app Zetio Users</SubHeading>
        <p>
          La tabla de Cuenta (nombre, apellidos, correo, sexo, fecha de nacimiento, nacionalidad, teléfono, ciudad/estado, fotografía, historial de participaciones y trofeos) es <strong className="text-white/80">la misma</strong> que usa la aplicación móvil Zetio (Zetio Users): es un único perfil válido para ambos productos, operados por el mismo Responsable (Sección 1). Por tratarse del mismo responsable y no de un tercero independiente, esta comunicación de datos entre ambos productos no constituye una transferencia en los términos del artículo 2, fracción XX de la Ley (que define transferencia como comunicación "a persona distinta... del responsable"). En consecuencia: inscribirte en un Torneo de un Club a través de Zetio Club puede reflejarse en tu historial visible dentro de la app móvil Zetio (participaciones, trofeos, notificaciones), y viceversa.
        </p>
      </LegalSection>

      {/* 6 */}
      <LegalSection number={6} title="El doble rol de Zetio frente a los datos que un Club registra">
        <p>
          Cuando un Club registra en la Plataforma a un Jugador <strong className="text-white/80">sin Cuenta</strong> (solo su nombre, Sección 2), es el propio Club quien decide capturar ese dato y con qué finalidad (inscribirlo en su Torneo) — el Club actúa ahí como <strong className="text-white/80">responsable</strong> de ese dato personal, y Zetio actúa como <strong className="text-white/80">encargado</strong>: alojamos y procesamos ese nombre siguiendo las instrucciones del Club (mostrarlo en el cuadro, el calendario y los resultados del Torneo), sin decidir nosotros mismos finalidades adicionales sobre él. El Club es quien debe contar con la base legal o el consentimiento correspondiente para registrar a esa persona (así lo reconocen los Términos y Condiciones de Zetio Club, Sección 8).
        </p>
        <p>
          Para el resto de los datos de Cuenta que describe este Aviso (Sección 2), Zetio es el responsable directo — es nuestra Plataforma la que define las finalidades del tratamiento.
        </p>
      </LegalSection>

      {/* 7 */}
      <LegalSection number={7} title="Menores de edad">
        <p>
          Conforme a la Sección 4 de los Términos y Condiciones de Zetio Club, una Cuenta propia puede crearse a partir de los 13 años con el consentimiento verificable de madre, padre o tutor legal; por debajo de esa edad, o sin ese consentimiento, un menor solo puede participar como Jugador "sin Cuenta" registrado por un adulto responsable. Para el tratamiento de datos de una persona menor de edad o en estado de interdicción, aplican las reglas de representación previstas en la legislación civil aplicable, y en todo momento se privilegia el interés superior de la niña, niño o adolescente.
        </p>
      </LegalSection>

      {/* 8 */}
      <LegalSection number={8} title="Cómo ejercer tus derechos ARCO">
        <p>
          Tienes derecho, en cualquier momento y de forma gratuita (salvo costos de reproducción o envío), a:
        </p>
        <LegalList items={[
          <><strong className="text-white/75">Acceder</strong> a tus datos personales en nuestra posesión.</>,
          <><strong className="text-white/75">Rectificar</strong> datos inexactos, incompletos o desactualizados.</>,
          <><strong className="text-white/75">Cancelar</strong> tus datos, para que dejen de estar en nuestra posesión.</>,
          <><strong className="text-white/75">Oponerte</strong> al tratamiento de tus datos para una finalidad específica.</>,
        ]} />
        <p>
          Para ejercer cualquiera de estos derechos, escribe a <a href="mailto:zetioapp@gmail.com" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetioapp@gmail.com</a> indicando: tu nombre, un medio de contacto, una identificación oficial, una descripción clara del dato sobre el que quieres ejercer tu derecho, y qué derecho deseas ejercer. Te responderemos dentro de un plazo máximo de <strong className="text-white/80">20 días hábiles</strong>, y, de proceder tu solicitud, la haremos efectiva dentro de los <strong className="text-white/80">15 días hábiles</strong> siguientes. Estos plazos pueden ampliarse una vez por un periodo igual si las circunstancias lo justifican.
        </p>
        <p>
          Puedes también <strong className="text-white/80">revocar tu consentimiento</strong> para el tratamiento de tus datos en cualquier momento, escribiendo al mismo correo, sin que esto tenga efectos retroactivos.
        </p>
        <p>
          Si consideras que tu solicitud no fue atendida correctamente, puedes acudir ante la <strong className="text-white/80">Secretaría Anticorrupción y Buen Gobierno</strong>, autoridad competente en materia de protección de datos personales en posesión de particulares.
        </p>
      </LegalSection>

      {/* 9 */}
      <LegalSection number={9} title="Conservación de tus datos">
        <p>
          Conservamos los datos de un Torneo (incluyendo resultados y nombres de Jugadores sin Cuenta) mientras el Club mantenga su Cuenta activa en la Plataforma, salvo que ejerzas tu derecho de cancelación conforme a la Sección 8. Si el Club elimina un Torneo sin Parejas inscritas, todos los datos asociados a ese Torneo se eliminan de forma permanente.
        </p>
      </LegalSection>

      {/* 10 */}
      <LegalSection number={10} title="Uso de cookies">
        <p>
          Usamos únicamente cookies técnicas, indispensables para operar la Plataforma:
        </p>
        <LegalList items={[
          'Una cookie de sesión de autenticación (para mantenerte identificado de forma segura).',
          'Una cookie que recuerda si ya viste el recorrido de bienvenida de la Plataforma, sin ningún dato personal asociado.',
        ]} />
        <p>
          No usamos cookies de publicidad, mercadeo ni de rastreo de terceros.
        </p>
      </LegalSection>

      {/* 11 */}
      <LegalSection number={11} title="Medidas de seguridad">
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales, incluyendo control de acceso a nivel de base de datos (Row Level Security), cifrado en tránsito (HTTPS/TLS) y separación de roles dentro de cada Club. Ninguna plataforma en internet puede garantizar seguridad absoluta; ante cualquier vulneración de seguridad que afecte de forma significativa tus derechos, te lo notificaremos de forma inmediata conforme a la ley aplicable.
        </p>
      </LegalSection>

      {/* 12 */}
      <LegalSection number={12} title="Cambios a este Aviso">
        <p>
          Podemos modificar este Aviso de Privacidad en cualquier momento. Los cambios materiales se notificarán por correo electrónico a los Usuarios afectados, o mediante un aviso visible dentro de la Plataforma, con al menos 15 días naturales de anticipación a su entrada en vigor. Los cambios no materiales pueden aplicarse sin aviso previo.
        </p>
      </LegalSection>

      {/* 13 */}
      <LegalSection number={13} title="Contacto">
        <p>
          Para dudas sobre este Aviso de Privacidad o para ejercer tus derechos ARCO: <a href="mailto:zetioapp@gmail.com" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetioapp@gmail.com</a>.
        </p>
        <div className="mt-3 p-4 rounded-xl border border-white/7 bg-white/2 space-y-1.5">
          <p><span className="text-white/80 font-medium">Email:</span>{' '}<a href="mailto:zetioapp@gmail.com" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetioapp@gmail.com</a></p>
          <p><span className="text-white/80 font-medium">Responsable:</span> Luis Fernando Esparza Zarate</p>
        </div>
      </LegalSection>

      <p className="text-white/20 text-xs text-center pt-4">© 2026 Zetio. Todos los derechos reservados.</p>
    </LegalLayout>
  )
}