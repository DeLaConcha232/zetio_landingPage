# Política de Privacidad — Zetio

**Última actualización:** 29 de mayo de 2026

Bienvenido a **Zetio**. Esta Política de Privacidad describe cómo Diego Diaz ("nosotros", "nuestro" o "Zetio") recopila, usa, almacena y protege tu información cuando utilizas la aplicación móvil Zetio y los servicios asociados (en conjunto, el "Servicio").

Zetio es una plataforma de pádel compuesta por tres módulos, cada uno con tratamientos de datos específicos descritos en esta política:

- **Zetio Torneos** — organización y participación en torneos estructurados con inscripciones, categorías, fases de grupos y eliminatorias.
- **Zetio Play** — retas casuales entre amigos con códigos de invitación, tabla de posiciones y resultados rápidos.
- **Zetio Coach** — gestión de la relación entre coaches y jugadores, agenda de sesiones de entrenamiento, partidos supervisados y métricas deportivas.

Al usar Zetio, aceptas las prácticas descritas en esta política. Si no estás de acuerdo, por favor no utilices el Servicio.

---

## 1. Información que recopilamos

### 1.1 Información que proporcionas directamente

Cuando te registras y usas Zetio, recopilamos la siguiente información:

| Categoría | Datos | Propósito |
|-----------|-------|-----------|
| **Cuenta** | Correo electrónico, contraseña (almacenada como hash, nunca en texto plano), o cuenta Google (OAuth) | Crear y autenticar tu cuenta |
| **Perfil** | Nombre, apellido paterno, apellido materno | Identificarte como jugador en torneos, retas y sesiones de coaching |
| **Datos personales** | Fecha de nacimiento, sexo | Validar tu elegibilidad en categorías de torneo por edad y género |

> El dato de **sexo** se considera categoría especial bajo el Art. 9 del GDPR. Se trata con base en tu **consentimiento explícito** otorgado al registrarte y se utiliza únicamente para determinar elegibilidad en categorías por género en torneos y retas.
| **Contacto** | Número de teléfono | Información de perfil y contacto entre jugadores |
| **Ubicación del perfil** | Nacionalidad, estado, ciudad | Mostrar tu ubicación en tu perfil |
| **Preferencias** | Deporte preferido (ej. pádel) | Personalizar tu experiencia |
| **Encuesta de experiencia** | Ciudad, estado y país donde juegas pádel; club donde juegas; estilo de juego (amigos, retas, torneos, clases); frecuencia semanal de juego; cómo conociste Zetio; funcionalidades de tu interés; intención de participar en torneos | Personalizar el contenido y las funcionalidades que te mostramos. Esta información se recopila de forma progresiva y **su aportación es completamente voluntaria**: puedes saltar cualquier pregunta en cualquier momento sin que ello afecte al funcionamiento del Servicio |

### 1.2 Información recopilada automáticamente

| Categoría | Datos | Propósito |
|-----------|-------|-----------|
| **Ubicación del dispositivo** | Coordenadas aproximadas (latitud/longitud), ciudad, estado, país, código postal | Mostrarte torneos cercanos a tu zona. La ubicación se obtiene **únicamente tras tu consentimiento explícito** mediante el sistema de permisos del dispositivo (iOS/Android). La precisión es reducida (red/WiFi, no GPS fino) y se actualiza como máximo cada 24 horas. Puedes revocar este permiso en cualquier momento desde los ajustes del sistema operativo; al revocarlo, las funciones dependientes de ubicación dejarán de estar disponibles, sin afectar el resto del Servicio. |
| **Token de push** | Identificador único del dispositivo para notificaciones, plataforma (iOS/Android) | Enviarte notificaciones operativas sobre tus torneos, retas, partidos, invitaciones de amistad y de vínculo coach-jugador |
| **Datos de sesión** | Token de sesión, identificador de sesión (UUID), timestamps de actividad | Mantener tu sesión activa y segura |
| **Plataforma del dispositivo** | Sistema operativo utilizado (iOS, Android o web) | Compatibilidad técnica y estadísticas internas de uso |
| **Código de país** | País derivado de tu ubicación aproximada (p. ej. MX, US, ES) | Personalización regional y estadísticas internas |

### 1.3 Información de torneos, retas y partidos

Cuando participas en los módulos Zetio Torneos y Zetio Play, generamos y almacenamos:

**Zetio Torneos (torneos estructurados):**
- Inscripciones a torneos y categorías
- Parejas formadas (tú y tu compañero)
- Resultados de partidos (marcadores por set)
- Historial de partidos jugados
- Estadísticas (participaciones, trofeos, posiciones en grupos y eliminatorias)

**Zetio Play (retas casuales):**
- Retas que creas o en las que participas, con nombre, modalidad (número de jugadores), club indicado y estado
- Un **código de invitación** (`invite_code`) único por reta que puedes compartir con otros jugadores para que se unan. Cualquier persona con el código puede unirse a la reta, incluso usando el Modo Invitado descrito en la sección 1.5.
- Lista de jugadores de cada reta. Una reta puede incluir **jugadores manuales** (sin cuenta en Zetio): en ese caso únicamente se almacena el nombre de texto libre que introduce el organizador, sin datos de contacto ni identificación adicional.
- Jornadas, partidos, marcadores, rankings parciales y finales
- Histórico del ranking final al cerrar la reta (snapshot agregado)

