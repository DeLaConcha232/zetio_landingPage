import LegalLayout, { LegalSection } from '../components/LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout
      badge="Legal · Privacidad"
      title="Política de Privacidad"
      updated="1 de marzo de 2026"
    >
      <LegalSection number={1} title="Introducción">
        <p>
          En <strong className="text-white/80">Zetio Padel Software S.L.</strong> ("Zetio", "nosotros", "nuestro") nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos la información personal que obtenemos a través de nuestra aplicación móvil y sitio web (colectivamente, la "Plataforma").
        </p>
        <p>
          Al utilizar la Plataforma, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con alguno de los términos, te pedimos que no utilices nuestros servicios.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Información que recopilamos">
        <p>
          Recopilamos distintos tipos de información según la forma en que interactúas con la Plataforma:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            ['Información de registro', 'nombre, apellidos, correo electrónico, contraseña cifrada y fecha de nacimiento.'],
            ['Información de perfil deportivo', 'nivel de juego, historial de partidos, estadísticas y logros.'],
            ['Datos de uso', 'páginas visitadas, funciones utilizadas, duración de sesiones y acciones dentro de la app.'],
            ['Datos de dispositivo', 'modelo, sistema operativo, identificador de dispositivo y dirección IP.'],
            ['Datos de ubicación', 'ubicación aproximada para mostrar pistas y torneos cercanos (solo con tu permiso).'],
            ['Comunicaciones', 'mensajes enviados a través de nuestra plataforma de soporte.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span><span className="text-white/80 font-medium">{title}:</span> {desc}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={3} title="Cómo usamos tu información">
        <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
        <ul className="list-none space-y-2 mt-2">
          {[
            'Proporcionar, mantener y mejorar la Plataforma.',
            'Personalizar tu experiencia y mostrarte contenido relevante.',
            'Gestionar torneos, rankings y estadísticas de juego.',
            'Enviarte notificaciones sobre partidos, torneos y actualizaciones (con tu consentimiento).',
            'Procesar pagos de servicios premium cuando aplique.',
            'Detectar, investigar y prevenir fraudes o actividades no autorizadas.',
            'Cumplir con obligaciones legales aplicables.',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={4} title="Base legal para el tratamiento">
        <p>
          Tratamos tus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y demás normativa aplicable. Las bases legales que empleamos son:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            ['Ejecución de contrato', 'para prestarte los servicios de la Plataforma.'],
            ['Consentimiento', 'para el envío de comunicaciones de marketing y el acceso a la ubicación.'],
            ['Interés legítimo', 'para mejorar la seguridad y la experiencia de usuario.'],
            ['Obligación legal', 'para cumplir con requerimientos normativos.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span><span className="text-white/80 font-medium">{title}:</span> {desc}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={5} title="Compartición de datos con terceros">
        <p>
          No vendemos tu información personal. Podemos compartirla con los siguientes terceros únicamente cuando sea necesario para prestar el servicio:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            'Proveedores de infraestructura en la nube (alojamiento de datos y servidores).',
            'Pasarelas de pago para gestionar transacciones seguras.',
            'Herramientas de analítica para medir el rendimiento de la Plataforma (datos anonimizados).',
            'Autoridades competentes cuando exista obligación legal.',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection number={6} title="Conservación de datos">
        <p>
          Conservamos tus datos personales mientras mantengas una cuenta activa en la Plataforma, y durante el periodo adicional necesario para cumplir obligaciones legales o resolver disputas.
        </p>
        <p>
          Si solicitas la eliminación de tu cuenta, procederemos a eliminar o anonimizar tus datos en un plazo máximo de <strong className="text-white/80">30 días</strong>, salvo los datos que debamos conservar por obligación legal.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Tus derechos">
        <p>De acuerdo con la normativa de protección de datos tienes derecho a:</p>
        <ul className="list-none space-y-2 mt-2">
          {[
            ['Acceso', 'solicitar una copia de los datos personales que tenemos sobre ti.'],
            ['Rectificación', 'corregir datos inexactos o incompletos.'],
            ['Supresión', 'solicitar que eliminemos tus datos ("derecho al olvido").'],
            ['Portabilidad', 'recibir tus datos en un formato estructurado y legible por máquina.'],
            ['Oposición', 'oponerte al tratamiento basado en interés legítimo.'],
            ['Limitación', 'solicitar que restrinjamos el tratamiento mientras se resuelve una reclamación.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">›</span>
              <span><span className="text-white/80 font-medium">{title}:</span> {desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Para ejercer cualquiera de estos derechos, contáctanos en <a href="mailto:privacidad@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">privacidad@zetio.app</a>.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Seguridad">
        <p>
          Implementamos medidas técnicas y organizativas adecuadas para proteger tu información frente a accesos no autorizados, pérdida, divulgación o destrucción, entre ellas: cifrado en tránsito (TLS) y en reposo, acceso restringido a datos y auditorías periódicas de seguridad.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Cambios en esta política">
        <p>
          Podemos actualizar esta Política de Privacidad periódicamente. Cuando lo hagamos, actualizaremos la fecha indicada al inicio del documento e, si los cambios son significativos, te notificaremos por correo electrónico o mediante un aviso destacado en la Plataforma.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Contacto">
        <p>
          Si tienes dudas o preguntas sobre esta política, puedes contactarnos en:
        </p>
        <div className="mt-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] space-y-1">
          <p><span className="text-white/80 font-medium">Empresa:</span> Zetio Padel Software S.L.</p>
          <p><span className="text-white/80 font-medium">Email:</span> <a href="mailto:privacidad@zetio.app" className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">privacidad@zetio.app</a></p>
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
