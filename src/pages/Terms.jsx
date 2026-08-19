import LegalLayout, { LegalSection } from '../components/LegalLayout'

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

export default function Terms() {
  return (
    <LegalLayout
      badge="Legal · Términos"
      title="Términos y Condiciones"
      updated="11 de agosto de 2026"
    >
      {/* Intro */}
      <section>
        <div className="text-white/55 text-sm sm:text-base leading-relaxed space-y-3">
          <p>
            Estos Términos y Condiciones ("Términos") regulan el uso de la aplicación móvil Zetio y los servicios asociados (el "Servicio"), operados por <strong className="text-white/80">Diego Diaz</strong> ("nosotros", "nuestro" o "Zetio"). Al crear una cuenta, usar el Servicio en Modo Invitado, o de cualquier otra forma acceder a Zetio, aceptas estos Términos. Si no estás de acuerdo, no utilices el Servicio.
          </p>
          <p>
            Estos Términos deben leerse junto con nuestra <a href="https://zetio.app/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">Política de Privacidad</a>, que describe cómo tratamos tus datos personales y que forma parte integral de este acuerdo por referencia.
          </p>
          <LegalNote>
            <strong className="text-white/75">Alcance de este documento — Zetio Users.</strong> Estos Términos cubren los productos orientados a jugadores y coaches individuales: <strong className="text-white/75">Zetio Tour</strong>, <strong className="text-white/75">Zetio Play</strong> y <strong className="text-white/75">Zetio Coach</strong>. Los Términos de <strong className="text-white/75">Zetio Clubs</strong> (dirigido a administradores de clubes/canchas) se documentarán en una sección separada dentro de este mismo documento cuando ese producto esté disponible.
          </LegalNote>
        </div>
      </section>

      {/* 1 */}
      <LegalSection number={1} title="Descripción del Servicio">
        <p>
          Zetio es una plataforma de pádel compuesta por tres módulos:
        </p>
        <LegalList items={[
          <><strong className="text-white/80">Zetio Tour</strong> — organización y participación en torneos estructurados: inscripciones, categorías, fases de grupos y eliminatorias.</>,
          <><strong className="text-white/80">Zetio Play</strong> — retas casuales entre amigos, con códigos de invitación, tabla de posiciones y resultados rápidos.</>,
          <><strong className="text-white/80">Zetio Coach</strong> — gestión de la relación entre coaches y jugadores: agenda de sesiones, partidos supervisados y métricas deportivas.</>,
        ]} />
        <p>
          Zetio es una <strong className="text-white/80">herramienta de organización y registro</strong>. No somos dueños ni operadores de clubes, canchas o instalaciones deportivas, no empleamos a los coaches que usan la plataforma, y no somos parte de los acuerdos económicos entre organizadores, clubes, coaches o jugadores (ver Sección 9).
        </p>
      </LegalSection>

      {/* 2 */}
      <LegalSection number={2} title="Elegibilidad y cuentas">
        <LegalList items={[
          <>Debes tener <strong className="text-white/75">al menos 13 años</strong> para crear una cuenta. Conforme al Código Civil Federal, la mayoría de edad en México se alcanza a los 18 años; si tienes entre 13 y 17 años, <strong className="text-white/75">declaras contar con la autorización de tu padre, madre o tutor legal</strong> para usar el Servicio y para que dicho tutor acepte estos Términos en tu nombre, en los mismos términos descritos en la Sección 7 de nuestra Política de Privacidad.</>,
          'Eres responsable de la veracidad de la información que proporcionas al registrarte, y de mantener la confidencialidad de tu contraseña y de cualquier actividad que ocurra en tu cuenta.',
          <>Puedes usar Zetio Play en <strong className="text-white/75">Modo Invitado</strong>, sin crear una cuenta, en los términos descritos en la Sección 1.5 de nuestra Política de Privacidad. Algunas funciones (torneos estructurados, Zetio Coach, historial permanente) requieren una cuenta registrada.</>,
          'Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estos Términos, incluyendo el uso de información falsa, suplantación de identidad, o las conductas prohibidas descritas en la Sección 7.',
        ]} />
      </LegalSection>

      {/* 3 */}
      <LegalSection number={3} title="Reglas específicas de Zetio Tour">
        <LegalList items={[
          <>Los torneos publicados en Zetio son creados y administrados por el <strong className="text-white/75">organizador del torneo</strong> (que puede ser Zetio o un club/organizador autorizado). Como jugador, te inscribes a torneos ya publicados; hoy la creación de torneos no es una función de autoservicio para jugadores.</>,
          <>La elegibilidad a cada categoría se basa en los datos de tu perfil (edad, sexo) recopilados al registrarte, conforme a la Sección 1.1 de nuestra Política de Privacidad. Eres responsable de que esta información sea correcta; el organizador puede remover una inscripción que no cumpla los requisitos de la categoría.</>,
          <>Puedes cancelar tu inscripción a un torneo en cualquier momento antes de que este inicie; hacerlo libera tu lugar y el de tu pareja. Como no procesamos pagos en línea (ver Sección 9), no hay reembolsos que gestionar desde Zetio — cualquier acuerdo económico sobre la reservación se resuelve directamente con el club o el organizador.</>,
          <>Las fechas, sedes, canchas, fases de grupos y llaves de eliminatoria son publicadas por el organizador del torneo. <strong className="text-white/75">Zetio no garantiza la disponibilidad de canchas, el cumplimiento del calendario publicado, ni la exactitud de la información logística</strong> — esto depende del club o de quien administre el torneo en cuestión.</>,
          <>Los resultados y marcadores se registran por el organizador o por los propios jugadores, según el torneo. Zetio no arbitra disputas sobre resultados; cualquier inconformidad debe resolverse con el organizador del torneo correspondiente. Los resultados y estadísticas de un torneo son visibles para los demás participantes del mismo torneo, conforme a la Sección 1.3 de nuestra Política de Privacidad.</>,
        ]} />
      </LegalSection>

      {/* 4 */}
      <LegalSection number={4} title="Reglas específicas de Zetio Play">
        <LegalList items={[
          <>Cualquier persona con un <strong className="text-white/75">código de invitación</strong> válido puede unirse a una reta, incluyendo mediante Modo Invitado. Eres responsable de con quién compartes tus códigos.</>,
          <>El usuario que crea una reta (<strong className="text-white/75">host</strong>) puede reemplazar o quitar a cualquier participante distinto de sí mismo en cualquier momento, incluso después de que la reta haya comenzado. Esta facultad, sus alcances y sus consecuencias para el participante removido están descritos en detalle en la Sección 1.3 de nuestra Política de Privacidad, y al unirte a una reta como jugador vinculado o por código de invitación, <strong className="text-white/75">aceptas que el host conserva esta facultad</strong> sobre la reta que organiza.</>,
          'Los resultados y estadísticas que registres en una reta pueden ser visibles para los demás participantes de esa misma reta, conforme a lo descrito en la Sección 1.3 de la Política de Privacidad.',
        ]} />
      </LegalSection>

      {/* 5 */}
      <LegalSection number={5} title="Reglas específicas de Zetio Coach">
        <LegalList items={[
          <>La relación entre un coach y un jugador dentro de Zetio requiere un <strong className="text-white/75">vínculo aceptado explícitamente</strong> por el jugador (o su tutor legal si es menor de edad), como se describe en la Sección 1.6 de nuestra Política de Privacidad.</>,
          <><strong className="text-white/75">Zetio no verifica credenciales, certificaciones ni la calidad del coaching</strong> de los usuarios que usan el rol de coach dentro de la plataforma. La relación de enseñanza, sus términos económicos y su idoneidad son responsabilidad exclusiva del coach y del jugador (o su tutor legal).</>,
          <>El registro de sesiones como "pendiente" o "pagada" dentro de Zetio Coach es una <strong className="text-white/75">herramienta de seguimiento interna</strong> entre coach y jugador; Zetio no procesa, garantiza ni interviene en ningún pago real (ver Sección 9).</>,
        ]} />
      </LegalSection>

      {/* 6 */}
      <LegalSection number={6} title="Riesgos físicos y actividad deportiva">
        <p>
          El pádel es un deporte de contacto indirecto que se juega en una cancha cerrada compartida por cuatro jugadores, con riesgos inherentes que incluyen, entre otros: esguinces y torceduras, colisiones entre jugadores (particularmente entre compañeros de pareja al disputar la misma pelota), impactos de pelota o pala, caídas, y el esfuerzo físico propio de la actividad deportiva.
        </p>
        <LegalList items={[
          <><strong className="text-white/75">Zetio es un software de organización.</strong> No operamos canchas ni instalaciones, no supervisamos físicamente los partidos (salvo cuando un coach está presente, en cuyo caso esa supervisión es responsabilidad del coach, no de Zetio), no evaluamos tu condición física o nivel de habilidad, y no garantizamos el estado o la seguridad de ninguna instalación deportiva de terceros.</>,
          <>Al participar en un torneo, reta o sesión organizada a través de Zetio, <strong className="text-white/75">reconoces y asumes los riesgos físicos inherentes a la práctica del pádel</strong>, y confirmas que participas de forma voluntaria y bajo tu propia responsabilidad y la de los demás participantes, el club o la instalación donde se juegue.</>,
          'Esto no limita ni excluye la responsabilidad de Zetio por fallas propias del Servicio como software (ver Sección 11); se refiere específicamente a lo que ocurre físicamente en la cancha, fuera de nuestro control.',
        ]} />
      </LegalSection>

      {/* 7 */}
      <LegalSection number={7} title="Conducta del usuario">
        <p>Al usar Zetio, te comprometes a no:</p>
        <LegalList items={[
          'Proporcionar información falsa sobre tu identidad o suplantar a otra persona.',
          'Acosar, amenazar o discriminar a otros usuarios, coaches o jugadores.',
          'Usar códigos de invitación, códigos de amigo o cualquier función del Servicio para fines distintos a los previstos (por ejemplo, distribuir códigos de forma masiva o automatizada).',
          'Manipular resultados, estadísticas o rankings de mala fe.',
          'Intentar acceder sin autorización a cuentas, datos o sistemas de Zetio o de otros usuarios.',
        ]} />
        <p>
          Si detectas una conducta indebida de otro usuario, contáctanos a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>. Hoy no existe un sistema de reporte dentro de la app; este correo es el canal disponible.
        </p>
        <p>
          Podemos suspender o cancelar el acceso al Servicio de cualquier cuenta que incumpla esta sección, con o sin previo aviso según la gravedad de la conducta.
        </p>
      </LegalSection>

      {/* 8 */}
      <LegalSection number={8} title="Propiedad intelectual">
        <LegalList items={[
          'Zetio, su marca, logotipo, diseño e interfaz son propiedad de Diego Diaz. No se te otorga ningún derecho sobre ellos salvo la licencia limitada, personal y no transferible para usar el Servicio conforme a estos Términos.',
          'Conservas la propiedad del contenido que generas dentro de Zetio (nombres de retas, notas de coaching, etc.). Al publicarlo dentro del Servicio, nos otorgas una licencia limitada para almacenarlo, procesarlo y mostrarlo a otros usuarios en el contexto para el que fue creado (ej. mostrar resultados de un torneo a sus participantes), conforme a lo descrito en nuestra Política de Privacidad.',
        ]} />
      </LegalSection>

      {/* 9 */}
      <LegalSection number={9} title="Reservaciones y pagos">
        <p>
          Zetio <strong className="text-white/80">no procesa pagos en línea</strong> dentro de la aplicación. Las inscripciones a torneos usan un flujo de reservación sin cobro; cualquier pago se coordina de forma externa entre el organizador del torneo (o el club) y el jugador. Los registros de pago de sesiones de coaching son una herramienta de seguimiento interna entre coach y jugador, no una transacción procesada por Zetio.
        </p>
        <p>
          <strong className="text-white/80">Zetio no es parte de estos acuerdos económicos</strong> y no asume responsabilidad por disputas de pago entre organizadores, clubes, coaches o jugadores. Si en el futuro integramos un procesador de pagos, actualizaremos estos Términos y la Política de Privacidad con al menos 30 días de anticipación, describiendo las condiciones aplicables.
        </p>
      </LegalSection>

      {/* 10 */}
      <LegalSection number={10} title="Servicios de terceros">
        <p>
          El Servicio depende de proveedores externos (Supabase, autenticación de Google, notificaciones push de Firebase/Apple, entre otros) descritos en la Sección 4 de nuestra Política de Privacidad. No controlamos ni somos responsables de la disponibilidad o el funcionamiento de estos servicios de terceros.
        </p>
      </LegalSection>

      {/* 11 */}
      <LegalSection number={11} title="Garantías y limitación de responsabilidad">
        <p>
          El Servicio se proporciona "tal cual" y "según disponibilidad". No garantizamos que el Servicio esté libre de errores o interrupciones en todo momento.
        </p>
        <p>
          En la máxima medida permitida por la ley aplicable, y sin que esto implique liberarnos de responsabilidad por incumplimientos propios del Servicio, nuestra responsabilidad frente a ti se limita a los daños directos y comprobables derivados de un incumplimiento imputable a Zetio en la prestación del Servicio como software. Esta limitación <strong className="text-white/80">no aplica</strong> a los riesgos físicos descritos en la Sección 6, que corresponden a la actividad deportiva misma y no al funcionamiento del Servicio.
        </p>
        <p>
          Nada en esta sección pretende limitar derechos que la Ley Federal de Protección al Consumidor u otra legislación aplicable reconozcan de forma irrenunciable a tu favor.
        </p>
      </LegalSection>

      {/* 12 */}
      <LegalSection number={12} title="Terminación">
        <p>
          Puedes dejar de usar el Servicio y eliminar tu cuenta en cualquier momento desde Ajustes → Editar perfil → Eliminar cuenta, conforme al proceso descrito en la Sección 6.3 de nuestra Política de Privacidad. Podemos suspender o cancelar tu acceso si incumples estos Términos, notificándote cuando sea razonablemente posible.
        </p>
      </LegalSection>

      {/* 13 */}
      <LegalSection number={13} title="Modificaciones a estos Términos">
        <p>
          Podemos actualizar estos Términos ocasionalmente para reflejar cambios en el Servicio o en la legislación aplicable. Cuando lo hagamos, actualizaremos la fecha de "Última actualización" al inicio de este documento; si el cambio es significativo, te lo notificaremos dentro de la app o por correo electrónico antes de que entre en vigor. El uso continuado del Servicio después de un cambio notificado constituye tu aceptación de los Términos actualizados. No modificaremos estos Términos de forma retroactiva en tu perjuicio sin darte oportunidad de conocerlos.
        </p>
      </LegalSection>

      {/* 14 */}
      <LegalSection number={14} title="Ley aplicable y jurisdicción">
        <p>
          Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a los tribunales competentes conforme a la legislación aplicable, sin que esto implique renunciar a los derechos de acceso a la justicia que la Ley Federal de Protección al Consumidor u otra ley reconozca a tu favor como consumidor, incluyendo tu derecho a acudir a los tribunales de tu propio domicilio cuando la ley así lo garantice.
        </p>
      </LegalSection>

      {/* 15 */}
      <LegalSection number={15} title="Disposiciones generales">
        <p>
          Si alguna disposición de estos Términos se considera inválida o inaplicable, el resto de los Términos permanecerá vigente. Estos Términos, junto con la Política de Privacidad, constituyen el acuerdo completo entre tú y Zetio respecto al uso del Servicio.
        </p>
      </LegalSection>

      {/* 16 */}
      <LegalSection number={16} title="Contacto">
        <p>
          Si tienes preguntas sobre estos Términos, escríbenos a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>.
        </p>
        <div className="mt-3 p-4 rounded-xl border border-white/7 bg-white/2 space-y-1.5">
          <p><span className="text-white/80 font-medium">Email:</span>{' '}<a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a></p>
          <p><span className="text-white/80 font-medium">Titular:</span> Diego Diaz</p>
        </div>
      </LegalSection>

      <p className="text-white/20 text-xs text-center pt-4">© 2026 Zetio. Todos los derechos reservados.</p>
    </LegalLayout>
  )
}