**Modificación de la lista de jugadores por el host.** El usuario que crea una reta (host) puede, en cualquier momento — incluso después de que la reta haya comenzado y aun cuando ya existan partidos con resultados registrados — **reemplazar o quitar a cualquier participante distinto de sí mismo**. Esto incluye:

- Cambiar a un amigo vinculado por otro amigo vinculado, por un nombre manual (jugador sin cuenta), o por un nombre genérico (`Jugador N`).
- Quitar a un participante que se unió mediante el código de invitación.

Esta capacidad es **exclusiva del host** y forma parte del control operativo sobre las retas que él mismo organiza.

**Consecuencias para el participante removido o reemplazado:**

- El **vínculo entre el usuario y la reta se rompe inmediatamente**: el `user_id` del usuario deja de estar asociado a ese slot.
- La reta **deja de aparecer en su sección "Partidos donde participas"** y deja de poder visualizarla desde su cuenta, salvo que el host vuelva a incluirlo más tarde.
- Los **resultados de los partidos ya jugados permanecen en la reta** bajo el slot del que fue removido. Los puntos están ligados a la posición del slot, no a la identidad del usuario que los introdujo; por integridad histórica de la reta no se borran. Estos resultados pasan a aparecer asociados al nuevo ocupante del slot (otro jugador, un nombre manual o el placeholder genérico).
- El **nombre que se mostraba** en ese slot puede ser sustituido por el host por el nombre del nuevo participante o por un identificador genérico (`Jugador N`).

Al unirte a una reta como amigo vinculado o mediante código de invitación, aceptas que el host conserva esta facultad. Si en algún momento dejas de tener acceso a una reta en la que participabas, lo más probable es que el host te haya removido o reemplazado. Esto no afecta a tu cuenta de Zetio ni a ningún otro torneo o reta en el que participes.

**Sistema de amigos (`friend_code`):**

Zetio asigna a cada usuario un **código de amigo** (`friend_code`) único. Este código es un **identificador público dentro de la plataforma**: cualquier otro usuario registrado que conozca tu código puede localizarte para enviarte una solicitud de amistad. El código **no es secreto**; compartirlo es una acción deliberada y equivalente a darle a alguien tu nombre de usuario público. Una solicitud de amistad **no** otorga acceso automático a tus datos: debe ser aceptada por ambas partes. Zetio **no accede a la libreta de contactos de tu dispositivo** en ningún momento.

**Visibilidad del perfil y datos dentro de la plataforma**

Al utilizar Zetio, aceptas que ciertos datos formen parte de la experiencia social de la plataforma. Esto incluye:

- Tu nombre de usuario
- Resultados de partidos
- Estadísticas deportivas generadas en torneos, retas y coaching

Estos datos pueden ser visibles para otros usuarios dentro del mismo contexto (torneos, retas o vínculo coach-jugador), pero nunca incluyen información privada como correo electrónico, teléfono o fecha de nacimiento. Esta visibilidad es parte esencial del funcionamiento del Servicio.

**Visibilidad de los datos de torneos y retas:** Los resultados de partidos, estadísticas y posiciones son visibles para otros usuarios registrados en Zetio que participen en el mismo torneo o reta. Tu nombre y estadísticas forman parte de tu perfil de jugador visible dentro de la plataforma. Tu información privada (correo electrónico, número de teléfono, fecha de nacimiento) **nunca es visible para otros usuarios**.

### 1.4 Información de pagos

Actualmente Zetio **no procesa pagos en línea** dentro de la aplicación:

- Las inscripciones a torneos se gestionan mediante un **flujo de reservación sin cobro** dentro de la app; cualquier pago asociado se coordina de forma externa entre el organizador del torneo y el jugador.
- Los pagos de sesiones de Zetio Coach se registran internamente como una **herramienta de seguimiento para el coach** (marcar una sesión como "pendiente" o "pagada"), sin intervenir en ninguna transacción financiera real ni en el movimiento de dinero.
- **Zetio no recopila, almacena ni tiene acceso a datos de tarjetas, cuentas bancarias, credenciales de pago ni ningún dato financiero sensible.**

En caso de que en el futuro Zetio integre un procesador de pagos externo (por ejemplo, Stripe), actualizaremos esta Política de Privacidad con **al menos 30 días de anticipación** antes de activar dicha integración, describiendo qué datos se compartirán y con qué finalidad.

### 1.5 Modo Invitado (Guest Mode)

Zetio Play permite acceder al módulo de retas casuales **sin necesidad de crear una cuenta**. En modo invitado:

