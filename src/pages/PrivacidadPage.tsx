import LegalLayout from '../components/LegalLayout'
import Seo from '../components/Seo'
import { EMAIL } from '../lib/constants'

export default function PrivacidadPage() {
  return (
    <>
      <Seo
        title="Política de Privacidad"
        description="Conocé cómo Regresa a Ti recolecta, usa y protege tus datos personales."
      />
      <LegalLayout title="Política de Privacidad">
      <p>
        En Regresa a Ti valoramos tu privacidad y nos comprometemos a proteger los datos
        personales que compartís al navegar este sitio o al contactarnos para coordinar una
        sesión. Esta política explica qué información recolectamos, para qué la usamos y
        cuáles son tus derechos al respecto.
      </p>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Qué datos recolectamos</h2>
        <p className="mt-3">
          Recolectamos los datos que vos mismo/a nos proporcionás de forma voluntaria al
          escribirnos por WhatsApp o completar un formulario de contacto, como tu nombre,
          número de teléfono y correo electrónico, y el contenido de tus mensajes.
        </p>
        <p className="mt-3">
          También utilizamos cookies y tecnologías similares (por ejemplo, de Google Ads y
          herramientas de analítica web) que recopilan datos de navegación —como páginas
          visitadas o dispositivo utilizado— de forma anónima o pseudonimizada, con el fin de
          entender cómo se usa el sitio y mostrar publicidad relevante.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Para qué usamos tus datos</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Coordinar y confirmar tus sesiones.</li>
          <li>Responder tus consultas y comunicarnos con vos.</li>
          <li>Mejorar el contenido y funcionamiento del sitio.</li>
          <li>Mostrar publicidad relevante a través de plataformas como Google Ads.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Con quién compartimos tus datos</h2>
        <p className="mt-3">
          No vendemos ni compartimos tus datos personales con terceros con fines comerciales.
          Solo compartimos la información estrictamente necesaria con proveedores de pago
          (billeteras virtuales, Western Union o MoneyGram) para procesar el cobro de tus
          sesiones, y con proveedores tecnológicos que dan soporte al sitio (como hosting,
          Google Analytics o Google Ads), quienes procesan los datos bajo sus propias
          políticas de privacidad.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Tus derechos</h2>
        <p className="mt-3">
          Podés solicitarnos en cualquier momento acceder, rectificar o eliminar tus datos
          personales, así como solicitar que dejemos de utilizarlos, escribiéndonos a{' '}
          <a href={`mailto:${EMAIL}`} className="text-purple underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Cambios a esta política</h2>
        <p className="mt-3">
          Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios
          en nuestras prácticas. Te recomendamos revisarla periódicamente.
        </p>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-plum md:text-4xl">Contacto</h2>
        <p className="mt-3">
          Si tenés dudas sobre esta política, podés escribirnos a{' '}
          <a href={`mailto:${EMAIL}`} className="text-purple underline">
            {EMAIL}
          </a>
          .
        </p>
      </div>
      </LegalLayout>
    </>
  )
}
