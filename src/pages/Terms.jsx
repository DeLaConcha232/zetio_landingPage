import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function Terms() {
  return (
    <LegalLayout
      badge="Legal · Términos"
      title="Términos y Condiciones"
      updated="1 de marzo de 2026"
    >
      <LegalSection number={1} title="Aceptación de los términos">
        <p>
          Estos Términos y Condiciones ("Términos") regulan el acceso y uso de la plataforma Zetio, operada por <strong className="text-white/80">Zetio Padel Software S.L.</strong> ("Zetio", "nosotros"). Al crear una cuenta o acceder a la Plataforma, confirmas que has leído, comprendido y aceptado estos Términos en su totalidad.
        </p>
        <p>
          Si no aceptas estos Términos, no debes utilizar la Plataforma.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Descripción del servicio">
        <p>
          Zetio es una plataforma digital de gestión y disfrute del pádel que ofrece, entre otras funcionalidades:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            'Organización y participación en torneos sociales y federados.',
            'Reserva de pistas en clubes asociados.',
            'Conexión con coaches certificados para sesiones de entrenamiento.',
            'Estadísticas de rendimiento y análisis de partidos.',
            'Búsqueda y emparejamiento con otros jugadores.',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2">
          Zetio se reserva el derecho de modificar, suspender o discontinuar cualquier funcionalidad en cualquier momento con previo aviso.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Registro y cuenta de usuario">
        <p>
          Para acceder a la mayoría de funcionalidades de la Plataforma debes crear una cuenta. Al hacerlo, te comprometes a:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            'Proporcionar información veraz, precisa y actualizada.',
            'Mantener la confidencialidad de tus credenciales de acceso.',
            'Notificarnos de inmediato ante cualquier uso no autorizado de tu cuenta.',
            'No ceder, vender ni transferir tu cuenta a terceros.',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2">
          Eetio no será responsable de daños derivados del incumplimiento de estas obligaciones por parte del usuario.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Uso aceptable">
        <p>
          Al utilizar la Plataforma, te comprometes a no:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            'Publicar contenido ilegal, difamatorio, obsceno o que infrinja derechos de terceros.',
            'Usar la Plataforma para enviar spam, publicidad no solicitada o mensajes masivos.',
            'Llevar a cabo actividades que perjudiquen el funcionamiento o la seguridad de la Plataforma.',
            'Intentar acceder sin autorización a sistemas, datos o cuentas de otros usuarios.',
            'Utilizar bots, scrapers u otras herramientas automatizadas sin autorización expresa.',
            'Hacerse pasar por otra persona u organización.',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={5} title="Propiedad intelectual">
        <p>
          Todo el contenido de la Plataforma, incluyendo pero sin limitarse a logotipos, diseños, textos, gráficos, código fuente y bases de datos, es propiedad de Zetio o de sus licenciantes y está protegido por las leyes de propiedad intelectual e industrial.
        </p>
        <p>
          Se te concede una licencia limitada, no exclusiva, no transferible y revocable para usar la Plataforma conforme a estos Términos. Queda expresamente prohibida cualquier reproducción, distribución o uso comercial sin autorización previa y por escrito de Zetio.
        </p>
      </LegalSection>

      <LegalSection number={6} title="Contenido del usuario">
        <p>
          Al publicar contenido en la Plataforma (fotos, resultados, comentarios, etc.) nos otorgas una licencia mundial, no exclusiva y libre de regalías para usar, reproducir y mostrar dicho contenido dentro de la Plataforma.
        </p>
        <p>
          Eres el único responsable del contenido que publicas. Zetio se reserva el derecho de eliminar contenido que infrinja estos Términos o la normativa aplicable.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Servicios de terceros">
        <p>
          La Plataforma puede integrar servicios de terceros (pasarelas de pago, mapas, clubes, etc.). Zetio no se hace responsable del contenido, disponibilidad o prácticas de privacidad de dichos terceros. Te recomendamos revisar sus propias políticas.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Limitación de responsabilidad">
        <p>
          En la máxima medida permitida por la ley aplicable, Zetio no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de la Plataforma, incluyendo la pérdida de datos, pérdida de ingresos o interrupción del negocio.
        </p>
        <p>
          La responsabilidad total de Zetio frente a un usuario por cualquier reclamación no superará el importe abonado por dicho usuario en los doce (12) meses anteriores al hecho que originó la reclamación.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Suspensión y cancelación">
        <p>
          Zetio se reserva el derecho de suspender o cancelar tu cuenta, sin previo aviso ni responsabilidad, si incumples estos Términos o si consideramos que tu comportamiento perjudica a otros usuarios o a la integridad de la Plataforma.
        </p>
        <p>
          Puedes cancelar tu cuenta en cualquier momento desde los ajustes de la aplicación o enviando un correo a <a href="mailto:soporte@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">soporte@zetio.app</a>.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Modificaciones de los términos">
        <p>
          Zetio puede modificar estos Términos en cualquier momento. Los cambios entrarán en vigor en el momento de su publicación en la Plataforma. Si continúas utilizando la Plataforma tras la publicación de los cambios, se entenderá que los aceptas.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Legislación aplicable y jurisdicción">
        <p>
          Estos Términos se rigen por la legislación española. Cualquier controversia que se derive de estos Términos se someterá a los Juzgados y Tribunales de la ciudad de Madrid, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Contacto">
        <p>
          Para cualquier consulta relacionada con estos Términos:
        </p>
        <div className="mt-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] space-y-1">
          <p><span className="text-white/80 font-medium">Empresa:</span> Zetio Padel Software S.L.</p>
          <p><span className="text-white/80 font-medium">Email:</span> <a href="mailto:legal@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">legal@zetio.app</a></p>
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