- **Datos que recopilamos:** Datos de sesión anónimos (sin vincular a un usuario identificado), ubicación aproximada del dispositivo (únicamente si concedes el permiso), y eventos de analítica interna anónimos para medir el uso de la funcionalidad.
- **Datos que NO recopilamos:** Correo electrónico, contraseña, número de teléfono, fecha de nacimiento ni ningún otro dato de perfil personal.
- **Unirse a una reta con código:** Un usuario en modo invitado puede unirse a una reta de Zetio Play utilizando únicamente el código de invitación (`invite_code`) y un **nombre temporal** introducido manualmente. Ese nombre se almacena asociado a la reta (no a un perfil) únicamente mientras la reta esté activa, y forma parte del historial agregado de la reta al cerrarse.
- **El host puede removerte de la reta** en cualquier momento (ver sección 1.3, "Modificación de la lista de jugadores por el host"). Al ser removido como invitado, pierdes el acceso a la reta y, como tus datos de invitado no están vinculados a un perfil permanente, no quedará ninguna referencia identificable a ti en esa reta.
- Los datos de invitado **no se asocian a ningún perfil permanente** y se eliminan al cerrar la sesión o al crear una cuenta.
- Si decides crear una cuenta desde el modo invitado, se te solicitará proporcionar la información descrita en la sección 1.1.

### 1.6 Información específica de Zetio Coach

El módulo **Zetio Coach** permite a un usuario actuar como *coach* (entrenador) y gestionar la relación con sus *jugadores*. Un mismo usuario puede desempeñar ambos roles simultáneamente (ser coach de unos jugadores y jugador vinculado a otro coach). El tratamiento de datos específico de este módulo es el siguiente:

**Vínculo coach ↔ jugador (consentimiento explícito).** Para que un coach pueda registrar métricas y sesiones sobre un jugador con cuenta en Zetio, debe existir previamente un **vínculo aceptado**. El proceso es:

1. El coach envía una **invitación** al jugador desde la app. El jugador recibe una notificación (tipo `coach_invitation`) con el nombre del coach.
2. El vínculo permanece en estado **pendiente** hasta que el jugador lo **acepta explícitamente**. Mientras esté pendiente, no se comparten datos del jugador con el coach.
3. Al aceptar, el vínculo pasa a **activo** y el coach comienza a poder registrar información deportiva del jugador.
4. Tanto el coach como el jugador pueden **romper el vínculo** en cualquier momento desde la app, lo que detiene inmediatamente el acceso del coach a datos futuros del jugador.

**Datos que un coach registra sobre sus jugadores vinculados:**

- **Sesiones de entrenamiento agendadas:** fecha, hora y participantes de cada sesión.
- **Partidos supervisados:** fecha, club/ubicación, tipo de partido, notas del coach, y participantes.
- **Estadísticas deportivas por jugador:** sets jugados, puntuaciones, métricas de efectividad, agregados históricos y progresión.
- **Notas del coach** asociadas a sesiones o partidos (texto libre introducido por el coach).
- **Jugadores manuales:** un coach también puede registrar jugadores "manuales" que no tienen cuenta en Zetio. En ese caso únicamente se almacena el nombre de texto libre introducido por el coach, sin datos de contacto ni identificación adicional.

**Naturaleza no médica de las métricas.** Las métricas registradas en Zetio Coach corresponden exclusivamente a rendimiento deportivo y actividad dentro de la plataforma. Estas métricas **no constituyen datos médicos ni información de salud** en el sentido legal o clínico (LFPDPPP, GDPR Art. 9, HIPAA o normativa equivalente), y Zetio no registra datos biométricos, lesiones, condiciones médicas ni información de salud personal.

**Registro interno de pagos de coaching.** Zetio Coach incluye una funcionalidad para que el coach marque sesiones como **"pendiente" o "pagada"** como herramienta de seguimiento propia. Este registro es estrictamente interno: **Zetio no procesa pagos reales, no recolecta datos bancarios, no maneja transferencias de dinero y no interviene en la relación económica entre coach y jugador.** Los campos almacenados son únicamente el estado (`pendiente`/`pagado`) y la marca de tiempo de cambio de estado.

**Visibilidad de los datos de Zetio Coach:**

- Un **coach** puede ver todos los datos deportivos (sesiones, partidos, estadísticas, notas) de los jugadores que han aceptado vincularse con él.
- Un **jugador** puede ver sus propias métricas y el historial compartido con el coach con el que está vinculado.
- **Los datos de Zetio Coach no son visibles para usuarios fuera del vínculo activo**, ni aparecen en el perfil público del jugador dentro de Zetio Play o Zetio Torneos.
- Si el vínculo se rompe, el acceso del coach a datos futuros del jugador cesa inmediatamente; los registros históricos permanecen asociados al coach que los creó salvo solicitud de eliminación (sección 6).

**Notificaciones operativas de Coach.** Las invitaciones de vínculo y otros eventos de coaching se envían como notificaciones dentro de la app y, si están habilitados, como notificaciones push. Estas notificaciones son **operativas**, no publicitarias.

**Menores de edad en Zetio Coach.** Si el jugador vinculado es menor de edad, es **requisito indispensable** contar con el consentimiento de un padre o tutor legal antes de aceptar el vínculo y antes de que el coach registre cualquier dato deportivo del menor. Ver sección 7 para más detalle.

### 1.7 Soporte y consultas

Cuando abres un **ticket de soporte** desde la app o nos escribes a nuestro correo de soporte, almacenamos los siguientes datos asociados al ticket:

- Tipo de incidencia (`issue_type`) y prioridad (`priority`)
- Descripción del problema introducida por ti
- Identificador de tu cuenta de usuario (para poder responderte)
- Fecha y hora de creación del ticket

