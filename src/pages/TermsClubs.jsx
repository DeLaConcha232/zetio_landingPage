import { Link } from 'react-router-dom'
import LegalLayout, { LegalSection } from '../components/LegalLayout'

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

export default function TermsClubs() {
  return (
    <LegalLayout
      badge="Legal · Zetio Club"
      title="Términos y Condiciones de Uso — Zetio Club"
      updated="16 de agosto de 2026"
    >
      {/* 1 */}
      <LegalSection number={1} title="Identificación del Proveedor">
        <p>
          1.1. Zetio Club (la "Plataforma" o el "Servicio") es operado por <strong className="text-white/80">Luis Fernando Esparza Zarate</strong>, persona física con actividad empresarial, con Registro Federal de Contribuyentes <strong className="text-white/80">EAZL9303222J7</strong> y domicilio fiscal en Avenida Las Américas, número interior 104, exterior 110, colonia Las Américas, entre calle Ignacio T. Chávez, municipio de Aguascalientes, Aguascalientes, México (el "Proveedor", "Zetio", "nosotros"). El Servicio es accesible en <a href="https://club.zetio.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">club.zetio.app</a>, parte del ecosistema Zetio (<a href="https://zetio.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetio.app</a>).
        </p>
        <p>
          Zetio Club forma parte de un ecosistema de productos operados por la misma entidad, que incluye la aplicación móvil Zetio (jugadores, entrenadores y organización de partidos amistosos), un panel interno de administración, y el sitio informativo de Zetio. <strong className="text-white/80">Estos Términos regulan exclusivamente el uso de Zetio Club</strong>; el uso de la aplicación móvil Zetio (Usuarios) se rige por sus propios Términos y Condiciones, aun cuando ambas comparten la misma cuenta de usuario.
        </p>
        <p>
          1.2. <strong className="text-white/80">Cesión futura.</strong> Zetio se reserva el derecho de ceder este contrato, sin necesidad de consentimiento adicional del Club, a la sociedad mercantil que el Proveedor llegue a constituir para continuar operando el Servicio, notificando dicha cesión conforme a la Sección 15. La cesión no implicará cambios en los términos económicos ni en las condiciones ya pactadas con el Club.
        </p>
      </LegalSection>

      {/* 2 */}
      <LegalSection number={2} title="Definiciones">
        <LegalList items={[
          <><strong className="text-white/75">Club</strong>: la organización deportiva (club de pádel/tenis) registrada en la Plataforma, representada por al menos un Propietario.</>,
          <><strong className="text-white/75">Torneo</strong>: evento deportivo organizado por un Club a través de la Plataforma, compuesto por una o más Categorías.</>,
          <><strong className="text-white/75">Categoría</strong>: subdivisión de un Torneo por nivel, sexo y/o edad, definida por el Club.</>,
          <><strong className="text-white/75">Pareja</strong>: dupla de dos Jugadores inscrita en una Categoría. Puede estar formada por Jugadores con Cuenta propia en Zetio o por Jugadores sin cuenta ("genéricos"), registrados únicamente con su nombre por el Club.</>,
          <><strong className="text-white/75">Jugador</strong> o <strong className="text-white/75">Participante</strong>: persona física inscrita en un Torneo, con o sin Cuenta propia.</>,
          <><strong className="text-white/75">Cuenta</strong>: perfil individual creado en Zetio (válido tanto para Zetio Club como para la aplicación móvil Zetio), asociado a un correo electrónico único, sujeto a la Sección 4.</>,
          <><strong className="text-white/75">Personal del Club</strong>: usuario con una membresía activa en un Club, con rol de Propietario, Administrador u Operador (Sección 5).</>,
          <><strong className="text-white/75">Créditos</strong>: unidad de consumo interna de la Plataforma que un Club utiliza para publicar Torneos (Sección 6). Un crédito equivale a un Jugador inscrito; una Pareja equivale a 2 créditos.</>,
          <><strong className="text-white/75">Suscripción</strong>: plan de pago recurrente (mensual o anual) que otorga al Club una asignación periódica de Créditos (Sección 6).</>,
          <><strong className="text-white/75">Torneo Relámpago</strong>: Torneo gratuito de hasta 8 Parejas (16 Jugadores) por mes, sujeto a la Sección 6.4.</>,
        ]} />
      </LegalSection>

      {/* 3 */}
      <LegalSection number={3} title="Objeto y descripción del Servicio">
        <p>
          Zetio Club es un software como servicio ("SaaS") dirigido a clubes de pádel y tenis, que permite a un Club:
        </p>
        <LegalList items={[
          'Crear y administrar el perfil público de su Club (nombre, ubicación, canchas, identidad visual).',
          'Crear, configurar y publicar Torneos: categorías, formato (grupos y/o eliminación directa), precio de inscripción visible a los Jugadores, calendario y canchas.',
          'Recibir y administrar inscripciones de Parejas.',
          'Generar automáticamente cuadros de eliminación directa y/o fases de grupos, y el calendario de partidos distribuido entre las canchas disponibles.',
          'Capturar y publicar resultados de los partidos.',
          'Gestionar al Personal del Club mediante roles y permisos diferenciados (Sección 5).',
        ]} />
        <p>
          <strong className="text-white/80">Zetio Club no procesa el cobro de las inscripciones de los Jugadores a los Torneos.</strong> Conforme al modelo de negocio vigente, cada Club es responsable de cobrar la cuota de inscripción a sus Jugadores por los medios que determine, fuera de la Plataforma. Lo que Zetio Club sí cobra —al propio Club, no al Jugador— es el uso del software, mediante Créditos y/o Suscripción (Sección 6).
        </p>
        <p>
          El Servicio se ofrece "tal cual" y puede evolucionar: Zetio podrá agregar, modificar o retirar funcionalidades, notificando cambios materiales conforme a la Sección 15.
        </p>
      </LegalSection>

      {/* 4 */}
      <LegalSection number={4} title="Elegibilidad y Cuentas">
        <p>
          4.1. Para crear una Cuenta y usar Zetio Club se requiere ser mayor de edad conforme a la legislación mexicana (18 años), <strong className="text-white/80">salvo lo previsto en 4.2</strong> para menores que participan como Jugadores.
        </p>
        <p>
          4.2. Un menor de edad puede tener una Cuenta propia a partir de los <strong className="text-white/80">13 años</strong>, siempre que cuente con el consentimiento verificable de su padre, madre o tutor legal. Para menores por debajo de esa edad, o cuando no exista consentimiento del tutor, el menor puede participar en Torneos únicamente como Jugador registrado por un adulto responsable (el Club o su tutor) mediante el mecanismo de "Pareja con Jugador sin Cuenta" ya disponible en la Plataforma (solo nombre, sin datos de contacto propios, sin notificaciones directas).
        </p>
        <p>
          4.3. Cada persona debe operar con <strong className="text-white/80">su propia Cuenta y credenciales</strong>; está prohibido compartir usuario y contraseña entre distintas personas, incluso dentro del mismo Club. La invitación de Personal del Club (Sección 5.3) existe precisamente para que cada persona tenga su propia Cuenta.
        </p>
        <p>
          4.4. El Usuario es responsable de la veracidad de los datos proporcionados al crear su Cuenta y de mantener actualizada su información de contacto.
        </p>
        <p>
          4.5. Al marcar la casilla "Acepto los Términos y Privacidad" durante el registro, el Usuario manifiesta su consentimiento expreso a estos Términos, en los términos del artículo 89 del Código de Comercio, que reconoce la validez de la manifestación del consentimiento por medios electrónicos.
        </p>
      </LegalSection>

      {/* 5 */}
      <LegalSection number={5} title="Roles, permisos y responsabilidad del Personal del Club">
        <p>
          5.1. Cada persona vinculada a un Club tiene <strong className="text-white/80">un rol por Club</strong> (puede tener roles distintos en Clubes distintos): <strong className="text-white/80">Propietario</strong>, <strong className="text-white/80">Administrador</strong> u <strong className="text-white/80">Operador</strong>.
        </p>
        <LegalTable
          headers={['Capacidad', 'Propietario', 'Administrador', 'Operador']}
          rows={[
            ['Ver el dashboard y los torneos del Club', 'Sí', 'Sí', 'Sí'],
            ['Capturar/editar resultados de partidos', 'Sí', 'Sí', 'Sí'],
            ['Crear y editar Torneos', 'Sí', 'Sí', 'No'],
            ['Eliminar Torneos (solo sin Parejas inscritas)', 'Sí', 'No', 'No'],
            ['Editar el calendario', 'Sí', 'Sí', 'No'],
            ['Gestionar inscripciones y Parejas', 'Sí', 'Sí', 'No'],
            ['Gestionar canchas', 'Sí', 'Sí', 'No'],
            ['Configuración e identidad del Club', 'Sí', 'Sí', 'No'],
            ['Ver pagos, facturación y Suscripción', 'Sí', 'Sí', 'No'],
            ['Gestionar Personal del Club (invitar / cambiar rol / remover)', 'Sí', 'Sí', 'No'],
            ['Puede ser degradado o removido del Club', 'No', 'Sí', 'Sí'],
          ]}
        />
        <p>
          5.2. El <strong className="text-white/80">Propietario</strong> es la persona que creó el Club. Este rol es <strong className="text-white/80">intransferible</strong>: no puede reasignarse a otra persona ni existir un segundo Propietario del mismo Club, ni dentro de la Plataforma ni por ningún otro medio.
        </p>
        <p>
          5.3. El alta de Personal del Club se realiza por invitación desde la Plataforma. La invitación expira a los 7 días si no se acepta.
        </p>
        <p>
          5.4. El Club es responsable de las acciones que su Personal realice dentro de la Plataforma, incluyendo la exactitud de la información de Torneos que publique y de los datos de Jugadores que registre.
        </p>
      </LegalSection>

      {/* 6 */}
      <LegalSection number={6} title="Precios, Créditos y Suscripción">
        <p>
          Los precios de esta sección son los vigentes a la fecha de este documento. Zetio se reserva el derecho de modificarlos conforme al aviso de cambios de la Sección 15, sin afectar Créditos ya adquiridos.
        </p>
        <p>
          6.1. <strong className="text-white/80">Unidad de Crédito.</strong> Un Crédito equivale a un Jugador inscrito. Una Pareja inscrita consume 2 Créditos. Un Torneo de <em>N</em> Parejas consume <em>2N</em> Créditos, cobrados al publicar el Torneo (y, si la capacidad se amplía después, solo se cobra el incremento).
        </p>
        <p>
          6.2. <strong className="text-white/80">Paquetes de Créditos</strong> (pago único, sin vencimiento anticipado — ver 6.5 sobre expiración):
        </p>
        <LegalTable
          headers={['Paquete', 'Créditos', 'Precio de lista (MXN)']}
          rows={[
            ['S', '80', '$1,200'],
            ['M', '200', '$2,800'],
            ['L', '500', '$6,500'],
            ['XL', '1,000', '$12,000'],
          ]}
        />
        <p>
          6.3. <strong className="text-white/80">Planes de Suscripción</strong> (créditos incluidos por mes, cobro mensual o anual):
        </p>
        <LegalTable
          headers={['Plan', 'MXN/mes', 'Créditos/mes', 'Torneos Relámpago incluidos/mes']}
          rows={[
            ['Inicial', '$999', '80', '2'],
            ['Competidor', '$2,299', '220', '5'],
            ['Élite', '$4,999', '500', '12'],
          ]}
        />
        <p>
          El plan anual se cobra como 10 meses de la tarifa mensual (equivalente a 2 meses sin costo).
        </p>
        <p>
          6.4. <strong className="text-white/80">Torneo Relámpago.</strong> Todo Club cuenta con Torneos Relámpago gratuitos mensuales (Torneos de hasta 8 Parejas), según lo indicado en su plan. Los Créditos del Torneo Relámpago no son acumulables entre meses y son independientes de los Créditos pagados.
        </p>
        <p>
          6.5. <strong className="text-white/80">Vigencia y expiración de Créditos.</strong> Los Créditos adquiridos mediante Paquete o Suscripción anual se acumulan y son válidos durante <strong className="text-white/80">12 meses</strong> a partir de su otorgamiento; transcurrido ese plazo sin usarse, expiran sin derecho a reembolso.
        </p>
        <p>
          6.6. <strong className="text-white/80">Saldo insuficiente.</strong> Con saldo de Créditos en cero, el Club conserva acceso de solo lectura a sus Torneos existentes, pero no puede crear ni publicar Torneos nuevos, salvo el Torneo Relámpago gratuito disponible de bienvenida.
        </p>
        <p>
          6.7. <strong className="text-white/80">Impuestos.</strong> Los precios de lista de Paquetes y Suscripciones son precios finales, <strong className="text-white/80">con el Impuesto al Valor Agregado (IVA) incluido</strong>.
        </p>
      </LegalSection>

      {/* 7 */}
      <LegalSection number={7} title="Renovación automática, cancelación y reembolsos">
        <p>
          Esta sección se rige por el artículo 76 Bis de la Ley Federal de Protección al Consumidor, vigente desde el 13 de diciembre de 2025.
        </p>
        <p>
          7.1. <strong className="text-white/80">Divulgación de cargos recurrentes.</strong> Antes de confirmar una Suscripción, la Plataforma informa de manera clara y visible: que se trata de un cargo recurrente, su periodicidad (mensual o anual), el monto exacto en pesos mexicanos, y la fecha de cada cargo.
        </p>
        <p>
          7.2. <strong className="text-white/80">Consentimiento expreso.</strong> La Suscripción solo se activa tras el pago inicial mediante Stripe, lo que constituye el consentimiento expreso e informado del Club a los cargos recurrentes descritos en 7.1.
        </p>
        <p>
          7.3. <strong className="text-white/80">Aviso previo a la renovación.</strong> Zetio notificará al Club, por correo electrónico, con al menos <strong className="text-white/80">5 días naturales</strong> de anticipación a cada fecha de renovación de su Suscripción, indicando el monto y la fecha exacta del cargo.
        </p>
        <p>
          7.4. <strong className="text-white/80">Cancelación.</strong> El Club puede cancelar su Suscripción en cualquier momento, sin penalización, desde la sección de <strong className="text-white/80">Facturación</strong> dentro de Configuración del Club. La cancelación surte efecto al final del periodo ya pagado; el Club conserva el acceso y los Créditos ya otorgados hasta esa fecha, y no se generan cargos posteriores.
        </p>
        <p>
          7.5. <strong className="text-white/80">Cambios de plan.</strong> El Club puede mejorar (upgrade) o disminuir (downgrade) su plan de Suscripción desde la Plataforma. Una mejora de plan se cobra de inmediato de forma prorrateada; una disminución de plan surte efecto hasta el final del periodo vigente, sin reembolso del periodo en curso.
        </p>
        <p>
          7.6. <strong className="text-white/80">Reembolso al eliminar un Torneo.</strong> Si el Club elimina un Torneo <strong className="text-white/80">sin Parejas inscritas</strong> (único caso permitido, exclusivo del Propietario, desde la Zona de Peligro de Configuración), se reembolsa a su saldo de Créditos el <strong className="text-white/80">50%</strong> de los Créditos que se habían debitado al crear ese Torneo. Los Créditos gratuitos del Torneo Relámpago utilizados no se reembolsan bajo ningún supuesto.
        </p>
        <p>
          7.7. <strong className="text-white/80">No reembolso general.</strong> Fuera de los casos de las Secciones 6.5 (expiración), 7.6 (eliminación de Torneo vacío) y 7.8 (errores de cobro), los Créditos y pagos de Suscripción no son reembolsables.
        </p>
        <p>
          7.8. <strong className="text-white/80">Errores de cobro.</strong> Si un cargo se generó por un error atribuible a la Plataforma (por ejemplo, un monto duplicado o incorrecto), Zetio reembolsará el importe erróneo al medio de pago original una vez confirmado el error.
        </p>
      </LegalSection>

      {/* 8 */}
      <LegalSection number={8} title="Obligaciones del Club y del Personal del Club">
        <p>El Club se obliga a:</p>
        <LegalList items={[
          'Proporcionar información veraz y actualizada sobre sus Torneos (precio, ubicación, fechas, categorías, restricciones de edad/sexo).',
          'Ser el único responsable de cobrar, cuando aplique, la cuota de inscripción a sus Jugadores, y de cumplir cualquier obligación fiscal derivada de esos cobros — Zetio no interviene en ellos.',
          'No subir a la Plataforma contenido (flyers, logotipos, nombres) que infrinja derechos de terceros, sea ofensivo, o no corresponda a una imagen real (fotografía o gráfico).',
          'Ser responsable de la exactitud de los datos de los Jugadores "sin Cuenta" que registre manualmente, incluyendo tener el consentimiento correspondiente para hacerlo en su nombre.',
          'No intentar eludir el cobro de Créditos, ni usar la Plataforma para fines distintos a la organización legítima de Torneos deportivos.',
        ]} />
      </LegalSection>

      {/* 9 */}
      <LegalSection number={9} title="Obligaciones del Jugador / Participante">
        <p>El Jugador se obliga a:</p>
        <LegalList items={[
          'Proporcionar información veraz al crear su Cuenta y al inscribirse en un Torneo.',
          'Cumplir con las reglas deportivas y de conducta que determine cada Club para sus Torneos.',
          'Reconocer que la inscripción y el pago de la cuota de participación, cuando exista, se gestionan directamente con el Club organizador y no con Zetio.',
          'Un Jugador registrado como "sin Cuenta" por un Club no recibe notificaciones de la Plataforma ni acumula estadísticas propias; es responsabilidad del Club informarle directamente.',
        ]} />
      </LegalSection>

      {/* 10 */}
      <LegalSection number={10} title="Propiedad intelectual">
        <p>
          10.1. Zetio es titular de la marca "Zetio", el software de la Plataforma y su diseño. Ninguna disposición de estos Términos transfiere esos derechos al Club o al Jugador.
        </p>
        <p>
          10.2. El Club conserva la titularidad del contenido que sube (logotipos, flyers, nombre del Club), y otorga a Zetio una licencia limitada para mostrarlo dentro de la Plataforma y del ecosistema Zetio (por ejemplo, en la app de Usuarios, para que los Jugadores vean la información del Torneo) mientras el contenido permanezca publicado.
        </p>
      </LegalSection>

      {/* 11 */}
      <LegalSection number={11} title="Protección de datos personales">
        <p>
          El tratamiento de datos personales de Clubes, Personal del Club y Jugadores se rige por el <Link to="/privacyclubs" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">Aviso de Privacidad de Zetio Club</Link>, disponible en la Plataforma, que forma parte integral de estos Términos por referencia. Ante cualquier contradicción entre ambos documentos en materia de datos personales, prevalece el Aviso de Privacidad.
        </p>
      </LegalSection>

      {/* 12 */}
      <LegalSection number={12} title="Seguridad">
        <p>
          Zetio implementa medidas técnicas y organizativas razonables para proteger la información alojada en la Plataforma, incluyendo control de acceso a nivel de base de datos (Row Level Security), cifrado en tránsito (HTTPS/TLS) y separación de roles dentro de cada Club. <strong className="text-white/80">Ninguna plataforma en internet puede garantizar seguridad absoluta</strong>, y Zetio no asegura que el Servicio esté libre de toda vulnerabilidad; el Club y el Jugador reconocen este riesgo inherente a cualquier servicio en línea. Zetio se compromete a atender de forma prioritaria cualquier incidente de seguridad que comprometa datos personales y a notificarlo conforme a la legislación aplicable.
        </p>
      </LegalSection>

      {/* 13 */}
      <LegalSection number={13} title="Limitación de responsabilidad">
        <p>
          En la máxima medida permitida por la ley mexicana, y sin que esto excluya responsabilidad por dolo o mala fe (inválido conforme al artículo 2117 del Código Civil Federal), Zetio no será responsable por: (a) la veracidad de la información publicada por un Club sobre sus Torneos; (b) disputas entre el Club y sus Jugadores relacionadas con el cobro de inscripciones, reglas deportivas o resultados; (c) interrupciones del Servicio por causas de fuerza mayor o de terceros proveedores (Stripe, Supabase, u otros); ni (d) daños indirectos, incidentales o lucro cesante derivados del uso de la Plataforma.
        </p>
        <p>
          En cualquier caso, y salvo dolo o mala fe, la responsabilidad total de Zetio frente a un Club por cualquier reclamación relacionada con el Servicio <strong className="text-white/80">no excederá el monto que dicho Club haya pagado a Zetio en los 12 meses anteriores al hecho que dio origen al reclamo</strong>.
        </p>
      </LegalSection>

      {/* 14 */}
      <LegalSection number={14} title="Suspensión y terminación">
        <p>
          14.1. Zetio podrá suspender o cancelar el acceso de un Club o Usuario que incumpla estos Términos, proporcione información falsa, o utilice la Plataforma de forma fraudulenta, previa notificación cuando sea razonablemente posible.
        </p>
        <p>
          14.2. El Club puede solicitar la baja de su cuenta y la de su Club en cualquier momento, escribiendo a <a href="mailto:zetioapp@gmail.com" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetioapp@gmail.com</a>. La eliminación de los datos personales asociados se rige por el procedimiento de derechos ARCO descrito en la Sección 8 del Aviso de Privacidad de Zetio Club.
        </p>
      </LegalSection>

      {/* 15 */}
      <LegalSection number={15} title="Modificaciones a estos Términos">
        <p>
          Zetio podrá modificar estos Términos en cualquier momento. Los cambios materiales se notificarán por correo electrónico a todos los Usuarios con al menos <strong className="text-white/80">15 días naturales</strong> de anticipación antes de su entrada en vigor. Los cambios no materiales (correcciones de redacción, aclaraciones) pueden aplicarse sin aviso previo. El uso continuado del Servicio después de la entrada en vigor de un cambio material constituye aceptación de los Términos modificados.
        </p>
      </LegalSection>

      {/* 16 */}
      <LegalSection number={16} title="Ley aplicable y jurisdicción">
        <p>
          Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia relacionada con estos Términos, las partes se someten a los tribunales competentes de la ciudad de <strong className="text-white/80">Aguascalientes, Aguascalientes</strong>, renunciando a cualquier otro fuero que pudiera corresponderles.
        </p>
      </LegalSection>

      {/* 17 */}
      <LegalSection number={17} title="Contacto">
        <p>
          Para dudas sobre estos Términos: <a href="mailto:zetioapp@gmail.com" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetioapp@gmail.com</a>.
        </p>
        <div className="mt-3 p-4 rounded-xl border border-white/7 bg-white/2 space-y-1.5">
          <p><span className="text-white/80 font-medium">Email:</span>{' '}<a href="mailto:zetioapp@gmail.com" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">zetioapp@gmail.com</a></p>
          <p><span className="text-white/80 font-medium">Proveedor:</span> Luis Fernando Esparza Zarate</p>
        </div>
      </LegalSection>

      <p className="text-white/20 text-xs text-center pt-4">© 2026 Zetio. Todos los derechos reservados.</p>
    </LegalLayout>
  )
}