Estos datos se utilizan **exclusivamente** para atender tu consulta y darle seguimiento. No se comparten con terceros, no se utilizan para analítica agregada y se conservan mientras el ticket permanezca activo más un período razonable para auditoría interna.

---

## 2. Cómo usamos tu información

Utilizamos tu información exclusivamente para:

- **Proveer el Servicio:** Crear tu cuenta, gestionar tu perfil, inscribirte en torneos, organizar retas casuales, emparejar jugadores y registrar resultados.
- **Funcionalidad de ubicación:** Mostrar torneos y eventos cercanos a tu zona geográfica.
- **Gestión de coaching (Zetio Coach):** Facilitar la relación entre coaches y jugadores vinculados, registrar sesiones de entrenamiento, partidos supervisados y métricas deportivas, y enviar notificaciones operativas relacionadas con entrenamientos y partidos supervisados.
- **Personalización mediante encuesta:** Las respuestas que aportas voluntariamente en la encuesta de onboarding y en las preguntas progresivas se utilizan para adaptar el contenido, sugerencias y funcionalidades que se te presentan dentro de la app (por ejemplo, mostrar torneos o eventos relevantes para tu zona de juego). En ningún caso estos datos se comparten con terceros ni se usan para publicidad.
- **Notificaciones:** Informarte sobre actualizaciones de tus torneos, resultados de partidos, inscripciones, invitaciones de amistad, invitaciones de vínculo coach-jugador y eventos relevantes.
- **Mejora del Servicio:** Resolver problemas técnicos y mejorar la experiencia de usuario mediante analítica interna.
- **Comunicación:** Responder a tickets de soporte y consultas.
- **Feedback:** Permitirte calificar la aplicación mediante el sistema nativo de calificaciones del sistema operativo.

**No utilizamos tu información para:**
- Publicidad dirigida o personalizada
- Venta de datos a terceros
- Elaboración de perfiles con fines comerciales
- Rastreo (tracking) según la definición de Apple App Tracking Transparency (ATT)

---

## 3. Base legal para el tratamiento (GDPR)

Para los usuarios sujetos al **Reglamento General de Protección de Datos (GDPR)** de la Unión Europea o el Espacio Económico Europeo, el tratamiento de tus datos personales se basa en las siguientes bases legales según el Artículo 6 del GDPR:

| Finalidad del tratamiento | Base legal |
|---------------------------|------------|
| Crear y gestionar tu cuenta, inscribirte en torneos, participar en retas y registrar resultados | **Ejecución de contrato** (Art. 6.1.b) |
| Gestionar la relación coach-jugador en Zetio Coach (vínculo, sesiones, métricas) | **Ejecución de contrato** (Art. 6.1.b) — solo tras aceptación explícita del vínculo por ambas partes |
| Enviar notificaciones push sobre tus torneos, retas e invitaciones | **Consentimiento** (Art. 6.1.a) — otorgado al conceder el permiso de notificaciones |
| Analítica interna para mejorar el Servicio | **Interés legítimo** (Art. 6.1.f) — sin afectar a tus derechos fundamentales |
| Encuesta de experiencia y personalización | **Consentimiento** (Art. 6.1.a) — voluntario y revocable en cualquier momento |
| Cumplir obligaciones fiscales y legales | **Obligación legal** (Art. 6.1.c) |

Puedes retirar tu consentimiento en cualquier momento contactándonos en **soporte@zetio.app** o utilizando las opciones de opt-out descritas en esta política, sin que ello afecte a la licitud del tratamiento anterior a su retirada.

**Usuarios en Latinoamérica.** Para usuarios en Latinoamérica (incluyendo México, Argentina, Chile, Colombia y otros países de la región), el tratamiento de datos se basa principalmente en:

- El **consentimiento** del usuario otorgado al registrarse y al aceptar los permisos solicitados por la app
- La **ejecución del servicio** solicitado por el usuario (cuenta, torneos, retas, coaching)
- El **interés legítimo** de Zetio para la mejora del Servicio, siempre subordinado a tus derechos fundamentales

**Usuarios en España y Unión Europea.** El tratamiento se rige adicionalmente por el GDPR conforme a lo descrito en esta sección y por la Ley Orgánica 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD) en España.

**No decisiones automatizadas.** Zetio **no realiza decisiones automatizadas ni elaboración de perfiles con efectos jurídicos o significativos** sobre ti en el sentido del Art. 22 del GDPR.

---

## 4. Servicios de terceros

Zetio utiliza los siguientes servicios de terceros para operar. Cada uno tiene su propia política de privacidad:

| Servicio | Propósito | Datos compartidos | Política de privacidad |
|----------|-----------|-------------------|----------------------|
| **Supabase** | Base de datos, autenticación, almacenamiento y Edge Functions | Datos de cuenta, perfil, torneos, retas, coaching y sesión | [supabase.com/privacy](https://supabase.com/privacy) |
| **Google OAuth** | Autenticación con cuenta Google | Correo, nombre, foto de perfil | [google.com/privacy](https://google.com/privacy) |
| **Firebase Cloud Messaging (Google)** | Notificaciones push en Android | Token del dispositivo | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **Apple Push Notification service (APNs)** | Notificaciones push en iOS | Token del dispositivo | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **OpenStreetMap / Nominatim** | Geocodificación inversa (convertir coordenadas en nombre de ciudad) | Coordenadas de ubicación aproximada | [osmfoundation.org/wiki/Privacy_Policy](https://osmfoundation.org/wiki/Privacy_Policy) |
| **Capacitor In-App Review** | Calificación in-app (iOS SKStoreReviewController / Android Play In-App Reviews API) | Ningún dato personal — el prompt es nativo del sistema operativo | [capacitorjs.com/docs/apis/in-app-review](https://capacitorjs.com/docs/apis/in-app-review) |

Servicios adicionales que se consultan pero **no reciben datos personales:**
- **restcountries.com** — Lista de países (solo lectura)
- **countriesnow.space** — Lista de estados y ciudades (solo lectura)
- **Unsplash** — Imágenes decorativas (solo se cargan imágenes, no se envían datos de usuario)

**Procesadores de pago.** Zetio **no utiliza actualmente ningún procesador de pagos externo** como parte del flujo operativo de la app (ver sección 1.4). Si en el futuro integramos un procesador (por ejemplo, Stripe), esta tabla y esta sección se actualizarán con al menos 30 días de anticipación.

**Rol como encargados del tratamiento.** Todos los proveedores listados en la tabla anterior actúan como **encargados del tratamiento de datos (data processors)** en los términos del Art. 28 del GDPR y los artículos aplicables de la LFPDPPP. Procesan la información únicamente bajo las instrucciones de Zetio y para la prestación del Servicio. Zetio **no vende ni comparte datos personales con terceros para fines comerciales o publicitarios**, ni firma acuerdos de intercambio de datos para marketing cruzado entre aplicaciones.

**Transferencias internacionales.** Cuando los datos se transfieran fuera del Espacio Económico Europeo, se aplicarán las **Cláusulas Contractuales Tipo (SCCs)** aprobadas por la Comisión Europea o garantías equivalentes, según corresponda.

**Firebase Analytics.** Zetio utiliza Firebase Cloud Messaging únicamente para notificaciones push. Firebase Analytics está **desactivado de forma explícita** en la configuración de la app y no recolecta eventos de uso.

**Función de compartir:** La función para compartir torneos, retas, tarjetas de resultados, perfiles y códigos de amigo utiliza el sistema nativo de compartir del dispositivo (`@capacitor/share`) o la Web Share API del navegador. La generación de imágenes para compartir ocurre **100 % en tu dispositivo**; Zetio no envía esas imágenes a ningún servidor propio ni de terceros. La información compartida se entrega directamente por el sistema operativo a la aplicación de destino que tú elijas.

---

## 5. Almacenamiento y seguridad

### 5.1 Dónde almacenamos tus datos

- **Servidor:** Tus datos se almacenan en servidores de Supabase con cifrado en reposo y en tránsito (TLS/SSL).
- **Dispositivo:** Se almacena localmente en tu dispositivo:
  - Tu sesión de autenticación
  - Preferencias de idioma y tema
  - Una caché de tu ubicación aproximada (máximo 24 horas)
  - El módulo seleccionado por última vez
  - Un dato **temporal de verificación pendiente** (tu correo electrónico y la marca de tiempo del registro) mientras confirmas tu cuenta con el código de verificación; se elimina automáticamente al verificar tu cuenta o al cancelar.
  - Estos datos se eliminan al cerrar sesión.
- **Service Worker / PWA:** En la versión web y en la aplicación progresiva (PWA), un Service Worker (Workbox) almacena en caché archivos de la aplicación (JavaScript, CSS, fuentes, imágenes) para el funcionamiento sin conexión y un mejor rendimiento. Esta caché contiene únicamente activos estáticos de la aplicación, **no datos personales**.

### 5.2 Medidas de seguridad

- Las contraseñas se almacenan como hash criptográfico; nunca en texto plano.
- Todas las comunicaciones entre la app y el servidor usan cifrado TLS/SSL.
- La autenticación utiliza el flujo OAuth para máxima seguridad.
- **Row Level Security (RLS):** El acceso a tus datos personales, torneos, retas, métricas deportivas de Zetio Coach, notificaciones y tickets de soporte está restringido a nivel **servidor** mediante políticas de Row Level Security de Supabase. Esto significa que un usuario únicamente puede acceder a los datos a los que tiene permiso explícito (sus propios datos, datos de torneos o retas en los que participa como jugador o como anfitrión, o datos de los jugadores vinculados a él como coach tras la aceptación mutua). Estas políticas se aplican en la base de datos, no en el cliente, lo que impide el acceso cruzado entre usuarios incluso si la aplicación cliente fuera modificada.
- Los tokens de sesión se renuevan periódicamente y se invalidan al cerrar sesión.
- Los registros de depuración (logs) en la **versión de producción** están limitados a información operativa mínima y **no almacenan datos personales identificables** (correos, contraseñas, tokens, contenido de mensajes o ubicación precisa).
- **Notificación de incidentes.** En caso de un incidente que afecte la confidencialidad, integridad o disponibilidad de tus datos, Zetio notificará a la autoridad de protección de datos competente en un plazo máximo de **72 horas** desde su detección, conforme al Art. 33 del GDPR y a la normativa local aplicable. Si el incidente representa un riesgo alto para tus derechos y libertades, te notificaremos también directamente.

### 5.3 Retención de datos

Conservamos tu información mientras mantengas una cuenta activa en Zetio. Si solicitas la eliminación de tu cuenta:

- El **borrado lógico es inmediato** al confirmar la acción: tu cuenta deja de ser accesible y tu información no aparece en ningún flujo activo del Servicio.
- El **borrado físico completo** (incluyendo copias de seguridad y réplicas de disaster recovery) se completa en un plazo máximo de **30 días naturales**.
- Los datos que debamos conservar por obligación legal o fiscal aplicable se almacenarán únicamente por el período mínimo requerido por la legislación correspondiente.

---

## 6. Tus derechos

### 6.1 Derechos ARCO (México — LFPDPPP)

De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México y otras leyes aplicables, tienes derecho a:

- **Acceso:** Solicitar una copia de los datos personales que tenemos sobre ti.
- **Rectificación:** Corregir datos inexactos o incompletos. Puedes actualizar la mayoría de tus datos directamente desde la sección de edición de perfil en la app.
- **Cancelación:** Solicitar la eliminación de tu cuenta y datos personales.
- **Oposición:** Oponerte al tratamiento de tus datos para fines específicos.

Para ejercer tus derechos ARCO, envía un correo a **soporte@zetio.app** con:
- Tu nombre completo
- El correo electrónico asociado a tu cuenta
- Una descripción clara de tu solicitud
- Una copia de identificación oficial (para verificar tu identidad)

La copia de identificación que nos proporciones se utilizará **exclusivamente para verificar tu identidad** y se eliminará de forma segura tras completar la verificación, en un plazo máximo de **30 días**. No se conservará, no se utilizará para ningún otro fin ni se compartirá con terceros.

Responderemos en un plazo máximo de **20 días hábiles** conforme a la ley.

### 6.2 Derechos extendidos (GDPR — Usuarios de la UE/EEE)

Si te encuentras en la Unión Europea o el Espacio Económico Europeo, además de los derechos ARCO, tienes derecho a:

- **Portabilidad:** Solicitar una copia de tus datos en un formato estructurado, de uso común y legible por máquina, para transferirlos a otro responsable del tratamiento.
- **Restricción del tratamiento:** Solicitar que limitemos el uso de tus datos en circunstancias específicas (por ejemplo, mientras se verifica la exactitud de los datos o se evalúa una objeción).
- **Reclamación ante autoridad supervisora:** Tienes derecho a presentar una reclamación ante la autoridad de protección de datos de tu país de la UE/EEE si consideras que el tratamiento de tus datos infringe el GDPR.

### 6.3 Eliminación de cuenta

Puedes eliminar tu cuenta y todos tus datos personales directamente desde la app, sin necesidad de contactar a soporte:

**Cómo eliminar tu cuenta en la app:**
1. Ve a **Ajustes** (icono de engranaje en la barra de navegación)
2. Selecciona **Editar perfil**
3. Desplázate hasta el final de la página
4. Pulsa **Eliminar cuenta** y sigue el proceso de confirmación

Al eliminar tu cuenta se realizan las siguientes acciones de forma inmediata e irreversible:
- Se borrarán tus datos de perfil, historial de partidos, amigos, tokens de push, preferencias, tickets de soporte y respuestas de encuestas.
- Se borrarán tus **métricas deportivas, sesiones de entrenamiento, partidos supervisados, notas del coach, registros internos de pagos de coaching y vínculos coach-jugador** asociados a tu cuenta (tanto si actuabas como coach como si eras jugador vinculado).
- Los resultados de torneos y retas en los que participaste se **anonimizarán** (se elimina la referencia a tu usuario) para mantener la integridad histórica de los torneos y rankings.
- Los datos que debamos conservar por obligación legal aplicable se almacenarán únicamente por el período mínimo requerido por la legislación correspondiente.

Si tienes algún problema para eliminar tu cuenta desde la app, también puedes solicitarlo por correo a **soporte@zetio.app**.

**Importante:** *Ser removido de una reta por el host* (ver sección 1.3) **no es lo mismo que eliminar tu cuenta**. Si el host te remueve de una reta, simplemente dejas de tener acceso a esa reta en particular; tu cuenta de Zetio, tu perfil, tus amigos, tu historial en otros torneos/retas y todos tus demás datos **permanecen intactos**. La eliminación de cuenta descrita en esta sección es una acción que solo tú puedes iniciar desde tus Ajustes.

---

## 7. Menores de edad

Zetio está dirigido a personas de **13 años o más**. No recopilamos intencionadamente información de menores de 13 años. Si eres padre o tutor y crees que un menor de 13 años nos ha proporcionado datos personales, contáctanos a **soporte@zetio.app** y eliminaremos dicha información.

Los usuarios entre 13 y 17 años solo pueden utilizar Zetio con el consentimiento de un padre, madre o tutor legal. Este consentimiento debe ser otorgado fuera de la plataforma y es responsabilidad del usuario y de su tutor. Zetio no verifica de forma independiente la obtención de dicho consentimiento, pero se reserva el derecho de restringir, suspender o eliminar cuentas si detecta uso indebido por menores sin autorización o sin cumplimiento de la edad mínima aplicable en la jurisdicción del usuario (p. ej. 16 años en algunos países de la UE conforme al GDPR Art. 8).

**Menores en Zetio Coach.** El módulo Zetio Coach permite que un coach establezca un vínculo con un jugador menor de edad para registrar sesiones, partidos y métricas deportivas. Cuando el jugador vinculado es menor de edad:

- El **consentimiento explícito del padre, madre o tutor legal** es un requisito indispensable antes de que el jugador acepte la invitación de vínculo y antes de que el coach registre cualquier dato deportivo del menor.
- El coach es **responsable de obtener y conservar evidencia** de dicho consentimiento, así como de informar al tutor sobre qué datos se registrarán y con qué finalidad.
- El padre, madre o tutor legal puede en cualquier momento solicitar el acceso, rectificación o eliminación de los datos del menor escribiendo a **soporte@zetio.app**, y puede solicitar la ruptura del vínculo con el coach desde la propia app a través de la cuenta del menor.

---

## 8. Transferencias internacionales

Tus datos pueden ser procesados en servidores ubicados fuera de México (principalmente, infraestructura de Supabase y los servicios de notificación push de Google/Apple). En todos los casos, estos proveedores mantienen estándares de seguridad equivalentes o superiores a los requeridos por la legislación mexicana y cumplen con certificaciones internacionales de protección de datos (incluyendo, según corresponda, las cláusulas contractuales tipo de la UE para transferencias de datos internacionales).

---

## 9. Cookies y tecnologías similares

Zetio **no utiliza cookies propias de rastreo ni tecnologías de publicidad**. Utilizamos almacenamiento local del dispositivo (localStorage) exclusivamente para:

- Mantener tu sesión activa
- Guardar tus preferencias de idioma y tema (claro/oscuro)
- Cachear tu ubicación para evitar consultas repetidas al GPS
- Recordar tu módulo seleccionado
- Recordar de forma temporal una verificación de cuenta pendiente (tu correo y la hora de registro) para permitirte retomar el ingreso del código; se elimina al completar o cancelar la verificación

Estos datos son estrictamente funcionales, no se comparten con terceros y se eliminan al cerrar sesión.

---

## 10. Notificaciones push

Zetio envía notificaciones push sobre:
- Actualizaciones de torneos y retas en los que participas
- Resultados de partidos
- Confirmaciones de inscripción y de unión a retas
- Solicitudes de amistad recibidas o aceptadas
- Invitaciones de vínculo coach-jugador (y eventos operativos de Zetio Coach como sesiones agendadas)
- Recordatorios de partidos y entrenamientos próximos
- Información relevante sobre tus competencias

Las notificaciones push son **operativas y no publicitarias**. No enviamos mensajes de marketing ni promociones sin tu consentimiento explícito.

Puedes desactivar las notificaciones en cualquier momento desde los ajustes de tu dispositivo. Al desactivarlas, el token de push se marca como inactivo en nuestros servidores.

---

## 11. Analítica y publicidad

- **Analítica propia:** Zetio utiliza un sistema de analítica **interno y propio** para medir el uso del Servicio. Registramos eventos de alto nivel como inicios de sesión, inscripciones a torneos, creación de retas en Zetio Play, partidos completados, invitaciones y aceptaciones de amigos, y eventos de la encuesta de experiencia. Junto a cada evento se almacena el identificador de sesión (anónimo en modo invitado), la plataforma del dispositivo y el código de país derivado de la ubicación aproximada. Estos datos se almacenan en nuestros propios servidores (Supabase) en la tabla `analytics_events`, **no se comparten con ningún tercero**, y se usan exclusivamente para mejorar el Servicio y entender cómo se utiliza. No utilizamos Google Analytics, Firebase Analytics, Mixpanel, Sentry, PostHog ni ninguna plataforma de analítica de terceros. Zetio también puede recopilar datos de uso de forma **agregada y no vinculada a la identidad del usuario**, especialmente en modo invitado. Estos datos no permiten identificarte personalmente y se utilizan exclusivamente para comprender patrones de uso a nivel de plataforma.
- **Publicidad:** Zetio **no muestra publicidad de terceros** ni utiliza SDKs publicitarios (no usamos AdMob, Facebook Ads ni similares). No compartimos datos con redes publicitarias.
- **Rastreo:** Zetio **no rastrea** a sus usuarios según la definición del App Tracking Transparency (ATT) de Apple. Los datos de analítica que recopilamos son de uso estrictamente interno y no se combinan con datos de otras aplicaciones o sitios web.

---

## 12. Derechos de los usuarios de California (CCPA/CPRA)

Si resides en el estado de California (EE.UU.), la Ley de Privacidad del Consumidor de California (CCPA) y la Ley de Derechos de Privacidad de California (CPRA) te otorgan los siguientes derechos adicionales:

**Zetio no vende ni comparte tu información personal** con terceros para fines de publicidad conductual entre contextos.

Categorías de información personal recopilada en los últimos 12 meses:
- **Identificadores:** Correo electrónico, nombre, número de teléfono, identificador de dispositivo
- **Información de perfil:** Fecha de nacimiento, sexo, preferencias deportivas, ciudad/estado
- **Información de ubicación:** Ubicación aproximada (coarse location, no GPS preciso)
- **Información de actividad en internet/app:** Eventos de sesión y uso del Servicio
- **Información profesional/deportiva:** Métricas de rendimiento, historial de entrenamientos, sesiones agendadas, estadísticas de partidos y notas del coach (Zetio Coach, únicamente con vínculo aceptado)
- **Información de inferencia:** Estilo de juego, frecuencia y preferencias (de encuesta voluntaria)

Como residente de California tienes derecho a:
- **Conocer** qué información personal se recopila, usa y comparte.
- **Eliminar** tu información personal (ver sección 6.3 para el proceso de eliminación de cuenta).
- **Corregir** información personal inexacta.
- **Optar por no participar** en la venta o el intercambio de información personal (Zetio **no realiza** dicha venta o intercambio).
- **No ser discriminado** por ejercer cualquiera de estos derechos.

Para ejercer tus derechos CCPA, contacta a **soporte@zetio.app**.

---

## 13. Cambios a esta política

Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando lo hagamos:
- Actualizaremos la fecha de "Última actualización" al inicio de este documento.
- Si los cambios son significativos, te notificaremos a través de la app o por correo electrónico.
- El uso continuado del Servicio después de los cambios constituye tu aceptación de la política actualizada.

---

## 14. Contacto

Si tienes preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad o el tratamiento de tus datos personales, puedes contactarnos en:

- **Email:** soporte@zetio.app
- **Titular:** Diego Diaz
- **Aplicación:** Zetio — plataforma de pádel: torneos estructurados, retas casuales y gestión de coach-jugador
- **Sitio web:** [https://zetio.app](https://zetio.app)

---

## 15. Legislación aplicable

Esta Política de Privacidad se rige principalmente por la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)** de México y su Reglamento.

Para usuarios en otras jurisdicciones, se aplicarán adicionalmente las siguientes leyes en la medida que sean aplicables:

| Región | Ley aplicable | Derechos adicionales |
|--------|---------------|----------------------|
| **Unión Europea / EEE** | GDPR (Reglamento 2016/679) | Portabilidad, restricción del tratamiento, reclamación ante autoridad supervisora (sección 6.2) |
| **Brasil** | LGPD (Lei Geral de Proteção de Dados — Lei nº 13.709/2018) | Derechos equivalentes al GDPR; contacto: soporte@zetio.app |
| **California, EE.UU.** | CCPA / CPRA | Ver sección 12 |
| **Argentina** | Ley 25.326 de Protección de Datos Personales | Derechos de acceso, rectificación, supresión |
| **Colombia** | Ley 1581 de 2012 | Derechos de acceso, corrección, supresión |
| **Demás jurisdicciones** | Leyes locales de protección de datos aplicables | Contactar a soporte@zetio.app para solicitudes específicas |

En caso de conflicto entre legislaciones, se aplicará la normativa que otorgue mayor protección al usuario.

---

---

## 16. Clasificación de datos (Apple App Store y Google Play)

Esta sección alinea la información declarada en los formularios de **Apple Privacy Nutrition Labels** (App Store Connect) y **Google Play Data Safety** con el tratamiento real descrito en esta política.

### 16.1 Datos vinculados a tu identidad (Data Linked to You)

Los siguientes datos se recopilan y **sí** están vinculados a tu cuenta, porque son necesarios para prestar el Servicio:

| Categoría Apple / Google | Datos concretos | Uso |
|--------------------------|-----------------|-----|
| Información de contacto | Correo electrónico, nombre, teléfono | Autenticación, perfil, soporte |
| Identificadores | Identificador de usuario, token de push | Funcionamiento del Servicio, notificaciones |
| Ubicación aproximada | Coordenadas, ciudad, estado | Mostrar torneos cercanos (solo con consentimiento) |
| Datos de usuario | Fecha de nacimiento, sexo, ciudad/club/estilo de juego | Elegibilidad en categorías, personalización |
| Contenido del usuario | Resultados, partidos, notas de coach, tickets de soporte | Funcionalidad deportiva y soporte |
| Uso de la app | Eventos de sesión y uso interno | Analítica propia para mejorar el Servicio |

### 16.2 Datos NO vinculados a tu identidad (Data Not Linked to You)

- Eventos de analítica en **Modo Invitado** (sin cuenta creada)
- Métricas agregadas de uso a nivel de plataforma
- Código de país derivado de la ubicación aproximada a efectos estadísticos

Estos datos **no permiten identificar personalmente al usuario**.

### 16.3 Datos utilizados para rastreo (Tracking)

**Zetio no utiliza datos para rastreo entre aplicaciones o sitios web de terceros** según la definición del App Tracking Transparency (ATT) de Apple ni de Google Play. No integramos SDKs publicitarios, no compartimos identificadores con brokers de datos y no participamos en redes de atribución cruzada.

---

*© 2026 Zetio. Todos los derechos reservados.*
